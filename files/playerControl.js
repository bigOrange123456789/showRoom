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
function mytest(){

    var cylinder=new THREE.CylinderGeometry(0.3,1,8,50,5);//顶面半径, 底面半径, 圆柱体的高度, 顶面分段, 高度分段
    var material= new THREE.MeshBasicMaterial({color:0xffffff, transparent: true,opacity: 0.5 });
    //var mesh= new THREE.InstancedMesh(cylinder, material,1);
    var mesh= new THREE.Mesh(cylinder, material);
    var scene    =appInst._renderScenePass.scene;
    scene.add(mesh);
}
function makeInstanced(geo, mtxObj, oriName, type) {
    //console.log(geo);//console.log(geo,mtxObj,oriName,type);
    //console.log(mtxObj);//{446=IfcColumn: Array(16), 540=IfcColumn: Array(16)}
    //console.log(oriName);//2336=IfcColumn
    //console.log(type);//IfcColumn
    //这个函数只被reuseDataParser函数调用
    let mtxKeys = Object.keys(mtxObj);
    let instanceCount = mtxKeys.length + 1;

    //生成mesh只需要两样东西，材质material和几何igeo
    //1.material
    var vert = document.getElementById('vertInstanced').textContent;
    var frag = document.getElementById('fragInstanced').textContent;

    let myTexture = selectTextureByType(type,0.001);

    var uniforms={
        texture:{type: 't', value: myTexture}
    };
    var material = new THREE.RawShaderMaterial({
        uniforms: uniforms,
        vertexShader: vert,
        fragmentShader: frag
    });

    //2.igeo几何//InstancedBufferGeometry//将原网格中的geo拷贝到igeo中
    var igeo=new THREE.InstancedBufferGeometry();//geometry//threeJS中有一种对象叫InstancedMesh，构造方法为InstancedMesh( geometry : BufferGeometry, material : Material, count : Integer )

    var vertices = geo.attributes.position.clone();
    igeo.addAttribute('position', vertices);//设置几何中的点
    igeo.setIndex(geo.index);
    var mcol0 = new THREE.InstancedBufferAttribute(
        new Float32Array(instanceCount * 3), 3
    );
    var mcol1 = new THREE.InstancedBufferAttribute(
        new Float32Array(instanceCount * 3), 3
    );
    var mcol2 = new THREE.InstancedBufferAttribute(
        new Float32Array(instanceCount * 3), 3
    );
    var mcol3 = new THREE.InstancedBufferAttribute(
        new Float32Array(instanceCount * 3), 3
    );

    //设置原始mesh的变换矩阵与名称
    //setXYZ(i,x,y,z)
    mcol0.setXYZ(0, 1, 0, 0);
    mcol1.setXYZ(0, 0, 1, 0);
    mcol2.setXYZ(0, 0, 0, 1);
    mcol3.setXYZ(0, 0, 0, 0);
    let instancedMeshName = oriName;
    for (let i = 1, ul = instanceCount; i < ul; i++) {
        let currentName = mtxKeys[i - 1];
        let mtxElements = mtxObj[currentName];
        mcol0.setXYZ(i, mtxElements[0], mtxElements[1], mtxElements[2]);
        mcol1.setXYZ(i, mtxElements[4], mtxElements[5], mtxElements[6]);
        mcol2.setXYZ(i, mtxElements[8], mtxElements[9], mtxElements[10]);
        mcol3.setXYZ(i, mtxElements[12], mtxElements[13], mtxElements[14]);
        instancedMeshName += ('_' + currentName);
    }
    igeo.addAttribute('mcol0', mcol0);
    igeo.addAttribute('mcol1', mcol1);
    igeo.addAttribute('mcol2', mcol2);
    igeo.addAttribute('mcol3', mcol3);

    var colors = new THREE.InstancedBufferAttribute(
        new Float32Array(instanceCount * 3), 3
    );
    for (let i = 0, ul = colors.count; i < ul; i++) {// colors.setXYZ(i, color.r, color.g, color.b);
        colors.setXYZ(i, 0.33, 0.33, 0.33);
    }
    igeo.addAttribute('color', colors);

    //3.mesh
    var mesh = new THREE.Mesh(igeo, material);//生成的还是mesh对象
    mesh.scale.set(0.001, 0.001, 0.001);
    mesh.material.side = THREE.DoubleSide;
    mesh.frustumCulled = false;
    mesh.name = oriName;
    sceneRoot.add(mesh);
}
function playerControl(f,myThis){
    sceneSet(f);
    updateWindowSize();
    if (f == 1) {
        mytest();
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