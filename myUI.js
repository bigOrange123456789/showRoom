//窗体
function document_color(color){//窗体颜色设置
	document.body.style.background=color;
}
//div面板
function div(width,height){
	var oPanel=document.createElement('div');
	oPanel.style.cssText='width:300px;'+
	   //'background:#01f;'+//背景颜色
	   'width:'+width+'px;height:'+height+'px;'+//面板大小
	   //'border:1px solid #fff;'+//显示边框
	   'margin:0px auto;'+//居于窗口中间
	   'text-align:center;'+//内部文本居中
					  'position:fixed;'+//到窗体的位置
		  			  'left:'+(window.innerWidth/2-80)+'px;'+//到部件左边距离
					  'top:'+10+'px;'; //到部件右边 距离
	   'overflow:hidden;';//超出部分隐藏
	document.body.appendChild(oPanel);//document.body浏览器窗口	
	return oPanel;
}
//文本
function h1(html,color,size,parentNode){
	var oText=document.createElement('h1');
	oText.innerHTML=html;
	oText.style.cssText='color:'+color+';'+//文字颜色
						//'background:#aff;'+//背景颜色
						'font-size:'+size+'px;'+//文字大小
						//'width:60px;height:40px;'+//文本大小
						'font-weight:normal;'
						//+'padding-top:50px;'//距离上一个对象的距离
					  //'position:fixed;'+//到窗体的位置
		  			  //'left:'+0+'px;'+//到部件左边距离
					  //'top:'+0+'px;'; //到部件右边 距离
						;
	parentNode.appendChild(oText);
	return oText;
}
function span(html,color,size,parentNode){
	var oText=document.createElement('span');
	oText.innerHTML=html;
	oText.style.cssText='position:absolute;'+
						'color:'+color+';'+//文字颜色
						//'background:#aff;'+//背景颜色
						'font-size:'+size+'px;'+//文字大小size
						//'width:60px;height:40px;'+//文本大小
						'font-weight:normal;'
					  'position:fixed;'+//到窗体的位置
		  			  'left:'+x+'px;'+//到部件左边距离
					  'top:'+y+'px;'; //到部件右边 距离
						//+'padding-top:50px;'//距离上一个对象的距离
						//'left:'+(-50)+'px;'+//到部件左边距离
					  //'top:'+(0)+'px;'; //到部件右边 距离
						;
	parentNode.appendChild(oText);
	return oText;
}
//按钮
function p(html,color,background,size,width,height,parentNode){
	var oButton=document.createElement('p');//按钮
	oButton.innerHTML=html;
	oButton.style.cssText='font-size:'+size+'px;'//字体大小
					+'width:'+width+'px;height:'+height+'px;'//按钮大小
					+'color:'+color+';'//字体颜色
					+'background:'+background+';'//按钮颜色
					+'margin:20px auto;'
					+'text-align:center;'
					+'line-height:40px;'
					//+'cursor:pointer;'
	parentNode.appendChild(oButton);
	return oButton;
}
//图片
function image(src,w,h,x,y,parent){
	var img=new Image();
	img.src=src;
	img.width=w;
	img.height=h;
	img.style.cssText='display:block;'+
		              'z-index:5'+
					  'position:fixed;'+//到窗体的位置
		  			  'left:'+x+'px;'+//到部件左边距离
					  'top:'+y+'px;'; //到部件右边 距离
	parent.appendChild(img);
	return img;
}
//构造函数
function Div(width,height){//面板
	this.panel=div(width,height);//div(width,height);
	this.w=width;
	this.h=height;
	this.x = 0;//在parent中的位置
	this.y = 0;//在parent中的位置
	//this.x=this.panel.offsetLeft;
	//this.y=this.panel.offsetTop; 
	this.border=this.panel.style.borderWidth;
	this.getX=function(){
		return this.panel.offsetLeft;
	}
	this.getY=function(){
		return this.y=this.panel.offsetTop; 
	}
	this.setX=function(x){
		this.x=x;
		this.panel.style.left=x+'px';
	}
	this.setY=function(y){
		this.y=y;
		this.panel.style.top=y+'px';
	}
	this.setXY=function(x,y){
		this.x=x;
		this.panel.style.left=x+'px';
		this.y=y;
		this.panel.style.top=y+'px';
	}
	this.move=function(direction,step){
		if(typeof(step) == "undefined")step=0.1;
		if(direction<0){//字母与数字比较大小结果始终为false
			step*=-1;
			direction*=-1;
		}
		if(direction=='x'||direction==1)this.setX(this.x+step);
		else if(direction=='y'||direction==2)this.setY(this.y+step);
	}
}
function H1(html,color,size,parentNode){//文本
	this.html=html;this.color=color;this.size=size;
	this.oText=h1(html,color,size,parentNode);
	this.reText=function(text){
		this.text=text;
		this.oText=h1(html,color,size,parentNode);
	}	
}
function Span(html,color,size,parentNode){//文本
	this.html=html;this.color=color;this.size=size;
	this.span=span(html,color,size,parentNode);
	this.reHtml=function(text){
		this.html=text;
		this.span.innerHTML=text;
	}	
}
function ImageMove(src,w,h,x,y,parent){//添加的是image对象，而不是ImageMove对象
    if (typeof(parent) == "undefined") parent = document.body;
    this.w = w;
    this.h = h;
    this.x = x;//在parent中的位置
    this.y = y;//在parent中的位置
    this.ratio = w / h;

    this.img = new Image();
    this.img.src = src;
    this.img.width = w;
    this.img.height = h;
    this.img.style.cssText = 'display:block;' +
        'position:absolute;' +//位置可变
        'left:' + x + 'px;' +//到部件左边距离
        'top:' + y + 'px;'; //到部件右边 距离
    parent.appendChild(this.img);

	this.reImg=function(resrc,w1,h1){
		if(typeof(w1)!="undefined")this.setW(w1);
		if(typeof(h1)!= "undefined")this.setH(h1);
		this.img.parent.removeChild(this.img);
		this.img=image(resrc,this.w,this.h,thi.x,this.y,parent);
		this.ratio=this.w/this.h;
	}
	this.setX=function(x){
		this.x=x;
		this.img.style.left=x+'px';
	}
	this.setY=function(y){
		this.y=y;
		this.img.style.top=y+'px';
	}
	this.setXY=function(x,y){
        this.x=x;
        this.img.style.left=x+'px';
        this.y=y;
        this.img.style.top=y+'px';
	}
	this.move=function(direction,step){
   		if(typeof(step) == "undefined")step=0.1;
		if(direction<0){//字母与数字比较大小结果始终为false
	 	    step*=-1;
		    direction*=-1;
		}
    		if(direction=='x'||direction==1)this.setX(this.x+step);
    		else if(direction=='y'||direction==2)this.setY(this.y+step);
	}
	this.setW=function(w){
		this.w=w;
		this.img.width=w;
	}
	this.setH=function(h){
		this.h=h;
		this.img.height=h;
	}
	this.left=function(n){
        this.x=this.x-n;
        this.img.style.left=this.x+'px';
	}
	this.scale=function(direction,step){//direction为3意思是成比例的放缩,ratio是w/h
		if(typeof(step) == "undefined")step=0.1;
		if(direction<0){//字母与数字比较大小结果始终为false
	 	    step*=-1;
		    direction*=-1;
		}
    		if(direction=='w'||direction==1)this.setW(this.w+step);
    		else if(direction=='h'||direction==2)this.setH(this.h+step);
    		else if(direction==3){this.setW(this.w+step);this.setH(this.h+step/this.ratio);}
	}
	this.hide_w0=w;
	this.hide=function(){
		this.setW(0);this.setH(0);
		clearInterval(this.img.timer);
	}
	this.discover=function(){
		var obj=this;
		obj.img.timer=setInterval(function(){//计时器
			if(obj.w<obj.hide_w0)obj.scale(3,1);
			else clearInterval(obj.img.timer);
		},0.001);
	}
	this.pointOnImg=function(x,y){
		if(x>this.x&&x<this.x+this.w
				&&y>this.y&&y<this.y+this.h)
				return true;
		else return false;
	}
};
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}//var IsPC=IsPC();

