var myRadioMonitor=new RadioMonitor();
function RadioMonitor() {
     this.moveFlag1=0;
     this.moveFlag2=0;//0-20
     this.doubleClickControl=function () {//每帧执行一次
         if(this.moveFlag1!=0&&document.getElementById('selectPicPanel').style.display=='none'){//用于协助实现双击地板移动位置的功能
             this.moveFlag2++;
             if(this.moveFlag2>20){
                 this.moveFlag1=0;
                 this.moveFlag2=0;
             }
         }//if(moveFlag1!=0)
     }
     this.radioInit=function(this_obj){
         var myThis=this;
         document.body.onmousedown = function (event) {//点击事件的监听
            if(document.getElementById('selectPicPanel').style.display=='none')
                if (event.button === 0) {
                    flag = 0;
                    for (j = 0; j < myExhibitionsManager.myimgpanel.length; j++) {
                        if (myExhibitionsManager.myimgpanel[j].style.display == 'block') {
                            flag++;
                            myExhibitionsManager.myimgpanel[j].style.display = 'none';
                        }
                    }//for(j=0;j<myExhibitionsManager.myimgpanel.length;j++)
                    if (flag == 0) {
                        appInst._renderer.domElement.addEventListener("mousedown", this.onPointerDown, false);
                        appInst._renderer.domElement.addEventListener("touchstart", this.onPointerDown, false);
                        //计算:
                        var ray=new THREE.Raycaster();
                        var renderer=appInst._renderer;
                        let pointer=getPointer(event, renderer.domElement);
                        ray.setFromCamera(pointer, appInst._renderScenePass.camera);
                        //var myallscreen=appInst._renderScenePass.scene.children[1].children[0].children[0].children;
                        var objs = [];
                        for(var i=0;i<myExhibitionsManager.boards.length;i++)objs.push(myExhibitionsManager.boards[i]);

                        //开始一级点击检测
                        var planeIntersects = ray.intersectObjects(objs, true);
                        var planeIntersect = planeIntersects[0] || false;
                        if (planeIntersect) {//点击到展板
                            myExhibitionsManager.myimgpanel[planeIntersect.object.name].style.display = 'block';
                        } else if (!camera.pointOnImg(event.pageX, event.pageY)) {//没有点击到展板，检测点击到地板的位置
                            //开始二级点击检测
                            //var myroomobj=appInst._renderScenePass.scene.children[1].children[0].children[4].children[0].children[0].children[0];
                            //planeIntersects =ray.intersectObjects([myroomobj.gameObject._imp], true);
                            var objs = [];
                            for(var z=0;z<myFloor[0].net.children.length;z++)
                                objs.push(myFloor[0].net.children[z]);
                            for(var z=0;z<myFloor[1].net.children.length;z++)
                                objs.push(myFloor[1].net.children[z]);
                            //objs.push(myFloor[1].net.children[ myFloor[0].net.children.length-1 ]);
                            //console.log(myFloor[0].net.children[myFloor[0].net.children.length-1]);
                            planeIntersects =ray.intersectObjects(objs, true);
                            planeIntersect = planeIntersects[0] || false;
                            //console.log('planeIntersect', planeIntersect);//myobj.position.set(planeIntersect.object.gameObject._compoents[0].position.x,planeIntersect.object.gameObject._compoents[0].position.y+0.25,planeIntersect.object.gameObject._compoents[0].position.z);
                            if(planeIntersects.length)var x=planeIntersect.point.x,z=planeIntersect.point.z;
                            if(atMovableRange(x,z)){ //((-12.5<x&&x<15.7&&-8.7<z&&z<7)||(-5<x&&x<15&&-16.6<z&&z<-6.1)) {//atMovableRange(x,z)
                                myThis.moveFlag1++;
                                if(!IsPC()||myThis.moveFlag1==2){//双击检测,移动端不需要
                                    this_obj.getComponent(Web3DEngine.Transform).localPosition =
                                        new THREE.Vector3(planeIntersect.point.x, this_obj.getComponent(Web3DEngine.Transform).localPosition.y, planeIntersect.point.z);
                                    myUserControl = true;//切换到用户控制
                                    camera2.img.style.display = 'block';//切换到用户控制,UI
                                }//if(moveFlag1==2)
                            }
                        }//if (planeIntersect)
                    }//if(flag==0)
                }else if (event.button == 2) {//开始用于上传图片的射线检测
                    appInst._renderer.domElement.addEventListener("mousedown", this.onPointerDown, false);
                    appInst._renderer.domElement.addEventListener("touchstart", this.onPointerDown, false);
                    //计算:
                    ray = new THREE.Raycaster();
                    var renderer = appInst._renderer;
                    let pointer = getPointer(event, renderer.domElement);
                    ray.setFromCamera(pointer, appInst._renderScenePass.camera);
                    var myallscreen =myExhibitionsManager.boards; //appInst._renderScenePass.scene.children[1].children[0].children[0].children;
                    var objs = [];
                    var s="";
                    for (var i = 0; i < myallscreen.length; i++)objs.push(myallscreen[i]);
                    //console.log(myallscreen);
                    //开始一级点击检测
                    var planeIntersects = ray.intersectObjects(objs, true);
                    var planeIntersect = planeIntersects[0] || false;
                    if (planeIntersect) {//点击到展板
                        //console.log(planeIntersect);

                        selectPicPanel.style.display='block';
                        NewPic=planeIntersect.object.name;
                        console.log(NewPic);
                        document.getElementById("mytext00").innerHTML =
                            "展板位置："+NewPic;
                        document.getElementById("mytext02").innerHTML =
                            "建议长宽比："+Math.floor(
                            Math.max(
                                planeIntersect.object.geometry.parameters.depth,
                                planeIntersect.object.geometry.parameters.width)
                            /planeIntersect.object.geometry.parameters.height * 100) / 100;
                        document.getElementById("myform").action=upLoadServerIp+"/upload?pic_name="+(1+planeIntersect.object.name);

                        //console.log('name:'+planeIntersect.object.name);//0-15//alert(111);
                    }//if (planeIntersect)
                }////完成用于上传图片的射线检测//if (event.button == 2)
        }//document.body.onmousedown
        //完成点击事件的监听
    }
    function getPointer(event, domElement) {
        if (document.pointerLockElement) {
            return {
                x: 0,
                y: 0,
                button: event.button || event.buttons
            };
        } else {
            var pointer = event.changedTouches ? event.changedTouches[0] : event;
            var rect = domElement.getBoundingClientRect();
            return {
                x: ((pointer.clientX - rect.left) / rect.width) * 2 - 1,
                y: (-(pointer.clientY - rect.top) / rect.height) * 2 + 1,
                button: event.button || event.buttons
            };
        }
    }//function getPointer(event, domElement)
    function atMovableRange(x,z){//移动前先看目标点是否可移动，可移动时再移动//(-12.5<x&&x<15.7&&-8.7<z&&z<7)||(-5<x&&x<15&&-16.6<z&&z<-6.1)//
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
    }
}
