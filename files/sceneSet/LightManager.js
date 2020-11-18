var myLightManager=new LightManager();
function LightManager(){
    this.obj;//=new THREE.Object3D();
    this.createSpotLight0=function(pos,type){//这个函数只创建了展品上方的灯光
        obj = new Web3DEngine.GameObject();
        var k=0.64;
        if(type=='x'||type==1)      obj.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(pos[0]+k,pos[1],pos[2]);//-5.26,3.6,-10.7
        else if(type=='-x'||type==2)obj.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(pos[0],pos[1],pos[2]+k);//-5.26,3.6,-10.7
        else if(type=='z' ||type==3)obj.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(pos[0]-k,pos[1],pos[2]);//-5.26,3.6,-10.7
        else if(type=='-z'||type==4)obj.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(pos[0],pos[1],pos[2]-k);//-5.26,3.6,-10.7

        obj.addComponent(Web3DEngine.Light);
        obj.getComponent(Web3DEngine.Light).type="Spot";//聚光灯
        obj.getComponent(Web3DEngine.Light).castShadow=true;
        obj.getComponent(Web3DEngine.Light).intensity=15;
        obj.getComponent(Web3DEngine.Light).range=3;
        obj.getComponent(Web3DEngine.Light).spotAngle=40*Math.PI/180;//40;
        //obj._imp.visible=false;
        //Material.visible
        return obj;
    }
    this.createSpotLight=function(pos){
        obj = new Web3DEngine.GameObject();
        obj.getComponent(Web3DEngine.Transform).localPosition=new THREE.Vector3(pos[0],pos[1],pos[2]);//-5.26,3.6,-10.7
        obj.addComponent(Web3DEngine.Light);
        obj.getComponent(Web3DEngine.Light).type="Spot";//聚光灯
        obj.getComponent(Web3DEngine.Light).castShadow=true;
        obj.getComponent(Web3DEngine.Light).intensity=15;
        obj.getComponent(Web3DEngine.Light).range=3;
        obj.getComponent(Web3DEngine.Light).spotAngle=40*Math.PI/180;//40;



        return obj;
    }
    this.init=function(){
        for(var k=0;k<=0;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],2);
        for(var k=1;k<=3;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],1);
        for(var k=4;k<=10;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],2);
        for(var k=11;k<=13;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],3);
        /*this.createLight(pos);
        var material=new THREE.MeshPhongMaterial({color:0xffffff});//白色
        var shape=new THREE.CylinderGeometry(0,0.3,0.3,50,50);//顶面半径, 底面半径, 圆柱体的高度, 顶面分段, 高度分段
        this.mesh=new THREE.Mesh(shape,material);
        this.obj.add(this.mesh);*/
        //this.obj.position.set(0,0.4,0);
    }
    this.myInit=function(n){
        if(n==0)this.myInit0();
        if(n==1);//for(var k=0;k<=0;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],2);
        if(n==4)for(var k=1;k<=3;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],1);
        if(n==2)for(var k=4;k<=10;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],2);
        if(n==3)for(var k=11;k<=13;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6,boardsParam[k][5]],3);
        if(n==5)for(var k=47;k<=50;k++)myLightManager.createSpotLight0([boardsParam[k][3],3.6+1,boardsParam[k][5]-0.3],4);
    }
    this.myInit0=function(){
        //开始设置照亮校徽的灯光
        var obj2=myLightManager.createSpotLight([-4.3000001,  3.200015,  0.100]);
        obj2.getComponent(Web3DEngine.Light).range=5;
        obj2.getComponent(Web3DEngine.Light).intensity=15;
        //完成设置照亮校徽的灯光

        /*var obj=myLightManager.createSpotLight([ -9.6,  4.1,  6.9]);
        obj.getComponent(Web3DEngine.Light).intensity=4;
        obj.getComponent(Web3DEngine.Light).range=9;
        obj.getComponent(Web3DEngine.Light).spotAngle=75*Math.PI/180;//40;
*/
        /*var obj=myLightManager.createSpotLight([-4.3000001,  3.200015,  0.100]);
        obj.getComponent(Web3DEngine.Light).range=5;
        obj.getComponent(Web3DEngine.Light).intensity=15;*/

        /*var material = new THREE.MeshLambertMaterial({color: new THREE.Color(0.5,0.5,0.5)})
        var box_geometry = new THREE.BoxGeometry(0.3,0.3,0.3);
        var mesh = new THREE.Mesh(box_geometry, material);//mesh.position.set(0,-1.5,0);
        obj._imp.add(mesh);*/
        //开始测试
        /*document.onkeydown = function (e) {
            if (e.key == "t") obj.getComponent(Web3DEngine.Transform).localPosition.x += 0.1;//.localPosition=new THREE.Vector3(x,y,z);
            else if (e.key == "g") obj.getComponent(Web3DEngine.Transform).localPosition.x -= 0.1;
            else if (e.key == "r") obj.getComponent(Web3DEngine.Transform).localPosition.y += 0.1;
            else if (e.key == "y") obj.getComponent(Web3DEngine.Transform).localPosition.y -= 0.1;
            else if (e.key == "f") obj.getComponent(Web3DEngine.Transform).localPosition.z += 0.1;
            else if (e.key == "h") obj.getComponent(Web3DEngine.Transform).localPosition.z -= 0.1;
            else if (e.key == "z") console.log(obj.getComponent(Web3DEngine.Transform).localPosition);//obj.getComponent(Web3DEngine.Transform).localPosition.z -= 0.1;
        }*/
        //完成测试
    }
    //this.light;
    this.createLight=function (pos) {
        var light=new THREE.SpotLight(0xffffff);//(0xf876c6);//聚光
        light.angle=Math.PI/5;
        light.distance=50;
        light.intensity=4;
        light.scale.set(0.1,0.1,0.1);
        light.position.set(0,2,0);
        this.obj=light;
        appInst._renderScenePass.scene.add(this.obj);
    }
}