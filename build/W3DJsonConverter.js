
function W3DJsonConverter() {

}

W3DJsonConverter._assetsData = {};

W3DJsonConverter.changeFormatToW3DScene = function (data) {
    let entities = data.entities;
    let nodes = [];
    for (var id in entities) {
        let node = {};
        node.type = "GameObject";
        let gameO = node.data = {};
        gameO.name = entities[id].name;
        gameO.activeSelf = entities[id].enabled;
		// gameO.enabled = entities[id].enabled;
        if (entities[id].layers) {
            gameO.layer = entities[id].layers[0];
        }

        gameO.components = [];
        W3DJsonConverter.changeComponentFormat(gameO, entities[id].components , entities[id] );

        nodes.push(node);
    }

    let scene_attribute = {
        skyBoxColor: data.settings.render.skybox_color,
        skyBoxTextureID: data.settings.render.skybox,
        fogType: data.settings.render.fog,
        fogStart: data.settings.render.fog_start,
        fogEnd: data.settings.render.fog_end,
        fogColor: data.settings.render.fog_color,
        fogDensity: data.settings.render.fog_density,
        ambientLightIntensity: data.settings.render.ambientLightIntensity,
        ambientLightColor: data.settings.render.global_ambient
    };
    if (data.settings.render.fog === "linear") {
        scene_attribute.fogType = "Linear";
    } else if (data.settings.render.for === "none") {
        scene_attribute.fogType = "None";
    } else if (data.settings.render.for === "exponential") {
        scene_attribute.fogType = "Exponetial";
    }

    let scene = {
        meta: {
            formate: "level_Json",
            name: data.name || "SampleScene",
            version: "0.5.1"
        },
        ext_resource: {
            textures: [],
            materials: [],
            models: []
        },
        scene_attribute,
        nodes
    };

    return scene;
}

