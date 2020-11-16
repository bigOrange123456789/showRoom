function BoardNet(pos,num1,num2,space,board){//展板管理者
    this.x=pos[0];
    this.y=pos[1];
    this.z=pos[2];
    this.num1=num1;
    this.num2=num2;
    this.space1=space[0];
    this.space2=space[1];
    this.haveSpaceColor=false;//if(space.length>2)this.spaceColor=space[2];
    this.boardW=board[0];
    this.boardH=board[1];
    this.boardThick=board[2];
    this.boardSrc=board[3];

    this.allW=this.num1*this.boardW+(this.num1-1)*this.space1;
    this.allH=this.num2*this.boardH+(this.num2-1)*this.space2;
    this.net=new THREE.Object3D();
    this.space=new THREE.Object3D();

    this.init=function(){///////////////////
        this.net.position.set(this.x,this.y,this.z);
        var allW=this.allW;
        var allH=this.allH;
        var scene=appInst._renderScenePass.scene;
        var box0,x0=-allW/2,z0=-allH/2;
        for(var i=0;i<this.num1;i++,x0+=(this.boardH+this.space2),z0=-allH/2)
            for(var j=0;j<this.num2;j++,z0+=(this.boardW+this.space1)){
                if(i==0&&j==0){
                    var material = new THREE.MeshLambertMaterial({color: new THREE.Color(1, 1, 1)})
                    var box_geometry = new THREE.BoxGeometry(this.boardW,this.boardThick,this.boardH);

                    box0 = new THREE.Mesh(box_geometry, material);
                    box=box0;
                }else var box =box0.clone();
                box.position.set(x0,0,z0);
                this.net.add(box);
            }
        scene.add(this.net);

        //if(space.length>2)this.spaceColor=space[2];
        //this.initSpaceColor();
    }
    this.initSpaceColor=function(spaceColor){
        var material_line0 =
            new THREE.MeshLambertMaterial({color: new THREE.Color(spaceColor[0], spaceColor[1], spaceColor[2])});//黑色
        var line0_geometry = new THREE.CubeGeometry(this.allW, 0.000001, this.allH);
        var line0 = new THREE.Mesh(line0_geometry, material_line0);
        line0.position.set(-this.boardW / 2, 0, -this.boardH / 2);
        this.space.add(line0);
        this.net.add(this.space);
        this.haveSpaceColor = true;
    }
    this.setTexture=function(src){
        var img = new Image();
        img.src =src;
        var net=this.net;
        var haveSpaceColor=this.haveSpaceColor;
        img.onload = function(){
            var texture = new THREE.Texture();
            texture.image =img;//bg001.img;
            //texture.needsUpdate = true;
            //console.log(texture);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            /*texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
            texture.minFilter=THREE.LinearFilter;
            texture.magFilter=THREE.LinearFilter;
            texture.format=THREE.RGBFormat;*/
            //cons
            var length=net.children.length;
            if(haveSpaceColor)length--;
            for(var k=0;k<length;k++)
                net.children[k].material=
                    new THREE.MeshLambertMaterial({ map: texture });
            //console.log(texture);
        };//onload
    }
}//BoardsManager展板管理者对象结束