var Animation = function(element,directory,frame_count){
	// name files in directory 0.png, 1.png, 2.png, etc.
	var frames=[],curr_frame=0;
	var frLists=[],animID=0;
	var img = element;
	var isLoop=true,isPlaying=false;
	var fps=30;
	frLists.push(range(0,frame_count));
	frLists.push(range(0,frame_count).reverse());
	for(let i=0;i<frame_count;i++){
		frames.push(directory+'/'+i+'.png');
	}
	function range(a,b){
		var r=[],i;
		for(i=a;i<b;i++) r.push(i);
		return r;
	}
	/* to add Custom Animation: 
	@param array: array of frames you want to play in that order
	e.g. [1,2,3,4,2,3,1]
	animation will play images in that order. 
	to play animaiton keep return value and simply call
	playCustom with that number.
	*/
	this.addCustom=function(array){
		frLists.push(array);
		return frLists.length-1;
	}
	this.playForward=function(isl){
		animID=0;
		curr_frame=0;
		isLoop=isl;
		loop();
	}
	this.playBackward=function(isl){
		animID=1;
		curr_frame=0;
		isLoop=isl;
		loop();
	}
	function loop(){
		isPlaying=true;
		if(curr_frame>=frLists[animID].length){
			if(isLoop){
				curr_frame=0;
				loop();
			} else {
				isPlaying=false;
				cancelAnimationFrame(loop);
				img.src=frames[frLists[animID][frame_count-1]];
			}
		} else {
			setTimeout(function(){
				requestAnimationFrame(loop);
			},1000/fps);
			img.src=frames[frLists[animID][curr_frame]];
			curr_frame++;
		}
	}
	this.getImage=()=>img;
	this.setFPS=function(f){ fps=f;}
	this.playCustom=function(c,isl){
		if(c<frLists.length){
			animID=c;
			curr_frame=0;
			isLoop=is;
			loop();
		}
	}
	this.stop=function(){
		cancelAnimationFrame(loop);
		isPLaying=false;
		isLoop=false;
		img.src=frames[frLists[animID][frame_count-1]];
		curr_frame=frLists[animID].length;
	}
	this.getFrame=()=>curr_frame;
	this.isLoop=()=>isLoop;
	this.isPlaying=()=>isPlaying;
}
