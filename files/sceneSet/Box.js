function Box(pos,scale,color){
    this.mesh;
    this.pos=pos;
    this.scale=scale;
    this.color=color;
    this.init=function(){
        if(typeof(this.color)=='undefined')var material = new THREE.MeshLambertMaterial({color: new THREE.Color(1, 1, 1)});
        else var material = new THREE.MeshLambertMaterial({color: new THREE.Color(this.color[0],this.color[1],this.color[2])})
        var box_geometry = new THREE.BoxGeometry(this.scale[0],this.scale[1],this.scale[2]);
        this.mesh = new THREE.Mesh(box_geometry, material);
        this.mesh.position.set(pos[0],pos[1],pos[2]);
        appInst._renderScenePass.scene.add(this.mesh);
    }
    this.setTexture=function(src){
        var img = new Image();
        img.src =src;
        var obj=this.mesh;
        var mesh=this.mesh;
        img.onload = function(){
            var texture = new THREE.Texture();
            texture.image =img;//bg001.img;
            texture.needsUpdate = true;
            texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
            texture.minFilter=THREE.LinearFilter;
            texture.magFilter=THREE.LinearFilter;
            texture.format=THREE.RGBFormat;
            mesh.material=new THREE.MeshLambertMaterial({ map: texture });
        };//onload
    }
    this.setTexture2=function(src){
        var img = new Image();
        img.src =src;
        var obj=this.mesh;
        var mesh=this.mesh;
        img.onload = function(){
            var texture = new THREE.Texture();
            texture.image =img;//bg001.img;
            texture.needsUpdate = true;
            texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;
            texture.minFilter=THREE.LinearFilter;
            texture.magFilter=THREE.LinearFilter;
            texture.format=THREE.RGBFormat;
            mesh.material=new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0.5,
                side: THREE.BackSide,
                vertexColors: THREE.VertexColors
            });
            mesh.material.map=texture;
            //new THREE.LineDashedMaterial({ map: texture });
            //mesh.material.map=texture;
        };//onload
    }
}