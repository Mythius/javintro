function Animation(fr,dur,fn){
var frames = fr,duration = dur,fnc=fn,loop=0,
frame = function(){fnc();loop++;
if(loop<duration){requestAnimationFrame(frame);}}
this.start=function(){
loop=0;
frame();}}