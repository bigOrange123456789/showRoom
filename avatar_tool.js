function adjustBone(morphID,value,renderer,boneArray){
    //躯干
    //'小腹';'腰';'胸';'胸';'脖子';'头';'?';
    if (morphID === 0) renderer.gameObject.getComponent(Web3DEngine.Transform).localScale = new THREE.Vector3(1, (value - 0.5) / 1 + 1, 1);
    else if (morphID === 1)setBone_size(4, value,renderer,boneArray);//衣领
    else if (morphID === 2)setBone_size(3, value,renderer,boneArray);//锁骨
    else if (morphID === 3)setBone_size(2, value,renderer,boneArray);//胸口
    else if (morphID === 4)setBone_size(1, value,renderer,boneArray);//腰部
    else if (morphID === 5)setBone_size(0, value,renderer,boneArray);//小腹
    //手臂
    //'左肩';'左大臂';'左小臂';'左手腕';'左拇指1';'左拇指2';'左拇指3';'?';'左手指1';'左手指2';'左手指3';'?';
    else if (morphID === 6) {//肩膀
        setBone_size(7, value,renderer,boneArray);
        setBone_size(19, value,renderer,boneArray);
    } else if (morphID === 7) {//大臂
        setBone_size(8, value,renderer,boneArray);
        setBone_size(20, value,renderer,boneArray);
    } else if (morphID === 8) {//小臂
        setBone_size(9, value,renderer,boneArray);
        setBone_size(21, value,renderer,boneArray);
    } else if (morphID === 9) {//手腕
        setBone_size(10, value,renderer,boneArray);
        setBone_size(22, value,renderer,boneArray);
    } else{// if (morphID === 13) {//,,臀部 。。
        setBone_size(31, value,renderer,boneArray);
        setBone_size(36, value,renderer,boneArray);
    }//if
}
function setBone_size(bone_index, n,renderer,boneArray) {//函数3，设置骨头的函数，为函数2服务
    //躯干
    //小腹 腰部 胸口 肩膀 锁骨 。。
    if(bone_index===0)      bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//小腹
    else if(bone_index===1) bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//腰部
    else if(bone_index===2) bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//胸口
    else if(bone_index===3) bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//锁骨
    else if(bone_index===4) bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//衣领
    else if(bone_index===5) bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//？
    else if(bone_index===6) bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//？
    //手臂
    //左肩 大臂 小臂 左手腕 。。
    else if(bone_index===7) bone_size=new THREE.Vector3((n-0.5)/2+1,1,(n-0.5)/2+1);//肩部
    else if(bone_index===8) bone_size=new THREE.Vector3((n-0.5)/5+1,1,(n-0.5)+1);//大臂
    else if(bone_index===9) bone_size=new THREE.Vector3((n-0.5)/5+1,1,(n-0.5)+1);//小臂
    else if(bone_index===10)bone_size=new THREE.Vector3(1,1,(n-0.5)+1);//手腕
    else if(bone_index===11)bone_size=new THREE.Vector3(1,1,(n-0.5)+1);//?
    else if(bone_index===12)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===13)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===14)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===15)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===16)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===17)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===18)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?

    else if(bone_index===19)bone_size=new THREE.Vector3((n-0.5)/2+1,1,(n-0.5)/2+1);
    else if(bone_index===20)bone_size=new THREE.Vector3((n-0.5)/5+1,1,(n-0.5)+1);
    else if(bone_index===21)bone_size=new THREE.Vector3((n-0.5)/5+1,1,(n-0.5)+1);
    else if(bone_index===22)bone_size=new THREE.Vector3(1,1,(n-0.5)+1);
    else if(bone_index===23)bone_size=new THREE.Vector3(1,1,(n-0.5)+1);
    else if(bone_index===24)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    else if(bone_index===25)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    else if(bone_index===26)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    else if(bone_index===27)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    else if(bone_index===28)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    else if(bone_index===29)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    //腿
    //'' 臀部 。。
    else if(bone_index===30)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===31){
        if(n<0.5)bone_size=new THREE.Vector3((n-0.5)/5+1,1,(n-0.5)/5+1);
        else bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    }//臀部
    else if(bone_index===32)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===33)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===34)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?

    else if(bone_index===35)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===36){
        if(n<0.5)bone_size=new THREE.Vector3((n-0.5)/5+1,1,(n-0.5)/5+1);
        else bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);
    }//臀部
    else if(bone_index===37)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===38)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?
    else if(bone_index===39)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?

    else if(bone_index===40)bone_size=new THREE.Vector3((n-0.5)+1,1,(n-0.5)+1);//?

    //bone_index
    var bone = new THREE.Matrix4().copy(boneArray[bone_index]);///boneArray里面存储了所有的骨头，取出要用的骨头
    bone.scale(bone_size);
    //bone.scale(new THREE.Vector3(bone_size,1,bone_size));///对要用的骨头稍作修改
    renderer._skeletons[0].boneInverses[bone_index] = bone;///将这个骨头放到对应的位置
}///函数结束
/*function setColour(renderer,myColour){
    renderer._imp.traverse(node=>{
        if(node.material){
            let newMaterial=new node.material.constructor;
            newMaterial.copy(node.material);
            node.material=newMaterial;
            if(myColour==1)node.material.color.set(0x303030);//泛黑000
            else if(myColour==2)node.material.color.set(0x89b0f0);//泛青001
            else if(myColour==3)node.material.color.set(0x89d080);//泛绿010
            else if(myColour==4)node.material.color.set(0x70d0d0);//泛蓝011
            else if(myColour==5)node.material.color.set(0xf9b0a0);//泛橙100
            else if(myColour==6)node.material.color.set(0xc090c0);//泛红101
            else if(myColour==7)node.material.color.set(0xfff0a0);//泛黄110
            else if(myColour==8)node.material.color.set(0xffffff);//原色111
        }
    });
}*/
function setColour2(renderer,myColour,part){//1.上衣 2.头手 3.鞋子 4.裤子
    var newMaterial = new renderer._imp.children[0].children[part].material.constructor;
    newMaterial.copy(renderer._imp.children[0].children[part].material);
    renderer._imp.children[0].children[part].material = newMaterial;
    if (myColour == 1) newMaterial.color.set(0x303030);//泛黑000
    else if (myColour == 2) newMaterial.color.set(0x89b0f0);//泛青001
    else if (myColour == 3) newMaterial.color.set(0x89d080);//泛绿010
    else if (myColour == 4) newMaterial.color.set(0x70d0d0);//泛蓝011
    else if (myColour == 5) newMaterial.color.set(0xf9b0a0);//泛橙100
    else if (myColour == 6) newMaterial.color.set(0xc090c0);//泛红101
    else if (myColour == 7) newMaterial.color.set(0xfff0a0);//泛黄110
    else if (myColour == 8) newMaterial.color.set(0xffffff);//原色111
}
function setMapping(renderer,textures,myMapping){
    var changeTex;
    if(myMapping===1)changeTex=textures[1];
    else if(myMapping===2)changeTex=textures[2];
    else if(myMapping===3)changeTex=textures[3];
    else if(myMapping===4)changeTex=textures[4];
    else if(myMapping===5)changeTex=textures[5];
    else if(myMapping===6)changeTex=textures[6];
    else if(myMapping===7)changeTex=textures[7];
    else if(myMapping===8)changeTex=textures[8];
    else if(myMapping===9)changeTex=textures[9];
    else if(myMapping===10)changeTex=textures[10];
    else if(myMapping===11)changeTex=textures[11];
    else if(myMapping===12)changeTex=textures[12];
    else if(myMapping===13)changeTex=textures[13];
    else if(myMapping===14)changeTex=textures[14];
    else if(myMapping===15)changeTex=textures[15];
    else if(myMapping===16)changeTex=textures[16];
    else if(myMapping===17)changeTex=textures[17];
    else if(myMapping===18)changeTex=textures[18];
    var node=renderer._imp.children[0].children[part];//.material

    //renderer._imp.traverse(node=>{if(node.material){}});//遍历所有子节点，以及子节点的子节点
        //
            var newMaterial=new node.material.constructor;
            newMaterial.copy(node.material);
            node.material=newMaterial;
            changeTex._imp.flipY=false;
            changeTex._imp.repeat.set(1,1);
            node.material.map=changeTex._imp;
        //
    //

    /*renderer._imp.traverse(node=>{//遍历所有子节点，以及子节点的子节点
        if(node.material){
            var newMaterial=new node.material.constructor;
            newMaterial.copy(node.material);
            node.material=newMaterial;
            //node.material.emissiveMap=changeTex._imp;
            node.material.emissiveIntensity=1.5;

            changeTex._imp.flipY=false;
            changeTex._imp.repeat.set(1,1);
            node.material.map=changeTex._imp;
            node.material.needsupdate=true;
        }
    });*/

}
function setMapping2(renderer,textures,myMapping,part){////1.上衣 2.头手 3.鞋子 4.裤子
    var changeTex;
    if(myMapping===1)changeTex=textures[1];
    else if(myMapping===2)changeTex=textures[2];
    else if(myMapping===3)changeTex=textures[3];
    else if(myMapping===4)changeTex=textures[4];
    else if(myMapping===5)changeTex=textures[5];
    else if(myMapping===6)changeTex=textures[6];
    else if(myMapping===7)changeTex=textures[7];
    else if(myMapping===8)changeTex=textures[8];
    else if(myMapping===9)changeTex=textures[9];
    else if(myMapping===10)changeTex=textures[10];
    else if(myMapping===11)changeTex=textures[11];
    else if(myMapping===12)changeTex=textures[12];
    else if(myMapping===13)changeTex=textures[13];
    else if(myMapping===14)changeTex=textures[14];
    else if(myMapping===15)changeTex=textures[15];
    else if(myMapping===16)changeTex=textures[16];
    else if(myMapping===17)changeTex=textures[17];
    else if(myMapping===18)changeTex=textures[18];

    var newMaterial=new renderer._imp.children[0].children[part].material.constructor;
    newMaterial.copy(renderer._imp.children[0].children[part].material);
    renderer._imp.children[0].children[part].material=newMaterial;
    changeTex._imp.flipY=false;
    changeTex._imp.repeat.set(1,1);
    renderer._imp.children[0].children[part].material.map=changeTex._imp;
}
function setMapping3(renderer,myMapping,part,gender){////1.上衣 2.头手 3.鞋子 4.裤子
    var changeTex;
    var newMaterial=new renderer._imp.children[0].children[part].material.constructor;
    newMaterial.copy(renderer._imp.children[0].children[part].material);
    renderer._imp.children[0].children[part].material=newMaterial;
    let loader = new THREE.TextureLoader();
    if(typeof(gender)=='undefined'||gender==1){
        loader.load(
            'pic/male/'+myMapping+'.jpg',
            function ( texture ) {
                texture.flipY=false;//是否反转图片的y轴坐标
                texture.repeat.set(1,1);
                renderer._imp.children[0].children[part].material.map=texture;
            });//loader.load
    }else{
        loader.load(
            'pic/female/'+myMapping+'.jpg',
            function ( texture ) {
                texture.flipY=false;//是否反转图片的y轴坐标
                texture.repeat.set(1,1);
                renderer._imp.children[0].children[part].material.map=texture;
            });//loader.load
    }

}