(function(){"use strict";var e={5246:function(e,n,t){var r=t(6369),i=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Cube with Three.js in vue.js"}}),n("CubeCanvas"),n("HelloWorld",{attrs:{msg:"Line with Three.js in vue.js"}}),n("LineCanvas"),n("HelloWorld",{attrs:{msg:"GLTF with Three.js in vue.js"}}),n("GLTFCanvas")],1)},s=[],a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},o=[],c={name:"HelloWorld",props:{msg:String}},u=c,l=t(1001),h=(0,l.Z)(u,a,o,!1,null,"43f48a4c",null),d=h.exports,f=function(){var e=this,n=e._self._c;return n("div",{ref:"canvas",staticClass:"canvas"})},m=[],v=t(1114),p={name:"CubeCanvas",data:function(){const e=new v.xsS,n=new v.cPb(75,2,.1,1e3),t=new v.CP7({antialias:!0}),r=new v.DvJ(3,3,3),i=new v.vBJ({color:4155328}),s=new v.Kj0(r,i);return{scene:e,camera:n,renderer:t,cube:s,speed:.01}},created:function(){this.scene.add(this.cube),this.renderer.setSize(1e3,500),this.camera.position.z=7,this.scene.background=new v.Ilk("hsl(0, 100%, 100%)")},mounted:function(){this.$refs.canvas.appendChild(this.renderer.domElement),this.animate()},methods:{animate:function(){requestAnimationFrame(this.animate),this.cube.rotation.x+=.005,this.cube.rotation.y+=.005,this.renderer.render(this.scene,this.camera)}}},L=p,w=(0,l.Z)(L,f,m,!1,null,"7c28b7d4",null),b=w.exports,T=function(){var e=this,n=e._self._c;return n("div",{ref:"canvasLine",staticClass:"canvas"})},g=[],F={name:"LineCanvas",data:function(){const e=new v.xsS,n=new v.cPb(45,10,1,500),t=new v.CP7,r=new v.nls({color:255}),i=[new v.Pa4(-10,0,0),new v.Pa4(0,10,0),new v.Pa4(10,0,0)],s=(new v.u9r).setFromPoints(i),a=new v.x12(s,r);return{sceneLine:e,cameraLine:n,rendererLine:t,line:a}},created:function(){this.sceneLine.add(this.line),this.rendererLine.setSize(1e3,500),this.cameraLine.position.set(0,0,100),this.cameraLine.lookAt(0,0,0),this.sceneLine.background=new v.Ilk("hsl(0, 100%, 100%)")},mounted:function(){this.$refs.canvasLine.appendChild(this.rendererLine.domElement),this.render()},methods:{render:function(){this.rendererLine.render(this.sceneLine,this.cameraLine)}}},C=F,G=(0,l.Z)(C,T,g,!1,null,"f09011f4",null),_=G.exports,x=function(){var e=this,n=e._self._c;return n("div",{ref:"canvasGLTF",staticClass:"canvas"})},P=[],j=t(4198),k=t(4543),O={name:"GLTFCanvas",data:function(){const e=new v.xsS,n=new v.cPb(40,1,1,100),t=new v.CP7({antialias:!0}),r=new j.E,i=new v.vmT(16777215,16777215,.6),s=new k.z(n,t.domElement);return{sceneGLTF:e,cameraGLTF:n,rendererGLTF:t,loader:r,hemiLight:i,controls:s,speed:.01}},created:function(){this.rendererGLTF.setSize(1e3,1e3),this.rendererGLTF.toneMapping=v.LY2,this.rendererGLTF.toneMappingExposure=1,this.rendererGLTF.outputEncoding=v.knz,this.cameraGLTF.position.set(5,2,8),this.hemiLight.color.setHSL(.6,1,.6),this.hemiLight.groundColor.setHSL(.095,1,.75),this.hemiLight.position.set(0,50,0),this.sceneGLTF.add(this.hemiLight),this.sceneGLTF.background=new v.Ilk("hsl(0, 100%, 100%)"),this.loader.load("assets/Fished.gltf",(e=>{const n=e.scene;n.position.set(0,-2.5,0),n.rotation.set(0,35,0),n.scale.set(.1,.1,.1),this.sceneGLTF.add(n)})),this.controls.minDistance=1,this.controls.maxDistance=40,this.controls.target.set(0,0,0),this.controls.enableZoom=!1,this.controls.update()},mounted:function(){this.renderGLTF(),this.$refs.canvasGLTF.appendChild(this.rendererGLTF.domElement)},methods:{renderGLTF:function(){requestAnimationFrame(this.renderGLTF.bind(this)),this.rendererGLTF.render(this.sceneGLTF,this.cameraGLTF)}}},y=O,S=(0,l.Z)(y,x,P,!1,null,"daa83fa8",null),E=S.exports,Z={name:"App",components:{HelloWorld:d,CubeCanvas:b,LineCanvas:_,GLTFCanvas:E}},H=Z,z=(0,l.Z)(H,i,s,!1,null,null,null),W=z.exports;r.ZP.config.productionTip=!1,new r.ZP({render:e=>e(W)}).$mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var s=n[r]={exports:{}};return e[r](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,s){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],s=e[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&s||a>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(o=!1,s<a&&(a=s));if(o){e.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,i,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,s,a=r[0],o=r[1],c=r[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(c)var l=c(t)}for(n&&n(r);u<a.length;u++)s=a[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(l)},r=self["webpackChunkcube_three_vue"]=self["webpackChunkcube_three_vue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5246)}));r=t.O(r)})();
//# sourceMappingURL=app.2ba38915.js.map