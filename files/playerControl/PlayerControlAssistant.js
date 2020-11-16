var myPlayerControlAssistant=new PlayerControlAssistant();
function PlayerControlAssistant(){
    PlayerControlAssistant1.call(this);
}
function PlayerControlAssistant1(){
    this.player;
    this.updateKeys=function(arg)
    {
        // if ( !document.pointerLockElement) return;  //若鼠标不在屏幕内，则暂停
        if(!myUserControl) return;
        var speed=1;
        //获取按键信息
        let getTheKey = Web3DEngine.Application.instance.inputModuleInst;
        var angle=this.player.gameObject.transform.localEulerAngles.y;

        if(Web3DEngine.Application.instance.inputModuleInst.getKey("W")){
            move(this.player,1,Math.cos(angle*Math.PI/180)*speed/10);
            move(this.player,-3,Math.sin(angle*Math.PI/180)*speed/10);
        } else if(Web3DEngine.Application.instance.inputModuleInst.getKey("S")){
            move(this.player,-1,Math.cos(angle*Math.PI/180)*speed/10);
            move(this.player,3,Math.sin(angle*Math.PI/180)*speed/10);
        }

        angle-=90;
        if(Web3DEngine.Application.instance.inputModuleInst.getKey("D")){
            move(this.player,1,Math.cos(angle*Math.PI/180)*speed/10);
            move(this.player,-3,Math.sin(angle*Math.PI/180)*speed/10);
        } else if(Web3DEngine.Application.instance.inputModuleInst.getKey("A")){
            move(this.player,-1,Math.cos(angle*Math.PI/180)*speed/10);
            move(this.player,3,Math.sin(angle*Math.PI/180)*speed/10);
        }


        var mypos=this.player.gameObject.getComponent(Web3DEngine.Transform).localPosition;
        if(Web3DEngine.Application.instance.inputModuleInst.getKeyDown("P"))
            console.log(mypos.x+'  ,  '+mypos.y+'  ,  '+mypos.z+'  ,  '+this.player.gameObject.getComponent(Web3DEngine.Transform).localEulerAngles.y);
    },
    this.addMouseListener=function()
    {
        let canvas = !!document.getElementById('application-canvas') ? document.getElementById('application-canvas').childNodes[0] : document.getElementById('canvas');
        let scope = this.player;
        canvas.onmousemove = function (e) {
            if(event.buttons==1){
                rotation1(scope,2,-event.movementX/5);//设置yaw偏航旋转
                appInst._renderScenePass.camera.rotation.x-=event.movementY*Math.PI/180/5;
            }//if(event.buttons==1)
        };
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        function onDocumentTouchStart( event ) {
            lastTouchX = event.touches[ 0 ].screenX;
            lastTouchY = event.touches[ 0 ].screenY;
        }/**/
        function onDocumentTouchMove( event ) {//移动端
            if(!myUserControl) return;
            let movementX = lastTouchX - event.touches[ 0 ].screenX;
            let movementY = lastTouchY - event.touches[ 0 ].screenY;
            rotation1(scope,2,-movementX/3);
            appInst._renderScenePass.camera.rotation.x-=movementY*Math.PI/180/10;
            lastTouchX = event.touches[ 0 ].screenX;
            lastTouchY = event.touches[ 0 ].screenY;
        }
    }
}