W3DJsonConverter.changeComponentFormat = function ( gameO , entity_components , entity ) {
    for (var key in entity_components) {
        switch (key) {
            case "MeshFilter": {
                let meshFilter = entity_components[key];

                let myMeshFilter = {};
                myMeshFilter.type = "MeshFilter";
                let MeshFilter = myMeshFilter.data = {};

                if (meshFilter.type === "mesh") {
                    MeshFilter.type = "mesh";
                    MeshFilter.mesh = meshFilter.mesh || null;
                } else if (meshFilter.type === "cube") {
                    MeshFilter.type = "box";
                    MeshFilter.mesh = "default_box";
                } else if (!!meshFilter.type) {
                    MeshFilter.type = meshFilter.type;
                    MeshFilter.mesh = "default_" + meshFilter.type;
                }
                gameO.components.push(myMeshFilter);
                break;
            };
            case "MeshRenderer": {
                let meshRenderer = entity_components[key];

                let myMeshRenderer = {};
                myMeshRenderer.type = "MeshRenderer";
                let MeshRenderer = myMeshRenderer.data = {};

                MeshRenderer.material = meshRenderer.material || null;
                MeshRenderer.receiveShadow = meshRenderer.receiveShadow;
                MeshRenderer.castShadow = meshRenderer.castShadow;
                MeshRenderer.enabled = meshRenderer.enabled;
                gameO.components.push(myMeshRenderer);
                break;
            };
            case "SkinnedMeshRenderer": {
                let skinnedMeshRenderer = entity_components[key];

                let mySkinnedMeshRenderer = {};
                mySkinnedMeshRenderer.type = "SkinnedMeshRenderer";
                let SkinnedMeshRenderer = mySkinnedMeshRenderer.data = {};

                SkinnedMeshRenderer.mesh = skinnedMeshRenderer.mesh || null;
                SkinnedMeshRenderer.material = skinnedMeshRenderer.material || null;
                SkinnedMeshRenderer.receiveShadow = skinnedMeshRenderer.receiveShadow;
                SkinnedMeshRenderer.castShadow = skinnedMeshRenderer.castShadow;
                SkinnedMeshRenderer.enabled = skinnedMeshRenderer.enabled;
                gameO.components.push(mySkinnedMeshRenderer);
                break;
            };
            case "transform": {

                let transform = entity_components[key];

                let myTransform = {};
                myTransform.type = "Transform";
                let Transform = myTransform.data = {};

                Transform.id = entity.resource_id;
                Transform.parent = entity.parent;
                Transform.localPosition = transform.position;
                Transform.localEulerAngles = transform.rotation;
                Transform.localScale = transform.scale;
                gameO.components.push(myTransform);
                break;
            };
            case "Camera": {
                let camera = entity_components[key];

                let myCamera = {};
                myCamera.type = "Camera";
                let Camera = myCamera.data = {};

                Camera.farClipPlane = camera.farClipPlane;
                Camera.nearClipPlane = camera.nearClipPlane;
                Camera.field_of_view = camera.field_of_view;
                Camera.frustumSize = camera.frustumSize;
                Camera.enabled = camera.enabled;
                Camera.aspect = camera.aspect;
                let mask = '0x';
                for (var i = 0; i < 4; ++i) {
                    mask = mask + (parseInt(camera.cullingMask[i] * 255)).toString(16);
                }
                Camera.cullingMask = mask;
                Camera.Projection = camera.Projection;
                gameO.components.push(myCamera);
                break;
            };
            case "Light": {
                let light = entity_components[key];

                let myLight = {};
                myLight.type = "Light";
                let Light = myLight.data = {};
                Light.color = light.color;

                Light.intensity = light.intensity;
                Light.range = light.range;
                Light.type = light.type;
                Light.spotAngle = light.spotAngle/90;
                Light.castShadow = light.castShadow;
                Light.shadowDistance = light.shadowDistance;
                Light.mapSize = light.mapSize;
                Light.bias = light.bias;
                Light.mode = light.mode;
                let mask = '0x';
                for (var i = 0; i < 4; ++i) {
                    mask = mask + (parseInt(light.cullingMask[i] * 255)).toString(16);
                }
                Light.cullingMask = mask;
                Light.enabled = light.enabled;

                gameO.components.push(myLight);
                break;
            };
            case "BoxCollider": {
                let collision = entity_components[key];

                let myCollider = {};
                myCollider.type = "BoxCollider";
                let BoxCollider = myCollider.data = {};
                BoxCollider.enabled = collision.enabled;
                BoxCollider.size = collision.size;
				BoxCollider.isTrigger = collision.isTrigger;
                BoxCollider.isGameControl = collision.isGameControl;
                gameO.components.push(myCollider);
                break;
            };
            case "Rigidbody": {
                let rigidBody = entity_components[key];

                let myRigidBody = {};
                myRigidBody.type = "Rigidbody";
                let RigidBody = myRigidBody.data = {};
                RigidBody.mass = rigidBody.mass;
				RigidBody.isStatic = rigidBody.isStatic;
				RigidBody.isKinematic = rigidBody.isKinematic;
                gameO.components.push(myRigidBody);
                break;
            };
            case "AnimationPlayer": {
                let animation = entity_components[key];

                let myAnimation = {};
                myAnimation.type = "AnimationPlayer";
                let AnimationPlayer = myAnimation.data = {};
                AnimationPlayer.enabled = animation.enabled;
                AnimationPlayer.speed = animation.speed;
                AnimationPlayer.paused = animation.paused;
                AnimationPlayer.playAutomatically = animation.playAutomatically;
                AnimationPlayer.wrapMode = animation.wrapMode;
                gameO.components.push(myAnimation);
                break;
            };
            case "AudioListener": {
                let audioListener = entity_components[key];

                let myAudioListener = {};
                myAudioListener.type = "AudioListener";
                let AudioListener = myAudioListener.data = {};
                AudioListener.enabled = audioListener.enabled;
                gameO.components.push(myAudioListener);
                break;
            };
            case "AudioSource": {
                let sound = entity_components[key];

                let audioSource = {};
                audioSource.type = "AudioSource";
                let AudioSource = audioSource.data = {};
                AudioSource.distance = sound.distance;
                AudioSource.positional = sound.positional;
                AudioSource.enabled = sound.enabled;

                AudioSource.audioClip = sound.audioClip || null;
                AudioSource.autoPlay = sound.autoPlay;
                AudioSource.loop = sound.loop;
                AudioSource.volume = sound.volume;
                gameO.components.push(audioSource);
                break;
            };
            case "ParticleSystem": {
                let particleSystem = entity_components[key];

                let myParticleSystem = {};
                myParticleSystem.type = "ParticleSystem";
                let ParticleSystem = myParticleSystem.data = {};
                ParticleSystem.spriteTexture = particleSystem.spriteTexture || null;
                ParticleSystem.noiseTexture = particleSystem.noiseTexture || null;
                ParticleSystem.spawnRate = particleSystem.spawnRate;
                ParticleSystem.timeScale = particleSystem.timeScale;
                ParticleSystem.enabled = particleSystem.enabled;
                ParticleSystem.color = particleSystem.color;
                ParticleSystem.size = particleSystem.size;
                ParticleSystem.lifetime = particleSystem.lifetime;

                ParticleSystem.positionRandomness = particleSystem.positionRandomness;
                ParticleSystem.velocityRandomness = particleSystem.velocityRandomness;//TODO sign
                ParticleSystem.sizeRandomness = particleSystem.sizeRandomness;
                gameO.components.push(myParticleSystem);
                break;
            };
            case "script": {
                let scripts = entity_components[key].scripts;

                for (var name in scripts) {
                    let script = {};
                    script.type = W3DJsonConverter.scriptNameTransfer(name);
                    let Script = script.data = {};
                    Script.enabled = scripts[name].enabled;
                    for (let key in scripts[name].attributes) {
                        Script[key] = scripts[name].attributes[key];
                    }
                    gameO.components.push(script);
                }
                break;
            };
            case "Canvas": {
                let uiCanvas = entity_components[key];

                let myUiCanvas = {};
                myUiCanvas.type = "Canvas";
                let Canvas = myUiCanvas.data = {};
                Canvas.eventCamera = uiCanvas.eventCamera;
                Canvas.renderMode = uiCanvas.renderMode;
                // Canvas.screenSpace = uiCanvas.screenSpace;
                // Canvas.enabled = uiCanvas.enabled;
                // Canvas.referenceResolution.x = uiCanvas.referenceResolution.x;
                // Canvas.referenceResolution.y = uiCanvas.referenceResolution.y;
                // Canvas.resolution.x = uiCanvas.resolution.x;
                // Canvas.resolution.y = uiCanvas.resolution.y;

                gameO.components.push(myUiCanvas);
                break;
            };
            case "RectTransform": {
                let group = entity_components[key];

                let myGroup = {};
                myGroup.type = "RectTransform";
                let RectTransform = myGroup.data = {};

                // RectTransform.anchor.w = group.anchor[0];
                // RectTransform.anchor.x = group.anchor[1];
                // RectTransform.anchor.y = group.anchor[2];
                // RectTransform.anchor.z = group.anchor[3];
                // RectTransform.margin.w = group.margin.w;
                // RectTransform.margin.x = group.margin.x;
                // RectTransform.margin.y = group.margin.y;
                // RectTransform.margin.z = group.margin.z;
                // RectTransform.pivot.x = group.pivot.x;
                // RectTransform.pivot.y = group.pivot.y;
                // RectTransform.enabled = group.enabled;
                RectTransform.anchor = new Web3DEngine.Vector4( group.anchormin[0],group.anchormax[0],group.anchormin[1],group.anchormax[1] );
                // RectTransform.anchoredPosition = group.anchoredPosition;
                // RectTransform.anchoredPosition3D = group.anchoredPosition3D;
                RectTransform.pivot = group.pivot;
                RectTransform.sizeDelta = new Web3DEngine.Vector4( group.width,group.height );
                RectTransform.localScale = group.localScale;
                RectTransform.parent = entity.parent;
                gameO.components.push(myGroup);
                break;
            };
            case "Text": {
                let text = entity_components[key];
                let myText = {};
                myText.type = 'Text';
                let Text = myText.data = {};


                Text.font = text.font;
                Text.text = text.text;
                Text.flipY = text.flipY;
                Text.mode = text.mode;
                Text.alignment = text.alignment;
                Text.spacing = text.spacing;
                Text.lineHeight = text.lineHeight;
                Text.scale = text.scale;
                Text.color = text.color;
                Text.opacity = text.opacity;
                Text.outlineColor = text.outlineColor;

                gameO.components.push(myText);
                break;
            };
            case "Image": {
                let image = entity_components[key];

                let myImage = {};
                myImage.type = "Image";
                let Image = myImage.data = {};

                Image.sprite = image.sprite;
                Image.frame = image.frame;
                Image.color = image.color;
                Image.opacity = image.opacity;
                Image.material = image.material;
                Image.imageType = image.imageType;
                gameO.components.push(myImage);
                break;
            };
            default: {
                console.log('其他组件：需要添加；', entity_components[key]);
            }
        }
    }
}

