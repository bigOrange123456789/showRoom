    var appInst,scene;
    var sceneData,configData;
    var jsonLoader;
    var progressTotal = 0;
    var progressCount = 0;

    /*——引擎初始化——*/
    initW3D();
    function initW3D() {
        appInst = Web3DEngine.Application.CreateApplication();
        //appInst._renderScenePass.camera.aspect=window.innerWidth/window.innerHeight;
        appInst.CreateRenderRes();
        //appInst.setRenderSize(window.innerWidth, window.innerHeight);
        let renderDom = appInst.getRenderDom();
		renderDom.id= 'canvas';
        document.body.appendChild(renderDom);
        scene = Web3DEngine.SceneManager.CreateScene();
		appInst._renderer.autoClear = false;
        jsonLoader = new THREE.FileLoader(THREE.DefaultLoadingManager);
        loadConfig(function (data) {
            configData = data;
            //延迟调用资源加载，否则Threejs材质未初始化
            //setTimeout( function(){
                loadAssetsList(configData.assets);
            //}, 0 );
        });
    }

    function loadConfig(callback){
        let data;
        jsonLoader.load(CONFIG_PATH, function (text) {
            try {
                data = JSON.parse(text);
            } catch (error) {
                console.error('AssetLoader: Can\'t parse ' + url + '.', error.message);
                callback(null);
            }
            callback(data);
        });
    }

    /*——加载资源——*/
    function loadAssetsList(assetsData) {
        if( Object.keys( assetsData ).length == 0 ){
           loadScene(); 
           return;
        }
        //根据资源配置计算资源总数
        for (var id in assetsData) progressTotal++;
        //根据资源配置加载资源
        var i=1;for (var assetId in assetsData) assetsAdd(assetsData[assetId], onProgress,assetsData);//console.log(assetsData);
    }

    function assetsAdd(asset, callback,assetsData) {
        var assetJson = asset;
        let request = null;
        if ( assetJson.type === 'cubemap' ) {
            assetJson.file = {};
            assetJson.file.url = [];
            for (let i = 0; i < assetJson.data.textures.length; ++i) {//如果是天空盒类型//加载6个用于天空盒的贴图
                let texAsset = W3DJsonConverter.getAssetDataInAssetsList(assetJson.data.textures[i], configData.assets);
                if (texAsset)
                    assetJson.file.url[i] =assetsData[assetJson.data.textures[i]].file.path;
                else
                    assetJson.file.url[i] = "";
            }
            request = assetJson.file;
        }
        else if (assetJson.type === "material") {
            request = W3DJsonConverter.getMaterialJson(assetJson);
        }
        else if (assetJson.file != null) {
            assetJson.file.url =assetJson.file.path;//assetJson.file.url = "files/assets/" + assetJson.id + "/" + assetJson.file.filename;
            request = assetJson.file;
        }
        let assetLoader = new Web3DEngine.AssetLoader();
        assetLoader.addEventListener(Web3DEngine.Event.COMPLETE, this, function (event) {
            //todo 这里的材质会给一个假的路径
            let data = {
                id: assetJson.id,
                filePath: assetJson.type !== "material" ? assetJson.file.url : assetJson.id + "Material.material"
            };//console.log(assetJson.file.url,assetJson.file.path);//filePath: assetJson.type !== "material" ? assetJson.file.url : assetJson.id + "Material.material"
            Web3DEngine.AssetManager.instance._handleNewAsset(event.content, data);

            if (callback)
                callback(asset);
        });

        if (request != null) assetLoader.load(request);
        else if (callback) callback(asset);
    }

    function onProgress(asset){
        progressCount++;
        if (progressCount === progressTotal)loadScene();
    }

    /*——PC场景数据转化，场景读取——*/
    function loadScene(){
        let pcSceneData;
        let firstScenePath = configData.scenes[0].url;
        jsonLoader.load(firstScenePath, function(text){
            try{pcSceneData = JSON.parse( text );}
            catch(error){console.error( 'Can\'t parse '+url+'.',error.message);}
            sceneData = W3DJsonConverter.changeFormatToW3DScene(pcSceneData);
            sceneData.render = pcSceneData.settings.render;

            let web3dScene = Web3DEngine.SceneManager.loadJson( sceneData );

            /*if( web3dScene != null ){
                //setTimeout(function(){
                    for(let i = 0 ; i < sceneData.render.post_process.overrides.Highlights.shadows.length ; ++i )
                        sceneData.render.post_process.overrides.Highlights.shadows[i] = sceneData.render.post_process.overrides.Highlights.shadows[i]/255;
                    for(let i = 0 ; i < sceneData.render.post_process.overrides.Highlights.midtones.length ; ++i )
                        sceneData.render.post_process.overrides.Highlights.midtones[i] = sceneData.render.post_process.overrides.Highlights.midtones[i]/255;
                    for(let i = 0 ; i < sceneData.render.post_process.overrides.Highlights.highlights.length ; ++i )
                        sceneData.render.post_process.overrides.Highlights.highlights[i] = sceneData.render.post_process.overrides.Highlights.highlights[i]/255;
                    W3DJsonConverter.SetPostProcess( sceneData.render.post_process );
                    W3DJsonConverter.AddEnvironmentMap( sceneData.render.skyboxIntensity );
                //}, 0 );
            }*/
        });
    }