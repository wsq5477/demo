arr=["p1","p2","p3","p4","p5","p6","p7"];
let index=0;
$(".prev").click(function(){
	prev();
});
$(".next").click(function(){
	next();
});
function next(){
	arr.push(arr[0]);
	arr.shift();
	$("li").each(function(i,e)
	{
		$(e).removeClass().addClass(arr[i]);
	})
	index++;
	if(index>6)
	{
		index=0;
	}
	show();
}
function prev(){
	arr.unshift(arr[6]);
	arr.pop();
	$("li").each(function(i,e){
		$(e).removeClass().addClass(arr[i]);
	})
	index--;
	if(index<0)
	  index=6;
	show();
}
function show()
{
	$(".btn-list span").eq(index).addClass("blue").parent().siblings().children().removeClass("blue");
}//下面的按钮随页面变化而变蓝
$(".btn-list a").each(function(){//点击下方按钮
	$(this).click(function(){
		let nowIndex=$(this).index();
		let d=nowIndex-index;
		if(d==0)
		{
			return;
		}
		else if(d>0)
		 {
		 	let newArray=arr.splice(0,d);
		 	arr=arr.concat(newArray);//对比了concat和.merge，concat不会破坏数组，所以要使arr等于其值，而.merge则会破坏其第一个数组的值
		 	$("li").each(function(i,e)
		 	{
		 		$(e).removeClass().addClass(arr[i]);
		 	})
		 	index=nowIndex;
		 	show();
		 }
		 else if(d<0)
		 {
		 	let newArray=arr.splice(0,7+d);
		 	$.merge(arr,newArray);
		 	$("li").each(function(i,e)
		 	{
		 		$(e).removeClass().addClass(arr[i]);
		 	})
		 	index=nowIndex;
		 	show();
		 }
	})
})
$(document).on("click",".p2",function(){
	next();
	return false;
})//比较$(document).on("click","指定元素"，function(){})和$("指定元素").click(function(){})的区别：
//后者如果是新生成的动态元素，是没有效果，所以我们如果按照后面的方式，那么就只有图2有这个效果
//如果用前者的话，新产生的元素如果符合这个指定元素，即触发该事件
$(document).on("click",".p4",function(){
	prev();
    return false;
})
timer=setInterval(next,4000);
$(".container").mouseover(function(){
	clearInterval(timer);
})
$(".container").mouseleave(function(){
	timer=setInterval(next,4000);
})