W3DJsonConverter.getMaterialJson = function (asset) {
    let data = asset.data;
    let material = {};
    if (data.shader === "blinn") {
        material = {
            type: "Material",
            data: {
                "materialType": "basic/physical",
                "data": {
                    "color": new Web3DEngine.Color(data.diffuse[0], data.diffuse[1], data.diffuse[2]),
                    "reflectivity": data.reflectivity,
                    "clearCoat": data.refraction,
                    "clearCoatRoughness": data.refractionIndex,
                    "maskTextureID": data.emissiveMap,
                    "roughnessA": data.shininess,
                    "roughnessB": data.bumpMapFactor,
                    "metalnessA": data.metalness,
                    "metalnessB": data.emissiveIntensity,
                    "environmentTextureID": data.cubeMap,
                    "normalTextureID": data.normalMap,
                    "normalScale": data.alphaTest
                }
            }
        };
    }
    if (data.shader === "phong") {
        material = {
            type: "Material",
            data: {
                "materialType": "basic/phong",

                "data": {
                    "colorTextureID": data.diffuseMap,
                    "specular": data.refraction,
                    "shininess": data.reflectivity,
                    "environmentTextureID": data.cubeMap,
                    "environmentAlphaTextureID": data.heightMap,
                    "environmentAlphaComponent": data.diffuseMapChannel,
                    "normalTextureID": data.normalMap,
                    "normalScale": "invert"
                }
            }
        }
    }
    return material;
}