var myW=0,myH=0;
function updateWindowSize(){
	if(myH!=window.innerHeight||myW!=window.innerWidth){
		myH=window.innerHeigh;
		myW=window.innerWidth;
		appInst.setRenderSize(window.innerWidth, window.innerHeight);
		Web3DEngine.Camera.allCameras[0].aspect=window.innerWidth/window.innerHeight;
	}
}
var camera;//=new ImageMove('./meeting/camera.png',      window.innerHeight/13,window.innerHeight/13,window.innerWidth/25,window.innerHeight-80,document.body);
var camera2;//=new ImageMove('./meeting/camera2.png',      window.innerHeight/13,window.innerHeight/13,window.innerWidth/25,window.innerHeight-80,document.body);
function createCameraButton(){
	camera =new ImageMove('./meeting/camera.png',      window.innerHeight/13,window.innerHeight/13,window.innerWidth/25,window.innerHeight-80,document.body);
	camera2=new ImageMove('./meeting/camera2.png',      window.innerHeight/13,window.innerHeight/13,window.innerWidth/25,window.innerHeight-80,document.body);
	camera2.img.style.display='none';
	camera.img.onclick = function () {
		if (myUserControl == true) {
			myUserControl = false;
			camera2.img.style.display = 'none';
		} else {
			myUserControl = true;
			camera2.img.style.display = 'block';
		}
	};
	camera2.img.onclick = function () {
		if (myUserControl == true) {
			myUserControl = false;
			camera2.img.style.display = 'none';
		} else {
			myUserControl = true;
			camera2.img.style.display = 'block';
		}
	};
}