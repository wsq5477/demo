function addEvent(func)
{
	var onoldload=window.onload;
	if(typeof window.onload!='function')
	{
		window.onload=func;
	}
	else{
		window.onload=function()
		{
			onoldload();
			func();
		}
	}
}
/*search*/
function focus(obj,str)
	{
		obj.onfocus=function(){
			if(this.value==str)
			{
				this.value='';
			}
		}; 
		obj.onblur=function()
		{
			if(this.value=='')
			{
				this.value=str;
			}
		};
	};
function mouse(){
	var text1=document.getElementById("text1");
	var text2=document.getElementById("text2");
	focus(text1,'search website');
	focus(text2,'search website');
}
/*banner*/
function mouseon(){
	var nextbg=document.getElementById("next_bg");
	var next=document.getElementById("next");
	var prevbg=document.getElementById("prev_bg");
	var prev=document.getElementById("prev");
	var ad=document.getElementsByClassName("ad")[0];
	var li=ad.getElementsByTagName("li");
	var line=0;
	var timer=setInterval(ao,3000);
		function ao(){
	    if(line==2)
	    {
           line=0;  
	    }
	    else{
	   	 line++;
	   	}
	   	 for(var i=0;i<3;i++)
	   	 {
	   	 	fadeOut(li[i]);
	   	 }
	   	 fadeIn(li[line]);
	  
    }
    function aoprev()
 {
 	    
	    if(line==0)
	    {
           line=2;  
	    }
	    else{
	   	 line--;
	   }
	   for(var i=0;i<3;i++)
	   	 {
	   	 	fadeOut(li[i]);
	   	 }
        	fadeIn(li[line]);
 }
	nextbg.onmouseover= next.onmouseover=function()
	{
        next.style.display='block';
        clearInterval(timer);
	};
	nextbg.onmouseout=next.onmouseout=function()
	{
        next.style.display='none';
        timer=setInterval(ao,3000);
	};
	prevbg.onmouseover=prev.onmouseover=function()
	{
        prev.style.display='block';
        clearInterval(timer);
	};
	prevbg.onmouseout=prev.onmouseout=function()
	{
        prev.style.display='none';
        timer=setInterval(ao,3000);
	};
	prev.onclick=function()
	{
        aoprev();
	}
	next.onclick=function()
	{
        ao();
	}

}
 function fadeIn(obj){
 	if(obj.style.opacity==1)
 	{
 		return false;
 	}
 	clearInterval(auto);
 	var value=0;
 	var auto=setInterval(function(){
 		var speed=5;
 		value+=speed;
       obj.style.opacity=value/100;
       if(value==100)
       {
       	clearInterval(auto)
       }
 	},30)
 	
 }
 function fadeOut(obj)
 {
 	 if(obj.style.opacity==0)
 	{
 		return false;
 	}
 	clearInterval(auto);
 	var value=100;
 	var auto=setInterval(function(){
 		var speed=5;
 		value-=speed;
       obj.style.opacity=value/100;
       if(value==0)
       {
       	clearInterval(auto)
       }
 	},30)
 	
 }
 /*选择栏*/
 function choose()
 {
 	var sort=document.getElementsByClassName("sort")[0];
 	var ul=sort.getElementsByTagName("ul");
 	var a=sort.getElementsByTagName("a");
 	var h2=sort.getElementsByTagName("h2");
 	for(var i=0;i<3;i++)
 	{
       a[i].index=i;//index表示数组的索引值
 	   a[i].onclick=function(ev)
 	   {
 		   for(var line=0;line<3;line++)
 		   {
 		 	  ul[line].style.display="none";
 		   }
 		   var ev=window.event||ev;//因为一旦写了document，点击时就直接进行document的事件了，所以要阻止冒泡。
 		   var This=this;	//this指的a[i];
 		   ul[this.index].style.display='block';
 		   document.onclick=function()
 		   {
 			  ul[This.index].style.display="none";
 		    }
 		    ev.cancelBubble = true;//停止事件继续上传，不继续向上冒泡
 	    }
    }
        for(var i=0;i<3;i++)
        {  	
        	ul[i].index=i;
   	        for(var line=0;line<3;line++)
   	        {
   	  	      var li=ul[i].getElementsByTagName("li");
              /*act(ul[i],li[line]);*/
              li[line].onclick=function()
              {
              	h2[this.parentNode.index].innerHTML=this.innerHTML;
              }
            }
        }
 }
 
/* function act(obj,opj)
 {
    opj.onmouseover=function()
    {
    	opj.className="active";
    }
    opj.onmouseout=function()
    {
    	opj.className="";
    }
 }*///这个是active的设置，因为css写的太辣鸡，加不上去了。
/*左右移动*/
function run(){
	var scroll=document.getElementsByClassName("scroll")[0];
	var ul=scroll.getElementsByTagName("ul")[0];
	var li=scroll.getElementsByTagName("li");
	var scrolling_left=document.getElementsByClassName("scrolling_left")[0];
	var scrolling_right=document.getElementsByClassName("scrolling_right")[0];
	ul.innerHTML+=ul.innerHTML;
	ul.style.width=6*li[0].offsetWidth+'px';
	var i=0;
    scrolling_left.onclick=function()
    {
    	if(i==3)
    	{
    		i=0;
    	}
  
    	moveleft(ul,-(i+1)*li[0].offsetWidth,-i*li[0].offsetWidth);
        i++;
    
    }
    scrolling_right.onclick=function()
    {
       if(i==0)
       {
       	  ul.style.left=-(ul.offsetWidth/2)+"px";
          i=3;
       }
       
    	moveleft(ul,-(i-1)*li[0].offsetWidth,-i*li[0].offsetWidth);
        i--;
    
    }
}
function moveleft(obj,now,old){
	clearInterval(times);
	var times=setInterval(function()
	{
        var speed=(now-old)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(now==old)
        {
        	clearInterval(times);
        }  
        else{
        	old+=speed;
        	obj.style.left=old+'px';
        }
	},30)
}

addEvent(mouse);
addEvent(mouseon);
addEvent(choose);
addEvent(run);