W3DJsonConverter.setAssetsData = function (message) {

    if (message.c != "assets")
        return;

    if (message.a == "op")
        return;

    if (message.a === "bs" && message.data != null)
        W3DJsonConverter._assetsData = message.data;
    else if (message.a === "s" && message.data != null) {
        W3DJsonConverter._assetsData[message.id] = message.data;
    } else if (message.a === "u" && message.d != null) {
        delete W3DJsonConverter._assetsData[message.d];
    }

}

W3DJsonConverter.getAssetDataByID = function (assetID) {
    if (!assetID) return null;
    if (W3DJsonConverter._assetsData) {
        for (let id in W3DJsonConverter._assetsData) {
            if (id == assetID.toString()) {
                return W3DJsonConverter._assetsData[id].data;
            }
        }
    }
    return null;
}

W3DJsonConverter.getAssetDataInAssetsList = function (assetID, assetsData) {
    if (!assetID) return null;
    if (assetsData) {
        for (let id in assetsData) {
            if (id == assetID.toString()) {
                return assetsData[id];
            }
        }
    }
    return null;
}

W3DJsonConverter.scriptNameTransfer = function (script) {
    var filename = script + ".js" || 'script.js';

    var name = filename.slice(0, -3);
    var className = '';
    var scriptName = '';

    if (!className || !scriptName) {
        // tokenize filename
        var tokens = [];
        var string = name.replace(/([^A-Z])([A-Z][^A-Z])/g, '$1 $2').replace(/([A-Z0-9]{2,})/g, ' $1');
        var parts = string.split(/(\s|\-|_|\.)/g);

        // filter valid tokens
        for (var i = 0; i < parts.length; i++) {
            parts[i] = parts[i].toLowerCase().trim();
            if (parts[i] && parts[i] !== '-' && parts[i] !== '_' && parts[i] !== '.')
                tokens.push(parts[i]);
        }

        if (tokens.length) {
            if (!scriptName) {
                scriptName = tokens[0];

                for (var i = 1; i < tokens.length; i++) {
                    scriptName += tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
                }
            }

            if (!className) {
                for (var i = 0; i < tokens.length; i++) {
                    className += tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
                }
            }
        } else {
            if (!className)
                className = 'Script';

            if (!scriptName)
                scriptName = 'script';
        }
    }
    var filenameValid = /^([^0-9.#<>$+%!`&='{}@\\/:*?"<>|\n])([^#<>$+%!`&='{}@\\/:*?"<>|\n])*$/i;

    if (!filenameValid.test(className))
        className = 'Script';

    // filename = filename.replace( script , className).replace( script , scriptName) || filename;
    filename = className.replace(/\{scriptName\}/g, scriptName);
    return filename;
}


// todo 临时接口
W3DJsonConverter.AddEnvironmentMap = function( skyboxIntensity ){
    // 直接取天空盒
    let environmentTexture = Web3DEngine.RenderSettings.instance.skyBoxTexture;

    if( environmentTexture == null ) 
        return;
    
    function MaterialAddEnvironment( group , envMap , envMapIntensity ){
        
        function findMaterial( object ){
            for(let child of object.children ){
                
                if( child &&  child.material != null){
                    child.material.envMap = !!envMap ? envMap._imp : null ;
                    child.material.envMapIntensity = envMapIntensity ;
                    child.material.needsUpdate = true ;
                }

                if( child.children.length == 0 ){
                    continue;
                }

                findMaterial( child );
            }
        }

        findMaterial( group );
    }

    var sceneInst = Web3DEngine.SceneManager.GetActiveScene();
    MaterialAddEnvironment( sceneInst._imp , environmentTexture  , skyboxIntensity );

}

// todo 临时接口
W3DJsonConverter.SetPostProcess = function( post_process ){

    if( post_process != null ){
        let post_processData = post_process;
        let appInst = Web3DEngine.Application.instance;

        if( post_processData.enabled && post_processData.overrides ){

            //
            if( post_processData.overrides.Bloom ){

                let bloom = appInst.GetEffect("Bloom");

                if( !bloom ){
                    bloom = appInst.AddEffect("Bloom");
                }

                if( bloom ){
                    // unrealBloomPass
                    
                    bloom.strength = post_processData.overrides.Bloom.strength;
                    bloom.radius = post_processData.overrides.Bloom.kernelSize;
                    bloom.threshold = post_processData.overrides.Bloom.sigma;
                    bloom.highPassUniforms[ "luminosityThreshold" ].value = post_processData.overrides.Bloom.sigma;

                    let resolution = post_processData.overrides.Bloom.resolution;
                    bloom.resolution = new THREE.Vector2( resolution, resolution);

                    //bloomPass
                    /* bloom.copyUniforms[ "opacity" ].value = post_processData.overrides.Bloom.strength;
                    bloom.convolutionUniforms[ "cKernel" ].value = THREE.ConvolutionShader.buildKernel( post_processData.overrides.Bloom.sigma );
                    bloom.materialConvolution.defines.KERNEL_SIZE_FLOAT = post_processData.overrides.Bloom.kernelSize.toFixed( 1 );
                    bloom.materialConvolution.defines.KERNEL_SIZE_INT = post_processData.overrides.Bloom.kernelSize.toFixed( 0 );
                    let resolution = post_processData.overrides.Bloom.resolution;
                    var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat };
                    bloom.renderTargetX = new THREE.WebGLRenderTarget( resolution, resolution, pars );
                    bloom.renderTargetX.texture.name = "BloomPass.x";
                    bloom.renderTargetY = new THREE.WebGLRenderTarget( resolution, resolution, pars );
                    bloom.renderTargetY.texture.name = "BloomPass.y"; */
                }
            }

            //
            if( post_processData.overrides.AmbientOcclusion ){
                
                let ao = appInst.GetEffect("AmbientOcclusion");

                if( !ao ){
                    ao = appInst.AddEffect("AmbientOcclusion");
                }

                if(ao){
                    ao.kernelRadius = post_processData.overrides.AmbientOcclusion.kernelRadius;
                    ao.kernelSize = post_processData.overrides.AmbientOcclusion.kernelSize;
                    ao.minDistance = post_processData.overrides.AmbientOcclusion.minDistance;
                    ao.maxDistance = post_processData.overrides.AmbientOcclusion.maxDistance;
                }
            }

            //
            if( post_processData.overrides.Highlights ){
                let highLights = appInst.GetEffect("Highlights");

                if( !highLights ){
                    highLights = appInst.AddEffect("Highlights");
                }

                if( highLights ){
                    highLights.uniforms._Shadows.value.fromArray( post_processData.overrides.Highlights.shadows);
                    highLights.uniforms._Midtones.value.fromArray( post_processData.overrides.Highlights.midtones);
                    highLights.uniforms._Highlights.value.fromArray( post_processData.overrides.Highlights.highlights);
                    highLights.uniforms._Amount.value = post_processData.overrides.Highlights.amount ;
                }
            }

            //
            if( post_processData.overrides.Vignette ){
                
                let vignette = appInst.GetEffect("Vignette");

                if( !vignette ){
                    vignette = appInst.AddEffect("Vignette");
                }
                if( vignette ){
                    vignette.uniforms[ "offset" ].value =  post_processData.overrides.Vignette.offset;
                    vignette.uniforms[ "darkness" ].value = post_processData.overrides.Vignette.darkness;
                }
            }

            //
            if( post_processData.overrides.ToneMapping ){

                let tone = appInst.GetEffect("ToneMapping");

                if( !tone ){
                    tone = appInst.AddEffect("ToneMapping");
                }

                if( tone ){
                    tone.uniforms._ACESExposure.value = post_processData.overrides.ToneMapping.exposure;
                }
            }

            //
            if( post_processData.overrides.Gamma ){
                let gamma = appInst.GetEffect("Gamma");

                if( !gamma ){
                    gamma = appInst.AddEffect("Gamma");
                }

                if( gamma ){
                    gamma.uniforms._BCG.value.fromArray([ post_processData.overrides.Gamma.brightness , post_processData.overrides.Gamma.contrast , post_processData.overrides.Gamma.gamma ]) ;
                    gamma.uniforms._Coeffs.value.fromArray( post_processData.overrides.Gamma.coeffs ) ;
                }
            }

            //
            if( post_processData.overrides.Saturation ){
                let saturation = appInst.GetEffect("Saturation");

                if( !saturation ){
                    saturation = appInst.AddEffect("Saturation");
                }
                if( saturation ){
                    saturation.uniforms._Master.value.fromArray( [ post_processData.overrides.Saturation.hue , post_processData.overrides.Saturation.saturation , post_processData.overrides.Saturation.value ] );
                }
            }

            //
            if( post_processData.overrides.Exposure ){
                let exposure = appInst.GetEffect("Exposure");

                if( !exposure ){
                    exposure = appInst.AddEffect("Exposure");
                }

                if(exposure){
                    exposure.adaptive = post_processData.overrides.Exposure.adaptive;
                }

            }
            for( let postName in post_processData.overrides ){
                let pass = appInst.GetEffect(postName);
                if( pass ){
                    pass.enabled = post_processData.overrides[postName].enabled;
                }
            }
        }else{

            let vignette = appInst.GetEffect("Vignette");
            if( vignette ){
                appInst.RemoveEffect("Vignette");
            }

            let tone = appInst.GetEffect("ToneMapping");
            if( tone ){
                appInst.RemoveEffect("ToneMapping");
            }

            let ao = appInst.GetEffect("AmbientOcclusion");
            if( ao ){
                appInst.RemoveEffect("AmbientOcclusion");
            }

            let bloom = appInst.GetEffect("Bloom");
            if( bloom ){
                bloom = appInst.RemoveEffect("Bloom");
            }

            let highLights = appInst.GetEffect("Highlights");

            if( highLights ){
                appInst.RemoveEffect("Highlights");
            }

            let gamma = appInst.GetEffect("Gamma");

            if( gamma ){
                appInst.RemoveEffect("Gamma");
            }

            let saturation = appInst.GetEffect("Saturation");

            if( saturation ){
                appInst.RemoveEffect("Saturation");
            }

            let exposure = appInst.GetEffect("Exposure");

            if( exposure ){
                appInst.RemoveEffect("Exposure");
            }

        }
    }

}


// 引擎增加
//effects
var SMHLGGShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"_Shadows": { value: new THREE.Vector4( 1, 1, 1, 0.5 ) },
		"_Midtones": { value: new THREE.Vector4( 1, 1, 1, 0.5 ) },
        "_Highlights": { value: new THREE.Vector4( 1, 1, 1, 0.5 ) },
        "_Amount": { value: 1.0 },
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",

		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform vec4 _Shadows;",
		"uniform vec4 _Midtones;",
        "uniform vec4 _Highlights;",
        "uniform float _Amount;",

		"varying vec2 vUv;",
        
		"void main() {",
        "    vec3 oc = texture2D(tDiffuse, vUv).rgb;",
        "    vec3 color = oc + (_Shadows.rgb * 0.5 - 0.5) * (1.0 - oc);",
        "    color = saturate(color);",
        "    color *= _Highlights.rgb;",
        "    color = pow(color, 1.0 / _Midtones.rgb);",
        "    color = saturate(color);",
        "    gl_FragColor = vec4(mix(oc, color, _Amount), 1.0);",
		"}"

	].join( "\n" )
};

var BCGShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"_BCG": { value: new THREE.Vector3( 0, 1, 1 ) },//Brightness (X,0-2) Contrast (Y,0-2) Gamma (Z,0.1-10)
		"_Coeffs": { value: new THREE.Vector3( 0.5, 0.5, 0.5 ) },//Contrast coeffs (RGB)
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",

		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform vec3 _BCG;",
		"uniform vec3 _Coeffs;",

		"varying vec2 vUv;",
        
		"void main() {",
        "   vec4 color = vec4(texture2D(tDiffuse, vUv).rgb, 1.0);",
        "    vec4 factor = vec4(_Coeffs, color.a);",
            
        "    color *= _BCG.x;",
        "    color = (color - factor) * _BCG.y + factor;",
        "    color = clamp(color, 0.0, 1.0);",
        "    gl_FragColor = pow(color, vec4(_BCG.z,_BCG.z,_BCG.z,_BCG.z));",
		"}"

	].join( "\n" )
};

var HSVShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"_Master": { value: new THREE.Vector3( 0, 1, 1 ) },//Hue (X,-0.5-0.5) Saturation (Y,0-2) Value (Z,0-2)
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",

		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform vec3 _Master;",

        "varying vec2 vUv;",
        
        "vec3 HSVtoRGB(vec3 c)",
        "{",
        "    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);",
        "    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);",
        "    return c.z * mix(K.xxx, saturate(p - K.xxx), c.yyy);",
        "}",
        
        "vec3 RGBtoHSV(vec3 c)",
        "{",
        "    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);",
        "    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));",
        "    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));",
        "    float d = q.x - min(q.w, q.y);",
        "    float e = 1.0e-4;",
        "    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);",
        "}",

        "float rot(float value, float low, float hi)",
        "{",
        "    return (value < low) ? value + hi : (value > hi) ? value - hi : value;",
        "}",

        "float rot10(float value)",
        "{",
        "    return rot(value, 0.0, 1.0);",
        "}",
        
		"void main() {",
        "    vec4 color = vec4(texture2D(tDiffuse, vUv).rgb, 1.0);",

        "    vec3 hsv = RGBtoHSV(color.rgb);",
        "    hsv.x = rot10(hsv.x + _Master.x);",
        "    hsv.yz *= _Master.yz;",

        "    gl_FragColor = vec4(HSVtoRGB(hsv), 1.0);",
		"}"

	].join( "\n" )
};

