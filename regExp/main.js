function addEvent(func)
{
	var oldonload=window.onload;
	if(typeof window.onload!='function')
	{
		window.onload=func;
	}
	else{
		window.onload=function()
		{
			oldonload();
			func();
		}
	}

}
function main()
{
var btn=document.getElementById("btn");
btn.onclick=function()
{
	var txt=document.getElementById("txt").value;
    var searchTxt=document.getElementById("searchTxt").value;
	var searchResult=document.getElementById("searchResult");
	var re=new RegExp(searchTxt,"ig");
    var matchArry;
    var result="<pre>";
    var first=0;
    var last=0;
    while((matchArry=re.exec(txt))!=null)
    {
    	last=matchArry.index;
        result+=txt.substring(first,last);
        result+="<span class='found'>"+matchArry[0]+"</span>";
        first=re.lastIndex;
    }
    result+=txt.substring(first,txt.length);
    result+="</pre>";
    //将字符串查找并替换
    /*var replaceTxt=document.getElementById("replaceTxt").value;
    var resultTxt="<span class='found'>"+replaceTxt+"</span>";
    var result=txt.replace(re,resultTxt);*/
    searchResult.innerHTML=result; 
}
}
addEvent(main);