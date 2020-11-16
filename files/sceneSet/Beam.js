function Beam(r,h,color,pos,angleRange){
    this.obj0=new THREE.Object3D();//用于初始化角度
    this.obj=new THREE.Object3D();
    this.mesh;
    this.r=r;
    this.h=h;
    this.color=color;
    this.speed=0.05;
    this.angleRange=angleRange;//[0,Math.PI];//初始角度必须在这个范围内
    this.pos=pos;

    this.init=function(autoRotation){
        var material= new THREE.MeshBasicMaterial({
            color: this.color,
            transparent: true,
            opacity: 0.5,
        }); //材质对象Material
        var cylinder=new THREE.CylinderGeometry(0,this.r,this.h,50,50);//顶面半径, 底面半径, 圆柱体的高度, 顶面分段, 高度分段
        this.mesh = new THREE.Mesh(cylinder, material);
        //this.mesh.position.set(pos[0],pos[1],pos[2]);
        this.obj0.add(this.mesh);
        this.obj.add(this.obj0);
        appInst._renderScenePass.scene.add(this.obj);
        this.mesh.position.y=-this.h/2;
        this.obj.position.set(this.pos[0],this.pos[1],this.pos[2]);
        this.obj0.rotation.x=Math.PI/3;
        if(autoRotation) this.obj.rotation.y=Math.random()*(this.angleRange[1]-this.angleRange[0])+this.angleRange[0];

        var myThis=this;
        if(autoRotation) setInterval(function () {
            if(myThis.obj.rotation.y<myThis.angleRange[0]||myThis.obj.rotation.y>myThis.angleRange[1])
                myThis.speed*=-1;
            myThis.obj.rotation.y+=myThis.speed;
        }, 100);/**/
    }
    //this.init();
    /*this.autoRotation=function(){
        var this_obj=this.mesh;
        setInterval(function () {
            this_obj.rotation.y+=10;
            console.log(this_obj.rotation);
            //console.log(123);
        }, 100);

    }
    this.autoRotation();*/
}