var ACEToneShader = {

	uniforms: {

		"tDiffuse": { value: null },
        "_ACESExposure": { value: 1.0 },
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",

		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float _ACESExposure;",
        "varying vec2 vUv;",
        "vec3 ACESToneMapping( vec3 color ) {",

        "    color *= _ACESExposure;",
        "    return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );",
        
        "}",
        
		"void main() {",

        "    gl_FragColor.rgb = ACESToneMapping(texture2D(tDiffuse, vUv).xyz);",
		"}"

	].join( "\n" )
};

var sRGBShader = {

	uniforms: {

		"tDiffuse": { value: null }
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",

		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",
        // "vec4 LinearTosRGB( in vec4 value ) {",
        // "    return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );",
        
		"void main() {",
        "    gl_FragColor = LinearTosRGB(texture2D(tDiffuse, vUv));",
		"}"

	].join( "\n" )
};

Web3DEngine.Application.prototype.CreateRenderRes=function(){
    this._renderScenePass = new THREE.RenderPass();
    this._composer = new THREE.EffectComposer( this._renderer );
    this._composer.addPass( this._renderScenePass );

    // this._adaptive = new THREE.AdaptiveToneMappingPass( true, 256 );    
    // this._adaptive.needsSwap = true;
    // this._adaptive.enable = false;
    // this._composer.addPass( this._adaptive );

    this._sRGBPass = new THREE.ShaderPass( sRGBShader );
    this._composer.addPass( this._sRGBPass );

    // //test
    // let effect;
    this._renderer.debug.checkShaderErrors = true;
    // let bloomEffect = this.AddEffect("Bloom");
    // bloomEffect.strength = 2.0;
    // this.AddEffect("Ambient Occlusion");
    // this.AddEffect("Tonemapping");
    // this.AddEffect("Vignette");
    // effect = this.AddEffect("Bloom");
    // effect.strength = 1.5;
    // effect.threshold = 0.8;

    // effect = this.AddEffect("Vignette");
    // effect.uniforms[ "offset" ].value = 0.95;
    // effect.uniforms[ "darkness" ].value = 1.6;

    // effect = this.AddEffect("Shadows Midtones Highlights");
    // effect.uniforms[ "_Shadows" ].value = new THREE.Vector4(1.0, 0.98,0.78,1);
    // effect.uniforms[ "_Midtones" ].value = new THREE.Vector4(1.0, 0.82,0.84,1);
    // effect.uniforms[ "_Highlights" ].value = new THREE.Vector4(1.0, 0.96,0.85,1);

    // effect = this.AddEffect("ToneMapping");


    // // effect = this.AddEffect("Test");

    // effect = this.AddEffect("Bright Contrast Gamma");
    // effect.uniforms[ "_BCG" ].value = new THREE.Vector4(1.3,1,0.45);

    // effect = this.AddEffect("Hue Saturation Value");
    // effect.uniforms[ "_Master" ].value = new THREE.Vector3(0,1.2,1);
}


