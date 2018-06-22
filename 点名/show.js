function show()
{
	var arr=["submarine","articulation","overt","wither"];
	var err=["潜水艇","发音","公开的","使凋谢"];
	var translate=document.getElementById("translate");
	var personnum=document.getElementById("personnum");
	var num=document.getElementById("num");
	var startcheck=document.getElementById("startcheck");
	var personname=document.getElementById("personname");
	var audio=document.getElementsByTagName("audio")[0];
	var person=document.getElementsByClassName("person")[0];
	var personcheck=document.getElementsByClassName("personcheck")[0];
	personnum.innerHTML=arr.length;
	startcheck.onclick=function()
	{
       if(!num.value || isNaN(parseInt(num.value)))
       {
       	  alert("please input the true number");
       	  return false;
       }
       else
           {
            onum=parseInt(num.value);
           	if(onum > arr.length|| onum<0)
             {
       	       alert("please input the true number");
       	       return false;
       	     }
            else{
            	document.getElementsByClassName("content")[0].classList.add("up");
            	document.getElementsByClassName("body-left")[0].style.left="0";
            	document.getElementsByClassName("body-right")[0].style.right="0";
            	next(false);
            }
        }
	}   
function next(whichpc)
{ 
	var oldperson=personname.innerHTML;
	var oldtranslate=translate.innerHTML;
    if(onum>0)
    {
    	var i=Math.random()*arr.length|0;
    	var value=arr.splice(i,1)[0];
    	personname.innerHTML=value;
    	var eh=err.splice(i,1)[0];
    	translate.innerHTML=eh;
        if(value.match(/[a-zA-Z]+$/))
        {
    	audio.src="http://fanyi.baidu.com/gettts?lan=en&text="+value+"&spd=3&source=web";
        }
        else{
        	audio.src = "http://fanyi.baidu.com/gettts?lan=zh&text="+encodeURI(value)+"&spd=5&source=web";
        }
    }
    if(whichpc)
    {
    	person.innerHTML+=oldperson+oldtranslate+"&nbsp;";
    }
    if(--onum<0)
    {
       personcheck.innerHTML="<button class=\"aaa\">记忆结束</button>";
    }
}
    audio.onerror=function()
    {
    	var src=this.src;
    	this.src=src;
    }
    personname.onclick=function()
    {
    	audio.load();
    }

    personcheck.children[0].onclick=next.bind(null,true);
    personcheck.children[1].onclick=next.bind(null,false);
}
function addLoadEvent(func)
{
	var oldonload=window.onload;
	if(typeof window.onload!='function')
	{
		window.onload=func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(show);
addLoadEvent(next);
