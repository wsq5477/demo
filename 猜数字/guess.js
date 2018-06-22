function addEvent(func)
{
	var oldonload=window.onload;
    if(typeof window.onload!='function')
    {
    	window.onload=func;
    }
    else
    {
    	window.onload=function()
    	{
    		oldonload();
    		func();
    	}
    }
}
function guess()
{
	var number=document.getElementById("number");
	var btn=document.getElementById('btn');
	var previousNum=document.getElementById("previousNum");
	var wrong=document.getElementById("wrong");
	var judge=document.getElementById("judge");
	var num=Math.floor(Math.random()*100+1);//系统输入的值
	var i=1;//用户输入次数
	var iNow;//input内输入的值
	var sum="";
	btn.onclick=function()
	{

		if(number.value>100||number.value<1)
	 {
	 	alert("请输入范围内的数字");
	 	return false;
	 }
     if(i>=10)
     {
     	start();
    	alert("您的次数已用完")
    	i=0;
     }
  else{
	if(number.value.trim()!='')
	  {
		iNow=number.value;
		sum+=iNow+' ';
        previousNum.innerHTML="previous number:";
        previousNum.innerHTML+=sum;
        i++;
        if(iNow==num)
        {
        	wrong.style.display="block";
        	wrong.style.width=250+"px";
        	wrong.style.height=25+"px";
        	wrong.style.background="green";
        	wrong.innerHTML="RIGHT";
        	judge.style.display="none";
        	btn.disabled="disabled";
		    var button=document.createElement("button");
		    document.body.appendChild(button);
		    button.textContent="重新开始";
		    button.className="hh";
		    button.style.display="block";
		    button.onclick=function()
		    {
               btn.disabled="";
	           iNow="";
     	       sum="";
     	       number.value="";
     	       num=Math.floor(Math.random()*100+1);
    	       previousNum.innerHTML="";
    	       wrong.style.display="none";
    	       judge.style.display="none";
    	       button.style.display="none";
    	       i=0;
		    }
        }
        else if(iNow>num)
        {
        	wrong.style.display="block";
            wrong.style.width=250+"px";
        	wrong.style.height=25+"px";
        	wrong.style.background="red";
        	wrong.innerHTML="WRONG";
        	judge.style.display="block";
        	judge.innerHTML="猜测值太大了";
        }
        else if(iNow<num)
        {
        	wrong.style.display="block";
            wrong.style.width=250+"px";
        	wrong.style.height=25+"px";
        	wrong.style.background="red";
        	wrong.innerHTML="WRONG";
        	judge.style.display="block";
        	judge.innerHTML="猜测值太小了";
        }
	  }
    }
    number.value="";
  }
   document.onkeydown=function(e)
   {
   	 var code=0;
   	 var e=e||event;
     code=e.charCode||e.keyCode||e.which;
     if(code==13)
     {
     	btn.onclick();
     }

   }
}
function start()
{
        btn.disabled="";
	    iNow="";
     	sum="";
     	number.value="";
     	num=Math.floor(Math.random()*100+1);
    	previousNum.innerHTML="";
    	wrong.style.display="none";
    	judge.style.display="none";
    	i=0;
}
function progress()
{
   var pro=document.getElementById("pro");
   var ready=document.getElementById("ready");
   var a=document.getElementById("a");
   var left=document.getElementById("left");
   pro.value=0;
   if(pro.value<100)
   {
      var times=setInterval(function(){pro.value++;},100)

   }
   ready.onclick=function()
   {
  	if(pro.value==100)
       {
         clearInterval(times); 
         a.className="ipt";
         left.style.left=500+"px";
       }
   }
}
addEvent(guess);
addEvent(progress);