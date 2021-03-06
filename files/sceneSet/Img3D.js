function Img3D(src,w,h) {
    this.src=src;
    this.w=w;
    this.h=h;
    this.mesh;
    this.init=function(){
        var plane = new THREE.PlaneGeometry(this.w,this.h)
        var textureLoader = new THREE.TextureLoader();
        var material = new THREE.MeshPhongMaterial({
            map: textureLoader.load(src),//设置矩形网格模型的纹理贴图(光柱特效、树或草等你想要表达效果对应背景透明纹理贴图)
            side: THREE.DoubleSide,// 双面显示
            transparent: true, // 开启透明效果，否则颜色贴图map的透明不起作用
        });
        this.mesh = new THREE.Mesh(plane, material);
        appInst._renderScenePass.scene.add(this.mesh);
    }
    this.init();
}
function Plane(){
    this.sprite=new THREE.Object3D();
    this.scale=[1,1,1];//精灵卡的放缩
    this.text='Welcome!';
    this.fontface="Arial";//字体
    this.fontsize=100;//字体大小
    this.pos=[-1.9,1,-7.4];//-0.1921826909950316  ,  1.5  ,  -7.4438927487
    this.borderThickness=4;//边框厚度
    this.borderColor={ r:0, g:0, b:0, a:1.0 };//边框颜色
    this.backgroundColor ={ r:255, g:255, b:255, a:1.0 };//背景颜色
    this.setGradient=function (context) {
        // 创建渐变
        var gradient=context.createLinearGradient(0,0,this.fontsize,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        //用渐变填色
        context.fillStyle=gradient;
    }
    this.createRect=function (message,pos) {//创建字体精灵
        var message=this.text;
        var pos=this.pos;

        var fontsize =this.fontsize;
        var borderThickness =this.borderThickness;
        /* 创建画布 */
        var canvas=document.createElement('canvas');
        var context=canvas.getContext('2d');//应该就是圆角矩形
        /* 字体加粗 */
        context.font = "Bold " + this.fontsize + "px " + this.fontface;
        /* 获取文字的大小数据，高度取决于文字的大小 */
        var metrics = context.measureText(message);
        var textWidth = metrics.width;//文字的字数
        /* 背景颜色 */
        context.fillStyle="rgba("+this.backgroundColor.r+","+this.backgroundColor.g+","+this.backgroundColor.b+","+this.backgroundColor.a+")";
        /* 边框的颜色 */
        context.strokeStyle="rgba("+this.borderColor.r+","+this.borderColor.g+","+this.borderColor.b+","+this.borderColor.a+")";
        context.lineWidth = borderThickness;
        //绘制圆角矩形,圆角矩形是背景板
        //roundRect(context,0,0,2000,500, 6);
        /*字体颜色*/
        context.fillStyle = "rgb(0,0,0)";

        this.setGradient(context);

        //生成3D文字：文字，到上边的边距，到左边的边距
        context.fillText(message, borderThickness, fontsize + borderThickness);

        /*画布内容用于纹理贴图*/
        var texture=new THREE.Texture(canvas);
        texture.needsUpdate = true;
        var spriteMaterial = new THREE.SpriteMaterial({map: texture});
        var sprite=new THREE.Sprite(spriteMaterial);
        sprite.scale.set(10,10,10);
        //sprite.position.set(pos[0],pos[1],pos[2]);
        //appInst._renderScenePass.scene.add(sprite);

        let geometry = new THREE.PlaneGeometry(10,5);
        let material = new THREE.MeshBasicMaterial({map:texture});
        //material.map=texture;
        //console.log(material);
        let rect = new THREE.Mesh(geometry,material);
        rect.position.set(0,2.5,0);
        rect.rotation.set(0,0,0);
        appInst._renderScenePass.scene.add(rect);
    }
    this.createRect();

}