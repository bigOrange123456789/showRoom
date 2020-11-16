//第二次回去时候的移动控制
////////////////////////////////开始用于移动屏幕的函数////////////////////////////////
var firstToState=true;
function moveScreen(thisObj,x,y,z,angle,alltime){//开始移动屏幕
    angle=angle*Math.PI/180;
    if(myExhibitionsManager.nowTime==0){//第一次移动
        myExhibitionsManager.dx=x-thisObj.position.x;
        myExhibitionsManager.dy=y-thisObj.position.y;
        myExhibitionsManager.dz=z-thisObj.position.z;
        //开始计算角度差
        myExhibitionsManager.dAngle=angle-thisObj.rotation.y;
        //console.log(myExhibitionsManager.dAngle);
        if(myExhibitionsManager.dAngle>Math.PI)myExhibitionsManager.dAngle-=Math.PI;
        else if(myExhibitionsManager.dAngle<-Math.PI)myExhibitionsManager.dAngle+=Math.PI;
        myExhibitionsManager.dx=myExhibitionsManager.dx/alltime;
        myExhibitionsManager.dy=myExhibitionsManager.dy/alltime;
        myExhibitionsManager.dz=myExhibitionsManager.dz/alltime;
        myExhibitionsManager.dAngle=myExhibitionsManager.dAngle/alltime;
       // console.log('angle*Math.PI/180,thisObj.rotation.y,myExhibitionsManager.dAngle:'
       //     ,angle*Math.PI/180,thisObj.rotation.y,myExhibitionsManager.dAngle);
        //完成计算角度差
        myExhibitionsManager.allTime=alltime;
        movetoPos0(thisObj,myExhibitionsManager.dx,myExhibitionsManager.dy,myExhibitionsManager.dz,myExhibitionsManager.dAngle);
        myExhibitionsManager.nowTime++;
    }else if(myExhibitionsManager.nowTime==myExhibitionsManager.allTime){//最后一次纠正移动
        movetoPos0Correct(thisObj,x,y,z,angle);
        myExhibitionsManager.nowTime=-1;
    }else if(myExhibitionsManager.nowTime!=-1){//普通移动
        movetoPos0(thisObj,myExhibitionsManager.dx,myExhibitionsManager.dy,myExhibitionsManager.dz,myExhibitionsManager.dAngle);
        myExhibitionsManager.nowTime++;
    }
}
function movetoPos0(thisObj,dx,dy,dz,dangle){//移动
        thisObj.position.set(thisObj.position.x+dx,thisObj.position.y+dy,thisObj.position.z+dz);
        thisObj.rotation.y+=dangle;
}
function movetoPos0Correct(thisObj, x, y, z, angle) {//纠正
        thisObj.position.set(x, y, z);
        thisObj.rotation.y = angle;//*Math.PI/360;
}
////////////////////////////////完成用于移动屏幕的函数////////////////////////////////