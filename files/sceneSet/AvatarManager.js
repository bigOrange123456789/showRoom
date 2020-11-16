var myAvatarManager=new AvatarManager();
function AvatarManager(){
    this.movedAvatar=[];
    this.movedAvatarGender=[];
    this.movedAvatarIndex=[];
    this.man_move_direction=[];
    this.loadMan=function(){
        var myThis=this;
        //开始加载模型
        var loader = new Web3DEngine._W3DGLTFLoader;
        //开始加载男性模型
        loader.load(
            'files/assets/man.glb',//'robot06.glb',//'files/assets/man.glb',//'birds.glb',//'files/assets/man.glb',
            function ( gltf ) {//console.log(Web3DEngine.SceneManager.GetActiveScene()._imp.children);
                var mesh = new Web3DEngine.Mesh;
                mesh._originalAsset = gltf;
                if(gltf.scene.transform._sceneRootGO)gltf.scene.transform._sceneRootGO.transform._removeChild(gltf.scene.transform);// 若存在于场景中，则移除
                ///////////////开始布置NPC/////////////
                for (var i = 0; i <mansPA.length; i++) {//上衣//1.上衣 2.头手 3.鞋子 4.裤子
                    var man;
                    if (typeof (firstman) == 'undefined') {
                        firstman = creater(mesh);//new Web3DEngine.GameObject();
                        man = firstman;
                        var renderer = man.getComponent(Web3DEngine.SkinnedMeshRenderer);///蒙皮网格渲染器
                        var play = renderer.gameObject.addComponent(Web3DEngine.AnimationPlayer);
                    } else man = Web3DEngine.GameObject.Instantiate(firstman);//模型
                    myThis.setManAvatar(renderer,i);
                    //动作//setAnimation(man,5,0.1+4*Math.random());
                    renderer = man.getComponent(Web3DEngine.SkinnedMeshRenderer);
                    if(mansPA[i].length>4){
                        myThis.manAnimation(man,'walk',1);
                        myThis.movedAvatar.push(man);
                        myThis.movedAvatarGender.push(1);//man1/woman0
                        myThis.movedAvatarIndex.push(i);
                        myThis.man_move_direction.push(1);
                    }else myThis.manAnimation(man,'stand',0.01 + Math.random());
                    man.getComponent(Web3DEngine.Transform).localScale = new THREE.Vector3(1, 1 + Math.random()/8-0.125, 1);
                    if(mansPA[i][2]<-9)man.getComponent(Web3DEngine.Transform).localPosition = new THREE.Vector3(mansPA[i][0],0.17,mansPA[i][2]);
                    else man.getComponent(Web3DEngine.Transform).localPosition = new THREE.Vector3(mansPA[i][0],0,mansPA[i][2]);
                    man.getComponent(Web3DEngine.Transform).localEulerAngles = new THREE.Vector3(0,mansPA[i][3]+90, 0);
                    //if(i==5)window.man=man;//this.man_move=man;
                }
                ///////////////完成布置NPC/////////////
            }//loader.load
        );//完成加载男性模型
    }
    this.loadWoman=function(){
        //开始加载女性模型
        var myThis=this;
        var loader2 = new Web3DEngine._W3DGLTFLoader;
        loader2.load(
            'files/assets/woman.glb',//'robot06.glb',//'files/assets/man.glb',//'birds.glb',//'files/assets/man.glb',
            function ( gltf ) {//console.log(Web3DEngine.SceneManager.GetActiveScene()._imp.children);
                var mesh2 = new Web3DEngine.Mesh;
                mesh2._originalAsset = gltf;
                if(gltf.scene.transform._sceneRootGO)gltf.scene.transform._sceneRootGO.transform._removeChild(gltf.scene.transform);// 若存在于场景中，则移除
                ///////////////开始布置NPC/////////////
                for (var i = 0; i <womansPA.length; i++) {//上衣//1.上衣 2.头手 3.鞋子 4.裤子
                    var man;
                    if (typeof (firstwoman) == 'undefined') {
                        firstwoman = creater(mesh2);//new Web3DEngine.GameObject();
                        man = firstwoman;
                        var renderer = man.getComponent(Web3DEngine.SkinnedMeshRenderer);///蒙皮网格渲染器
                        var play = renderer.gameObject.addComponent(Web3DEngine.AnimationPlayer);
                    } else man = Web3DEngine.GameObject.Instantiate(firstwoman);//模型
                    myThis.setWomanAvatar(renderer,i);
                    //动作//setAnimation(man,5,0.1+4*Math.random());
                    renderer = man.getComponent(Web3DEngine.SkinnedMeshRenderer);
                    if(womansPA[i].length>4)myThis.womanAnimation(man,'walk',1); //play.CrossFade('Male_Walk', 0.1);
                    else myThis.womanAnimation(man,'stand',0.0001+0.01*Math.random());
                    man.getComponent(Web3DEngine.Transform).localScale = new THREE.Vector3(1, 1 + Math.random()/4-0.125, 1);
                    if(mansPA[i][2]<-9)man.getComponent(Web3DEngine.Transform).localPosition = new THREE.Vector3(womansPA[i][0],0.17,womansPA[i][2]);
                    else man.getComponent(Web3DEngine.Transform).localPosition = new THREE.Vector3(womansPA[i][0],0,womansPA[i][2]);
                    man.getComponent(Web3DEngine.Transform).localEulerAngles = new THREE.Vector3(0,womansPA[i][3]+90, 0);
                    //if(i==5)window.man=man;//this.man_move=man;
                }
                ///////////////完成布置NPC/////////////
            }//loader.load
        );//完成加载女性模型
    }
    this.man_move=function(){//移动游戏对象、相机、光源
        for(var i=0;i<myAvatarManager.movedAvatar.length;i++){
            var obj=this.movedAvatar[i];
            var index=this.movedAvatarIndex[i];
            var angle=mansPA[index][3];
            var obj=obj.getComponent(Web3DEngine.Transform);
            //以下是以初始位置为中点的判断
            //以下是以初始位置为端点的判断
            if(!(Math.abs(obj.localPosition.x-mansPA[index][0])<Math.abs(mansPA[index][4]*Math.cos(angle*Math.PI/180))))
                if(this.man_move_direction[i]==1){
                    this.man_move_direction[i]=-1;
                    obj.localEulerAngles=new THREE.Vector3(
                        obj.localEulerAngles.x,
                        obj.localEulerAngles.y+180,
                        obj.localEulerAngles.z);
                    move(obj,1,Math.cos(angle*Math.PI/180)*this.man_move_direction[i]);
                    move(obj,-3,Math.sin(angle*Math.PI/180)*this.man_move_direction[i]);
                }else if(this.man_move_direction[i]==-1){
                    this.man_move_direction[i]=1;
                    obj.localEulerAngles=new THREE.Vector3(
                        obj.localEulerAngles.x,
                        obj.localEulerAngles.y-180,
                        obj.localEulerAngles.z);
                    move(obj,1,Math.cos(angle*Math.PI/180)*this.man_move_direction[i]);
                    move(obj,-3,Math.sin(angle*Math.PI/180)*this.man_move_direction[i]);
                }
            move(obj,1,Math.cos(angle*Math.PI/180)*this.man_move_direction[i]/40);
            move(obj,-3,Math.sin(angle*Math.PI/180)*this.man_move_direction[i]/40);
        }
    }
    AvatarTool.call(this);
}
function AvatarTool(){
    this.setManAvatar=function(renderer,i){
        //贴图
        if (i < 8) {
            if (i != 0) setMapping3(renderer, i, 1);//上衣//1.上衣 2.头手 3.鞋子 4.裤子
            if (i != 0) setMapping3(renderer, i, 2);//头手
            if (i != 0) setMapping3(renderer, i, 4);//裤子
        } else {
            i -= 8;
            if (i == 0) {
                if (i != 0) setMapping3(renderer, i, 1);//上衣//1.上衣 2.头手 3.鞋子 4.裤子
                setMapping3(renderer,7, 2);//头手
                setMapping3(renderer, 6, 4);//裤子
            } else if (i == 1) {
                if (i != 0) setMapping3(renderer, i, 1);//上衣//1.上衣 2.头手 3.鞋子 4.裤子
                if (i-1 != 0) setMapping3(renderer, i - 1, 2);//头手
                setMapping3(renderer, 7, 4);//裤子
            } else {
                if (i != 0) setMapping3(renderer, i, 1);//上衣//1.上衣 2.头手 3.鞋子 4.裤子
                if (i-1 != 0) setMapping3(renderer, i - 1, 2);//头手
                if (i-2 != 0) setMapping3(renderer, i - 2, 4);//裤子
            }
        }
        //颜色
        setColour2(renderer, Math.floor(Math.random() * 8 + 1), 1);//上衣
        if(Math.random()<0.2)setColour2(renderer, 1, 2);//
        else if(Math.random()<0.1)setColour2(renderer, 2, 2);
        else if(Math.random()<0.1)setColour2(renderer, 3, 2);
        else if(Math.random()<0.1)setColour2(renderer, 4, 2);
        else if(Math.random()<0.1)setColour2(renderer, 5, 2);
        else if(Math.random()<0.1)setColour2(renderer, 6, 2);
        else if(Math.random()<0.1)setColour2(renderer, 7, 2);
        //else if(Math.random()<0.1)setColour2(renderer, 7, 2);
        setColour2(renderer, Math.floor(Math.random() * 8 + 1), 3);//鞋子
        setColour2(renderer, Math.floor(Math.random() * 8 + 1), 4);//裤子
        //骨骼
        var boneArray = [];//总共有41根骨头
        for (var j = 0; j < renderer._skeletons[0].boneInverses.length; j++) {///skeletons骨骼
            var copyBoneInverses = new THREE.Matrix4().copy(renderer._skeletons[0].boneInverses[j]);///从蒙皮网格渲染器骨骼中取一根骨头
            boneArray.push(copyBoneInverses);///将取出的骨头存入到数组中
        }
        for (var k = 1; k < 10; k++) adjustBone(k, Math.random(), renderer, boneArray);
    }
    this.setWomanAvatar=function(renderer,i){
        //贴图
        if (i != 0) setMapping3(renderer, i, 1,0);//上衣//1.上衣 2.头手 3.鞋子 4.裤子
        if (i != 0) setMapping3(renderer, i, 2,0);//头手
        if (i != 0) setMapping3(renderer, i, 4,0);//裤子
        //颜色
        setColour2(renderer, i, 3);//鞋子
        //骨骼
        var boneArray = [];//总共有41根骨头
        for (var j = 0; j < renderer._skeletons[0].boneInverses.length; j++) {///skeletons骨骼
            var copyBoneInverses = new THREE.Matrix4().copy(renderer._skeletons[0].boneInverses[j]);///从蒙皮网格渲染器骨骼中取一根骨头
            boneArray.push(copyBoneInverses);///将取出的骨头存入到数组中
        }
        for (var k = 1; k < 10; k++) adjustBone(k, Math.random(), renderer, boneArray);
    }
    this.manAnimation=function(mesh,myAnimation,speed){
        var manAnimation = [
            'Male_Sit_handclap',
            'Male_Sitting',
            'Male_SitToStand',
            'Male_Stand_handclap',
            'Male_Stand_LookAround',//4
            'Male_StandToSit',
            'Male_Walk'//6
        ];//0-6
        if(myAnimation=='walk')myAnimation=7;
        else if(myAnimation=='stand')myAnimation=5;//console.log(womanAnimation);//console.log(myAnimation);//,womanAnimation[myAnimation-1]
        mesh.getComponent(Web3DEngine.AnimationPlayer).CrossFade(manAnimation[myAnimation-1], 0.1);
        mesh.getComponent(Web3DEngine.AnimationPlayer).speed=speed;
    }
    this.womanAnimation=function(mesh,myAnimation,speed){
        var womanAnimation=[
            'Female_Chin.fbx',
            'Female_Chin1.fbx',
            'Female_Cross.fbx',
            'Female_ShowHand.fbx',
            'Female_SitHandClap.fbx',
            'Female_SitToStand.fbx',
            'Female_StandLookAround.fbx',//6
            'Female_StandToSit.fbx',
            'Female_Walk.fbx'//8
        ];//0-8
        if(myAnimation=='walk')myAnimation=9;
        else if(myAnimation=='stand')myAnimation=7;
        mesh.getComponent(Web3DEngine.AnimationPlayer).CrossFade(womanAnimation[myAnimation-1], 0.1);
        setTimeout(function(){
            mesh.getComponent(Web3DEngine.AnimationPlayer).speed=speed;
        },100);
    }
}