(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(48)},39:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),c=(n(39),n(5)),l=(n(40),n(69)),u=n(70),s=n(72),m=n(49),f=n(66),v=n(50);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=o.a.createElement("path",{d:"M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"}),p=function(e){var t=e.svgRef,n=h(e,["svgRef"]);return o.a.createElement("svg",d({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},n),g)},b=o.a.forwardRef(function(e,t){return o.a.createElement(p,d({svgRef:t},e))});n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=o.a.createElement("path",{d:"M0 12v1h23v-1h-23z"}),x=function(e){var t=e.svgRef,n=O(e,["svgRef"]);return o.a.createElement("svg",y({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},n),j)},E=o.a.forwardRef(function(e,t){return o.a.createElement(x,y({svgRef:t},e))}),w=(n.p,n(30));function z(e){var t=e.children,n=Object(w.a)(e,["children"]);return o.a.createElement(f.a,Object.assign({style:{backgroundColor:"transparent",boxShadow:"none"}},n),t)}var _=n(11),R=n(14),C=n(19),V=n.n(C);function k(e){var t=Object(c.a)(e.controller,2),n=t[0],a=n.zoom,r=n.minZoom,i=n.maxZoom,l=t[1],u=function(e){var t=Math.sign(e)*(.1*a.getValue()+1);l({zoom:Object(C.clamp)(a.getValue()+t,r.getValue(),i.getValue())})};return o.a.createElement("div",{className:"Control",style:{width:70,display:"flex",zIndex:2}},o.a.createElement(m.a,{style:{borderRadius:"5em",maxHeight:240,margin:"auto",display:"flex",flexDirection:"column-reverse",justifyContent:"space-between"}},o.a.createElement(z,{onClick:function(e){e.preventDefault(),u(-1)}},o.a.createElement(E,null)),o.a.createElement("div",{style:{height:70,position:"relative"}},o.a.createElement(I,{diameter:70,zoom:a,zoomControl:l,minZoom:r,maxZoom:i})),o.a.createElement(z,{onClick:function(e){e.preventDefault(),u(1)}},o.a.createElement(b,null))))}function I(e){var t=Object(_.b)(function(){return{y:0,config:{friction:30,tension:400}}}),n=Object(c.a)(t,2),r=n[0].y,i=n[1],l=[e.zoom,e.zoomControl],u=l[0],s=l[1],m=Object(a.useState)(!1),d=Object(c.a)(m,2),h=d[0],g=d[1],p=Object(a.useState)(1),b=Object(c.a)(p,2),y=b[0],O=b[1],j=o.a.useRef(null);!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e}),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){var t=u.getValue(),n=Object(C.clamp)(t+6e-5*Math.pow(t,.8)*y,e.minZoom.getValue(),e.maxZoom.getValue());s({zoom:n}),O(1.02*y)},h?100:null);var x=Object(R.b)(function(e){var t=e.down,n=Object(c.a)(e.movement,2),a=(n[0],n[1]),o=e.event,r=e.first,l=e.last;!r&&!l&&o.preventDefault(),g(t);var u=Object(C.clamp)(a,-80,80);O(t?-Math.sign(u)*Math.pow(Math.abs(u/8),4):0),i({y:t?u:0})},{event:{passive:!1,capture:!1},domTarget:j});return o.a.useEffect(x,[x]),o.a.createElement(_.a.div,{ref:j,style:{transform:r.interpolate(function(e){return"translateY(".concat(e,"px)")}),borderRadius:"50rem",width:e.diameter,height:e.diameter,marginLeft:-e.diameter/2,marginTop:-e.diameter/2,top:"50%",left:"50%",position:"absolute",zIndex:1}},o.a.createElement(f.a,{onClick:function(e){0===r.getValue()&&s({zoom:1})},style:{backgroundColor:"#2196f3",width:e.diameter,height:e.diameter}},o.a.createElement(v.a,{style:{color:"#fff"}},o.a.createElement(_.a.span,null,u.interpolate(function(e){return e.toPrecision(6)})))))}var S=n(71);function M(e){var t=Object(c.a)(e.maxiter,2),n=t[0],a=t[1];return o.a.createElement(S.a,Object.assign({defaultValue:n,valueLabelDisplay:"on",step:1,min:1,max:300,style:{width:200,margin:30},onChange:function(e,t){return a(t)}},e))}function P(e){var t=Object(c.a)(e.controller,2),n=t[0],a=n.theta,r=n.itheta,i=t[1],l=function(e){return(e%360+360)%360},u=function(e){return 360*e/(2*Math.PI)},s={x:0,y:0,width:0,height:0},d=Object(R.b)(function(e){var t=Object(c.a)(e.xy,2),n=t[0],o=t[1],m=Object(c.a)(e.initial,2),f=m[0],v=m[1],d=e.first,h=e.memo,g=void 0===h?a.getValue():h,p=s.x+s.width/2,b=s.y+s.height/2;if(d)return i({theta:g,itheta:u(Math.atan2(-(f-p),v-b))}),g;var y=u(Math.atan2(-(n-p),o-b));return i({theta:g+l(y-r.getValue()),immediate:!0}),g});return o.a.createElement("div",Object.assign({style:{width:160,height:160,display:"flex",position:"relative",zIndex:2}},e),o.a.createElement(m.a,Object.assign({},d(),{ref:function(e){if(e){var t=e.getBoundingClientRect();s={x:t.x,y:t.y,width:t.width,height:t.height}}},style:{borderRadius:"50rem",width:160,height:160}}),o.a.createElement(_.a.div,{style:{transform:a.interpolate(function(e){return"rotate(".concat(e,"deg)")}),width:"100%",height:"100%",display:"flex",justifyContent:"center"}},o.a.createElement(v.a,{style:{userSelect:"none"}},"(N)"))),o.a.createElement(f.a,{style:{width:70,height:70,borderRadius:"50rem",backgroundColor:"#2196f3",display:"flex",position:"absolute",left:"50%",top:"50%",margin:-35}},o.a.createElement(v.a,{style:{color:"#fff",margin:"auto"}},o.a.createElement(_.a.span,null,a.interpolate(function(e){return l(e).toFixed(0)})),"\xb0")))}n(47);var F=n(68),D=n(29),Z=n(16),B="\nattribute vec4 position;\n\nvoid main() {\n  gl_Position = position;\n}\n",q="\n// Created by inigo quilez - iq/2013\n// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.\n\n\n// See here for more information on smooth iteration count:\n//\n// http://iquilezles.org/www/articles/mset_smooth/mset_smooth.htm\n\nprecision highp float;\n\n// need to know the resolution of the canvas\nuniform vec2 resolution;\n\n// zoom, pos should be passed as uniforms\nuniform int   u_maxI;\nuniform vec2  u_pos;\nuniform float u_zoom;\nuniform float u_theta;\n\nvoid main() {    \n    vec3 col = vec3(0.0);\n\n    // vec2 p = (-resolution.xy + 2.0*vec2(gl_FragCoord.x, -gl_FragCoord.y))/resolution.y;\n    vec2 p = (-resolution.xy + 2.0*gl_FragCoord.xy)/resolution.y;\n    \n    // float theta = 0.;\n    \n    // float zoo = 1.;\n    float coa = cos(u_theta);\n    float sia = sin(u_theta);\n    \n//    zoo = pow(zoo,8.0);\n    \n    vec2 xy = vec2(p.x*coa-p.y*sia, p.x*sia+p.y*coa);\n    vec2 c = u_pos + xy/u_zoom;\n    \n    \n\n    const float B = 256.0;\n    float l = 0.0;\n    vec2 z  = vec2(0.0);\n    for( int i=0; i<200; i++ )\n    {\n        // z = z*z + c\t\t\n        z = vec2( z.x*z.x - z.y*z.y, 2.0*z.x*z.y ) + c;\n\n        if( dot(z,z)>(B*B) ) break;\n\n        l += 1.0;\n    }\n    \n    // float al = smoothstep( -0.1, 0.0, 1.0);\n    float sl = l - log2(log2(dot(z,z))) + 4.0; \n    l = sl;\n    col += 0.5 + 0.5*cos( 3.0 +  l*0.15 + vec3(0.0,0.6,1.0));\n\n    // Output to screen\n    gl_FragColor = vec4( col, 1.0 );\n}\n";function A(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useRef)(null),i=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useRef)(null),s=Object(a.useState)(null),m=Object(c.a)(s,2),f=(m[0],m[1],{position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]}),d=e.maxiter,h=Object(c.a)(e.pos,2),g=h[0].pos,p=h[1],b=Object(c.a)(e.rot,2),y=b[0],O=y.theta,j=y.last_pointer_angle,x=b[1],E=Object(c.a)(e.zoom,2),w=E[0],z=w.zoom,C=w.last_pointer_dist,k=w.minZoom,I=w.maxZoom,S=E[1],M=Object(a.useState)(0),P=Object(c.a)(M,2),A=(P[0],P[1],Object(R.c)({onPinchStart:function(e){return e.event.preventDefault()},onPinch:function(e){var t=Object(c.a)(e.offset,2),n=t[0],a=t[1],o=e.down,r=Object(c.a)(e.vdva,2),i=(r[0],r[1],e.last,e.memo),l=void 0===i?[O.getValue(),j.getValue(),z.getValue(),C.getValue()]:i,u=Object(c.a)(l,4),s=u[0],m=u[1],f=u[2],v=u[3];console.log(n);var d=n/250,h=z.getValue();return S({zoom:V.a.clamp(f+(d-v)*Math.sign(h)*Math.abs(Math.pow(h,.9)),k.getValue(),I.getValue()),last_pointer_dist:d,immediate:o}),x({theta:s+(a-m),last_pointer_angle:a,immediate:o}),l},onPinchEnd:function(e){var t=Object(c.a)(e.vdva,2),n=(t[0],t[1]);x({theta:n,config:{velocity:n,decay:!0}})},onDragStart:function(e){return e.event.preventDefault()},onDrag:function(e){var t=e.down,a=e.movement,o=e.velocity,r=e.direction,i=e.memo,c=void 0===i?g.getValue():i,l=n.current.canvas.height/2*z.getValue(),u=[a[0],-1*a[1]].map(function(e){return-e/l});return p({pos:Object(R.a)(u,c),immediate:t,config:{velocity:Object(D.scale)(r,-o/l),decay:!0}}),c},onDragEnd:function(){}},{event:{passive:!1,capture:!1},domTarget:l}));Object(a.useEffect)(A,[A]);var L=function e(a){Object(Z.d)(n.current.canvas),n.current.viewport(0,0,n.current.canvas.width,n.current.canvas.height);var o={resolution:[n.current.canvas.width,n.current.canvas.height],u_zoom:z.getValue(),u_pos:g.getValue(),u_maxI:d};n.current.useProgram(i.current.program),Object(Z.e)(n.current,i.current,r.current),Object(Z.f)(i.current,o),Object(Z.c)(n.current,r.current),t.current=requestAnimationFrame(e)};return Object(a.useEffect)(function(){return n.current=u.current.getContext("webgl"),console.log("got canvas context: ".concat(n.current)),i.current=Object(Z.b)(n.current,[B,q]),r.current=Object(Z.a)(n.current,f),t.current=requestAnimationFrame(L),function(){return cancelAnimationFrame(t.current)}},[]),o.a.createElement(a.Fragment,null,o.a.createElement("div",{style:{position:"absolute",zIndex:1},ref:l},o.a.createElement("canvas",{id:"mandelbrot",style:{width:"100vw",height:"100vh",zIndex:1},ref:u}),o.a.createElement(_.a.div,{style:{display:"none",width:20,height:20,backgroundColor:"red",position:"absolute",top:290,left:290}})),o.a.createElement("div",{style:{position:"absolute",bottom:0}},o.a.createElement(F.a,null,o.a.createElement(v.a,{style:{zIndex:1}},"theta: ",o.a.createElement(_.a.span,null,O.interpolate(function(e){return e.toFixed(3)})),", zoom: ",o.a.createElement(_.a.span,null,z.interpolate(function(e){return e.toFixed(3)})),","))))}var L=function(){var e={mass:1,tension:100,friction:200},t=Object(a.useState)(100),n=Object(c.a)(t,2),r=n[0],i=(n[1],Object(a.useState)(!1)),m=Object(c.a)(i,2),f=m[0],v=m[1],d=Object(_.b)(function(){return{pos:[.45193823302480385,-.3963913556925211],onRest:function(){},config:e}}),h=Object(_.b)(function(){return{theta:0,last_pointer_angle:0,itheta:0,config:e}}),g=Object(_.b)(function(){return{zoom:1.7,last_pointer_dist:0,minZoom:.5,maxZoom:1e5,config:{mass:1,tension:600,friction:50}}});return o.a.createElement(a.Fragment,null,o.a.createElement(A,{style:{position:"absolute",zIndex:0},pos:d,rot:h,zoom:g,maxiter:r}),o.a.createElement(l.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"flex-end"},o.a.createElement(k,{controller:g}),o.a.createElement(P,{className:"Control",controller:h,style:{display:"none"}}),o.a.createElement(M,{maxiter:t,style:{display:"none"}}),o.a.createElement(u.a,{control:o.a.createElement(s.a,{onChange:function(){return v(!f)}}),label:"use GL",style:{display:"none"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.3c28bd79.chunk.js.map