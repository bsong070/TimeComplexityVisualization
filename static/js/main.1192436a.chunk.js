(this.webpackJsonptimecomplexityvisualizer=this.webpackJsonptimecomplexityvisualizer||[]).push([[0],{10:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var o=e(1),r=e.n(o),i=e(4),u=e.n(i),c=(e(9),e(10),e(2)),a="#fc5c65",s="#4ecdc4",l="#6e6969",h="orange";var d=function t(n,e,o,r){if(n.length<=1)return n;var i=Math.floor(n.length/2);if(n[i]<e)o.push(i+r),n.splice(0,i),r+=i;else if(n[i]===e)return o.push(i+r),o;t(n,e,o,r)},f=function(t){var n=t[t.length-1],e=t.map((function(t){return t})),o=[];return d(e,n,o,0),o};var g=function(t){for(var n=[],e=0;e<t.length;e++)for(var o=e,r=e;r<t.length;r++)if(n.push([o,r]),t[r]<t[o]){n.push([e,t[r]]),n.push([o,r]),n.push([r,t[e]]);var i=t[e];t[e]=t[r],t[r]=i}else n.push([e,t[o]]),n.push([o,r]),n.push([e,t[o]]);return n};var p=function(t){t.sort((function(t,n){return t-n}))},b=function(t){return p(t),t};var m=function t(n,e,o,r,i){if(e!==o){var u=Math.floor((e+o)/2);t(r,e,u,n,i),t(r,u+1,o,n,i),j(n,e,u,o,r,i)}},j=function(t,n,e,o,r,i){for(var u=n,c=n,a=e+1;c<=e&&a<=o;)i.push([c,a]),i.push([c,a]),r[c]<=r[a]?(i.push([u,r[c]]),t[u++]=r[c++]):(i.push([u,r[a]]),t[u++]=r[a++]);for(;c<=e;)i.push([c,c]),i.push([c,c]),i.push([u,r[c]]),t[u++]=r[c++];for(;a<=o;)i.push([a,a]),i.push([a,a]),i.push([u,r[a]]),t[u++]=r[a++]},v=function(t){var n=[];if(t.length<2)return t;var e=t.map((function(t){return t}));return m(t,0,t.length-1,e,n),n},y=e(0);var x=function(t){var n=Object(o.useState)([]),e=Object(c.a)(n,2),r=e[0],i=e[1];Object(o.useEffect)((function(){p()}),[]);var u=document.getElementsByClassName("bars"),d=[],p=function(){for(var t=[],n=0;n<100;n++)t.push(Math.floor(450*Math.random()+50)),m();d.forEach((function(t){return clearTimeout(t)})),i(t)},m=function(){for(var t=0;t<u.length;t++)u[t].style.backgroundColor=l},j=function(){!function(t,n,e,o,r){for(var i=r,l=function(r){if(r%t===n){var l=Object(c.a)(i[r],2),h=l[0],f=l[1],g=r%e===o?a:s;d.push(setTimeout((function(){u[h].style.backgroundColor=g,u[f].style.backgroundColor=g}),3*r))}else d.push(setTimeout((function(){var t=Object(c.a)(i[r],2),n=t[0],e=t[1];u[n].style.height="".concat(e,"px")}),3*r))},h=0;h<i.length;h++)l(h)}(2,0,4,0,g(r))},x={bar:{backgroundColor:a,display:"inline-block",margin:"0 1px",width:"1.5px"},container:{margin:"auto"},findMaxButton:{backgroundColor:s,borderRadius:0,justifyContent:"center",alignItems:"center",padding:20,width:"20%"},getMaxLogNButton:{backgroundColor:s,borderRadius:0,justifyContent:"center",alignItems:"center",padding:20,width:"20%"},mergeSortButton:{backgroundColor:s,borderRadius:0,justifyContent:"center",alignItems:"center",padding:20,width:"20%"},resetButton:{backgroundColor:h,borderRadius:0,justifyContent:"center",alignItems:"center",padding:20,width:"20%"},swapSortButton:{backgroundColor:s,borderRadius:0,justifyContent:"center",alignItems:"center",padding:20,width:"20%"}};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{style:x.resetButton,onClick:function(){return p()},children:"Reset Array"}),Object(y.jsx)("button",{style:x.getMaxLogNButton,onClick:function(){return function(){for(var t=b(r),n=t[t.length-1],e=0;e<t.length;e++)u[e].style.height="".concat(t[e],"px");for(var o=f(t),i=function(e){d.push(setTimeout((function(){u[o[e]].style.backgroundColor=s}),3*e)),t[o[e]]===n&&d.push(setTimeout((function(){u[o[e]].style.backgroundColor=a}),3*o.length))},c=0;c<o.length;c++)i(c)}()},children:"O(log n) - Find Max"}),Object(y.jsx)("button",{style:x.findMaxButton,onClick:function(){return function(){for(var t=0,n=0,e=function(e){t<r[e]&&(t=r[e],n=e),d.push(setTimeout((function(){u[e].style.backgroundColor=s}),3*e)),d.push(setTimeout((function(){u[n].style.backgroundColor=a}),300))},o=0;o<r.length;o++)e(o)}()},children:"O(n) - Find Max"}),Object(y.jsx)("button",{style:x.mergeSortButton,onClick:function(){return function(){for(var t=v(r),n=function(n){if(n%3!==2){var e=Object(c.a)(t[n],2),o=e[0],r=e[1],i=n%3===0?a:s;d.push(setTimeout((function(){u[o].style.backgroundColor=i,u[r].style.backgroundColor=i}),3*n))}else d.push(setTimeout((function(){var e=Object(c.a)(t[n],2),o=e[0],r=e[1];u[o].style.height="".concat(r,"px")}),3*n))},e=0;e<t.length;e++)n(e)}()},children:"O(n log n) - Merge Sort"}),Object(y.jsx)("button",{style:x.swapSortButton,onClick:function(){return j()},children:"O(n2) - Swap Sort"})]}),Object(y.jsx)("div",{className:"container",style:x.container,children:r.map((function(t,n){return Object(y.jsx)("div",{className:"bars",style:{backgroundColor:l,display:"inline-block",height:"".concat(t,"px"),margin:"1px",marginTop:"10px",width:"4px"}},n)}))})]})};var C=function(){var t={note:{fontWeight:"bold",marginVertical:15,padding:20},title:{fontSize:"24px",fontWeight:"bold",padding:10}};return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(x,{}),Object(y.jsx)("div",{style:t.title,children:"Time Complexity Visualizer"}),Object(y.jsx)("div",{children:"All methods share the same time delay to get a feel of how fast or slow each time complexity is"}),Object(y.jsx)("div",{style:t.note,children:'NOTE: O(log n) assumes the array is already sorted so the array will be sorted beforehand and the visualization will only show log n sorting operation for finding the max value. To visualize O(log n), "SPEED" needs to be increased since the operation occurs very quickly'})]})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(n){var e=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,u=n.getTTFB;e(t),o(t),r(t),i(t),u(t)}))};u.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("root")),O()},9:function(t,n,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.1192436a.chunk.js.map