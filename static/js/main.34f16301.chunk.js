(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(46)},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),l=(n(37),n(4)),c=(n(38),n(63)),u=n(47),s=n(64),m=n(61);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=o.a.createElement("path",{d:"M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"}),h=function(e){var t=e.svgRef,n=d(e,["svgRef"]);return o.a.createElement("svg",f({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},n),v)},g=o.a.forwardRef(function(e,t){return o.a.createElement(h,f({svgRef:t},e))});n.p;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=o.a.createElement("path",{d:"M0 12v1h23v-1h-23z"}),O=function(e){var t=e.svgRef,n=b(e,["svgRef"]);return o.a.createElement("svg",p({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},n),y)},j=o.a.forwardRef(function(e,t){return o.a.createElement(O,p({svgRef:t},e))}),x=(n.p,n(29));function E(e){var t=e.children,n=Object(x.a)(e,["children"]);return o.a.createElement(s.a,Object.assign({style:{backgroundColor:"transparent",boxShadow:"none"}},n),t)}var w=n(7),z=n(14),_=n(19),C=n.n(_);function R(e){var t=Object(l.a)(e.controller,2),n=t[0],a=n.zoom,r=n.minZoom,i=n.maxZoom,c=t[1],s=function(e){var t=Math.sign(e)*(.1*a.getValue()+1);c({zoom:Object(_.clamp)(a.getValue()+t,r.getValue(),i.getValue())})};return o.a.createElement("div",{className:"Control",style:{width:70,display:"flex",zIndex:2}},o.a.createElement(u.a,{style:{borderRadius:"5em",maxHeight:240,margin:"auto",display:"flex",flexDirection:"column-reverse",justifyContent:"space-between"}},o.a.createElement(E,{onClick:function(e){e.preventDefault(),s(-1)}},o.a.createElement(j,null)),o.a.createElement("div",{style:{height:70,position:"relative"}},o.a.createElement(V,{diameter:70,zoom:a,zoomControl:c,minZoom:r,maxZoom:i})),o.a.createElement(E,{onClick:function(e){e.preventDefault(),s(1)}},o.a.createElement(g,null))))}function V(e){var t=Object(w.b)(function(){return{y:0,config:{friction:30,tension:400}}}),n=Object(l.a)(t,2),r=n[0].y,i=n[1],c=[e.zoom,e.zoomControl],u=c[0],f=c[1],d=Object(a.useState)(!1),v=Object(l.a)(d,2),h=v[0],g=v[1],p=Object(a.useState)(1),b=Object(l.a)(p,2),y=b[0],O=b[1],j=o.a.useRef(null);!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e}),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){var t=u.getValue(),n=Object(_.clamp)(t+6e-5*Math.pow(t,.8)*y,e.minZoom.getValue(),e.maxZoom.getValue());f({zoom:n}),O(1.02*y)},h?100:null);var x=Object(z.b)(function(e){var t=e.down,n=Object(l.a)(e.movement,2),a=(n[0],n[1]),o=e.event,r=e.first,c=e.last;!r&&!c&&o.preventDefault(),g(t);var u=Object(_.clamp)(a,-80,80);O(t?-Math.sign(u)*Math.pow(Math.abs(u/8),4):0),i({y:t?u:0})},{event:{passive:!1,capture:!1},domTarget:j});return o.a.useEffect(x,[x]),o.a.createElement(w.a.div,{ref:j,style:{transform:r.interpolate(function(e){return"translateY(".concat(e,"px)")}),borderRadius:"50rem",width:e.diameter,height:e.diameter,marginLeft:-e.diameter/2,marginTop:-e.diameter/2,top:"50%",left:"50%",position:"absolute",zIndex:1}},o.a.createElement(s.a,{onClick:function(e){0===r.getValue()&&f({zoom:1})},style:{backgroundColor:"#2196f3",width:e.diameter,height:e.diameter}},o.a.createElement(m.a,{style:{color:"#fff"}},o.a.createElement(w.a.span,null,u.interpolate(function(e){return e.toPrecision(6)})))))}var k=n(65);function I(e){var t=Object(l.a)(e.maxiter,2),n=t[0],a=t[1];return o.a.createElement(k.a,Object.assign({defaultValue:n,valueLabelDisplay:"on",step:1,min:1,max:300,style:{width:200,margin:30},onChange:function(e,t){return a(t)}},e))}function S(e){var t=Object(l.a)(e.controller,2),n=t[0],a=n.theta,r=n.itheta,i=t[1],c=function(e){return(e%360+360)%360},f=function(e){return 360*e/(2*Math.PI)},d={x:0,y:0,width:0,height:0},v=Object(z.b)(function(e){var t=Object(l.a)(e.xy,2),n=t[0],o=t[1],u=Object(l.a)(e.initial,2),s=u[0],m=u[1],v=e.first,h=e.memo,g=void 0===h?a.getValue():h,p=d.x+d.width/2,b=d.y+d.height/2;if(v)return i({theta:g,itheta:f(Math.atan2(-(s-p),m-b))}),g;var y=f(Math.atan2(-(n-p),o-b));return i({theta:g+c(y-r.getValue()),immediate:!0}),g});return o.a.createElement("div",Object.assign({style:{width:160,height:160,display:"flex",position:"relative",zIndex:2}},e),o.a.createElement(u.a,Object.assign({},v(),{ref:function(e){if(e){var t=e.getBoundingClientRect();d={x:t.x,y:t.y,width:t.width,height:t.height}}},style:{borderRadius:"50rem",width:160,height:160}}),o.a.createElement(w.a.div,{style:{transform:a.interpolate(function(e){return"rotate(".concat(e,"deg)")}),width:"100%",height:"100%",display:"flex",justifyContent:"center"}},o.a.createElement(m.a,{style:{userSelect:"none"}},"(N)"))),o.a.createElement(s.a,{style:{width:70,height:70,borderRadius:"50rem",backgroundColor:"#2196f3",display:"flex",position:"absolute",left:"50%",top:"50%",margin:-35}},o.a.createElement(m.a,{style:{color:"#fff",margin:"auto"}},o.a.createElement(w.a.span,null,a.interpolate(function(e){return c(e).toFixed(0)})),"\xb0")))}n(45);var F=n(62),M=n(24),P=n(16),Z="\nattribute vec4 position;\n\nvoid main() {\n  gl_Position = position;\n}\n",D="\n// Created by inigo quilez - iq/2013\n// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.\n\n\n// See here for more information on smooth iteration count:\n//\n// http://iquilezles.org/www/articles/mset_smooth/mset_smooth.htm\n\n// set high float precision (lower than this may break colours on mobile)\nprecision highp float;\n\n// need to know the resolution of the canvas\nuniform vec2 resolution;\n\n// properties should be passed as uniforms\nuniform int   u_maxI;  \nuniform vec2  u_pos;\nuniform float u_zoom;\nuniform float u_theta;\n\nvoid main() {    \n    // set the initial colour to black\n    vec3 col = vec3(0.0);\n\n    // vec2 p = (-resolution.xy + 2.0*vec2(gl_FragCoord.x, -gl_FragCoord.y))/resolution.y;\n    // adjust pixels to range from [-1, 1]\n    vec2 p = (2.0*gl_FragCoord.xy - resolution.xy)/resolution.y;\n    \n    // float theta = 0.7;\n    \n    // calculate sin/cos (tbd)\n    // float coa = cos(theta);\n    // float sia = sin(theta);\n    // float coa = cos(u_theta);\n    // float sia = sin(u_theta);    \n    \n    // use to rotate viewer (tbd)\n    // vec2 xy = vec2(p.x*coa-p.y*sia, p.x*sia+p.y*coa);\n    vec2 xy = p;\n    vec2 c = u_pos + xy/u_zoom;\n    // vec2 c = 2. * u_pos / (resolution.y * u_zoom) + xy/u_zoom;\n    // vec2 c = (2. * u_pos/(resolution.y * u_zoom)) + xy/(u_zoom);\n\n    // smoothing factor (original = 256.0)\n    const float B = 32.0;\n    float l = 0.0;\n    vec2 z  = vec2(0.0);\n    for( int i=0; i<200; i++ )\n    {\n        // z = z*z + c\t\t\n        z = vec2( z.x*z.x - z.y*z.y, 2.0*z.x*z.y ) + c;\n\n        if( dot(z,z)>(B*B) ) break;\n\n        l += 1.0;\n    }\n    \n    // float al = smoothstep( -0.1, 0.0, 1.0);\n    l = l - log2(log2(dot(z,z))) + 4.0; \n    // float sl = l - log2(log2(dot(z,z))) + 4.0; \n    // l = sl;\n    //    a 0.405 multiplier here  vvvv  also looks good\n    col += 0.5 + 0.5*cos( 3.0 +  l*0.15 + vec3(0.0, 0.6, 1.0));\n\n    // Output to screen\n    gl_FragColor = vec4( col, 1.0 );\n}\n";function B(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useRef)(null),i=Object(a.useRef)(null),c=Object(a.useRef)(null),u=Object(a.useRef)(null),s={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]},f=Object(l.a)(e.pos,2),d=f[0].pos,v=f[1],h=Object(l.a)(e.rot,2),g=h[0],p=g.theta,b=g.last_pointer_angle,y=h[1],O=Object(l.a)(e.zoom,2),j=O[0],x=j.zoom,E=j.last_pointer_dist,_=j.minZoom,R=j.maxZoom,V=O[1],k=e.maxiter,I=Object(z.c)({onDragStart:function(e){return e.event.preventDefault()},onPinchStart:function(e){return e.event.preventDefault()},onPinch:function(e){var t=Object(l.a)(e.offset,2),n=t[0],a=t[1],o=e.down,r=Object(l.a)(e.vdva,2),i=(r[0],r[1],e.last,e.memo),c=void 0===i?[p.getValue(),b.getValue(),x.getValue(),E.getValue()]:i,u=Object(l.a)(c,4),s=u[0],m=u[1],f=u[2],d=u[3];console.log(n);var v=n/250,h=x.getValue();return V({zoom:C.a.clamp(f+(v-d)*Math.sign(h)*Math.abs(Math.pow(h,.9)),_.getValue(),R.getValue()),last_pointer_dist:v,immediate:o}),y({theta:s+(a-m),last_pointer_angle:a,immediate:o}),c},onPinchEnd:function(e){var t=Object(l.a)(e.vdva,2),n=(t[0],t[1]);y({theta:n,config:{velocity:n,decay:!0}})},onDrag:function(e){var t=e.down,a=e.movement,o=e.velocity,r=e.direction,i=e.memo,l=void 0===i?d.getValue():i,c=n.current.canvas.height*x.getValue()*-1e-7,u=Object(M.scale)(a,2/c);return v({pos:Object(z.a)(l,u),immediate:t,config:{velocity:Object(M.scale)(r,o/c),decay:!0}}),l}},{event:{passive:!1,capture:!1},domTarget:c});Object(a.useEffect)(I,[I]);var S=Object(a.useCallback)(function(e){P.d(n.current.canvas),n.current.viewport(0,0,n.current.canvas.width,n.current.canvas.height);var a={resolution:[n.current.canvas.width,n.current.canvas.height],u_zoom:x.getValue(),u_pos:Object(M.scale)(d.getValue(),1e-7),u_maxI:k};n.current.useProgram(i.current.program),P.e(n.current,i.current,r.current),P.f(i.current,a),P.c(n.current,r.current),t.current=requestAnimationFrame(S)},[k,d,-1e-7,x]);return Object(a.useEffect)(function(){return n.current=u.current.getContext("webgl"),console.log("got canvas context: ".concat(n.current)),i.current=P.b(n.current,[Z,D]),r.current=P.a(n.current,s),t.current=requestAnimationFrame(S),function(){return cancelAnimationFrame(t.current)}},[s,S]),o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"fullSize",style:{position:"absolute",zIndex:1},ref:c},o.a.createElement(F.a,{style:{width:"auto",position:"absolute",zIndex:2,right:0,top:0,margin:20,padding:5}},o.a.createElement(m.a,{align:"right"},o.a.createElement(w.a.span,null,d.interpolate(function(e,t){return(-1e-7*-e).toFixed(7)}))," : x",o.a.createElement("br",null),o.a.createElement(w.a.span,null,d.interpolate(function(e,t){return(-1e-7*t).toFixed(7)}))," : y")),o.a.createElement("canvas",{id:"mandelbrot",className:"fullSize",style:{zIndex:1,transform:"rotateX(180deg)"},ref:u}),o.a.createElement(w.a.div,{style:{display:"none",width:20,height:20,backgroundColor:"red",position:"absolute",top:290,left:290}})),o.a.createElement("div",{style:{position:"absolute",bottom:0}},o.a.createElement(F.a,null,o.a.createElement(m.a,{style:{zIndex:1}},"theta: ",o.a.createElement(w.a.span,null,p.interpolate(function(e){return e.toFixed(3)})),", zoom: ",o.a.createElement(w.a.span,null,x.interpolate(function(e){return e.toFixed(3)})),","))))}var N=function(){var e={mass:1,tension:100,friction:200},t=Object(a.useState)(100),n=Object(l.a)(t,2),r=n[0],i=(n[1],Object(w.b)(function(){return{pos:[0,0],config:e}})),u=Object(w.b)(function(){return{theta:0,last_pointer_angle:0,itheta:0,config:e}}),s=Object(w.b)(function(){return{zoom:1,last_pointer_dist:0,minZoom:.5,maxZoom:1e5,config:{mass:1,tension:600,friction:50}}});return o.a.createElement(a.Fragment,null,o.a.createElement(B,{style:{position:"absolute",zIndex:0},pos:i,rot:u,zoom:s,maxiter:r}),o.a.createElement(c.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"flex-end"},o.a.createElement(R,{controller:s}),o.a.createElement(S,{className:"Control",controller:u,style:{display:"none"}}),o.a.createElement(I,{maxiter:t,style:{display:"none"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.34f16301.chunk.js.map