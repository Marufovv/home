
(()=>{
const root=document.getElementById('uy-maketi'),canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d'),angle=root.querySelector('#uy-angle'),zoom=root.querySelector('#uy-zoom');
let yaw=-16*Math.PI/180,pitch=.73,magnify=1,W=736,H=510;
const faces=[];
const stone='#cabca3',trim='#e1d5c0',roof='#777c7b',dark='#293635',glass='#3a5051',gold='#bea26d',path='#a89f8e';
function face(v,c){faces.push({v,c});}
function box(x,y,z,w,h,d,c){const a=[x-w/2,y,z-d/2],b=[x+w/2,y,z-d/2],e=[x+w/2,y,z+d/2],f=[x-w/2,y,z+d/2];const up=p=>[p[0],p[1]+h,p[2]];face([a,b,up(b),up(a)],c);face([b,e,up(e),up(b)],c);face([e,f,up(f),up(e)],c);face([f,a,up(a),up(f)],c);face([up(a),up(b),up(e),up(f)],c);}
function cylinder(x,y,z,r,h,c,n=12){const top=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2,b=(i+1)/n*Math.PI*2,p=[x+Math.cos(a)*r,y,z+Math.sin(a)*r],q=[x+Math.cos(b)*r,y,z+Math.sin(b)*r];face([p,q,[q[0],y+h,q[2]],[p[0],y+h,p[2]]],c);top.push([p[0],y+h,p[2]]);}face(top,c);}
function crown(x,y,z,r,c){const n=7,rows=3;for(let j=0;j<rows;j++){let t1=-Math.PI/2+j*Math.PI/rows,t2=-Math.PI/2+(j+1)*Math.PI/rows;for(let i=0;i<n;i++){const pt=(t,k)=>[x+Math.cos(t)*Math.cos(k)*r,y+Math.sin(t)*r,z+Math.cos(t)*Math.sin(k)*r];let a=i/n*Math.PI*2,b=(i+1)/n*Math.PI*2;face([pt(t1,a),pt(t1,b),pt(t2,b),pt(t2,a)],c);}}}
let seed=19;function rnd(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646;}
function tree(x,z,s=1){cylinder(x,.15,z,.12*s,1.6*s,'#79684d',5);crown(x,2*s,z,.86*s,['#43533a','#52603c','#344b36'][Math.floor(rnd()*3)]);}
function shrub(x,z,s=.38){crown(x,s+.15,z,s,'#526042');}
function hip(x,z,w,d,y){box(x,y-.15,z,w,.22,d,dark);const a=[x-w/2,y,z-d/2],b=[x+w/2,y,z-d/2],c=[x+w/2,y,z+d/2],e=[x-w/2,y,z+d/2],p=[x-w*.23,y+1.7,z],q=[x+w*.23,y+1.7,z];face([a,b,q,p],dark);face([b,c,q],dark);face([c,e,p,q],dark);face([e,a,p],dark);}
function windowFront(x,y,z,w=1.25,h=1.7){box(x,y-.08,z,w+.18,h+.16,.13,trim);box(x,y,z+.085,w,h,.035,glass);box(x,y,z+.12,.055,h,.04,gold);box(x,y+h*.5,z+.12,w,.045,.04,gold);box(x,y+.1,z+.105,w*.75,.2,.035,'#ad8f57');}
function pavilion(x,z,w,d){box(x,.12,z,w,3.2,d,stone);for(let i=-1;i<=1;i++)windowFront(x+i*w*.27, .6,z+d/2,1.4,2.1);hip(x,z,w+.5,d+.5,3.5);}
// Courtyard, paths and enclosing walls.
box(0,-.7,0,40,.7,49,'#827d69');box(0,0,0,39,.12,48,'#67714f');
box(0,.13,6,4,.06,36,path);box(-12,.13,4,3,.06,36,path);box(0,.13,23,38,.06,2,path);
box(-19.5,0,0,.55,1.75,48,stone);box(19.5,0,0,.55,1.75,48,stone);box(0,0,-24,39,1.75,.55,stone);
box(-15.5,0,24,8,1.75,.55,stone);box(-4.5,0,24,5,1.75,.55,stone);box(11,0,24,17,1.75,.55,stone);
for(const x of [-19.5,-11.5,-6.7,-2,2,19.5]){box(x,0,24,.8,2.4,.9,trim);box(x,2.4,24,1,.18,1.05,stone);}
box(0,0,24,2.8,2,.18,dark);box(0,2.65,24,4.9,.55,1.3,trim);
for(let x=-11.4;x<-6.8;x+=.24)box(x,0,24,.05,1.8,.1,dark);
box(-9.1,.5,24,4.7,.06,.1,dark);box(-9.1,1.5,24,4.7,.06,.1,dark);
// Main residence, cornices and roof terrace.
box(0,.2,1,16,7.8,13,stone);box(0,.2,1,16.5,.3,13.5,trim);box(0,3.95,1,16.3,.2,13.3,trim);box(0,7.8,1,16.7,.4,13.7,trim);box(0,8.2,1,15.8,.12,12.8,roof);
for(const x of [-7.8,7.8])box(x,8.3,1,.3,.75,12.8,stone);
for(const z of [-5.25,7.25])box(0,8.3,z,16,.75,.3,stone);
box(0,8.35,-3,7,2.9,3.6,stone);box(0,11.25,-3,7.6,.25,4.2,trim);box(0,11.5,-3,7,.08,3.6,roof);
for(let x=-2.4;x<=2.5;x+=1.6)windowFront(x,8.6,-1.16,1.42,2.15);
for(const x of [-6.2,-3.6,3.6,6.2])for(const y of [.7,4.65])windowFront(x,y,7.52,1.6,2.5);
// Side and back windows.
for(const side of [-1,1])for(const z of [-3.6,-.8,2,4.8])for(const y of [.8,4.6]){box(side*8.02,y,z,.13,2.35,1.6,trim);box(side*8.1,y+.08,z,.025,2.17,1.4,glass);box(side*8.13,y+.08,z,.04,2.17,.045,gold);}
for(const x of [-6,-3,0,3,6])for(const y of [.8,4.6]){box(x,y,-5.53,1.6,2.3,.1,trim);box(x,y+.1,-5.6,1.4,2.1,.03,glass);}
box(0,.2,8.2,5,.6,2.5,trim);box(0,.2,9.3,5.8,.25,1,stone);box(0,.45,8.85,5.4,.2,.8,stone);
box(0,.8,7.65,2.3,4.6,.12,dark);box(0,5.55,7.65,2.3,1.5,.12,glass);
for(const x of [-2.25,2.25]){box(x,.75,8,.65,6.9,.65,trim);box(x,7.55,8,.9,.25,.9,stone);}
box(0,7.8,8,5.8,.55,1.6,trim);
// Terrace furniture and railing.
box(0,8.48,4,2.4,.45,1.1,'#baad94');for(const x of [-2,2])box(x,8.48,4,.8,.65,1,'#c5baa4');
for(let x=-3.8;x<=3.9;x+=.65)box(x,8.4,6.8,.035,.8,.035,dark);box(0,9.2,6.8,8,.04,.05,dark);
// Pool and loungers.
box(12,.14,1,6.5,.12,19,trim);box(12,.27,1,5.45,.06,17.7,'#327f86');box(12,.34,1,5.25,.02,17.4,'#44999b');
for(let z=-6.9;z<9;z+=1.1){face([[9.45,.37,z],[14.55,.37,z+.22],[14.55,.37,z+.26],[9.45,.37,z+.03]],'#62a5a4');}
for(let z=-6;z<=8;z+=2.6){box(16.8,.25,z,1.05,.3,1.8,'#e2d8c5');box(16.8,.55,z-.65,1.05,.5,.4,'#d0c8b6');}
box(12,.22,12,3,.75,1.1,'#857765');for(const x of [9.8,14.2])box(x,.22,12,1.1,.6,1.1,'#ded3bb');
// Left guest house and open pavilion.
pavilion(-14,-1,6,6);
box(-14,.15,11,8,.3,6,trim);for(const x of [-17.5,-14,-10.5])for(const z of [8.5,13.5])box(x,.45,z,.4,3.1,.4,stone);hip(-14,11,8.5,6.5,3.7);
box(-14,.45,11,3,.9,1.4,'#897b62');
cylinder(-14,.18,18,2.5,.2,trim,24);cylinder(-14,.39,18,2.1,.1,'#6c9691',24);cylinder(-14,.49,18,.45,.7,stone);cylinder(-14,1.19,18,.9,.12,trim);cylinder(-14,1.31,18,.15,.6,stone);
// Rear stable, riding ring and kitchen garden.
pavilion(-10,-19,9,4.2);cylinder(-10,.13,-12,4.5,.06,'#a9987e',32);
for(let i=0;i<32;i++){let a=i/32*Math.PI*2,b=(i+1)/32*Math.PI*2;const x=-10+Math.cos(a)*4.5,z=-12+Math.sin(a)*4.5;box(x,.2,z,.065,1,.065,dark);for(const y of [.6,1.1])face([[x,y,z],[-10+Math.cos(b)*4.5,y,-12+Math.sin(b)*4.5],[-10+Math.cos(b)*4.5,y+.06,-12+Math.sin(b)*4.5],[x,y+.06,z]],dark);}
for(let x=-2;x<=9;x+=2.7)for(let z=-21;z<=-12;z+=3.2){box(x,.13,z,1.9,.22,2.5,'#98866a');box(x,.35,z,1.6,.08,2.2,'#564e38');for(let k=0;k<3;k++)shrub(x,z-.7+k*.7,.3);}
// Greenhouse with visible glass panes.
box(14,.2,-17,4.5,2.3,9,'#8b9b88');for(const x of [11.7,16.3])for(let z=-21.5;z<=-12.4;z+=1.3)box(x,.2,z,.055,2.5,.055,dark);
const ga=[11.7,2.7,-21.5],gb=[16.3,2.7,-21.5],gc=[16.3,2.7,-12.5],gd=[11.7,2.7,-12.5],ge=[14,4,-21.5],gf=[14,4,-12.5];face([ga,gd,gf,ge],'#8baba6');face([gb,gc,gf,ge],'#a3b8ad');face([ga,gb,ge],'#829b91');face([gd,gc,gf],'#91a69b');
for(let z=-21.5;z<=-12.4;z+=1.3){face([[11.65,2.7,z],[14,4.03,z],[14,4.03,z+.055],[11.65,2.7,z+.055]],dark);face([[14,4.03,z],[16.35,2.7,z],[16.35,2.7,z+.055],[14,4.03,z+.055]],dark);}
// Garden beds and boundary planting.
for(const x of [-6,6]){box(x,.16,16,7,.12,10,'#4b583b');for(let z=12;z<=20;z+=2)for(let dx=-2.4;dx<=2.5;dx+=1.6)shrub(x+dx,z,.47);}
for(let z=-22;z<=22;z+=2.6){tree(-18.1,z,.8+rnd()*.3);tree(18.1,z,.8+rnd()*.2);}
for(let x=-16;x<18;x+=2.8)tree(x,-22.4,.75);
for(let x=-7.2;x<=7.3;x+=1.3){shrub(x,10.2,.46);shrub(x,21.8,.55);}
for(const x of [-9.4,8.3])for(let z=-8;z<=20;z+=3.2)tree(x,z,.65+rnd()*.25);
// Project the same 3D geometry from every angle.
function project(p){const x=p[0]*Math.cos(yaw)+p[2]*Math.sin(yaw),z=-p[0]*Math.sin(yaw)+p[2]*Math.cos(yaw),v=p[1]-2;return{x:W/2+x*scale,y:H*.50+(z*Math.sin(pitch)-v*Math.cos(pitch))*scale,d:z*Math.cos(pitch)+v*Math.sin(pitch)};}
let scale=10;
function shade(c,v){if(!c)c=stone;const n=parseInt(c.slice(1),16),a=v[0],b=v[1],d=v[2],u=b.map((x,i)=>x-a[i]),w=d.map((x,i)=>x-a[i]),normal=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...normal)||1;const light=.7+.3*Math.abs((normal[0]*-.35+normal[1]*.85+normal[2]*.4)/len);return `rgb(${Math.round((n>>16)*light)},${Math.round((n>>8&255)*light)},${Math.round((n&255)*light)})`;}
for(const f of faces)f.fill=shade(f.c,f.v);
function draw(){scale=Math.min(W/61,H/49)*magnify;ctx.clearRect(0,0,W,H);const fs=faces.map(f=>{const p=f.v.map(project);return{p,c:f.fill,d:p.reduce((s,a)=>s+a.d,0)/p.length};}).sort((a,b)=>a.d-b.d);for(const f of fs){ctx.beginPath();f.p.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fillStyle=f.c;ctx.fill();ctx.strokeStyle=f.c;ctx.lineWidth=.45;ctx.stroke();}}
function resize(){W=canvas.clientWidth;H=canvas.clientHeight;const d=Math.min(window.devicePixelRatio||1,2);canvas.width=W*d;canvas.height=H*d;ctx.setTransform(d,0,0,d,0,0);draw();}
angle.addEventListener('input',()=>{yaw=+angle.value*Math.PI/180;draw();});zoom.addEventListener('input',()=>{magnify=+zoom.value/100;draw();});
let drag=null;canvas.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});canvas.addEventListener('pointermove',e=>{if(!drag)return;yaw+=(e.clientX-drag.x)*.008;pitch=Math.max(.22,Math.min(1.42,pitch+(e.clientY-drag.y)*.006));yaw=(yaw+Math.PI*3)%(Math.PI*2)-Math.PI;angle.value=Math.round(yaw*180/Math.PI);drag={x:e.clientX,y:e.clientY};draw();});canvas.addEventListener('pointerup',()=>drag=null);canvas.addEventListener('pointercancel',()=>drag=null);
canvas.addEventListener('wheel',e=>{e.preventDefault();magnify=Math.max(.7,Math.min(1.8,magnify-e.deltaY*.001));zoom.value=Math.round(magnify*100);draw();},{passive:false});
new ResizeObserver(resize).observe(canvas);resize();
})();