Web3DEngine.Application.prototype.AddEffect=function(effectName){
    let effect = null;
    if(effectName==="ToneMapping"){
        // effect = new THREE.AdaptiveToneMappingPass( true, 256 );
        // effect.needsSwap = true;
        // effect.effectName = effectName;
        // this._composer.addPass( effect );


        effect = new THREE.ShaderPass( ACEToneShader );
        // effect.uniforms[ "ACESExposure" ].value = 1.6;
        
        // effect = new THREE.ShaderPass( TestShader );
        // effect.effectName = effectName;
        // this._composer.addPass( effect );
    }
    else if(effectName==="Bloom"){
        effect = new THREE.UnrealBloomPass( new THREE.Vector2( 1298, 720 ), 1.5, 0.4, 0.85 );
        effect.threshold = 0.8;
        effect.strength = 0.2;
        effect.radius = 1;
    }
    else if(effectName==="AmbientOcclusion"){
        effect = new THREE.SSAOPass( this._renderScenePass.scene , this._renderScenePass.camera );
        effect.kernelRadius = 16;
    }
    else if(effectName==="Vignette"){
        effect = new THREE.ShaderPass( THREE.VignetteShader );
        effect.uniforms[ "offset" ].value = 0.95;
        effect.uniforms[ "darkness" ].value = 1.6;
    }
    else if(effectName==="Highlights"){
        // ShadowsMidtonesHighlights
        effect = new THREE.ShaderPass( SMHLGGShader );
    }
    else if(effectName==="Gamma"){
        //BrightContrastGamma
        effect = new THREE.ShaderPass( BCGShader );
    }
    else if(effectName==="Saturation"){
        //HueSaturationValue
        effect = new THREE.ShaderPass( HSVShader );
    }
    else if(effectName==="Exposure"){
        effect = new THREE.AdaptiveToneMappingPass( true, 256 );
        effect.needsSwap = true;
    }

    if(effect != null){
        effect.effectName = effectName;
        this._composer.insertPass( effect, this._composer.passes.length-1 );
    }
    return effect;
}

