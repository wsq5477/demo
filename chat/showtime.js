function addLoadEvent(func)
{
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}
	else{
		window.onload()=function()
		{
			oldonload();
			func();
		}
	}
} 
function showtime()
{
	var btn=document.getElementById("btn");
	var img1=document.getElementById("img1");
	var btn=document.getElementById("btn");
	var main=document.getElementsByClassName("main");
	var colorWhilte=document.getElementsByClassName("colorWhilte");
	var colorBlue=document.getElementsByClassName("colorBlue");
	var textWhilte=document.getElementsByClassName("textWhilte");
	var textBlue=document.getElementsByClassName("textBlue");
	var ipt=document.getElementById("ipt");
	var textM=document.getElementsByClassName("textM");
	var para=document.createElement("p");
	var batext=document.createTextNode("发送");
	para.appendChild(batext);
	btn.appendChild(para);	
	var onoff=true;
	main[0].scrollTop = main[0].scrollHeight;
	img1.onclick=function()
	{
	   if(onoff==true)
	   {
          this.src="image.jpg";
          onoff=false;
	   }
	   else
	   {
	   	  this.src="image3.jpg";
	   	  onoff=true;
	   }
	} 
	btn.onclick=function()
	{
		if(ipt.value=="")
		{ 
           alert("error");
           return false;
		}	
        if(onoff==true)
        {
        	main[0].innerHTML+="<div class=\"linebox\">"+"<img class=\"colorWhilte\"/>"+"<p class=\"textM textWhilte\">"+"</p>"+"</div>";
        	colorWhilte[colorWhilte.length-1].src=img1.src;
            textWhilte[textWhilte.length-1].innerHTML=ipt.value;
        }
        if(onoff==false)
        {
        	main[0].innerHTML+="<div class=\"linebox\">"+"<img class=\"colorBlue\"/>"+"<p class=\"textM textBlue\">"+"</p>"+"</div>";
        	colorBlue[colorBlue.length-1].src=img1.src;
            textBlue[textBlue.length-1].innerHTML=ipt.value;
        }  
	for(var i=0;i<textM.length;i++)
	{
		textM[i].style.animation="";
		textM[i].style.animationFillMode="";
	}
	textM[textM.length-1].style.animation="ipt 0.3s";
    textM[textM.length-1].style.animationFillMode="forwards";
    ipt.value="";
   main[0].scrollTop = main[0].scrollHeight;
}  
	document.onkeydown=function(e)
	{
		var code=0;
		var e=e||event;
		code=e.which||e.keyCode||e.charCode;
		if(code==13)
		{
			btn.onclick();
		}
	}
}  

addLoadEvent(showtime);
