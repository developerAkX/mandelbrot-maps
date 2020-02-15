import React, { Fragment, useRef, useEffect, useCallback } from "react";
import _ from 'lodash';
import { Typography, Card, Grid } from "@material-ui/core";

import { addV, useGesture } from "react-use-gesture";
import { scale } from 'vec-la';

import { animated } from "react-spring";

import * as twgl from "twgl.js";

import { fullVertexShader, fullscreenVertexArray } from "../shaders/fullVertexShader";
import smoothMandelbrotShader from "../shaders/smoothMandelbrotShader";
import newSmoothMandelbrotShader, {newSmoothMandelbrotShader as mandelbrotShader} from "../shaders/newSmoothMandelbrotShader";
import WebGLCanvas from "./WebGLCanvas";
// import mShader from "../shaders/smooth_mandelbrot_shader.glsl";

export default function MandelbrotRenderer(props) {

  // variables to hold canvas and webgl information
  const canvasRef = useRef(null);
  const miniCanvasRef = useRef(null);
  
  const gl = useRef(null);
  const miniGl = useRef(null);

  // this multiplier subdivides the screen space into smaller increments
  // to allow for velocity calculations to not immediately decay, due to the
  // otherwise small scale that is being mapped to the screen.
  const screenScaleMultiplier = props.screenmult;

  // temporary bounds to prevent excessive panning
  // eslint-disable-next-line
  const radialBound = 1;
  const relativeRadialBound = radialBound;// / -screenScaleMultiplier;
  const bounds = {
    top:    relativeRadialBound,
    bottom: relativeRadialBound,
    left:   relativeRadialBound,
    right:  relativeRadialBound,
  };


  // read incoming props
  const [{ pos, realPos }, setControlPos] = props.controls.pos;
  const [{ theta, last_pointer_angle }, setControlRot] = props.controls.rot;
  const [{ zoom, last_pointer_dist, minZoom, maxZoom }, setControlZoom] = props.controls.zoom;
  const maxI = props.maxiter;
  const AA = 1;

  const fragShader = newSmoothMandelbrotShader({
    maxI: maxI,
    AA: AA
  });
  const miniFragShader = newSmoothMandelbrotShader({
    maxI: maxI,
    AA: AA, 
    }, {
    stroke: 1, 
    radius: 30,
  });

  // the hook responsible for handling gestures
  const touchBind = useGesture({

    // prevent some browser events such as swipe-based navigation or
    // pinch-based zoom and instead redirect them to this handler
    onDragStart:  ({ event }) => event.preventDefault(),
    onPinchStart: ({ event }) => event.preventDefault(),

    onPinch: ({ offset: [d, a], down, vdva: [vd, va], last, memo = [theta.getValue(), last_pointer_angle.getValue(), zoom.getValue(), last_pointer_dist.getValue()] }) => {
      // alert(mx, my)
      // let [theta, lpa] = memo
      let [t, lpa, z, lpd] = memo;
      console.log(d);
      let d_rel = d / 250;
      let curr_zoom = zoom.getValue();

      setControlZoom({
        zoom: _.clamp(z + (d_rel - lpd) * Math.sign(curr_zoom) * Math.abs(curr_zoom ** 0.9), minZoom.getValue(), maxZoom.getValue()),
        last_pointer_dist: d_rel,

        immediate: down,
        // config: { velocity: vd, decay: true }
      });

      setControlRot({
        theta: t + (a - lpa),
        last_pointer_angle: a,

        immediate: down,
        // config: { velocity: va, decay: true }
      });

      return memo;
    },

    onPinchEnd: ({ vdva: [vd, va] }) => {
      setControlRot({
        // set theta so it's remembered next time
        theta: va,

        config: { velocity: va, decay: true }
      });
    },

    onDrag: ({ down, movement, velocity, direction, memo = pos.getValue() }) => {

      // change according to this formula:
      // move (x, y) in the opposite direction of drag (pan with cursor)
      // divide by canvas size to scale appropriately
      // multiply by 2 to correct scaling on viewport
      // use screen multiplier for more granularity
      let realZoom = gl.current.canvas.height * zoom.getValue() * screenScaleMultiplier;
      
      let plotMovement = scale(movement, -2/realZoom);

      let relMove = [plotMovement[0], -plotMovement[1]];
      let relDir  = [direction[0], -direction[1]];

      setControlPos({
        pos: addV(memo, relMove),                    // add the displacement to the starting position
        immediate: down,                                  // immediately apply if the gesture is active
        config: { 
          velocity: scale(relDir, -velocity/realZoom),  // set the velocity (gesture momentum)
          decay: true,
        },
      });

      return memo;
    },

  }, { 
    event: { passive: false, capture: false }, 
    domTarget: canvasRef,
    // The config object passed to useGesture has drag, wheel, scroll, pinch and move keys
    // for specific gesture options. See here for more details.
    // drag: {
    //   bounds,
    //   rubberband: true,
    // }
  });

  useEffect(touchBind, [touchBind]);  


  return (
    <div className="renderer">
      <WebGLCanvas 
        id="mandelbrot"
        fragShader={fragShader}
        touchBind={touchBind}
        u={{
          zoom: zoom,
          pos: pos,
          maxI: maxI,
          screenScaleMultiplier: screenScaleMultiplier,
        }}
        ref={canvasRef}
        glRef={gl}
      />
      <div style={{
        position: "absolute",
        zIndex: 2,
        left: 0,
        bottom: 0,
        margin: 20,
        height: 150,
        width: 150,
        borderRadius: ".5em",
        overflow: "hidden"
      }}>
        <WebGLCanvas 
          id="mini-mandelbrot"
          fragShader={miniFragShader}
          // touchBind={touchBind}
          u={{
            zoom: zoom,
            pos: pos,
            maxI: maxI,
            screenScaleMultiplier: screenScaleMultiplier,
          }}
          ref={miniCanvasRef}
          glRef={miniGl}
          
          mini={true}
          variableOpacity={true}
        />
      </div>
    </div>
  )


}