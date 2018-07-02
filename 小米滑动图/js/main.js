window.onload=function()
{
	let btn=document.getElementsByClassName("btn")[0];
	let top=document.getElementsByClassName("top")[0];
	let container=document.getElementsByClassName("container")[0];
	container.onmousemove=function(e){
		e=e||event;
		let left=e.clientX-this.offsetLeft;
		if(left<0)
		 left=0;
		else if(left>=this.offsetWidth-btn.offsetWidth)
		{
			left=this.offsetWidth-btn.offsetWidth;
		}
		btn.style.left=left+"px";
		btn.style.transition="";
		top.style.width=left+"px";
		top.style.transition="";
	}
	container.onmouseleave=function(e)
	{
		btn.style.left=50+"%";
		btn.style.transition=1+"s";
		top.style.width=50+"%";
		top.style.transition=1+"s";
	}
}

