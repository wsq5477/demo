window.onload=function(){
	let img=document.getElementById("img");
	let link=document.getElementsByTagName("a");
	let big=document.getElementById("big");
	let black=document.getElementById("black");
	let left=document.getElementById("left");
	let right=document.getElementById("right");
	let j=0;
	for(let i=0;i<link.length;i++)
	{
		link[i].index=i;
		link[i].onclick=function(){
			    j=this.index;
                let src=this.href;
				img.src=src;
				big.style.display="block";
				black.style.display="block";
				return false;
		}
		right.onclick=function(){
			j++;
			if(j>=link.length){
				j=0;
			}
			img.src=link[j].href;
		}
		left.onclick=function(){
			j--;
			if(j<0){
				j=link.length-1;
			}
			img.src=link[j].href;
		}
		
	}
	black.onclick=function(){
		black.style.display="none";
		big.style.display="none";
	}

}
