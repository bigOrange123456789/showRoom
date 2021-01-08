var myRoomManager=new RoomManager();
var myFloor=[];
function RoomManager(){
    this.loadRoom=function(){
        /**/var loader1=new Web3DEngine._W3DGLTFLoader;
        loader1.load(
            'files/assets/room/room1.glb',//'robot06.glb',//'files/assets/man.glb',//'birds.glb',//'files/assets/man.glb',
            function ( gltf ) {//console.log(Web3DEngine.SceneManager.GetActiveScene()._imp.children);
                var mesh = new Web3DEngine.Mesh;
                mesh._originalAsset = gltf;
                gltf.scene._imp.traverse(node=>{
                    if(node.material){
                        if(node.material.map!=null) {
                            var nowMap = node.material.map;
                            nowMap.wrapS = THREE.RepeatWrapping;
                            nowMap.wrapT = THREE.RepeatWrapping;
                            nowMap.needsUpdate = true;
                        }
                        if(node.material.normalMap!=null) {
                            var nowMap = node.material.normalMap;
                            nowMap.wrapS = THREE.RepeatWrapping;
                            nowMap.wrapT = THREE.RepeatWrapping;
                            nowMap.needsUpdate = true;
                        }
                    }
                });
            }//loader.load
        );//完成加载房间模型


        var loader2=new Web3DEngine._W3DGLTFLoader;
        for(var i=0;i<12;i++)
        //var myUrl='files/assets/room/room2.glb';
        loader2.load(
            'files/assets/room/new'+i+'.gltf',//'robot06.glb',//'files/assets/man.glb',//'birds.glb',//'files/assets/man.glb',
            function ( gltf ) {//console.log(Web3DEngine.SceneManager.GetActiveScene()._imp.children);
                var mesh = new Web3DEngine.Mesh;
                mesh._originalAsset = gltf;
                gltf.scene._imp.castShadow=true;
                gltf.scene._imp.receiveShadow=true;
                console.log(gltf.scene);//_imp//transform._children[8]
                console.log(gltf.scene.transform._children[8].gameObject);//_imp
                console.log(gltf.scene.transform._children[8].gameObject._imp);



                var obj000=gltf.scene.transform._children[8].gameObject;
                var mesh000=gltf.scene.transform._children[8].gameObject._imp;
                mesh000.geometry.computeBoundingBox();//计算包围盒
                mesh000.position.set(
                    -4.45,-1.89,9.6);/**/
                var obj001=new THREE.Object3D();
                obj001.position.set(
                    4.45,1.89,-9.6);/**/
                obj001.add(mesh000);
                gltf.scene._imp.add(obj001);
                //mesh000.position.
                //var myobj000=gltf.scene.transform._children[8].gameObject;
                //myobj000.remove(myobj000.parent);
                //myobj000.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(1,0,0);

                function test(){
                    obj001.rotateZ(Math.PI/100);
                    /*obj001.rotateOnAxis(
                        mesh000.geometry.boundingSphere.center.x,
                        mesh000.geometry.boundingSphere.center.y,
                        mesh000.geometry.boundingSphere.center.z);
                    myobj001.rotation.set(
                        myobj001.rotation.x,
                        myobj001.rotation.y+0.002,
                        myobj001.rotation.z
                    );
                    myobj000.getComponent(Web3DEngine.Transform).localEulerAngles=
                        new THREE.Vector3(
                            myobj000.getComponent(Web3DEngine.Transform).localEulerAngles.x,
                            myobj000.getComponent(Web3DEngine.Transform).localEulerAngles.y+0.1,
                            myobj000.getComponent(Web3DEngine.Transform).localEulerAngles.z);
                    */
                    //new THREE.Vector3(1,0,0);

                    requestAnimationFrame(test);
                }test();
                gltf.scene._imp.traverse(node=>{
                    if(node.material){
                        if(node.material.map!=null) {
                            var nowMap = node.material.map;
                            nowMap.wrapS = THREE.RepeatWrapping;
                            nowMap.wrapT = THREE.RepeatWrapping;
                            nowMap.needsUpdate = true;
                        }
                        if(node.material.normalMap!=null) {
                            var nowMap = node.material.normalMap;
                            nowMap.wrapS = THREE.RepeatWrapping;
                            nowMap.wrapT = THREE.RepeatWrapping;
                            nowMap.needsUpdate = true;
                        }
                    }
                });
            }//loader.load
        );//完成加载房间模型
    }
    /*this.createController=function (obj) {
        //开始测试
        var beforeKey = -1;
        document.onkeydown = function (e) {
            if (e.key == "t") obj.position.x += 0.1;
            else if (e.key == "g") obj.position.x -= 0.1;
            else if (e.key == "r") obj.position.y += 0.1;
            else if (e.key == "y") obj.position.y -= 0.1;
            else if (e.key == "f") obj.position.z += 0.1;
            else if (e.key == "h") obj.position.z -= 0.1;
            else if (e.key == "v") console.log(obj.position, obj.scale);
            if (e.key == '=') {
                if (beforeKey == '1') obj.scale.x += 0.1;
                else if (beforeKey == '2') obj.scale.y += 0.1;
                else if (beforeKey == '3') obj.scale.z += 0.1;
            } else if (e.key == '-') {
                if (beforeKey == '1') obj.scale.x -= 0.1;
                else if (beforeKey == '2') obj.scale.y -= 0.1;
                else if (beforeKey == '3') obj.scale.z -= 0.1;
            }
            if (e.key == '1' || e.key == '2' || e.key == '3') beforeKey = e.key;
        }
        //完成测试
    }*/
    this.initRoom=function(){
        //校徽
        var xiaohui=new Img3D('logo.png',2,2);
        xiaohui.mesh.rotation.y=-Math.PI/2;
        xiaohui.mesh.position.set(-4.2,1.8,0.1);
        xiaohui.mesh.scale.set(0.6,0.7,1);
        /*//大天花板
        var myBoardNet0=new BoardNet([7.2,3.6,-3.1],10,10,[0,0],[2.4,2.4,0.01]);
        myBoardNet0.init();
        myBoardNet0.setTexture('pic/room/3.jpg');

        for(var i=0;i<myBoardNet0.net.children.length;i++)
        myBoardNet0.net.children[i].traverse(node=>{
            if(node.material){
                if(node.material.map!=null) {
                    var nowMap = node.material.map;
                    nowMap.wrapS = THREE.RepeatWrapping;
                    nowMap.wrapT = THREE.RepeatWrapping;
                    nowMap.needsUpdate = true;
                }
            }
        })

        //小天花板
        var myBoardNet1=new BoardNet([-10.3,4.5,0],40,80,[0.03,0.03],[0.3,0.3,0.01]);
        myBoardNet1.init();
        myBoardNet0.initSpaceColor([0.2, 0.2, 0.2]);*/

        //大地板
        var myBoardNet2=new BoardNet([1,0,2.7],11,7,[0.11,0.11],[3,3,0.01]);
        myBoardNet2.init();
        myBoardNet2.initSpaceColor([0.2, 0.2, 0.2]);
        myBoardNet2.setTexture('pic/room/ConcreteBare0323_7_S.jpg');
        myFloor.push(myBoardNet2);
        //小地板
        var myBoardNet3=new BoardNet([6.7,0.16-0.5,-13.8],8,4,[0,0],[3,3,0.01]);
        myBoardNet3.init();
        myBoardNet2.initSpaceColor([0.2, 0.2, 0.2]);//为了点击事件的检测
        myBoardNet3.setTexture('pic/room/Wood.jpg');
        myFloor.push(myBoardNet3);
        //两个地板间的台阶
        /*var mybox1=new Box([4.9,0.1,-9],[21.8,0.1,1]);
        mybox1.init();
        mybox1.setTexture('pic/room/bgk.jpg');*/

        //设置第二面墙
        var myBoardNet5=new BoardNet([-16.3,1.2,-0.1],4,4,[0,0],[3,3,0.01]);
        myBoardNet5.init();
        myBoardNet5.net.rotation.z=Math.PI/2;
        myBoardNet5.net.scale.set(0.7,7.5,1.3);
        myBoardNet5.setTexture('pic/room/Wood2.jpg');
        //柱子背面的logo
        var logo2=new Img3D('logo.png',2,2);
        logo2.mesh.rotation.y=Math.PI/2;
        logo2.mesh.position.set(-3.6,1.8,0.1);
        logo2.mesh.scale.set(0.6,0.7,1);
        //设置logo后面的板子
        var mybox2=new Box([1,1,1],[1,1,1],[0,0,0]);
        mybox2.init();
        mybox2.mesh.position.set(-3.7,1.8,0.1);
        mybox2.mesh.scale.set(0.08,1.7,2.7);/**/

    }

}