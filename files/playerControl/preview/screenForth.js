//第一次出去时候的移动控制//实际也调用了第二次回去时候的移动控制代码
//第一次出去时候不能平行于屏幕
//不关心位置问题，只关心角度问题
//代码越简洁越容易维护、
//冗余型代码项目容易开发
function screenForth(mydata,mystate,myallscreen,x2,y2,z2,angle2,angle,time){
    //if(typeof(myallscreen[mydata[mystate][5]].gameObject)=='undefined')return screenForth_threeJS(mydata,mystate,myallscreen,x2,y2,z2,angle2,angle,time);
    if(mydata[mystate][5]<23)moveScreen(myallscreen[mydata[mystate][5]],x2+Math.cos(angle*Math.PI/180)*3,y2,z2-Math.sin(angle*Math.PI/180)*3,angle2+90*mydata[mystate][6],Math.floor(time/3));
    else moveScreen(myallscreen[mydata[mystate][5]],x2+Math.cos(angle*Math.PI/180)*3,y2,z2-Math.sin(angle*Math.PI/180)*3,angle2+90*mydata[mystate][6],Math.floor(time/3));
}
/*function screenForth_threeJS(mydata,mystate,myallscreen,x2,y2,z2,angle2,angle,time){
    console.log(
        angle2+(Math.PI/2)*mydata[mystate][6],
        angle2,
        mydata[mystate][6]
    );
    if(mydata[mystate][5]<23)//对象   x2  y2  z2  angle2
        moveScreen(myallscreen[mydata[mystate][5]],x2+Math.cos(angle*Math.PI/180)*3,y2,z2-Math.sin(angle*Math.PI/180)*3,angle2+(Math.PI/2)*mydata[mystate][6],Math.floor(time/3));
    else moveScreen(myallscreen[mydata[mystate][5]],x2+Math.cos(angle*Math.PI/180)*3,y2,z2-Math.sin(angle*Math.PI/180)*3,angle2+(Math.PI/2)*mydata[mystate][6],Math.floor(time/3));
}*/
