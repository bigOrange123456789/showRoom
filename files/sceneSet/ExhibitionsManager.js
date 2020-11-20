var myExhibitionsManager=new ExhibitionsManager();
function ExhibitionsManager(){
    //需要用于布置展板的全局变量boardsParam、用于获取相机的appInst
    this.boards=[];
    this.myimgpanel=[];//里面存放了各个展品的DIV
    this.myimgpanel_bg=[];

    //以下为被控制展板的相关信息
    this.controlBoard=-1;//不在初始位置的展板序号
    this.dx=0;
    this.dy=0;
    this.dz=0;
    this.dAngle=0;
    this.nowTime=0;
    this.allTime=0;
    this.x0=0;
    this.y0=0;
    this.z0=0;
    this.angle0=0;
    //以上为被控制展板的相关信息

    this.updateTexturesetTimeout=0;

    this.rePos=function(i){//让第i个展板恢复到初始位置
        this.boards[i].position.set(boardsParam[i][3],boardsParam[i][4],boardsParam[i][5]);
    }
    this.init=function(){
        var material=new THREE.MeshBasicMaterial({color:0xffffff});// new THREE.MeshBasicMaterial({color:0xffffff});
        var scene=appInst._renderScenePass.scene;
        for(var i=0;i<boardsParam.length;i++){
            var square = new THREE.CubeGeometry(boardsParam[i][0],boardsParam[i][1],boardsParam[i][2]);//8.3 -13
            var myobj= new THREE.Mesh(square, material);
            myobj.position.set(boardsParam[i][3],boardsParam[i][4],boardsParam[i][5]);
            myobj.rotation.set(boardsParam[i][6]*Math.PI/180,
                boardsParam[i][7]*Math.PI/180,
                boardsParam[i][8]*Math.PI/180);
            this.boards.push(myobj);
            scene.add(myobj);
        }
    }
    this.setVideo=function () {
        var videos=[];
        videoss=document.createElement('div');
        videoss.style = 'position:fixed;left:0px;top:0px;margin-top:0px;border:0px solid #0ff;width:1197px;height:700px;display:none;';
        document.body.appendChild(videoss);
        for(var i=1;i<6;i++){
            videos.push(new ImageMove('video/'+i+'.jpg',myW,myH,0,0,videoss));
        }

        ////完成设置展品的HTML
        //开始为全部屏幕设置贴图

        var redzhuzi=appInst._renderScenePass.scene.children[1].children[0].children[1];//.children[0].children[0];
        for(var i=0;i<9;i++){
            var j=i%videos.length;
            //console.log(redzhuzi.children[i]);
            var texture = new THREE.Texture();
            texture.image =videos[j].img;//bg001.img;
            texture.needsUpdate = true;
            texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
            texture.minFilter=THREE.LinearFilter;
            texture.magFilter=THREE.LinearFilter;
            texture.format=THREE.RGBFormat;
            redzhuzi.children[i].children[0].material=
                new THREE.MeshLambertMaterial({
                    map: texture // 将材质的map属性设置为加载的图片
                });
        }
    }
    this.setImg=function () {
        window.myflag=0;
        for(var i=1;i<54;i++){
            this.myimgpanel.push( document.createElement('div'));
            //this.myimgpanel[i-1].style = 'text-align: center;position:fixed;left:0px;top:0px;margin-top:0px;border:0px solid #0ff;width:'+myW+'px;height:'+myH+'px;display:none;';
            this.myimgpanel[i-1].style = 'position:fixed;left:0px;top:0px;margin-top:0px;border:0px solid #0ff;width:'+myW+'px;height:'+myH+'px;display:none;';
            document.body.appendChild(this.myimgpanel[i-1]);

            var k={};
            k.img = new Image();
            k.img.src = 'pic/'+i+'.jpg';
            this.myimgpanel[i-1].appendChild(k.img);
            this.myimgpanel_bg.push(k);
            var THIS=this;//myimgpanel_bg=this.myimgpanel_bg;

            this.myimgpanel_bg[i-1].img.onload = function(){
                window.myflag++;
                if(window.myflag==53){
                    //这里myH myW为空导致了图片大小被错误的设置为了0
                    var myW=window.innerWidth,myH=window.innerHeight;
                    for(var j=0;j<THIS.myimgpanel_bg.length;j++){
                        var k=THIS.myimgpanel_bg[j];
                        if(k.img.width/myW>k.img.height/myH){
                            k.img.height=k.img.height*myW/k.img.width;
                            k.img.width=myW;
                            THIS.myimgpanel[j].style.top=(myH-k.img.height)/2+'px';
                        }else{
                            k.img.width=k.img.width*myH/k.img.height;
                            k.img.height=myH;
                            THIS.myimgpanel[j].style.left=(myW-k.img.width)/2+'px';
                        }
                        console.log(k.img.width,k.img.height);
                    }//for
                }
            };//onload
        }//for(var i=1;i<54;i++)
    }
    this.setImg0=function () {
        window.myflag=0;
        for(var i=1;i<54;i++){
            this.myimgpanel.push( document.createElement('div'));
            //this.myimgpanel[i-1].style = 'text-align: center;position:fixed;left:0px;top:0px;margin-top:0px;border:0px solid #0ff;width:'+myW+'px;height:'+myH+'px;display:none;';
            this.myimgpanel[i-1].style = 'position:fixed;left:0px;top:0px;margin-top:0px;border:0px solid #0ff;width:'+myW+'px;height:'+myH+'px;display:none;';
            document.body.appendChild(this.myimgpanel[i-1]);

            var k={};
            k.img = new Image();
            k.img.src = 'pic/'+i+'.jpg';
            this.myimgpanel[i-1].appendChild(k.img);
            this.myimgpanel_bg.push(k);
            var THIS=this;//myimgpanel_bg=this.myimgpanel_bg;

            this.myimgpanel_bg[i-1].img.onload = function(){
                window.myflag++;
                if(window.myflag==53){
                    for(var j=0;j<THIS.myimgpanel_bg.length;j++){
                        var k=THIS.myimgpanel_bg[j];
                        if(k.img.width/myW>k.img.height/myH){
                            k.img.height=k.img.height*myW/k.img.width;
                            k.img.width=myW;
                            THIS.myimgpanel[j].style.top=(myH-k.img.height)/2+'px';
                        }else{
                            k.img.width=k.img.width*myH/k.img.height;
                            k.img.height=myH;
                            THIS.myimgpanel[j].style.left=(myW-k.img.width)/2+'px';
                        }
                        console.log(k.img.width,k.img.height);
                    }//for
                }
            };//onload
        }//for(var i=1;i<54;i++)
    }
    this.boardsReMap=function(){//this.myimgpanel_bg ,  boards
        for(var i=0;i<this.boards.length;i++){
            var j=i%(this.myimgpanel_bg.length);
            this.boards[i].name=j;
            var texture = new THREE.Texture();
            texture.image = this.myimgpanel_bg[j].img;//bg001.img;
            texture.needsUpdate = true;
            texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
            texture.minFilter=THREE.LinearFilter;
            texture.magFilter=THREE.LinearFilter;
            texture.format=THREE.RGBFormat;
            this.boards[i].material=
                new THREE.MeshLambertMaterial({
                    map: texture // 将材质的map属性设置为加载的图片
                });
        }
    }
    this.monitorPicUpload=function(){
        if(haveNewPic!=-1){
            this.updateTexturesetTimeout++;
            //console.log(haveNewPic,updateTexturesetTimeout);
            if(this.updateTexturesetTimeout==2){
                myExhibitionsManager.myimgpanel_bg[haveNewPic].img.src='pic/'+(haveNewPic+1)+'.jpg'+'?time='+new Date();
                //开始更新屏幕贴图
                var myallscreen=myExhibitionsManager.boards;//appInst._renderScenePass.scene.children[1].children[0].children[0].children;
                //console.log(myallscreen);
                for(var i=0;i<myallscreen.length;i++){
                    var j=i%(myExhibitionsManager.myimgpanel_bg.length);
                    if(j==haveNewPic){
                        myallscreen[i].name=j;
                        var texture = new THREE.Texture();
                        texture.image = myExhibitionsManager.myimgpanel_bg[j].img;//bg001.img;
                        texture.needsUpdate = true;
                        texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
                        texture.minFilter=THREE.LinearFilter;
                        texture.magFilter=THREE.LinearFilter;
                        texture.format=THREE.RGBFormat;
                        //console.log(myExhibitionsManager.boards[i]);
                        myExhibitionsManager.boards[i].material=new THREE.MeshLambertMaterial({map: texture});
                    }

                }//for(var i=0;i<myallscreen.length;i++)
                //alert('已更新');
                //完成更新屏幕贴图
                haveNewPic=-1;
                this.updateTexturesetTimeout=0;
            }
        }
    }
    this.judgeChangeToUserControl=function(){
        if(myUserControl&&this.controlBoard!=-1)
            movetoPos0Correct(this.boards[myExhibitionsManager.controlBoard],
                this.x0,myExhibitionsManager.y0,this.z0,
                this.angle0);
    }
    BoardsManager1.call(this);
}
function BoardsManager1(){//展板管理者
}//BoardsManager展板管理者对象结束