Web3DEngine.Application.prototype.GetEffect=function(effectName){
    for(let index = 0; index < this._composer.passes.length; ++index){
        if(this._composer.passes[index].effectName === effectName)
        {
            return this._composer.passes[index];
        }
    }
    return null;
}

Web3DEngine.Application.prototype._GetEffectIndex=function(effectName){
    for(let index = 0; index < this._composer.passes.length; ++index){
        if(this._composer.passes[index].effectName === effectName)
        {
            return index;
        }
    }
    return -1;
}

Web3DEngine.Application.prototype.RemoveEffect=function(effectName){
    let index = this._GetEffectIndex(effectName);
    if(index >=0)
    {
        this._composer.passes.splice(index, 1);
    }
}

Web3DEngine.Application.prototype._render = function( deltaTime ){
    var sceneInst = Web3DEngine.SceneManager.GetActiveScene();
    if(sceneInst == null)   return;
    var cameras = Web3DEngine.Camera.allCameras;
    if(cameras.length > 0)
    {
        this._renderScenePass.scene = sceneInst._imp;
        this._renderScenePass.camera = cameras[0]._imp;
        this._composer.render();

        this._renderer.clear(false, true, true);
        for (var index = 1; index < cameras.length; ++index) {
            this._renderer.render(sceneInst._imp, cameras[index]._imp);
        }
    }
};

Web3DEngine.Application.prototype.changeRender = function( isBloom ){
    this.isBloom = isBloom;
};
