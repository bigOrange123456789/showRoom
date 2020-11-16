function PlayerControl(go) {
    Web3DEngine.MonoBehaviour.call(this, go);
    this.instClassType=PlayerControl.classType;
    this.f=1;
}
var myx1=0,myy1=0,mz1=0,myx2=0,myy2=0,myz2=0,myUserControl=false,myPreviewflag=1;
var prePointAtLine=1;//为0表示上一个节点不在线路上，为1表示上一个节点在线路上
var temp;
Web3DEngine.ExtendType( PlayerControl , Web3DEngine.MonoBehaviour, {
    Update: function (arg) {
        playerControl(this.f,this);
        if (this.f < 100)this.f++;
    }
});
function playerControl(f,myThis){
    sceneSet(f);
    updateWindowSize();
    if (f == 1) {
        //var mesh=myDraw3D.draw();new ParameMeasure(mesh,0);

        myPlayerControlAssistant.player = myThis;
        myPreviewManager.player = myThis;
        //console.log(appInst);
        //console.log(myThis);

        var renderer=Web3DEngine.Application.instance.getRenderer();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

        myPlayerControlAssistant.addMouseListener();
        myRadioMonitor.radioInit(myThis.gameObject);
    }else if(f==3){
        new SpriteCard();
        //new Plane();
    }else if(f==9){
        myLightManager.myInit(0);
    } else if (f > 10) {
        if(f==30)myLightManager.myInit(1);//创建动态光照
        else if(f==31)createCameraButton();
        else if(f==32)myLightManager.myInit(2);
        else if(f==33)myLightManager.myInit(3);
        else if(f==34)myLightManager.myInit(4);
        else if(f==35)myLightManager.myInit(5);
        myRadioMonitor.doubleClickControl();
        myExhibitionsManager.judgeChangeToUserControl();
        myPlayerControlAssistant.updateKeys();
    }//this.f
    myPreviewManager.autoRoam(appInst._renderScenePass.camera);
}
function sceneSet(f) {
    if(f==1){
        myRoomManager.initRoom();
        myRoomManager.loadRoom();//开始加载房间模型
        myAvatarManager.loadMan();///开始添加NPC
        myAvatarManager.loadWoman();
    }else if(f==4){
        //开始在加载3D模型的进程中加载图片
        ////开始设置展品的HTML
        myExhibitionsManager.setImg();
        myExhibitionsManager.init();
        myExhibitionsManager.boardsReMap();
        //完成初始化展板
    }else if(f==35){
        myExhibitionsManager.setVideo();
    }
    myAvatarManager.man_move();
    myExhibitionsManager.monitorPicUpload();
}