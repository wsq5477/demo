//设置name，address，email等的动态效果
$(".form_one>form").keydown(function(event)
{
  var $self=$(this).children("label");
  var $selves=$(this).children("input");
  var $textarea=$(this).children("textarea");
  var selves=$selves[0];
  var textareas=$textarea[0];
  var sel=selves?selves:textareas;
  var self=$self[0];//将jQuery换成DOM方式
  var now=30;
  var old=0;
  if(self.style.top!=0+"px")
  {
    if(event.keyCode!=8)
    {
  var time=setInterval(function()
  {
     if(now==0)
     {
      clearInterval(time);
     }
     else
     { 
       now-=2;
       self.style.top=now+"px";
       self.style.visibility="visible";
     }
  },8);
}
}
else{
  if((sel.value.length-1)==0)
  {
    if(event.keyCode==8)
  {
     var times=setInterval(function()
  
  {
     if(old==30)
     {
      self.style.visibility="hidden";
      clearInterval(times);
     }
     else
     {
       old+=2;
       self.style.top=old+"px";
     }
  },12);
  } 
 }
}
});
$(".form_one>form").mouseout(function()
{
  var $self=$(this).children("label");
  var self=$self[0];
  if(self.style.top==0+"px")
    $(document).click(function()
  {
     self.style.color="#aab0c1";
  })
});
$(".form_one>form").mouseover(function()
{
  var $self=$(this).children("label");
  var self=$self[0];
    $(document).click(function()
  {
     self.style.color="#722872";
  })
});
//滚动效果
/*$(window).on("scroll",function()
{
  var scrollTop=$(window).scrollTop();
  $("nav span").css("backgroundColor","transparent");
  $("nav li").css("color","#757777");
  if(scrollTop>1600)
  {
    $("nav .bottom").css("backgroundColor","#eee");
    $("nav .bottom li").css("color","black");
  }
   else if(scrollTop>420)
  {
    $("nav .middle").css("backgroundColor","#eee");
    $("nav .middle li").css("color","black");
  }
  else if(scrollTop>=0)
  {
    $("nav .top").css("backgroundColor","#eee");
    $("nav .top li").css("color","black");
  }
});
  function scrollTo(ele,speed)
{
  if(!speed)
  {
    speed=1000;
  }
  if(!ele)
  {
    $("html,body").animate({scrollTop:0},speed);
  }
  else{
    if(ele.length>0)
    $("html,body").animate({scrollTop:ele.offset().top},speed);
  }
}
  
  $("nav .top a").on("focus",function()
{
  scrollTo();
});
$("nav .middle a").on("focus",function()
{
  var portfolio=$(".portfolio");
   scrollTo(portfolio,1000);
});
$("nav .bottom a").on("focus",function()
{
  var contact=$(".contact");
  scrollTo(contact,1000);
});*/
//这样有个过渡效果，但是在第一个和第二个过渡过程中有闪烁，未解决。
function scrollTo(ele,speed)
{
  if(!speed)
    speed=1000;
  if(!ele)
  {
    $("html,body").animate({scrollTop:0},speed);
  }
  else{
    if(ele.length>0)
    {
      $("html,body").animate({scrollTop:ele.offset().top},speed);
    }
  }
}
$("nav .top a").on("focus",function()
{
  $("nav span").css("backgroundColor","transparent");
  $("nav li").css("color","#757777");
  scrollTo();
  $("nav .top").css("backgroundColor","#eee");
  $("nav .top li").css("color","black");
});
$("nav .middle a").on("focus",function()
{
  $("nav span").css("backgroundColor","transparent");
  $("nav li").css("color","#757777");
  var portfolio=$(".portfolio");
   scrollTo(portfolio,1000);
  $("nav .middle").css("backgroundColor","#eee");
    $("nav .middle li").css("color","black");
});
$("nav .bottom a").on("focus",function()
{
  $("nav span").css("backgroundColor","transparent");
  $("nav li").css("color","#757777");
  var contact=$(".contact");
  scrollTo(contact,1000);
  $("nav .bottom").css("backgroundColor","#eee");
  $("nav .bottom li").css("color","black");
});
