var myPreviewManager=new PreviewManager();
function PreviewManager(){
    this.player;
    this.myExhibitionsManager;
    this.autoRoam=function(this_directionY_Ref){
        /////////////////////开始编写用户视角位置的控制功能/////////////
        //如果不处于用户控制状态
        if(!myUserControl){
            if(myPreviewflag ==-1){
                this.player.gameObject.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(7.5,4.6,-1.5);//localEulerAngles
                this.player.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles=new THREE.Vector3(0,89,0);
                this_directionY_Ref.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles=new THREE.Vector3(17.1,0,0);
                myPreviewflag++;//路径数组的下标
                prePointAtLine=1;
            }else{
                for(var i=0;i<mydata.length;i++)
                    //如果 myPreviewflag=i 就进行移动
                    //如果 达到了目的状态，就停止调整
                    if (myPreviewflag === i && preview(myPreviewflag, this.player, mydata, this_directionY_Ref)) {
                        //下面是达到目的状态后要进行的操作
                        myPreviewflag++;//指向下一个行，目标指向下一个状态
                        prePointAtLine = 1;//完成了一个阶段后，上一个节点一定在默认路径上
                        if (i === mydata.length - 1) myPreviewflag = 0;
                        break;
                    }
            }
        }
        //如果处于用户控制状态
        else if(prePointAtLine===1)prePointAtLine=0;//上一个点不在路线上且需要更新mydata
        else if(prePointAtLine===0)prePointAtLine=-1;//上一个点不在路线上且已经修改完了mydata
        /////////////////////完成编写用户视角位置的控制功能/////////////
    }
    function preview(mystate,thisObj,mydata ,mycamera){//thisObj,time,mycamera,k//thisObj,x1,y1,z1,x2,y2,z2,time,mycamera,k
        //mystate是漫游路径数组的下标，

        var x1,y1,z1,x2,y2,z2,angle1=0,angle2=0;//初始状态和结束状态//a=c
        var time=mydata[mystate][4];//所用时间
        //现在的错误：
        //1.直接跳到了本阶段的结束状态
        //不知道是什么原因
        //偏移路线后重启，本阶段会立即结束

        //下面找出初始状态
        if(mystate==0){//数组的最后一行
            x1=mydata[mydata.length-1][0];y1=mydata[mydata.length-1][1];z1=mydata[mydata.length-1][2];
            angle1=mydata[mydata.length-1][3];
        } else {//数组的前一行
            x1=mydata[mystate-1][0];y1=mydata[mystate-1][1];z1=mydata[mystate-1][2];
            angle1=mydata[mystate-1][3];
        }

        //下面找出目标状态
        x2=mydata[mystate][0];y2=mydata[mystate][1];z2=mydata[mystate][2];
        angle2=mydata[mystate][3];

        /////////////开始移动屏幕/////////////
        if(mydata[mystate].length>5){//如果需要移动屏幕
            var myallscreen =myExhibitionsManager.boards; //appInst._renderScenePass.scene.children[1].children[0].children[0].children;
            var x=thisObj.gameObject.getComponent(Web3DEngine.Transform).localPosition.x;
            var z=thisObj.gameObject.getComponent(Web3DEngine.Transform).localPosition.z;
            if(x==mydata[mystate-1][0]) {
                myExhibitionsManager.nowTime=0;
                myExhibitionsManager.controlBoard=mydata[mystate][5];
                myExhibitionsManager.x0=myallscreen[mydata[mystate][5]].position.x;
                myExhibitionsManager.y0=myallscreen[mydata[mystate][5]].position.y;
                myExhibitionsManager.z0=myallscreen[mydata[mystate][5]].position.z;
                myExhibitionsManager.angle0=myallscreen[mydata[mystate][5]].rotation.y;
                firstToState=true;
            }
            var angle=thisObj.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles.y;//angle-=90;
            if ((x - x1) / (x2 - x1) < 1 / 3) {
                screenForth(mydata, mystate, myallscreen, x2, y2, z2, angle, angle2, time);
            } else if ((x - x1) / (x2 - x1) > 2 / 3) {
                if (firstToState) {
                    myExhibitionsManager.nowTime = 0;
                    firstToState = false;
                }
                moveScreen(myallscreen[mydata[mystate][5]], myExhibitionsManager.x0, myExhibitionsManager.y0, myExhibitionsManager.z0, myExhibitionsManager.angle0, Math.floor(time / 3));
            }
        }//if(mydata[mystate].length>5)//如果需要移动屏幕
        /////////////结束移动屏幕/////////////

        //下面开始调整相机，完成调整返回true，否则返回false
        return movetoPos(thisObj,x1,y1,z1,x2,y2,z2,angle1,angle2,time);
    }
    function movetoPos(thisObj,x1,y1,z1,x2,y2,z2,angle1,angle2,time){//移动
        //这个函数是核心代码，需要相机对象，起始状态，结束状态，时间
        //首先使用相机对象获取当前状态
        var x=thisObj.gameObject.getComponent(Web3DEngine.Transform).localPosition.x;
        var z=thisObj.gameObject.getComponent(Web3DEngine.Transform).localPosition.z;

        //移动坐标
        move(thisObj,1,(x2-x1)/time);
        move(thisObj,2,(y2-y1)/time);//+k);
        move(thisObj,3,(z2-z1)/time);

        //开始计算角度差
        var angle_add=angle2-angle1;
        if(angle_add>180)angle_add-=360;
        if(angle_add<-180)angle_add+=360;
        //完成计算角度差
        //旋转角度
        rotation1(thisObj,2,angle_add/time);

        //接下来要判断是否到达了目的地
        //if(z1==3.8)console.log(x1,x,x2,';',z1,z,z2);
        var flag=0;//首先假设没有到达
        if(z1!=z2&&!(z1<=z&&z<=z2)&&!(z2<=z&&z<=z1))flag=1;
        else if(x1!=x2&&!(x1<=x&&x<=x2)&&!(x2<=x&&x<=x1))flag=1;//已到达目的地
        else if(x1==x2&&z1==z2)flag=1;//else if(x1==x2&&y1==y2)flag=1;
        //以上判断状态的时候没有考虑角度

        //如果到达了目的状态，需要返回true并（微调）纠正状态
        if(flag==1){
            thisObj.gameObject.getComponent(Web3DEngine.Transform).localPosition = new THREE.Vector3(x2, y2, z2);
            thisObj.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles= new THREE.Vector3(thisObj.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles.x,angle2,thisObj.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles.z);
            if(typeof(thisObj.directionY_Ref)!='undefined'){
                thisObj.directionY_Ref.rotation.x=0;
                thisObj.directionY_Ref.rotation.y=0;//-90*Math.PI/180;
                thisObj.directionY_Ref.rotation.z=0;/**/
            }//thisObj.directionY_Ref.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles= new THREE.Vector3(0,-90,0);
            return true;
        }
        return false;
    }
    /*function atMovableRange(x,z){//移动前先看目标点是否可移动，可移动时再移动
        //需要两个数组--全局变量
        var flag1=false,flag2=true;
        for(var i=0;i<movableRange.length;i++)
            if(movableRange[i][0]<x&&x<movableRange[i][1]&&movableRange[i][2]<z&&z<movableRange[i][3]){
                flag1=true;break;
            }
        for(var i=0;i<immovableRange.length;i++)
            if(immovableRange[i][0]<x&&x<immovableRange[i][1]&&immovableRange[i][2]<z&&z<immovableRange[i][3]){
                flag2=false;break;
            }
        return flag1&&flag2;
    }*/
}


