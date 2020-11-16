(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Web3DEngine = {})));
}(this, (function (exports) { 'use strict';

	/**
	 * https://github.com/mrdoob/eventdispatcher.js/
	 */

	function EventDispatcher() {
	    this.instClassType = EventDispatcher.classType;
	}

	EventDispatcher.classType = 'EventDispatcher';

	Object.assign( EventDispatcher.prototype, {
	    constructor: EventDispatcher,
	    isEventDispatcher:true,
		addEventListener: function ( type, instRef, listener ) {

			if ( this._listeners === undefined ) this._listeners = {};

			var listeners = this._listeners;

			if ( listeners[ type ] === undefined ) {

				listeners[ type ] = [];

			}

	        listeners[ type ].push( {inst:instRef, func:listener} );

		},

		// hasEventListener: function ( type, listener ) {
		//
		// 	if ( this._listeners === undefined ) return false;
		//
		// 	var listeners = this._listeners;
		//
		// 	return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;
		//
		// },

		removeEventListener: function ( type, instRef, listener ) {

			if ( this._listeners === undefined ) return;

			var listeners = this._listeners;
			var listenerArray = listeners[ type ];

			if ( listenerArray !== undefined ) {
				for(let index = 0; index < listenerArray.length; ++index)
				{
					if(listenerArray[index].inst == instRef && listenerArray[index].func == listener)
					{
	                    listenerArray.splice( index, 1 );
	                    return;
					}
				}
			}

		},

		dispatchEvent: function ( event ) {

			if ( this._listeners === undefined ) return;

			var listeners = this._listeners;
			var listenerArray = listeners[ event.type ];

			if ( listenerArray !== undefined ) {

				event.target = this;

				var array = listenerArray.slice( 0 );

				let info;
				for ( var i = 0; i < array.length; i ++ ) {
					info = array[ i ];
					info.func.call( info.inst, event );
				}
			}
		},

	    _copy:function(source){

	    }
	} );

	function Event$1() {
	}

	//system
	Event$1.RESIZE_APP_RENDERER = "resizeApplicationRenderer",

	//asset
	ProgressEvent.PROGRESS = "progress";
	Event$1.COMPLETE = "complete";
	Event$1.REMOVEASSET = "removeAsset";

	//gameobject and component
	//state
	Event$1.ACTIVATE = "activate";
	Event$1.DEACTIVATE = "deactivate";
	Event$1.DESTROY = "destroy";
	Event$1.DISABLE = "disable";

	//Transform
	Event$1.REPARENT = "reparent";

	//User Interface
	Event$1.ELEMENT_RESIZE = "elementResize";
	Event$1.ELEMENT_SET_ANCHOR = "elementSetAnchor";
	Event$1.ELEMENT_SET_PIVOT = "elementSetPivot";
	Event$1.ELEMENT_SET_MARGIN = "elementSetMargin";
	Event$1.ELEMENT_SET_SCREEN_SPACE = "elementSetScreenSpace";
	Event$1.ELEMENT_SET_RESOLUTION = "elementSetResolution";


	Event$1.CANVAS_SET_RESOLUTION = "canvasSetResolution";
	Event$1.CANVAS_SET_REFERENCE_RESOLUTION = "canvasSetReferenceResolution";
	Event$1.CANVAS_SET_SCALE_BLEND = "canvasSetScaleBlend";
	Event$1.CANVAS_SET_SET_SCREEN_SPACE = "canvasSetScreenSpace";
	Event$1.SET_CANVAS = "setCanvas";

	Event$1.RECTTRANSFORM_ON_POINTER_CLICK = "recttransformOnPointerClick";
	Event$1.RECTTRANSFORM_ON_POINTER_DOWN = "recttransformOnPointerDown";
	Event$1.RECTTRANSFORM_ON_POINTER_UP = "recttransformOnPointerUp";
	Event$1.RECTTRANSFORM_ON_POINTER_ENTER = "recttransformOnPointerEnter";
	Event$1.RECTTRANSFORM_ON_POINTER_EXIT = "recttransformOnPointerExit";
	Event$1.RECTTRANSFORM_RESIZED = "recttransformResized";


	//value
	Event$1.CHANGEGAMEOBJECTLAYER = "changegameobjectlayer";


	Event$1.ENTER_FRAME = "enterFrame";

	//component event
	Event$1.ENABLE = "enable";
	Event$1.DISABLE = "disable";
	Event$1.ADDCOMPONENT = "addComponent";
	Event$1.REMOVECOMPONENT = "removeComponent";
	Event$1.CHANGEMESH = "changemesh";
	Event$1.CHANGEAUDIOLISTENER = "changeAudioListener";

	//material
	Event$1.CHANGESHADER = "changeshader";
	Event$1.CHANGECUBETEXTURE = "changeCubeTexture";

	//animation
	Event$1.LOOPED = "looped";
	Event$1.FINISHED = "finished";

	function Color( r, g, b )
	{
	    THREE.Color.call(this, r, g, b);
	}
	Color.prototype = Object.assign( Object.create( THREE.Color.prototype ), {
	    constructor:Color
	    }
	);

	function Vector2( x, y )
	{
	    THREE.Vector2.call(this, x, y);
	}
	Vector2.prototype = Object.assign( Object.create( THREE.Vector2.prototype ), {
	        constructor:Vector2
	    }
	);


	function Vector3( x, y, z )
	{
	    THREE.Vector3.call(this, x, y, z);
	}
	Vector3.prototype = Object.assign( Object.create( THREE.Vector3.prototype ), {
	        constructor:Vector3
	    }
	);


	function Vector4(x, y, z, w)
	{
	    THREE.Vector4.call(this, x, y, z, w);
	}
	Vector4.prototype = Object.assign( Object.create( THREE.Vector4.prototype ), {
	        constructor:Vector4
	    }
	);


	function Matrix4()
	{
	    THREE.Matrix4.call(this);
	}
	Matrix4.prototype = Object.assign( Object.create( THREE.Matrix4.prototype ), {
	        constructor:Matrix4
	    }
	);


	function Quaternion( x, y, z, w )
	{
	    THREE.Quaternion.call(this, x, y, z, w);
	}
	Quaternion.prototype = Object.assign( Object.create( THREE.Quaternion.prototype ), {
	        constructor:Quaternion
	    }
	);


	function Euler(x, y, z, order)
	{
	    THREE.Euler.call(this, x, y, z, order );
	}
	Euler.prototype = Object.assign( Object.create( THREE.Euler.prototype ), {
	        constructor:Euler
	    }
	);

	/**
	 * @constructor
	 * @name pc.ScriptAttributes
	 * @classdesc Container of Script Attribute definitions. Implements an interface to add/remove attributes and store their definition for a {@link ScriptType}.
	 * Note: An instance of pc.ScriptAttributes is created automatically by each {@link ScriptType}.
	 * @param {ScriptType} scriptType Script Type that attributes relate to.
	 */
	function Attributes() {
	    this.index = { };
	    this.infoRef = null;
	}
	/**
	 * @function
	 * @name pc.ScriptAttributes#add
	 * @description Add Attribute
	 * @param {String} name Name of an attribute
	 * @param {Object} args Object with Arguments for an attribute
	 * @param {String} args.type Type of an attribute value, list of possible types:
	 * boolean, number, string, json, asset, entity, rgb, rgba, vec2, vec3, vec4, curve
	 * @param {?} [args.default] Default attribute value
	 * @param {String} [args.title] Title for Editor's for field UI
	 * @param {String} [args.description] Description for Editor's for field UI
	 * @param {(String|String[])} [args.placeholder] Placeholder for Editor's for field UI.
	 * For multi-field types, such as vec2, vec3, and others use array of strings.
	 * @param {Boolean} [args.array] If attribute can hold single or multiple values
	 * @param {Number} [args.size] If attribute is array, maximum number of values can be set
	 * @param {Number} [args.min] Minimum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
	 * @param {Number} [args.max] Maximum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
	 * @param {Number} [args.precision] Level of precision for field type 'number' with floating values
	 * @param {String} [args.assetType] Name of asset type to be used in 'asset' type attribute picker in Editor's UI, defaults to '*' (all)
	 * @param {String[]} [args.curves] List of names for Curves for field type 'curve'
	 * @param {String} [args.color] String of color channels for Curves for field type 'curve', can be any combination of `rgba` characters.
	 * Defining this property will render Gradient in Editor's field UI
	 * @param {Object[]} [args.enum] List of fixed choices for field, defined as array of objects, where key in object is a title of an option
	 * @example
	 * PlayerController.attributes.add('fullName', {
	 *     type: 'string',
	 * });
	 * @example
	 * PlayerController.attributes.add('speed', {
	 *     type: 'number',
	 *     title: 'Speed',
	 *     placeholder: 'km/h',
	 *     default: 22.2
	 * });
	 * @example
	 * PlayerController.attributes.add('resolution', {
	 *     type: 'number',
	 *     default: 32,
	 *     enum: [
	 *        { '32x32': 32 },
	 *        { '64x64': 64 },
	 *        { '128x128': 128 }
	 *     ]
	 * });
	 */
	Object.assign( Attributes.prototype, {
	    __regedTypes:{},
	    __linkToSolve:new Array,
	    rawToValue : function (args, value, target) {
	        let memName = args.keyName;
	        let i;
	        let components = ['x', 'y', 'z', 'w'];
	        switch (args.type) {
	            case 'boolean':
	                target[memName] = !!value;
	                return;
	            case 'string':
	                target[memName] = value;
	                return;
	            case 'number':
	                if (typeof value === 'number') {
	                    target[memName] = value;
	                    return;
	                } else if (typeof value === 'string') {
	                    if ( value.startsWith('0x') ) {
	                        value = parseInt(value, 16);
	                    } else if ( value.startsWith('0') && !value.startsWith('0x')) {
	                        value = parseInt(value, 8);
	                    } else {
	                        value = parseInt(value, 10);
	                    }
	                    if (isNaN(value)) return null;
	                    target[memName] = value;
	                    return;
	                } else if (typeof value === 'boolean') {
	                    target[memName] = (0 + value);
	                    return;
	                }
	                target[memName] = 0;
	                return;
	            case 'json':
	                if (typeof value === 'object') {
	                    target[memName] = value;
	                    return;
	                } else if ( typeof value === 'string' ) {
	                    try {
	                        target[memName] = JSON.parse(value);
	                        return;
	                    } catch (ex) {
	                        target[memName] = null;
	                        return;
	                    }
	                }
	                target[memName] = null;
	                return;
	            case 'rgb':
	                if (value instanceof Color) {
	                    if (target instanceof Color) {
	                        target.copy(value);
	                        return;
	                    }
	                    target[memName] = value.clone();
	                    return;
	                } else if (value instanceof Array && value.length == 3 ) {
	                    for (i = 0; i < value.length; i++) {
	                        if (typeof value[i] !== 'number')
	                            return null;
	                    }
	                    target[memName] = new Color().fromArray(value);
	                    return;
	                } else if (typeof value === 'string' && /#([0-9abcdef]{2}){3,4}/i.test(value)) {
	                    target[memName] = new Color().set(value);
	                    return;
	                }

	                target[memName] = null;
	                return;
	            case 'rgba':
	                if (value instanceof Color) {
	                    if (target[memName] instanceof Color) {
	                        target[memName].copy(value);
	                        return;
	                    }
	                    target[memName] = value.clone();
	                    return;
	                } else if (value instanceof Array && value.length >= 3 && value.length <= 4) {
	                    for (i = 0; i < value.length; i++) {
	                        if (typeof value[i] !== 'number')
	                            target[memName] = null;
	                        return;
	                    }
	                    target[memName] = new Color();

	                    target[memName].r = value[0];
	                    target[memName].g = value[1];
	                    target[memName].b = value[2];
	                    target[memName].a = (value.length === 3) ? 1 : value[3];

	                    return;
	                } else if (typeof value === 'string' && /#([0-9abcdef]{2}){3,4}/i.test(value)) {
	                    target[memName] = new Color();

	                    target[memName].set(value);
	                    return;
	                }
	                return;
	            case 'vec2':
	            case 'vec3':
	            case 'vec4':
	                var classType = [Vector2, Vector3, Vector4];
	                var len = parseInt(args.type.slice(3), 10);
	                var vecType = classType[len - 2];

	                if ( !(value instanceof Array)  && typeof (value) == "object" && value != null) {
	                    for (let i in value) {
	                        if (typeof value[i] !== 'number')
	                        return;
	                    }
	                    target[memName] = new classType[ Object.keys(value).length - 2]();

	                    for (i = 0; i < len; i++)
	                        target[memName][ components[i] ] = value[ components[i] ];
	                    return;
	                }

	                if (value instanceof vecType) {
	                    if (target instanceof vecType) {
	                        target.copy(value);
	                        return;
	                    }
	                    target[memName] = value.clone();
	                    return;
	                } else if (value instanceof Array && value.length === len) {
	                    for (i = 0; i < value.length; i++) {
	                        if (typeof value[i] !== 'number')
	                            return;
	                    }
	                    let localValue = new vecType();

	                    for (i = 0; i < len; i++)
	                        localValue[components[i]] = value[i];

	                    target[memName] = localValue;
	                    return;
	                }
	                return;
	                //TODO
	                // case 'curve':
	                //     if (value) {
	                //         var curve;
	                //         if (value instanceof pc.Curve || value instanceof pc.CurveSet) {
	                //             curve = value.clone();
	                //         } else {
	                //             var CurveType = value.keys[0] instanceof Array ? pc.CurveSet : pc.Curve;
	                //             curve = new CurveType(value.keys);
	                //             curve.type = value.type;
	                //         }
	                //         return curve;
	                //     }
	                break;
	            default:
	                //process link
	                if(value != null)
	                    this.__processTypeData(args, value, target);
	                return;
	        }
	    },

	    __processTypeData:function(args, value, target)
	    {
	        let type = this._getTypeByName(args.type);
	        //if(type)
	        {
	            this.__linkToSolve.push({"type":type, "args":args, "value":value, "target":target});
	        }
	    },

	    _solveLink:function(){
	        for(let index = 0; index < this.__linkToSolve.length; ++index)
	        {
	            let linkInfo = this.__linkToSolve[index];
	            linkInfo.target[linkInfo.args.keyName] = BaseObject.prototype._findInstById(linkInfo.value);
	        }
	        this.__linkToSolve.length = 0;
	    },

	    _addTypeByName:function(typeName, type){
	        this.__regedTypes[typeName] = type;
	    },

	    _getTypeByName : function(typeName){
	        if(!!this.__regedTypes[typeName])
	        {
	            return this.__regedTypes[typeName];
	        }
	        return null;
	    },

	    getTypeName:function(type){
	        for(let name in this.__regedTypes)
	        {
	            if(this.__regedTypes[name] == type)
	            {
	                return name;
	            }
	        }
	        return null;
	    },

	    add : function (name, args) {
	        if (this.index[name]) {
	            // #ifdef DEBUG
	            console.warn('attribute \'' + name + '\' is already defined for script type \'' + name + '\'');
	            // #endif
	            return;
	        } else if (this.reservedAttributes[name]) {
	            // #ifdef DEBUG
	            console.warn('attribute \'' + name + '\' is a reserved attribute name');
	            // #endif
	            return;
	        }

	        args.keyName = name;
	        this.index[name] = args;
	    },

	    remove : function (name) {
	        if (!this.index[name])
	            return false;

	        delete this.index[name];
	        return true;
	    },

	    has : function (name) {
	        return !!this.index[name];
	    },

	    get : function (name) {
	        return this.index[name] || null;
	    },

	    _getAllRegedMembers:function()
	    {
	        return Object.keys(this.index);
	    },

	    _getDefaultValueByType:function(type)
	    {
	        switch (type) {
	            case 'boolean':
	                return false;
	            case 'string':
	                return "";
	            case 'number':
	                return 0;
	            case 'json':
	                return new Object;
	            case 'asset':
	                return null;
	            case 'entity':
	                return null;
	            case 'rgb':
	            case 'rgba':
	                return new Color();
	            case 'vec2':
	                return new Vector2(0,0);
	            case 'vec3':
	                return new Vector2(0,0,0);
	            case 'vec4':
	                return new Vector2(0,0,0,1);
	        }
	        return null;
	    },

	    _updateTypeRef:function(typeRef){
	        this.infoRef = typeRef;
	    },

	    _copy:function(source){
	        this.infoRef = source.infoRef;
	        for(let item in source.index)
	        {
	            this.index[item] = source.index[item];
	        }
	    }
	});

	Attributes.prototype.reservedAttributes = [
	    'app', 'entity', 'enabled', '_enabled', '_enabledOld', '_destroyed',
	    '__attributes', '__attributesRaw', '__scriptType', '__executionOrder',
	    '_callbacks', 'has', 'on', 'off', 'fire', 'once', 'hasEvent'
	];

	Object.defineProperty(Attributes.prototype, "refTypeName",{
	    get:function () {
	        if(this.infoRef && this.infoRef.constructor)
	        {
	            return this.infoRef.constructor.name;
	        }
	        return null;
	    }
	});

	function ExtendType(subClassPrototype, superClassPrototype, args)
	{
	    subClassPrototype.classType = subClassPrototype;
	    let rootPrototype = Object.create( superClassPrototype.prototype );
	    if(!!args)
	    {
	        subClassPrototype.prototype = Object.assign( rootPrototype, args);
	    }
	    else {
	        subClassPrototype.prototype = rootPrototype;
	    }
	    subClassPrototype.prototype.constructor = subClassPrototype;
	    subClassPrototype.prototype.__attributes = new Attributes;
	    if(typeof(superClassPrototype.prototype.__attributes) != "undefined")
	    {
	        subClassPrototype.prototype.__attributes._copy(superClassPrototype.prototype.__attributes);
	    }
	    subClassPrototype.prototype.__attributes._updateTypeRef(subClassPrototype);

	    let className = subClassPrototype.name;
	    subClassPrototype.classType = className;
	    subClassPrototype.prototype["is"+className] = true;
	    Attributes.prototype._addTypeByName(className, subClassPrototype);

	    subClassPrototype.attributes = subClassPrototype.prototype.__attributes;
	}

	function BaseObject(go) {
	    EventDispatcher.call(this);
	    this.__idValue = null;
	    this.instClassType = BaseObject.classType;
	    this.id = THREE.Math.generateUUID();
	}

	BaseObject.classType = 'BaseObject';

	BaseObject.Instantiate = function(obj){
	    let newInst = new obj.constructor();
	    newInst._copy( obj );
	    return newInst;
	};

	BaseObject.Destroy = function(obj) {
	    if(obj.isGameObject)
	    {
	        //remove from its parent
	        var objParent = obj.transform.parent;
	        if(objParent != null)
	        {
	            objParent._removeChild(obj.transform);
	        }
	        else
	        {
	            obj.transform._sceneRootGO.transform._removeChild(obj.transform);
	        }
	        //destroy all attached components
	        obj._removeAllComponents();
	        //notify others
	        obj.dispatchEvent({type:Event$1.DESTROY});
	    }
	    else if(obj.isComponent)
	    {
	        var goInst = obj.gameObject;
	        goInst._removeCompoent(obj);
	    }
	};

	ExtendType(BaseObject, EventDispatcher,{
	    __attributes:new Attributes,
	    __idInstTable:{},

	    _initializeWithAttributes:function(data){
	        let mems = this.__attributes._getAllRegedMembers();
	        for(let index = 0; index<mems.length; ++index)
	        {
	            let memName = mems[index];

	            if ( typeof ( this[memName] ) === "undefined" ) continue;

	            let dataInfo = this.__attributes.get(memName);
	            if ( typeof( data[memName] ) != "undefined")
	            {
	                 this.__attributes.rawToValue( dataInfo , data[memName], this );
	            }
	            else {

	                if(dataInfo.default)
	                {
	                    this.__attributes.rawToValue( dataInfo , dataInfo.default, this );
	                }
	                else if(dataInfo.type)
	                {
	                    this[memName] = this.__attributes._getDefaultValueByType(dataInfo.type);
	                }
	            }
	        }
	    },

	    _findInstById:function(id)
	    {
	        return this.__idInstTable[id];
	    }
	});
	BaseObject.prototype._copy = function(source){
	    EventDispatcher.prototype._copy.call( this, source );
	};

	BaseObject.attributes = BaseObject.prototype.__attributes;

	Object.defineProperty(BaseObject.prototype, "id",{
	    set:function(value){
	        if(this.__idValue !== value)
	        {
	            //delete original id
	            if(this.__idValue)
	            {
	                delete this.__idInstTable[this.__idValue];
	            }
	            this.__idValue = value;
	            this.__idInstTable[this.__idValue] = this;
	        }
	    },
	    get:function () {
	        return this.__idValue;
	    }
	});

	BaseObject.attributes.add('id', {
	    type: 'string',
	    title: 'ID'
	});

	/**
	    * @private
	    * @name pc.SortedLoopArray
	    * @class Helper class used to hold an array of items in a specific order. This array is safe to modify
	    * while we loop through it. The class assumes that it holds objects that need to be sorted based on
	    * one of their fields.
	    * @param {Object} args Arguments
	    * @param {String} args.sortBy The name of the field that each element in the array is going to be sorted by
	    * @property {Number} loopIndex The current index used to loop through the array. This gets modified if we
	    * add or remove elements from the array while looping. See the example to see how to loop through this array.
	    * @property {Number} length The number of elements in the array.
	    * @property {Object[]} items The internal array that holds the actual array elements.
	    * @example
	    * var array = new pc.SortedLoopArray({ sortBy: 'priority' });
	    * array.insert(item); // adds item to the right slot based on item.priority
	    * array.append(item); // adds item to the end of the array
	    * array.remove(item); // removes item from array
	    * for (array.loopIndex = 0; array.loopIndex < array.length; array.loopIndex++) {
	    *   // do things with array elements
	    *   // safe to remove and add elements into the array while looping
	    * }
	    */

	    var SortedLoopArray = function (args) {
	        this._sortBy = args.sortBy;
	        this.items = [];
	        this.length = 0;
	        this.loopIndex = -1;
	        this._sortHandler = this._doSort.bind(this);
	    };

	    /**
	     * @private
	     * @function
	     * @name pc.SortedLoopArray#_binarySearch
	     * @description Searches for the right spot to insert the specified item
	     * @param {Object} item The item
	     * @returns {Number} The index where to insert the item
	     */
	    SortedLoopArray.prototype._binarySearch = function (item) {
	        var left = 0;
	        var right = this.items.length - 1;
	        var search = item[this._sortBy];

	        var middle;
	        var current;
	        while (left <= right) {
	            middle = Math.floor((left + right) / 2);
	            current = this.items[middle][this._sortBy];
	            if (current <= search) {
	                left = middle + 1;
	            } else if (current > search) {
	                right = middle - 1;
	            }
	        }

	        return left;
	    };

	    SortedLoopArray.prototype._doSort = function (a, b) {
	        var sortBy = this._sortBy;
	        return a[sortBy] - b[sortBy];
	    };

	    /**
	     * @private
	     * @function
	     * @name pc.SortedLoopArray#insert
	     * @description Inserts the specified item into the array at the right
	     * index based on the 'sortBy' field passed into the constructor. This
	     * also adjusts the loopIndex accordingly.
	     * @param {Object} item The item to insert
	     */
	    SortedLoopArray.prototype.insert = function (item) {
	        var index = this._binarySearch(item);
	        this.items.splice(index, 0, item);
	        this.length++;
	        if (this.loopIndex >= index) {
	            this.loopIndex++;
	        }
	    };

	    /**
	     * @private
	     * @function
	     * @name pc.SortedLoopArray#append
	     * @description Appends the specified item to the end of the array. Faster than insert()
	     * as it does not binary search for the right index. This also adjusts
	     * the loopIndex accordingly.
	     * @param {Object} item The item to append
	     */
	    SortedLoopArray.prototype.append = function (item) {
	        this.items.push(item);
	        this.length++;
	    };

	    /**
	     * @private
	     * @function
	     * @name pc.SortedLoopArray#remove
	     * @description Removes the specified item from the array.
	     * @param {Object} item The item to remove
	     */
	    SortedLoopArray.prototype.remove = function (item) {
	        var idx = this.items.indexOf(item);
	        if (idx < 0) return;

	        this.items.splice(idx, 1);
	        this.length--;
	        if (this.loopIndex >= idx) {
	            this.loopIndex--;
	        }
	    };

	    /**
	     * @private
	     * @function
	     * @name pc.SortedLoopArray#sort
	     * @description Sorts elements in the array based on the 'sortBy' field
	     * passed into the constructor. This also updates the loopIndex
	     * if we are currently looping.
	     * WARNING: Be careful if you are sorting while iterating because if after
	     * sorting the array element that you are currently processing is moved
	     * behind other elements then you might end up iterating over elements more than once!
	     */
	    SortedLoopArray.prototype.sort = function () {
	        // get current item pointed to by loopIndex
	        var current = (this.loopIndex >= 0 ? this.items[this.loopIndex] : null);
	        // sort
	        this.items.sort(this._sortHandler);
	        // find new loopIndex
	        if (current !== null) {
	            this.loopIndex = this.items.indexOf(current);
	        }
	    };

	function Scene() {

	}

	Object.assign( Scene.prototype, {
	    _init:function(){
	        this._imp = new THREE.Scene;
	        this._imp.background = new THREE.Color( 0xffffff );
	        this._ambientLight = new THREE.AmbientLight( 0xffffff , 0.1);
	        this._imp.add( this._ambientLight);
	        this._imp.fog = new THREE.Fog( 0xffffff, 1, 10000 );
	        this._rootGO = new GameObject();
	        this._imp.add(this._rootGO._imp);
	        this._rayTarget;
	    },

	    GetRootGameObjects: function () {
	        var _roots = [];
	        for(var index = 0; index < this._rootGO.transform.childCount; ++index)
	        {
	            var child = this._rootGO.transform.GetChild(index);
	            _roots.push(child.gameObject);
	        }
	        return _roots;
	    },

	    //TODO
	    //临时接口
	    rayCastGameObjectFromCamera:function (screenPosition, cameraComponent) {
	        let rayCaster = new THREE.Raycaster;
	        rayCaster.setFromCamera( screenPosition, cameraComponent._imp );
	        let intersects = rayCaster.intersectObject( this._rootGO._imp, true );
	        if ( intersects.length > 0 ) {
	            let number=0;
	            for( let i=0;i<intersects.length;i++ ){
	                if( intersects[i].object.type == 'Mesh' && intersects[i].object.material == 'MeshBasicMaterial' && intersects[i].object.geometry == 'SphereGeometry' ){
	                    number =i;
	                    break;
	                }
	            }
	            var res = intersects.filter( function ( res ) {
	                return res && res.object;
	            } )[ number ];

	            if ( res && res.object ) {
	                this._setRayTargetInMesh(res.object);
	                return this._rayTarget;
	            }
	        }

	        this._rayTarget = null;
	        return this._rayTarget;
	    },

	    _setRayTargetInMesh:function (mesh) {
	        let obj = null;
	        getGameObjectInMesh(mesh);
	        function getGameObjectInMesh(m){
	            if(obj) return;
	            if (m.userData.engineComponent)
	            {
	                obj = m.userData.engineComponent.gameObject;
	            }
	            else
	            {
	                if (m.parent) {
	                    getGameObjectInMesh(m.parent);
	                }
	            }
	        }

	        if(obj)
	            this._rayTarget = obj;
	        else
	            this._rayTarget = null;
	    }

	});

	function Asset() {
	    BaseObject.call(this);
	    this.instClassType = Asset.classType;
	    this._imp = null;
	}

	Asset.classType = 'Asset';

	Asset.prototype = Object.assign( Object.create( BaseObject.prototype ), {
	    isAsset:true,
	    _isEmpty:function(){
	        return this._imp === undefined;
	    },
	    _attachAsset:function(asset)
	    {
	        if(_checkAssetType(asset) == false) return;
	        this._imp = asset;
	    },
	    _checkAssetType(asset){
	        return true;
	    }
	} );

	function Material() {
	    Asset.call(this);
	    this.instClassType = Material.classType;
		this.name='Material';
	    this._imp = null;
	    this._shader = "";

	    Object.defineProperty(this, "shader",{
	        get:function () {
	            return this._shader;
	        },

	        set:function(value){
	            if(this._shader === value)  return;
	            this._shader = value;
	            switch(this._shader)
	            {
	                case "basic/physical":
	                    this._imp = new THREE.StandardNodeMaterial();
	                    break;
	                case "basic/phong":
	                    this._imp = new THREE.PhongNodeMaterial();
	                    break;
	            }

	            this.dispatchEvent({type:Event$1.CHANGESHADER});
	        }
	    });

	    // //添加消息，环境贴图资源改变进行相应处理
	    // this.addEventListener(Event.CHANGECUBETEXTURE, this, function(event) {
	    //     if(this._imp)
	    //     {
	    //         if(event.data.id == this._imp.environment.value.uuid)
	    //         {
	    //             this._imp.environment = new THREE.CubeTextureNode( event.data._imp );
	    //             this._imp.environment.value.uuid = event.data.id; // todo sign recode id
	    //         }
	    //     }
	    // });

	}

	Material.classType = 'Material';

	Material.prototype = Object.assign( Object.create( Asset.prototype ), {
	    isMaterial:true,

	    saveFile:function(){
	        if( this._imp == null ) return null;
	        let dataMat = "";
	        if( this._shader === "basic/physical")
	        {
	            dataMat = this._saveBasicPhysical( this._imp );
	        }
	        else if( this._shader === "basic/phong")
	        {
	            dataMat = this._saveBasicPhone( this._imp );
	        }else{
	            dataMat = "This material is not exit!";
	        }
	        return dataMat;
	    },

	    _writeTextureInfo:function( arrTex , id , filePath ){
	        for(let i = 0; i< arrTex.length;i++){
	            if( id === arrTex[i].id ){
	                return ;
	            }
	        }
	        let path = filePath || AssetManager.instance.getTextureByID(id).filePath ;
	        let infoTex = {
	            id : id,
	            filePath : path
	        };
	        arrTex.push( infoTex );
	    },

	    _saveBasicPhysical:function( material ){
	        let mat = material || null;
	        if( mat == null ) return;
	        let dataBasicPhysical = {
	            textures:[],
	            id : "",
	            materialType : "basic/physical",
	            data : {
	                color : 16777215,
	                reflectivity : 0,
	                clearCoat : 1,
	                clearCoatRoughness : 1,
	                maskTextureID : "00000000-0000-4000-0000-00000001",
	                roughnessA : 0.5,
	                roughnessB : 0,
	                metalnessA : 0.5,
	                metalnessB : 1,
	                environmentTextureID : "00000000-0000-4000-0000-00000002",
	                normalTextureID : "00000000-0000-4000-0000-00000003",
	                normalScale : 0.3
	            }
	        };
	        dataBasicPhysical.id = this.id;
	        dataBasicPhysical.data.color = mat.color.value.getHex() || 0xffffff ;
	        dataBasicPhysical.data.reflectivity = mat.reflectivity.value || 0;
	        dataBasicPhysical.data.clearCoat = mat.clearCoat.value || 0;
	        dataBasicPhysical.data.clearCoatRoughness = mat.clearCoatRoughness.value || 0;

	        dataBasicPhysical.data.roughnessA = mat.roughness.a.value || 0;
	        dataBasicPhysical.data.roughnessB = mat.roughness.b.value || 0;
	        dataBasicPhysical.data.metalnessA = mat.metalness.a.value || 0;
	        dataBasicPhysical.data.metalnessB = mat.metalness.b.value || 0;
	        dataBasicPhysical.data.normalScale = mat.normal.scale.b.value || 0;

	        dataBasicPhysical.data.maskTextureID = mat.roughness.c.node.value.uuid ;
	        this._writeTextureInfo( dataBasicPhysical.textures , dataBasicPhysical.data.maskTextureID );

	        dataBasicPhysical.data.environmentTextureID = mat.environment.value.uuid ;
	        this._writeTextureInfo( dataBasicPhysical.textures , dataBasicPhysical.data.environmentTextureID );

	        dataBasicPhysical.data.normalTextureID = mat.normal.value.value.uuid ;
	        this._writeTextureInfo( dataBasicPhysical.textures , dataBasicPhysical.data.normalTextureID );

	        return JSON.stringify( dataBasicPhysical , null , 2 );
	    },

	    _saveBasicPhone:function( material ){
	        let mat = material || null;
	        if( mat == null ) return;
	        let dataBasicPhone = {
	            textures:[],
	            id : "",
	            materialType : "basic/phong",
	            data : {
	                colorTextureID : "00000000-0000-4000-0000-00000000",
	                specular : 0.5,
	                shininess : 15,
	                environmentTextureID : "00000000-0000-4000-0000-00000001",
	                environmentAlphaTextureID : "00000000-0000-4000-0000-00000002",
	                environmentAlphaComponent : "x",
	                normalTextureID : "00000000-0000-4000-0000-00000003",
	                normalScale : "invert"
	            }
	        };
	        dataBasicPhone.id = this.id;
	        dataBasicPhone.data.specular = mat.specular.value || 0;
	        dataBasicPhone.data.shininess = mat.shininess.value || 0;

	        dataBasicPhone.data.environmentAlphaComponent = mat.environmentAlpha.components || "x";
	        dataBasicPhone.data.normalScale = mat.normal.scale.method || "radians";

	        dataBasicPhone.data.colorTextureID = mat.color.value.uuid ;
	        this._writeTextureInfo( dataBasicPhone.textures , dataBasicPhone.data.colorTextureID );

	        dataBasicPhone.data.environmentTextureID = mat.environment.value.uuid ;
	        this._writeTextureInfo( dataBasicPhone.textures , dataBasicPhone.data.environmentTextureID );

	        dataBasicPhone.data.environmentAlphaTextureID = mat.environmentAlpha.node.value.uuid ;
	        this._writeTextureInfo( dataBasicPhone.textures , dataBasicPhone.data.environmentAlphaTextureID );

	        dataBasicPhone.data.normalTextureID = mat.normal.value.value.uuid;
	        this._writeTextureInfo( dataBasicPhone.textures , dataBasicPhone.data.normalTextureID );


	        return JSON.stringify( dataBasicPhone , null , 2 );
	    },

	    _readFile:function(data){
	        if(data.materialType == null)   return;
	        if(data.materialType === "basic/physical")
	        {
	            this._processBasicPhysical(data);
	        }
	        else if(data.materialType == "basic/phong")
	        {
	            this._processBasicPhone(data);
	        }
	    },

	    _assignData:function(data){
	        this.id = data.id;
	        this.filePath = data.filePath;
	        AssetManager.instance._regMaterial(this);
	    },

	    _processBasicPhysical:function(data){
	        let info = data.data;
	        this.shader = data.materialType;
	        let matInst = this._imp;

	        let texture = AssetManager.instance.getTextureByID(info.maskTextureID);
	        let mask =  new THREE.SwitchNode(new THREE.TextureNode(texture._imp));
	        mask.node.value.uuid = info.maskTextureID;// todo sign recode id

	        let normalScale = new THREE.FloatNode(info.normalScale);
	        let roughnessA = new THREE.FloatNode(info.roughnessA );
	        let metalnessA = new THREE.FloatNode( info.metalnessA );

	        let roughnessB = new THREE.FloatNode( info.roughnessB );
	        let metalnessB = new THREE.FloatNode( info.metalnessB );

	        let reflectivity = new THREE.FloatNode( info.reflectivity );
	        let clearCoat = new THREE.FloatNode( info.clearCoat );
	        let clearCoatRoughness = new THREE.FloatNode( info.clearCoatRoughness );

	        let roughness = new THREE.Math3Node(
	            roughnessA,
	            roughnessB,
	            mask,
	            THREE.Math3Node.MIX
	        );

	        var metalness = new THREE.Math3Node(
	            metalnessA,
	            metalnessB,
	            mask,
	            THREE.Math3Node.MIX
	        );

	        var normalMask = new THREE.OperatorNode(
	            new THREE.Math1Node( mask, THREE.Math1Node.INVERT ),
	            normalScale,
	            THREE.OperatorNode.MUL
	        );

	        matInst.color = new THREE.ColorNode( info.color );
	        matInst.roughness = roughness;
	        matInst.metalness = metalness;
	        matInst.reflectivity = reflectivity;
	        matInst.clearCoat = clearCoat;
	        matInst.clearCoatRoughness = clearCoatRoughness;

	        let cubemapTexture = AssetManager.instance.getTextureByID(info.environmentTextureID);
	        matInst.environment = new THREE.CubeTextureNode( cubemapTexture._imp );
	        matInst.environment.value.uuid = info.environmentTextureID; // todo sign recode id

	        let normalTexture = AssetManager.instance.getTextureByID(info.normalTextureID);
	        matInst.normal = new THREE.NormalMapNode( new THREE.TextureNode( normalTexture._imp ) );
	        matInst.normal.value.value.uuid = info.normalTextureID; // todo sign recode id

	        matInst.normal.scale = normalMask;
	    },

	    _processBasicPhone:function(data){
	        let info = data.data;
	        this.shader = data.materialType;
	        let matInst = this._imp;

	        let colorTexture = AssetManager.instance.getTextureByID(info.colorTextureID);
	        matInst.color = new THREE.TextureNode( colorTexture._imp );
	        matInst.color.value.uuid = info.colorTextureID; // todo sign recode id
	        matInst.specular = new THREE.FloatNode( info.specular );
	        matInst.shininess = new THREE.FloatNode( info.shininess );
	        let cubemapTexture = AssetManager.instance.getTextureByID(info.environmentTextureID);
	        matInst.environment = new THREE.CubeTextureNode( cubemapTexture._imp );
	        matInst.environment.value.uuid = info.environmentTextureID; // todo sign recode id

	        let alphaTexture = AssetManager.instance.getTextureByID(info.environmentAlphaTextureID);
	        var mask = new THREE.SwitchNode( new THREE.TextureNode( alphaTexture._imp ), info.environmentAlphaComponent );
	        matInst.environmentAlpha = mask;
	        matInst.environmentAlpha.node.value.uuid = info.environmentAlphaTextureID; // todo sign recode id
	        let normalTexture = AssetManager.instance.getTextureByID(info.normalTextureID);
	        matInst.normal = new THREE.NormalMapNode( new THREE.TextureNode( normalTexture._imp ) );
	        matInst.normal.value.value.uuid = info.normalTextureID; // todo sign recode id
	        matInst.normal.scale = new THREE.Math1Node( mask, info.normalScale );
	    }
	} );

	const PrimitiveType = {
	    Sphere:"Sphere",
	    Capsule:"Capsule",
	    Cylinder:"Cylinder",
	    Cube:"Cube",
	    Plane:"Plane",
	    Quad:"Quad"
	};

	function Mesh() {
	    Asset.call(this);
	    this.instClassType = Mesh.classType;
	    this._originalAssetValue = null;
	    Object.defineProperty(this, "_originalAsset",{
	        get:function () {
	            return this._originalAssetValue;
	        },

	        set:function(value){
	            //if(value instanceof SkinnedMeshImp === false)   return;
	            if(this._originalAssetValue == value) return;
	            this._originalAssetValue = value;
	            if(this._originalAssetValue.scene)
	            {
	                this._imp = this._originalAssetValue.scene._imp;
	            }
	        }
	    });
	    this._imp = null;
	    this._externalMaterials = new Array();
	}

	Mesh.classType = 'Mesh';

	Mesh.prototype = Object.assign( Object.create( Asset.prototype ), {
	    isMesh:true,
	    _assignData:function(data){
	        this.id = data.id;
	        this.filePath = data.filePath;
	        this._originalAsset = AssetManager.instance._getNativeMesh(this.filePath);
	    },

	    _dupGltf:function () {
	        let dup = null;
	        if(this._originalAssetValue)
	        {
	            dup = cloneGltf(this._originalAssetValue);
	        }
	        return dup;
	    },

	    _processExternalMaterials:function(materialsData){
	        this._externalMaterials = new Array();
	        for ( let i = 0; i < materialsData.length; i ++ ) {
	            let id = materialsData[i];
	            let material = AssetManager.instance.getMaterialByID(id);
	            this._externalMaterials.push(material);
	        }
	    },
	} );

	const cloneGltf = (gltf) => {
	    const clone = {
	        animations: gltf.animations,
	        // scene: gltf.scene.clone(true)
	        scene: GameObject.Instantiate(gltf.scene),
	        skeletons:null
	    };

	    const skinnedMeshes = {};

	    gltf.scene._imp.traverse(node => {
	        if (node.isSkinnedMesh) {
	            skinnedMeshes[node.uuid] = node;
	        }
	    });

	    const cloneBones = {};
	    const cloneSkinnedMeshes = {};
	    const cloneSkeletons = [];

	    clone.scene._imp.traverse(node => {
	        if (node.isBone) {
	            // cloneBones[node.name] = node;
	            cloneBones[node.userData.originaluuid] = node;
	            // userData.originaluuid
	        }

	        if (node.isSkinnedMesh) {
	            cloneSkinnedMeshes[node.uuid] = node;
	        }
	    });

	    for (let uuid in cloneSkinnedMeshes) {
	        const cloneSkinnedMesh = cloneSkinnedMeshes[uuid];
	        const skinnedMesh = skinnedMeshes[cloneSkinnedMesh._sourceMeshUuid];
	        if(skinnedMesh === null)
	        {
	            continue;
	        }
	        const skeleton = skinnedMesh.skeleton;

	        const orderedCloneBones = [];

	        for (let i = 0; i < skeleton.bones.length; ++i) {
	            const cloneBone = cloneBones[skeleton.bones[i].uuid];
	            orderedCloneBones.push(cloneBone);
	        }

	        let cloneSkeleton = new THREE.Skeleton(orderedCloneBones, skeleton.boneInverses);
	        cloneSkinnedMesh.bind(cloneSkeleton,cloneSkinnedMesh.matrixWorld);
	        cloneSkeletons.push(cloneSkeleton);
	    }
	    clone.skeletons = cloneSkeletons;
	    return clone;
	};

	let cubeGeometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
	let sphereGeometry = new THREE.SphereGeometry(0.5, 10, 10);
	let cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 10, 3);

	let cubeEdges = new THREE.EdgesGeometry(cubeGeometry, 1);
	let sphereEdges = new THREE.EdgesGeometry(sphereGeometry, 1);
	let cylinderEdges = new THREE.EdgesGeometry(cylinderGeometry, 1);

	let primitiveMaterial = new THREE.MeshStandardMaterial( {
		color: 0xFFFFFF ,
	} );
	let edgesMtl =  new THREE.LineBasicMaterial({color: 0xff0000});

	Mesh.__boxImp = new THREE.Mesh(cubeGeometry, primitiveMaterial);
	Mesh.__boxLineImp = new THREE.LineSegments(cubeEdges, edgesMtl);

	Mesh.__sphereImp = new THREE.Mesh(sphereGeometry, primitiveMaterial);
	Mesh.__sphereLineImp = new THREE.LineSegments(sphereEdges, edgesMtl);

	Mesh.__cylindeImp = new THREE.Mesh(cylinderGeometry, primitiveMaterial);
	Mesh.__cylinderLineImp = new THREE.LineSegments(cylinderEdges, edgesMtl);

	Mesh._CreateBoxMesh = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__boxImp;
	    return result;
	};

	Mesh._CreateBoxEdge = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__boxLineImp;
	    return result;
	};

	Mesh._CreateSphereMesh = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__sphereImp;
	    return result;
	};

	Mesh._CreateSphereEdge = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__sphereLineImp;
	    return result;
	};

	Mesh._CreateCylinderMesh = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__cylindeImp;
	    return result;
	};

	Mesh._CreateCylinderEdge = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__cylinderLineImp;
	    return result;
	};

	function AudioClip() {
	    Asset.call(this);
	    this.instClassType = AudioClip.classType;
	    this.name='AudioClip';
	    this._imp = null;
	    this.id = 0;
	    this.filePath = "";
	}

	AudioClip.classType = 'AudioClip';

	AudioClip.prototype = Object.assign( Object.create( Asset.prototype ), {
	    isAudioClip:true,
	    _assignData:function(data){
	        this.id = data.id;
	        this.filePath = data.filePath;
	        this._imp = AssetManager.instance._getNativeAudioClip(this.filePath);
	    }
	} );

	/**
	     * @constructor
	     * @name pc.ScriptHandler
	     * @classdesc ResourceHandler for loading JavaScript files dynamically
	     * Two types of JavaScript files can be loaded, PlayCanvas scripts which contain calls to {@link pc.createScript},
	     * or regular JavaScript files, such as third-party libraries.
	     * @param {pc.Application} app The running {pc.Application}
	     */
	    function ScriptHandler () {
	        //this._app = app;
	        this._scripts = { };
	        this._cache = { };
	    }
	    ScriptHandler._types = [];
	    ScriptHandler._push = function (Type) {
	        // if (pc.script.legacy && ScriptHandler._types.length > 0) {
	        //     console.assert("Script Ordering Error. Contact support@playcanvas.com");
	        // } else {
	            ScriptHandler._types.push(Type);
	        // }
	    };

	    Object.assign(ScriptHandler.prototype, {
	        load: function (url, callback) {
	            //pc.script.app = this._app;

	            this._loadScript(url, function (err, url, extra) {
	                if (!err) {
	                    // if (pc.script.legacy) {
	                    //     var Type = null;
	                    //     // pop the type from the loading stack
	                    //     if (ScriptHandler._types.length) {
	                    //         Type = ScriptHandler._types.pop();
	                    //     }
	                    //
	                    //     if (Type) {
	                    //         // store indexed by URL
	                    //         this._scripts[url] = Type;
	                    //     } else {
	                    //         Type = null;
	                    //     }
	                    //
	                    //     // return the resource
	                    //     callback(null, Type, extra);
	                    // } else {
	                        var obj = { };

	                        for (var i = 0; i < ScriptHandler._types.length; i++)
	                            obj[ScriptHandler._types[i].name] = ScriptHandler._types[i];

	                        ScriptHandler._types.length = 0;

	                        callback(null, obj, extra);

	                        // no cache for scripts
	                        //delete self._loader._cache[url + 'script'];//TOCHECK
	                    //}
	                } else {
	                    callback(err);
	                }
	            }.bind(this));
	        },

	        open: function (url, data) {
	            return data;
	        },

	        patch: function (asset, assets) { },

	        _loadScript: function (url, callback) {
	            var head = document.head;
	            var element = document.createElement('script');
	            this._cache[url] = element;

	            // use async=false to force scripts to execute in order
	            element.async = false;

	            element.addEventListener('error', this, function (e) {
	                callback(pc.string.format("Script: {0} failed to load", e.target.src));
	            }, false);

	            var done = false;
	            element.onload = element.onreadystatechange = function () {
	                if (!done && (!this.readyState || (this.readyState == "loaded" || this.readyState == "complete"))) {
	                    done = true; // prevent double event firing
	                    callback(null, url, element);
	                }
	            };
	            // set the src attribute after the onload callback is set, to avoid an instant loading failing to fire the callback
	            element.src = url;

	            head.appendChild(element);
	        }
	    });

	/*
	 * @author Daosheng Mu / https://github.com/DaoshengMu/
	 * @author mrdoob / http://mrdoob.com/
	 * @author takahirox / https://github.com/takahirox/
	 */

	function _TGALoader( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	}
	_TGALoader.prototype = {

		constructor: _TGALoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var texture = new THREE.Texture();

			var loader = new THREE.FileLoader( this.manager );
			loader.setResponseType( 'arraybuffer' );
			loader.setPath( this.path );

			loader.load( url, function ( buffer ) {

				texture.image = scope.parse( buffer );
				texture.needsUpdate = true;

				if ( onLoad !== undefined ) {

					onLoad( texture );

				}

			}, onProgress, onError );

			return texture;

		},

		parse: function ( buffer ) {

			// reference from vthibault, https://github.com/vthibault/roBrowser/blob/master/src/Loaders/Targa.js

			function tgaCheckHeader( header ) {

				switch ( header.image_type ) {

					// check indexed type

					case TGA_TYPE_INDEXED:
					case TGA_TYPE_RLE_INDEXED:
						if ( header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1 ) {

							console.error( 'THREE.TGALoader: Invalid type colormap data for indexed type.' );

						}
						break;

					// check colormap type

					case TGA_TYPE_RGB:
					case TGA_TYPE_GREY:
					case TGA_TYPE_RLE_RGB:
					case TGA_TYPE_RLE_GREY:
						if ( header.colormap_type ) {

							console.error( 'THREE.TGALoader: Invalid type colormap data for colormap type.' );

						}
						break;

					// What the need of a file without data ?

					case TGA_TYPE_NO_DATA:
						console.error( 'THREE.TGALoader: No data.' );

					// Invalid type ?

					default:
						console.error( 'THREE.TGALoader: Invalid type "%s".', header.image_type );

				}

				// check image width and height

				if ( header.width <= 0 || header.height <= 0 ) {

					console.error( 'THREE.TGALoader: Invalid image size.' );

				}

				// check image pixel size

				if ( header.pixel_size !== 8 && header.pixel_size !== 16 &&
					header.pixel_size !== 24 && header.pixel_size !== 32 ) {

					console.error( 'THREE.TGALoader: Invalid pixel size "%s".', header.pixel_size );

				}

			}

			// parse tga image buffer

			function tgaParse( use_rle, use_pal, header, offset, data ) {

				var pixel_data,
					pixel_size,
					pixel_total,
					palettes;

				pixel_size = header.pixel_size >> 3;
				pixel_total = header.width * header.height * pixel_size;

				 // read palettes

				 if ( use_pal ) {

					 palettes = data.subarray( offset, offset += header.colormap_length * ( header.colormap_size >> 3 ) );

				 }

				 // read RLE

				 if ( use_rle ) {

					 pixel_data = new Uint8Array( pixel_total );

					var c, count, i;
					var shift = 0;
					var pixels = new Uint8Array( pixel_size );

					while ( shift < pixel_total ) {

						c = data[ offset ++ ];
						count = ( c & 0x7f ) + 1;

						// RLE pixels

						if ( c & 0x80 ) {

							// bind pixel tmp array

							for ( i = 0; i < pixel_size; ++ i ) {

								pixels[ i ] = data[ offset ++ ];

							}

							// copy pixel array

							for ( i = 0; i < count; ++ i ) {

								pixel_data.set( pixels, shift + i * pixel_size );

							}

							shift += pixel_size * count;

						} else {

							// raw pixels

							count *= pixel_size;
							for ( i = 0; i < count; ++ i ) {

								pixel_data[ shift + i ] = data[ offset ++ ];

							}
							shift += count;

						}

					}

				 } else {

					// raw pixels

					pixel_data = data.subarray(
						 offset, offset += ( use_pal ? header.width * header.height : pixel_total )
					);

				 }

				 return {
					pixel_data: pixel_data,
					palettes: palettes
				 };

			}

			function tgaGetImageData8bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes ) {

				var colormap = palettes;
				var color, i = 0, x, y;
				var width = header.width;

				for ( y = y_start; y !== y_end; y += y_step ) {

					for ( x = x_start; x !== x_end; x += x_step, i ++ ) {

						color = image[ i ];
						imageData[ ( x + width * y ) * 4 + 3 ] = 255;
						imageData[ ( x + width * y ) * 4 + 2 ] = colormap[ ( color * 3 ) + 0 ];
						imageData[ ( x + width * y ) * 4 + 1 ] = colormap[ ( color * 3 ) + 1 ];
						imageData[ ( x + width * y ) * 4 + 0 ] = colormap[ ( color * 3 ) + 2 ];

					}

				}

				return imageData;

			}

			function tgaGetImageData16bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

				var color, i = 0, x, y;
				var width = header.width;

				for ( y = y_start; y !== y_end; y += y_step ) {

					for ( x = x_start; x !== x_end; x += x_step, i += 2 ) {

						color = image[ i + 0 ] + ( image[ i + 1 ] << 8 ); // Inversed ?
						imageData[ ( x + width * y ) * 4 + 0 ] = ( color & 0x7C00 ) >> 7;
						imageData[ ( x + width * y ) * 4 + 1 ] = ( color & 0x03E0 ) >> 2;
						imageData[ ( x + width * y ) * 4 + 2 ] = ( color & 0x001F ) >> 3;
						imageData[ ( x + width * y ) * 4 + 3 ] = ( color & 0x8000 ) ? 0 : 255;

					}

				}

				return imageData;

			}

			function tgaGetImageData24bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

				var i = 0, x, y;
				var width = header.width;

				for ( y = y_start; y !== y_end; y += y_step ) {

					for ( x = x_start; x !== x_end; x += x_step, i += 3 ) {

						imageData[ ( x + width * y ) * 4 + 3 ] = 255;
						imageData[ ( x + width * y ) * 4 + 2 ] = image[ i + 0 ];
						imageData[ ( x + width * y ) * 4 + 1 ] = image[ i + 1 ];
						imageData[ ( x + width * y ) * 4 + 0 ] = image[ i + 2 ];

					}

				}

				return imageData;

			}

			function tgaGetImageData32bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

				var i = 0, x, y;
				var width = header.width;

				for ( y = y_start; y !== y_end; y += y_step ) {

					for ( x = x_start; x !== x_end; x += x_step, i += 4 ) {

						imageData[ ( x + width * y ) * 4 + 2 ] = image[ i + 0 ];
						imageData[ ( x + width * y ) * 4 + 1 ] = image[ i + 1 ];
						imageData[ ( x + width * y ) * 4 + 0 ] = image[ i + 2 ];
						imageData[ ( x + width * y ) * 4 + 3 ] = image[ i + 3 ];

					}

				}

				return imageData;

			}

			function tgaGetImageDataGrey8bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

				var color, i = 0, x, y;
				var width = header.width;

				for ( y = y_start; y !== y_end; y += y_step ) {

					for ( x = x_start; x !== x_end; x += x_step, i ++ ) {

						color = image[ i ];
						imageData[ ( x + width * y ) * 4 + 0 ] = color;
						imageData[ ( x + width * y ) * 4 + 1 ] = color;
						imageData[ ( x + width * y ) * 4 + 2 ] = color;
						imageData[ ( x + width * y ) * 4 + 3 ] = 255;

					}

				}

				return imageData;

			}

			function tgaGetImageDataGrey16bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

				var i = 0, x, y;
				var width = header.width;

				for ( y = y_start; y !== y_end; y += y_step ) {

					for ( x = x_start; x !== x_end; x += x_step, i += 2 ) {

						imageData[ ( x + width * y ) * 4 + 0 ] = image[ i + 0 ];
						imageData[ ( x + width * y ) * 4 + 1 ] = image[ i + 0 ];
						imageData[ ( x + width * y ) * 4 + 2 ] = image[ i + 0 ];
						imageData[ ( x + width * y ) * 4 + 3 ] = image[ i + 1 ];

					}

				}

				return imageData;

			}

			function getTgaRGBA( data, width, height, image, palette ) {

				var x_start,
					y_start,
					x_step,
					y_step,
					x_end,
					y_end;

				switch ( ( header.flags & TGA_ORIGIN_MASK ) >> TGA_ORIGIN_SHIFT ) {

					default:
					case TGA_ORIGIN_UL:
						x_start = 0;
						x_step = 1;
						x_end = width;
						y_start = 0;
						y_step = 1;
						y_end = height;
						break;

					case TGA_ORIGIN_BL:
						x_start = 0;
						x_step = 1;
						x_end = width;
						y_start = height - 1;
						y_step = - 1;
						y_end = - 1;
						break;

					case TGA_ORIGIN_UR:
						x_start = width - 1;
						x_step = - 1;
						x_end = - 1;
						y_start = 0;
						y_step = 1;
						y_end = height;
						break;

					case TGA_ORIGIN_BR:
						x_start = width - 1;
						x_step = - 1;
						x_end = - 1;
						y_start = height - 1;
						y_step = - 1;
						y_end = - 1;
						break;

				}

				if ( use_grey ) {

					switch ( header.pixel_size ) {

						case 8:
							tgaGetImageDataGrey8bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
							break;

						case 16:
							tgaGetImageDataGrey16bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
							break;

						default:
							console.error( 'THREE.TGALoader: Format not supported.' );
							break;

					}

				} else {

					switch ( header.pixel_size ) {

						case 8:
							tgaGetImageData8bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette );
							break;

						case 16:
							tgaGetImageData16bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
							break;

						case 24:
							tgaGetImageData24bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
							break;

						case 32:
							tgaGetImageData32bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
							break;

						default:
							console.error( 'THREE.TGALoader: Format not supported.' );
							break;

					}

				}

				// Load image data according to specific method
				// var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
				// func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );
				return data;

			}

			// TGA constants

			var TGA_TYPE_NO_DATA = 0,
				TGA_TYPE_INDEXED = 1,
				TGA_TYPE_RGB = 2,
				TGA_TYPE_GREY = 3,
				TGA_TYPE_RLE_INDEXED = 9,
				TGA_TYPE_RLE_RGB = 10,
				TGA_TYPE_RLE_GREY = 11,

				TGA_ORIGIN_MASK = 0x30,
				TGA_ORIGIN_SHIFT = 0x04,
				TGA_ORIGIN_BL = 0x00,
				TGA_ORIGIN_BR = 0x01,
				TGA_ORIGIN_UL = 0x02,
				TGA_ORIGIN_UR = 0x03;

			if ( buffer.length < 19 ) console.error( 'THREE.TGALoader: Not enough data to contain header.' );

			var content = new Uint8Array( buffer ),
				offset = 0,
				header = {
					id_length: content[ offset ++ ],
					colormap_type: content[ offset ++ ],
					image_type: content[ offset ++ ],
					colormap_index: content[ offset ++ ] | content[ offset ++ ] << 8,
					colormap_length: content[ offset ++ ] | content[ offset ++ ] << 8,
					colormap_size: content[ offset ++ ],
					origin: [
						content[ offset ++ ] | content[ offset ++ ] << 8,
						content[ offset ++ ] | content[ offset ++ ] << 8
					],
					width: content[ offset ++ ] | content[ offset ++ ] << 8,
					height: content[ offset ++ ] | content[ offset ++ ] << 8,
					pixel_size: content[ offset ++ ],
					flags: content[ offset ++ ]
				};

				// check tga if it is valid format

			tgaCheckHeader( header );

			if ( header.id_length + offset > buffer.length ) {

				console.error( 'THREE.TGALoader: No data.' );

			}

			// skip the needn't data

			offset += header.id_length;

			// get targa information about RLE compression and palette

			var use_rle = false,
				use_pal = false,
				use_grey = false;

			switch ( header.image_type ) {

				case TGA_TYPE_RLE_INDEXED:
					use_rle = true;
					use_pal = true;
					break;

				case TGA_TYPE_INDEXED:
					use_pal = true;
					break;

				case TGA_TYPE_RLE_RGB:
					use_rle = true;
					break;

				case TGA_TYPE_RGB:
					break;

				case TGA_TYPE_RLE_GREY:
					use_rle = true;
					use_grey = true;
					break;

				case TGA_TYPE_GREY:
					use_grey = true;
					break;

			}

			//

			var useOffscreen = typeof OffscreenCanvas !== 'undefined';

			var canvas = useOffscreen ? new OffscreenCanvas( header.width, header.height ) : document.createElement( 'canvas' );
			canvas.width = header.width;
			canvas.height = header.height;

			var context = canvas.getContext( '2d' );
			var imageData = context.createImageData( header.width, header.height );

			var result = tgaParse( use_rle, use_pal, header, offset, content );
			var rgbaData = getTgaRGBA( imageData.data, header.width, header.height, result.pixel_data, result.palettes );

			context.putImageData( imageData, 0, 0 );

			return useOffscreen ? canvas.transferToImageBitmap() : canvas;

		},

		setPath: function ( value ) {

			this.path = value;
			return this;

		}

	};

	/**
	 * @author takahiro / https://github.com/takahirox
	 *
	 * Dependencies
	 *  - mmd-parser https://github.com/takahirox/mmd-parser
	 *  - THREE.TGALoader
	 *  - THREE.OutlineEffect
	 *
	 * MMDLoader creates Three.js Objects from MMD resources as
	 * PMD, PMX, VMD, and VPD files.
	 *
	 * PMD/PMX is a model data format, VMD is a motion data format
	 * VPD is a posing data format used in MMD(Miku Miku Dance).
	 *
	 * MMD official site
	 *  - http://www.geocities.jp/higuchuu4/index_e.htm
	 *
	 * PMD, VMD format (in Japanese)
	 *  - http://blog.goo.ne.jp/torisu_tetosuki/e/209ad341d3ece2b1b4df24abf619d6e4
	 *
	 * PMX format
	 *  - https://gist.github.com/felixjones/f8a06bd48f9da9a4539f
	 *
	 * TODO
	 *  - light motion in vmd support.
	 *  - SDEF support.
	 *  - uv/material/bone morphing support.
	 *  - more precise grant skinning support.
	 *  - shadow support.
	 */
		function _MMDLoader( manager ) {

			this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

			this.loader = new THREE.FileLoader( this.manager );

			this.parser = null; // lazy generation
			this.meshBuilder = new MeshBuilder( this.manager );
			this.animationBuilder = new AnimationBuilder();

		}

	_MMDLoader.prototype = {

			constructor: _MMDLoader,

			crossOrigin: 'anonymous',

			/**
			 * @param {string} crossOrigin
			 * @return {THREE.MMDLoader}
			 */
			setCrossOrigin: function ( crossOrigin ) {

				this.crossOrigin = crossOrigin;
				return this;

			},

			/**
			 * @param {string} animationPath
			 * @return {THREE.MMDLoader}
			 */
			setAnimationPath: function ( animationPath ) {

				this.animationPath = animationPath;
				return this;

			},

			/**
			 * @param {string} path
			 * @return {THREE.MMDLoader}
			 */
			setPath: function ( path ) {

				this.path = path;
				return this;

			},

			/**
			 * @param {string} resourcePath
			 * @return {THREE.MMDLoader}
			 */
			setResoucePath: function ( resourcePath ) {

				this.resourcePath = resourcePath;
				return this;

			},

			// Load MMD assets as Three.js Object

			/**
			 * Loads Model file (.pmd or .pmx) as a THREE.SkinnedMesh.
			 *
			 * @param {string} url - url to Model(.pmd or .pmx) file
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			load: function ( url, onLoad, onProgress, onError ) {

				var builder = this.meshBuilder.setCrossOrigin( this.crossOrigin );

				// resource path

				var resourcePath;

				if ( this.resourcePath !== undefined ) {

					resourcePath = this.resourcePath;

				} else if ( this.path !== undefined ) {

					resourcePath = this.path;

				} else {

					resourcePath = THREE.LoaderUtils.extractUrlBase( url );

				}

				var modelExtension = this._extractExtension( url ).toLowerCase();

				// Should I detect by seeing header?
				if ( modelExtension !== 'pmd' && modelExtension !== 'pmx' ) {

					if ( onError ) onError( new Error( 'THREE.MMDLoader: Unknown model file extension .' + modelExtension + '.' ) );

					return;

				}

				this[ modelExtension === 'pmd' ? 'loadPMD' : 'loadPMX' ]( url, function ( data ) {

					onLoad(	builder.build( data, resourcePath, onProgress, onError )	);

				}, onProgress, onError );

			},

			/**
			 * Loads Motion file(s) (.vmd) as a THREE.AnimationClip.
			 * If two or more files are specified, they'll be merged.
			 *
			 * @param {string|Array<string>} url - url(s) to animation(.vmd) file(s)
			 * @param {THREE.SkinnedMesh|THREE.Camera} object - tracks will be fitting to this object
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			loadAnimation: function ( url, object, onLoad, onProgress, onError ) {

				var builder = this.animationBuilder;

				this.loadVMD( url, function ( vmd ) {

					onLoad( object.isCamera
						? builder.buildCameraAnimation( vmd )
						: builder.build( vmd, object ) );

				}, onProgress, onError );

			},

			/**
			 * Loads mode file and motion file(s) as an object containing
			 * a THREE.SkinnedMesh and a THREE.AnimationClip.
			 * Tracks of THREE.AnimationClip are fitting to the model.
			 *
			 * @param {string} modelUrl - url to Model(.pmd or .pmx) file
			 * @param {string|Array{string}} vmdUrl - url(s) to animation(.vmd) file
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			loadWithAnimation: function ( modelUrl, vmdUrl, onLoad, onProgress, onError ) {

				var scope = this;

				this.load( modelUrl, function ( mesh ) {

					scope.loadAnimation( vmdUrl, mesh, function ( animation ) {

						onLoad( {
							mesh: mesh,
							animation: animation
						} );

					}, onProgress, onError );

				}, onProgress, onError );

			},

			// Load MMD assets as Object data parsed by MMDParser

			/**
			 * Loads .pmd file as an Object.
			 *
			 * @param {string} url - url to .pmd file
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			loadPMD: function ( url, onLoad, onProgress, onError ) {

				var parser = this._getParser();

				this.loader
					.setMimeType( undefined )
					.setPath( this.path )
					.setResponseType( 'arraybuffer' )
					.load( url, function ( buffer ) {

						onLoad( parser.parsePmd( buffer, true ) );

					}, onProgress, onError );

			},

			/**
			 * Loads .pmx file as an Object.
			 *
			 * @param {string} url - url to .pmx file
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			loadPMX: function ( url, onLoad, onProgress, onError ) {

				var parser = this._getParser();

				this.loader
					.setMimeType( undefined )
					.setPath( this.path )
					.setResponseType( 'arraybuffer' )
					.load( url, function ( buffer ) {

						onLoad( parser.parsePmx( buffer, true ) );

					}, onProgress, onError );

			},

			/**
			 * Loads .vmd file as an Object. If two or more files are specified
			 * they'll be merged.
			 *
			 * @param {string|Array<string>} url - url(s) to .vmd file(s)
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			loadVMD: function ( url, onLoad, onProgress, onError ) {

				var urls = Array.isArray( url ) ? url : [ url ];

				var vmds = [];
				var vmdNum = urls.length;

				var parser = this._getParser();

				this.loader
					.setMimeType( undefined )
					.setPath( this.animationPath )
					.setResponseType( 'arraybuffer' );

				for ( var i = 0, il = urls.length; i < il; i ++ ) {

					this.loader.load( urls[ i ], function ( buffer ) {

						vmds.push( parser.parseVmd( buffer, true ) );

						if ( vmds.length === vmdNum ) onLoad( parser.mergeVmds( vmds ) );

					}, onProgress, onError );

				}

			},

			/**
			 * Loads .vpd file as an Object.
			 *
			 * @param {string} url - url to .vpd file
			 * @param {boolean} isUnicode
			 * @param {function} onLoad
			 * @param {function} onProgress
			 * @param {function} onError
			 */
			loadVPD: function ( url, isUnicode, onLoad, onProgress, onError ) {

				var parser = this._getParser();

				this.loader
					.setMimeType( isUnicode ? undefined : 'text/plain; charset=shift_jis' )
					.setPath( this.animationPath )
					.setResponseType( 'text' )
					.load( url, function ( text ) {

						onLoad( parser.parseVpd( text, true ) );

					}, onProgress, onError );

			},

			// private methods

			_extractExtension: function ( url ) {

				var index = url.lastIndexOf( '.' );
				return index < 0 ? '' : url.slice( index + 1 );

			},

			_getParser: function () {

				if ( this.parser === null ) {

					if ( typeof MMDParser === 'undefined' ) {

						throw new Error( 'THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser' );

					}

					this.parser = new MMDParser.Parser();

				}

				return this.parser;

			}

		};

		// Utilities

		/*
		 * base64 encoded defalut toon textures toon00.bmp - toon10.bmp.
		 * We don't need to request external toon image files.
		 * This idea is from http://www20.atpages.jp/katwat/three.js_r58/examples/mytest37/mmd.three.js
		 */
		var DEFAULT_TOON_TEXTURES = [
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=',
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII='
		];

		// Builders. They build Three.js object from Object data parsed by MMDParser.

		/**
		 * @param {THREE.LoadingManager} manager
		 */
		function MeshBuilder( manager ) {

			this.geometryBuilder = new GeometryBuilder();
			this.materialBuilder = new MaterialBuilder( manager );

		}

		MeshBuilder.prototype = {

			constructor: MeshBuilder,

			crossOrigin: 'anonymous',

			/**
			 * @param {string} crossOrigin
			 * @return {MeshBuilder}
			 */
			setCrossOrigin: function ( crossOrigin ) {

				this.crossOrigin = crossOrigin;
				return this;

			},

			/**
			 * @param {Object} data - parsed PMD/PMX data
			 * @param {string} resourcePath
			 * @param {function} onProgress
			 * @param {function} onError
			 * @return {THREE.SkinnedMesh}
			 */
			build: function ( data, resourcePath, onProgress, onError ) {

				var geometry = this.geometryBuilder.build( data );
				var material = this.materialBuilder
					.setCrossOrigin( this.crossOrigin )
					.setResourcePath( resourcePath )
					.build( data, geometry, onProgress, onError );

				var mesh = new THREE.SkinnedMesh( geometry, material );

				var skeleton = new THREE.Skeleton( initBones( mesh ) );
				mesh.bind( skeleton );

				// console.log( mesh ); // for console debug

				return mesh;

			}

		};

		// TODO: Try to remove this function

		function initBones( mesh ) {

			var geometry = mesh.geometry;

			var bones = [], bone, gbone;
			var i, il;

			if ( geometry && geometry.bones !== undefined ) {

				// first, create array of 'Bone' objects from geometry data

				for ( i = 0, il = geometry.bones.length; i < il; i ++ ) {

					gbone = geometry.bones[ i ];

					// create new 'Bone' object

					bone = new THREE.Bone();
					bones.push( bone );

					// apply values

					bone.name = gbone.name;
					bone.position.fromArray( gbone.pos );
					bone.quaternion.fromArray( gbone.rotq );
					if ( gbone.scl !== undefined ) bone.scale.fromArray( gbone.scl );

				}

				// second, create bone hierarchy

				for ( i = 0, il = geometry.bones.length; i < il; i ++ ) {

					gbone = geometry.bones[ i ];

					if ( ( gbone.parent !== - 1 ) && ( gbone.parent !== null ) && ( bones[ gbone.parent ] !== undefined ) ) {

						// subsequent bones in the hierarchy

						bones[ gbone.parent ].add( bones[ i ] );

					} else {

						// topmost bone, immediate child of the skinned mesh

						mesh.add( bones[ i ] );

					}

				}

			}

			// now the bones are part of the scene graph and children of the skinned mesh.
			// let's update the corresponding matrices

			mesh.updateMatrixWorld( true );

			return bones;

		}

		//

		function GeometryBuilder() {

		}

		GeometryBuilder.prototype = {

			constructor: GeometryBuilder,

			/**
			 * @param {Object} data - parsed PMD/PMX data
			 * @return {THREE.BufferGeometry}
			 */
			build: function ( data ) {

				// for geometry
				var positions = [];
				var uvs = [];
				var normals = [];

				var indices = [];

				var groups = [];

				var bones = [];
				var skinIndices = [];
				var skinWeights = [];

				var morphTargets = [];
				var morphPositions = [];

				var iks = [];
				var grants = [];

				var rigidBodies = [];
				var constraints = [];

				// for work
				var offset = 0;
				var boneTypeTable = {};

				// positions, normals, uvs, skinIndices, skinWeights

				for ( var i = 0; i < data.metadata.vertexCount; i ++ ) {

					var v = data.vertices[ i ];

					for ( var j = 0, jl = v.position.length; j < jl; j ++ ) {

						positions.push( v.position[ j ] );

					}

					for ( var j = 0, jl = v.normal.length; j < jl; j ++ ) {

						normals.push( v.normal[ j ] );

					}

					for ( var j = 0, jl = v.uv.length; j < jl; j ++ ) {

						uvs.push( v.uv[ j ] );

					}

					for ( var j = 0; j < 4; j ++ ) {

						skinIndices.push( v.skinIndices.length - 1 >= j ? v.skinIndices[ j ] : 0.0 );

					}

					for ( var j = 0; j < 4; j ++ ) {

						skinWeights.push( v.skinWeights.length - 1 >= j ? v.skinWeights[ j ] : 0.0 );

					}

				}

				// indices

				for ( var i = 0; i < data.metadata.faceCount; i ++ ) {

					var face = data.faces[ i ];

					for ( var j = 0, jl = face.indices.length; j < jl; j ++ ) {

						indices.push( face.indices[ j ] );

					}

				}

				// groups

				for ( var i = 0; i < data.metadata.materialCount; i ++ ) {

					var material = data.materials[ i ];

					groups.push( {
						offset: offset * 3,
						count: material.faceCount * 3
					} );

					offset += material.faceCount;

				}

				// bones

				for ( var i = 0; i < data.metadata.rigidBodyCount; i ++ ) {

					var body = data.rigidBodies[ i ];
					var value = boneTypeTable[ body.boneIndex ];

					// keeps greater number if already value is set without any special reasons
					value = value === undefined ? body.type : Math.max( body.type, value );

					boneTypeTable[ body.boneIndex ] = value;

				}

				for ( var i = 0; i < data.metadata.boneCount; i ++ ) {

					var boneData = data.bones[ i ];

					var bone = {
						parent: boneData.parentIndex,
						name: boneData.name,
						pos: boneData.position.slice( 0, 3 ),
						rotq: [ 0, 0, 0, 1 ],
						scl: [ 1, 1, 1 ],
						rigidBodyType: boneTypeTable[ i ] !== undefined ? boneTypeTable[ i ] : - 1
					};

					if ( bone.parent !== - 1 ) {

						bone.pos[ 0 ] -= data.bones[ bone.parent ].position[ 0 ];
						bone.pos[ 1 ] -= data.bones[ bone.parent ].position[ 1 ];
						bone.pos[ 2 ] -= data.bones[ bone.parent ].position[ 2 ];

					}

					bones.push( bone );

				}

				// iks

				// TODO: remove duplicated codes between PMD and PMX
				if ( data.metadata.format === 'pmd' ) {

					for ( var i = 0; i < data.metadata.ikCount; i ++ ) {

						var ik = data.iks[ i ];

						var param = {
							target: ik.target,
							effector: ik.effector,
							iteration: ik.iteration,
							maxAngle: ik.maxAngle * 4,
							links: []
						};

						for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {

							var link = {};
							link.index = ik.links[ j ].index;
							link.enabled = true;

							if ( data.bones[ link.index ].name.indexOf( 'ひざ' ) >= 0 ) {

								link.limitation = new THREE.Vector3( 1.0, 0.0, 0.0 );

							}

							param.links.push( link );

						}

						iks.push( param );

					}

				} else {

					for ( var i = 0; i < data.metadata.boneCount; i ++ ) {

						var ik = data.bones[ i ].ik;

						if ( ik === undefined ) continue;

						var param = {
							target: i,
							effector: ik.effector,
							iteration: ik.iteration,
							maxAngle: ik.maxAngle,
							links: []
						};

						for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {

							var link = {};
							link.index = ik.links[ j ].index;
							link.enabled = true;

							if ( ik.links[ j ].angleLimitation === 1 ) {

								// Revert if rotationMin/Max doesn't work well
								// link.limitation = new THREE.Vector3( 1.0, 0.0, 0.0 );

								var rotationMin = ik.links[ j ].lowerLimitationAngle;
								var rotationMax = ik.links[ j ].upperLimitationAngle;

								// Convert Left to Right coordinate by myself because
								// MMDParser doesn't convert. It's a MMDParser's bug

								var tmp1 = - rotationMax[ 0 ];
								var tmp2 = - rotationMax[ 1 ];
								rotationMax[ 0 ] = - rotationMin[ 0 ];
								rotationMax[ 1 ] = - rotationMin[ 1 ];
								rotationMin[ 0 ] = tmp1;
								rotationMin[ 1 ] = tmp2;

								link.rotationMin = new THREE.Vector3().fromArray( rotationMin );
								link.rotationMax = new THREE.Vector3().fromArray( rotationMax );

							}

							param.links.push( link );

						}

						iks.push( param );

					}

				}

				// grants

				if ( data.metadata.format === 'pmx' ) {

					for ( var i = 0; i < data.metadata.boneCount; i ++ ) {

						var boneData = data.bones[ i ];
						var grant = boneData.grant;

						if ( grant === undefined ) continue;

						var param = {
							index: i,
							parentIndex: grant.parentIndex,
							ratio: grant.ratio,
							isLocal: grant.isLocal,
							affectRotation: grant.affectRotation,
							affectPosition: grant.affectPosition,
							transformationClass: boneData.transformationClass
						};

						grants.push( param );

					}

					grants.sort( function ( a, b ) {

						return a.transformationClass - b.transformationClass;

					} );

				}

				// morph

				function updateAttributes( attribute, morph, ratio ) {

					for ( var i = 0; i < morph.elementCount; i ++ ) {

						var element = morph.elements[ i ];

						var index;

						if ( data.metadata.format === 'pmd' ) {

							index = data.morphs[ 0 ].elements[ element.index ].index;

						} else {

							index = element.index;

						}

						attribute.array[ index * 3 + 0 ] += element.position[ 0 ] * ratio;
						attribute.array[ index * 3 + 1 ] += element.position[ 1 ] * ratio;
						attribute.array[ index * 3 + 2 ] += element.position[ 2 ] * ratio;

					}

				}

				for ( var i = 0; i < data.metadata.morphCount; i ++ ) {

					var morph = data.morphs[ i ];
					var params = { name: morph.name };

					var attribute = new THREE.Float32BufferAttribute( data.metadata.vertexCount * 3, 3 );
					attribute.name = morph.name;

					for ( var j = 0; j < data.metadata.vertexCount * 3; j ++ ) {

						attribute.array[ j ] = positions[ j ];

					}

					if ( data.metadata.format === 'pmd' ) {

						if ( i !== 0 ) {

							updateAttributes( attribute, morph, 1.0 );

						}

					} else {

						if ( morph.type === 0 ) { // group

							for ( var j = 0; j < morph.elementCount; j ++ ) {

								var morph2 = data.morphs[ morph.elements[ j ].index ];
								var ratio = morph.elements[ j ].ratio;

								if ( morph2.type === 1 ) {

									updateAttributes( attribute, morph2, ratio );

								}

							}

						} else if ( morph.type === 1 ) { // vertex

							updateAttributes( attribute, morph, 1.0 );

						} else if ( morph.type === 2 ) ; else if ( morph.type === 3 ) ; else if ( morph.type === 4 ) ; else if ( morph.type === 5 ) ; else if ( morph.type === 6 ) ; else if ( morph.type === 7 ) ; else if ( morph.type === 8 ) ;

					}

					morphTargets.push( params );
					morphPositions.push( attribute );

				}

				// rigid bodies from rigidBodies field.

				for ( var i = 0; i < data.metadata.rigidBodyCount; i ++ ) {

					var rigidBody = data.rigidBodies[ i ];
					var params = {};

					for ( var key in rigidBody ) {

						params[ key ] = rigidBody[ key ];

					}

					/*
					 * RigidBody position parameter in PMX seems global position
					 * while the one in PMD seems offset from corresponding bone.
					 * So unify being offset.
					 */
					if ( data.metadata.format === 'pmx' ) {

						if ( params.boneIndex !== - 1 ) {

							var bone = data.bones[ params.boneIndex ];
							params.position[ 0 ] -= bone.position[ 0 ];
							params.position[ 1 ] -= bone.position[ 1 ];
							params.position[ 2 ] -= bone.position[ 2 ];

						}

					}

					rigidBodies.push( params );

				}

				// constraints from constraints field.

				for ( var i = 0; i < data.metadata.constraintCount; i ++ ) {

					var constraint = data.constraints[ i ];
					var params = {};

					for ( var key in constraint ) {

						params[ key ] = constraint[ key ];

					}

					var bodyA = rigidBodies[ params.rigidBodyIndex1 ];
					var bodyB = rigidBodies[ params.rigidBodyIndex2 ];

					// Refer to http://www20.atpages.jp/katwat/wp/?p=4135
					if ( bodyA.type !== 0 && bodyB.type === 2 ) {

						if ( bodyA.boneIndex !== - 1 && bodyB.boneIndex !== - 1 &&
						     data.bones[ bodyB.boneIndex ].parentIndex === bodyA.boneIndex ) {

							bodyB.type = 1;

						}

					}

					constraints.push( params );

				}

				// build BufferGeometry.

				var geometry = new THREE.BufferGeometry();

				geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
				geometry.addAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
				geometry.addAttribute( 'uv', new THREE.Float32BufferAttribute( uvs, 2 ) );
				geometry.addAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( skinIndices, 4 ) );
				geometry.addAttribute( 'skinWeight', new THREE.Float32BufferAttribute( skinWeights, 4 ) );
				geometry.setIndex( indices );

				for ( var i = 0, il = groups.length; i < il; i ++ ) {

					geometry.addGroup( groups[ i ].offset, groups[ i ].count, i );

				}

				geometry.bones = bones;

				geometry.morphTargets = morphTargets;
				geometry.morphAttributes.position = morphPositions;

				geometry.userData.MMD = {
					bones: bones,
					iks: iks,
					grants: grants,
					rigidBodies: rigidBodies,
					constraints: constraints,
					format: data.metadata.format
				};

				geometry.computeBoundingSphere();

				return geometry;

			}

		};

		//

		/**
		 * @param {THREE.LoadingManager} manager
		 */
		function MaterialBuilder( manager ) {

			this.manager = manager;

			this.textureLoader = new THREE.TextureLoader( this.manager );
			this.tgaLoader = null; // lazy generation

		}

		MaterialBuilder.prototype = {

			constructor: MaterialBuilder,

			crossOrigin: 'anonymous',

			resourcePath: undefined,

			/**
			 * @param {string} crossOrigin
			 * @return {MaterialBuilder}
			 */
			setCrossOrigin: function ( crossOrigin ) {

				this.crossOrigin = crossOrigin;
				return this;

			},

			/**
			 * @param {string} resourcePath
			 * @return {MaterialBuilder}
			 */
			setResourcePath: function ( resourcePath ) {

				this.resourcePath = resourcePath;
				return this;

			},

			/**
			 * @param {Object} data - parsed PMD/PMX data
			 * @param {THREE.BufferGeometry} geometry - some properties are dependend on geometry
			 * @param {function} onProgress
			 * @param {function} onError
			 * @return {Array<THREE.MeshToonMaterial>}
			 */
			build: function ( data, geometry, onProgress, onError ) {

				var materials = [];

				var textures = {};

				this.textureLoader.setCrossOrigin( this.crossOrigin );

				// materials

				for ( var i = 0; i < data.metadata.materialCount; i ++ ) {

					var material = data.materials[ i ];

					var params = { userData: {} };

					if ( material.name !== undefined ) params.name = material.name;

					/*
					 * Color
					 *
					 * MMD         MeshToonMaterial
					 * diffuse  -  color
					 * specular -  specular
					 * ambient  -  emissive * a
					 *               (a = 1.0 without map texture or 0.2 with map texture)
					 *
					 * MeshToonMaterial doesn't have ambient. Set it to emissive instead.
					 * It'll be too bright if material has map texture so using coef 0.2.
					 */
					params.color = new THREE.Color().fromArray( material.diffuse );
					params.opacity = material.diffuse[ 3 ];
					params.specular = new THREE.Color().fromArray( material.specular );
					params.emissive = new THREE.Color().fromArray( material.ambient );
					params.shininess = Math.max( material.shininess, 1e-4 ); // to prevent pow( 0.0, 0.0 )
					params.transparent = params.opacity !== 1.0;

					//

					params.skinning = geometry.bones.length > 0 ? true : false;
					params.morphTargets = geometry.morphTargets.length > 0 ? true : false;
					params.lights = true;
					params.fog = true;

					// blend

					params.blending = THREE.CustomBlending;
					params.blendSrc = THREE.SrcAlphaFactor;
					params.blendDst = THREE.OneMinusSrcAlphaFactor;
					params.blendSrcAlpha = THREE.SrcAlphaFactor;
					params.blendDstAlpha = THREE.DstAlphaFactor;

					// side

					if ( data.metadata.format === 'pmx' && ( material.flag & 0x1 ) === 1 ) {

						params.side = THREE.DoubleSide;

					} else {

						params.side = params.opacity === 1.0 ? THREE.FrontSide : THREE.DoubleSide;

					}

					if ( data.metadata.format === 'pmd' ) {

						// map, envMap

						if ( material.fileName ) {

							var fileName = material.fileName;
							var fileNames = fileName.split( '*' );

							// fileNames[ 0 ]: mapFileName
							// fileNames[ 1 ]: envMapFileName( optional )

							params.map = this._loadTexture( fileNames[ 0 ], textures );

							if ( fileNames.length > 1 ) {

								var extension = fileNames[ 1 ].slice( - 4 ).toLowerCase();

								params.envMap = this._loadTexture(
									fileNames[ 1 ],
									textures,
									{ sphericalReflectionMapping: true }
								);

								params.combine = extension === '.sph'
									? THREE.MultiplyOperation
									: THREE.AddOperation;

							}

						}

						// gradientMap

						var toonFileName = ( material.toonIndex === - 1 )
							? 'toon00.bmp'
							: data.toonTextures[ material.toonIndex ].fileName;

						params.gradientMap = this._loadTexture(
							toonFileName,
							textures,
							{
								isToonTexture: true,
								isDefaultToonTexture: this._isDefaultToonTexture( toonFileName )
							}
						);

						// parameters for OutlineEffect

						params.userData.outlineParameters = {
							thickness: material.edgeFlag === 1 ? 0.003 : 0.0,
							color: [ 0, 0, 0 ],
							alpha: 1.0,
							visible: material.edgeFlag === 1
						};

					} else {

						// map

						if ( material.textureIndex !== - 1 ) {

							params.map = this._loadTexture( data.textures[ material.textureIndex ], textures );

						}

						// envMap TODO: support m.envFlag === 3

						if ( material.envTextureIndex !== - 1 && ( material.envFlag === 1 || material.envFlag == 2 ) ) {

							params.envMap = this._loadTexture(
								data.textures[ material.envTextureIndex ],
								textures, { sphericalReflectionMapping: true }
							);

							params.combine = material.envFlag === 1
								? THREE.MultiplyOperation
								: THREE.AddOperation;

						}

						// gradientMap

						var toonFileName, isDefaultToon;

						if ( material.toonIndex === - 1 || material.toonFlag !== 0 ) {

							toonFileName = 'toon' + ( '0' + ( material.toonIndex + 1 ) ).slice( - 2 ) + '.bmp';
							isDefaultToon = true;

						} else {

							toonFileName = data.textures[ material.toonIndex ];
							isDefaultToon = false;

						}

						params.gradientMap = this._loadTexture(
							toonFileName,
							textures,
							{
								isToonTexture: true,
								isDefaultToonTexture: isDefaultToon
							}
						);

						// parameters for OutlineEffect
						params.userData.outlineParameters = {
							thickness: material.edgeSize / 300, // TODO: better calculation?
							color: material.edgeColor.slice( 0, 3 ),
							alpha: material.edgeColor[ 3 ],
							visible: ( material.flag & 0x10 ) !== 0 && material.edgeSize > 0.0
						};

					}

					if ( params.map !== undefined ) {

						if ( ! params.transparent ) {

							this._checkImageTransparency( params.map, geometry, i );

						}

						params.emissive.multiplyScalar( 0.2 );

					}

					materials.push( new THREE.MeshToonMaterial( params ) );

				}

				if ( data.metadata.format === 'pmx' ) {

					// set transparent true if alpha morph is defined.

					function checkAlphaMorph( elements, materials ) {

						for ( var i = 0, il = elements.length; i < il; i ++ ) {

							var element = elements[ i ];

							if ( element.index === - 1 ) continue;

							var material = materials[ element.index ];

							if ( material.opacity !== element.diffuse[ 3 ] ) {

								material.transparent = true;

							}

						}

					}

					for ( var i = 0, il = data.morphs.length; i < il; i ++ ) {

						var morph = data.morphs[ i ];
						var elements = morph.elements;

						if ( morph.type === 0 ) {

							for ( var j = 0, jl = elements.length; j < jl; j ++ ) {

								var morph2 = data.morphs[ elements[ j ].index ];

								if ( morph2.type !== 8 ) continue;

								checkAlphaMorph( morph2.elements, materials );

							}

						} else if ( morph.type === 8 ) {

							checkAlphaMorph( elements, materials );

						}

					}

				}

				return materials;

			},

			// private methods

			_getTGALoader: function () {

				if ( this.tgaLoader === null ) {

					if ( _TGALoader === undefined ) {

						throw new Error( 'THREE.MMDLoader: Import _TGALoader' );

					}

					this.tgaLoader = new _TGALoader( this.manager );

				}

				return this.tgaLoader;

			},

			_isDefaultToonTexture: function ( name ) {

				if ( name.length !== 10 ) return false;

				return /toon(10|0[0-9])\.bmp/.test( name );

			},

			_loadTexture: function ( filePath, textures, params, onProgress, onError ) {

				params = params || {};

				var scope = this;

				var fullPath;

				if ( params.isDefaultToonTexture === true ) {

					var index;

					try {

						index = parseInt( filePath.match( 'toon([0-9]{2})\.bmp$' )[ 1 ] );

					} catch ( e ) {

						console.warn( 'THREE.MMDLoader: ' + filePath + ' seems like a '
							+ 'not right default texture path. Using toon00.bmp instead.' );

						index = 0;

					}

					fullPath = DEFAULT_TOON_TEXTURES[ index ];

				} else {

					fullPath = this.resourcePath + filePath;

				}

				if ( textures[ fullPath ] !== undefined ) return textures[ fullPath ];

				var loader = THREE.Loader.Handlers.get( fullPath );

				if ( loader === null ) {

					loader = ( filePath.slice( - 4 ).toLowerCase() === '.tga' )
						? this._getTGALoader()
						: this.textureLoader;

				}

				var texture = loader.load( fullPath, function ( t ) {

					// MMD toon texture is Axis-Y oriented
					// but Three.js gradient map is Axis-X oriented.
					// So here replaces the toon texture image with the rotated one.
					if ( params.isToonTexture === true ) {

						t.image = scope._getRotatedImage( t.image );

						t.magFilter = THREE.NearestFilter;
						t.minFilter = THREE.NearestFilter;

					}

					t.flipY = false;
					t.wrapS = THREE.RepeatWrapping;
					t.wrapT = THREE.RepeatWrapping;

					for ( var i = 0; i < texture.readyCallbacks.length; i ++ ) {

						texture.readyCallbacks[ i ]( texture );

					}

					delete texture.readyCallbacks;

	                }, onProgress,
	                function (err) {
	            		//图片缺失时用1x1的Base64白色占位图替代
	                    let img = document.createElement('img');
	                    // img.src = "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
	                    img.src = "data:image/png;base64,Qk06AAAAAAAAADYAAAAoAAAAAQAAAAEAAAABABgAAAAAAAQAAAATCwAAEwsAAAAAAAAAAAAA////AA==";
	                    // img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABNJREFUeNpi+P//fwMAAAD//wMACXwDfsMCKk4AAAAASUVORK5CYII=";

	                    texture.image = img;
	                    texture.needsUpdate = true;
	                }
	            );

				if ( params.sphericalReflectionMapping === true ) {

					texture.mapping = THREE.SphericalReflectionMapping;

				}

				texture.readyCallbacks = [];

				textures[ fullPath ] = texture;

				return texture;

			},

			_getRotatedImage: function ( image ) {

				var canvas = document.createElement( 'canvas' );
				var context = canvas.getContext( '2d' );

				var width = image.width;
				var height = image.height;

				canvas.width = width;
				canvas.height = height;

				context.clearRect( 0, 0, width, height );
				context.translate( width / 2.0, height / 2.0 );
				context.rotate( 0.5 * Math.PI ); // 90.0 * Math.PI / 180.0
				context.translate( - width / 2.0, - height / 2.0 );
				context.drawImage( image, 0, 0 );

				return context.getImageData( 0, 0, width, height );

			},

			// Check if the partial image area used by the texture is transparent.
			_checkImageTransparency: function ( map, geometry, groupIndex ) {

				map.readyCallbacks.push( function ( texture ) {

					// Is there any efficient ways?
					function createImageData( image ) {

						var canvas = document.createElement( 'canvas' );
						canvas.width = image.width;
						canvas.height = image.height;

						var context = canvas.getContext( '2d' );
						context.drawImage( image, 0, 0 );

						return context.getImageData( 0, 0, canvas.width, canvas.height );

					}

					function detectImageTransparency( image, uvs, indices ) {

						var width = image.width;
						var height = image.height;
						var data = image.data;
						var threshold = 253;

						if ( data.length / ( width * height ) !== 4 ) return false;

						for ( var i = 0; i < indices.length; i += 3 ) {

							var centerUV = { x: 0.0, y: 0.0 };

							for ( var j = 0; j < 3; j ++ ) {

								var index = indices[ i * 3 + j ];
								var uv = { x: uvs[ index * 2 + 0 ], y: uvs[ index * 2 + 1 ] };

								if ( getAlphaByUv( image, uv ) < threshold ) return true;

								centerUV.x += uv.x;
								centerUV.y += uv.y;

							}

							centerUV.x /= 3;
							centerUV.y /= 3;

							if ( getAlphaByUv( image, centerUV ) < threshold ) return true;

						}

						return false;

					}

					/*
					 * This method expects
					 *   texture.flipY = false
					 *   texture.wrapS = THREE.RepeatWrapping
					 *   texture.wrapT = THREE.RepeatWrapping
					 * TODO: more precise
					 */
					function getAlphaByUv( image, uv ) {

						var width = image.width;
						var height = image.height;

						var x = Math.round( uv.x * width ) % width;
						var y = Math.round( uv.y * height ) % height;

						if ( x < 0 ) x += width;
						if ( y < 0 ) y += height;

						var index = y * width + x;

						return image.data[ index * 4 + 3 ];

					}

					var imageData = texture.image.data !== undefined
						? texture.image
						: createImageData( texture.image );

					var group = geometry.groups[ groupIndex ];

					if ( detectImageTransparency(
						imageData,
						geometry.attributes.uv.array,
						geometry.index.array.slice( group.start, group.start + group.count ) ) ) {

						map.transparent = true;

					}

				} );

			}

		};

		//

		function AnimationBuilder() {

		}

		AnimationBuilder.prototype = {

			constructor: AnimationBuilder,

			/**
			 * @param {Object} vmd - parsed VMD data
			 * @param {THREE.SkinnedMesh} mesh - tracks will be fitting to mesh
			 * @return {THREE.AnimationClip}
			 */
			build: function ( vmd, mesh ) {

				// combine skeletal and morph animations

				var tracks = this.buildSkeletalAnimation( vmd, mesh ).tracks;
				var tracks2 = this.buildMorphAnimation( vmd, mesh ).tracks;

				for ( var i = 0, il = tracks2.length; i < il; i ++ ) {

					tracks.push( tracks2[ i ] );

				}

				return new THREE.AnimationClip( '', - 1, tracks );

			},

			/**
			 * @param {Object} vmd - parsed VMD data
			 * @param {THREE.SkinnedMesh} mesh - tracks will be fitting to mesh
			 * @return {THREE.AnimationClip}
			 */
			buildSkeletalAnimation: function ( vmd, mesh ) {

				function pushInterpolation( array, interpolation, index ) {

					array.push( interpolation[ index + 0 ] / 127 ); // x1
					array.push( interpolation[ index + 8 ] / 127 ); // x2
					array.push( interpolation[ index + 4 ] / 127 ); // y1
					array.push( interpolation[ index + 12 ] / 127 ); // y2

				}

				var tracks = [];

				var motions = {};
				var bones = mesh.skeleton.bones;
				var boneNameDictionary = {};

				for ( var i = 0, il = bones.length; i < il; i ++ ) {

					boneNameDictionary[ bones[ i ].name ] = true;

				}

				for ( var i = 0; i < vmd.metadata.motionCount; i ++ ) {

					var motion = vmd.motions[ i ];
					var boneName = motion.boneName;

					if ( boneNameDictionary[ boneName ] === undefined ) continue;

					motions[ boneName ] = motions[ boneName ] || [];
					motions[ boneName ].push( motion );

				}

				for ( var key in motions ) {

					var array = motions[ key ];

					array.sort( function ( a, b ) {

						return a.frameNum - b.frameNum;

					} );

					var times = [];
					var positions = [];
					var rotations = [];
					var pInterpolations = [];
					var rInterpolations = [];

					var basePosition = mesh.skeleton.getBoneByName( key ).position.toArray();

					for ( var i = 0, il = array.length; i < il; i ++ ) {

						var time = array[ i ].frameNum / 30;
						var position = array[ i ].position;
						var rotation = array[ i ].rotation;
						var interpolation = array[ i ].interpolation;

						times.push( time );

						for ( var j = 0; j < 3; j ++ ) positions.push( basePosition[ j ] + position[ j ] );
						for ( var j = 0; j < 4; j ++ ) rotations.push( rotation[ j ] );
						for ( var j = 0; j < 3; j ++ ) pushInterpolation( pInterpolations, interpolation, j );

						pushInterpolation( rInterpolations, interpolation, 3 );

					}

					var targetName = '.bones[' + key + ']';

					tracks.push( this._createTrack( targetName + '.position', THREE.VectorKeyframeTrack, times, positions, pInterpolations ) );
					tracks.push( this._createTrack( targetName + '.quaternion', THREE.QuaternionKeyframeTrack, times, rotations, rInterpolations ) );

				}

				return new THREE.AnimationClip( '', - 1, tracks );

			},

			/**
			 * @param {Object} vmd - parsed VMD data
			 * @param {THREE.SkinnedMesh} mesh - tracks will be fitting to mesh
			 * @return {THREE.AnimationClip}
			 */
			buildMorphAnimation: function ( vmd, mesh ) {

				var tracks = [];

				var morphs = {};
				var morphTargetDictionary = mesh.morphTargetDictionary;

				for ( var i = 0; i < vmd.metadata.morphCount; i ++ ) {

					var morph = vmd.morphs[ i ];
					var morphName = morph.morphName;

					if ( morphTargetDictionary[ morphName ] === undefined ) continue;

					morphs[ morphName ] = morphs[ morphName ] || [];
					morphs[ morphName ].push( morph );

				}

				for ( var key in morphs ) {

					var array = morphs[ key ];

					array.sort( function ( a, b ) {

						return a.frameNum - b.frameNum;

					} );

					var times = [];
					var values = [];

					for ( var i = 0, il = array.length; i < il; i ++ ) {

						times.push( array[ i ].frameNum / 30 );
						values.push( array[ i ].weight );

					}

					tracks.push( new THREE.NumberKeyframeTrack( '.morphTargetInfluences[' + morphTargetDictionary[ key ] + ']', times, values ) );

				}

				return new THREE.AnimationClip( '', - 1, tracks );

			},

			/**
			 * @param {Object} vmd - parsed VMD data
			 * @return {THREE.AnimationClip}
			 */
			buildCameraAnimation: function ( vmd ) {

				function pushVector3( array, vec ) {

					array.push( vec.x );
					array.push( vec.y );
					array.push( vec.z );

				}

				function pushQuaternion( array, q ) {

					array.push( q.x );
					array.push( q.y );
					array.push( q.z );
					array.push( q.w );

				}

				function pushInterpolation( array, interpolation, index ) {

					array.push( interpolation[ index * 4 + 0 ] / 127 ); // x1
					array.push( interpolation[ index * 4 + 1 ] / 127 ); // x2
					array.push( interpolation[ index * 4 + 2 ] / 127 ); // y1
					array.push( interpolation[ index * 4 + 3 ] / 127 ); // y2

				}

				var tracks = [];

				var cameras = vmd.cameras === undefined ? [] : vmd.cameras.slice();

				cameras.sort( function ( a, b ) {

					return a.frameNum - b.frameNum;

				} );

				var times = [];
				var centers = [];
				var quaternions = [];
				var positions = [];
				var fovs = [];

				var cInterpolations = [];
				var qInterpolations = [];
				var pInterpolations = [];
				var fInterpolations = [];

				var quaternion = new THREE.Quaternion();
				var euler = new THREE.Euler();
				var position = new THREE.Vector3();
				var center = new THREE.Vector3();

				for ( var i = 0, il = cameras.length; i < il; i ++ ) {

					var motion = cameras[ i ];

					var time = motion.frameNum / 30;
					var pos = motion.position;
					var rot = motion.rotation;
					var distance = motion.distance;
					var fov = motion.fov;
					var interpolation = motion.interpolation;

					times.push( time );

					position.set( 0, 0, - distance );
					center.set( pos[ 0 ], pos[ 1 ], pos[ 2 ] );

					euler.set( - rot[ 0 ], - rot[ 1 ], - rot[ 2 ] );
					quaternion.setFromEuler( euler );

					position.add( center );
					position.applyQuaternion( quaternion );

					pushVector3( centers, center );
					pushQuaternion( quaternions, quaternion );
					pushVector3( positions, position );

					fovs.push( fov );

					for ( var j = 0; j < 3; j ++ ) {

						pushInterpolation( cInterpolations, interpolation, j );

					}

					pushInterpolation( qInterpolations, interpolation, 3 );

					// use the same parameter for x, y, z axis.
					for ( var j = 0; j < 3; j ++ ) {

						pushInterpolation( pInterpolations, interpolation, 4 );

					}

					pushInterpolation( fInterpolations, interpolation, 5 );

				}

				var tracks = [];

				// I expect an object whose name 'target' exists under THREE.Camera
				tracks.push( this._createTrack( 'target.position', THREE.VectorKeyframeTrack, times, centers, cInterpolations ) );

				tracks.push( this._createTrack( '.quaternion', THREE.QuaternionKeyframeTrack, times, quaternions, qInterpolations ) );
				tracks.push( this._createTrack( '.position', THREE.VectorKeyframeTrack, times, positions, pInterpolations ) );
				tracks.push( this._createTrack( '.fov', THREE.NumberKeyframeTrack, times, fovs, fInterpolations ) );

				return new THREE.AnimationClip( '', - 1, tracks );

			},

			// private method

			_createTrack: function ( node, typedKeyframeTrack, times, values, interpolations ) {

				/*
				 * optimizes here not to let KeyframeTrackPrototype optimize
				 * because KeyframeTrackPrototype optimizes times and values but
				 * doesn't optimize interpolations.
				 */
				if ( times.length > 2 ) {

					times = times.slice();
					values = values.slice();
					interpolations = interpolations.slice();

					var stride = values.length / times.length;
					var interpolateStride = interpolations.length / times.length;

					var index = 1;

					for ( var aheadIndex = 2, endIndex = times.length; aheadIndex < endIndex; aheadIndex ++ ) {

						for ( var i = 0; i < stride; i ++ ) {

							if ( values[ index * stride + i ] !== values[ ( index - 1 ) * stride + i ] ||
								values[ index * stride + i ] !== values[ aheadIndex * stride + i ] ) {

								index ++;
								break;

							}

						}

						if ( aheadIndex > index ) {

							times[ index ] = times[ aheadIndex ];

							for ( var i = 0; i < stride; i ++ ) {

								values[ index * stride + i ] = values[ aheadIndex * stride + i ];

							}

							for ( var i = 0; i < interpolateStride; i ++ ) {

								interpolations[ index * interpolateStride + i ] = interpolations[ aheadIndex * interpolateStride + i ];

							}

						}

					}

					times.length = index + 1;
					values.length = ( index + 1 ) * stride;
					interpolations.length = ( index + 1 ) * interpolateStride;

				}

				var track = new typedKeyframeTrack( node, times, values );

				track.createInterpolant = function InterpolantFactoryMethodCubicBezier( result ) {

					return new CubicBezierInterpolation( this.times, this.values, this.getValueSize(), result, new Float32Array( interpolations ) );

				};

				return track;

			}

		};

		// interpolation

		function CubicBezierInterpolation( parameterPositions, sampleValues, sampleSize, resultBuffer, params ) {

			THREE.Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

			this.interpolationParams = params;

		}

		CubicBezierInterpolation.prototype = Object.assign( Object.create( THREE.Interpolant.prototype ), {

			constructor: CubicBezierInterpolation,

			interpolate_: function ( i1, t0, t, t1 ) {

				var result = this.resultBuffer;
				var values = this.sampleValues;
				var stride = this.valueSize;
				var params = this.interpolationParams;

				var offset1 = i1 * stride;
				var offset0 = offset1 - stride;

				// No interpolation if next key frame is in one frame in 30fps.
				// This is from MMD animation spec.
				// '1.5' is for precision loss. times are Float32 in Three.js Animation system.
				var weight1 = ( ( t1 - t0 ) < 1 / 30 * 1.5 ) ? 0.0 : ( t - t0 ) / ( t1 - t0 );

				if ( stride === 4 ) { // Quaternion

					var x1 = params[ i1 * 4 + 0 ];
					var x2 = params[ i1 * 4 + 1 ];
					var y1 = params[ i1 * 4 + 2 ];
					var y2 = params[ i1 * 4 + 3 ];

					var ratio = this._calculate( x1, x2, y1, y2, weight1 );

					THREE.Quaternion.slerpFlat( result, 0, values, offset0, values, offset1, ratio );

				} else if ( stride === 3 ) { // Vector3

					for ( var i = 0; i !== stride; ++ i ) {

						var x1 = params[ i1 * 12 + i * 4 + 0 ];
						var x2 = params[ i1 * 12 + i * 4 + 1 ];
						var y1 = params[ i1 * 12 + i * 4 + 2 ];
						var y2 = params[ i1 * 12 + i * 4 + 3 ];

						var ratio = this._calculate( x1, x2, y1, y2, weight1 );

						result[ i ] = values[ offset0 + i ] * ( 1 - ratio ) + values[ offset1 + i ] * ratio;

					}

				} else { // Number

					var x1 = params[ i1 * 4 + 0 ];
					var x2 = params[ i1 * 4 + 1 ];
					var y1 = params[ i1 * 4 + 2 ];
					var y2 = params[ i1 * 4 + 3 ];

					var ratio = this._calculate( x1, x2, y1, y2, weight1 );

					result[ 0 ] = values[ offset0 ] * ( 1 - ratio ) + values[ offset1 ] * ratio;

				}

				return result;

			},

			_calculate: function ( x1, x2, y1, y2, x ) {

				/*
				 * Cubic Bezier curves
				 *   https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves
				 *
				 * B(t) = ( 1 - t ) ^ 3 * P0
				 *      + 3 * ( 1 - t ) ^ 2 * t * P1
				 *      + 3 * ( 1 - t ) * t^2 * P2
				 *      + t ^ 3 * P3
				 *      ( 0 <= t <= 1 )
				 *
				 * MMD uses Cubic Bezier curves for bone and camera animation interpolation.
				 *   http://d.hatena.ne.jp/edvakf/20111016/1318716097
				 *
				 *    x = ( 1 - t ) ^ 3 * x0
				 *      + 3 * ( 1 - t ) ^ 2 * t * x1
				 *      + 3 * ( 1 - t ) * t^2 * x2
				 *      + t ^ 3 * x3
				 *    y = ( 1 - t ) ^ 3 * y0
				 *      + 3 * ( 1 - t ) ^ 2 * t * y1
				 *      + 3 * ( 1 - t ) * t^2 * y2
				 *      + t ^ 3 * y3
				 *      ( x0 = 0, y0 = 0 )
				 *      ( x3 = 1, y3 = 1 )
				 *      ( 0 <= t, x1, x2, y1, y2 <= 1 )
				 *
				 * Here solves this equation with Bisection method,
				 *   https://en.wikipedia.org/wiki/Bisection_method
				 * gets t, and then calculate y.
				 *
				 * f(t) = 3 * ( 1 - t ) ^ 2 * t * x1
				 *      + 3 * ( 1 - t ) * t^2 * x2
				 *      + t ^ 3 - x = 0
				 *
				 * (Another option: Newton's method
				 *    https://en.wikipedia.org/wiki/Newton%27s_method)
				 */

				var c = 0.5;
				var t = c;
				var s = 1.0 - t;
				var loop = 15;
				var eps = 1e-5;
				var math = Math;

				var sst3, stt3, ttt;

				for ( var i = 0; i < loop; i ++ ) {

					sst3 = 3.0 * s * s * t;
					stt3 = 3.0 * s * t * t;
					ttt = t * t * t;

					var ft = ( sst3 * x1 ) + ( stt3 * x2 ) + ( ttt ) - x;

					if ( math.abs( ft ) < eps ) break;

					c /= 2.0;

					t += ( ft < 0 ) ? c : - c;
					s = 1.0 - t;

				}

				return ( sst3 * y1 ) + ( stt3 * y2 ) + ttt;

			}

		} );

	function Component(go) {
	    BaseObject.call(this);
	    this.instClassType = Component.classType;
		this.gameObject=go;
		this.priority = 0;
	}

	ExtendType(Component, BaseObject, {
	    constructor: Component,
	    isComponent:true,

	    _copy:function(source){
	        BaseObject.prototype._copy.call( this, source );
	    },
	    _handleDestroy: function (event) {

	    }
	});

	function Behaviour(go) {
	    Component.call(this, go);
	    this.instClassType = Behaviour.classType;
	    this._enabled = true;

	    Object.defineProperty(this, "enabled",{
	        get:function () {
	            return this._enabled;
	        },

	        set:function(value){
	            if(value == this._enabled)   return;

	            this._enabled = value;
	            if(this._enabled)
	            {
	                this.dispatchEvent({type:Event$1.ENABLE});
	            }
	            else {
	                this.dispatchEvent({type:Event$1.DISABLE});
	            }
	        }
	    });
	}

	ExtendType(Behaviour, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	        this._enabled = source._enabled;
	    }
	});

	/**
	 * @class Web3DEngine.Camera
	 * @name Web3DEngine.Camera
	 * @classdesc Camera组件，使实体能够渲染场景。场景需要渲染至少一个启用的相机组件。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { String } Projection 用于渲染相机的投影类型，透视还是正交。
	 * @property { Number } nearClipPlane 视锥体的近端面距离。
	 * @property { Number } farClipPlane 视锥体的远端面距离。
	 * @property { Number } aspect 透视相机的纵横比（宽度除以高度）。
	 * @property { Number } field_of_view 透视相机的视野，以度为单位。
	 * @property { Number } frustumSize 正交视图窗口的半高（在Y轴上）。
	 * @property { Number } cullingMask 控制网格实例相对于相机平截头体的剔除，即渲染哪些Layers的场景。
	 * @property { Object } targetTexture 返回相机的渲染数据[read only]
	 * @property { Object } allCameras 返回所有的相机组件[read only]
	 */
	function Camera(go) {
	    Behaviour.call(this, go);
	    this.instClassType = Camera.classType;
	    this._near = 0.3;
	    this._far = 1000;
	    this._frustumSize = 50;
	    this._fov = 60;
	    this._aspect = window.innerWidth / window.innerHeight ;
	    this._projection = Camera.ENUM_Projection.Perspective;
	    this._imp = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight , 0.3, 1000);
	    // this._imp = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
	    this.gameObject._imp.add(this._imp);
	    this.__renderTexture = null;
	    this.__cullingMask = 0xffffffff;//culling every layer
	    this.__handleCullingMask();

	    Object.defineProperty(this, "Projection",{
	        get:function () {
	            return this._projection;
	        },

	        set:function(value){
	            if(value === this._projection)   return;

	            if( value === Camera.ENUM_Projection.Perspective)
	            {
	                this.gameObject._imp.remove(this._imp);
	                this._imp = new THREE.PerspectiveCamera( this._fov , window.innerWidth / window.innerHeight , this._near, this._far);
	                this.gameObject._imp.add(this._imp);
	                this._projection = value;
	                this.__handleCullingMask();

	            }
	            else if( value === Camera.ENUM_Projection.Orthographic)
	            {
	                this.gameObject._imp.remove(this._imp);

	                // 切换透视正交，需要更新正交范围
	                let aspect = window.innerWidth / window.innerHeight;

	                let left = -this._frustumSize * aspect / 2;
	                let right = this._frustumSize * aspect / 2;
	                let top = this._frustumSize / 2;
	                let bottom = -this._frustumSize / 2;
	                this._imp = new THREE.OrthographicCamera( left , right , top , bottom , this._near, this._far);
	                //this._imp = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 0.3, 1000);

	                this.gameObject._imp.add(this._imp);
	                this._projection = value;
	                this.__handleCullingMask();

	            }
	        }
	    });

	    Object.defineProperty(this, "nearClipPlane",{
	        get:function () {
	            return this._imp.near;
	        },

	        set:function(value){

	            if(value === this._imp.near)   return;

	            value = value || 0.3;

	            if (this._projection === Camera.ENUM_Projection.Perspective && value <= 0 ) {
	                value = 0.1;
	            }
	            else if (this._projection === Camera.ENUM_Projection.Orthographic && value < 0 ) {
	                value = 0;
	            }

	            this._imp.far = value >= this._imp.far ? value + 0.1  : this._imp.far ;


	            this._imp.near = value;
	            this._imp.updateProjectionMatrix();
	        }
	    });

	    Object.defineProperty(this, "farClipPlane",{
	        get:function () {
	            return this._imp.far;
	        },

	        set:function(value){
	            if(value === this._imp.far)   return;

	            value = value || 1000;

	            value = value <= this._imp.near ? this._imp.near + 0.1  : value;

	            this._imp.far = value;
	            this._imp.updateProjectionMatrix();
	        }
	    });

	    //aspect:the Perspective camera height/width of viewing frustum
	    Object.defineProperty(this, "aspect",{

	        get:function () {
	            if( this._projection === Camera.ENUM_Projection.Perspective ){
	                return this._aspect;
	            }else{
	                return null;
	            }
	        },

	        set:function (value) {
	            if (value === this._aspect) return;
	            value = value || window.innerWidth / window.innerHeight;
	            this._aspect = value <= 0 ? window.innerWidth / window.innerHeight : value;

	            if( this._projection === Camera.ENUM_Projection.Perspective ) {
	                this._imp.aspect = this._aspect;
	                this._imp.updateProjectionMatrix();
	            }
	        }

	    });

	    //fov:the Perspective camera frustum vertical field of view
	    Object.defineProperty(this, "field_of_view",{
	        get:function () {
	            if( this._projection === Camera.ENUM_Projection.Perspective ) {
	                return this._fov;
	            }else{
	                return null;
	            }
	        },
	        set: function (value) {

	            if (value === this._fov) return;
	            value = value || 60;
	            this._fov = (value < 1 || value > 179) ? 60 : value;

	            if (this._projection === Camera.ENUM_Projection.Perspective) {

	                this._imp.fov = this._fov;
	                this._imp.updateProjectionMatrix();
	            }
	        }
	    });

	    //Orthographic camera's left right bottom top,control by frustumSize
	    Object.defineProperty(this, "frustumSize",{
	        get:function () {
	            if( this._projection === Camera.ENUM_Projection.Orthographic ) {
	                return this._frustumSize;
	            }else{
	                return 0;
	            }
	        },
	        set: function (value) {

	            if (value === this._frustumSize) return;

	            this._frustumSize = value <= 0 ? 1000 : value;

	            if( this._projection === Camera.ENUM_Projection.Orthographic ) {
	                this._aspect = window.innerWidth / window.innerHeight;

	                this._imp.left = -this._frustumSize * this._aspect / 2;
	                this._imp.right = this._frustumSize * this._aspect / 2;
	                this._imp.top = this._frustumSize / 2 ;
	                this._imp.bottom = - this._frustumSize /  2 ;

	                this._imp.updateProjectionMatrix();
	            }
	        }
	    });
	    Camera._enbledArray.push(this);
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	    this.addEventListener(Event$1.ENABLE, this, this._handleEnable);
	    this.addEventListener(Event$1.DISABLE, this, this._handleDisable);
	}

	Camera.ENUM_Projection = {
	    Perspective:"Perspective",
	    Orthographic:"Orthographic"

	};
	Camera._enbledArray = [];
	Object.defineProperty(Camera, "allCameras",{
	    get:function () {
	        return Camera._enbledArray;
	    }
	});

	ExtendType(Camera, Behaviour, {
	    _copy:function(source){
	        Behaviour.prototype._copy.call( this, source );
	        this.Projection = source.Projection;
	        this.nearClipPlane = source.nearClipPlane;
	        this.farClipPlane = source.farClipPlane;
	        this.aspect= source.aspect;
	        this.field_of_view = source.field_of_view;
	        this.frustumSize = source.frustumSize;
	    },

	    _handleEnable:function(event)
	    {
	        Camera._enbledArray.push(this);
	    },

	    _handleDisable:function(event)
	    {
	        var index = Camera._enbledArray.indexOf(this);
	        Camera._enbledArray.splice(index, 1);
	    },

	    _handleDestroy:function(event)
	    {
	        if(this._imp != null)
	        {
	            this.gameObject._imp.remove(this._imp);
	        }
	    },

	    Render:function()
	    {
	        if(this.__renderTexture)
	        {
	            let sceneInst = SceneManager.GetActiveScene();
	            if(sceneInst == null)   return;
	            this.__renderTexture.__offScreenRenderer.setSize(this.__renderTexture.width, this.__renderTexture.height);
	            this.__renderTexture.__offScreenRenderer.render(sceneInst._imp, this._imp, this.__renderTexture._imp, true);
	        }
	    },

	    __handleCullingMask:function()
	    {
	        let cullingMaskValue = this.__cullingMask;
	        for(let index = 0; index < 32; ++index)
	        {
	            if(cullingMaskValue & 1)
	            {
	                this._imp.layers.enable(index);
	            }
	            else {
	                this._imp.layers.disable(index);
	            }
	            cullingMaskValue = (cullingMaskValue>>1);
	        }
	    },
	    /**
	     * @function
	     * @name Web3DEngine.Camera#WorldToScreenPoint
	     * @description 从世界空间到屏幕空间的位置变换。
	     * @param {Web3DEngine.Vector3} position  世界空间中的位置。
	     * @returns {Web3DEngine.Vector3} 屏幕空间中的位置。
	     */
	    WorldToScreenPoint:function(position)
	    {
	        let targetPos = new Vector3(position.x, position.y, position.z);
	        let screenPos = new Vector3;
	        let vec2 = targetPos.project(this._imp);
	        let halfWidth = Application.instance.getRenderDom().width / 2;
	        let halfHeight = Application.instance.getRenderDom().height / 2;
	        screenPos.x = vec2.x * halfWidth + halfWidth;
	        screenPos.y = -vec2.y * halfHeight + halfHeight;
	        screenPos.z = this._imp.position.distanceTo( targetPos );
	        return screenPos;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.Camera#WorldToScreenPoint
	     * @description 从屏幕空间到世界空间的位置变换。
	     * @param {Web3DEngine.Vector3} position  屏幕空间中的位置。
	     * @returns {Web3DEngine.Vector3} 世界空间中的位置。
	     */
	    ScreenToWorldPoint:function(position)
	    {
	        let targetPos = new Vector3(position.x, position.y, position.z);
	        let worldPos = targetPos.clone();
	        let width = Application.instance.getRenderDom().width;
	        let height = Application.instance.getRenderDom().height;
	        worldPos.x = (position.x / width) * 2 - 1;
	        worldPos.y = - (position.y / height) * 2 + 1;
	        return worldPos.unproject(this._imp);
	    },

	    SetOrthographicCamera: function (left, right, bottom, top, near, far) {
	        if (Camera.ENUM_Projection.Orthographic === this._projection) {

	            this._imp.left = left !== undefined ? left : this._imp.left;
	            this._imp.right = right !== undefined ? right : this._imp.right = right;
	            this._imp.top = top !== undefined ? top : this._imp.top;
	            this._imp.bottom = bottom !== undefined ? bottom : this._imp.bottom;

	            this._imp.near = near !== undefined ? near : this._imp.near;
	            this._imp.far = far !== undefined ? far : this._imp.far;

	            this._imp.updateProjectionMatrix();
	        }
	    },

	});

	Object.defineProperty(Camera.prototype, "targetTexture",{
	    get:function () {
	        return this.__renderTexture;
	    },

	    set:function(renderTexture){
	        if(renderTexture.isRenderTexture)
	        {
	            this.__renderTexture = renderTexture;
	        }
	    }
	});

	Object.defineProperty(Camera.prototype, "cullingMask",{
	    set:function(value)
	    {
	        if(value < 0 || value > 0xffffffff) return;
	        if(value !== this.__cullingMask)
	        {
	            this.__cullingMask = value;
	            this.__handleCullingMask();
	        }
	    },
	    get:function () {
	        return this.__cullingMask;
	    }
	});

	Camera.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enabled',
	    default: true
	});

	Camera.attributes.add('Projection', {
	    type: 'string',
	    title: 'Projection',
	    default: "Perspective"
	});

	Camera.attributes.add('nearClipPlane', {
	    type: 'number',
	    title: 'NearClipPlane',
	    default : 0.3
	});

	Camera.attributes.add('farClipPlane', {
	    type: 'number',
	    title: 'FarClipPlane',
	    default: 1000
	});

	Camera.attributes.add('aspect', {
	    type: 'number',
	    title: 'Aspect',
	    default: window.innerWidth / window.innerHeight
	});

	Camera.attributes.add('field_of_view', {
	    type: 'number',
	    title: 'Field of View',
	    default : 60
	});

	Camera.attributes.add('frustumSize', {
	    type: 'number',
	    title: 'FrustumSize',
	    default: 50
	});

	Camera.attributes.add('cullingMask', {
	    type: 'number',
	    title: 'CullingMask',
	    default : 0xffffffff
	});

	function Transform(go) {
	    Component.call(this, go);
	    this.instClassType = Transform.classType;
	    this._parent = null;//type:transform
	    this._children = [];
	    if (SceneManager.GetActiveScene())
	        this._sceneRootGO = SceneManager.GetActiveScene()._rootGO;//TODO

	    this._forward = null;

	    Object.defineProperty(this, "parent", {
	        get: function () {
	            return this._parent;
	        },

	        set: function (value) {
	            //detach from prev parent
	            let prevParent = this._parent;

	            if (this._parent != null) {
	                this._parent._removeChild(this);
	                this._parent = null;
	            }
	            else {
	                if (this._sceneRootGO) {
	                    this._sceneRootGO.transform._removeChild(this);
	                }
	            }

	            this._parent = value;
	            if (this._parent != null) {
	                this._parent._addChild(this);
	            }
	            else {
	                if (this._sceneRootGO) {
	                    this._sceneRootGO.transform._addChild(this);
	                }
	            }

	            // if( !!this._parent ){
	            // 	// this._parent.gameObject._imp.updateMatrixWorld(true);
	            // }

	            this.dispatchEvent({ type: Event$1.REPARENT, eventSource: this, parentFrom: prevParent, });
	        }
	    });

	    Object.defineProperty(this, "localPosition", {
	        get: function () {
	            return this.gameObject._imp.position;
	        },

	        set: function (value) {
	            if (value.isVector3 != true) return;
	            this.gameObject._imp.position.copy(value);
	        }
	    });

	    Object.defineProperty(this, "localEulerAngles", {
	        get: function () {
	            let euler = this.gameObject._imp.rotation;
	            let rot = new Vector3(euler.x * 180 / Math.PI, euler.y * 180 / Math.PI, euler.z * 180 / Math.PI);
	            return rot;
	        },

	        set: function (value) {
	            let euler = new Euler(value.x * Math.PI / 180.0, value.y * Math.PI / 180.0, value.z * Math.PI / 180.0);
	            this.gameObject._imp.rotation.copy(euler);
	        }
	    });

	    Object.defineProperty(this, "localRotation", {
	        get: function () {
	            return this.gameObject._imp.quaternion;
	        },

	        set: function (value) {
	            //if(value.isQuaternion != true)  return;
	            this.gameObject._imp.quaternion.copy(value);
	        },

	        configurable: true,
	    });

	    Object.defineProperty(this, "localScale", {
	        get: function () {
	            return this.gameObject._imp.scale;
	        },

	        set: function (value) {
	            if (value.isVector3 != true) return;
	            this.gameObject._imp.scale.copy(value);
	        },

	        configurable: true,
	    });

	    Object.defineProperty(this, "position", {
	        get: function () {
	            let pos = new Vector3();
	            return this.gameObject._imp.getWorldPosition(pos);
	        },

	        set: function (value) {
	            if (value.isVector3 != true) return;
	            this.gameObject._imp.updateMatrixWorld(true);
	            let matrix = new Matrix4();
	            matrix.copy(this.gameObject._imp.matrixWorld);
	            matrix.setPosition(value);
	            this._setMatrix(matrix);
	        }
	    });

	    Object.defineProperty(this, "eulerAngles", {
	        get: function () {
	            let quaternion = new Quaternion();
	            this.gameObject._imp.getWorldQuaternion(quaternion);
	            let euler = new Euler();
	            euler.setFromQuaternion(quaternion, euler.order, false);
	            let vector3 = new Vector3(euler.x, euler.y, euler.z);
	            return vector3;
	        },

	        set: function (value) {
	            if (value.isVector3 != true) return;
	            this.gameObject._imp.updateMatrixWorld(true);
	            let matrix = new Matrix4();
	            matrix.copy(this.gameObject._imp.matrixWorld);
	            let pos = new Vector3(0, 0, 0);
	            let scale = new Vector3(1, 1, 1);
	            let quaternion = new Quaternion();
	            matrix.decompose(pos, quaternion, scale);
	            let euler = new Euler(value.x * Math.PI / 360.0, value.y * Math.PI / 360.0, value.z * Math.PI / 360.0);
	            quaternion.setFromEuler(euler, false);
	            matrix.compose(pos, quaternion, scale);
	            this._setMatrix(matrix);
	        }
	    });

	    //world rotation in quaternion format
	    Object.defineProperty(this, "rotation", {
	        get: function () {
	            let quaternion = new Quaternion();
	            this.gameObject._imp.getWorldQuaternion(quaternion);
	            return quaternion;
	        },

	        set: function (value) {
	            if (value.isQuaternion != true) return;
	            this.gameObject._imp.updateMatrixWorld(true);
	            let matrix = new Matrix4();
	            matrix.copy(this.gameObject._imp.matrixWorld);
	            let pos = new Vector3(0, 0, 0);
	            let scale = new Vector3(1, 1, 1);
	            let quaternion = new Quaternion();
	            matrix.decompose(pos, quaternion, scale);
	            quaternion.copy(value);
	            matrix.compose(pos, quaternion, scale);
	            this._setMatrix(matrix);
	        }
	    });

	    Object.defineProperty(this, "childCount", {
	        get: function () {
	            return this._children.length;
	        }
	    });

	    Object.defineProperty(this, "up", {
	        get: function () {
	            let matrix = this._getMatrix();
	            if (!this._up) {
	                this._up = new Vector3();
	            }
	            return this._up.set(matrix.elements[0], matrix.elements[1], matrix.elements[2]).normalize().multiplyScalar(-1);
	        }
	    });

	    Object.defineProperty(this, "right", {
	        get: function () {
	            let matrix = this._getMatrix();
	            if (!this._right) {
	                this._right = new Vector3();
	            }
	            return this._right.set(matrix.elements[4], matrix.elements[5], matrix.elements[6]).normalize().multiplyScalar(-1);
	        }
	    });

	    Object.defineProperty(this, "forward", {
	        get: function () {
	            let matrix = this._getMatrix();
	            if (!this._forward) {
	                this._forward = new Vector3();
	            }
	            return this._forward.set(matrix.elements[8], matrix.elements[9], matrix.elements[10]).normalize().multiplyScalar(-1);
	        }
	    });

	    this.parent = null;
	}

	ExtendType(Transform, Component, {
	    _copy: function (source) {
	        Component.prototype._copy.call(this, source);
	        for (let index = 0; index < source._children.length; ++index) {
	            let childGO = source._children[index].gameObject;
	            try
				{
                    //如果是SkinnedMeshRenderer生成的游戏对象，则不进行克隆，由SkinnedMeshRenderer组建自行处理
                    if(childGO._imp.userData.engineComponent.isSkinnedMeshRenderer)
                    	continue;
				}catch (e) {

                }
	            let dupChildGO = GameObject.Instantiate(childGO);
	            dupChildGO.transform.parent = this;
	        }
	    },

	    //return child transform
	    GetChild: function (index) {
	        if (index < 0 || index >= this._children.length) return null;
	        return this._children[index];
	    },

	    _addChild: function (trans) {
	        var index = this._children.indexOf(trans);
	        if (index == -1) {
	            this._children.push(trans);
	            this.gameObject._imp.add(trans.gameObject._imp);
	        }
	    },

	    _removeChild: function (trans) {
	        var index = this._children.indexOf(trans);
	        if (index != -1) {
	            this._children.splice(index, 1);
	            this.gameObject._imp.remove(trans.gameObject._imp);
	        }
	    },

	    _setMatrix: function (matrix)//world matrix
	    {
	        if (this.parent != null) {
	            let invMatrix = new Matrix4();
	            this.parent.gameObject._imp.updateMatrixWorld(true);
	            invMatrix.getInverse(this.parent.gameObject._imp.matrixWorld);
	            matrix.premultiply(invMatrix);
	        }
	        let pos = new Vector3();
	        let rot = new Quaternion();
	        let scale = new Vector3();
	        matrix.decompose(pos, rot, scale);
	        this.localPosition = pos;
	        this.localRotation = rot;
	        this.localScale = scale;
	    },

	    _getMatrix: function ()//world matrix
	    {
	        this.gameObject._imp.updateMatrixWorld(false);
	        let matrix = new Matrix4();
	        matrix.copy(this.gameObject._imp.matrixWorld);
	        return matrix;
	    },

	    lookAt: function (targetTransform) {
	        if (targetTransform.isTransform != true) return;

	        //this.gameObject._imp.lookAt(targetTransform.gameObject._imp);
	        let pos = new Vector3();
	        targetTransform.gameObject._imp.getWorldPosition(pos);
	        this.gameObject._imp.lookAt(pos);
	    },

	    lookAtXYZ: function (x, y, z) {
	        let pos = new Vector3(x, y, z);
	        let hasCamera = this.gameObject.getComponent(Camera);
	        if (hasCamera != null) {
	            var q1 = new Quaternion();
	            var m1 = new Matrix4();
	            var target = new Vector3();
	            var position = new Vector3();

	            target.copy(pos);
	            var parent = this.parent;//transform
	            this.gameObject._imp.updateWorldMatrix(true, false);

	            // position.setFromMatrixPosition( this.matrixWorld );
	            position.setFromMatrixPosition(this.gameObject._imp.matrixWorld);

	            m1.lookAt(position, target, this.gameObject._imp.up);

	            // this.quaternion.setFromRotationMatrix( m1 );
	            this.gameObject._imp.quaternion.setFromRotationMatrix(m1);

	            if (parent) {
	                // m1.extractRotation( parent.matrixWorld );
	                // q1.setFromRotationMatrix( m1 );
	                // this.quaternion.premultiply( q1.inverse() );
	                m1.extractRotation(parent.gameObject._imp.matrixWorld);
	                q1.setFromRotationMatrix(m1);
	                this.gameObject._imp.quaternion.premultiply(q1.inverse());
	            }
	        } else {
	            this.gameObject._imp.lookAt(pos);
	        }
	    },

	    forEachChild: function (caller, callBack, includeSelf, recursive) {
	        let isRecursive = recursive !== undefined && recursive;
	        let isInculdeSelf = includeSelf !== undefined && includeSelf;

	        if (isInculdeSelf) {
	            callBack.call(caller, this);
	        }

	        for (let index = 0; index < this.childCount; ++index) {
	            const trans = this.GetChild(index);
	            if (trans) {
	                callBack.call(caller, trans);

	                if (isRecursive) {
	                    trans.forEachChild(caller, callBack, false, true);
	                }
	            }
	        }
	    },
	});

	Transform.attributes.add('parent', {
	    type: 'Transform',
	    title: 'Parent',
	    default: null
	});

	Transform.attributes.add('localPosition', {
	    type: 'vec3',
	    title: 'LocalPosition',
	    default: [0, 0, 0]
	});

	Transform.attributes.add('localEulerAngles', {
	    type: 'vec3',
	    title: 'LocalEulerAngles',
	    default: [0, 0, 0]
	});

	Transform.attributes.add('localScale', {
	    type: 'vec3',
	    title: 'LocalScale',
	    default: [1, 1, 1]
	});

	function AssetLoader() {
	    BaseObject.call(this);
	    this.instClassType = AssetLoader.classType;
	}

	AssetLoader.classType = 'AssetLoader';
	AssetLoader.ENUM_AssetType = {
	    Texture:"Texture",
	    Material:"Material",
	    Model:"Model",
	    Json:"Json",
	    AudioClip:"AudioClip",
	    JavaScript:"JavaScript",
	    MMDModel:"MMDModel",
	    MMDAnimation:"MMDAnimation",
	    Unknown:"Unknown"

	};
	AssetLoader.getFileExt = function(fileUrl){
	    let extIndex = fileUrl.lastIndexOf('.');
	    if(extIndex < 0)
	    {
	        console.log("不可识别文件类型:"+urlRequest.url);
	        return null;
	    }
	    let extStr = fileUrl.substr(extIndex + 1).toLowerCase();
	    if(extStr.length == 0)
	    {
	        console.log("不能获取有效文件类型:"+urlRequest.url);
	        return null;
	    }
	    return extStr;
	};
	AssetLoader.getFileAssetType = function(url){
	    if(url instanceof Array)//cubemap 或 vmd
	    {
	        if(url.length == 2)
	            url = url[1];
	        else
	            return this.ENUM_AssetType.Texture;
	    }
	    let extStr = this.getFileExt(url);
	    if(extStr == null)  return this.ENUM_AssetType.Unknown;
	    if(extStr === "gltf" || extStr === "glb")
	    {
	        return this.ENUM_AssetType.Model;
	    }
	    else if(extStr === "mesh")
	    {
	        return this.ENUM_AssetType.Model;
	    }
	    else if(extStr === "material")
	    {
	        return this.ENUM_AssetType.Material;
	    }
	    else if(extStr === "jpg" || extStr === "png" || extStr === "tga" || extStr === "exr")
	    {
	        return this.ENUM_AssetType.Texture;
	    }
	    else if(extStr === "assets")
	    {
	        return this.ENUM_AssetType.Json;
	    }
	    else if(extStr === "mp3" || extStr === "ogg" || extStr === "wav")
	    {
	        return this.ENUM_AssetType.AudioClip;
	    }
		else if(extStr === "js")
	    {
	        return this.ENUM_AssetType.JavaScript;
	    }
	    else if(extStr === "pmd" || extStr === "pmx")
	    {
	        return this.ENUM_AssetType.MMDModel;
	    }
	    else if(extStr === "vmd")
	    {
	        return this.ENUM_AssetType.MMDAnimation;
	    }
		return this.ENUM_AssetType.Unknown;
	};

	AssetLoader.prototype = Object.assign( Object.create( BaseObject.prototype ), {
	    constructor: AssetLoader,

	    isAssetLoader: true,

	    //return child transform
	    _readGLTF:function(url){
	        let gltfLoader= new _W3DGLTFLoader();
	        //let gltfLoader=new GLTFLoader();
	        let scope = this;
	        gltfLoader.load(url, function (gltf) {
	            let mesh = new Mesh;
	            mesh._originalAsset = gltf;
	            //若存在于场景中，则移除
	            if(gltf.scene.transform._sceneRootGO)
	            {
	                gltf.scene.transform._sceneRootGO.transform._removeChild(gltf.scene.transform);
	            }
	            let event = {type:Event$1.COMPLETE, content:mesh};
	            scope.dispatchEvent(event);
	        });
	    },
	    _readPMX:function(url){
	        let mmdLoader= new _MMDLoader();
	        let scope = this;
	        mmdLoader.load(url, function (mmd) {
	            let mesh = new Mesh;
	            let go = generateBonesInNode(mmd, null);
	            //若存在于场景中，则移除
	            if(go.transform._sceneRootGO)
	            {
	                go.transform._sceneRootGO.transform._removeChild(go.transform);
	            }
	            mesh._originalAsset = {
	                scene: go
	            };
	            mesh.isPMX = true;
	            let event = {type:Event$1.COMPLETE, content:mesh};
	            scope.dispatchEvent(event);
	        });

	        //遍历所有ThreeNode节点，生成对应的gameobject
	        function generateBonesInNode (originalNode, w3dParent)
	        {
	            //添加骨骼标唯一标记，防止遇到骨骼重名克隆出错
	            if(originalNode instanceof THREE.Bone)
	            {
	                originalNode.userData.originaluuid = originalNode.uuid;
	            }
	            let gameObject = new GameObject(null, originalNode);
	            gameObject.name = originalNode.name;
	            // gameObject._imp = originalNode;
	            let transform = gameObject.getComponent(Transform);
	            transform.parent = w3dParent;

	            //独立保存childs遍历列表，防止重设节点时被破坏导致遍历错乱
	            let lstchilds = [];
	            for(let index in originalNode.children)
	            {
	                let child = originalNode.children[index];
	                lstchilds.push(child);
	            }

	            for(let index in lstchilds)
	            {
	                let child = lstchilds[index];
	                generateBonesInNode(child, transform);
	            }
	            return gameObject;
	        }
	    },
	    _readVMD:function(url){
	        let mmdLoader= new _MMDLoader();
	        let scope = this;
	        if (url instanceof Array)
	        {
	            let vmxUrl = url[0];
	            let vmdUrl = url[1];
	            let mmdSkinnedMesh = AssetManager.instance._getNativeMesh(vmxUrl);
	            if(mmdSkinnedMesh.scene._imp)
	            {
	                mmdLoader.loadAnimation(vmdUrl, mmdSkinnedMesh.scene._imp, function (anim) {
	                // mmdLoader.loadAnimation(vmdUrl, mmdSkinnedMesh.scene._imp.children[0], function (anim) {
	                    let mesh = new Mesh;
	                    mesh._originalAsset = {
	                        animations: [anim]
	                    };
	                    let event = {type:Event$1.COMPLETE, content:mesh};
	                    scope.dispatchEvent(event);
	                });
	            }
	            else
	            {
	                mmdLoader.loadWithAnimation(vmxUrl, vmdUrl, function (mmd) {
	                    let mesh = new Mesh;
	                    mesh._originalAsset = {
	                        animations: [mmd.animation]
	                    };
	                    let event = {type:Event$1.COMPLETE, content:mesh};
	                    AssetManager.instance._disposeNodeInMesh(mmd.mesh, true);
	                    scope.dispatchEvent(event);
	                });
	            }
	        }
	    },
	    _readMaterial:function(url){
	        let jsonLoader = new THREE.FileLoader(THREE.DefaultLoadingManager);
	        let scope = this;

	        // --zhou_hao 使用json形式的material来进行加载
	        if( typeof url  === "object" ) {
	            let material = new Material;
	            //url中应该有{data,materialType};
	            let json = url ;
	            material._readFile(json);
	            let event = {type:Event$1.COMPLETE, content:material};
	            scope.dispatchEvent(event);
	            return ;
	        }

	        jsonLoader.load(url, function(text){
	            let json = null;
	            try {
	                json = JSON.parse( text );
	            } catch ( error ) {
	                console.error( 'AssetLoader: Can\'t parse ' + url + '.', error.message );
	                return;
	            }
	            let material = new Material;
	            material._readFile(json);
	            let event = {type:Event$1.COMPLETE, content:material};
	            scope.dispatchEvent(event);
	        });
	    },
	    _readTexture:function(url) {
	        if (url instanceof Array){//cubemap
	            let texture = new THREE.CubeTextureLoader().load( url );
	            texture.format = THREE.RGBFormat;
	            let event = {type:Event$1.COMPLETE, content:texture};
	            this.dispatchEvent(event);
	        }
			else if( AssetLoader.getFileExt(url) == "exr" ){
				let scope = this;
				new THREE.EXRLoader()
	                .setDataType(THREE.FloatType)
	                .load(url, function (texture) {
	                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

					let event = {type:Event$1.COMPLETE, content:texture};
	            	scope.dispatchEvent(event);
				});
			}
	        else {
	            let texture = new THREE.TextureLoader().load( url );
	            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	            let event = {type:Event$1.COMPLETE, content:texture};
	            this.dispatchEvent(event);
	        }
	    },
	    _readAudioClip:function(url){
	        let audioLoader = new THREE.AudioLoader();
	        let scope = this;
	        audioLoader.load( url, function ( buffer ) {
	            let event = {type:Event$1.COMPLETE, content:buffer};
	            scope.dispatchEvent(event);
	            // sound1.setBuffer( buffer );
	            // sound1.setRefDistance( 20 );
	            // sound1.play();

	        } );

	    },
	    _readJson:function(url){
	        let jsonLoader = new THREE.FileLoader(THREE.DefaultLoadingManager);
	        let scope = this;
	        jsonLoader.load(url, function(text){
	            var json = null;
	            try {
	                json = JSON.parse( text );
	            } catch ( error ) {
	                console.error( 'AssetLoader: Can\'t parse ' + url + '.', error.message );
	                return;
	            }
	            let event = {type:Event$1.COMPLETE, content:json};
	            scope.dispatchEvent(event);
	        });
	    },
	    _readJavaScript:function(url){
	        let jsLoader = new ScriptHandler();
	        let scope = this;
	        jsLoader.load(url, function(err, data, extra){

	            let event = {type:Event$1.COMPLETE, content:null};
	            scope.dispatchEvent(event);
	        });
	    },
	    load: function ( urlRequest ) {
	        let fileUrl = urlRequest.url;
	        if( fileUrl == null ){
	            let assetType = urlRequest.type;
	            switch (assetType) {
	                case AssetLoader.ENUM_AssetType.Material:
	                    this._readMaterial( urlRequest.data || {});
	                    return ;
	            }
	            return ;
	        }
	        let assetType = AssetLoader.getFileAssetType(fileUrl);
	        switch (assetType) {
	            case AssetLoader.ENUM_AssetType.Model:
	                this._readGLTF(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.Material:
	                this._readMaterial(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.Texture:
	                this._readTexture(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.Json:
	                this._readJson(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.AudioClip:
	                this._readAudioClip(fileUrl);
	                break;
				case AssetLoader.ENUM_AssetType.JavaScript:
	                this._readJavaScript(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.MMDModel:
	                this._readPMX(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.MMDAnimation:
	                this._readVMD(fileUrl);
	                break;
	            case AssetLoader.ENUM_AssetType.Unknown:
	                let event = {type:Event$1.COMPLETE, content:null};
	                this.dispatchEvent(event);
	                break;
	        }
	    }
	} );

	function URLRequest() {
	    EventDispatcher.call(this);
	    this.instClassType = URLRequest.classType;
	    this.url = "";
	}

	URLRequest.classType = 'URLRequest';

	URLRequest.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {
	    isURLRequest:true
	} );

	Texture.ENUM_Direction = {
	    Left:0,
	    Right:1,
	    Up:2,
	    Down:3,
	    Front:4,
	    Back:5,
	};

	function Texture() {
	    Asset.call(this);
	    this.instClassType = Texture.classType;
	    this.name='Texture';
	    this._imp = null;
	    this.id = 0;
	    this.filePath = "";
	}

	Texture.classType = 'Texture';

	Texture.prototype = Object.assign( Object.create( Asset.prototype ), {
	    isTexture:true,
	    _assignData:function(data){
	        this.id = data.id;
	        this.filePath = data.filePath;
	        this._imp = AssetManager.instance._getNativeTexture(this.filePath);
	        this.isCubeTexture = this._imp.isCubeTexture;
	    },

	    replaceTexture:function(replaceTexture, direction) {
	        //替换天空盒路径
	        if (this.isCubeTexture) {
	            this.filePath[direction] = replaceTexture.filePath;

	            //释放原资源
	            this._imp.dispose();

	            //加载并替换资源
	            let newCubeTexture = new THREE.CubeTextureLoader().load(this.filePath);
	            newCubeTexture.format = THREE.RGBFormat;
	            this._imp = newCubeTexture;

	            //通知天空盒、材质 环境贴图改变
	            this.dispatchEvent({type: Event$1.CHANGECUBETEXTURE, data: this});
	        }
	    },
	} );

	Object.defineProperty(Texture.prototype, "width",{
	    get:function () {
	        return this._imp?this._imp.width:0;
	    },

	    set:function(widthValue){
	        //TODO
	    }
	});

	Object.defineProperty(Texture.prototype, "height",{
	    get:function () {
	        return this._imp?this._imp.height:0;
	    },

	    set:function(widthValue){
	        //TODO
	    }
	});

	RenderSettings._instance = null;

	RenderSettings.ENUM_FOGTYPE = {
	    None:"None",
	    Linear:"Linear",
	    Exponetial:"Exponetial",
	};

	/**
	 * @class Web3DEngine.RenderSettings
	 * @name Web3DEngine.RenderSettings
	 * @classdesc RenderSettings,包含用于场景中可视元素范围的值，如雾和环境光。
	 * @property { Web3DEngine.Texture } skyBoxTexture 全局天空盒。
	 * @property { Web3DEngine.Color } skyBoxColor 全局天空颜色，只有在没有天空盒的时候起效。
	 * @property { Web3DEngine.Color } ambientLightColor 场景的环境光颜色。
	 * @property { Number } ambientLightIntensity 场景的环境光强度。
	 * @property { RenderSettings.ENUM_FOGTYPE } fogType 雾的模式。
	 * @property { Web3DEngine.Color } fogColor 雾的颜色。
	 * @property { Nmubder } fogStart 线性雾的开始距离。
	 * @property { Nmubder } fogEnd 线性雾的结束距离。
	 * @property { Nmubder } fogDensity 雾的密度。
	 */
	function RenderSettings() {

	    this._skyBoxTexture = null;
	    Object.defineProperty(this, "skyBoxTexture",{
	        get:function () {
	            return this._skyBoxTexture;
	        },

	        set:function(cubeTexture){
	            if(!(cubeTexture instanceof Texture))
	            {
	                cubeTexture = null;
	            }
	            else
	            {
	                if(!cubeTexture.isCubeTexture)
	                    cubeTexture = null;
	            }

	            // if(this._skyBoxTexture == cubeTexture) return;

	            if(this._skyBoxTexture)
	            {
	                this._skyBoxTexture.removeEventListener(Event$1.CHANGECUBETEXTURE, this, setSkyBoxCallback);
	                this._skyBoxTexture.removeEventListener(Event$1.REMOVEASSET, this, assetRemoved);
	            }

	            this._skyBoxTexture = cubeTexture;
	            let scene = SceneManager.GetActiveScene();
	            if(this._skyBoxTexture)
	            {
	                scene._imp.background = cubeTexture._imp;

	                cubeTexture.addEventListener(Event$1.CHANGECUBETEXTURE, this, setSkyBoxCallback);
	                cubeTexture.addEventListener(Event$1.REMOVEASSET, this, assetRemoved);
	            }
	            else
	            {
	                scene._imp.background = null;
	                this.skyBoxColor = this._skyBoxColor;
	            }
	        }
	    });

	    function setSkyBoxCallback (event)
	    {
	        //如果天空盒引用了该资源，则进行重设
	        if (RenderSettings.instance.skyBoxTexture == event.data) {
	            RenderSettings.instance.skyBoxTexture = event.data;
	        }
	    }

	    function assetRemoved (event)
	    {
	        RenderSettings.instance.skyBoxTexture = null;
	    }

	    this._skyBoxColor = 0xffffff;
	    Object.defineProperty(this, "skyBoxColor",{
	        get:function () {
	            return this._skyBoxColor;
	        },

	        set:function(value){
	            this._skyBoxColor = value;
	            let scene = SceneManager.GetActiveScene();
	            scene._imp.background = new THREE.Color( value );
	        }
	    });

	    this._ambientLightColor = 0xffffff;
	    Object.defineProperty(this, "ambientLightColor",{
	        get:function () {
	            return this._ambientLightColor;
	        },

	        set:function(value){
	            this._ambientLightColor = value;
	            let scene = SceneManager.GetActiveScene();
	            scene._ambientLight.color = new THREE.Color( value );
	        }
	    });

	    this._ambientLightIntensity = 0.1;
	    Object.defineProperty(this, "ambientLightIntensity",{
	        get:function () {
	            return this._ambientLightIntensity;
	        },

	        set:function(value){
	            this._ambientLightIntensity = value;
	            let scene = SceneManager.GetActiveScene();
	            scene._ambientLight.intensity = value;
	        }
	    });

	    this._fogType = RenderSettings.ENUM_FOGTYPE.None;
	    Object.defineProperty(this, "fogType",{
	        get:function () {
	            return this._fogType;
	        },

	        set:function(value){
	            this._fogType = value;
	            let scene = SceneManager.GetActiveScene();
	            if(this._fogType == RenderSettings.ENUM_FOGTYPE.None)
	            {
	                scene._imp.fog = null;
	            }
	            else if(this._fogType == RenderSettings.ENUM_FOGTYPE.Linear)
	            {
	                scene._imp.fog = new THREE.Fog( this._fogColor, this._fogStart, this._fogEnd );
	            }
	            else if(this._fogType == RenderSettings.ENUM_FOGTYPE.Exponetial)
	            {
	                scene._imp.fog = new THREE.FogExp2( this._fogColor, this._fogDensity );
	            }
	        }
	    });

	    this._fogColor = 0xc4c4c4;
	    Object.defineProperty(this, "fogColor",{
	        get:function () {
	            return this._fogColor;
	        },

	        set:function(value){
	            this._fogColor = value;
	            let scene = SceneManager.GetActiveScene();
	            if(scene._imp.fog)
	            {
	                scene._imp.fog.color = new THREE.Color(value);
	            }
	        }
	    });

	    this._fogStart = 0;
	    Object.defineProperty(this, "fogStart",{
	        get:function () {
	            return this._fogStart;
	        },

	        set:function(value){
	            this._fogStart = value;
	            let scene = SceneManager.GetActiveScene();
	            if(scene._imp.fog && this._fogType == RenderSettings.ENUM_FOGTYPE.Linear)
	            {
	                scene._imp.fog.near = this._fogStart;
	            }
	        }
	    });

	    this._fogEnd = 100;
	    Object.defineProperty(this, "fogEnd",{
	        get:function () {
	            return this._fogEnd;
	        },

	        set:function(value){
	            this._fogEnd = value;
	            let scene = SceneManager.GetActiveScene();
	            if(scene._imp.fog && this._fogType == RenderSettings.ENUM_FOGTYPE.Linear)
	            {
	                scene._imp.fog.far = this._fogEnd;
	            }
	        }
	    });

	    this._fogDensity = 0.01;
	    Object.defineProperty(this, "fogDensity",{
	        get:function () {
	            return this._fogDensity;
	        },

	        set:function(value){
	            this._fogDensity = value;
	            let scene = SceneManager.GetActiveScene();
	            if(scene._imp.fog && this._fogType == RenderSettings.ENUM_FOGTYPE.Exponetial)
	            {
	                scene._imp.fog.density = this._fogDensity;
	            }
	        }
	    });


	}

	Object.defineProperty(RenderSettings, "instance",{
	    get:function () {
	        if(!RenderSettings._instance)
	        {
	            RenderSettings._instance = new RenderSettings();
	        }
	        return RenderSettings._instance;
	    }
	});

	function AssetManager() {
	    this._regedTextures = {};
	    this._regedNativeTextures = {};
	    this._regedMaterials = {};
	    this._regedNativeMaterials = {};
	    this._regedModels = {};
	    this._regedNativeMeshs = {};
	    this._regedAudioClips = {};
	    this._regedNativeAudioClips = {};

	    this._urlRequest = null;
	    this._assetLoader = null;
	    this._onProgress = null;
	    this._aseetDataPath = "";
	    this._waitingLoadAssetPath = [];
	    this._loadingIndex = -1;
	}

	AssetManager._instance = new AssetManager();

	Object.defineProperty(AssetManager, "instance", {
	    get: function () {
	        return AssetManager._instance;
	    }
	});

	Object.assign( AssetManager.prototype, {
	        setProgressFunc: function (onProgressFunc) {
	            this._onProgress = onProgressFunc;
	        },
	        enqueueAssetData: function (url) {
	            this._aseetDataPath = url;
	            this._urlRequest = new URLRequest();
	            this._urlRequest.url = this._aseetDataPath;
	            this._assetLoader = new AssetLoader();
	            let scope = this;
	            this._assetLoader.addEventListener(Event$1.COMPLETE, this, function (event) {
	                scope.parseAssetData(event.content);
	            });
	            this._assetLoader.load(this._urlRequest);
	        },
	        parseAssetData: function (data) {
	            let textureArray = data.textures;
	            for (let index = 0; index < textureArray.length; ++index) {
	                if (this._waitingLoadAssetPath.indexOf(textureArray[index]) < 0) {
	                    this._waitingLoadAssetPath.push(textureArray[index]);
	                }
	            }
	            let materialArray = data.materials;
	            for (let index = 0; index < materialArray.length; ++index) {
	                if (this._waitingLoadAssetPath.indexOf(materialArray[index]) < 0) {
	                    this._waitingLoadAssetPath.push(materialArray[index]);
	                }
	            }
	            let modelArray = data.models;
	            for (let index = 0; index < modelArray.length; ++index) {
	                if (this._waitingLoadAssetPath.indexOf(modelArray[index]) < 0) {
	                    this._waitingLoadAssetPath.push(modelArray[index]);
	                }
	            }
	            let audioArray = data.audioClips;
	            if (audioArray) {
	                for (let index = 0; index < audioArray.length; ++index) {
	                    if (this._waitingLoadAssetPath.indexOf(audioArray[index]) < 0) {
	                        this._waitingLoadAssetPath.push(audioArray[index]);
	                    }
	                }
	            }
	            let scriptArray = data.scripts;
	            if (scriptArray) {
	                for (let index = 0; index < scriptArray.length; ++index) {
	                    if (this._waitingLoadAssetPath.indexOf(scriptArray[index]) < 0) {
	                        this._waitingLoadAssetPath.push(scriptArray[index]);
	                    }
	                }
	            }
	            this._loadingIndex = -1;
	            this._loadQueuedAssetItem(null);
	        },

	        _onAssetData: function (event) {
	        },

	        _handleNewAsset: function (content, itemDesInfo) {
	            let assetType = AssetLoader.getFileAssetType(itemDesInfo.filePath);
	            switch (assetType) {
	                case AssetLoader.ENUM_AssetType.Texture:
	                    this._regNativeTexture(content, itemDesInfo.filePath);
	                    let texture = new Texture;
	                    texture._assignData(itemDesInfo);
	                    this._regTexture(texture);
	                    break;
	                case AssetLoader.ENUM_AssetType.Material:
	                    let material = content;
	                    material._assignData(itemDesInfo);
	                    this._regMaterial(material);
	                    break;
	                case AssetLoader.ENUM_AssetType.Model:
	                    let mesh = content;
	                    this._regNativeMesh(mesh._originalAssetValue, itemDesInfo.filePath);
	                    mesh._assignData(itemDesInfo);
	                    this._regMesh(mesh);
	                    break;
	                case AssetLoader.ENUM_AssetType.AudioClip:
	                    this._regNativeAudioClip(content, itemDesInfo.filePath);
	                    let audioClip = new AudioClip();
	                    audioClip._assignData(itemDesInfo);
	                    this._regAudioClip(audioClip);
	                    break;
	                case AssetLoader.ENUM_AssetType.MMDModel:
	                    let mmdMesh = content;
	                    this._regNativeMesh(mmdMesh._originalAssetValue, itemDesInfo.filePath);
	                    mmdMesh._assignData(itemDesInfo);
	                    this._regMesh(mmdMesh);
	                    break;
	                case AssetLoader.ENUM_AssetType.MMDAnimation:
	                    let mmdAnimation = content;
	                    this._regNativeMesh(mmdAnimation._originalAssetValue, itemDesInfo.filePath);
	                    mmdAnimation._assignData(itemDesInfo);
	                    this._regMesh(mmdAnimation);
	                    break;
	                case AssetLoader.ENUM_AssetType.JavaScript:
	                    //TODO
	                    break;
	            }
	        },

	        _findNextLoadingItem: function (fromIndex) {
	            let index = fromIndex;
	            let assetInst = null;
	            while (index < this._waitingLoadAssetPath.length) {
	                let dataItem = this._waitingLoadAssetPath[index];
	                let assetType = AssetLoader.getFileAssetType(dataItem.filePath);

	                switch (assetType) {
	                    case AssetLoader.ENUM_AssetType.Texture:
	                        // assetInst = this.getTextureByID(dataItem.id);
	                        assetInst = this._regedTextures[dataItem.id];
	                        break;
	                    case AssetLoader.ENUM_AssetType.Material:
	                        // assetInst = this.getMaterialByID(dataItem.id);
	                        assetInst = this._regedMaterials[dataItem.id];
	                        break;
	                    case AssetLoader.ENUM_AssetType.Model:
	                        // assetInst = this.getMeshByID(dataItem.id);
	                        assetInst = this._regedModels[dataItem.id];
	                        break;
	                    case AssetLoader.ENUM_AssetType.AudioClip:
	                        // assetInst = this.getAudioClipByID(dataItem.id);
	                        assetInst = this._regedAudioClips[dataItem.id];
	                        break;
	                }

	                if (assetInst == null) {
	                    break;
	                }
	                index++;
	            }

	            return index;
	        },

	        _loadQueuedAssetItem: function (event) {
	            let scope = AssetManager._instance;
	            if (event != null) {
	                let item = scope._waitingLoadAssetPath[scope._loadingIndex];
	                scope._handleNewAsset(event.content, item);
	            }
	            scope._loadingIndex = scope._findNextLoadingItem(scope._loadingIndex + 1);
	            if (scope._onProgress != null) {
	                if (scope._loadingIndex === 0 && scope._waitingLoadAssetPath.length === 0) {
	                    scope._onProgress(1);
	                } else {
	                    scope._onProgress((scope._loadingIndex) / scope._waitingLoadAssetPath.length);
	                }
	            }
	            if (scope._loadingIndex >= scope._waitingLoadAssetPath.length) return;

	            //start loading
	            let dataItem = scope._waitingLoadAssetPath[scope._loadingIndex];
	            scope._urlRequest = new URLRequest();
	            scope._urlRequest.url = dataItem.filePath;
	            scope._assetLoader = new AssetLoader();
	            scope._assetLoader.addEventListener(Event$1.COMPLETE, this, scope._loadQueuedAssetItem);
	            scope._assetLoader.load(scope._urlRequest);
	        },

	        _regTexture: function (texture) {
	            if (texture.isAsset) {
	                this._regedTextures[texture.id] = texture;
	            }
	        },

	        _unregTexture: function (texture) {
	            delete this._regedTextures[texture.id];
	        },

	        getTextureByID: function (id) {
	            let texture = this._regedTextures[id];
	            if (!texture) {
	                //设置默认图片
	                let width = 256;
	                let height = 256;
	                let color = new THREE.Color(0xff0000);

	                var size = width * height;
	                var data = new Uint8Array(3 * size);
	                var r = Math.floor(color.r * 255);
	                var g = Math.floor(color.g * 255);
	                var b = Math.floor(color.b * 255);
	                for (var i = 0; i < size; i++) {
	                    var stride = i * 3;
	                    data[stride] = r;
	                    data[stride + 1] = g;
	                    data[stride + 2] = b;
	                }
	                let dataTexture = new THREE.DataTexture(data, width, height, THREE.RGBFormat);
	                dataTexture.needsUpdate = true;

	                texture = new Texture;
	                texture.id = id;
	                texture._imp = dataTexture;
	                texture.isCubeTexture = false;
	            }
	            return texture;
	        },

	        _regMaterial: function (material) {
	            if (material.isMaterial) {
	                this._regedMaterials[material.id] = material;
	            }
	        },

	        _unregMaterial: function (material) {
	            delete this._regedMaterials[material.id];
	        },

	        getMaterialByID: function (id) {
	            return this._regedMaterials[id];
	        },

	        _regMesh: function (model) {
	            this._regedModels[model.id] = model;
	        },

	        _unregMesh: function (model) {
	            delete this._regedModels[model.id];
	        },

	        getMeshByID: function (id) {
	            return this._regedModels[id] || new THREE.BoxBufferGeometry(100, 100, 100);
	        },

	        _regAudioClip: function (audioClip) {
	            if (audioClip.isAsset) {
	                this._regedAudioClips[audioClip.id] = audioClip;
	            }
	        },

	        _unregAudioClip: function (audioClip) {
	            delete this._regedAudioClips[audioClip.id];
	        },

	        getAudioClipByID: function (id) {
	            let audioClip = this._regedAudioClips[id];
	            return audioClip;
	        },

	        //ntive threejs asset
	        _regNativeTexture: function (texture, path) {
	            this._regedNativeTextures[path] = texture;
	        },

	        _unregNativeTexture: function (texture) {
	            this._regedNativeTextures[texture.id] = texture;
	        },

	        _getNativeTexture: function (id) {
	            return this._regedNativeTextures[id];
	        },

	        _regNativeMaterial: function (material) {
	            this._regedNativeMaterials[material.id] = texture;
	        },

	        _unregNativeMaterial: function (material) {
	            delete this._regedNativeMaterials[material.id];
	        },

	        _getNativeMaterial: function (id) {
	            return this._regedNativeMaterials[id];
	        },

	        _regNativeMesh: function (mesh, path) {
	            this._regedNativeMeshs[path] = mesh;
	        },

	        _unregNativeMesh: function (path) {
	            delete this._regedNativeMeshs[path];
	        },

	        _getNativeMesh: function (path) {
	            return this._regedNativeMeshs[path];
	        },

	        _regNativeAudioClip: function (audio, path) {
	            this._regedNativeAudioClips[path] = audio;
	        },

	        _unregNativeAudioClip: function (audioClip) {
	            delete this._regedNativeAudioClips[audioClip];
	        },

	        _getNativeAudioClip: function (path) {
	            return this._regedNativeAudioClips[path];
	        },

	        removeAsset: function (item)
	        {
	            if(item instanceof Mesh)
	            {
	                item.dispatchEvent({type:Event$1.REMOVEASSET});
	                this._unregMesh(item);
	                // item._imp.dispose();
	                this._disposeNodeInMesh(item._imp, false);  //处理包括子节点的模型节点
	                item = null;
	            }
	            else if(item instanceof AudioClip)
	            {
	                item.dispatchEvent({type:Event$1.REMOVEASSET});
	                this._unregAudioClip(item);
	                item = null;
	            }
	            else if(item instanceof Texture)
	            {
	                item.dispatchEvent({type:Event$1.REMOVEASSET});
	                this._unregTexture(item);
	                item._imp.dispose();
	                item = null;

	                //天空盒处理
	            }
	            else if(item instanceof Material)
	            {
	                item.dispatchEvent({type:Event$1.REMOVEASSET});
	                this._unregMaterial(item);
	                item._imp.dispose();
	                item = null;
	                //资源列表删除资源
	            }
	        },

	        getAssetByID: function (id)
	        {
	            if(this._regedTextures[id]) return this._regedTextures[id];
	            if(this._regedMaterials[id]) return this._regedMaterials[id];
	            if(this._regedModels[id]) return this._regedModels[id];
	            if(this._regedAudioClips[id]) return this._regedAudioClips[id];
	            return null;
	        },

	        //卸载所有未引用的资源
	        unloadUnusedAssets: function ()
	        {
	            for(var key in this._regedModels)
	            {
	                var mesh = this._regedModels[key];
	                var used = isUsed(mesh);
	                if(!used)
	                    this._disposeNodeInMesh(mesh._imp, true);
	            }

	            for(var key in this._regedMaterials)
	            {
	                var material = this._regedMaterials[key];
	                var used = isUsed(material);
	                if(!used)
	                    material._imp.dispose();
	            }

	            for(var key in this._regedTextures)
	            {
	                var texure = this._regedTextures[key];
	                var used = isUsed(texure);
	                if(!used)
	                    texure._imp.dispose();
	            }

	            function isUsed( asset ){
	                let isUsed = false;
	                if(asset._listeners != undefined)
	                {
	                    if(asset._listeners.removeAsset != undefined)
	                    {
	                        if(asset._listeners.removeAsset.length > 0)
	                        {
	                            isUsed = true;
	                        }
	                    }
	                }
	                return isUsed;
	            }
	        },

	        //卸载模型资源，isDisposeMat是否卸载模型材质
	        _disposeNodeInMesh: function (threeNode, isDisposeMat)
	        {
	            // console.log("------------------------_disposeNodeInMesh" + threeNode.name);
	            disposeSingleNode(threeNode, isDisposeMat);
	            for(let index in threeNode.children)
	            {
	                let child = threeNode.children[index];
	                this._disposeNodeInMesh(child, isDisposeMat);
	            }

	            //卸载单个模型和材质
	            function disposeSingleNode (node, isDisposeMat)
	            {
	                if (node instanceof THREE.Mesh || node instanceof THREE.SkinnedMesh)
	                {
	                    if (node.geometry)
	                    {
	                        // console.log("disposeSingleNode_geometry: " + node.geometry.name);
	                        node.geometry.dispose ();
	                    }

	                    if (node.material && isDisposeMat)
	                    {
	                        if(node.material instanceof THREE.MeshStandardMaterial)
	                        {
	                            for(var key in node.material)
	                            {
	                                if(node.material[key] instanceof THREE.Texture)
	                                {
	                                    // console.log("disposeSingleNode_material: " + node.material.name);
	                                    node.material[key].dispose();
	                                }
	                            }
	                            // console.log("disposeSingleNode_material: " + node.material.name);
	                            node.material.dispose ();
	                        }
	                    }
	                }
	            }
	        }

	    }
	);

	AssetManager._CreateBoxMesh = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__boxImp;
	    let info = {
	        filePath : 'default_box.mesh',
	        id : 'default_box'
	    };
	    AssetManager.instance._handleNewAsset( result , info);
	    // AssetManager.instance._regedModels['default_box'] = result;
	}();

	AssetManager._CreateSphereMesh = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__sphereImp;
	    let info = {
	        filePath : 'default_sphere.mesh',
	        id : 'default_sphere'
	    };
	    AssetManager.instance._handleNewAsset( result , info);
	    // AssetManager.instance._regedModels['default_sphere'] = result;
	}();

	AssetManager._CreateCylinderMesh = function(){
	    let result = new Mesh();
	    result._imp = Mesh.__cylindeImp;
	    let info = {
	        filePath : 'default_cylinder.mesh',
	        id : 'default_cylinder'
	    };
	    AssetManager.instance._handleNewAsset( result , info);
	    // AssetManager.instance._regedModels['default_cylinder'] = result;
	}();

	function SceneManager() {
	}

	SceneManager._activeScene = null;

	SceneManager.GetActiveScene = function (){
	    return this._activeScene;
	};

	SceneManager.CreateScene = function(){
	    let newScene = new Scene;
	    SceneManager._activeScene = newScene;
	    newScene._init();
	    return newScene;
	};

	SceneManager.FindGameObjectByID = function(id) {
	    let rootObj = this.GetActiveScene()._rootGO;

	    let trans = findChild(id, rootObj.transform);
	    if(trans)
	        return trans.gameObject;
	    return null;

	    function findChild( id , transform){
	        if(id === transform.id){
	            return transform;
	        }
	        if( transform.childCount > 0 ){
	            for(let i=0 ; i< transform.childCount ; ++i){
	                let trans = findChild( id , transform._children[i] );
	                if(trans){
	                    return trans;
	                }
	            }
	        }
	    }
	};

	SceneManager.UnloadSceneAsync = function(scene)
	{
	    //移除天空盒
	    scene._imp.background = null;
	    if(scene == SceneManager.GetActiveScene())
	        RenderSettings.instance.skyBoxTexture = null;

	    BaseObject.Destroy(scene._rootGO.transform);
	    // //移除节点
	    // unloadGameobject(scene._rootGO.transform);
	    //
	    // //移除节点与其下所有子节点
	    // function unloadGameobject( transform ){
	    //     //移除自身组件
	    //     for(let index in transform.gameObject._compoents)
	    //     {
	    //         let compoent = transform.gameObject._compoents[index];
	    //         compoent._handleDestroy();
	    //     }
	    //
	    //     //遍历子节点调用移除
	    //     var lstDeleteChild = [];
	    //     for(let index in transform._children)
	    //     {
	    //         let child = transform._children[index];
	    //         lstDeleteChild.push(child);
	    //     }
	    //
	    //     for(let index in lstDeleteChild)
	    //     {
	    //         let child = lstDeleteChild[index];
	    //         unloadGameobject(child);
	    //     }
	    //
	    //     //若果有父节点，则通过父节删除该节点
	    //     if(transform.parent)
	    //     {
	    //         transform.parent._removeChild(transform);
	    //         // console.log("name:" +transform.parent.gameObject.name +"---removeChild:" + transform.gameObject.name);
	    //     }
	    // }
	};

	SceneManager.sceneLoaded = new EventDispatcher();
	SceneManager.sceneLoadProgress = new EventDispatcher();

	SceneManager._instance = new SceneManager();

	Object.defineProperty(SceneManager, "instance",{
	    get:function () {
	        return SceneManager._instance;
	    }
	});

	SceneManager.loadFile = function(sceneURL, mode){
	    let jsonLoader = new THREE.FileLoader(THREE.DefaultLoadingManager);
	    let scope = this;
	    let newScene = {};
	    jsonLoader.load(sceneURL, function(text){
	        let json = null;
	        try {
	            json = JSON.parse( text );
	        } catch ( error ) {
	            console.error('SceneManager: Can\'t load scene: ' + sceneURL + '.', error.message);
	            return;
	        }

	        AssetManager.instance.setProgressFunc(function(ratio){
	            let progressEvent = {type:ProgressEvent.PROGRESS, data:ratio};
	            scope.sceneLoadProgress.dispatchEvent(progressEvent);

	            if(ratio >= 1)
	            {
	                //construct the scene
	                newScene = scope.loadJson( json );

	                //and notify listeners
	                let completeEvent = {type:Event$1.COMPLETE, data:newScene};
	                scope.sceneLoadProgress.dispatchEvent(completeEvent);
	            }
	        });

	        AssetManager.instance.parseAssetData(json.ext_resource);// TODO
	    });
	    return newScene;
	};

	SceneManager.loadJson = function( Json ){
	    //let log = 0;
	    let newScene = this.CreateScene();
	    let scope = this;
	    let loadScene = (
	        function _loadScene( Json ){

	            let json =  Json  ;
	            if(json == null ){
	                console.error("the file is null!");
	                return null;
	            }

	            let activeScene = newScene;
	            let impScene = activeScene._imp;

	            impScene.name = json.meta.name;

	            let scene_attribute = json.scene_attribute || null;

	            //skybox
	            if( scene_attribute != null ) {

	                if ( scene_attribute.skyBoxTextureID != null )
	                {
	                    //添加天空盒
	                    let cubeTexture = AssetManager.instance.getTextureByID(scene_attribute.skyBoxTextureID);
	                    RenderSettings.instance.skyBoxTexture = cubeTexture || null;
	                } else {
	                    let skyBoxColor = scene_attribute.skyBoxColor;
	                    if(skyBoxColor != undefined)
	                    {
	                        RenderSettings.instance.skyBoxColor = new Color(skyBoxColor[0], skyBoxColor[1], skyBoxColor[2]);
	                    }
	                    RenderSettings.instance.skyBoxTexture = null;
	                }

	                if( scene_attribute.ambientLightColor !== undefined ){
	                    let ambientColor = scene_attribute.ambientLightColor;
	                    RenderSettings.instance.ambientLightColor = new Color(ambientColor[0],ambientColor[1],ambientColor[2]);
	                }

	                if( scene_attribute.ambientLightIntensity !== undefined )
	                    RenderSettings.instance.ambientLightIntensity = scene_attribute.ambientLightIntensity;

	                if( scene_attribute.fogType !== undefined )
	                    RenderSettings.instance.fogType = scene_attribute.fogType;

	                if( scene_attribute.fogStart !== undefined )
	                    RenderSettings.instance.fogStart = scene_attribute.fogStart;

	                if( scene_attribute.fogEnd !== undefined )
	                    RenderSettings.instance.fogEnd = scene_attribute.fogEnd;

	                if( scene_attribute.fogColor !== undefined ){
	                    let fogColor = scene_attribute.fogColor;
	                    RenderSettings.instance.fogColor = new Color(fogColor[0],fogColor[1],fogColor[2]);
	                }

	                if( scene_attribute.fogDensity !== undefined )
	                    RenderSettings.instance.fogDensity = scene_attribute.fogDensity;
	            }

	            let tobePerfectGameObjects = [];

	            let gameObjData;
	            let componentClass;
	            let component;
	            for(var nodeIndex = 0 ; nodeIndex < json.nodes.length ; ++nodeIndex ){
	                let gameObject = new GameObject(true);
	                gameObjData = json.nodes[nodeIndex];
	                gameObject._initializeWithAttributes(gameObjData.data);
	                let components = gameObjData.data.components;

	                let transformIndex = 0 ;
	                let cameraIndex = 0 ;
	                let physicsCom = [] ;
	                for ( let i = 0 ; i< components.length ; ++i ) {
	                    let componentData = components[i];

	                    if( componentData.type != 'Rigidbody' && componentData.type != 'BoxCollider' ){
	                    	transformIndex = i;

	                    	try {
		                        componentClass = Attributes.prototype._getTypeByName( componentData.type );
		                        component = gameObject.addComponent(componentClass);
		                        component._initializeWithAttributes(componentData.data);
		                    } catch (e) {

		                        console.error("add component "+ componentData.type + " has error when load scene:" ,  e  );
		                        console.log( "node's data:" , json.nodes[nodeIndex] , "component data:" , componentData );
		                    }

	                    }else{
	                    	physicsCom.push( componentData );
	                    }

	                }

	                let gameObjectSign = {
	                	g: gameObject,
	                	c: physicsCom
	                }
	                tobePerfectGameObjects.push( gameObjectSign );
	            }

	            Attributes.prototype._solveLink();

	         	function delayLoadCompo(){
	         		// tobe solve others component
		            for( let i = 0 ; i < tobePerfectGameObjects.length ; ++i ){
		            	let sign = tobePerfectGameObjects[i];

		            	let go = sign.g;
		            	let coms = sign.c;

		            	for ( let i = 0 ; i< coms.length ; ++i ) {
		                    let componentData = coms[i];

		                    try {
		                    	componentClass = Attributes.prototype._getTypeByName( componentData.type );
			                    component = go.addComponent(componentClass);
			                    component._initializeWithAttributes(componentData.data);
			                } catch (e) {
			                	console.error("add component "+ componentData.type + " has error when load scene:" ,  e  );
			                	console.log( "node's data:" ,  go.name  , "component data:" , componentData );
			                }
		                }
		            }
		            Attributes.prototype._solveLink();

		            //call init functions
		            try {
		                Application.instance.scriptManagerInst._onInitialize();
		            } catch (e) {

		            	console.error("this is an error when running scripts Initialize:" ,  e  );
		            }

		            try {
		                Application.instance.scriptManagerInst._onPostInitialize();
		            } catch (e) {

		            	console.error("this is an error when running scripts PostInitialize:" ,  e  );
		            }
	         	}

	         	setTimeout( delayLoadCompo , 20 );

	            return activeScene;
	        });

	    try {
	        newScene = loadScene(Json);
	    } catch ( error ) {
	        console.error( 'SceneManager: Can\'t load scene: there are mismatched json format,', error.message );
	        return;
	    }
	    let completeEvent = {type:Event$1.COMPLETE, data:newScene};
	    scope.sceneLoadProgress.dispatchEvent(completeEvent);
	    return newScene;
	};

	/**
	 * @author takahiro / https://github.com/takahirox
	 *
	 * CCD Algorithm
	 *  - https://sites.google.com/site/auraliusproject/ccd-algorithm
	 *
	 * // ik parameter example
	 * //
	 * // target, effector, index in links are bone index in skeleton.bones.
	 * // the bones relation should be
	 * // <-- parent                                  child -->
	 * // links[ n ], links[ n - 1 ], ..., links[ 0 ], effector
	 * iks = [ {
	 *	target: 1,
	 *	effector: 2,
	 *	links: [ { index: 5, limitation: new THREE.Vector3( 1, 0, 0 ) }, { index: 4, enabled: false }, { index : 3 } ],
	 *	iteration: 10,
	 *	minAngle: 0.0,
	 *	maxAngle: 1.0,
	 * } ];
	 */

	var CCDIKSolver = ( function () {

		/**
		 * @param {THREE.SkinnedMesh} mesh
		 * @param {Array<Object>} iks
		 */
		function CCDIKSolver( mesh, iks, skeleton) {

			this.mesh = mesh;
	        this.skeleton = skeleton;
			this.iks = iks || [];

			this._valid();

		}

		CCDIKSolver.prototype = {

			constructor: CCDIKSolver,

			/**
			 * Update IK bones.
			 *
			 * @return {THREE.CCDIKSolver}
			 */
			update: function () {

				var q = new THREE.Quaternion();
				var targetPos = new THREE.Vector3();
				var targetVec = new THREE.Vector3();
				var effectorPos = new THREE.Vector3();
				var effectorVec = new THREE.Vector3();
				var linkPos = new THREE.Vector3();
				var invLinkQ = new THREE.Quaternion();
				var linkScale = new THREE.Vector3();
				var axis = new THREE.Vector3();
				var vector = new THREE.Vector3();

				return function update() {

					// var bones = this.mesh.skeleton.bones;
	                var bones = (this.skeleton.bones) ? this.skeleton.bones : this.mesh.skeleton.bones;
					var iks = this.iks;

					// for reference overhead reduction in loop
					var math = Math;

					for ( var i = 0, il = iks.length; i < il; i++ ) {

						var ik = iks[ i ];
						var effector = bones[ ik.effector ];
						var target = bones[ ik.target ];

						// don't use getWorldPosition() here for the performance
						// because it calls updateMatrixWorld( true ) inside.
						targetPos.setFromMatrixPosition( target.matrixWorld );

						var links = ik.links;
						var iteration = ik.iteration !== undefined ? ik.iteration : 1;

						for ( var j = 0; j < iteration; j++ ) {

							var rotated = false;

							for ( var k = 0, kl = links.length; k < kl; k++ ) {

								var link = bones[ links[ k ].index ];

								// skip this link and following links.
								// this skip is used for MMD performance optimization.
								if ( links[ k ].enabled === false ) break;

								var limitation = links[ k ].limitation;
								var rotationMin = links[ k ].rotationMin;
								var rotationMax = links[ k ].rotationMax;

								// don't use getWorldPosition/Quaternion() here for the performance
								// because they call updateMatrixWorld( true ) inside.
								link.matrixWorld.decompose( linkPos, invLinkQ, linkScale );
								invLinkQ.inverse();
								effectorPos.setFromMatrixPosition( effector.matrixWorld );

								// work in link world
								effectorVec.subVectors( effectorPos, linkPos );
								effectorVec.applyQuaternion( invLinkQ );
								effectorVec.normalize();

								targetVec.subVectors( targetPos, linkPos );
								targetVec.applyQuaternion( invLinkQ );
								targetVec.normalize();

								var angle = targetVec.dot( effectorVec );

								if ( angle > 1.0 ) {

									angle = 1.0;

								} else if ( angle < -1.0 ) {

									angle = -1.0;

								}

								angle = math.acos( angle );

								// skip if changing angle is too small to prevent vibration of bone
								// Refer to http://www20.atpages.jp/katwat/three.js_r58/examples/mytest37/mmd.three.js
								if ( angle < 1e-5 ) continue;

								if ( ik.minAngle !== undefined && angle < ik.minAngle ) {

									angle = ik.minAngle;

								}

								if ( ik.maxAngle !== undefined && angle > ik.maxAngle ) {

									angle = ik.maxAngle;

								}

								axis.crossVectors( effectorVec, targetVec );
								axis.normalize();

								q.setFromAxisAngle( axis, angle );
								link.quaternion.multiply( q );

								// TODO: re-consider the limitation specification
								if ( limitation !== undefined ) {

									var c = link.quaternion.w;

									if ( c > 1.0 ) c = 1.0;

									var c2 = math.sqrt( 1 - c * c );
									link.quaternion.set( limitation.x * c2,
									                     limitation.y * c2,
									                     limitation.z * c2,
									                     c );

								}

								if ( rotationMin !== undefined ) {

									link.rotation.setFromVector3(
										link.rotation
											.toVector3( vector )
											.max( rotationMin ) );

								}

								if ( rotationMax !== undefined ) {

									link.rotation.setFromVector3(
										link.rotation
											.toVector3( vector )
											.min( rotationMax ) );

								}

								link.updateMatrixWorld( true );

								rotated = true;

							}

							if ( ! rotated ) break;

						}

					}

					return this;

				};

			}(),

			/**
			 * Creates Helper
			 *
			 * @return {CCDIKHelper}
			 */
			createHelper: function () {

				return new CCDIKHelper( this.mesh, this.mesh.geometry.userData.MMD.iks );

			},

			// private methods

			_valid: function () {

				var iks = this.iks;
				// var bones = this.mesh.skeleton.bones;
	            var bones = (this.skeleton.bones) ? this.skeleton.bones : this.mesh.skeleton.bones;
				for ( var i = 0, il = iks.length; i < il; i ++ ) {

					var ik = iks[ i ];
					var effector = bones[ ik.effector ];
					var links = ik.links;
					var link0, link1;

					link0 = effector;

					for ( var j = 0, jl = links.length; j < jl; j ++ ) {

						link1 = bones[ links[ j ].index ];

						if ( link0.parent !== link1 ) {

							console.warn( 'THREE.CCDIKSolver: bone ' + link0.name + ' is not the child of bone ' + link1.name );

						}

						link0 = link1;

					}

				}

			}

		};

		/**
		 * Visualize IK bones
		 *
		 * @param {SkinnedMesh} mesh
		 * @param {Array<Object>} iks
		 */
		function CCDIKHelper( mesh, iks ) {

			THREE.Object3D.call( this );

			this.root = mesh;
			this.iks = iks || [];

			this.matrix.copy( mesh.matrixWorld );
			this.matrixAutoUpdate = false;

			this.sphereGeometry = new THREE.SphereBufferGeometry( 0.25, 16, 8 );

			this.targetSphereMaterial = new THREE.MeshBasicMaterial( {
				color: new THREE.Color( 0xff8888 ),
				depthTest: false,
				depthWrite: false,
				transparent: true
			} );

			this.effectorSphereMaterial = new THREE.MeshBasicMaterial( {
				color: new THREE.Color( 0x88ff88 ),
				depthTest: false,
				depthWrite: false,
				transparent: true
			} );

			this.linkSphereMaterial = new THREE.MeshBasicMaterial( {
				color: new THREE.Color( 0x8888ff ),
				depthTest: false,
				depthWrite: false,
				transparent: true
			} );

			this.lineMaterial = new THREE.LineBasicMaterial( {
				color: new THREE.Color( 0xff0000 ),
				depthTest: false,
				depthWrite: false,
				transparent: true
			} );

			this._init();

		}

		CCDIKHelper.prototype = Object.assign( Object.create( THREE.Object3D.prototype ), {

			constructor: CCDIKHelper,

			/**
			 * Updates IK bones visualization.
			 */
			updateMatrixWorld: function () {

				var matrix = new THREE.Matrix4();
				var vector = new THREE.Vector3();

				function getPosition( bone, matrixWorldInv ) {

					return vector
						.setFromMatrixPosition( bone.matrixWorld )
						.applyMatrix4( matrixWorldInv );

				}

				function setPositionOfBoneToAttributeArray( array, index, bone, matrixWorldInv ) {

					var v = getPosition( bone, matrixWorldInv );

					array[ index * 3 + 0 ] = v.x;
					array[ index * 3 + 1 ] = v.y;
					array[ index * 3 + 2 ] = v.z;

				}

				return function updateMatrixWorld( force ) {

					var mesh = this.root;

					if ( this.visible ) {

						var offset = 0;

						var iks = this.iks;
						var bones = mesh.skeleton.bones;

						matrix.getInverse( mesh.matrixWorld );

						for ( var i = 0, il = iks.length; i < il; i ++ ) {

							var ik = iks[ i ];

							var targetBone = bones[ ik.target ];
							var effectorBone = bones[ ik.effector ];

							var targetMesh = this.children[ offset ++ ];
							var effectorMesh = this.children[ offset ++ ];

							targetMesh.position.copy( getPosition( targetBone, matrix ) );
							effectorMesh.position.copy( getPosition( effectorBone, matrix ) );

							for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {

								var link = ik.links[ j ];
								var linkBone = bones[ link.index ];

								var linkMesh = this.children[ offset ++ ];

								linkMesh.position.copy( getPosition( linkBone, matrix ) );

							}

							var line = this.children[ offset ++ ];
							var array = line.geometry.attributes.position.array;

							setPositionOfBoneToAttributeArray( array, 0, targetBone, matrix );
							setPositionOfBoneToAttributeArray( array, 1, effectorBone, matrix );

							for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {

								var link = ik.links[ j ];
								var linkBone = bones[ link.index ];
								setPositionOfBoneToAttributeArray( array, j + 2, linkBone, matrix );

							}

							line.geometry.attributes.position.needsUpdate = true;

						}

					}

					this.matrix.copy( mesh.matrixWorld );

					THREE.Object3D.prototype.updateMatrixWorld.call( this, force );

				};

			}(),

			// private method

			_init: function () {

				var self = this;
				var iks = this.iks;

				function createLineGeometry( ik ) {

					var geometry = new THREE.BufferGeometry();
					var vertices = new Float32Array( ( 2 + ik.links.length ) * 3 );
					geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

					return geometry;

				}

				function createTargetMesh() {

					return new THREE.Mesh( self.sphereGeometry, self.targetSphereMaterial );

				}

				function createEffectorMesh() {

					return new THREE.Mesh( self.sphereGeometry, self.effectorSphereMaterial );

				}

				function createLinkMesh() {

					return new THREE.Mesh( self.sphereGeometry, self.linkSphereMaterial );

				}

				function createLine( ik ) {

					return new THREE.Line( createLineGeometry( ik ), self.lineMaterial );

				}

				for ( var i = 0, il = iks.length; i < il; i ++ ) {

					var ik = iks[ i ];

					this.add( createTargetMesh() );
					this.add( createEffectorMesh() );

					for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {

						this.add( createLinkMesh() );

					}

					this.add( createLine( ik ) );

				}

			}

		} );

		return CCDIKSolver;

	} )();

	/**
	 * @author takahiro / https://github.com/takahirox
	 *
	 * Dependencies
	 *  - Ammo.js https://github.com/kripken/ammo.js
	 *
	 * MMDPhysics calculates physics with Ammo(Bullet based JavaScript Physics engine)
	 * for MMD model loaded by THREE.MMDLoader.
	 *
	 * TODO
	 *  - Physics in Worker
	 */

	var MMDPhysics = ( function () {

		/**
		 * @param {THREE.SkinnedMesh} mesh
		 * @param {Array<Object>} rigidBodyParams
		 * @param {Array<Object>} (optional) constraintParams
		 * @param {Object} params - (optional)
		 * @param {Number} params.unitStep - Default is 1 / 65.
		 * @param {Integer} params.maxStepNum - Default is 3.
		 * @param {THREE.Vector3} params.gravity - Default is ( 0, - 9.8 * 10, 0 )
		 */
		function MMDPhysics( mesh, rigidBodyParams, constraintParams, params, skeleton) {

			if ( typeof Ammo === 'undefined' ) {

				throw new Error( 'THREE.MMDPhysics: Import ammo.js https://github.com/kripken/ammo.js' );

			}

			constraintParams = constraintParams || [];
			params = params || {};

			this.manager = new ResourceManager();

			this.mesh = mesh;
			this.skeleton = skeleton;

			/*
			 * I don't know why but 1/60 unitStep easily breaks models
			 * so I set it 1/65 so far.
			 * Don't set too small unitStep because
			 * the smaller unitStep can make the performance worse.
			 */
			this.unitStep = ( params.unitStep !== undefined ) ? params.unitStep : 1 / 65;
			this.maxStepNum = ( params.maxStepNum !== undefined ) ? params.maxStepNum : 3;
			this.gravity = new THREE.Vector3( 0, - 9.8 * 10, 0 );

			if ( params.gravity !== undefined ) this.gravity.copy( params.gravity );

			this.world = params.world !== undefined ? params.world : null; // experimental

			this.bodies = [];
			this.constraints = [];

			this._init( mesh, rigidBodyParams, constraintParams );

		}

		MMDPhysics.prototype = {

			constructor: MMDPhysics,

			/**
			 * Advances Physics calculation and updates bones.
			 *
			 * @param {Number} delta - time in second
			 * @return {THREE.MMDPhysics}
			 */
			update: function ( delta ) {

				var manager = this.manager;
				var mesh = this.mesh;

				// rigid bodies and constrains are for
				// mesh's world scale (1, 1, 1).
				// Convert to (1, 1, 1) if it isn't.

				var isNonDefaultScale = false;

				var position = manager.allocThreeVector3();
				var quaternion = manager.allocThreeQuaternion();
				var scale = manager.allocThreeVector3();

				mesh.matrixWorld.decompose( position, quaternion, scale );

				if ( scale.x !== 1 || scale.y !== 1 || scale.z !== 1 ) {

					isNonDefaultScale = true;

				}

				var parent;

				if ( isNonDefaultScale ) {

					parent = mesh.parent;

					if ( parent !== null ) mesh.parent = null;

					scale.copy( this.mesh.scale );

					mesh.scale.set( 1, 1, 1 );
					mesh.updateMatrixWorld( true );

				}

				// calculate physics and update bones

				this._updateRigidBodies();
				this._stepSimulation( delta );
				this._updateBones();

				// restore mesh if converted above

				if ( isNonDefaultScale ) {

					if ( parent !== null ) mesh.parent = parent;

					mesh.scale.copy( scale );

				}

				manager.freeThreeVector3( scale );
				manager.freeThreeQuaternion( quaternion );
				manager.freeThreeVector3( position );

				return this;

			},

			/**
			 * Resets rigid bodies transorm to current bone's.
			 *
			 * @return {THREE.MMDPhysics}
			 */
			reset: function () {

				for ( var i = 0, il = this.bodies.length; i < il; i++ ) {

					this.bodies[ i ].reset();

				}

				return this;

			},

			/**
			 * Warm ups Rigid bodies. Calculates cycles steps.
			 *
			 * @param {Integer} cycles
			 * @return {THREE.MMDPhysics}
			 */
			warmup: function ( cycles ) {

				for ( var i = 0; i < cycles; i++ ) {

					this.update( 1 / 60 );

				}

				return this;

			},

			/**
			 * Sets gravity.
			 *
			 * @param {THREE.Vector3} gravity
			 * @return {MMDPhysicsHelper}
			 */
			setGravity: function ( gravity ) {

				this.world.setGravity( new Ammo.btVector3( gravity.x, gravity.y, gravity.z ) );
				this.gravity.copy( gravity );

				return this;

			},

			/**
			 * Creates MMDPhysicsHelper
			 *
			 * @return {MMDPhysicsHelper}
			 */
			createHelper: function () {

				return new MMDPhysicsHelper( this.mesh, this );

			},

	        removePhysics: function () {
	            for ( let i = 0; i < this.bodies.length; i++ ) {
	                this.world.removeRigidBody(this.bodies[i].body);
	                Ammo.destroy(this.bodies[i].body);
	            }
	            this.bodies = [];

	            for ( let i = 0; i < this.constraints.length; i++ ) {
	                this.world.removeConstraint(this.constraints[i].constraint);
	                Ammo.destroy(this.constraints[i].constraint);
	            }
	            this.constraints = [];
	            Ammo.destroy(this.ammoConfig);
	            Ammo.destroy(this.ammoDispatcher);
	            Ammo.destroy(this.ammoCache);
	            Ammo.destroy(this.ammoSolver);
	            Ammo.destroy(this.world);
	        },

			// private methods

			_init: function ( mesh, rigidBodyParams, constraintParams ) {

				var manager = this.manager;

				// rigid body/constraint parameters are for
				// mesh's default world transform as position(0, 0, 0),
				// quaternion(0, 0, 0, 1) and scale(0, 0, 0)

				var parent = mesh.parent;

				if ( parent !== null ) parent = null;

				var currentPosition = manager.allocThreeVector3();
				var currentQuaternion = manager.allocThreeQuaternion();
				var currentScale = manager.allocThreeVector3();

				currentPosition.copy( mesh.position );
				currentQuaternion.copy( mesh.quaternion );
				currentScale.copy( mesh.scale );

				mesh.position.set( 0, 0, 0 );
				mesh.quaternion.set( 0, 0, 0, 1 );
				mesh.scale.set( 1, 1, 1 );

				mesh.updateMatrixWorld( true );

				if ( this.world === null ) {

					this.world = this._createWorld();
					this.setGravity( this.gravity );

				}

				//LJY 初始化RigidBodies
				this._initRigidBodies( rigidBodyParams );
				//LJY 初始化Constraints
				this._initConstraints( constraintParams );

				if ( parent !== null ) mesh.parent = parent;

				mesh.position.copy( currentPosition );
				mesh.quaternion.copy( currentQuaternion );
				mesh.scale.copy( currentScale );

				mesh.updateMatrixWorld( true );

				this.reset();

				manager.freeThreeVector3( currentPosition );
				manager.freeThreeQuaternion( currentQuaternion );
				manager.freeThreeVector3( currentScale );

			},

			_createWorld: function () {
				// var config = new Ammo.btDefaultCollisionConfiguration();
				// var dispatcher = new Ammo.btCollisionDispatcher( config );
				// var cache = new Ammo.btDbvtBroadphase();
				// var solver = new Ammo.btSequentialImpulseConstraintSolver();
				// var world = new Ammo.btDiscreteDynamicsWorld( dispatcher, cache, solver, config );

	            this.ammoConfig = new Ammo.btDefaultCollisionConfiguration();
	            this.ammoDispatcher = new Ammo.btCollisionDispatcher( this.ammoConfig );
	            this.ammoCache = new Ammo.btDbvtBroadphase();
	            this.ammoSolver = new Ammo.btSequentialImpulseConstraintSolver();
	            var world = new Ammo.btDiscreteDynamicsWorld( this.ammoDispatcher, this.ammoCache, this.ammoSolver, this.ammoConfig );

				return world;

			},

			_initRigidBodies: function ( rigidBodies ) {

				for ( var i = 0, il = rigidBodies.length; i < il; i++ ) {

					this.bodies.push( new RigidBody(
						this.mesh, this.world, rigidBodies[ i ], this.manager, this.skeleton ) );

				}

			},

			_initConstraints: function ( constraints ) {

				for ( var i = 0, il = constraints.length; i < il; i++ ) {

					var params = constraints[ i ];
					var bodyA = this.bodies[ params.rigidBodyIndex1 ];
					var bodyB = this.bodies[ params.rigidBodyIndex2 ];
					this.constraints.push( new Constraint(
						this.mesh, this.world, bodyA, bodyB, params, this.manager ) );

				}



			},


			_stepSimulation: function ( delta ) {

				var unitStep = this.unitStep;
				var stepTime = delta;
				var maxStepNum = ( ( delta / unitStep ) | 0 ) + 1;

				if ( stepTime < unitStep ) {

					stepTime = unitStep;
					maxStepNum = 1;

				}

				if ( maxStepNum > this.maxStepNum ) {

					maxStepNum = this.maxStepNum;

				}

				this.world.stepSimulation( stepTime, maxStepNum, unitStep );

			},

			_updateRigidBodies: function () {

				for ( var i = 0, il = this.bodies.length; i < il; i++ ) {

					this.bodies[ i ].updateFromBone();

				}

			},

			_updateBones: function () {

				for ( var i = 0, il = this.bodies.length; i < il; i++ ) {

					this.bodies[ i ].updateBone();

				}

			}

		};

		/**
		 * This manager's responsibilies are
		 *
		 * 1. manage Ammo.js and Three.js object resources and
		 *    improve the performance and the memory consumption by
		 *    reusing objects.
		 *
		 * 2. provide simple Ammo object operations.
		 */
		function ResourceManager() {

			// for Three.js
			this.threeVector3s = [];
			this.threeMatrix4s = [];
			this.threeQuaternions = [];
			this.threeEulers = [];

			// for Ammo.js
			this.transforms = [];
			this.quaternions = [];
			this.vector3s = [];

		}

		ResourceManager.prototype = {

			constructor: ResourceManager,

			allocThreeVector3: function () {

				return ( this.threeVector3s.length > 0 )
					? this.threeVector3s.pop()
					: new THREE.Vector3();

			},

			freeThreeVector3: function ( v ) {

				this.threeVector3s.push( v );

			},

			allocThreeMatrix4: function () {

				return ( this.threeMatrix4s.length > 0 )
					? this.threeMatrix4s.pop()
					: new THREE.Matrix4();

			},

			freeThreeMatrix4: function ( m ) {

				this.threeMatrix4s.push( m );

			},

			allocThreeQuaternion: function () {

				return ( this.threeQuaternions.length > 0 )
					? this.threeQuaternions.pop()
					: new THREE.Quaternion();

			},

			freeThreeQuaternion: function ( q ) {

				this.threeQuaternions.push( q );

			},

			allocThreeEuler: function () {

				return ( this.threeEulers.length > 0 )
					? this.threeEulers.pop()
					: new THREE.Euler();

			},

			freeThreeEuler: function ( e ) {

				this.threeEulers.push( e );

			},

			allocTransform: function () {

				return ( this.transforms.length > 0 )
					? this.transforms.pop()
					: new Ammo.btTransform();

			},

			freeTransform: function ( t ) {

				this.transforms.push( t );

			},

			allocQuaternion: function () {

				return ( this.quaternions.length > 0 )
					? this.quaternions.pop()
					: new Ammo.btQuaternion();

			},

			freeQuaternion: function ( q ) {

				this.quaternions.push( q );

			},

			allocVector3: function () {

				return ( this.vector3s.length > 0 )
					? this.vector3s.pop()
					: new Ammo.btVector3();

			},

			freeVector3: function ( v ) {

				this.vector3s.push( v );

			},

			setIdentity: function ( t ) {

				t.setIdentity();

			},

			getBasis: function ( t ) {

				var q = this.allocQuaternion();
				t.getBasis().getRotation( q );
				return q;

			},

			getBasisAsMatrix3: function ( t ) {

				var q = this.getBasis( t );
				var m = this.quaternionToMatrix3( q );
				this.freeQuaternion( q );
				return m;

			},

			getOrigin: function( t ) {

				return t.getOrigin();

			},

			setOrigin: function( t, v ) {

				t.getOrigin().setValue( v.x(), v.y(), v.z() );

			},

			copyOrigin: function( t1, t2 ) {

				var o = t2.getOrigin();
				this.setOrigin( t1, o );

			},

			setBasis: function( t, q ) {

				t.setRotation( q );

			},

			setBasisFromMatrix3: function( t, m ) {

				var q = this.matrix3ToQuaternion( m );
				this.setBasis( t, q );
				this.freeQuaternion( q );

			},

			setOriginFromArray3: function ( t, a ) {

				t.getOrigin().setValue( a[ 0 ], a[ 1 ], a[ 2 ] );

			},

			setOriginFromThreeVector3: function ( t, v ) {

				t.getOrigin().setValue( v.x, v.y, v.z );

			},

			setBasisFromArray3: function ( t, a ) {

				var thQ = this.allocThreeQuaternion();
				var thE = this.allocThreeEuler();
				thE.set( a[ 0 ], a[ 1 ], a[ 2 ] );
				this.setBasisFromThreeQuaternion( t, thQ.setFromEuler( thE ) );

				this.freeThreeEuler( thE );
				this.freeThreeQuaternion( thQ );

			},

			setBasisFromThreeQuaternion: function ( t, a ) {

				var q = this.allocQuaternion();

				q.setX( a.x );
				q.setY( a.y );
				q.setZ( a.z );
				q.setW( a.w );
				this.setBasis( t, q );

				this.freeQuaternion( q );

			},

			multiplyTransforms: function ( t1, t2 ) {

				var t = this.allocTransform();
				this.setIdentity( t );

				var m1 = this.getBasisAsMatrix3( t1 );
				var m2 = this.getBasisAsMatrix3( t2 );

				var o1 = this.getOrigin( t1 );
				var o2 = this.getOrigin( t2 );

				var v1 = this.multiplyMatrix3ByVector3( m1, o2 );
				var v2 = this.addVector3( v1, o1 );
				this.setOrigin( t, v2 );

				var m3 = this.multiplyMatrices3( m1, m2 );
				this.setBasisFromMatrix3( t, m3 );

				this.freeVector3( v1 );
				this.freeVector3( v2 );

				return t;

			},

			inverseTransform: function ( t ) {

				var t2 = this.allocTransform();

				var m1 = this.getBasisAsMatrix3( t );
				var o = this.getOrigin( t );

				var m2 = this.transposeMatrix3( m1 );
				var v1 = this.negativeVector3( o );
				var v2 = this.multiplyMatrix3ByVector3( m2, v1 );

				this.setOrigin( t2, v2 );
				this.setBasisFromMatrix3( t2, m2 );

				this.freeVector3( v1 );
				this.freeVector3( v2 );

				return t2;

			},

			multiplyMatrices3: function ( m1, m2 ) {

				var m3 = [];

				var v10 = this.rowOfMatrix3( m1, 0 );
				var v11 = this.rowOfMatrix3( m1, 1 );
				var v12 = this.rowOfMatrix3( m1, 2 );

				var v20 = this.columnOfMatrix3( m2, 0 );
				var v21 = this.columnOfMatrix3( m2, 1 );
				var v22 = this.columnOfMatrix3( m2, 2 );

				m3[ 0 ] = this.dotVectors3( v10, v20 );
				m3[ 1 ] = this.dotVectors3( v10, v21 );
				m3[ 2 ] = this.dotVectors3( v10, v22 );
				m3[ 3 ] = this.dotVectors3( v11, v20 );
				m3[ 4 ] = this.dotVectors3( v11, v21 );
				m3[ 5 ] = this.dotVectors3( v11, v22 );
				m3[ 6 ] = this.dotVectors3( v12, v20 );
				m3[ 7 ] = this.dotVectors3( v12, v21 );
				m3[ 8 ] = this.dotVectors3( v12, v22 );

				this.freeVector3( v10 );
				this.freeVector3( v11 );
				this.freeVector3( v12 );
				this.freeVector3( v20 );
				this.freeVector3( v21 );
				this.freeVector3( v22 );

				return m3;

			},

			addVector3: function( v1, v2 ) {

				var v = this.allocVector3();
				v.setValue( v1.x() + v2.x(), v1.y() + v2.y(), v1.z() + v2.z() );
				return v;

			},

			dotVectors3: function( v1, v2 ) {

				return v1.x() * v2.x() + v1.y() * v2.y() + v1.z() * v2.z();

			},

			rowOfMatrix3: function( m, i ) {

				var v = this.allocVector3();
				v.setValue( m[ i * 3 + 0 ], m[ i * 3 + 1 ], m[ i * 3 + 2 ] );
				return v;

			},

			columnOfMatrix3: function( m, i ) {

				var v = this.allocVector3();
				v.setValue( m[ i + 0 ], m[ i + 3 ], m[ i + 6 ] );
				return v;

			},

			negativeVector3: function( v ) {

				var v2 = this.allocVector3();
				v2.setValue( -v.x(), -v.y(), -v.z() );
				return v2;

			},

			multiplyMatrix3ByVector3: function ( m, v ) {

				var v4 = this.allocVector3();

				var v0 = this.rowOfMatrix3( m, 0 );
				var v1 = this.rowOfMatrix3( m, 1 );
				var v2 = this.rowOfMatrix3( m, 2 );
				var x = this.dotVectors3( v0, v );
				var y = this.dotVectors3( v1, v );
				var z = this.dotVectors3( v2, v );

				v4.setValue( x, y, z );

				this.freeVector3( v0 );
				this.freeVector3( v1 );
				this.freeVector3( v2 );

				return v4;

			},

			transposeMatrix3: function( m ) {

				var m2 = [];
				m2[ 0 ] = m[ 0 ];
				m2[ 1 ] = m[ 3 ];
				m2[ 2 ] = m[ 6 ];
				m2[ 3 ] = m[ 1 ];
				m2[ 4 ] = m[ 4 ];
				m2[ 5 ] = m[ 7 ];
				m2[ 6 ] = m[ 2 ];
				m2[ 7 ] = m[ 5 ];
				m2[ 8 ] = m[ 8 ];
				return m2;

			},

			quaternionToMatrix3: function ( q ) {

				var m = [];

				var x = q.x();
				var y = q.y();
				var z = q.z();
				var w = q.w();

				var xx = x * x;
				var yy = y * y;
				var zz = z * z;

				var xy = x * y;
				var yz = y * z;
				var zx = z * x;

				var xw = x * w;
				var yw = y * w;
				var zw = z * w;

				m[ 0 ] = 1 - 2 * ( yy + zz );
				m[ 1 ] = 2 * ( xy - zw );
				m[ 2 ] = 2 * ( zx + yw );
				m[ 3 ] = 2 * ( xy + zw );
				m[ 4 ] = 1 - 2 * ( zz + xx );
				m[ 5 ] = 2 * ( yz - xw );
				m[ 6 ] = 2 * ( zx - yw );
				m[ 7 ] = 2 * ( yz + xw );
				m[ 8 ] = 1 - 2 * ( xx + yy );

				return m;

			},

			matrix3ToQuaternion: function( m ) {

				var t = m[ 0 ] + m[ 4 ] + m[ 8 ];
				var s, x, y, z, w;

				if( t > 0 ) {

					s = Math.sqrt( t + 1.0 ) * 2;
					w = 0.25 * s;
					x = ( m[ 7 ] - m[ 5 ] ) / s;
					y = ( m[ 2 ] - m[ 6 ] ) / s;
					z = ( m[ 3 ] - m[ 1 ] ) / s;

				} else if( ( m[ 0 ] > m[ 4 ] ) && ( m[ 0 ] > m[ 8 ] ) ) {

					s = Math.sqrt( 1.0 + m[ 0 ] - m[ 4 ] - m[ 8 ] ) * 2;
					w = ( m[ 7 ] - m[ 5 ] ) / s;
					x = 0.25 * s;
					y = ( m[ 1 ] + m[ 3 ] ) / s;
					z = ( m[ 2 ] + m[ 6 ] ) / s;

				} else if( m[ 4 ] > m[ 8 ] ) {

					s = Math.sqrt( 1.0 + m[ 4 ] - m[ 0 ] - m[ 8 ] ) * 2;
					w = ( m[ 2 ] - m[ 6 ] ) / s;
					x = ( m[ 1 ] + m[ 3 ] ) / s;
					y = 0.25 * s;
					z = ( m[ 5 ] + m[ 7 ] ) / s;

				} else {

					s = Math.sqrt( 1.0 + m[ 8 ] - m[ 0 ] - m[ 4 ] ) * 2;
					w = ( m[ 3 ] - m[ 1 ] ) / s;
					x = ( m[ 2 ] + m[ 6 ] ) / s;
					y = ( m[ 5 ] + m[ 7 ] ) / s;
					z = 0.25 * s;

				}

				var q = this.allocQuaternion();
				q.setX( x );
				q.setY( y );
				q.setZ( z );
				q.setW( w );
				return q;

			}

		};

		/**
		 * @param {THREE.SkinnedMesh} mesh
		 * @param {Ammo.btDiscreteDynamicsWorld} world
		 * @param {Object} params
		 * @param {ResourceManager} manager
		 */
		function RigidBody( mesh, world, params, manager, skeleton ) {

			this.mesh  = mesh;
			this.world = world;
			this.params = params;
			this.manager = manager;
			if(skeleton)
				this.skeleton = skeleton;
			else
	            this.skeleton = this.mesh.skeleton;

			this.body = null;
			this.bone = null;
			this.boneOffsetForm = null;
			this.boneOffsetFormInverse = null;

			this._init();

		}

		RigidBody.prototype = {

			constructor: MMDPhysics.RigidBody,

			/**
			 * Resets rigid body transform to the current bone's.
			 *
			 * @return {RigidBody}
			 */
			reset: function () {

				this._setTransformFromBone();
				return this;

			},

			/**
			 * Updates rigid body's transform from the current bone.
			 *
			 * @return {RidigBody}
			 */
			updateFromBone: function () {

				if ( this.params.boneIndex !== - 1 &&
					this.params.type === 0 ) {

					this._setTransformFromBone();

				}

				return this;

			},

			/**
			 * Updates bone from the current ridid body's transform.
			 *
			 * @return {RidigBody}
			 */
			updateBone: function () {

				if ( this.params.type === 0 ||
					this.params.boneIndex === - 1 ) {

					return this;

				}

				this._updateBoneRotation();

				if ( this.params.type === 1 ) {

					this._updateBonePosition();

				}

				this.bone.updateMatrixWorld( true );

				if ( this.params.type === 2 ) {

					this._setPositionFromBone();

				}

				return this;

			},

			// private methods

			_init: function () {

				function generateShape( p ) {

					switch( p.shapeType ) {

						case 0:
							return new Ammo.btSphereShape( p.width );

						case 1:
							return new Ammo.btBoxShape( new Ammo.btVector3( p.width, p.height, p.depth ) );

						case 2:
							return new Ammo.btCapsuleShape( p.width, p.height );

						default:
							throw 'unknown shape type ' + p.shapeType;

					}

				}

				var manager = this.manager;
				var params = this.params;
				var bones = this.skeleton.bones;
				var bone = ( params.boneIndex === - 1 )
					? new THREE.Bone()
					: bones[ params.boneIndex ];

				if(!bone)
				{
					console.log(params.boneIndex + "undefined");
	                return;
				}
				var shape = generateShape( params );
				var weight = ( params.type === 0 ) ? 0 : params.weight;
				var localInertia = manager.allocVector3();
				localInertia.setValue( 0, 0, 0 );

				if( weight !== 0 ) {

					shape.calculateLocalInertia( weight, localInertia );

				}

				var boneOffsetForm = manager.allocTransform();
				manager.setIdentity( boneOffsetForm );
				manager.setOriginFromArray3( boneOffsetForm, params.position );
				manager.setBasisFromArray3( boneOffsetForm, params.rotation );

				var vector = manager.allocThreeVector3();
				var boneForm = manager.allocTransform();
				manager.setIdentity( boneForm );
				manager.setOriginFromThreeVector3( boneForm, bone.getWorldPosition( vector ) );

				var form = manager.multiplyTransforms( boneForm, boneOffsetForm );
				var state = new Ammo.btDefaultMotionState( form );

				var info = new Ammo.btRigidBodyConstructionInfo( weight, state, shape, localInertia );
				info.set_m_friction( params.friction );
				info.set_m_restitution( params.restitution );

				var body = new Ammo.btRigidBody( info );

				if ( params.type === 0 ) {

					body.setCollisionFlags( body.getCollisionFlags() | 2 );

					/*
					 * It'd be better to comment out this line though in general I should call this method
					 * because I'm not sure why but physics will be more like MMD's
					 * if I comment out.
					 */
					body.setActivationState( 4 );

				}

				body.setDamping( params.positionDamping, params.rotationDamping );
				body.setSleepingThresholds( 0, 0 );

				this.world.addRigidBody( body, 1 << params.groupIndex, params.groupTarget );

				this.body = body;
				this.bone = bone;
				this.boneOffsetForm = boneOffsetForm;
				this.boneOffsetFormInverse = manager.inverseTransform( boneOffsetForm );

				manager.freeVector3( localInertia );
				manager.freeTransform( form );
				manager.freeTransform( boneForm );
				manager.freeThreeVector3( vector );

			},

			_getBoneTransform: function () {

				var manager = this.manager;
				var p = manager.allocThreeVector3();
				var q = manager.allocThreeQuaternion();
				var s = manager.allocThreeVector3();

				this.bone.matrixWorld.decompose( p, q, s );

				var tr = manager.allocTransform();
				manager.setOriginFromThreeVector3( tr, p );
				manager.setBasisFromThreeQuaternion( tr, q );

				var form = manager.multiplyTransforms( tr, this.boneOffsetForm );

				manager.freeTransform( tr );
				manager.freeThreeVector3( s );
				manager.freeThreeQuaternion( q );
				manager.freeThreeVector3( p );

				return form;

			},

			_getWorldTransformForBone: function () {

				var manager = this.manager;
				var tr = this.body.getCenterOfMassTransform();
				return manager.multiplyTransforms( tr, this.boneOffsetFormInverse );

			},

			_setTransformFromBone: function () {

				var manager = this.manager;
				var form = this._getBoneTransform();

				// TODO: check the most appropriate way to set
				//this.body.setWorldTransform( form );
				this.body.setCenterOfMassTransform( form );
				this.body.getMotionState().setWorldTransform( form );

				manager.freeTransform( form );

			},

			_setPositionFromBone: function () {

				var manager = this.manager;
				var form = this._getBoneTransform();

				var tr = manager.allocTransform();
				this.body.getMotionState().getWorldTransform( tr );
				manager.copyOrigin( tr, form );

				// TODO: check the most appropriate way to set
				//this.body.setWorldTransform( tr );
				this.body.setCenterOfMassTransform( tr );
				this.body.getMotionState().setWorldTransform( tr );

				manager.freeTransform( tr );
				manager.freeTransform( form );

			},

			_updateBoneRotation: function () {

				var manager = this.manager;

				var tr = this._getWorldTransformForBone();
				var q = manager.getBasis( tr );

				var thQ = manager.allocThreeQuaternion();
				var thQ2 = manager.allocThreeQuaternion();
				var thQ3 = manager.allocThreeQuaternion();

				thQ.set( q.x(), q.y(), q.z(), q.w() );
				thQ2.setFromRotationMatrix( this.bone.matrixWorld );
				thQ2.conjugate();
				thQ2.multiply( thQ );

				//this.bone.quaternion.multiply( thQ2 );

				thQ3.setFromRotationMatrix( this.bone.matrix );

				// Renormalizing quaternion here because repeatedly transforming
				// quaternion continuously accumulates floating point error and
				// can end up being overflow. See #15335
				this.bone.quaternion.copy( thQ2.multiply( thQ3 ).normalize() );

				manager.freeThreeQuaternion( thQ );
				manager.freeThreeQuaternion( thQ2 );
				manager.freeThreeQuaternion( thQ3 );

				manager.freeQuaternion( q );
				manager.freeTransform( tr );

			},

			_updateBonePosition: function () {

				var manager = this.manager;

				var tr = this._getWorldTransformForBone();

				var thV = manager.allocThreeVector3();

				var o = manager.getOrigin( tr );
				thV.set( o.x(), o.y(), o.z() );

				if ( this.bone.parent ) {

					this.bone.parent.worldToLocal( thV );

				}

				this.bone.position.copy( thV );

				manager.freeThreeVector3( thV );

				manager.freeTransform( tr );

			}

		};

		/**
		 * @param {THREE.SkinnedMesh} mesh
		 * @param {Ammo.btDiscreteDynamicsWorld} world
		 * @param {RigidBody} bodyA
		 * @param {RigidBody} bodyB
		 * @param {Object} params
		 * @param {ResourceManager} manager
		 */
		function Constraint( mesh, world, bodyA, bodyB, params, manager ) {

			this.mesh  = mesh;
			this.world = world;
			this.bodyA = bodyA;
			this.bodyB = bodyB;
			this.params = params;
			this.manager = manager;

			this.constraint = null;

			this._init();

		}

		Constraint.prototype = {

			constructor: Constraint,

			// private method

			_init: function () {

				var manager = this.manager;
				var params = this.params;
				var bodyA = this.bodyA;
				var bodyB = this.bodyB;

				var form = manager.allocTransform();
				manager.setIdentity( form );
				manager.setOriginFromArray3( form, params.position );
				manager.setBasisFromArray3( form, params.rotation );

				var formA = manager.allocTransform();
				var formB = manager.allocTransform();

				bodyA.body.getMotionState().getWorldTransform( formA );
				bodyB.body.getMotionState().getWorldTransform( formB );

				var formInverseA = manager.inverseTransform( formA );
				var formInverseB = manager.inverseTransform( formB );

				var formA2 = manager.multiplyTransforms( formInverseA, form );
				var formB2 = manager.multiplyTransforms( formInverseB, form );

				var constraint = new Ammo.btGeneric6DofSpringConstraint( bodyA.body, bodyB.body, formA2, formB2, true );

				var lll = manager.allocVector3();
				var lul = manager.allocVector3();
				var all = manager.allocVector3();
				var aul = manager.allocVector3();

				lll.setValue( params.translationLimitation1[ 0 ],
				              params.translationLimitation1[ 1 ],
				              params.translationLimitation1[ 2 ] );
				lul.setValue( params.translationLimitation2[ 0 ],
				              params.translationLimitation2[ 1 ],
				              params.translationLimitation2[ 2 ] );
				all.setValue( params.rotationLimitation1[ 0 ],
				              params.rotationLimitation1[ 1 ],
				              params.rotationLimitation1[ 2 ] );
	            if(!params.rotationLimitation2)
	                params.rotationLimitation2 = [0,0,0];

	                aul.setValue(params.rotationLimitation2[0],
	                    params.rotationLimitation2[1],
	                    params.rotationLimitation2[2]);



				constraint.setLinearLowerLimit( lll );
				constraint.setLinearUpperLimit( lul );
				constraint.setAngularLowerLimit( all );
				constraint.setAngularUpperLimit( aul );

				for ( var i = 0; i < 3; i++ ) {

					if( params.springPosition[ i ] !== 0 ) {

						constraint.enableSpring( i, true );
						constraint.setStiffness( i, params.springPosition[ i ] );

					}

				}

				for ( var i = 0; i < 3; i++ ) {

					if( params.springRotation[ i ] !== 0 ) {

						constraint.enableSpring( i + 3, true );
						constraint.setStiffness( i + 3, params.springRotation[ i ] );

					}

				}

				/*
				 * Currently(10/31/2016) official ammo.js doesn't support
				 * btGeneric6DofSpringConstraint.setParam method.
				 * You need custom ammo.js (add the method into idl) if you wanna use.
				 * By setting this parameter, physics will be more like MMD's
				 */
				if ( constraint.setParam !== undefined ) {

					for ( var i = 0; i < 6; i ++ ) {

						// this parameter is from http://www20.atpages.jp/katwat/three.js_r58/examples/mytest37/mmd.three.js
						constraint.setParam( 2, 0.475, i );

					}

				}

				this.world.addConstraint( constraint, true );
				this.constraint = constraint;

				manager.freeTransform( form );
				manager.freeTransform( formA );
				manager.freeTransform( formB );
				manager.freeTransform( formInverseA );
				manager.freeTransform( formInverseB );
				manager.freeTransform( formA2 );
				manager.freeTransform( formB2 );
				manager.freeVector3( lll );
				manager.freeVector3( lul );
				manager.freeVector3( all );
				manager.freeVector3( aul );

			}

		};

		/**
		 * Visualize Rigid bodies
		 *
		 * @param {THREE.SkinnedMesh} mesh
		 * @param {THREE.Physics} physics
		 */
		function MMDPhysicsHelper( mesh, physics ) {

			THREE.Object3D.call( this );

			this.root = mesh;
			this.physics = physics;

			this.matrix.copy( mesh.matrixWorld );
			this.matrixAutoUpdate = false;

			this.materials = [];

			this.materials.push(
				new THREE.MeshBasicMaterial( {
					color: new THREE.Color( 0xff8888 ),
					wireframe: true,
					depthTest: false,
					depthWrite: false,
					opacity: 0.25,
					transparent: true
				} )
			);

			this.materials.push(
				new THREE.MeshBasicMaterial( {
					color: new THREE.Color( 0x88ff88 ),
					wireframe: true,
					depthTest: false,
					depthWrite: false,
					opacity: 0.25,
					transparent: true
				} )
			);

			this.materials.push(
				new THREE.MeshBasicMaterial( {
					color: new THREE.Color( 0x8888ff ),
					wireframe: true,
					depthTest: false,
					depthWrite: false,
					opacity: 0.25,
					transparent: true
				} )
			);

			this._init();

		}

		MMDPhysicsHelper.prototype = Object.assign( Object.create( THREE.Object3D.prototype ), {

			constructor: MMDPhysicsHelper,

			/**
			 * Updates Rigid Bodies visualization.
			 */
			updateMatrixWorld: function () {

				var position = new THREE.Vector3();
				var quaternion = new THREE.Quaternion();
				var scale = new THREE.Vector3();
				var matrixWorldInv = new THREE.Matrix4();

				return function updateMatrixWorld( force ) {

					var mesh = this.root;

					if ( this.visible ) {

						var bodies = this.physics.bodies;

						matrixWorldInv
							.copy( mesh.matrixWorld )
							.decompose( position, quaternion, scale )
							.compose( position, quaternion, scale.set( 1, 1, 1 ) )
							.getInverse( matrixWorldInv );

						for ( var i = 0, il = bodies.length; i < il; i ++ ) {

							var body = bodies[ i ].body;
							var child = this.children[ i ];

							var tr = body.getCenterOfMassTransform();
							var origin = tr.getOrigin();
							var rotation = tr.getRotation();

							child.position
								.set( origin.x(), origin.y(), origin.z() )
								.applyMatrix4( matrixWorldInv );

							child.quaternion
								.setFromRotationMatrix( matrixWorldInv )
								.multiply(
									quaternion.set(
										rotation.x(), rotation.y(), rotation.z(), rotation.w() )
								);

						}

					}

					this.matrix
						.copy( mesh.matrixWorld )
						.decompose( position, quaternion, scale )
						.compose( position, quaternion, scale.set( 1, 1, 1 ) );

					THREE.Object3D.prototype.updateMatrixWorld.call( this, force );

				};

			}(),

			// private method

			_init: function () {

				var bodies = this.physics.bodies;

				function createGeometry( param ) {

					switch ( param.shapeType ) {

						case 0:
							return new THREE.SphereBufferGeometry( param.width, 16, 8 );

						case 1:
							return new THREE.BoxBufferGeometry( param.width * 2, param.height * 2, param.depth * 2, 8, 8, 8 );

						case 2:
							return new createCapsuleGeometry( param.width, param.height, 16, 8 );

						default:
							return null;

					}

				}

				// copy from http://www20.atpages.jp/katwat/three.js_r58/examples/mytest37/mytest37.js?ver=20160815
				function createCapsuleGeometry( radius, cylinderHeight, segmentsRadius, segmentsHeight ) {

					var geometry = new THREE.CylinderBufferGeometry( radius, radius, cylinderHeight, segmentsRadius, segmentsHeight, true );
					var upperSphere = new THREE.Mesh( new THREE.SphereBufferGeometry( radius, segmentsRadius, segmentsHeight, 0, Math.PI * 2, 0, Math.PI / 2 ) );
					var lowerSphere = new THREE.Mesh( new THREE.SphereBufferGeometry( radius, segmentsRadius, segmentsHeight, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2 ) );

					upperSphere.position.set( 0, cylinderHeight / 2, 0 );
					lowerSphere.position.set( 0, - cylinderHeight / 2, 0 );

					upperSphere.updateMatrix();
					lowerSphere.updateMatrix();

					geometry.merge( upperSphere.geometry, upperSphere.matrix );
					geometry.merge( lowerSphere.geometry, lowerSphere.matrix );

					return geometry;

				}

				for ( var i = 0, il = bodies.length; i < il; i ++ ) {

					var param = bodies[ i ].params;
					this.add( new THREE.Mesh( createGeometry( param ), this.materials[ param.type ] ) );

				}

			}

		} );

		return MMDPhysics;

	} )();

	var MMDAnimationHelper = ( function () {

	    /**
	     * @param {Object} params - (optional)
	     * @param {boolean} params.sync - Whether animation durations of added objects are synched. Default is true.
	     * @param {Number} params.afterglow - Default is 0.0.
	     * @param {boolean} params resetPhysicsOnLoop - Default is true.
	     */
	    function MMDAnimationHelper( params ) {

	        params = params || {};

	        this.meshes = [];

	        this.camera = null;
	        this.cameraTarget = new THREE.Object3D();
	        this.cameraTarget.name = 'target';

	        this.audio = null;
	        this.audioManager = null;

	        this.objects = new WeakMap();

	        this.configuration = {
	            sync: params.sync !== undefined
	                ? params.sync : true,
	            afterglow: params.afterglow !== undefined
	                ? params.afterglow : 0.0,
	            resetPhysicsOnLoop: params.resetPhysicsOnLoop !== undefined
	                ? params.resetPhysicsOnLoop : true
	        };

	        this.enabled = {
	            animation: true,
	            ik: true,
	            grant: true,
	            physics: true,
	            cameraAnimation: true
	        };

	        this.onBeforePhysics = function ( mesh ) {};

	        // experimental
	        this.sharedPhysics = false;
	        this.masterPhysics = null;

	    }

	    MMDAnimationHelper.prototype = {

	        constructor: MMDAnimationHelper,

	        /**
	         * Adds an Three.js Object to helper and setups animation.
	         * The anmation durations of added objects are synched
	         * if this.configuration.sync is true.
	         *
	         * @param {THREE.SkinnedMesh|THREE.Camera|THREE.Audio} object
	         * @param {Object} params - (optional)
	         * @param {THREE.AnimationClip|Array<THREE.AnimationClip>} params.animation - Only for THREE.SkinnedMesh and THREE.Camera. Default is undefined.
	         * @param {boolean} params.physics - Only for THREE.SkinnedMesh. Default is true.
	         * @param {Integer} params.warmup - Only for THREE.SkinnedMesh and physics is true. Default is 60.
	         * @param {Number} params.unitStep - Only for THREE.SkinnedMesh and physics is true. Default is 1 / 65.
	         * @param {Integer} params.maxStepNum - Only for THREE.SkinnedMesh and physics is true. Default is 3.
	         * @param {THREE.Vector3} params.gravity - Only for THREE.SkinnedMesh and physics is true. Default ( 0, - 9.8 * 10, 0 ).
	         * @param {Number} params.delayTime - Only for THREE.Audio. Default is 0.0.
	         * @return {THREE.MMDAnimationHelper}
	         */
	        //LJY 在MMD辅助器中添加对象（模型、相机、音频等）
	        add: function ( object, params ) {

	            params = params || {};

	            if ( object.isSkinnedMesh ) {

	                this._addMesh( object, params );

	            } else if ( object.isCamera ) {

	                this._setupCamera( object, params );

	            } else if ( object.type === 'Audio' ) {

	                this._setupAudio( object, params );

	            } else {

	                throw new Error( 'THREE.MMDAnimationHelper.add: '
	                    + 'accepts only '
	                    + 'THREE.SkinnedMesh or '
	                    + 'THREE.Camera or '
	                    + 'THREE.Audio instance.' );

	            }

	            if ( this.configuration.sync ) this._syncDuration();

	            return this;

	        },

	        /**
	         * Removes an Three.js Object from helper.
	         *
	         * @param {THREE.SkinnedMesh|THREE.Camera|THREE.Audio} object
	         * @return {THREE.MMDAnimationHelper}
	         */
	        //LJY 在MMD辅助器中移除对象（模型、相机、音频等）
	        remove: function ( object ) {

	            if ( object.isSkinnedMesh ) {

	                this._removeMesh( object );

	            } else if ( object.isCamera ) {

	                this._clearCamera( object );

	            } else if ( object.type === 'Audio' ) {

	                this._clearAudio( object );

	            } else {

	                throw new Error( 'THREE.MMDAnimationHelper.remove: '
	                    + 'accepts only '
	                    + 'THREE.SkinnedMesh or '
	                    + 'THREE.Camera or '
	                    + 'THREE.Audio instance.' );

	            }

	            if ( this.configuration.sync ) this._syncDuration();

	            return this;

	        },

	        /**
	         * Updates the animation.
	         *
	         * @param {Number} delta
	         * @return {THREE.MMDAnimationHelper}
	         */
	        //LJY 根据时间刷新MMD辅助器下的各对象（模型、相机、音频等）
	        update: function ( delta ) {

	            if ( this.audioManager !== null ) this.audioManager.control( delta );

	            for ( var i = 0; i < this.meshes.length; i ++ ) {

	                this._animateMesh( this.meshes[ i ], delta );

	            }

	            if ( this.sharedPhysics ) this._updateSharedPhysics( delta );

	            if ( this.camera !== null ) this._animateCamera( this.camera, delta );

	            return this;

	        },

	        /**
	         * Changes the pose of SkinnedMesh as VPD specifies.
	         *
	         * @param {THREE.SkinnedMesh} mesh
	         * @param {Object} vpd - VPD content parsed MMDParser
	         * @param {Object} params - (optional)
	         * @param {boolean} params.resetPose - Default is true.
	         * @param {boolean} params.ik - Default is true.
	         * @param {boolean} params.grant - Default is true.
	         * @return {THREE.MMDAnimationHelper}
	         */
	        //LJY 在辅助器中设置模型姿势
	        pose: function ( mesh, vpd, params ) {

	            params = params || {};

	            if ( params.resetPose !== false ) mesh.pose();

	            var bones = mesh.skeleton.bones;
	            var boneParams = vpd.bones;

	            var boneNameDictionary = {};

	            for ( var i = 0, il = bones.length; i < il; i ++ ) {

	                boneNameDictionary[ bones[ i ].name ] = i;

	            }

	            var vector = new THREE.Vector3();
	            var quaternion = new THREE.Quaternion();

	            for ( var i = 0, il = boneParams.length; i < il; i ++ ) {

	                var boneParam = boneParams[ i ];
	                var boneIndex = boneNameDictionary[ boneParam.name ];

	                if ( boneIndex === undefined ) continue;

	                var bone = bones[ boneIndex ];
	                bone.position.add( vector.fromArray( boneParam.translation ) );
	                bone.quaternion.multiply( quaternion.fromArray( boneParam.quaternion ) );

	            }

	            mesh.updateMatrixWorld( true );

	            if ( params.ik !== false ) {

	                this._createCCDIKSolver( mesh ).update( params.saveOriginalBonesBeforeIK ); // this param is experimental

	            }

	            if ( params.grant !== false ) {

	                this.createGrantSolver( mesh ).update();

	            }

	            return this;

	        },

	        /**
	         * Enabes/Disables an animation feature.
	         *
	         * @param {string} key
	         * @param {boolean} enebled
	         * @return {THREE.MMDAnimationHelper}
	         */
	        //LJY 根据传入KEY设置动画、IK、物理等开关状态
	        enable: function ( key, enabled ) {

	            if ( this.enabled[ key ] === undefined ) {

	                throw new Error( 'THREE.MMDAnimationHelper.enable: '
	                    + 'unknown key ' + key );

	            }

	            this.enabled[ key ] = enabled;

	            if ( key === 'physics' ) {

	                for ( var i = 0, il = this.meshes.length; i < il; i ++ ) {

	                    this._optimizeIK( this.meshes[ i ], enabled );

	                }

	            }

	            return this;

	        },

	        /**
	         * Creates an GrantSolver instance.
	         *
	         * @param {THREE.SkinnedMesh} mesh
	         * @return {GrantSolver}
	         */
	        //LJY 创建Grant
	        createGrantSolver: function ( mesh ) {

	            return new GrantSolver( mesh, mesh.geometry.userData.MMD.grants );

	        },

	        // private methods

	        //LJY 在MMD辅助器中添加模型、物理和IK
	        _addMesh: function ( mesh, params ) {

	            if ( this.meshes.indexOf( mesh ) >= 0 ) {

	                throw new Error( 'THREE.MMDAnimationHelper._addMesh: '
	                    + 'SkinnedMesh \'' + mesh.name + '\' has already been added.' );

	            }

	            this.meshes.push( mesh );
	            this.objects.set( mesh, { looped: false } );

	            //LJY 初始化IK和Grant
	            this._setupMeshAnimation( mesh, params.animation );

	            //LJY 初始化物理
	            if ( params.physics !== false ) {

	                this._setupMeshPhysics( mesh, params );

	            }

	            return this;

	        },

	        //LJY 在MMD辅助器中添加相机
	        _setupCamera: function ( camera, params ) {

	            if ( this.camera === camera ) {

	                throw new Error( 'THREE.MMDAnimationHelper._setupCamera: '
	                    + 'Camera \'' + camera.name + '\' has already been set.' );

	            }

	            if ( this.camera ) this.clearCamera( this.camera );

	            this.camera = camera;

	            camera.add( this.cameraTarget );

	            this.objects.set( camera, {} );

	            if ( params.animation !== undefined ) {

	                this._setupCameraAnimation( camera, params.animation );

	            }

	            return this;

	        },

	        //LJY 在MMD辅助器中添加音频
	        _setupAudio: function ( audio, params ) {

	            if ( this.audio === audio ) {

	                throw new Error( 'THREE.MMDAnimationHelper._setupAudio: '
	                    + 'Audio \'' + audio.name + '\' has already been set.' );

	            }

	            if ( this.audio ) this.clearAudio( this.audio );

	            this.audio = audio;
	            this.audioManager = new AudioManager( audio, params );

	            this.objects.set( this.audioManager, {
	                duration: this.audioManager.duration
	            } );

	            return this;

	        },

	        //LJY 在MMD辅助器中移除模型
	        _removeMesh: function ( mesh ) {

	            var found = false;
	            var writeIndex = 0;

	            for ( var i = 0, il = this.meshes.length; i < il; i ++ ) {

	                if ( this.meshes[ i ] === mesh ) {

	                    this.objects.delete( mesh );
	                    found = true;

	                    continue;

	                }

	                this.meshes[ writeIndex ++ ] = this.meshes[ i ];

	            }

	            if ( ! found ) {

	                throw new Error( 'THREE.MMDAnimationHelper._removeMesh: '
	                    + 'SkinnedMesh \'' + mesh.name + '\' has not been added yet.' );

	            }

	            this.meshes.length = writeIndex;

	            return this;

	        },

	        //LJY 在MMD辅助器中清除相机
	        _clearCamera: function ( camera ) {

	            if ( camera !== this.camera ) {

	                throw new Error( 'THREE.MMDAnimationHelper._clearCamera: '
	                    + 'Camera \'' + camera.name + '\' has not been set yet.' );

	            }

	            this.camera.remove( this.cameraTarget );

	            this.objects.delete( this.camera );
	            this.camera = null;

	            return this;

	        },

	        //LJY 在MMD辅助器中清除声音
	        _clearAudio: function ( audio ) {

	            if ( audio !== this.audio ) {

	                throw new Error( 'THREE.MMDAnimationHelper._clearAudio: '
	                    + 'Audio \'' + audio.name + '\' has not been set yet.' );

	            }

	            this.objects.delete( this.audioManager );

	            this.audio = null;
	            this.audioManager = null;

	            return this;

	        },

	        //LJY 初始化IK和Grant
	        _setupMeshAnimation: function ( mesh, animation ) {

	            var objects = this.objects.get( mesh );

	            if ( animation !== undefined ) {

	                var animations = Array.isArray( animation )
	                    ? animation : [ animation ];

	                objects.mixer = new THREE.AnimationMixer( mesh );

	                for ( var i = 0, il = animations.length; i < il; i ++ ) {

	                    objects.mixer.clipAction( animations[ i ] ).play();

	                }

	                // TODO: find a workaround not to access ._clip looking like a private property
	                objects.mixer.addEventListener( 'loop', function ( event ) {

	                    var tracks = event.action._clip.tracks;

	                    if ( tracks.length > 0 &&
	                        tracks[ 0 ].name.slice( 0, 6 ) !== '.bones' ) return;

	                    objects.looped = true;

	                } );

	            }

	            objects.ikSolver = this._createCCDIKSolver( mesh );
	            objects.grantSolver = this.createGrantSolver( mesh );

	            return this;

	        },

	        //LJY MMD辅助中设置相机动画
	        _setupCameraAnimation: function ( camera, animation ) {

	            var animations = Array.isArray( animation )
	                ? animation : [ animation ];

	            var objects = this.objects.get( camera );

	            objects.mixer = new THREE.AnimationMixer( camera );

	            for ( var i = 0, il = animations.length; i < il; i ++ ) {

	                objects.mixer.clipAction( animations[ i ] ).play();

	            }

	        },

	        //LJY 初始化物理
	        _setupMeshPhysics: function ( mesh, params ) {

	            var objects = this.objects.get( mesh );

	            // shared physics is experimental

	            if ( params.world === undefined && this.sharedPhysics ) {

	                var masterPhysics = this._getMasterPhysics();

	                // if ( masterPhysics !== null )
	                // world = masterPhysics.world;

	            }

	            objects.physics = this._createMMDPhysics( mesh, params );

	            if ( objects.mixer && params.animationWarmup !== false ) {

	                this._animateMesh( mesh, 0 );
	                objects.physics.reset();

	            }

	            objects.physics.warmup( params.warmup !== undefined ? params.warmup : 60 );

	            this._optimizeIK( mesh, true );

	        },

	        //LJY 根据delta时间刷新动画
	        _animateMesh: function ( mesh, delta ) {

	            var objects = this.objects.get( mesh );

	            var mixer = objects.mixer;
	            var ikSolver = objects.ikSolver;
	            var grantSolver = objects.grantSolver;
	            var physics = objects.physics;
	            var looped = objects.looped;

	            // alternate solution to save/restore bones but less performant?
	            //mesh.pose();
	            //this._updatePropertyMixersBuffer( mesh );

	            if ( mixer && this.enabled.animation ) {

	                this._restoreBones( mesh );

	                mixer.update( delta );

	                this._saveBones( mesh );

	                if ( ikSolver && this.enabled.ik ) {

	                    mesh.updateMatrixWorld( true );
	                    ikSolver.update();

	                }

	                if ( grantSolver && this.enabled.grant ) {

	                    grantSolver.update();

	                }

	            }

	            if ( looped === true && this.enabled.physics ) {

	                if ( physics && this.configuration.resetPhysicsOnLoop ) physics.reset();

	                objects.looped = false;

	            }

	            if ( physics && this.enabled.physics && ! this.sharedPhysics ) {

	                this.onBeforePhysics( mesh );
	                physics.update( delta );

	            }

	        },

	        //根据时间更新相机动画
	        _animateCamera: function ( camera, delta ) {

	            var mixer = this.objects.get( camera ).mixer;

	            if ( mixer && this.enabled.cameraAnimation ) {

	                mixer.update( delta );

	                camera.updateProjectionMatrix();

	                camera.up.set( 0, 1, 0 );
	                camera.up.applyQuaternion( camera.quaternion );
	                camera.lookAt( this.cameraTarget.position );

	            }

	        },

	        //优化IK
	        _optimizeIK: function ( mesh, physicsEnabled ) {

	            var iks = mesh.geometry.userData.MMD.iks;
	            var bones = mesh.geometry.userData.MMD.bones;

	            for ( var i = 0, il = iks.length; i < il; i ++ ) {

	                var ik = iks[ i ];
	                var links = ik.links;

	                for ( var j = 0, jl = links.length; j < jl; j ++ ) {

	                    var link = links[ j ];

	                    if ( physicsEnabled === true ) {

	                        // disable IK of the bone the corresponding rigidBody type of which is 1 or 2
	                        // because its rotation will be overriden by physics
	                        link.enabled = bones[ link.index ].rigidBodyType > 0 ? false : true;

	                    } else {

	                        link.enabled = true;

	                    }

	                }

	            }

	        },

	        //IK初始化
	        _createCCDIKSolver: function ( mesh ) {

	            if ( CCDIKSolver === undefined ) {

	                throw new Error( 'THREE.MMDAnimationHelper: Import CCDIKSolver.' );

	            }

	            //LJY 创建IK
	            return new CCDIKSolver( mesh, mesh.geometry.userData.MMD.iks );

	        },

	        _createMMDPhysics: function ( mesh, params ) {

	            if ( MMDPhysics === undefined ) {

	                throw new Error( 'MMDPhysics: Import MMDPhysics.' );

	            }

	            return new MMDPhysics(
	                mesh,
	                mesh.geometry.userData.MMD.rigidBodies,
	                mesh.geometry.userData.MMD.constraints,
	                params );

	        },

	        /*
	         * Detects the longest duration and then sets it to them to sync.
	         * TODO: Not to access private properties ( ._actions and ._clip )
	         */
	        _syncDuration: function () {

	            var max = 0.0;

	            var objects = this.objects;
	            var meshes = this.meshes;
	            var camera = this.camera;
	            var audioManager = this.audioManager;

	            // get the longest duration

	            for ( var i = 0, il = meshes.length; i < il; i ++ ) {

	                var mixer = this.objects.get( meshes[ i ] ).mixer;

	                if ( mixer === undefined ) continue;

	                for ( var j = 0; j < mixer._actions.length; j ++ ) {

	                    var clip = mixer._actions[ j ]._clip;

	                    if ( ! objects.has( clip ) ) {

	                        objects.set( clip, {
	                            duration: clip.duration
	                        } );

	                    }

	                    max = Math.max( max, objects.get( clip ).duration );

	                }

	            }

	            if ( camera !== null ) {

	                var mixer = this.objects.get( camera ).mixer;

	                if ( mixer !== undefined ) {

	                    for ( var i = 0, il = mixer._actions.length; i < il; i ++ ) {

	                        var clip = mixer._actions[ i ]._clip;

	                        if ( ! objects.has( clip ) ) {

	                            objects.set( clip, {
	                                duration: clip.duration
	                            } );

	                        }

	                        max = Math.max( max, objects.get( clip ).duration );

	                    }

	                }

	            }

	            if ( audioManager !== null ) {

	                max = Math.max( max, objects.get( audioManager ).duration );

	            }

	            max += this.configuration.afterglow;

	            // update the duration

	            for ( var i = 0, il = this.meshes.length; i < il; i ++ ) {

	                var mixer = this.objects.get( this.meshes[ i ] ).mixer;

	                if ( mixer === undefined ) continue;

	                for ( var j = 0, jl = mixer._actions.length; j < jl; j ++ ) {

	                    mixer._actions[ j ]._clip.duration = max;

	                }

	            }

	            if ( camera !== null ) {

	                var mixer = this.objects.get( camera ).mixer;

	                if ( mixer !== undefined ) {

	                    for ( var i = 0, il = mixer._actions.length; i < il; i ++ ) {

	                        mixer._actions[ i ]._clip.duration = max;

	                    }

	                }

	            }

	            if ( audioManager !== null ) {

	                audioManager.duration = max;

	            }

	        },

	        // workaround

	        _updatePropertyMixersBuffer: function ( mesh ) {

	            var mixer = this.objects.get( mesh ).mixer;

	            var propertyMixers = mixer._bindings;
	            var accuIndex = mixer._accuIndex;

	            for ( var i = 0, il = propertyMixers.length; i < il; i ++ ) {

	                var propertyMixer = propertyMixers[ i ];
	                var buffer = propertyMixer.buffer;
	                var stride = propertyMixer.valueSize;
	                var offset = ( accuIndex + 1 ) * stride;

	                propertyMixer.binding.getValue( buffer, offset );

	            }

	        },

	        /*
	         * Avoiding these two issues by restore/save bones before/after mixer animation.
	         *
	         * 1. PropertyMixer used by AnimationMixer holds cache value in .buffer.
	         *    Calculating IK, Grant, and Physics after mixer animation can break
	         *    the cache coherency.
	         *
	         * 2. Applying Grant two or more times without reset the posing breaks model.
	         */
	        _saveBones: function ( mesh ) {

	            var objects = this.objects.get( mesh );

	            var bones = mesh.skeleton.bones;

	            var backupBones = objects.backupBones;

	            if ( backupBones === undefined ) {

	                backupBones = new Float32Array( bones.length * 7 );
	                objects.backupBones = backupBones;

	            }

	            for ( var i = 0, il = bones.length; i < il; i ++ ) {

	                var bone = bones[ i ];
	                bone.position.toArray( backupBones, i * 7 );
	                bone.quaternion.toArray( backupBones, i * 7 + 3 );

	            }

	        },

	        _restoreBones: function ( mesh ) {

	            var objects = this.objects.get( mesh );

	            var backupBones = objects.backupBones;

	            if ( backupBones === undefined ) return;

	            var bones = mesh.skeleton.bones;

	            for ( var i = 0, il = bones.length; i < il; i ++ ) {

	                var bone = bones[ i ];
	                bone.position.fromArray( backupBones, i * 7 );
	                bone.quaternion.fromArray( backupBones, i * 7 + 3 );

	            }

	        },

	        // experimental

	        _getMasterPhysics: function () {

	            if ( this.masterPhysics !== null ) return this.masterPhysics;

	            for ( var i = 0, il = this.meshes.length; i < il; i ++ ) {

	                var physics = this.meshes[ i ].physics;

	                if ( physics !== undefined && physics !== null ) {

	                    this.masterPhysics = physics;
	                    return this.masterPhysics;

	                }

	            }

	            return null;

	        },

	        _updateSharedPhysics: function ( delta ) {

	            if ( this.meshes.length === 0 || ! this.enabled.physics || ! this.sharedPhysics ) return;

	            var physics = this._getMasterPhysics();

	            if ( physics === null ) return;

	            for ( var i = 0, il = this.meshes.length; i < il; i ++ ) {

	                var p = this.meshes[ i ].physics;

	                if ( p !== null && p !== undefined ) {

	                    p.updateRigidBodies();

	                }

	            }

	            physics.stepSimulation( delta );

	            for ( var i = 0, il = this.meshes.length; i < il; i ++ ) {

	                var p = this.meshes[ i ].physics;

	                if ( p !== null && p !== undefined ) {

	                    p.updateBones();

	                }

	            }

	        }

	    };

	    /**
	     * @param {THREE.Audio} audio
	     * @param {Object} params - (optional)
	     * @param {Nuumber} params.delayTime
	     */
	    function AudioManager( audio, params ) {

	        params = params || {};

	        this.audio = audio;

	        this.elapsedTime = 0.0;
	        this.currentTime = 0.0;
	        this.delayTime = params.delayTime !== undefined
	            ? params.delayTime : 0.0;

	        this.audioDuration = this.audio.buffer.duration;
	        this.duration = this.audioDuration + this.delayTime;

	    }

	    AudioManager.prototype = {

	        constructor: AudioManager,

	        /**
	         * @param {Number} delta
	         * @return {AudioManager}
	         */
	        control: function ( delta ) {

	            this.elapsed += delta;
	            this.currentTime += delta;

	            if ( this._shouldStopAudio() ) this.audio.stop();
	            if ( this._shouldStartAudio() ) this.audio.play();

	            return this;

	        },

	        // private methods

	        _shouldStartAudio: function () {

	            if ( this.audio.isPlaying ) return false;

	            while ( this.currentTime >= this.duration ) {

	                this.currentTime -= this.duration;

	            }

	            if ( this.currentTime < this.delayTime ) return false;

	            // 'duration' can be bigger than 'audioDuration + delayTime' because of sync configuration
	            if ( ( this.currentTime - this.delayTime ) > this.audioDuration ) return false;

	            this.audio.startTime = this.currentTime - this.delayTime;

	            return true;

	        },

	        _shouldStopAudio: function () {

	            return this.audio.isPlaying &&
	                this.currentTime >= this.duration;

	        }

	    };

	    /**
	     * @param {THREE.SkinnedMesh} mesh
	     * @param {Array<Object>} grants
	     */
	    //LJY MMD辅助中GRANT
	    function GrantSolver( mesh, grants ) {

	        this.mesh = mesh;
	        this.grants = grants || [];

	    }

	    GrantSolver.prototype = {

	        constructor: GrantSolver,

	        /**
	         * @return {GrantSolver}
	         */
	        update: function () {

	            var quaternion = new THREE.Quaternion();

	            return function () {

	                var bones = this.mesh.skeleton.bones;
	                var grants = this.grants;

	                for ( var i = 0, il = grants.length; i < il; i ++ ) {

	                    var grant = grants[ i ];
	                    var bone = bones[ grant.index ];
	                    var parentBone = bones[ grant.parentIndex ];

	                    if ( grant.isLocal ) {

	                        // TODO: implement
	                        if ( grant.affectPosition ) ;

	                        // TODO: implement
	                        if ( grant.affectRotation ) ;

	                    } else {

	                        // TODO: implement
	                        if ( grant.affectPosition ) ;

	                        if ( grant.affectRotation ) {

	                            quaternion.set( 0, 0, 0, 1 );
	                            quaternion.slerp( parentBone.quaternion, grant.ratio );
	                            bone.quaternion.multiply( quaternion );

	                        }

	                    }

	                }

	                return this;

	            };

	        }()

	    };

	    return MMDAnimationHelper;

	} )();

	function Renderer(go) {
	    Component.call(this, go);

	    this.instClassType = Renderer.classType;
	    this._imp = null;

	    this._enabled = true;

	    this._castShadow = false;

	    this._receiveShadow = false;

	    this._externalMaterials = [];
	    this._materialNodes = [];

	    this.gameObject.addEventListener(Event$1.CHANGEGAMEOBJECTLAYER, this, this.__handleLayerChange);
	    this.gameObject.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	}

	//TODO, extend more option
	Renderer.ENUM_ShadowCastingMode = {
	    Off:"Off",
	    On:"On"
	};

	ExtendType(Renderer, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	        this.enabled = source.enabled;
	        this.shadowCastingMode = source.shadowCastingMode;
	        this.receiveShadows = source.receiveShadows;

	        // if(_externalMaterials.length > 0)
	        // this.materials = source.materials;
	    },

	    _handleDestroy: function (event) {
	        for(let i = 0 ; i< this._externalMaterials.length ; ++i ){
	            this._externalMaterials[i].removeEventListener(Event$1.CHANGESHADER, this, this.__handleMaterialShaderChange);
	            this._externalMaterials[i].removeEventListener(Event$1.REMOVEASSET, this, this._materialAssetRemoved);
	        }
	    },

	    _materialAssetRemoved: function (event) {
	        this.__applyMaterialInChild(this._imp, Renderer.defaultMaterial);
	    },

	    __castShadowInChild:function(mesh, value){
	        mesh.castShadow = value;

	        for(let i =0; i < mesh.children.length; i++) {
	            let childMesh = mesh.children[i];
	            childMesh.castShadow = value;
	            this.__castShadowInChild(childMesh,value);
	        }
	    },

	    __receiveShadowInChild:function(mesh, value){
	        mesh.receiveShadow = value;
	        if( !!mesh.material ){
	            for( let i =0; i < mesh.material.length; i++ ){
	                mesh.material[i].needsUpdate = true;
	            }
	        }

	        for(let i =0; i < mesh.children.length; i++) {
	            let childMesh = mesh.children[i];
	            childMesh.receiveShadow = value;
	            this.__receiveShadowInChild(childMesh,value);
	        }
	    },

	    __applyMaterialInChild:function(mesh, material){
	        mesh.material = material;

	        for(let i =0; i < mesh.children.length; i++) {
	            let childMesh = mesh.children[i];
	            childMesh.material = material;
	            this.__applyMaterialInChild(childMesh, material);
	        }
	    },

	    __applyLayerInChild:function(mesh, layerValue){
	        mesh.layers.set(layerValue);

	        for(let i =0; i < mesh.children.length; i++) {
	            let childMesh = mesh.children[i];
	            this.__applyLayerInChild(childMesh, layerValue);
	        }
	    },

	    __handleLayerChange:function(e){
	        let layerValue = this.gameObject.layer;
	        if(this._imp)
	        {
	            this.__applyLayerInChild(this._imp, layerValue);
	        }
	    },

	    __handleMaterialShaderChange:function(e){
	        if(e.target == this.material)
	        {
	            if(this._imp && this.material)
	            {
	                this.__applyMaterialInChild(this._imp, this._externalMaterials[0]._imp);
	            }
	        }
	    },

	    //应用材质列表
	    _setExternalMaterials:function(materialNodes, externalmaterials)
	    {
	        if(!externalmaterials instanceof Array || !materialNodes instanceof Array) return;

	        //移除原列表监听
	        for(let i = 0 ; i< this._externalMaterials.length ; ++i ){
	            if(this._externalMaterials[i]) {
	                this._externalMaterials[i].removeEventListener(Event$1.CHANGESHADER, this, this.__handleMaterialShaderChange);
	                this._externalMaterials[i].removeEventListener(Event$1.REMOVEASSET, this, this._materialAssetRemoved);
	            }
	        }

	        //添加新列表监听
	        this._externalMaterials = externalmaterials;
	        for(let i = 0 ; i< this._externalMaterials.length ; ++i ){
	            if(this._externalMaterials[i])
	            {
	                this._externalMaterials[i].addEventListener(Event$1.CHANGESHADER, this, this.__handleMaterialShaderChange);
	                this._externalMaterials[i].addEventListener(Event$1.REMOVEASSET, this, this._materialAssetRemoved);
	            }
	        }

	        for(let i = 0 ; i< materialNodes.length ; ++i ){
	            if(materialNodes[i].material && externalmaterials.length > i)
	            {
	                if(externalmaterials[i] && materialNodes[i].material != externalmaterials[i]._imp)
	                    materialNodes[i].material = externalmaterials[i]._imp;
	                else
	                    materialNodes[i].material = Renderer.defaultMaterial;   //创建替代的空材质
	            }
	        }
	    },

	    //获取所有带有材质节点
	    _getMaterialNodes:function(node){
	        var materialNodeList = [];
	        getMaterialInNode(node, materialNodeList);

	        function getMaterialInNode (node, materialNodeList)
	        {
	            if(node.material)
	            {
	                materialNodeList.push(node);
	            }

	            for(let index in node.children)
	            {
	                let child = node.children[index];
	                getMaterialInNode(child, materialNodeList);
	            }
	        }
	        return materialNodeList;
	    },

	    //替换材质列表中的材质
	    setMaterial(index, material) {
	        if(!this._materialNodes.length > index ) return false;

	        //移除老监听
	        if (this._externalMaterials.length > index) {
	            if(this._externalMaterials[index])
	            {
	                this._externalMaterials[index].removeEventListener(Event$1.CHANGESHADER, this, this.__handleMaterialShaderChange);
	                this._externalMaterials[index].removeEventListener(Event$1.REMOVEASSET, this, this._materialAssetRemoved);
	            }


	            //添加新监听
	            this._externalMaterials[index] = material;
	            if(material)
	            {
	                this._materialNodes[index].material = material._imp;
	                this._externalMaterials[index].addEventListener(Event$1.CHANGESHADER, this, this.__handleMaterialShaderChange);
	                this._externalMaterials[index].addEventListener(Event$1.REMOVEASSET, this, this._materialAssetRemoved);
	            }
	            else
	            {
	                this._materialNodes[index].material = Renderer.defaultMaterial;   //创建替代的空材质
	            }
	            return true;
	        }
	        return false;
	    }
	});

	Object.defineProperty(Renderer.prototype, "enabled",{
	    get:function () {
	        return this._enabled;
	    },

	    set:function(value){
	        if(this._enabled === value)  return;
	        this._enabled = value;
	        if(this._imp)
	        {
	            this._imp.visible = this._enabled;
	        }
	    }
	});

	Object.defineProperty(Renderer.prototype, "castShadow",{
	    get:function () {
	        return this._castShadow;
	    },

	    set:function(value){
	        if(this._castShadow === value)  return;
	        this._castShadow = value;
	        if(this._imp)
	        {
	            this.__castShadowInChild(this._imp, value);
	        }
	    }
	});

	Object.defineProperty(Renderer.prototype, "receiveShadow",{
	    get:function () {
	        return this._receiveShadow;
	    },

	    set:function(value){
	        if(this._receiveShadow === value)  return;
	        this._receiveShadow = value;
	        if(this._imp)
	        {
	            this.__receiveShadowInChild(this._imp, value);
	        }
	    }
	});

	Object.defineProperty(Renderer.prototype, "materials",{
	    get:function () {
	        return this._externalMaterials;
	    },

	    set:function(value){
	        if(value.length == null)    return;
	        this._materials = [];
	        //TODO
	        for(var index = 0; index < value.length; ++index)
	        {
	            this._materials.push(value[index]);
	        }
	    }
	});

	Object.defineProperty(Renderer.prototype, "material",{
	    get:function () {
	        return this._externalMaterials[0] || null ;
	    },

	    set:function(value){
	        if (value == null) return;
	        if (!value.isMaterial) return;

	        //添加默认外部材质
	        if(!this._externalMaterials[0])
	            this._externalMaterials.push(null);

	        this.setMaterial(0,value);

	        // if(this._materials[0])
	        // {
	        //     this._materials[0].removeEventListener(Event.CHANGESHADER, this, this.__handleMaterialShaderChange);
	        //     this._materials[0].removeEventListener(Event.REMOVEASSET, this, this._materialAssetRemoved);
	        // }
	        // this._materials[0] = value;
	        // if(this._imp)
	        // {
	        //     this.__applyMaterialInChild(this._imp, this._materials[0]._imp);
	        // }
	        //
	        // if(value)
	        // {
	        //     value.addEventListener(Event.CHANGESHADER, this, this.__handleMaterialShaderChange);
	        //     value.addEventListener(Event.REMOVEASSET, this, this._materialAssetRemoved);
	        // }
	    }
	});
	// Renderer.attributes.add('enabled', {
	//     type: 'boolean',
	//     title: 'Enable'});

	Renderer._defaultMaterial = null;
	Object.defineProperty(Renderer,'defaultMaterial',{
	    get:function(){
	        if(!Renderer._defaultMaterial)
	            Renderer._defaultMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
	        return Renderer._defaultMaterial;
	    }
	});

	/**
	 * @class Web3DEngine.SkinnedMeshRenderer
	 * @name Web3DEngine.SkinnedMeshRenderer
	 * @classdesc SkinnedMeshRenderer组件,蒙皮网格过滤器。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Mesh } mesh 用于蒙皮的网格。
	 * @property { Material } material 用于蒙皮的材质。
	 * @property { Boolean } receiveShadow  如果为true，则会在此模型上投射阴影。
	 * @property { Boolean } castShadow 如果为true，则此模型将为启用了阴影投射的灯投射阴影。
	 */
	function SkinnedMeshRenderer(go) {
	    Renderer.call(this, go);

	    this.instClassType = SkinnedMeshRenderer.classType;
	    this._imp = null;
	    this._gltfScene = null;
	    this._skeletons = null;  //所有骨骼
	    this._mesh = null;

	    Object.defineProperty(this, "mesh",{
	        get:function () {
	            return this._mesh;
	        },

	        set:function(value){
	            if(!(value instanceof Mesh)) value = null;
	            // if(this._mesh == value) return;

	            if(this._mesh)
	                this._mesh.removeEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	            this._mesh = value;
	            if(this._mesh)
	                this._mesh.addEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	            if(this._gltfScene != null)
	            {
	                this.gameObject._imp.remove(this._gltfScene);
	                this._gltfScene = null;
	            }
	            if(this._mesh)
	            {
	                let cloneGltf = this._mesh._dupGltf();
	                this._gltfScene = cloneGltf.scene;
	                this._skeletons = cloneGltf.skeletons;
	                this._gltfScene.transform.parent = this.gameObject.transform;
	                // this.gameObject._imp.add(this._gltfScene._imp);
	                this._gltfScene._imp.layers.set(this.gameObject.layer);

	                this.__castShadowInChild(this._gltfScene._imp, this._castShadow);
	                this.__receiveShadowInChild(this._gltfScene._imp, this._receiveShadow);
	                this._gltfScene._imp.visible = this.enabled;
	                this._gltfScene._imp.userData.engineComponent = this;
	                this._imp = this._gltfScene._imp;
	                // //材质设置暂时屏蔽
	                // //设置模型材质
	                // this._materialNodes = this._getMaterialNodes(this._gltfScene._imp);
	                // this._setExternalMaterials(this._materialNodes, this._mesh._externalMaterials);

	            }

	            this.gameObject.dispatchEvent({type:Event$1.CHANGEMESH});
	        }
	    });

	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	}

	ExtendType(SkinnedMeshRenderer, Renderer, {
	    _copy:function(source){
	        Renderer.prototype._copy.call( this, source );
	        this.mesh = source.mesh;
	    },

	    _handleDestroy:function(event)
	    {
	        if(this._imp != null)
	        {
	            this.gameObject._imp.remove(this._imp);
	            this._imp = null;
	        }
	        if(this._mesh)
	            this._mesh.removeEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	    },

	    _assetRemoved: function (event) {
	        this.mesh = null;
	    },

	});

	SkinnedMeshRenderer.attributes.add('castShadow', {
	    type: 'boolean',
	    title: 'CastShadow',
	    default: false
	});

	SkinnedMeshRenderer.attributes.add('receiveShadow', {
	    type: 'boolean',
	    title: 'ReceiveShadow',
	    default: false
	});

	SkinnedMeshRenderer.attributes.add('material', {
	    type: 'Material',
	    title: 'Material',
	    default: null
	});

	SkinnedMeshRenderer.attributes.add('mesh', {
	    type: 'Mesh',
	    title: 'Mesh',
	    default: null
	});

	SkinnedMeshRenderer.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enable',
	    default: true
	});

	function AnimationHelper(go) {
	    Component.call(this, go);
	    this.instClassType = AnimationHelper.classType;
	    go.addEventListener(Event$1.ACTIVATE, this, this._onActivate);
	    go.addEventListener(Event$1.DEACTIVATE, this, this._onDeactivate);
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	    this.gameObject.addEventListener(Event$1.CHANGEMESH, this, this.resetHelper);

	    // var _this = this;
	    this._ikEnabled = true;
	    Object.defineProperty(this, "ikEnabled",{
	        get:function () {
	            return this._ikEnabled;
	        },

	        set:function(value){
	            if(this._ikEnabled === value)  return;
	            this._ikEnabled = value;
	        }
	    });
	    this._physicsEnabled = true;
	    Object.defineProperty(this, "physicsEnabled",{
	        get:function () {
	            return this._physicsEnabled;
	        },

	        set:function(value){
	            if(this._physicsEnabled === value)  return;
	            this._physicsEnabled = value;
	            if(this._physicsImp && value)
	            {
	                this._physicsImp.reset();
	            }
	            else if(this._physicsImp && !value)
	            {
	                this._restoreBones();
	                this._saveBones();
	            }
	        }
	    });

	    this.params = null;

	    this._ikImp = null;
	    this._physicsImp = null;
	    this._physicsJson = null;
	    this._originalBones = [];
	    this._backupBones = [];
	    this._grants = [];

	    this.resetHelper();

	    Application.instance.animationModuleInst.regHelper(this);
	}
	ExtendType(AnimationHelper, Component, {

	    resetHelper()
	    {
	        this._skinedMeshRender = this.gameObject.getComponent(SkinnedMeshRenderer);
	        if(this._skinedMeshRender)
	        {
	            if(this._skinedMeshRender.gameObject._imp)
	                this._groupImp = this._skinedMeshRender.gameObject._imp;

	            if(this._skinedMeshRender._skeletons[0])
	                this._skeleton = this._skinedMeshRender._skeletons[0];

	            if(this._skinedMeshRender._gltfScene._imp.geometry)
	                this._physicsJson = this._skinedMeshRender._gltfScene._imp.geometry.userData.MMD;
	            else if(this._skinedMeshRender.MMDdata)
	                this._physicsJson = this._skinedMeshRender.MMDdata;

	            if(this._groupImp && this._skeleton && this._physicsJson)
	            {
	                this._checkIKSolve();
	                this._checkPhysics();
	            }
	        }
	    },

	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	    },

	    _onActivate:function()
	    {
	        var isEnabled = this.gameObject._selfActive && this.enabled;
	        this.ikEnabled = isEnabled;
	        this.physicsEnabled = isEnabled;
	    },

	    _onDeactivate:function()
	    {
	        var isEnabled = this.gameObject._selfActive && this.enabled;
	        this.ikEnabled = isEnabled;
	        this.physicsEnabled = isEnabled;
	    },

	    _handleDestroy:function(event)
	    {
	        this.gameObject.removeEventListener(Event$1.ACTIVATE, this, this._onActivate);
	        this.gameObject.removeEventListener(Event$1.DEACTIVATE, this, this._onDeactivate);
	        this.removeEventListener(Event$1.DESTROY, this, this._handleDestroy);
	        this.gameObject.removeEventListener(Event$1.CHANGEMESH, this, this.resetHelper);

	        if(this._physicsImp)
	        {
	            this._physicsImp.reset();
	            this._physicsImp.removePhysics();

	            // if(this._originalBones)
	            //     this._backupBones = this._originalBones;
	            this._restoreBones();
	        }

	        Application.instance.animationModuleInst.unregHelper(this);  //从动画管理器中移除辅助
	    },

	    setGravity:function(gravity)
	    {
	      if(this._physicsImp)
	          this._physicsImp.setGravity(gravity);
	    },

	    _checkIKSolve: function () {
	        //移除旧的IK
	        if(this._ikImp)
	        {
	            if(this._ikImp.mesh == this._groupImp)
	                return;
	            // else
	                // this._ikImp.removeIK();
	        }


	        //添加新的IK
	        if(!this._groupImp || !this._physicsJson) return;
	        if(!this._ikImp)
	        {
	            this._ikImp = new CCDIKSolver( this._groupImp, this._physicsJson.iks, this._skeleton);
	        }
	    },

	    _checkPhysics: function () {
	        //移除旧的physics
	        if(this._physicsImp)
	        {
	            if(this._physicsImp.mesh == this._groupImp)
	                return;
	            else
	                this._physicsImp.removePhysics();
	        }

	        //添加新的physics
	        if(!this._groupImp || !this._physicsJson) return;
	        if(!this._physicsImp)
	        {
	            let originalBones = this._saveBones();
	            // for(let i=0; i < originalBones.length; i++) {
	            //     this._originalBones.push(originalBones[i]);
	            // }

	            if(Web3DEngine.Application.instance.params)
	                this.params = Web3DEngine.Application.instance.params;
	            this._physicsImp = new MMDPhysics( this._groupImp, this._physicsJson.rigidBodies,
	                this._physicsJson.constraints, this.params, this._skeleton);

	            this._optimizeIK( this._physicsJson.iks, this._skeleton, true );
	        }
	    },

	    /*
			 * Avoiding these two issues by restore/save bones before/after mixer animation.
			 *
			 * 1. PropertyMixer used by AnimationMixer holds cache value in .buffer.
			 *    Calculating IK, Grant, and Physics after mixer animation can break
			 *    the cache coherency.
			 *
			 * 2. Applying Grant two or more times without reset the posing breaks model.
	    */
	    _saveBones: function () {
	        if(!this._skeleton) return;

	        var bones = this._skeleton.bones;
	        var backupBones = this._backupBones;

	        if ( backupBones === undefined || backupBones === null ) {
	            backupBones = new Float32Array( bones.length * 7 );
	            this._backupBones = backupBones;
	        }

	        for ( var i = 0, il = bones.length; i < il; i ++ ) {
	            var bone = bones[ i ];
	            bone.position.toArray( backupBones, i * 7 );
	            bone.quaternion.toArray( backupBones, i * 7 + 3 );
	        }

	        return backupBones;
	    },

	    _restoreBones: function () {
	        if(!this._skeleton) return;
	        var bones = this._skeleton.bones;
	        var backupBones = this._backupBones;
	        if ( backupBones === undefined || backupBones === null ) return;

	        for ( var i = 0, il = bones.length; i < il; i ++ ) {
	            var bone = bones[ i ];
	            bone.position.fromArray( backupBones, i * 7 );
	            bone.quaternion.fromArray( backupBones, i * 7 + 3 );
	        }

	    },

	    //优化IK
	    _optimizeIK: function ( iks, skeleton, physicsEnabled ) {
	        if(!iks || !skeleton) return;
	        let bones = skeleton.bones;

	        for ( var i = 0, il = iks.length; i < il; i ++ ) {

	            var ik = iks[ i ];
	            var links = ik.links;

	            for ( var j = 0, jl = links.length; j < jl; j ++ ) {

	                var link = links[ j ];

	                if ( physicsEnabled === true ) {
	                    // disable IK of the bone the corresponding rigidBody type of which is 1 or 2
	                    // because its rotation will be overriden by physics
	                    link.enabled = bones[ link.index ].rigidBodyType > 0 ? false : true;
	                } else {
	                    link.enabled = true;
	                }
	            }

	        }

	    },

	    //设置MMD骨骼旋转付与
	    _updateGrants: function () {
	        if(!this._physicsJson || !this._skeleton) return;

	        var bones = this._skeleton.bones;
	        var grants = this._physicsJson.grants;
	        var quaternion = new THREE.Quaternion();

	        for ( var i = 0, il = grants.length; i < il; i ++ ) {

	            var grant = grants[ i ];
	            var bone = bones[ grant.index ];
	            var parentBone = bones[ grant.parentIndex ];
	            if(!parentBone || !bone) continue;

	            if ( grant.isLocal ) {
	                // TODO: implement
	                if ( grant.affectPosition ) ;

	                // TODO: implement
	                if ( grant.affectRotation ) ;
	            } else {
	                // TODO: implement
	                if ( grant.affectPosition ) ;

	                if ( grant.affectRotation ) {
	                    quaternion.set( 0, 0, 0, 1 );
	                    quaternion.slerp( parentBone.quaternion, grant.ratio );
	                    bone.quaternion.multiply( quaternion );
	                }
	            }
	        }
	    }
	});

	//todo
	/*
	1、检查AnimationHelper和_skinmesh匹配关系并进行设置的接口，每次设置后需根据物理和IK状态再次启用或关闭
	2、每次替换模型设置_skinmesh接口，设置模型后执行1检查关系
	3、物理开关
	4、IK开关
	*/

	/**
	 * @class Web3DEngine.AnimationAction
	 * @name Web3DEngine.AnimationAction
	 * @classdesc AnimationAction,一个动画行为实例类，用于设置动画和播放动画。
	 * @property { Boolean } enabled 如果为true,则播放该动画，反之，停止。
	 * @property { Boolean } paused 如果为true,则暂停该动画，反之，继续播放。
	 * @property { String } name 返回动画的名称。[only read]
	 * @property { Number } speed 动画播放的速度，为负值则倒播。
	 * @property { Number } weight 动画的权重。
	 * @property { Number } loopTimes 动画播放的循环次数，默认为Infinity。
	 * @property { Number } startTime 动作开始的时间点。
	 * @property { Number } duration 动作持续的时间。
	 * @property { Boolean } clampWhenFinished  如果启用，并循环次数为1，则在最后一帧时自动暂停。
	 * @property { AnimationAction.ENUM_WrapMode } wrapMode 动画的循环模式。
	 */
	function AnimationAction( action ) {

	    this._action = action ;
	    this._clip = action._clip;//.getClip()
	    this._name = this._clip.name;
	    // this._loop = this._action.loop;  //循环模式 Three 有特定值
	    // this._loopTimes = this._action.repetitions;
	    // this._startTime = this._action.time;

	    // zeroSlopeAtEnd: true
	    // zeroSlopeAtStart: true

	    Object.defineProperty(this, 'name',{
	        get:function () {
	            return this._name;
	        }
	    });

	    // enabled 值设为false会禁用动作, 也就是无效.默认值是true
	    // 当enabled被重新置为true, 动画将从当前时间（time）继续 (将 enabled 置为 false 不会重置此次动作)
	    // 说明: 将enabled置为true不会让动画自动重新开始。
	    // 只有满足以下条件时才会马上重新开始: 暂停（paused）值为false,
	    // 同时动作没有失效 (执行停止(stop)命令或重置(reset)命令， 且权重(weight)和时间比例(timeScale)都不能为0
	    Object.defineProperty(this, 'enabled',{
	        get:function () {
	            return this._action.enabled;
	        },
	        set:function( value ){
	            this._action.enabled = value ;
	        }
	    });

	    Object.defineProperty(this, 'paused',{
	        get:function () {
	            return this._action.paused;
	        },
	        set:function(value){
	            this._action.paused = value;
	        }
	    });

	    Object.defineProperty(this, 'loopTimes',{
	        get:function () {
	            return this._action.repetitions ;
	        },
	        set:function( value ){
	            // 默认值是无穷，Infinity
	            this._action.repetitions = value ;
	        }
	    });

	    // 设置动画的循环模式
	    Object.defineProperty(this, 'wrapMode',{
	        get:function () {
	            return  AnimationAction.ENUM_WrapMode[ this._action.loop ] ;
	        },

	        set:function(value){
	            if( AnimationAction.ENUM_WrapMode.hasOwnProperty( value ) ){
	                this._action.loop = AnimationAction.ENUM_WrapMode[ value ];
	            }
	        }
	    });

	    //  动画的权重（AnimationState.weight ）
	    Object.defineProperty(this, 'weight',{
	        get:function () {
	            return this._action.getEffectiveWeight();
	        },

	        set:function(value){
	            this._action.setEffectiveWeight(value);
	        }
	    });

	    Object.defineProperty(this, 'startTime',{
	        get:function () {
	            return this._action.time;
	        },
	        set:function(value){
	            this._startTime = value ;
	            this._action.time = this._startTime;
	        }
	    });

	    Object.defineProperty(this, 'duration',{
	        get:function () {
	            return this._clip.duration;
	        },
	        set:function(value){
	            this._clip.duration = this.duration;
	        }
	    });

	    Object.defineProperty(this, 'speed',{
	        get:function () {
	            return this._action.getEffectiveTimeScale();
	        },

	        set:function(value){
	            this._action.setEffectiveTimeScale( value );
	        }
	    });

	    Object.defineProperty(this, 'clampWhenFinished',{
	        get:function () {
	            return this._action.clampWhenFinished;
	        },
	        set:function( value ){
	            this._action.clampWhenFinished = value ;
	            // if( this._action.clampWhenFinished === true ){
	            //     this._action.loop = AnimationAction.ENUM_WrapMode.Once;
	            // }else{
	            //     this._action.repetitions = Infinity;
	            //     this._action.loop = AnimationAction.ENUM_WrapMode.Repeat;
	            // }
	        }
	    });

	}
	//循环模式
	AnimationAction.ENUM_WrapMode = {
	    "Once" : THREE.LoopOnce ,   // 只执行一次
	    "Repeat" : THREE.LoopRepeat ,  // 重复次数为repetitions的值, 且每次循环结束时候将回到起始动作开始下一次循环。
	    "PingPong" : THREE.LoopPingPong ,  // 重复次数为repetitions的值, 且像乒乓球一样在起始点与结束点之间来回循环。
	    0: THREE.LoopOnce ,
	    1: THREE.LoopRepeat ,
	    2: THREE.LoopPingPong ,
	    2200: THREE.LoopOnce ,
	    2201: THREE.LoopRepeat ,
	    2202: THREE.LoopPingPong
	};

	// //结束模式
	// AnimationAction.ENUM_InterpolateMode = {
	//     0: Three.InterpolateDiscrete ,   //
	//     1: Three.InterpolateLinear ,  //
	//     2: Three.InterpolateSmooth ,  //
	// };
	// //插值模式
	// AnimationAction.ENUM_EngingMode = {
	//     0: Three.ZeroCurvatureEnding ,   //
	//     1: Three.ZeroSlopeEnding ,  //
	//     2: Three.WrapAroundEnding ,  //
	// };

	AnimationAction.classType = 'AnimationAction';

	AnimationAction.prototype = Object.assign( Object.create( Component.prototype ), {
	    constructor: AnimationAction,
	    isAnimationAction: true ,
	    reset : function(){
	        this._action.reset();
	        return this;
	    },
	    stop : function(){
	        this._action.stop();
	        return this;
	    },
	    play : function(){
	        this._action.play();
	        return this;
	    },
	    setDuration : function( Number ){
	        //设置单此循环的持续时间
	        this._action.setDuration( Number );
	        return this;
	    },


	    isPlaying :function(){
	        return this._action.isRunning();
	    },
	    crossFadeTo : function ( endAction , durtion , isWarp ){
	        this._action.crossFadeTo( endAction._action , durtion , isWarp === undefined ? true : isWarp );
	        return endAction;
	    },
	    fadeOut : function( time ){
	        this._action.fadeOut( time );
	        return this;
	    },
	    fadeIn : function( time ){
	        this._action.fadeIn( time );
	        return this;
	    }
	});

	/**
	 * @class Web3DEngine.AnimationPlayer
	 * @name Web3DEngine.AnimationPlayer
	 * @classdesc AnimationPlayer,用于模拟粒子并在CPU或GPU上生成可渲染的粒子网格。GPU仿真通常比其CPU仿真快得多，因为它避免了CPU-GPU的慢速同步并利用了许多GPU核心。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Number } speed 动画播放速度的倍速器。
	 * @property { Boolean } playAutomatically  如果启用，则播放默认动画。
	 * @property { AnimationAction.ENUM_WrapMode } wrapMode 动画的循环模式。
	 */
	function AnimationPlayer(go) {
		Component.call(this, go);
	    this.instClassType = AnimationPlayer.classType;
		this._skinedMeshRender = this.gameObject.getComponent(SkinnedMeshRenderer);
	    this._mixer = null;

		this._currentAction = null;
		this._currentSpeed = 1;
	    this._defaultAction = null;
	    this._playAutomatically = true;

	    this._actions = {};
	    this._extraActionList = {};

	    this._weights = {};
	    this._wrapMode = AnimationAction.ENUM_WrapMode.Repeat;

	    this._enabled = true;
	    this._paused = false;
	    Object.defineProperty(this, "enabled",{
	        get:function () {
	            return this._enabled;
	        },

	        set:function(value){
	            if(this._enabled === value)  return;
	            this._enabled = value;
	            if( this._mixer )
	            {
	                this._mixer.enabled = this._enabled;
	            }
	        }
	    });

	    Object.defineProperty(this, "paused",{
	        get:function () {
	            return this._paused;
	        },
	        set:function(value){
	            value ?   this._Paused() : this._unPaused() ;
	            this._paused = value ;
	        }
	    });

	    Object.defineProperty(this, "speed",{
	        get:function () {
	            return this._currentSpeed;
	        },

	        set:function(value){
	        	if( this._mixer )
	            {
	                this._mixer.timeScale = value;
	            }

	            this._currentSpeed = value;
	        }
	    });

	    // 是否播放默认动画
	    Object.defineProperty(this, "playAutomatically",{
	        get:function () {
	            return this._playAutomatically;
	        },

	        set:function(value){
	            this._playAutomatically = value;
	            this._autoPlay();
	        }
	    });

	    // 循环模式: 修改后该动画播放器下所有动画的循环模式都会更改
	    Object.defineProperty(this, "wrapMode",{
	        get:function () {
	            return this._wrapMode;
	        },

	        set:function( value ){
	            this._wrapMode = value;
	            this._setWrapMode( value );
	        }
	    });

	    // 额外动作列表数据


	    this._checkRes();

	    //add event listener
	    go.addEventListener(Event$1.ACTIVATE, this, this.__onActivate);
	    go.addEventListener(Event$1.DEACTIVATE, this, this.__onDeactivate);
	    go.addEventListener(Event$1.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Event$1.CHANGEMESH, this, this.__onChangeMesh);
	    go.addEventListener(Event$1.REMOVECOMPONENT, this, this.__onRemoveComponent);
	    this.addEventListener(Event$1.DESTROY, this, this.__onAnimationPlayerDestroy);
	}

	ExtendType(AnimationPlayer, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	    },

	    __onAnimationPlayerDestroy:function(data){
	        this._destroyRes();
	    },

	    __onAddComponent:function(data)
	    {
	        if(data && data.componentInstance && data.componentInstance.isSkinnedMeshRenderer)
	        {
	            //only one mixer is permitted at this moment
	            if(this._skinedMeshRender == null)
	            {
	                this._skinedMeshRender = data.componentInstance;
	                this._checkRes();
	            }
	        }

	        if( data && data.componentInstance && (data.componentInstance.isSkinnedMeshRenderer || data.componentInstance.isAnimationPlayer)){
	            this._autoPlay();
	        }
	    },

	    __onChangeMesh:function()
	    {
	        this._checkRes();
	        this._autoPlay();
	    },

	    __onRemoveComponent:function(data)
	    {
	        if(data && data.componentInstance && data.componentInstance.isSkinnedMeshRenderer)
	        {
	            //only one mixer is permitted at this moment
	            if(this._skinedMeshRender)
	            {
	                this._skinedMeshRender = null;
	                this._checkRes();
	            }
	        }
	    },

	    _checkRes:function()
	    {
	        if(this._skinedMeshRender && this._skinedMeshRender._gltfScene)
	        {
	            //process existing resources
	            if(this._mixer != null && this._mixer.getRoot() !== this._skinedMeshRender._gltfScene._imp)
	            {
	                this._destroyRes();
	            }
	            // this._skinedMeshRender._imp == scene ;
	            this._mixer = new THREE.AnimationMixer(this._skinedMeshRender._gltfScene._imp);//TODO
	            Application.instance.animationModuleInst.regMixer(this);

	            // ע�������¼�;
	            let scope = this;
	            let _dispatchLoop  = function ( event ){
	                let action = scope._actions[ event.action._clip.name ];
	                scope.dispatchEvent( {type:Event$1.LOOPED , name:action.name ,action: action });
	            };

	            let _dispatchFinished = function ( event ){
	                let action = scope._actions[ event.action._clip.name ];
	                scope.dispatchEvent( { type:Event$1.FINISHED , name:action.name ,action: action });
	            };
	            this._mixer.addEventListener( 'loop', _dispatchLoop );
	            this._mixer.addEventListener( 'finished', _dispatchFinished );
	            this._mixer.timeScale = this._currentSpeed;

	            // ����animationAction
	            if(!this._skinedMeshRender._mesh) return;
	            let animations = this._skinedMeshRender._mesh._originalAsset.animations;
	            if(animations)
	            {
	                for(let i = 0 ; i< animations.length ; ++i ){
	                    let action = new AnimationAction( this._mixer.clipAction( animations[ i ] ) );
	                    this._actions[ animations[ i ].name ] = action;
	                    this.setBlendingWeight( action , 0 );
	                }
	            }

	            this._setWrapMode( this._wrapMode );

	            for(var key in this._actions) {
	                this._defaultAction = this._actions[key];
	            }
	        }
	        else {
	            if(this._mixer !== undefined)
	            {
	                this._destroyRes();
	            }
	        }
	    },

	    //提取gltf下动画剪辑放入列表中
	    addClipByMesh(mesh)
	    {
	        if(mesh._imp !== undefined)
	        {
	            for ( var i = 0; i < mesh._originalAsset.animations.length; i ++ ) {
	                let animation = mesh._originalAsset.animations[i];
	                if(animation)
	                {
	                    this.addClip(animation);
	                }
	            }
	        }
	    },

	    addClip(animation)
	    {
	        let action = new AnimationAction( this._mixer.clipAction( animation ) );
	        this._actions[ animation.name ] = action;
	        this._extraActionList[ animation.name ] = action;
	        this.setBlendingWeight( action , 0 );
	        // if(!this._defaultAction) this._defaultAction = action;
	        if(!!action) this._defaultAction = action;
	        if(!!action) this._currentAction = action;
	    },

	    //根据gltf删除动画剪辑
	    removeClipByMesh(mesh)
	    {
	        if(mesh._imp !== undefined) {
	            for ( var i = 0; i < mesh._originalAsset.animations.length; i ++ ) {
	                let animation = mesh._originalAsset.animations[i];
	                if (animation) {
	                    var action = this._extraActionList[animation.name];
	                    if (action != undefined && action != null) {
	                        delete this._actions[animation.name];
	                        delete this._extraActionList[animation.name];
	                    }
	                }
	            }
	        }
	    },

	    _getNameInPath(path)
	    {
	        let actionName = path.split(".")[0];
	        var index = actionName .lastIndexOf("\/");
	        actionName = actionName.substring(index + 1, actionName.length);

	        return actionName;
	    },

	    //刷新extra动画列表,每次替换模型后依次重新添加
	    _updateExtraActions()
	    {
	        for (var key in this._extraActionList) {
	            var action = this._extraActionList[key];
	            this._actions[ key ] = action;
	            this.setBlendingWeight( action , 0 );
	            if(!this._defaultAction) this._defaultAction = action;
	        }
	    },

	    _destroyRes:function()
	    {
	        if(this._mixer != null)
	        {
	            Application.instance.animationModuleInst.unregMixer(this);
	            this._mixer = null;
	            this._actions = null;
	        }
	    },

	    _findAnimClipByName:function(clipName){
	        let validRes = this._skinedMeshRender._mesh && this._skinedMeshRender._mesh._originalAsset && this._skinedMeshRender._mesh._originalAsset.animations;
	        if(!validRes)   return null;

	        let animations = this._skinedMeshRender._mesh._originalAsset.animations;
	        let clip = null;
	        for(let index = 0; index < animations.length; ++index)
	        {
	            let anim = animations[index];
	            if(anim.name === clipName)
	            {
	                clip = anim;
	                break;
	            }
	        }
	        return clip;
	    },

	    getAllClipsName:function()
	    {
	        return this.getAllActionsName();
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#getAllActionsName
	     * @description 获取该组件下所有的动画名称。
	     * @returns {String[]} 动画名称的数组。
	     */
	    getAllActionsName:function()
	    {
	        let names = [];
	        for(var key in this._actions) {
	            names.push( key );
	        }
	        return names;
	    },

	    playAnimationClip: function ( clipName, transTime ) {
	        // let clip = this._findAnimClipByName(clipName);
	        // if(clip === null)   return;
	        let endAction = this._actions[ clipName ];
	        if( endAction === null)   return;
	        let duration = transTime || 1;
	        // let endAction = this.blendAnimationWeight(clip, 1);
	        // endAction.time = 0;
	        // this.setBlendingWeight( endAction , 1);


	        // Crossfade with warping - you can also try without warping by setting the third parameter to false

	        //this._currentAction.crossFadeTo( endAction, duration, true );
	        if(this._currentAction === endAction)    return;

	        this._CrossFadeTo( endAction , duration );
	        this._currentAction = endAction;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#playAnimation
	     * @description 播放某个动画。
	     * @param {String} action 动画的名称。
	     */
	    playAnimation:function( action ){
	        let endAction = action ? ( action.isAnimationAction ? action : ( typeof action === "string" ? this._actions[action] : null )): null;
	        if( endAction == null ){
	            this._currentAction.play();
	            return ;
	        }
	        let actionIsPlaying = this._isPlaying();
	        if( actionIsPlaying instanceof  Array && actionIsPlaying ) {
	            for (let i = 0; i < actionIsPlaying.length; ++i) {
	                actionIsPlaying[i].stop();
	                actionIsPlaying[i].weight = 0;
	            }
	        }
	        endAction.weight = 1;
	        endAction.play();
	        this._currentAction = endAction ;
	    },

	    _autoPlay : function (){
	        // ����Ĭ�϶���
	        if( this._playAutomatically && this._defaultAction ) {
	            let action = this._currentAction = this._defaultAction;
	            this.setBlendingWeight( action ,1 );
	        }else if( !this._playAutomatically && this._defaultAction ){
	            let action = this._currentAction = this._defaultAction;
	            this.setBlendingWeight( action , 0 );
	        }
	    },

	    blendAnimationWeight:function( clip , weight )
	    {
	        if(this._mixer == null) return;

	        let action = this._mixer.clipAction(clip);
	        if(action === undefined)    return;

	        // action.enabled = true;
	        action.setEffectiveTimeScale( 1 );
	        action.setEffectiveWeight( weight );

	        return action;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#setBlendingWeight
	     * @description 设置某个动画的播放权重并立即播放。
	     * @param {String} action 动画的名称。
	     * @param {String} weight 权重数值。
	     * @returns {Web3DEngine.AnimationAction} 动画实例。
	     */
	    setBlendingWeight:function( action , weight ){
	        if( this._mixer == null ) return;
	        if( action == null ) return ;

	        let Action = action.isAnimationAction ? action : ( typeof action === "string" ? this._actions[action] : null );

	        if( !Action.isAnimationAction ) return ;

	        Action.enabled = true;
	        Action.speed = 1;
	        Action.weight = weight ;

	        this._weights[ action.name ] = weight ;
	        return Action.play();
	    },

	    _setWrapMode:function( value){
	        for(var key in this._actions) {
	            this._actions[key].wrapMode = value;
	        }
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#getAnimationAction
	     * @description 得到动画实例。
	     * @param {String} name 动画的名称。
	     * @returns {AnimationAction} 动画的实例。
	     */
	    getAnimationAction: function ( name ){
	        return this._actions[name];
	    },

	    getCurrentAction()
	    {
	        return this._currentAction;
	    },

	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#getAllAnimationActions
	     * @description 得到所有的动画实例。
	     * @param {Boolean} isArray 如果为true,则以数组的形式返回。
	     * @returns {Object} 动画的实例。
	     */
	    getAllAnimationActions: function ( isArray ){
	        // if( isArray ) return this._actionsList;
	        if(isArray)
	        {
	            let lstAction = [] ;
	            for(var key in this._actions) {
	                lstAction.push( this._actions[key] );
	            }
	            return lstAction;
	        }
	        return this._actions;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#Stop
	     * @description 停止所有动画播放。
	     */
	    Stop : function (){
	        // ֹͣ���е�ǰAnimation���ڲ��ŵĶ�����
	        // this._mixer.stopAllAction();
	        for(var key in this._actions) {
	            this._actions[key].stop();
	        }
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#Play
	     * @description 播放所有动画，如果动画实例设置了权重，则会设置权重。
	     */
	    Play : function (){
	        // ֹͣ���е�ǰAnimation���ڲ��ŵĶ�����
	        // this._mixer.stopAllAction();
	        let scope = this;
	        for(var key in this._actions) {
	            scope.setBlendingWeight( this._actions[key] , scope._weights[key ] );
	        }
	    },

	    _Paused : function (){
	        for(var key in this._actions) {
	            this._actions[key].paused = true;
	        }
	    },
	    _unPaused : function (){
	        for(var key in this._actions) {
	            this._actions[key].paused = false;
	        }
	    },

	    _isPlaying : function (){
	        let isAction = [] ;
	        for(var key in this._actions) {
	            if( this._actions[key].isPlaying() ){
	                isAction.push( this._actions[key] );
	            }
	        }
	        return isAction.length > 0 ? isAction : false ;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#isPlaying
	     * @description 是否正在播放任何动画，false为没有播放动画，true为正在播放动画。
	     * @returns {Boolean}
	     */
	    isPlaying : function (){
	        let actions = this._isPlaying();
	        return actions.length > 0 ;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#onLooped
	     * @description 注册动画单次循环结束的事件回调。
	     * @param {AnimationPlayer~requestCallback} callback 一个方法的引用，方法接收两个参数：动画的name，动画的实例；
	     * @returns {AnimationPlayer}
	     */
	    onLooped : function ( callback ){
	        this.addEventListener( Event$1.LOOPED , this , callback );
	        return this;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#removeOnLooped
	     * @description 移除注册的动画单次循环结束事件的回调。
	     * @param {function} callback 一个方法的引用；
	     * @returns {AnimationPlayer}
	     */
	    removeOnLooped : function ( callback){
	        this.removeEventListener( Event$1.LOOPED , this , callback );
	        return this;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#onFinished
	     * @description 注册全部动画结束的事件回调。
	     * @param {function} callback 一个方法的引用，方法接收两个参数：动画的name，动画的实例；
	     * @returns {AnimationPlayer}
	     */
	    onFinished : function ( callback ){
	        this.addEventListener( Event$1.FINISHED , this , callback );
	        return this;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#removeOnFinished
	     * @description 移除注册的全部动画结束事件的回调。
	     * @param {function} callback 一个方法的引用；
	     * @returns {AnimationPlayer}
	     */
	    removeOnFinished : function ( callback){
	        this.removeEventListener( Event$1.FINISHED , this , callback );
	        return this;
	    },

	    _CrossFadeTo : function ( startAction , endAction , duration ){

	        this.onLooped( Event$1.LOOPED , onLoopFinished );
	        let scope = this;

	        //����һ�����ɣ��ȴ���һ���������
	        function onLoopFinished( event ){
	            if( event.action === startAction._action ){
	                scope.removeOnLooped( Event$1.LOOPED , onLoopFinished );
	                // ��һ��ʱ���ڵ�������Ϊname�Ķ������ҵ�����������
	                // // ������ʼ���������ҽ���������˥��֮ǰ����õ�1��Ȩ�أ����ڿ�ʼ���������Ѿ�������ط��õ���֤��
	                scope.setBlendingWeight( endAction , 1 );
	                endAction.startTime = 0;
	                startAction.crossFadeTo( endAction , duration , true ).play();
	            }
	        }

	    },
	    /**
	     * @function
	     * @name Web3DEngine.AnimationPlayer#CrossFade
	     * @description 在一定时间内淡入名称为name的动画并且淡出其他动画。
	     * @param {String} name 目标动画的名称。
	     * @param {Number} duration 一个时间间隔。
	     * @returns {AnimationPlayer}
	     */
	    CrossFade : function ( end , duration ){
	        // ��һ��ʱ���ڵ�������Ϊname�Ķ������ҵ�������������
	        let actionIsPlaying = this._isPlaying();
	        let endAction = end.isAnimationAction ? end : ( typeof end === "string" ? this._actions[end] : null );
	        if( endAction == null ){
	            console.warn( "�ö�����������ȱ����Ϊ" + end + "�Ķ���!!, �޷�����");
	            return ;
	        }
	        if( actionIsPlaying instanceof  Array && actionIsPlaying ){
	            if( actionIsPlaying.length === 1 &&  actionIsPlaying[0] === endAction){
	                return ;
	            }
	            for(let i = 0 ; i < actionIsPlaying.length ; ++i ){
	                if( actionIsPlaying[i] !== endAction){
	                    actionIsPlaying[i].fadeOut( duration );
	                }
	            }
	        }
	        this.setBlendingWeight( endAction , 1 ).stop(); // ����ѵ���Ķ���Ȩ����Ϊ1,
	        endAction.fadeIn( duration ).play();
	        this._currentAction = endAction ;
	        return this;
	    },



	    // //根据骨骼更新W3D中子节点位置
	    // updateBones()
	    // {
	    //  if(this._skinedMeshRender && this._isPlaying())
	    //  {
	    //      // this._skinedMeshRender._updateBones();
	    //  }
	    // }
	});

	AnimationPlayer.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enabled',
	    default: true
	});

	AnimationPlayer.attributes.add('speed', {
	    type: 'number',
	    title: 'Speed',
	    default: true
	});

	AnimationPlayer.attributes.add('paused', {
	    type: 'boolean',
	    title: 'Paused',
	    default: false
	});

	AnimationPlayer.attributes.add('playAutomatically', {
	    type: 'boolean',
	    title: 'playAutomatically',
	    default: true
	});

	AnimationPlayer.attributes.add('wrapMode', {
	    type: 'number',
	    title: 'wrapMode',
	    default : AnimationAction.ENUM_WrapMode.Repeat
	});

	function _Animation() {
	    this._regedMixers=[];
	    this._regedPhysicsHelpers = [];
	    this._dic = new Array();
	}

	Object.defineProperty(_Animation, "instance",{
	    get:function () {
	        return this._instance;
	    }
	});

	Object.assign( _Animation.prototype, {

	    init:function(){
	    },

	    regMixer:function(animation){
	        // let mixer = animation._mixer;
	        let index = this._regedMixers.indexOf(animation);
	        if(index === -1)
	        {
	            this._regedMixers.push(animation);
	            let helper = animation.gameObject.getComponent(AnimationHelper);
	            if(helper)
	            {
	                this._dic[animation] = helper;
	            }
	        }
	    },

	    unregMixer:function(animation){
	        // let mixer = animation._mixer;
	        let index = this._regedMixers.indexOf(animation);
	        if(index >= 0)
	        {
	            this._regedMixers.splice(index, 1);
	            if(this._dic[animation])
	            {
	                delete this._dic[animation];
	            }
	        }
	    },

	    regHelper:function(helper){
	        let index = this._regedPhysicsHelpers.indexOf(helper);
	        if(index === -1)
	        {
	            this._regedPhysicsHelpers.push(helper);
	            let animation = helper.gameObject.getComponent(AnimationPlayer);
	            if(animation)
	            {
	                this._dic[animation] = helper;
	            }
	        }
	    },

	    unregHelper:function(helper){
	        let index = this._regedPhysicsHelpers.indexOf(helper);
	        if(index >= 0)
	        {
	            this._regedPhysicsHelpers.splice(index, 1);
	            for (var key in this._dic) {
	                if(this._dic[key] == helper)
	                {
	                    delete this._dic[key];
	                    break;
	                }
	            }
	        }
	    },

	    update:function(deltaTime){
	        for(let index = 0; index < this._regedMixers.length; ++index)
	        {
	            // this._regedMixers[index]._mixer.update(deltaTime);
	            let animation = this._regedMixers[index];
	            let animationHelper = this._dic[animation];

	            if(animationHelper)
	                animationHelper._restoreBones();

	            animation._mixer.update(deltaTime);

	            if(animationHelper)
	            {
	                animationHelper._saveBones();
	                if(animationHelper._ikImp && animationHelper.ikEnabled)
	                {
	                    if(animationHelper._skinedMeshRender._gltfScene._imp)
	                        animationHelper._skinedMeshRender._gltfScene._imp.updateMatrixWorld( true );

	                    animationHelper._ikImp.update();
	                }

	                animationHelper._updateGrants();
	            }
	        }

	        //MMD物理和IK动画更新需放到动画后，并且相关Mesh需updateMatrixWorld
	        for(let index = 0; index < this._regedPhysicsHelpers.length; ++index)
	        {
	            let animationHelper = this._regedPhysicsHelpers[index];
	            if ( animationHelper != undefined)
	            {
	                if(animationHelper._physicsImp && animationHelper.physicsEnabled)
	                    animationHelper._physicsImp.update( deltaTime );

	            }
	        }
	    }
	});

	function ParticleSystemManager() {
	    this._regedParticles=[];
	}

	Object.defineProperty(ParticleSystemManager, "instance",{
	    get:function () {
	        return this._instance;
	    }
	});

	Object.assign( ParticleSystemManager.prototype, {

	    regParticles:function(particles){
	        let index = this._regedParticles.indexOf(particles);
	        if(index === -1)
	        {
	            this._regedParticles.push(particles);
	        }
	    },

	    unregParticles:function(particles){
	        let index = this._regedParticles.indexOf(particles);
	        if(index >= 0)
	        {
	            this._regedParticles.splice(index, 1);
	        }
	    },

	    update:function(deltaTime){
	        for(let index = 0; index < this._regedParticles.length; ++index)
	        {
	            this._regedParticles[index].update(deltaTime);
	        }
	    }
	});

	function Touch() {
	    this.__position = null;
	}

	Object.assign( Touch.prototype, {
	    constructor: Touch,
	    UpdatePos: function (XPos, YPos) {
	        if(this.__position == null)
	        {
	            this.__position = new Vector2;
	            this.__lastPosition = new Vector2(0,0);
	        }
	        else {
	            this.__lastPosition.x = this.__position.x;
	            this.__lastPosition.y = this.__position.y;
	        }
	        this.__position.x = XPos;
	        this.__position.y = YPos;
	    }
	});

	Object.defineProperty(Touch.prototype, "deltaPosition",{
	    get:function () {
	        let delta = new Vector2();
	        delta.x = this.__lastPosition.x - this.__position.x;
	        delta.y = this.__lastPosition.y - this.__position.y;
	        return delta;
	    }
	});

	KeyboardState.ALIAS = {
	    8: "backspace", 9: "tab", 13: "enter", 16: "shift",
	    17: "ctrl", 18: "alt", 27: "esc", 32: "space",
	    33: "pageup", 34: "pagedown", 35: "end", 36: "home",
	    37: "left", 38: "up", 39: "right", 40: "down",
	    45: "insert", 46: "delete", 186: ";", 187: "=",
	    188: ",", 189: "-", 190: ".", 191: "/",
	    219: "[", 220: "\\", 221: "]", 222: "'"
	};

	/**
	 *       keyboard.down("A")    -- true for one update cycle after key is pressed
	 *       keyboard.pressed("A") -- true as long as key is being pressed
	 *       keyboard.up("A")      -- true for one update cycle after key is released
	 */
	function KeyboardState(listenObject) {

	    this._srcObj = listenObject;

	    this.status = {};

	    let self = this;

	    this._onKeyDown = function (event) {
	        self._handleKeyDown(event);
	    };

	    this._onKeyUp = function (event) {
	        self._handleKeyUp(event);
	    };

	    this._srcObj.addEventListener("keydown", this._onKeyDown, false);
	    this._srcObj.addEventListener("keyup", this._onKeyUp, false);
	}

	ExtendType(KeyboardState, EventDispatcher, {
	    _handleDestroy: function () {
	        this._srcObj.removeEventListener("keydown", this._onKeyDown, false);
	        this._srcObj.removeEventListener("keyup", this._onKeyUp, false);
	    },

	    _getKeyName: function (keyCode) {
	        return (KeyboardState.ALIAS[keyCode] != null) ?
	            KeyboardState.ALIAS[keyCode] :
	            String.fromCharCode(keyCode);
	    },

	    _handleKeyDown: function (event) {
	        var key = this._getKeyName(event.keyCode);
	        if (!this.status[key])
	            this.status[key] = { down: false, pressed: false, up: false, updatedPreviously: false };
	    },

	    _handleKeyUp: function (event) {
	        var key = this._getKeyName(event.keyCode);
	        if (this.status[key])
	            this.status[key].pressed = false;
	    },

	    update: function (deltaTime) {
	        for (var key in this.status) {
	            // insure that every keypress has "down" status exactly once
	            if (!this.status[key].updatedPreviously) {
	                this.status[key].down = true;
	                this.status[key].pressed = true;
	                this.status[key].updatedPreviously = true;
	                // console.log(key + " is down!");
	            }
	            else // updated previously
	            {
	                this.status[key].down = false;
	            }

	            // key has been flagged as "up" since last update
	            if (this.status[key].up) {
	                delete this.status[key];
	                continue; // move on to next key
	            }

	            // key released
	            if (!this.status[key].pressed) {
	                this.status[key].up = true;
	                // console.log(key + " is up!");
	            }
	        }
	    },

	    getKeyDown: function (keyName) {
	        return (this.status[keyName] && this.status[keyName].down);
	    },

	    getKey: function (keyName) {
	        return (this.status[keyName] && this.status[keyName].pressed);
	    },

	    getKeyUp: function (keyName) {
	        return (this.status[keyName] && this.status[keyName].up);
	    },

	});

	function MouseState(listenObject) {

	    this._srcObj = listenObject;

	    this._mousePosition = new THREE.Vector2();

	    this.status = {};

	    let self = this;

	    this._onMouseDown = function (event) {
	        self._handleMouseDown(event);
			event.stopImmediatePropagation();
	        event.stopPropagation();
	    };

	    this._onMouseUp = function (event) {
	        self._handleMouseUp(event);
			event.stopImmediatePropagation();
	        event.stopPropagation();
	    };

	    this._onMouseMove = function (event) {
	        self._handleMouseMove(event);
			event.stopImmediatePropagation();
	        event.stopPropagation();
	    };

		this._onTouchStart = function (event) {
			self._handleTouchStart(event);
			event.stopImmediatePropagation();
	        event.stopPropagation();
		};

		this._onTouchMove = function (event) {
			self._handleTouchMove(event);
			event.stopImmediatePropagation();
	        event.stopPropagation();
		};

		this._onTouchEnd = function (event) {
			self._handleTouchEnd(event);
			event.stopImmediatePropagation();
	        event.stopPropagation();
		};

	    this._srcObj.addEventListener("mousedown", this._onMouseDown, false);
	    this._srcObj.addEventListener("mouseup", this._onMouseUp, false);
	    this._srcObj.addEventListener("mousemove", this._onMouseMove, false);

		this._srcObj.addEventListener("touchstart", this._onTouchStart, false);
	    this._srcObj.addEventListener("touchmove", this._onTouchMove, false);
	    this._srcObj.addEventListener("touchend", this._onTouchEnd, false);

	    Object.defineProperty(this, "mousePosition", {
	        get: function () {
	            return this._mousePosition.clone();
	        },
	    });
	}

	ExtendType(MouseState, EventDispatcher, {
	    _handleDestroy: function () {
	        this._srcObj.removeEventListener("mousedown", this._onMouseDown, false);
	        this._srcObj.removeEventListener("mouseup", this._onMouseUp, false);
	        this._srcObj.removeEventListener("mousemove", this._onMouseMove, false);

			this._srcObj.addEventListener("touchstart", this._onTouchStart, false);
			this._srcObj.addEventListener("touchmove", this._onTouchMove, false);
			this._srcObj.addEventListener("touchend", this._onTouchEnd, false);
	    },

	    _handleMouseDown: function (event) {
	        let button = event.button;
	        if (!this.status[button])
	            this.status[button] = { down: false, pressed: false, up: false, updatedPreviously: false };
	    },

	    _handleMouseUp: function (event) {
	        var button = event.button;
	        if (this.status[button])
	            this.status[button].pressed = false;
	    },

	    _handleMouseMove: function (event) {
	        this._mousePosition.set(
	            event.clientX,
	            event.clientY,
	        );
	    },

		_handleTouchStart: function (event) {
	        let button = event.touches[ 0 ];
	        if (!this.status[button])
	            this.status[button] = { down: false, pressed: false, up: false, updatedPreviously: false };
	    },

	    _handleTouchEnd: function (event) {
	        var button = event.touches[ 0 ];
	        if (this.status[button])
	            this.status[button].pressed = false;
	    },

	    _handleTouchMove: function (event) {
	        this._mousePosition.set(
	            event.touches[ 0 ].clientX,
	            event.touches[ 0 ].clientX,
	        );
	    },

	    update: function (deltaTime) {
	        for (var button in this.status) {
	            // insure that every keypress has "down" status exactly once
	            if (!this.status[button].updatedPreviously) {
	                this.status[button].down = true;
	                this.status[button].pressed = true;
	                this.status[button].updatedPreviously = true;
	                // console.log("Mouse " + button + " is down!");
	            }
	            else // updated previously
	            {
	                this.status[button].down = false;
	            }

	            // key has been flagged as "up" since last update
	            if (this.status[button].up) {
	                delete this.status[button];
	                continue; // move on to next key
	            }

	            // key released
	            if (!this.status[button].pressed) {
	                this.status[button].up = true;
	                // console.log("Mouse " + button + " is up!");
	            }
	        }
	    },

	    getMouseButtonDown: function (button) {
	        return (this.status[button] && this.status[button].down);
	    },

	    getMouseButton: function (button) {
	        return (this.status[button] && this.status[button].pressed);
	    },

	    getMouseButtonUp: function (button) {
	        return (this.status[button] && this.status[button].up);
	    },

	});

	/**
	 * https://github.com/mrdoob/eventdispatcher.js/
	 */
	function Input() {

	    this._mouseState = null;
	    this._keyboardState = null;

	    if (typeof document !== "undefined") {
	        Input.SetListenObect(window);
	        this._mouseState = new MouseState(window);
	        this._keyboardState = new KeyboardState(window);
	    }

	    Object.defineProperty(this, "mousePosition", {
	        get: function () {
	            return this._mouseState ? this._mouseState.mousePosition : null;
	        },
	    });
	}

	// Object.assign( Input.prototype, {
	//     constructor: Input,
	// } );

	Input.__touchData = [];

	Object.defineProperty(Input, "touches", {
	    get: function () {
	        return Input.__touchData;
	    }
	});

	Object.defineProperty(Input, "touchCount", {
	    get: function () {
	        return Input.__touchData.length;
	    }
	});

	Input.GetTouch = function (index) {
	    if (index < 0 || index >= Input.__touchData.length) {
	        return null;
	    }
	    return Input.__touchData[index];
	};

	Input.__HandleMouseDown = function (event) {
	    if (event.button === 0)//only handle left button
	    {
	        Input.__touchData.length = 0;
	        let touch = new Touch();
	        touch.UpdatePos(event.clientX, event.clientY);
	        Input.__touchData[0] = touch;
	    }
	};

	Input.__HandleMouseMove = function (event) {
	    if (Input.__touchData.length !== 0) {
	        let touch = Input.__touchData[0];
	        touch.UpdatePos(event.clientX, event.clientY);
	    }
	};

	Input.__HandleMouseUp = function (event) {
	    if (event.button === 0)//only handle left button
	    {
	        Input.__touchData.length = 0;
	    }
	};

	Input.SetListenObect = function (obj) {
	    obj.addEventListener('mousedown', Input.__HandleMouseDown);
	    obj.addEventListener('mousemove', Input.__HandleMouseMove);
	    obj.addEventListener('mouseup', Input.__HandleMouseUp);
	};

	Object.assign(Input.prototype, {
	    update: function (deltaTime) {
	        if (this._keyboardState) {
	            this._keyboardState.update(deltaTime);
	        }
	        if (this._mouseState) {
	            this._mouseState.update(deltaTime);
	        }
	    },

	    getKeyDown: function (keyName) {
	        return this._keyboardState ? this._keyboardState.getKeyDown(keyName) : false;
	    },

	    getKey: function (keyName) {
	        return this._keyboardState ? this._keyboardState.getKey(keyName) : false;
	    },

	    getKeyUp: function (keyName) {
	        return this._keyboardState ? this._keyboardState.getKeyUp(keyName) : false;
	    },

	    getMouseButtonDown: function (button) {
	        return this._mouseState ? this._mouseState.getMouseButtonDown(button) : false;
	    },

	    getMouseButton: function (button) {
	        return this._mouseState ? this._mouseState.getMouseButton(button) : false;
	    },

	    getMouseButtonUp: function (button) {
	        return this._mouseState ? this._mouseState.getMouseButtonUp(button) : false;
	    },
	});

	function isMobile(){
		let sUserAgent = navigator.userAgent.toLowerCase();
		let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		let bIsMidp = sUserAgent.match(/midp/i) == "midp";
		let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		let bIsAndroid = sUserAgent.match(/android/i) == "android";
		let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

		return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
	}
	UserInterfaceManager.UI_LAYER = 4;
	UserInterfaceManager.DEBUG = false;

	function UserInterfaceManager() {
	    this._regedRectTransforms = [];
	    this._raycaster = new THREE.Raycaster();
	    this._firstTouchedTarget = null;
	    this._focusedTarget = null;

	    this._fonts = [];
	}

	Object.assign(UserInterfaceManager.prototype, {

	    getUILayer: function () {
	        return UserInterfaceManager.UI_LAYER;
	    },

	    getUIOnlyMask: function () {
	        return (1 << UserInterfaceManager.UI_LAYER);
	    },

	    getNonUIMask: function () {
	        return (0xffffffff ^ this.getUIOnlyMask()) >>> 0;
	    },

	    regRectTransform: function (rTrans) {
	        let index = this._regedRectTransforms.indexOf(rTrans);
	        if (index === -1) {
	            this._regedRectTransforms.push(rTrans);
	        }
	    },

	    unregRectTransform: function (rTrans) {
	        let index = this._regedRectTransforms.indexOf(rTrans);
	        if (index >= 0) {
	            this._regedRectTransforms.splice(index, 1);
	        }
	    },

	    loadFont: function (fontKey, json, texture) {
	        this._fonts[fontKey] = this._fonts[fontKey] || {};

	        this._fonts[fontKey].json = json;

	        texture._imp.needsUpdate = true;
	        texture._imp.minFilter = THREE.LinearMipMapLinearFilter;
	        texture._imp.magFilter = THREE.LinearFilter;
	        texture._imp.generateMipmaps = true;
	        texture._imp.anisotropy = Web3DEngine.Application.instance.getRenderer().capabilities.getMaxAnisotropy();
	        this._fonts[fontKey].texture = texture._imp;
	    },

	    haveFont: function (fontKey) {
	        return this._fonts.hasOwnProperty(fontKey);
	    },

	    update: function (deltaTime) {
	        let input = Web3DEngine.Application.instance.inputModuleInst;
	        let mousePos = input.mousePosition;
	        let mouseButtonAsPointer = 0;
	        let isPointerDown = input.getMouseButtonDown(mouseButtonAsPointer);
	        let isPointerUp = input.getMouseButtonUp(mouseButtonAsPointer);
	        let isPointerPressed = input.getMouseButton(mouseButtonAsPointer);

	        let appRendererSize = Web3DEngine.Application.instance.getRenderSize();
	        mousePos.x = (mousePos.x / appRendererSize.x) * 2 - 1;
	        mousePos.y = - (mousePos.y / appRendererSize.y) * 2 + 1;

	        let isHitTarget = false;
	        let focusedTarget = null;
	        for (let index = 0; index < this._regedRectTransforms.length; ++index) {
	            if (!isHitTarget && this._regedRectTransforms[index].canvas && this._regedRectTransforms[index].canvas.eventCamera) {

	                this._raycaster.setFromCamera(mousePos, this._regedRectTransforms[index].canvas.eventCamera._imp);

	                let intersects = this._raycaster.intersectObjects(this._regedRectTransforms[index].gameObject._imp.children, true);
	                if (intersects.length > 0) {
	                    for (let i = 0; i < intersects.length; ++i) {
	                        if (intersects[i] && intersects[i].object) {
	                            let target = this._getRayTargetInMesh(intersects[i].object);
	                            if (target) {
	                                let rTrans = target.getComponent(Web3DEngine.RectTransform);
	                                if (rTrans) {
	                                    focusedTarget = rTrans;

	                                    //Hit target, stop detection.
	                                    isHitTarget = true;

	                                    break;
	                                }
	                            }
	                        }
	                    }
	                }

	            }

	            this._regedRectTransforms[index].update(deltaTime);
	        }

			let mouseDownAsClick = isMobile();
			let fakeClicked =
							(!isPointerDown && !!isPointerUp && !isPointerPressed)||
							(!!isPointerDown && !isPointerUp && !!isPointerPressed);

			if(mouseDownAsClick && fakeClicked && this._focusedTarget){
				//Take mouse up event as click.
				this._focusedTarget.dispatchEvent({ type: Event$1.RECTTRANSFORM_ON_POINTER_CLICK, source: this._focusedTarget, });
				if(UserInterfaceManager.DEBUG) {
					console.log("Click: " + this._focusedTarget.gameObject.name);
				}

				this._firstTouchedTarget = null;
				return;
			}


			if (this._focusedTarget !== focusedTarget) {
	            //target changed.

	            //say goodbye
	            if (this._focusedTarget) {
	                this._focusedTarget.dispatchEvent({ type: Event$1.RECTTRANSFORM_ON_POINTER_EXIT, source: this._focusedTarget, });
	                if(UserInterfaceManager.DEBUG) {
	                    console.log("Exit: " + this._focusedTarget.gameObject.name);
	                }

	            }

	            this._focusedTarget = focusedTarget;

	            //say hello
	            if (this._focusedTarget) {
	                this._focusedTarget.dispatchEvent({ type: Event$1.RECTTRANSFORM_ON_POINTER_ENTER, source: this._focusedTarget, });
	                if(UserInterfaceManager.DEBUG) {
	                    console.log("Enter: " + this._focusedTarget.gameObject.name);
	                }
	            }
	        }

	        if(isPointerDown && this._focusedTarget){
	            this._focusedTarget.dispatchEvent({ type: Event$1.RECTTRANSFORM_ON_POINTER_DOWN, source: this._focusedTarget, });
	            if(UserInterfaceManager.DEBUG) {
	                console.log("Down: " + this._focusedTarget.gameObject.name);
	            }

	            this._firstTouchedTarget = this._focusedTarget;
	        }

	        if(isPointerUp && this._focusedTarget){
	            this._focusedTarget.dispatchEvent({ type: Event$1.RECTTRANSFORM_ON_POINTER_UP, source: this._focusedTarget, });
	            if(UserInterfaceManager.DEBUG) {
	                console.log("Up: " + this._focusedTarget.gameObject.name);
	            }

	            if(this._focusedTarget === this._firstTouchedTarget){
	                this._focusedTarget.dispatchEvent({ type: Event$1.RECTTRANSFORM_ON_POINTER_CLICK, source: this._focusedTarget, });
	                if(UserInterfaceManager.DEBUG) {
	                    console.log("Click: " + this._focusedTarget.gameObject.name);
	                }
	            }

	            this._firstTouchedTarget = null;

	        }

	        // console.log("Current focus : " + (this._focusedTarget ? this._focusedTarget.gameObject.name : "Null"));

	    },

	    _getRayTargetInMesh: function (mesh) {
	        let obj = null;
	        getGameObjectInMesh(mesh);

	        function getGameObjectInMesh(m) {
	            if (obj) return;
	            if (m.userData.engineComponent) {
	                obj = m.userData.engineComponent.gameObject;
	            }
	            else {
	                if (m.parent) {
	                    getGameObjectInMesh(m.parent);
	                }
	            }
	        }

	        if (obj)
	            return obj;
	        else
	            return null;
	    }
	});

	Object.defineProperty(UserInterfaceManager.prototype, 'fonts', {

	    get: function () {
	        return this._fonts;
	    },

	});

	/**
	 * @class Web3DEngine.Collider
	 * @name Web3DEngine.Collider
	 * @classdesc Collider,所有碰撞器的基类。
	 * @property { Boolean } enabled 启用碰撞器将会碰撞其他碰撞器，禁用碰撞器就不会碰撞其他碰撞器。
	 * @property { Boolean } isTrigger  碰撞器是一个触发器？
	 */
	function Collider(go) {
	    Component.call(this, go);
	    this.instClassType = Collider.classType;
	    this._imp = null;

	    this._enabled = true;
	    Object.defineProperty(this, "enabled",{
	        get:function () {
	            return this._enabled;
	        },

	        set:function(value){
	            if(value == this._enabled)   return;

	            this._enabled = value;
	            if(this._enabled)
	            {
	                this.dispatchEvent({type:Event$1.ENABLE});
	            }
	            else {
	                this.dispatchEvent({type:Event$1.DISABLE});
	            }
	        }
	    });

	    this._isTrigger = false;
	    Object.defineProperty(this, "isTrigger",{
	        get:function () {
	            return this._isTrigger;
	        },

	        set:function(value){
	            if(value == this._isTrigger)   return;
	            this._isTrigger = value;
	            this._setTrigger();
	        }
	    });

	    this._isGameControl = false;
        Object.defineProperty(this, "isGameControl",{
            get:function () {
                return this._isGameControl;
            },

            set:function(value){
                if(value == this._isGameControl)   return;
                this._isGameControl = value;
            }
        });

	}
	ExtendType(Collider, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	    },

	    _setTrigger:function() {

	    }
	});

	Collider.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enabled',
	    default: true
	});

	Collider.attributes.add('isTrigger', {
	    type: 'boolean',
	    title: 'IsTrigger',
	    default: false
	});

	Collider.attributes.add('isGameControl', {
        type: 'boolean',
        title: 'isGameControl',
        default: false
    });

	/**
	 * @class Web3DEngine.BoxCollider
	 * @name Web3DEngine.BoxCollider
	 * @classdesc BoxCollider组件,刚体组件与Collision组件结合使用时，可以使用逼真的物理模拟实体。
	 * 刚体部件将在重力作用下坠落并与其他刚体碰撞。使用脚本，您可以将力和冲动应用于刚体。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Number } mass 物体的质量。
	 * @property { Boolean } isKinematic  如果刚体处于运动状态，则返回true。
	 * @property { Boolean } isStatic 如果刚体处于静止状态，则返回true。
	 */
	function BoxCollider(go) {
	    Collider.call(this, go);
	    this.instClassType = BoxCollider.classType;
	    this._size = new Vector3(1, 1, 1);
	    Object.defineProperty(this, "size",{
	        get:function () {
	            return this._size;
	        },

	        set:function(value){
	            if(this._size === value)  return;
	            this._size = value;
	            this._boxShape.setLocalScaling( new Ammo.btVector3( this._size.x*1.0, this._size.y*1.0, this._size.z*1.0 ) );
	            this._imp.activate();
	        }
	    });

	    go.addEventListener(Event$1.ADDCOMPONENT, this, this._handleAddComponent);
	    go.addEventListener(Event$1.REMOVECOMPONENT, this, this._handleRemoveComponent);
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	    this.addEventListener(Event$1.ENABLE, this, this._onEnable);
	    this.addEventListener(Event$1.DISABLE, this, this._onDisable);

	    this._cratePhysics();
	}
	BoxCollider.classType = 'BoxCollider';

	ExtendType(BoxCollider, Component, {

	    _cratePhysics:function()
	    {
	        this._boxShape = new Ammo.btBoxShape( new Ammo.btVector3( this._size.x*1.0, this._size.y*1.0, this._size.z*1.0 ) );
	        this._groundTransform = new Ammo.btTransform();
	        this._groundTransform.setIdentity();
	        //var _worldPos = this.gameObject.transform.localPosition;//TODO
	        var _worldPos = this.gameObject.transform.position;//TODO
	        this._groundTransform.setOrigin(new Ammo.btVector3(_worldPos.x, _worldPos.y, _worldPos.z));
	        let _worldRotation = this.gameObject.transform.rotation;
            this._groundTransform.setRotation(new Ammo.btQuaternion(_worldRotation.x, _worldRotation.y, _worldRotation.z, _worldRotation.w));

	        if(this._isTrigger)
	        {
	            //if there is rigidbody, fetch data from it
	            this._mass = 0;
	            this._isKinematic = false;
	            this._localInertia = new Ammo.btVector3(0, 0, 0);
	            // this._boxShape.calculateLocalInertia(this._mass, this._localInertia);
	            this._myMotionState = new Ammo.btDefaultMotionState(this._groundTransform);
	            this._rbInfo = new Ammo.btRigidBodyConstructionInfo(this._mass, this._myMotionState, this._boxShape, this._localInertia);
	            this._imp = new Ammo.btRigidBody(this._rbInfo);
	            let flagType_NORESPONSE_OBJECT = 4;
	            this._imp.setCollisionFlags(this._imp.getCollisionFlags() | flagType_NORESPONSE_OBJECT);
	            let bodyState_DISABLE_DEACTIVATION = 4;
	            this._imp.setActivationState(bodyState_DISABLE_DEACTIVATION);
	        }
	        else
	        {
	            this._mass = 0;
	            var rigidBody = this.gameObject.getComponent(Rigidbody);
	            if(rigidBody)
	            {
	                if(!rigidBody.isKinematic)
	                {
	                    this._mass = rigidBody.mass;
	                }
	                this._isKinematic = rigidBody.isKinematic;
	            }
	            this._localInertia = new Ammo.btVector3(0, 0, 0);
	            if(this._mass > 0)
	            {
	                this._boxShape.calculateLocalInertia(this._mass, this._localInertia);
	            }
	            this._myMotionState = new Ammo.btDefaultMotionState(this._groundTransform);
	            this._rbInfo = new Ammo.btRigidBodyConstructionInfo(this._mass, this._myMotionState, this._boxShape, this._localInertia);
	            this._imp = new Ammo.btRigidBody(this._rbInfo);
	            if(this._mass <= 0)
	            {
	                let flagType_KINEMATIC_OBJECT = 2;
	                this._imp.setCollisionFlags(this._imp.getCollisionFlags() | flagType_KINEMATIC_OBJECT);
	                let bodyState_DISABLE_DEACTIVATION = 4;
	                this._imp.setActivationState(bodyState_DISABLE_DEACTIVATION);
	            }
	        }
	        Application.instance.physicsModuleInst.regCollider(this);
	    },

	    _copy:function(source){
	        Collider.prototype._copy.call( this, source );
	        //TODO
	    },
	    _handleDestroy:function(event)
	    {
	        Application.instance.physicsModuleInst.unregCollider(this);
            this.gameObject.removeEventListener(Event$1.ADDCOMPONENT, this, this._handleAddComponent);
            this.gameObject.removeEventListener(Event$1.REMOVECOMPONENT, this, this._handleRemoveComponent);
	    },
	    _handleAddComponent:function(event)
	    {
	        if(event && event.componentInstance)
	        {
	            let component = event.componentInstance;
	            if(component.isRigidbody)
	            {
					this.__refreshRigidBody(component);
				}
	        }
		},
		__refreshRigidBody:function(rigidBody){
            if(this._imp)
            {
            	let BODYSTATE_DISABLE_SIMULATION = 5;
                this._imp.forceActivationState(BODYSTATE_DISABLE_SIMULATION);
                Application.instance.physicsModuleInst.unregCollider(this);
            }

            this._cratePhysics();
		},
	    _handleRemoveComponent:function(event)
	    {
	        if(event && event.componentInstance)
	        {
	            let component = event.componentInstance;
	            if(component.isRigidbody)
	            ;
	        }
	    },
	    _onEnable:function (event) {
	        Application.instance.physicsModuleInst.regCollider(this);
	    },
	    _onDisable:function (event) {
	        Application.instance.physicsModuleInst.unregCollider(this);
	    },

	    _setTrigger:function() {
	        if(this._imp)
	        {
	            Application.instance.physicsModuleInst.unregCollider(this);
	        }

	        this._cratePhysics();
	    },
	});

	BoxCollider.attributes.add('size', {
	    type: 'vec3',
	    title: 'Size',
	    default:[1 ,1, 1]
	});

	BoxCollider.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enabled',
	    default:true
	});

	BoxCollider.attributes.add('isTrigger', {
	    type: 'boolean',
	    title: 'IsTrigger',
	    default: false
	});

	BoxCollider.attributes.add('isGameControl', {
	    type: 'boolean',
	    title: 'isGameControl',
	    default: false
	});

	/**
	 * @class Web3DEngine.Rigidbody
	 * @name Web3DEngine.Rigidbody
	 * @classdesc Rigidbody组件,刚体组件与Collision组件结合使用时，可以使用逼真的物理模拟实体。
	 * 刚体部件将在重力作用下坠落并与其他刚体碰撞。使用脚本，您可以将力和冲动应用于刚体。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Number } mass 物体的质量。
	 * @property { Boolean } isKinematic  如果刚体处于运动状态，则返回true。
	 * @property { Boolean } isStatic 如果刚体处于静止状态，则返回true。
	 */
	function Rigidbody(go) {
		Component.call(this, go);
		this.priority = 1;
	    this.instClassType = Rigidbody.classType;
	    this._mass = 1;
	    this._collider = this.gameObject.getComponent(BoxCollider);
	    Object.defineProperty(this, "mass",{
	        get:function () {
	            return this._mass;
	        },

	        set:function(value){
	            if(this._mass === value)  return;
	            this._mass = value;
	            var collider = this.gameObject.getComponent(BoxCollider);
	            if(collider)
	            {
	                collider._imp.setMassProps(value);
	            }
	        }
	    });

	    this._isKinematic = false;
	    Object.defineProperty(this, "isKinematic",{
	        get:function () {
	            return this._isKinematic;
	        },

	        set:function(value){
	            if(value == this._isKinematic)   return;

	            this._isKinematic = value;
	        }
	    });

	    this._isStatic = false;
	    Object.defineProperty(this, "isStatic",{
	        get:function () {
	            return this._isStatic;
	        },

	        set:function(value){
	            if(value == this._isStatic)   return;

	            this._isStatic = value;
	        }
	    });

	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	}
	ExtendType(Rigidbody, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	        this._mass = source._mass;
	    },

	    addForce:function(force)
	    {
	        var pos = new Vector3(0,0,0);
	        this.addForceAtPosition(force, pos);

	    },

	    addForceAtPosition:function(force, position)
	    {
	        //TODO
	        if(this._collider == undefined)
	        {
	            this._collider = this.gameObject.getComponent(BoxCollider);
	        }
	        if(this._collider != undefined && this._collider != null )
	        {
	            if(this._collider._imp != undefined && this._collider._imp != null )
	            {
	                var ammoForce = new Ammo.btVector3();
	                ammoForce.setValue(force.x, force.y, force.z);
	                var ammoPos = new Ammo.btVector3();
	                ammoPos.setValue(position.x, position.y, position.z);
	                this._collider._imp.applyForce(ammoForce, ammoPos);
	            }
	        }
	    },

	    _handleDestroy:function(event)
	    {
	        var collider = this.gameObject.getComponent(BoxCollider);
	        if(collider)
	        {
	            this.mass = 0;
	        }
	    }
	});

	Rigidbody.attributes.add('mass', {
	    type: 'number',
	    title: 'Mass',
	    defalut:1
	});

	Rigidbody.attributes.add('isKinematic', {
	    type: 'boolean',
	    title: 'IsKinematic',
	    defalut : false
	});

	Rigidbody.attributes.add('isStatic', {
	    type: 'boolean',
	    title: 'IsStatic',
	    defalut: false
	});

	function Collision() {
	    this.instClassType = Collision.classType;
	    this.rigidbody = null;
	    this.collider = null;
	    this.gameObject = null;
	    this.contacts = null;
	}

	Collision.classType = 'Collision';

	function _Physics() {
	    this._regedDynamicObjects=[];
	    this._regedGhostObjects=[];
	    this._dicColliders = new Array();
	    this._deleteDicColliders = new Array();

	    this._transformAux1 = new Ammo.btTransform();

	    this._newCollisions = new Array();
	    this._oldCollisions = new Array();
	}

	Object.defineProperty(_Physics, "instance",{
	    get:function () {
	        return this._instance;
	    }
	});

	Object.assign( _Physics.prototype, {

	    init:function(){
	        this._collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
	        this._dispatcher = new Ammo.btCollisionDispatcher( this._collisionConfiguration );
	        this._broadphase = new Ammo.btDbvtBroadphase();
	        this._solver = new Ammo.btSequentialImpulseConstraintSolver();
	        this._physicsWorld = new Ammo.btDiscreteDynamicsWorld( this._dispatcher, this._broadphase, this._solver, this._collisionConfiguration );
	        this._physicsWorld.setGravity( new Ammo.btVector3( 0, -9.82, 0 ) );
	    },

	    regCollider:function(collider){
	        if(collider.isTrigger)
	        {
	            this._regedDynamicObjects.push(collider);
	            this._physicsWorld.addRigidBody(collider._imp, 1, 1);
	        }
	        else
	        {
	            this._regedDynamicObjects.push(collider);
	            this._physicsWorld.addRigidBody(collider._imp, 1, 1);
	        }

	        //将碰撞对象存放于字典列表，如果添加了等待删除的项则从删除列表中移除
	        if(this._deleteDicColliders[collider._imp.ptr] != undefined)
	        {
	            delete this._deleteDicColliders[collider._imp.ptr];
	            delete this._dicColliders[collider._imp.ptr];
	            if (collider._mass <= 0) {
	                collider._imp.forceActivationState(4);  //4:Ammo.DISABLE_DEACTIVATION
	                collider._imp.activate();
	            }
	        }
	        this._dicColliders[collider._imp.ptr] = collider.gameObject;
	    },

	    unregCollider:function(collider){
	        var index = this._regedDynamicObjects.indexOf(collider);
	        if(index >= 0)
	        {
	            this._regedDynamicObjects.splice(index, 1);
	            this._physicsWorld.removeRigidBody(collider._imp);
	            Ammo.destroy(collider._imp);
	        }

	        index = this._regedGhostObjects.indexOf(collider);
	        if(index >= 0)
	        {
	            this._regedGhostObjects.splice(index, 1);
	            this._physicsWorld.removeCollisionObject(collider._imp);
	            Ammo.destroy(collider._imp);
	        }

	        //存放到删除列表等逻辑处理完后删除
	        this._deleteDicColliders[collider._imp.ptr] = collider.gameObject;
	        // Ammo.destroy(collider._imp);
	    },

	    update:function(deltaTime){
	        //read position from object to physics

	        var ammoQuat = new Ammo.btQuaternion;

	        //根据外部运动重设物理引擎中对象位置，有一定性能开销
	        this.resetAllPhysics();

	        //simulate by physics
	        this._physicsWorld.stepSimulation( deltaTime, 10 );

	        // read position from physics to object
	        for (var i = 0, il = this._regedDynamicObjects.length; i < il; i++ ) {
	            var collider = this._regedDynamicObjects[ i ];
	            var objPhys = collider._imp;
	            var isKinematic = collider._mass <= 0;
	            if(!isKinematic)
	            {
	                var ms = objPhys.getMotionState();
	                if ( ms ) {
	                    ms.getWorldTransform( this._transformAux1 );
	                    var p = this._transformAux1.getOrigin();
	                    var q = this._transformAux1.getRotation();
	                    let vec3 = new Vector3(p.x(), p.y(), p.z());
	                    collider.gameObject.transform.position = vec3;
	                    //if(!collider.isGameControl)
	                    //{
	                    	let quaternion = new Quaternion(q.x(), q.y(), q.z(), q.w());
	                    	collider.gameObject.transform.rotation = quaternion;
	                    //}
	                }
	            }
	        }

	        //setNewCollisions ：
	        // 1、遍历碰撞关系
	        // 2、通过oldCollisions获取是否为以前维持的碰撞关系
	        // 3、根据碰撞关系发送Enter和Stay事件到Collider
	        // 4、保存新关系到NewCollisions中
	        this.setNewCollisions();

	        //setLeaveCollisions：
	        // 1、遍历老的关系列表
	        // 2、通过getContactState比对关系发送事件到离开事件到Collider
	        this.setLeaveCollisions();

	        //流程结束，将newCollisions列表置为oldCollisions
	        this._oldCollisions = this._newCollisions;

	        //处理删除列表
	        for (var key in this._deleteDicColliders) {
	            delete this._deleteDicColliders[key];
	            delete this._dicColliders[key];
	        }
	    },

	    //根据外部运动重设物理引擎中对象位置
	    resetAllPhysics:function() {
	        var ammoQuat = new Ammo.btQuaternion;

	        for (var i = 0, il = this._regedDynamicObjects.length; i < il; i++ ) {
	            var collider = this._regedDynamicObjects[ i ];
	            //var isKinematic = collider._mass <= 0;
	            var objPhys = collider._imp;
	            if(collider.isGameControl)
	            {
	                var pos = collider.gameObject.transform.position;
	                var rot = collider.gameObject.transform.rotation;
	                var transform = objPhys.getWorldTransform();

	                //坐标或旋转发生变动
	                // if(parseInt(pos.x * 1000) != parseInt(transform.getOrigin().x() * 1000) ||
	                //     parseInt(pos.y * 1000) != parseInt(transform.getOrigin().y() * 1000) ||
	                //     parseInt(pos.z * 1000) != parseInt(transform.getOrigin().z() * 1000))
	                {
	                    transform.getOrigin().setValue(pos.x, pos.y, pos.z);
	                    ammoQuat.setValue(rot.x, rot.y, rot.z, rot.w);
	                    transform.setRotation(ammoQuat);
	                    var ms = objPhys.getMotionState();
	                    if (ms) {
	                        ms.setWorldTransform(transform);
	                    }
	                    // objPhys.activate();
	                }
	            }
	        }

	        // for (var i = 0, il = this._regedGhostObjects.length; i < il; i++ ) {
	        //     var collider = this._regedGhostObjects[ i ];
	        //     var objPhys = collider._imp;
	        //         var pos = collider.gameObject.transform.position;
	        //         var rot = collider.gameObject.transform.rotation;
	        //         var transform = objPhys.getWorldTransform();
	        //
	        //         //坐标或旋转发生变动
	        //         if(pos.x != transform.getOrigin().x() || pos.y != transform.getOrigin().y() || pos.z != transform.getOrigin().z())
	        //         {
	        //             transform.getOrigin().setValue(pos.x, pos.y, pos.z);
	        //             ammoQuat.setValue(rot.x, rot.y, rot.z, rot.w);
	        //             transform.setRotation(ammoQuat);
	        //             objPhys.setWorldTransform(transform);
	        //             // objPhys.activate();
	        //         }
	        // }
	    },

	    //setNewCollisions ：
	    // 1、遍历碰撞关系
	    // 2、通过oldCollisions获取是否为以前维持的碰撞关系
	    // 3、根据碰撞关系发送Enter和Stay事件到Collider
	    // 4、保存新关系到NewCollisions中
	    setNewCollisions:function() {
	        this._newCollisions = new Array();
	        var count = this._physicsWorld.getDispatcher().getNumManifolds();
	        for (var k = 0; k < count; k++) {
	            var contactManifold = this._physicsWorld.getDispatcher().getManifoldByIndexInternal(k);
	            var body0 = contactManifold.getBody0().ptr;
	            var body1 = contactManifold.getBody1().ptr;
	            var isOldContact = this.hasContactInCollisions(this._oldCollisions, body0, body1);

	            var collider0 = this._dicColliders[body0];
	            var collider1 = this._dicColliders[body1];

	            if(collider0 != undefined) {
	                if (collider0.script != undefined && collider0.script != null) {
	                    var collision = new Collision();
	                    collision.gameObject = collider1;
	                    if(!isOldContact)
	                    {
	                        collider0.script._onCollisionEnter(collision);
	                    }
	                    collider0.script._onCollisionStay(collision);
	                }
	            }

	            if(collider1 != undefined) {
	                if (collider1.script != undefined && collider1.script != null) {
	                    var collision = new Collision();
	                    collision.gameObject = collider0;
	                    if(!isOldContact)
	                    {
	                        collider1.script._onCollisionEnter(collision);
	                    }
	                    collider1.script._onCollisionStay(collision);
	                }
	            }

	            //存放关系到newCollisions
	            //如果数组中没有此组元素，则添加
	            if(this._newCollisions[body0] == undefined)
	                this._newCollisions[body0] = new Array();

	            if(this._newCollisions[body0].indexOf(body1) < 0)
	                this._newCollisions[body0].push( body1);

	            //反向添加
	            if(this._newCollisions[body1] == undefined)
	                this._newCollisions[body1] = new Array();

	            if(this._newCollisions[body1].indexOf(body0) < 0)
	                this._newCollisions[body1].push( body0);
	        }
	    },

	    setLeaveCollisions:function()
	    {
	        for (var body0 in this._oldCollisions) {

	            var arr = this._oldCollisions[body0];
	            for(let i =0; i< arr.length; i++)
	            {
	                var body1 = arr[i];

	                var isLeave = !this.hasContactInCollisions(this._newCollisions, body0, body1);
	                var collider0 = this._dicColliders[body0];
	                var collider1 = this._dicColliders[body1];
	                if(isLeave)
	                {
	                    if (collider0.script != undefined && collider0.script != null)
	                    {
	                        var collision = new Collision();
	                        collision.gameObject = collider1;
	                        collider0.script._onCollisionExit(collision);
	                    }
	                }
	            }
	        }
	    },

	    //通过传入关系列表查看是否有此关系
	    hasContactInCollisions:function(collisions, body0, body1){
	        if(collisions[body0] == undefined) return false;
	        var arr = collisions[body0];
	        for(let i =0; i< arr.length; i++)
	        {
	            if(arr[i] == body1) return true;
	        }
	        return false;
	    }

	});

	function ScriptComponentData(){
	    this.enabled = true;
	}

	var METHOD_POST_INITIALIZE = '_onPostInitialize';
	    var METHOD_UPDATE = '_onUpdate';
	    var METHOD_POST_UPDATE = '_onPostUpdate';

	    // Ever-increasing integer used as the
	    // execution order of new script components.
	    // We are using an ever-increasing number and not
	    // the order of the script component in the components
	    // array because if we ever remove components from the array
	    // we would have to re-calculate the execution order for all subsequent
	    // script components in the array every time, which would be slow
	    var executionOrderCounter = 0;

	    /**
	     * @name pc.ScriptComponentSystem
	     * @description Create a new ScriptComponentSystem
	     * @class Allows scripts to be attached to an Entity and executed
	     * @param {pc.Application} app The application
	     * @extends pc.ComponentSystem
	     */

	    function ScriptComponentSystem(app) {
	        //pc.ComponentSystem.call(this, app);

	        this.id = 'script';
	        this.app = app;

	        //this.ComponentType = ScriptComponent;
	        this.DataType = ScriptComponentData;

	        // list of all entities script components
	        // we are using pc.SortedLoopArray because it is
	        // safe to modify while looping through it
	        this._components = new SortedLoopArray({
	            sortBy: '_executionOrder'
	        });

	        // holds all the enabled script components
	        // (whose entities are also enabled). We are using pc.SortedLoopArray
	        // because it is safe to modify while looping through it. This array often
	        // change during update and postUpdate loops as entities and components get
	        // enabled or disabled
	        this._enabledComponents = new SortedLoopArray({
	            sortBy: '_executionOrder'
	        });


	        // if true then we are currently preloading scripts
	        this.preloading = true;

	        //TODO
	        //event handlers
	        // this.on('beforeremove', this._onBeforeRemove, this);
	        // pc.ComponentSystem.on('initialize', this._onInitialize, this);
	        // pc.ComponentSystem.on('postInitialize', this._onPostInitialize, this);
	        // pc.ComponentSystem.on('update', this._onUpdate, this);
	        // pc.ComponentSystem.on('postUpdate', this._onPostUpdate, this);
	    }
	    Object.assign( ScriptComponentSystem.prototype, {
	        constructor: ScriptComponentSystem,
	        initializeComponentData: function (component, data) {
	            // Set execution order to an ever-increasing number
	            // and add to the end of the components array.
	            component._executionOrder = executionOrderCounter++;
	            this._components.append(component);

	            // check we don't overflow executionOrderCounter
	            if (executionOrderCounter > Number.MAX_SAFE_INTEGER) {
	                this._resetExecutionOrder();
	            }

	            component.enabled = data.hasOwnProperty('enabled') ? !!data.enabled : true;
	            // if enabled then add this component to the end of the enabledComponents array
	            // Note, we should be OK to just append this to the end instead of using insert()
	            // which will search for the right slot to insert the component based on execution order,
	            // because the execution order of this script should be larger than all the others in the
	            // enabledComponents array since it was just added.
	            if (component.enabled && component.entity.enabled) {
	                this._enabledComponents.append(component);
	            }

	            if (data.hasOwnProperty('order') && data.hasOwnProperty('scripts')) {
	                component._scriptsData = data.scripts;

	                for (var i = 0; i < data.order.length; i++) {
	                    component.create(data.order[i], {
	                        enabled: data.scripts[data.order[i]].enabled,
	                        attributes: data.scripts[data.order[i]].attributes,
	                        preloading: this.preloading
	                    });
	                }
	            }
	        },


	        RegScriptHandler: function (handler) {
	            // Set execution order to an ever-increasing number
	            // and add to the end of the components array.
	            handler._executionOrder = executionOrderCounter++;
	            this._components.append(handler);

	            // check we don't overflow executionOrderCounter
	            if (executionOrderCounter > Number.MAX_SAFE_INTEGER) {
	                this._resetExecutionOrder();
	            }

	            // // if enabled then add this component to the end of the enabledComponents array
	            // // Note, we should be OK to just append this to the end instead of using insert()
	            // // which will search for the right slot to insert the component based on execution order,
	            // // because the execution order of this script should be larger than all the others in the
	            // // enabledComponents array since it was just added.
	            // if ( handler.entity.activeInHierarchy) {
	            //     this._enabledComponents.append(handler);
	            // }

	            //如果不是在加载状态，立即检查状态
	            //如果在加载状态，由外界触发
	            if(!this.preloading)
	            {
	                handler._checkInit();
	                handler._checkState();
	            }
	        },


	        cloneComponent: function (entity, clone) {
	            var i, key;
	            var order = [];
	            var scripts = { };

	            for (i = 0; i < entity.script._scripts.length; i++) {
	                var scriptInstance = entity.script._scripts[i];
	                var scriptName = scriptInstance.__scriptType.__name;
	                order.push(scriptName);

	                var attributes = { };
	                for (key in scriptInstance.__attributes)
	                    attributes[key] = scriptInstance.__attributes[key];

	                scripts[scriptName] = {
	                    enabled: scriptInstance._enabled,
	                    attributes: attributes
	                };
	            }

	            for (key in entity.script._scriptsIndex) {
	                if (key.awaiting) {
	                    order.splice(key.ind, 0, key);
	                }
	            }

	            var data = {
	                enabled: entity.script.enabled,
	                order: order,
	                scripts: scripts
	            };

	            return this.addComponent(clone, data);
	        },

	        _resetExecutionOrder: function () {
	            executionOrderCounter = 0;
	            for (var i = 0, len = this._components.length; i < len; i++) {
	                this._components.items[i]._executionOrder = executionOrderCounter++;
	            }
	        },

	        _callComponentMethod: function (components, name, dt) {
	            for (components.loopIndex = 0; components.loopIndex < components.length; components.loopIndex++) {
	                components.items[components.loopIndex][name](dt);
	            }
	        },

	        _onInitialize: function () {
	            this.preloading = false;

	            // initialize attributes on all components
	            this._callComponentMethod(this._components, "_checkInit");
	            //run funcs drived by state
	            this._callComponentMethod(this._components, "_checkState");
	        },

	        _onPostInitialize: function () {
	            // call onPostInitialize on enabled components
	            this._callComponentMethod(this._enabledComponents, METHOD_POST_INITIALIZE);
	        },

	        _onUpdate: function (dt) {
	            // call onUpdate on enabled components
	            this._callComponentMethod(this._enabledComponents, METHOD_UPDATE, dt);
	        },

	        _onPostUpdate: function (dt) {
	            // call onPostUpdate on enabled components
	            this._callComponentMethod(this._enabledComponents, METHOD_POST_UPDATE, dt);
	        },

	        // inserts the component into the enabledComponents array
	        // which finds the right slot based on component._executionOrder
	        _addComponentToEnabled: function (component)  {
	            this._enabledComponents.insert(component);
	        },

	        // removes the component from the enabledComponents array
	        _removeComponentFromEnabled: function (component) {
	            this._enabledComponents.remove(component);
	        },

	        _onBeforeRemove: function (entity, component) {
	            var ind = this._components.items.indexOf(component);
	            if (ind >= 0) {
	                component._onBeforeRemove();
	            }

	            this._removeComponentFromEnabled(component);

	            // remove from components array
	            this._components.remove(component);
	        }
	    });

	!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).TWEEN={});}(undefined,function(t){function s(t){var e=u.indexOf(t);-1<e&&u.splice(e,1),u.push(t),p=0,l&&!f&&(o=c(i),f=!0);}function e(t){for(var e=0;e<u.length;e++)if(t===u[e])return u[e];return null}function F(){return f}function x(){return d}var o,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this||(void 0!==t?t:{}),n=r.requestAnimationFrame||function(t){return r.setTimeout(t,50/3)},a=r.cancelAnimationFrame||function(t){return r.clearTimeout(t)},C=function(){if(void 0!==r.Web3DEngine)return function(){return 1e3*r.Web3DEngine.Application.instance._clock.elapsedTime};if("undefined"==typeof process||void 0===process.hrtime||process.versions&&void 0!==process.versions.electron){if(void 0!==r.performance&&void 0!==r.performance.now)return r.performance.now.bind(r.performance);var t=r.performance&&r.performance.timing&&r.performance.timing.navigationStart?r.performance.timing.navigationStart:Date.now();return function(){return Date.now()-t}}return function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}}(),u=[],f=!1,l=!1,h=[],c=n,p=0,y=120,d=!0,N=function(t){var e=u.indexOf(t);-1!==e&&u.splice(e,1),0===u.length&&(a(o),f=!1);},i=function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:C(),r=1<arguments.length?arguments[1]:void 0;if(y<=p&&d)return f=!1,p=0,a(o),!1;l&&f?o=c(t):function(){for(var t=0;t<h.length;t++)h[t]();}(),u.length||p++;for(var n=0,i=u.length;n<i;)u[n++].update(e,r),i>u.length&&n--,i=u.length;return !0},q={},v={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return Math.pow(t,2)},Out:function(t){return t*(2-t)},InOut:function(t){return (t*=2)<1?.5*Math.pow(t,2):-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return Math.pow(t,3)},Out:function(t){return --t*t*t+1},InOut:function(t){return (t*=2)<1?.5*Math.pow(t,3):.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return Math.pow(t,4)},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return (t*=2)<1?.5*Math.pow(t,4):-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return Math.pow(t,5)},Out:function(t){return --t*t*t*t*t+1},InOut:function(t){return (t*=2)<1?.5*Math.pow(t,5):.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return (t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){return t*t*(2.70158*t-1.70158)},Out:function(t){return --t*t*(2.70158*t+1.70158)+1},InOut:function(t){var e=2.5949095;return (t*=2)<1?t*t*((1+e)*t-e)*.5:.5*((t-=2)*t*((1+e)*t+e)+2)}},Bounce:{In:function(t){return 1-v.Bounce.Out(1-t)},Out:function(t){var e=2.75,r=7.5625;return t<1/e?r*t*t:t<2/e?r*(t-=1.5/e)*t+.75:t<2.5/e?r*(t-=2.25/e)*t+.9375:r*(t-=2.625/e)*t+.984375},InOut:function(t){return t<.5?.5*v.Bounce.In(2*t):.5*v.Bounce.Out(2*t-1)+.5}},Stepped:{steps:function(e){return function(t){return (t*e|0)/e}}}};function m(t){return (m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function b(t,e,r){return e&&g(t.prototype,e),r&&g(t,r),t}function T(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,r,n;e=i,n=o[r=t],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;});}return i}function k(t){return (k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return (w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return !e||"object"!=typeof e&&"function"!=typeof e?O(t):e}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t;}finally{try{n||null==a.return||a.return();}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=50/3,U="_chainedTweens",S="Callback",V="update",B="complete",G="start",W="repeat",z="reverse",j="restart",M="STRING_PROP",P=/\s+|([A-Za-z?().,{}:""[\]#%]+)|([-+]=+)?([-+]+)?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]=?\d+)?/g;function R(t){if(t&&t.nodeType||void 0===t||"object"!==m(t))return t;if(Array.isArray(t))return [].concat(t);if("object"!==m(t))return t;var e={};for(var r in t)e[r]=R(t[r]);return e}var I=function(t){return isNaN(+t)||("+"===t[0]||"-"===t[0])&&"="===t[1]||""===t||" "===t},L=/^#([0-9a-f]{6}|[0-9a-f]{3})$/gi,Q=function(t,e){var r,n,i;3===e.length&&(e=(r=e[0])+r+(n=e[1])+n+(i=e[2])+i);var o=parseInt(e,16);return "rgb("+(r=o>>16&255)+", "+(n=o>>8&255)+", "+(i=255&o)+")"};function K(t){if(t&&t.splice&&t.isString)return t;if("string"!=typeof t)return t;if("="===t.charAt(1))return t;var e=t.replace(L,Q).match(P).map(function(t){return I(t)?t:+t});return e.isString=!0,e}function H(r,n,t,e){var i=t[r],o=e[r];if(i===o)return !0;if(Array.isArray(i)&&Array.isArray(o)&&i.length===o.length)for(var s=0,a=o.length;s<a;s++){var u=i[s],f=o[s];u===f||"number"==typeof u&&"number"==typeof f||H(s,n[r],i,o);}if("number"==typeof i&&"number"==typeof o);else if(i&&i.splice&&i.isString&&o&&o.splice&&o.isString);else{if("string"==typeof i&&Array.isArray(o)){var l=K(i),h=o.map(K);return t[r]=l,e[r]=h,!0}if("string"==typeof i||"string"==typeof o){var c=Array.isArray(i)&&i[0]===M?i:K(i),p=Array.isArray(o)&&o[0]===M?o:K(o);if(void 0===c)return;for(var y=1;y<c.length;)c[y]===p[y]&&"string"==typeof c[y-1]?(c.splice(y-1,2,c[y-1]+c[y]),p.splice(y-1,2,p[y-1]+p[y])):y++;return c[y=0]===M&&c.shift(),p[0]===M&&p.shift(),t[r]=c,e[r]=p,!0}if("object"===m(i)&&"object"===m(o)){if(Array.isArray(i)&&!i.isString)return i.map(function(t,e){return H(e,n[r],i,o)});for(var d in o)H(d,n[r],i,o);return !0}}return !1}var X="rgba(",Y=function(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"rgb(";return "number"==typeof t[e]&&(t[e-1]===r||t[e-3]===r||t[e-5]===r)};function Z(t,e,r,n,i,o,s){var a=s?r:r[t],u=s?n:n[t];if(void 0===u)return a;if(void 0===a||"string"==typeof a||a===u)return u;if("object"===m(a)&&"object"===m(u)){if(!a||!u)return e[t];if("object"===m(a)&&a&&a.isString&&u&&u.splice&&u.isString){for(var f="",l=0,h=a.length;l<h;l++)if(a[l]!==u[l]||"number"!=typeof a[l]||"number"==typeof u[l]){var c="number"==typeof a[l]&&"string"==typeof u[l]&&"="===u[l][1],p="number"!=typeof a[l]?a[l]:c?a[l]+parseFloat(u[l][0]+u[l].substr(2))*i:a[l]+(u[l]-a[l])*i;(Y(a,l)||Y(a,l,X))&&(p|=0),f+=p,c&&1===o&&(a[l]=a[l]+parseFloat(u[l][0]+u[l].substr(2)));}else f+=a[l];return s||(e[t]=f),f}if(Array.isArray(a)&&a[0]!==M)for(var y=0,d=a.length;y<d;y++)a[y]!==u[y]&&"string"!=typeof e[t]&&Z(y,e[t],a,u,i,o);else if("object"===m(a)&&a&&!a.isString)for(var v in a)a[v]!==u[v]&&Z(v,e[t],a,u,i,o);}else if("number"==typeof a){var _="string"==typeof u;e[t]=_?a+parseFloat(u[0]+u.substr(2))*i:a+(u-a)*i,_&&1===o&&(r[t]=e[t]);}else"function"==typeof u&&(e[t]=u(i));return e[t]}function $(t,e){var i=t[e],o=e.replace(rt,"").split(et),s=o.length-1,a=Array.isArray(t),u="object"===m(t)&&!a;return u?(t[e]=null,delete t[e]):a&&t.splice(e,1),o.reduce(function(t,e,r){a&&"."!==e&&"["!==e&&(e*=1);var n="["===o[r+1];if("."===e||"["===e)return "."===e?a=!(u=!0):"["===e&&(a=!(u=!1)),t;if(void 0===t[e]){if(a||u)return t[e]=r===s?i:a||n?[]:u?{}:null,u=a=!1,t[e]}else if(void 0!==t[e])return r===s&&(t[e]=i),t[e];return t},t)}function J(t){if("object"===m(t)&&t)for(var e in t)if(-1!==e.indexOf(".")||-1!==e.indexOf("["))$(t,e);else if("object"===m(t[e])&&t[e]){var r=t[e];for(var n in r)if(-1!==n.indexOf(".")||-1!==n.indexOf("["))$(r,n);else if("object"===m(r[n])&&r[n]){var i=r[n];for(var o in i)-1===o.indexOf(".")&&-1===o.indexOf("[")||$(i,o);}}return t}var tt,et=/([.[])/g,rt=/\]/g,nt=Object.freeze({FRAME_MS:D,TOO_LONG_FRAME_MS:250,CHAINED_TWEENS:U,EVENT_CALLBACK:S,EVENT_UPDATE:V,EVENT_COMPLETE:B,EVENT_START:G,EVENT_REPEAT:W,EVENT_REVERSE:z,EVENT_PAUSE:"pause",EVENT_PLAY:"play",EVENT_RESTART:j,EVENT_STOP:"stop",EVENT_SEEK:"seek",STRING_PROP:M,NUM_REGEX:P,deepCopy:R,decomposeString:K,decompose:H,RGB:"rgb(",RGBA:X,isRGBColor:Y,recompose:Z,SET_NESTED:J}),it={Linear:function(t,e,r){var n=t.length-1,i=n*e,o=Math.floor(i),s=it.Utils.Linear;return e<0?s(t[0],t[1],i,r):1<e?s(t[n],t[n-1],n-i,r):s(t[o],t[n<o+1?n:o+1],i-o,r)},Bezier:function(t,e,r){for(var n=it.Utils.Reset(r),i=t.length-1,o=Math.pow,s=it.Utils.Bernstein,a=Array.isArray(n),u=0;u<=i;u++)if("number"==typeof n)n+=o(1-e,i-u)*o(e,u)*t[u]*s(i,u);else if(a)for(var f=0,l=n.length;f<l;f++)"number"==typeof n[f]?n[f]+=o(1-e,i-u)*o(e,u)*t[u][f]*s(i,u):n[f]=t[u][f];else if("object"===m(n))for(var h in n)"number"==typeof n[h]?n[h]+=o(1-e,i-u)*o(e,u)*t[u][h]*s(i,u):n[h]=t[u][h];else if("string"==typeof n){for(var c="",p=t[Math.round(i*e)],y=1,d=p.length;y<d;y++)c+=p[y];return c}return n},CatmullRom:function(t,e,r){var n=t.length-1,i=n*e,o=Math.floor(i),s=it.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(o=Math.floor(i=n*(1+e))),s(t[(o-1+n)%n],t[o],t[(o+1)%n],t[(o+2)%n],i-o,r)):e<0?s(t[1],t[1],t[0],t[0],-e,r):1<e?s(t[n-1],t[n-1],t[n],t[n],(0|e)-e,r):s(t[o?o-1:0],t[o],t[n<o+1?n:o+1],t[n<o+2?n:o+2],i-o,r)},Utils:{Linear:function(t,e,r,n){if(t===e||"string"==typeof t){if(e.length&&e.splice&&e.isString){e="";for(var i=0,o=t.length;i<o;i++)e+=t[i];}return e}if("number"==typeof t)return "function"==typeof t?t(r):t+(e-t)*r;if("object"===m(t)){if(void 0!==t.length){var s="string"==typeof t[0]||t.isString;if(s||t[0]===M){for(var a="",u=s?0:1,f=t.length;u<f;u++){var l=0===r?t[u]:1===r?e[u]:"number"==typeof t[u]?t[u]+(e[u]-t[u])*r:e[u];(0<r&&r<1&&Y(t,u)||Y(t,u,X))&&(l|=0),a+=l;}return a}if(n&&n.length&&n.splice)for(var h=0,c=n.length;h<c;h++)n[h]=it.Utils.Linear(t[h],e[h],r,n[h]);}else for(var p in n)n[p]=it.Utils.Linear(t[p],e[p],r,n[p]);return n}},Reset:function(t){if(Array.isArray(t)){for(var e=0,r=t.length;e<r;e++)t[e]=it.Utils.Reset(t[e]);return t}if("object"!==m(t))return "number"==typeof t?0:t;for(var n in t)t[n]=it.Utils.Reset(t[n]);return t},Bernstein:function(t,e){var r=it.Utils.Factorial;return r(t)/r(e)/r(t-e)},Factorial:(tt=[1],function(t){var e=1;if(tt[t])return tt[t];for(var r=t;1<r;r--)e*=r;return tt[t]=e}),CatmullRom:function(t,e,r,n,i,o){if("string"==typeof t)return e;if("number"==typeof t){var s=.5*(r-t),a=.5*(n-e),u=i*i;return (2*e-2*r+s+a)*(i*u)+(-3*e+3*r-2*s-a)*u+s*i+e}if("object"===m(t)){if(void 0!==t.length){if(t[0]===M){for(var f="",l=1,h=t.length;l<h;l++){var c="number"==typeof t[l]?it.Utils.CatmullRom(t[l],e[l],r[l],n[l],i):n[l];(Y(t,l)||Y(t,l,X))&&(c|=0),f+=c;}return f}for(var p=0,y=o.length;p<y;p++)o[p]=it.Utils.CatmullRom(t[p],e[p],r[p],n[p],i,o[p]);}else for(var d in o)o[d]=it.Utils.CatmullRom(t[d],e[d],r[d],n[d],i,o[d]);return o}}}},ot={};function st(t,e,r){if(!t||!t.nodeType)return e;var n=t.queueID||"q_"+Date.now();t.queueID||(t.queueID=n);var i=ot[n];if(i){if(i.object===e&&t===i.tween.node&&r._startTime===i.tween._startTime)N(i.tween);else if("object"===m(e)&&e&&i.object){for(var o in e)o in i.object&&(r._startTime===i.tween._startTime?delete i.object[o]:i.propNormaliseRequired=!0);Object.assign(i.object,e);}return i.object}return "object"===m(e)&&e?(ot[n]={tween:r,object:e,propNormaliseRequired:!1},ot[n].object):e}function at(t,e,r){return e?t?"undefined"!=typeof window&&t===window||"undefined"!=typeof document&&t===document?[t]:"string"==typeof t?!!document.querySelectorAll&&document.querySelectorAll(t):Array.isArray(t)?t:t.nodeType?[t]:r?t:[]:null:t?"undefined"!=typeof window&&t===window||"undefined"!=typeof document&&t===document?t:"string"==typeof t?!!document.querySelector&&document.querySelector(t):Array.isArray(t)?t[0]:t.nodeType?t:r?t:null:null}var ut=0,ft=v.Linear.None,lt=function(){function L(t,e){return _(this,L),this.id=ut++,!t||"object"!==m(t)||e||t.nodeType?t&&(t.nodeType||t.length||"string"==typeof t)&&(t=this.node=at(t),e=this.object=st(t,e,this)):(e=this.object=t,t=null),this._valuesEnd=null,this._valuesStart=Array.isArray(e)?[]:{},this._duration=1e3,this._easingFunction=ft,this._easingReverse=ft,this._interpolationFunction=it.Linear,this._startTime=0,this._initTime=0,this._delayTime=0,this._repeat=0,this._r=0,this._isPlaying=!1,this._yoyo=!1,this._reversed=!1,this._onStartCallbackFired=!1,this._pausedTime=null,this._isFinite=!0,this._maxListener=15,this._chainedTweensCount=0,this._prevTime=null,this}return b(L,null,[{key:"fromTo",value:function(t,e,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};n.quickRender=n.quickRender?n.quickRender:!r;var i=new L(t,e).to(r,n);return n.quickRender&&(i.render().update(i._startTime),i._rendered=!1,i._onStartCallbackFired=!1),i}},{key:"to",value:function(t,e,r){return L.fromTo(t,null,e,r)}},{key:"from",value:function(t,e,r){return L.fromTo(t,e,null,r)}}]),b(L,[{key:"setMaxListener",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:15;return this._maxListener=t,this}},{key:"on",value:function(t,e){for(var r=this._maxListener,n=t+S,i=0;i<r;i++){var o=n+i;if(!this[o]){this[o]=e;break}}return this}},{key:"once",value:function(t,i){for(var o=this,e=this._maxListener,r=t+S,n=function(t){var n=r+t;if(!o[n])return o[n]=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];i.apply(o,e),o[n]=null;},"break"},s=0;s<e;s++){if("break"===n(s))break}return this}},{key:"off",value:function(t,e){for(var r=this._maxListener,n=t+S,i=0;i<r;i++){var o=n+i;this[o]===e&&(this[o]=null);}return this}},{key:"emit",value:function(t,e,r,n){var i=this._maxListener,o=t+S;if(!this[o+0])return this;for(var s=0;s<i;s++){var a=o+s;this[a]&&this[a](e,r,n);}return this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"isStarted",value:function(){return this._onStartCallbackFired}},{key:"reverse",value:function(t){var e=this._reversed;return this._reversed=void 0!==t?t:!e,this}},{key:"reversed",value:function(){return this._reversed}},{key:"pause",value:function(){return this._isPlaying?(this._isPlaying=!1,N(this),this._pausedTime=C(),this.emit("pause",this.object)):this}},{key:"play",value:function(){return this._isPlaying?this:(this._isPlaying=!0,this._startTime+=C()-this._pausedTime,this._initTime=this._startTime,s(this),this._pausedTime=C(),this.emit("play",this.object))}},{key:"restart",value:function(t){return this._repeat=this._r,this.reassignValues(),s(this),this.emit(j,this.object)}},{key:"seek",value:function(t,e){var r=this._duration,n=this._initTime,i=this._startTime,o=this._reversed,s=n+t;return this._isPlaying=!0,s<i&&n<=i&&(this._startTime-=r,this._reversed=!o),this.update(t,!1),this.emit("seek",t,this.object),e?this:this.pause()}},{key:"duration",value:function(t){return this._duration="function"==typeof t?t(this._duration):t,this}},{key:"to",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e3;if(this._valuesEnd=t,"number"==typeof e||"function"==typeof e)this._duration="function"==typeof e?e(this._duration):e;else if("object"===m(e))for(var r in e)if("function"==typeof this[r]){var n=E(Array.isArray(e[r])?e[r]:[e[r]],4),i=n[0],o=void 0===i?null:i,s=n[1],a=void 0===s?null:s,u=n[2],f=void 0===u?null:u,l=n[3],h=void 0===l?null:l;this[r](o,a,f,h);}return this}},{key:"render",value:function(){if(this._rendered)return this;var t=this._valuesStart,e=this._valuesEnd,r=this.object,n=this.node,i=this.InitialValues;if(J(r),J(e),n&&n.queueID&&ot[n.queueID]){var o=ot[n.queueID];if(o.propNormaliseRequired&&o.tween!==this){for(var s in e)o.tween._valuesEnd[s];o.normalisedProp=!0,o.propNormaliseRequired=!1;}}if(n&&i&&(r&&0!==Object.keys(r).length?e&&0!==Object.keys(e).length||(e=this._valuesEnd=i(n,r)):r=this.object=st(n,i(n,e),this)),!t.processed){for(var a in e){var u=r&&r[a]&&R(r[a]),f=e[a];if(!(q[a]&&q[a].init&&(q[a].init.call(this,u,f,a,r),void 0===u&&t[a]&&(u=t[a]),q[a].skipProcess))&&!("number"==typeof u&&isNaN(u)||null===u||null===f||!1===u||!1===f||void 0===u||void 0===f||u===f)){if(t[a]=u,Array.isArray(f))if(Array.isArray(u))f.isString&&r[a].isString&&!u.isString?u.isString=!0:H(a,r,t,e);else{f.unshift(u);for(var l=0,h=f.length;l<h;l++)"string"==typeof f[l]&&(f[l]=K(f[l]));}else H(a,r,t,e);"number"!=typeof u||"string"!=typeof f||f[1];}}t.processed=!0;}return L.Renderer&&this.node&&L.Renderer.init&&(L.Renderer.init.call(this,r,t,e),this.__render=!0),this._rendered=!0,this}},{key:"start",value:function(t){return this._startTime=void 0!==t?"string"==typeof t?C()+parseFloat(t):t:C(),this._startTime+=this._delayTime,this._initTime=this._prevTime=this._startTime,this._onStartCallbackFired=!1,this._rendered=!1,this._isPlaying=!0,s(this),this}},{key:"stop",value:function(){var t=this._isPlaying,e=this._isFinite,r=this.object,n=this._startTime,i=this._duration,o=this._r,s=this._yoyo,a=this._reversed;if(!t)return this;var u=e?(o+1)%2==1:!a;return this._reversed=!1,s&&u?this.update(n):this.update(n+i),N(this),this.emit("stop",r)}},{key:"delay",value:function(t){return this._delayTime="function"==typeof t?t(this._delayTime):t,this}},{key:"chainedTweens",value:function(){if(this._chainedTweensCount=arguments.length,!this._chainedTweensCount)return this;for(var t=0,e=this._chainedTweensCount;t<e;t++)this[U+t]=arguments[t];return this}},{key:"repeat",value:function(t){return this._repeat=this._duration?"function"==typeof t?t(this._repeat):t:0,this._r=this._repeat,this._isFinite=isFinite(t),this}},{key:"reverseDelay",value:function(t){return this._reverseDelayTime="function"==typeof t?t(this._reverseDelayTime):t,this}},{key:"yoyo",value:function(t,e){return this._yoyo="function"==typeof t?t(this._yoyo):null===t?this._yoyo:t,t||(this._reversed=!1),this._easingReverse=e||null,this}},{key:"easing",value:function(t){return this._easingFunction=t,this}},{key:"interpolation",value:function(t){return "function"==typeof t&&(this._interpolationFunction=t),this}},{key:"reassignValues",value:function(t){var e=this._valuesStart,r=this.object,n=this._delayTime;for(var i in this._isPlaying=!0,this._startTime=void 0!==t?t:C(),this._startTime+=n,this._reversed=!1,s(this),e){var o=e[i];r[i]=o;}return this}},{key:"update",value:function(t,e,r){var n,i,o,s=this._onStartCallbackFired,a=this._easingFunction,u=this._interpolationFunction,f=this._easingReverse,l=this._repeat,h=this._delayTime,c=this._reverseDelayTime,p=this._yoyo,y=this._reversed,d=this._startTime,v=this._prevTime,_=this._duration,m=this._valuesStart,g=this._valuesEnd,b=this.object,T=this._isFinite,k=this._isPlaying,w=this.__render,O=this._chainedTweensCount,A=0;if(_){var E=(t=void 0!==t?t:C())-v;if(this._prevTime=t,250<E&&F()&&x()&&(t-=E-D),!k||t<d&&!r)return !0;n=1<(n=(t-d)/_)?1:n,n=y?1-n:n;}else n=1,l=0;if(s||(this._rendered||(this.render(),this._rendered=!0),this.emit(G,b),this._onStartCallbackFired=!0),i=y&&f||a,!b)return !0;for(o in g){var S=m[o];if(null!=S||q[o]&&q[o].update){var j=g[o],M=i[o]?i[o](n):"function"==typeof i?i(n):ft(n),P=u[o]?u[o]:"function"==typeof u?u:it.Linear;"number"==typeof j?b[o]=S+(j-S)*M:!Array.isArray(j)||j.isString||Array.isArray(S)?j&&j.update?j.update(M):"function"==typeof j?b[o]=j(M):"string"==typeof j&&"number"==typeof S?b[o]=S+parseFloat(j[0]+j.substr(2))*M:Z(o,b,m,g,M,n):b[o]=P(j,M,b[o]),q[o]&&q[o].update&&q[o].update.call(this,b[o],S,j,M,n,o),A++;}}if(!A)return N(this),!1;if(w&&L.Renderer&&L.Renderer.update&&L.Renderer.update.call(this,b,n),this.emit(V,b,n,t),1===n||y&&0===n){if(0<l&&0<_){if(T&&this._repeat--,p)this._reversed=!y;else for(o in g){var R=g[o];"string"==typeof R&&"number"==typeof m[o]&&(m[o]+=parseFloat(R[0]+R.substr(2)));}return this.emit(p&&!y?z:W,b),this._startTime=y&&c?t-c:t+h,!0}if(e||(this._isPlaying=!1,N(this),ut--),this.emit(B,b),this._repeat=this._r,O)for(var I=0;I<O;I++)this[U+I].start(t+_);return !1}return !0}}]),L}(),ht=function(){function t(){_(this,t),this.totalTime=0,this.labels=[],this.offsets=[];}return b(t,[{key:"parseLabel",value:function(t,e){var r=this.offsets,n=this.labels,i=n.indexOf(t);if("string"==typeof t&&-1!==t.indexOf("=")&&!e&&-1===i){var o=t.substr(t.indexOf("=")-1,2),s=t.split(o);e=2===s.length?o+s[1]:null,t=s[0],i=n.indexOf(t);}if(-1!==i&&t){var a=r[i]||0;if("number"==typeof e)a=e;else if("string"==typeof e&&-1!==e.indexOf("=")){var u=e.charAt(0);e=Number(e.substr(2)),"+"===u||"-"===u?a+=parseFloat(u+e):"*"===u?a*=e:"/"===u?a/=e:"%"===u&&(a*=e/100);}return a}return "number"==typeof e?e:0}},{key:"addLabel",value:function(t,e){return this.labels.push(t),this.offsets.push(this.parseLabel(t,e)),this}},{key:"setLabel",value:function(t,e){var r=this.labels.indexOf(t);return -1!==r&&this.offsets.splice(r,1,this.parseLabel(t,e)),this}},{key:"eraseLabel",value:function(t){var e=this.labels.indexOf(t);return -1!==e&&(this.labels.splice(e,1),this.offsets.splice(e,1)),this}}]),t}(),ct=0,pt=function(t){function r(t){var e;return _(this,r),(e=A(this,k(r).call(this)))._duration=0,e._startTime=t&&void 0!==t.startTime?t.startTime:C(),e._tweens=[],e.elapsed=0,e._id=ct++,e._defaultParams=t,e.position=new ht,e.position.addLabel("afterLast",e._duration),e.position.addLabel("afterInit",e._startTime),e._onStartCallbackFired=!1,A(e,O(e))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e);}(r,lt),b(r,[{key:"mapTotal",value:function(t){return t.call(this,this._tweens),this}},{key:"timingOrder",value:function(t){var r=t(this._tweens.map(function(t){return t._startTime}));return this._tweens.map(function(t,e){t._startTime=r[e];}),this}},{key:"getTiming",value:function(t,e,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;if("reverse"===t){var i=r.stagger,o=(i||0)*(e.length-1);return e.map(function(t,e){return o-(i||0)*e+n})}if("async"===t)return e.map(function(t){return n});if("sequence"===t||"delayed"===t){var s=r.stagger;return s||(s=(r.duration||1e3)/(e.length-1)),e.map(function(t,e){return s*e+n})}if("oneByOne"===t)return e.map(function(t){return r.duration});if("shuffle"===t){var a=r.stagger;return function(t){var e,r,n;for(n=t.length;n;n-=1)e=Math.floor(Math.random()*n),r=t[n-1],t[n-1]=t[e],t[e]=r;return t}(e.map(function(t,e){return (a||0)*e+n}))}var u=r.stagger;return e.map(function(t,e){return (u||0)*e+n})}},{key:"fromTo",value:function(t,e,r,n){if((t=at(t,!0,!0))&&t.length){this._defaultParams&&(n=n?T({},this._defaultParams,n):this._defaultParams);for(var i,o=n.label,s="number"==typeof o?o:this.position.parseLabel(void 0!==o?o:"afterLast",null),a=this.getTiming(n.mode,t,n,s),u=0,f=t.length;u<f;u++)i=t[u],this.add(lt.fromTo(i,"function"==typeof e?e(u,t.length):"object"===m(e)&&e?T({},e):null,"function"==typeof r?r(u,t.length):r,"function"==typeof n?n(u,t.length):n),a[u]);}return this.start()}},{key:"from",value:function(t,e,r){return this.fromTo(t,e,null,r)}},{key:"to",value:function(t,e,r){return this.fromTo(t,null,e,r)}},{key:"addLabel",value:function(t,e){return this.position.addLabel(t,e),this}},{key:"map",value:function(t){for(var e=0,r=this._tweens.length;e<r;e++){var n=this._tweens[e];t(n,e),this._duration=Math.max(this._duration,n._duration+n._startTime);}return this}},{key:"add",value:function(t,e){var r=this;if(Array.isArray(t))return t.map(function(t){r.add(t,e);}),this;"object"!==m(t)||t instanceof lt||(t=new lt(t.from).to(t.to,t));var n=this._defaultParams,i=this._duration;if(n)for(var o in n)"function"==typeof t[o]&&t[o](n[o]);var s="number"==typeof e?e:this.position.parseLabel(void 0!==e?e:"afterLast",null);return t._startTime=Math.max(this._startTime,t._delayTime,s),t._delayTime=s,t._isPlaying=!0,this._duration=Math.max(i,Math.max(t._startTime+t._delayTime,t._duration)),this._tweens.push(t),this.position.setLabel("afterLast",this._duration),this}},{key:"restart",value:function(){return this._startTime+=C(),s(this),this.emit(j)}},{key:"easing",value:function(e){return this.map(function(t){return t.easing(e)})}},{key:"interpolation",value:function(e){return this.map(function(t){return t.interpolation(e)})}},{key:"update",value:function(t){var e,r=this._tweens,n=this._duration,i=this._reverseDelayTime,o=this._startTime,s=this._reversed,a=this._yoyo,u=this._repeat,f=this._isFinite,l=this._isPlaying,h=this._prevTime,c=this._onStartCallbackFired,p=(t=void 0!==t?t:C())-h;if(this._prevTime=t,250<p&&F()&&x()&&(t-=p-D),!l||t<o)return !0;e=1<(e=(t-o)/n)?1:e,e=s?1-e:e,this.elapsed=e,c||(this.emit(G),this._onStartCallbackFired=!0);for(var y=t-o,d=s?n-y:y,v=0;v<r.length;)r[v].update(d),v++;if(this.emit(V,e,y),1===e||s&&0===e){if(u){for(f&&this._repeat--,this.emit(s?z:W),a&&(this._reversed=!s,this.timingOrder(function(t){return t.reverse()})),this._startTime=s&&i?t+i:t,v=0;v<r.length;)r[v].reassignValues(t),v++;return !0}return this.emit(B),this._repeat=this._r,N(this),this._isPlaying=!1}return !0}},{key:"progress",value:function(t){return void 0!==t?this.update(t*this._duration):this.elapsed}}]),r}();t.Easing=v,t.FrameThrottle=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:120;y=1.05*t;},t.Interpolation=it,t.Interpolator=function(i,o){var s=Array.isArray(i)&&!i.isString,a="string"==typeof i?i:s?i.slice():T({},i);if(s)for(var t=0,e=i.length;t<e;t++)i[t]===o[t]&&"number"==typeof i[t]&&"number"!=typeof o[t]||H(t,a,i,o);else if("object"===m(i))for(var r in i)i[r]===o[r]&&"number"==typeof i[r]&&"number"!=typeof o[r]||H(r,a,i,o);else if("string"==typeof i){i=K(i),o=K(o);for(var n=1;n<i.length;)i[n]===o[n]&&"string"==typeof i[n-1]?(i.splice(n-1,2,i[n-1]+i[n]),o.splice(n-1,2,o[n-1]+o[n])):n++;}return function(t){if(s)for(var e=0,r=i.length;e<r;e++)Z(e,a,i,o,t);else if("object"===m(a))for(var n in i)Z(n,a,i,o,t);else"string"==typeof a&&(a=Z(0,0,i,o,t,t,!0));return a}},t.Plugins=q,t.Selector=at,t.Timeline=pt,t.ToggleLagSmoothing=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];d=t;},t.Tween=lt,t.add=s,t.autoPlay=function(t){l=t;},t.get=e,t.getAll=function(){return u},t.has=function(t){return null!==e(t)},t.isRunning=F,t.now=C,t.onRequestTick=function(t){h.push(t);},t.onTick=function(t){return u.push({update:t})},t.remove=N,t.removeAll=function(){u.length=0,a(o),f=!1;},t.update=i,t.utils=nt,Object.defineProperty(t,"__esModule",{value:!0});});

	function Application() {
	    this._renderer = null;
	    this._animation = null;
	    this._physics = null;
	    this._input = null;
	    this._particleSystemManager = null;
	    this._uiManager = null;
	    this._scriptManager = null;
	    this._clock = new THREE.Clock();

	    Object.defineProperty(this, "physicsModuleInst", {
	        get: function () {
	            return this._physics;
	        }
	    });

	    Object.defineProperty(this, "animationModuleInst", {
	        get: function () {
	            return this._animation;
	        }
	    });

	    Object.defineProperty(this, "particleSystemManager", {
	        get: function () {
	            return this._particleSystemManager;
	        }
	    });

	    Object.defineProperty(this, "uiManager", {
	        get: function () {
	            return this._uiManager;
	        }
	    });

	    Object.defineProperty(this, "inputModuleInst", {
	        get: function () {
	            return this._input;
	        }
	    });

	    Object.defineProperty(this, "scriptManagerInst", {
	        get: function () {
	            return this._scriptManager;
	        }
	    });
	}

	function _appTick() {
	    window.requestAnimationFrame(_appTick);
	    Application._instance._tick();
	}

	Application.isEditor = false;
	Application._instance = null;
	Object.defineProperty(Application, "instance", {
	    get: function () {
	        return Application._instance;
	    }
	});
	Application.CreateApplication = function () {
	    if (Application._instance == null) {
	        Application._instance = new Application();
	        Application._instance._init();
	        _appTick();
	        return Application._instance;
	    }
	};

	// Object.assign( Application.prototype, {
	ExtendType(Application, EventDispatcher, {

	    _tick: function () {
	        var deltaTime = this._clock.getDelta();
	        var elapsedTime = this._clock.elapsedTime;
	        this._update(deltaTime, elapsedTime);
	        this._render(deltaTime);
	    },

	    _initRender: function () {
	        this._renderer = new THREE.WebGLRenderer( { antialias: true } );
	        this._renderer.setPixelRatio(window.devicePixelRatio);
	        this._renderer.setSize(window.innerWidth, window.innerHeight);
	        this._renderer.shadowMap.enabled = true;
	        this._renderer.shadowMap.gammaOutput = true;
	    },

	    _initPhysics: function () {
	        this._physics = new _Physics();
	        this._physics.init();
	    },

	    _initAnimation: function () {
	        this._animation = new _Animation();
	        this._animation.init();
	    },

	    _update: function (deltaTime, elapsedTime) {
	        TWEEN.update(elapsedTime * 1000);
	        // console.log("Game tick:" + elapsedTime * 1000);
	        // TWEEN.update();
	        this._particleSystemManager.update(deltaTime);
	        this._uiManager.update(deltaTime);
	        this._animation.update(deltaTime);
	        this._physics.update(deltaTime);
	        this._input.update(deltaTime);
	        this._scriptManager._onUpdate(deltaTime);
	        this._scriptManager._onPostUpdate(deltaTime);
	    },

	    _render: function (deltaTime) {
	        var sceneInst = SceneManager.GetActiveScene();
	        if (sceneInst == null) return;
	        var cameras = Camera.allCameras;
	        for (var index = 0; index < cameras.length; ++index) {
	            this._renderer.render(sceneInst._imp, cameras[index]._imp);
	        }

	    },
	    _init: function () {
	        //fix threejs issues
	        THREE.SkinnedMesh.prototype.copy = function (source, recursive) {
	            // THREE.Mesh.prototype.copy.call( this, source );
	            THREE.Object3D.prototype.copy.call(this, source, recursive);

	            this.drawMode = source.drawMode;

	            if (source.morphTargetInfluences !== undefined) {

	                this.morphTargetInfluences = source.morphTargetInfluences.slice();

	            }

	            if (source.morphTargetDictionary !== undefined) {

	                this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);

	            }

	            this._sourceMeshUuid = source.uuid;

	            return this;
	        };

	        THREE.SkinnedMesh.prototype.clone = function (recursive) {
	            return new this.constructor(this.geometry, this.material).copy(this, recursive);
	        };

	        //fix Tween.js issues
	        // let self = this;
	        // TWEEN.now = function () {
			// 	return self._clock.elapsedTime * 1000;
	        // };

	        // TWEEN.onTick(time => console.log("TWEEN tick:" + time));

	        this._initRender();
	        this._initPhysics();
	        this._initAnimation();

	        this._input = new Input();

	        this._particleSystemManager = new ParticleSystemManager();
	        this._uiManager = new UserInterfaceManager();
	        this._scriptManager = new ScriptComponentSystem(this);
	    },

	    getRenderSize: function () {
	        let rendererSize = new THREE.Vector2();
	        this._renderer.getSize(rendererSize);
	        return rendererSize;
	    },

	    setRenderSize: function (width, height) {
	        let originalSize = new THREE.Vector2();
	        this._renderer.getSize(originalSize);

	        this._renderer.setSize(width, height);

	        this.dispatchEvent({ type: Event$1.RESIZE_APP_RENDERER, prevRenderSize: originalSize, currentRendererSize: new THREE.Vector2(width, height), });
	    },

	    getRenderDom: function () {
	        return this._renderer.domElement;
	    },

	    getRenderer: function () {
	        return this._renderer;
	    },
	});

	/**
	 * @class Web3DEngine.MonoBehaviour
	 * @name Web3DEngine.MonoBehaviour
	 * @classdesc MonoBehaviour 允许您通过附加您自己的JavaScript文件中定义的脚本类型来扩展实体的功能，以便通过访问实体来执行。
	 * @property { Boolean } enabled 启用或禁用该组件，所有继承该组件的脚本都有该属性。
	 */
	function MonoBehaviour(go) {
	    Behaviour.call(this, go);

	    this._enabled = true;
	    this._enabledOld = true;
	    this.__destroyed = false;
	    this.__scriptType = MonoBehaviour;

	    this._initialized = false;
	    this._postInitialized = false;
	    this.__started = false;

	    this.__typeRef = null;

	    // the order in the script component that the
	    // methods of this script instance will run relative to
	    // other script instances in the component
		this.__executionOrder = -1;

		this.addEventListener(Event$1.ENABLE, this, this._handleEnable);
	    this.addEventListener(Event$1.DISABLE, this, this._handleDisable);
	    if(!!this.gameObject) {
			this.gameObject.addEventListener(Event$1.ACTIVATE, this, this._handleEnable);
			this.gameObject.addEventListener(Event$1.DEACTIVATE, this, this._handleDisable);
		}
	}
	MonoBehaviour.classType = 'MonoBehaviour';

	MonoBehaviour.reservedScripts = [
	    'system', 'entity', 'create', 'destroy', 'swap', 'move',
	    'scripts', '_scripts', '_scriptsIndex', '_scriptsData',
	    'enabled', '_oldState', 'onEnable', 'onDisable', 'onPostStateChange',
	    '_onSetEnabled', '_checkState', '_onBeforeRemove',
	    '_onInitializeAttributes', '_onInitialize', '_onPostInitialize',
	    '_onUpdate', '_onPostUpdate',
	    '_callbacks', 'has', 'on', 'off', 'fire', 'once', 'hasEvent'
	];

	ExtendType(MonoBehaviour, Behaviour, {
	    _checkInit :function(){

	        // initialize script if not initialized yet and script is enabled
	        if (!this._initialized) {
	            this._initialized = true;

	            //this.__initializeAttributes(true);

	            // if (this.initialize)
	            //     this.gameObject.script._scriptMethod(this, MonoBehaviour.scriptMethods.initialize);
	        }

	        // post initialize script if not post initialized yet and still enabled
	        // (initilize might have disabled the script so check this.enabled again)
	        // Warning: Do not do this if the script component is currently being enabled
	        // because in this case post initialize must be called after all the scripts
	        // in the script component have been initialized first
	        if (this._initialized && !this._postInitialized) {
	            this._postInitialized = true;

	            if (this.Awake)
	                this.Awake();
	        }

	    },

	    _checkState : function(){
	        this._checkInit();

	        //handle on enable/endisable
	        if(this.enabled)
	        {
	            if (this[MonoBehaviour.scriptMethods.onenable])
	                this[MonoBehaviour.scriptMethods.onenable]();

	            //call start func if it exists
	            if(this._initialized && this._postInitialized && !this.__started)
	            {
	                this.__started = true;
	                if (this[MonoBehaviour.scriptMethods.start])
	                    this[MonoBehaviour.scriptMethods.start]();
	            }
	        }
	        else {
	            if (this[MonoBehaviour.scriptMethods.ondisable])
	                this[MonoBehaviour.scriptMethods.ondisable]();
	        }

		},

		_handleEnable:function(event)
	    {
	        if(this.OnEnable){
				this.OnEnable();
			}
	    },

	    _handleDisable:function(event)
	    {
	        if(this.OnDisable){
				this.OnDisable();
			}
	    },

	    _onCollisionEnter: function(collision)
	    {
	        if (this[MonoBehaviour.scriptMethods.onCollisionEnter])
	            this[MonoBehaviour.scriptMethods.onCollisionEnter](collision);
	    },

	    _onCollisionStay: function(collision)
	    {
	        if (this[MonoBehaviour.scriptMethods.onCollisionStay])
	            this[MonoBehaviour.scriptMethods.onCollisionStay](collision);
	    },

	    _onCollisionExit: function(collision)
	    {
	        if (this[MonoBehaviour.scriptMethods.onCollisionExit])
	            this[MonoBehaviour.scriptMethods.onCollisionExit](collision);
	    },

	});

	// script.extend = function (methods) {
	//     for (var key in methods) {
	//         if (!methods.hasOwnProperty(key))
	//             continue;
	//
	//         script.prototype[key] = methods[key];
	//     }
	// };

	MonoBehaviour.scriptMethods = {
	    initialize: 'Awake',
	    onenable: 'OnEnable',
	    start: 'Start',
	    update: 'Update',
	    postUpdate: 'LateUpdate',
	    ondisable: 'OnDisable',
	    ondestroy: 'OnDestroy',
	    swap: 'swap',
	    onCollisionEnter: "OnCollisionEnter",
	    onCollisionStay: "OnCollisionStay",
	    onCollisionExit: "OnCollisionExit"
	};

	Object.defineProperty(MonoBehaviour.prototype, 'enabled', {
	    get: function () {
	        return this._enabled;
	    },
	    set: function (value) {
	        this._enabled = !!value;

	        if (this.enabled === this._enabledOld) return;

	        this._enabledOld = this.enabled;
	        //this.fire(this.enabled ? 'enable' : 'disable');
	        //this.fire('state', this.enabled);//TOCHECK

	        this._checkState();
	    }

	});

	MonoBehaviour.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enable'
	});

	var components = ['x', 'y', 'z', 'w'];

	    var rawToValue = function (app, args, value, old) {
	        var i;

	        switch (args.type) {
	            case 'boolean':
	                return !!value;
	            case 'number':
	                if (typeof value === 'number') {
	                    return value;
	                } else if (typeof value === 'string') {
	                    var v = parseInt(value, 10);
	                    if (isNaN(v)) return null;
	                    return v;
	                } else if (typeof value === 'boolean') {
	                    return 0 + value;
	                }
	                return null;
	            case 'json':
	                if (typeof value === 'object') {
	                    return value;
	                }
	                try {
	                    return JSON.parse(value);
	                } catch (ex) {
	                    return null;
	                }
	                //TODO
	            // case 'asset':
	            //     if (value instanceof pc.Asset) {
	            //         return value;
	            //     } else if (typeof value === 'number') {
	            //         return app.assets.get(value) || null;
	            //     } else if (typeof value === 'string') {
	            //         return app.assets.get(parseInt(value, 10)) || null;
	            //     }
	            //     return null;
	            // case 'entity':
	            //     if (value instanceof pc.GraphNode) {
	            //         return value;
	            //     } else if (typeof value === 'string') {
	            //         return app.root.findByGuid(value);
	            //     }
	            //     return null;
	            case 'rgb':
	            case 'rgba':
	                if (value instanceof Color) {
	                    if (old instanceof Color) {
	                        old.copy(value);
	                        return old;
	                    }
	                    return value.clone();
	                } else if (value instanceof Array && value.length >= 3 && value.length <= 4) {
	                    for (i = 0; i < value.length; i++) {
	                        if (typeof value[i] !== 'number')
	                            return null;
	                    }
	                    if (!old) old = new Color();

	                    old.r = value[0];
	                    old.g = value[1];
	                    old.b = value[2];
	                    old.a = (value.length === 3) ? 1 : value[3];

	                    return old;
	                } else if (typeof value === 'string' && /#([0-9abcdef]{2}){3,4}/i.test(value)) {
	                    if (!old)
	                        old = new Color();

	                    old.fromString(value);
	                    return old;
	                }
	                return null;
	            case 'vec2':
	            case 'vec3':
	            case 'vec4':
	                var len = parseInt(args.type.slice(3), 10);
	                var classType = [Vector2, Vector3, Vector4];
	                var vecType = classType[len - 1];

	                if (value instanceof vecType) {
	                    if (old instanceof vecType) {
	                        old.copy(value);
	                        return old;
	                    }
	                    return value.clone();
	                } else if (value instanceof Array && value.length === len) {
	                    for (i = 0; i < value.length; i++) {
	                        if (typeof value[i] !== 'number')
	                            return null;
	                    }
	                    if (!old) old = new vecType();

	                    for (i = 0; i < len; i++)
	                        old[components[i]] = value[i];

	                    return old;
	                }
	                return null;
	                //TODO
	            // case 'curve':
	            //     if (value) {
	            //         var curve;
	            //         if (value instanceof pc.Curve || value instanceof pc.CurveSet) {
	            //             curve = value.clone();
	            //         } else {
	            //             var CurveType = value.keys[0] instanceof Array ? pc.CurveSet : pc.Curve;
	            //             curve = new CurveType(value.keys);
	            //             curve.type = value.type;
	            //         }
	            //         return curve;
	            //     }
	                break;
	        }

	        return value;
	    };


	    /**
	     * @constructor
	     * @name pc.ScriptAttributes
	     * @classdesc Container of Script Attribute definitions. Implements an interface to add/remove attributes and store their definition for a {@link ScriptType}.
	     * Note: An instance of pc.ScriptAttributes is created automatically by each {@link ScriptType}.
	     * @param {ScriptType} scriptType Script Type that attributes relate to.
	     */
	    function ScriptAttributes(scriptType) {
	        this.scriptType = scriptType;
	        this.index = { };
	    }
	    /**
	     * @function
	     * @name pc.ScriptAttributes#add
	     * @description Add Attribute
	     * @param {String} name Name of an attribute
	     * @param {Object} args Object with Arguments for an attribute
	     * @param {String} args.type Type of an attribute value, list of possible types:
	     * boolean, number, string, json, asset, entity, rgb, rgba, vec2, vec3, vec4, curve
	     * @param {?} [args.default] Default attribute value
	     * @param {String} [args.title] Title for Editor's for field UI
	     * @param {String} [args.description] Description for Editor's for field UI
	     * @param {(String|String[])} [args.placeholder] Placeholder for Editor's for field UI.
	     * For multi-field types, such as vec2, vec3, and others use array of strings.
	     * @param {Boolean} [args.array] If attribute can hold single or multiple values
	     * @param {Number} [args.size] If attribute is array, maximum number of values can be set
	     * @param {Number} [args.min] Minimum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
	     * @param {Number} [args.max] Maximum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
	     * @param {Number} [args.precision] Level of precision for field type 'number' with floating values
	     * @param {String} [args.assetType] Name of asset type to be used in 'asset' type attribute picker in Editor's UI, defaults to '*' (all)
	     * @param {String[]} [args.curves] List of names for Curves for field type 'curve'
	     * @param {String} [args.color] String of color channels for Curves for field type 'curve', can be any combination of `rgba` characters.
	     * Defining this property will render Gradient in Editor's field UI
	     * @param {Object[]} [args.enum] List of fixed choices for field, defined as array of objects, where key in object is a title of an option
	     * @example
	     * PlayerController.attributes.add('fullName', {
	     *     type: 'string',
	     * });
	     * @example
	     * PlayerController.attributes.add('speed', {
	     *     type: 'number',
	     *     title: 'Speed',
	     *     placeholder: 'km/h',
	     *     default: 22.2
	     * });
	     * @example
	     * PlayerController.attributes.add('resolution', {
	     *     type: 'number',
	     *     default: 32,
	     *     enum: [
	     *        { '32x32': 32 },
	     *        { '64x64': 64 },
	     *        { '128x128': 128 }
	     *     ]
	     * });
	     */
	    Object.assign( ScriptAttributes.prototype, {
	        add : function (name, args) {
	            if (this.index[name]) {
	                // #ifdef DEBUG
	                console.warn('attribute \'' + name + '\' is already defined for script type \'' + this.scriptType.name + '\'');
	                // #endif
	                return;
	            } else if (MonoBehaviour.reservedAttributes[name]) {
	                // #ifdef DEBUG
	                console.warn('attribute \'' + name + '\' is a reserved attribute name');
	                // #endif
	                return;
	            }

	            this.index[name] = args;

	            Object.defineProperty(this.scriptType.prototype, name, {
	                get: function () {
	                    return this.__attributes[name];
	                },
	                set: function (raw) {
	                    var old = this.__attributes[name];

	                    // convert to appropriate type
	                    if (args.array) {
	                        this.__attributes[name] = [];
	                        if (raw) {
	                            var i;
	                            var len;
	                            for (i = 0, len = raw.length; i < len; i++) {
	                                this.__attributes[name].push(rawToValue(this.app, args, raw[i], old ? old[i] : null));
	                            }
	                        }
	                    } else {
	                        this.__attributes[name] = rawToValue(this.app, args, raw, old);
	                    }

	                    //this.fire('attr', name, this.__attributes[name], old);
	                    //this.fire('attr:' + name, this.__attributes[name], old);
	                }
	            });
	        },

	        remove : function (name) {
	            if (!this.index[name])
	                return false;

	            delete this.index[name];
	            delete this.scriptType.prototype[name];
	            return true;
	        },

	        has : function (name) {
	            return !!this.index[name];
	        },

	        get : function (name) {
	            return this.index[name] || null;
	        }
	    });

	/**
	 * @static
	 * @function
	 * @name pc.createScript
	 * @description Method to create named {@link ScriptType}.
	 * It returns new function (class) "Script Type", which is auto-registered to {@link pc.ScriptRegistry} using it's name.
	 * This is the main interface to create Script Types, to define custom logic using JavaScript, that is used to create interaction for entities.
	 * @param {String} name unique Name of a Script Type.
	 * If a Script Type with the same name has already been registered and the new one has a `swap` method defined in its prototype,
	 * then it will perform hot swapping of existing Script Instances on entities using this new Script Type.
	 * Note: There is a reserved list of names that cannot be used, such as list below as well as some starting from `_` (underscore):
	 * system, entity, create, destroy, swap, move, scripts, onEnable, onDisable, onPostStateChange, has, on, off, fire, once, hasEvent
	 * @param {pc.Application} [app] Optional application handler, to choose which {@link pc.ScriptRegistry} to add a script to.
	 * By default it will use `pc.Application.getApplication()` to get current {@link pc.Application}.
	 * @returns {Function} The constructor of a {@link ScriptType}, which the developer is meant to extend by adding attributes and prototype methods.
	 * @example
	 * var Turning = pc.createScript('turn');
	 *
	 * // define `speed` attribute that is available in Editor UI
	 * Turning.attributes.add('speed', {
	 *     type: 'number',
	 *     default: 180,
	 *     placeholder: 'deg/s'
	 * });
	 *
	 * // runs every tick
	 * Turning.prototype.update = function(dt) {
	 *     this.entity.rotate(0, this.speed * dt, 0);
	 * };
	 */
	var createScript = function (name, app) {

	    if (createScript.reservedScripts[name])
	        throw new Error('script name: \'' + name + '\' is reserved, please change script name');

	    /**
	     * @constructor
	     * @name ScriptType
	     * @classdesc Represents the type of a script. It is returned by {@link pc.createScript}. Also referred to as Script Type.<br />
	     * The type is to be extended using its JavaScript prototype. There is a <strong>list of methods</strong>
	     * that will be executed by the engine on instances of this type, such as: <ul><li>initialize</li><li>postInitialize</li><li>update</li><li>postUpdate</li><li>swap</li></ul>
	     * <strong>initialize</strong> and <strong>postInitialize</strong> - are called if defined when script is about to run for the first time - postInitialize will run after all initialize methods are executed in the same tick or enabling chain of actions.<br />
	     * <strong>update</strong> and <strong>postUpdate</strong> - methods are called if defined for enabled (running state) scripts on each tick.<br />
	     * <strong>swap</strong> - This method will be called when a {@link ScriptType} that already exists in the registry gets redefined.
	     * If the new {@link ScriptType} has a `swap` method in its prototype, then it will be executed to perform hot-reload at runtime.
	     * @property {pc.Application} app The {@link pc.Application} that the instance of this type belongs to.
	     * @property {pc.Entity} entity The {@link pc.Entity} that the instance of this type belongs to.
	     * @property {Boolean} enabled True if the instance of this type is in running state. False when script is not running,
	     * because the Entity or any of its parents are disabled or the Script Component is disabled or the Script Instance is disabled.
	     * When disabled no update methods will be called on each tick.
	     * initialize and postInitialize methods will run once when the script instance is in `enabled` state during app tick.
	     * @param {Object} args The input arguments object
	     * @param {Object} args.app The {@link pc.Application} that is running the script
	     * @param {Object} args.entity The {@link pc.Entity} that the script is attached to
	     *
	     */
	    var script = function (args) {
	        // #ifdef DEBUG
	        if (!args || !args.app || !args.entity) {
	            console.warn('script \'' + name + '\' has missing arguments in constructor');
	        }
	        // #endif

	        //pc.events.attach(this);//TODO

	        this.app = args.app;
	        this.entity = args.entity;
	        this._enabled = typeof args.enabled === 'boolean' ? args.enabled : true;
	        this._enabledOld = this.enabled;
	        this.__destroyed = false;
	        this.__attributes = { };
	        this.__attributesRaw = args.attributes || null;
	        this.__scriptType = script;

	        // the order in the script component that the
	        // methods of this script instance will run relative to
	        // other script instances in the component
	        this.__executionOrder = -1;
	    };

	    /**
	     * @private
	     * @readonly
	     * @static
	     * @name ScriptType.__name
	     * @type String
	     * @description Name of a Script Type.
	     */
	    script.__name = name;

	    /**
	     * @field
	     * @static
	     * @readonly
	     * @type pc.ScriptAttributes
	     * @name ScriptType.attributes
	     * @description The interface to define attributes for Script Types. Refer to {@link pc.ScriptAttributes}
	     * @example
	     * var PlayerController = pc.createScript('playerController');
	     *
	     * PlayerController.attributes.add('speed', {
	     *     type: 'number',
	     *     title: 'Speed',
	     *     placeholder: 'km/h',
	     *     default: 22.2
	     * });
	     */
	    script.attributes = new ScriptAttributes(script);

	    // initialize attributes
	    script.prototype.__initializeAttributes = function (force) {
	        if (!force && !this.__attributesRaw)
	            return;

	        // set attributes values
	        for (var key in script.attributes.index) {
	            if (this.__attributesRaw && this.__attributesRaw.hasOwnProperty(key)) {
	                this[key] = this.__attributesRaw[key];
	            } else if (!this.__attributes.hasOwnProperty(key)) {
	                if (script.attributes.index[key].hasOwnProperty('default')) {
	                    this[key] = script.attributes.index[key].default;
	                } else {
	                    this[key] = null;
	                }
	            }
	        }

	        this.__attributesRaw = null;
	    };

	    script.extend = function (methods) {
	        for (var key in methods) {
	            if (!methods.hasOwnProperty(key))
	                continue;

	            script.prototype[key] = methods[key];
	        }
	    };

	    Object.defineProperty(script.prototype, 'enabled', {
	        get: function () {
	            return this._enabled && !this._destroyed && this.entity.script.enabled && this.entity.enabled;
	        },
	        set: function (value) {
	            this._enabled = !!value;

	            if (this.enabled === this._enabledOld) return;

	            this._enabledOld = this.enabled;
	            //this.fire(this.enabled ? 'enable' : 'disable');
	            //this.fire('state', this.enabled);//TOCHECK

	            // initialize script if not initialized yet and script is enabled
	            if (!this._initialized && this.enabled) {
	                this._initialized = true;

	                this.__initializeAttributes(true);

	                if (this.initialize)
	                    this.entity.script._scriptMethod(this, pc.ScriptComponent.scriptMethods.initialize);
	            }

	            // post initialize script if not post initialized yet and still enabled
	            // (initilize might have disabled the script so check this.enabled again)
	            // Warning: Do not do this if the script component is currently being enabled
	            // because in this case post initialize must be called after all the scripts
	            // in the script component have been initialized first
	            if (this._initialized && !this._postInitialized && this.enabled && !this.entity.script._beingEnabled) {
	                this._postInitialized = true;

	                if (this.postInitialize)
	                    this.entity.script._scriptMethod(this, pc.ScriptComponent.scriptMethods.postInitialize);
	            }
	        }
	    });

	    // add to scripts registry
	    var registry = Application.instance.scripts;//TODO, add
	    registry.add(script);

	    ScriptHandler._push(script);

	    return script;
	};

	// reserved scripts
	createScript.reservedScripts = [
	    'system', 'entity', 'create', 'destroy', 'swap', 'move',
	    'scripts', '_scripts', '_scriptsIndex', '_scriptsData',
	    'enabled', '_oldState', 'onEnable', 'onDisable', 'onPostStateChange',
	    '_onSetEnabled', '_checkState', '_onBeforeRemove',
	    '_onInitializeAttributes', '_onInitialize', '_onPostInitialize',
	    '_onUpdate', '_onPostUpdate',
	    '_callbacks', 'has', 'on', 'off', 'fire', 'once', 'hasEvent'
	];
	var reservedScripts = { };
	var i;
	for (i = 0; i < createScript.reservedScripts.length; i++)
	    reservedScripts[createScript.reservedScripts[i]] = 1;
	createScript.reservedScripts = reservedScripts;


	// reserved script attribute names
	createScript.reservedAttributes = [
	    'app', 'entity', 'enabled', '_enabled', '_enabledOld', '_destroyed',
	    '__attributes', '__attributesRaw', '__scriptType', '__executionOrder',
	    '_callbacks', 'has', 'on', 'off', 'fire', 'once', 'hasEvent'
	];
	var reservedAttributes = { };
	for (i = 0; i < createScript.reservedAttributes.length; i++)
	    reservedAttributes[createScript.reservedAttributes[i]] = 1;
	createScript.reservedAttributes = reservedAttributes;

	/**
	 * @component
	 * @name pc.ScriptComponent
	 * @class The ScriptComponent allows you to extend the functionality of an Entity by attaching your own Script Types defined in JavaScript files
	 * to be executed with access to the Entity. For more details on scripting see <a href="//developer.playcanvas.com/user-manual/scripting/">Scripting</a>.
	 * @param {pc.ScriptComponentSystem} system The ComponentSystem that created this Component
	 * @param {pc.Entity} entity The Entity that this Component is attached to.
	 * @extends pc.Component
	 * @property {ScriptType[]} scripts An array of all script instances attached to an entity. This Array shall not be modified by developer.
	 */

	function GameObjectScriptHandler(go) {

	    //FIX
	    //TOREMOVE
	    this.gameObject = go;
	    go.script = this;

	    // holds all script instances for this component
	    this._scripts = [];
	    // holds all script instances with an update method
	    this._updateList = new SortedLoopArray({ sortBy: '__executionOrder' });
	    // holds all script instances with a postUpdate method
	    this._postUpdateList = new SortedLoopArray({ sortBy: '__executionOrder' });

	    this._scriptsIndex = {};
	    this._destroyedScripts = [];
	    this._destroyed = false;
	    this._scriptsData = null;
	    this._oldState = false;

	    // if true then we are currently looping through
	    // script instances. This is used to prevent a scripts array
	    // from being modified while a loop is being executed
	    this._isLoopingThroughScripts = false;

	    // the order that this component will be updated
	    // by the script system. This is set by the system itself.
	    this._executionOrder = -1;

	    //this.on('set_enabled', this._onSetEnabled, this);//TOCHECK

	    //add
	    Object.defineProperty(this, "system",{
	        get:function () {
	            return Application.instance.scriptManagerInst;
	        }
	    });
	    Object.defineProperty(this, "entity",{
	        get:function () {
	            return this.gameObject;
	        }
	    });

	    //add to script manager
	    this._goActiveInHierarchy = go.activeInHierarchy;
	    Application.instance.scriptManagerInst.RegScriptHandler(this);
	    go.addEventListener(Event.ACTIVATE, this, this.__onActivate);
	    go.addEventListener(Event.DEACTIVATE, this, this.__onDeactivate);
	    go.addEventListener(Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	}


	Object.assign( GameObjectScriptHandler.prototype, {

	    // onEnable: function () {
	    //     this._beingEnabled = true;
	    //     this._checkState();
	    //
	    //     if (!this.gameObject._beingEnabled) {
	    //         this.onPostStateChange();
	    //     }
	    //
	    //     this._beingEnabled = false;
	    // },
	    //
	    // onDisable: function () {
	    //     this._checkState();
	    // },

	    onPostStateChange: function () {
	        var script;

	        var wasLooping = this._beginLooping();

	        for (var i = 0, len = this.scripts.length; i < len; i++) {
	            script = this.scripts[i];

	            if (script._initialized && !script._postInitialized && script.enabled) {
	                script._postInitialized = true;

	                if (script[MonoBehaviour.scriptMethods.postInitialize])
	                    this._scriptMethod(script, MonoBehaviour.scriptMethods.postInitialize);
	            }
	        }

	        this._endLooping(wasLooping);
	    },

	    // Sets isLoopingThroughScripts to false and returns
	    // its previous value
	    _beginLooping: function () {
	        var looping = this._isLoopingThroughScripts;
	        this._isLoopingThroughScripts = true;
	        return looping;
	    },

	    // Restores isLoopingThroughScripts to the specified parameter
	    // If all loops are over then remove destroyed scripts form the _scripts array
	    _endLooping: function (wasLoopingBefore) {
	        this._isLoopingThroughScripts = wasLoopingBefore;
	        if (!this._isLoopingThroughScripts) {
	            this._removeDestroyedScripts();
	        }
	    },

	    // We also need this handler because it is fired
	    // when value === old instead of onEnable and onDisable
	    // which are only fired when value !== old
	    _onSetEnabled: function (prop, old, value) {
	        this._beingEnabled = true;
	        this._checkState();
	        this._beingEnabled = false;
	    },

	    _checkInit :function()
	    {
	        var wasLooping = this._beginLooping();

	        var script;
	        for (var i = 0, len = this.scripts.length; i < len; i++) {
	            script = this.scripts[i];
	            script._checkInit();
	        }

	        this._endLooping(wasLooping);
	    },

	    __onActivate:function(){
	        this._goActiveInHierarchy = true;
	        this._checkState();
	    },

	    __onDeactivate:function(){
	        this._goActiveInHierarchy = false;
	        this._checkState();
	    },

	    _checkState: function () {
	        var state = this._goActiveInHierarchy;
	        if (state === this._oldState)
	            return;

	        this._oldState = state;

	        //this.fire(state ? 'enable' : 'disable');
	        //this.fire('state', state);//TOCHECK

	        if (state) {
	            this.system._addComponentToEnabled(this);
	        } else {
	            this.system._removeComponentFromEnabled(this);
	        }

	        var wasLooping = this._beginLooping();

	        var script;
	        for (var i = 0, len = this.scripts.length; i < len; i++) {
	            script = this.scripts[i];
	            script._checkState();
	        }

	        this._endLooping(wasLooping);
	    },

	    __onRemoveComponent:function(event){

	    },

	    _onBeforeRemove: function () {
	        this.fire('remove');

	        var wasLooping = this._beginLooping();

	        // destroy all scripts
	        for (var i = 0; i < this.scripts.length; i++) {
	            var script = this.scripts[i];
	            if (!script) continue;

	            this.destroy(script.__scriptType.__name);
	        }

	        this._endLooping(wasLooping);
	    },

	    _removeDestroyedScripts: function () {
	        var len = this._destroyedScripts.length;
	        if (!len) return;

	        var i;
	        for (i = 0; i < len; i++) {
	            var script = this._destroyedScripts[i];
	            this._removeScriptInstance(script);
	        }

	        this._destroyedScripts.length = 0;

	        // update execution order for scripts
	        this._resetExecutionOrder(0, this._scripts.length);
	    },

	    _onInitializeAttributes: function () {
	        for (var i = 0, len = this.scripts.length; i < len; i++)
	            this.scripts[i].__initializeAttributes();
	    },

	    _scriptMethod: function (script, method, arg) {
	        try {
	            script[method](arg);
	        } catch (ex) {
	            // disable script if it fails to call method
	            script.enabled = false;

	            if (!script._callbacks || !script._callbacks.error) {
	                console.warn('unhandled exception while calling "' + method + '" for "' + script.__scriptType.__name + '" script: ', ex);
	                console.error(ex);
	            }

	            script.fire('error', ex, method);
	            this.fire('error', script, ex, method);
	        }
	    },

	    _onInitialize: function () {
	        var script, scripts = this._scripts;

	        var wasLooping = this._beginLooping();

	        for (var i = 0, len = scripts.length; i < len; i++) {
	            script = scripts[i];
	            if (!script._initialized && script.enabled) {
	                script._initialized = true;
	                if (script.initialize)
	                    this._scriptMethod(script, MonoBehaviour.scriptMethods.initialize);
	            }
	        }

	        this._endLooping(wasLooping);
	    },

	    _onPostInitialize: function () {
	        this.onPostStateChange();
	    },

	    _onUpdate: function (dt) {
	        var self = this;
	        var list = self._updateList;
	        if (! list.length) return;

	        var script;

	        var wasLooping = self._beginLooping();

	        for (list.loopIndex = 0; list.loopIndex < list.length; list.loopIndex++) {
	            script = list.items[list.loopIndex];
	            if (script.enabled) {
	                self._scriptMethod(script, MonoBehaviour.scriptMethods.update, dt);
	            }
	        }

	        self._endLooping(wasLooping);
	    },

	    _onPostUpdate: function (dt) {
	        var self = this;
	        var list = self._postUpdateList;
	        if (! list.length) return;

	        var wasLooping = self._beginLooping();

	        var script;

	        for (list.loopIndex = 0; list.loopIndex < list.length; list.loopIndex++) {
	            script = list.items[list.loopIndex];
	            if (script.enabled) {
	                self._scriptMethod(script, MonoBehaviour.scriptMethods.postUpdate, dt);
	            }
	        }

	        self._endLooping(wasLooping);
	    },

	    _onCollisionEnter: function (collision)
	    {
	        for (var i = 0, len = this.scripts.length; i < len; i++) {
	            var script = this.scripts[i];
	            script._onCollisionEnter(collision);
	        }
	    },

	    _onCollisionStay: function (collision)
	    {
	        for (var i = 0, len = this.scripts.length; i < len; i++) {
	            var script = this.scripts[i];
	            script._onCollisionStay(collision);
	        }
	    },

	    _onCollisionExit:function (collision)
	    {
	        for (var i = 0, len = this.scripts.length; i < len; i++) {
	            var script = this.scripts[i];
	            script._onCollisionExit(collision);
	        }
	    },

	    /**
	     * @private
	     * Inserts script instance into the scripts array at the specified index. Also inserts the script
	     * into the update list if it has an update method and the post update list if it has a postUpdate method.
	     * @param {Object} scriptInstance The script instance
	     * @param {Number} index The index where to insert the script at. If -1 then append it at the end.
	     * @param {Number} scriptsLength The length of the scripts array.
	     */
	    InsertScriptInstance: function (scriptInstance, index, scriptsLength) {
	        scriptsLength = scriptsLength || this._scripts.length;

	        if (index === -1) {
	            // append script at the end and set execution order
	            this._scripts.push(scriptInstance);
	            scriptInstance.__executionOrder = scriptsLength;
	        } else {
	            // insert script at index and set execution order
	            this._scripts.splice(index, 0, scriptInstance);
	            scriptInstance.__executionOrder = index;

	            // now we also need to update the execution order of all
	            // the script instances that come after this script
	            this._resetExecutionOrder(index + 1, scriptsLength + 1);
	        }

	        // append script to the update list if it has an update method
	        if (scriptInstance[MonoBehaviour.scriptMethods.update]) {
	            this._updateList.append(scriptInstance);
	        }

	        // add script to the postUpdate list if it has a postUpdate method
	        if (scriptInstance[MonoBehaviour.scriptMethods.postUpdate]) {
	            this._postUpdateList.append(scriptInstance);
	        }

	        if(!this.system.preloading)
	        {
	            scriptInstance._checkState();
	        }
	    },

	    _removeScriptInstance: function (scriptInstance) {
	        var idx = this._scripts.indexOf(scriptInstance);
	        if (idx === -1) return idx;

	        this._scripts.splice(idx, 1);

	        if (scriptInstance[MonoBehaviour.scriptMethods.update]) {
	            this._updateList.remove(scriptInstance);
	        }

	        if (scriptInstance[MonoBehaviour.scriptMethods.postUpdate]) {
	            this._postUpdateList.remove(scriptInstance);
	        }

	        return idx;
	    },

	    _resetExecutionOrder: function (startIndex, scriptsLength) {
	        for (var i = startIndex; i < scriptsLength; i++) {
	            this._scripts[i].__executionOrder = i;
	        }
	    },

	    /**
	     * @function
	     * @name pc.ScriptComponent#has
	     * @description Detect if script is attached to an entity using name of {@link ScriptType}.
	     * @param {String} name The name of the Script Type
	     * @returns {Boolean} If script is attached to an entity
	     * @example
	     * if (entity.script.has('playerController')) {
	     *     // entity has script
	     * }
	     */
	    has: function (name) {
	        var scriptType = name;

	        // shorthand using script name
	        if (typeof scriptType === 'string')
	            scriptType = this.system.app.scripts.get(scriptType);

	        return !!this._scriptsIndex[scriptType.__name];
	    },

	    /**
	     * @function
	     * @name pc.ScriptComponent#destroy
	     * @description Destroy the script instance that is attached to an entity.
	     * @param {String} name The name of the Script Type
	     * @returns {Boolean} If it was successfully destroyed
	     * @example
	     * entity.script.destroy('playerController');
	     */
	    destroy: function (name) {
	        var scriptName = name;
	        var scriptType = name;

	        // shorthand using script name
	        if (typeof scriptType === 'string') {
	            scriptType = this.system.app.scripts.get(scriptType);
	            if (scriptType)
	                scriptName = scriptType.__name;
	        }

	        var scriptData = this._scriptsIndex[scriptName];
	        delete this._scriptsIndex[scriptName];
	        if (!scriptData) return false;

	        if (scriptData.instance && !scriptData.instance._destroyed) {
	            scriptData.instance.enabled = false;
	            scriptData.instance._destroyed = true;

	            // if we are not currently looping through our scripts
	            // then it's safe to remove the script
	            if (!this._isLoopingThroughScripts) {
	                var ind = this._removeScriptInstance(scriptData.instance);
	                if (ind >= 0) {
	                    this._resetExecutionOrder(ind, this._scripts.length);
	                }
	            } else {
	                // otherwise push the script in _destroyedScripts and
	                // remove it from _scripts when the loop is over
	                this._destroyedScripts.push(scriptData.instance);
	            }
	        }

	        // remove swap event
	        this.system.app.scripts.off('swap:' + scriptName, scriptData.onSwap);

	        delete this[scriptName];

	        this.fire('destroy', scriptName, scriptData.instance || null);
	        this.fire('destroy:' + scriptName, scriptData.instance || null);

	        if (scriptData.instance)
	            scriptData.instance.fire('destroy');

	        return true;
	    },

	    swap: function (script) {
	        var scriptType = script;

	        // shorthand using script name
	        if (typeof scriptType === 'string')
	            scriptType = this.system.app.scripts.get(scriptType);

	        var old = this._scriptsIndex[scriptType.__name];
	        if (!old || !old.instance) return false;

	        var scriptInstanceOld = old.instance;
	        var ind = this._scripts.indexOf(scriptInstanceOld);

	        var scriptInstance = new scriptType({
	            app: this.system.app,
	            entity: this.gameObject,
	            enabled: scriptInstanceOld.enabled,
	            attributes: scriptInstanceOld.__attributes
	        });

	        if (!scriptInstance.swap)
	            return false;

	        scriptInstance.__initializeAttributes();

	        // add to component
	        this._scripts[ind] = scriptInstance;
	        this._scriptsIndex[scriptType.__name].instance = scriptInstance;
	        this[scriptType.__name] = scriptInstance;

	        // set execution order and make sure we update
	        // our update and postUpdate lists
	        scriptInstance.__executionOrder = ind;
	        if (scriptInstanceOld[MonoBehaviour.scriptMethods.update]) {
	            this._updateList.remove(scriptInstanceOld);
	        }
	        if (scriptInstanceOld[MonoBehaviour.scriptMethods.postUpdate]) {
	            this._postUpdateList.remove(scriptInstanceOld);
	        }

	        if (scriptInstance[MonoBehaviour.scriptMethods.update]) {
	            this._updateList.insert(scriptInstance);
	        }
	        if (scriptInstance[MonoBehaviour.scriptMethods.postUpdate]) {
	            this._postUpdateList.insert(scriptInstance);
	        }

	        this._scriptMethod(scriptInstance, MonoBehaviour.scriptMethods.swap, scriptInstanceOld);

	        this.fire('swap', scriptType.__name, scriptInstance);
	        this.fire('swap:' + scriptType.__name, scriptInstance);

	        return true;
	    },

	    /**
	     * @function
	     * @private
	     * @name pc.ScriptComponent#resolveDuplicatedEntityReferenceProperties
	     * @description When an entity is cloned and it has entity script attributes that point
	     * to other entities in the same subtree that is cloned, then we want the new script attributes to point
	     * at the cloned entities. This method remaps the script attributes for this entity and it assumes that this
	     * entity is the result of the clone operation.
	     * @param {pc.ScriptComponent} oldScriptComponent The source script component that belongs to the entity that was being cloned.
	     * @param {Object} duplicatedIdsMap A dictionary with guid-entity values that contains the entities that were cloned
	     */
	    resolveDuplicatedEntityReferenceProperties: function (oldScriptComponent, duplicatedIdsMap) {
	        var newScriptComponent = this.gameObject.getComponent(ScriptComponent);

	        // for each script in the old compononent
	        for (var scriptName in oldScriptComponent._scriptsIndex) {
	            // get the script type from the script registry
	            var scriptType = this.system.app.scripts.get(scriptName);
	            if (! scriptType) {
	                continue;
	            }

	            // get the script from the component's index
	            var script = oldScriptComponent._scriptsIndex[scriptName];
	            if (! script || ! script.instance) {
	                continue;
	            }

	            // if __attributesRaw exists then it means that the new entity
	            // has not yet initialized its attributes so put the new guid in there,
	            // otherwise it means that the attributes have already been initialized
	            // so convert the new guid to an entity
	            // and put it in the new attributes
	            var newAttributesRaw = newScriptComponent[scriptName].__attributesRaw;
	            var newAttributes = newScriptComponent[scriptName].__attributes;
	            if (! newAttributesRaw && ! newAttributes) {
	                continue;
	            }

	            // get the old script attributes from the instance
	            var oldAttributes = script.instance.__attributes;
	            for (var attributeName in oldAttributes) {
	                if (! oldAttributes[attributeName]) {
	                    continue;
	                }

	                // get the attribute definition from the script type
	                var attribute = scriptType.attributes.get(attributeName);
	                if (! attribute || attribute.type !== 'entity') {
	                    continue;
	                }

	                if (attribute.array) {
	                    // handle entity array attribute
	                    var oldGuidArray = oldAttributes[attributeName];
	                    var len = oldGuidArray.length;
	                    if (! len) {
	                        continue;
	                    }

	                    var newGuidArray = oldGuidArray.slice();
	                    //TODO
	                    // for (var i = 0; i < len; i++) {
	                    //     var guid = newGuidArray[i] instanceof pc.Entity ? newGuidArray[i].getGuid() : newGuidArray[i];
	                    //     if (duplicatedIdsMap[guid]) {
	                    //         // if we are using attributesRaw then use the guid otherwise use the entity
	                    //         newGuidArray[i] = newAttributesRaw ? duplicatedIdsMap[guid].getGuid() : duplicatedIdsMap[guid];
	                    //     }
	                    // }

	                    if (newAttributesRaw) {
	                        newAttributesRaw[attributeName] = newGuidArray;
	                    } else {
	                        newAttributes[attributeName] = newGuidArray;
	                    }
	                } else {
	                    // handle regular entity attribute
	                    var oldGuid = oldAttributes[attributeName];
	                    //TODO
	                    // if (oldGuid instanceof pc.Entity) {
	                    //     oldGuid = oldGuid.getGuid();
	                    // } else if (typeof oldGuid !== 'string') {
	                    //     continue;
	                    // }

	                    if (duplicatedIdsMap[oldGuid]) {
	                        if (newAttributesRaw) {
	                            newAttributesRaw[attributeName] = duplicatedIdsMap[oldGuid].getGuid();
	                        } else {
	                            newAttributes[attributeName] = duplicatedIdsMap[oldGuid];
	                        }
	                    }

	                }
	            }
	        }
	    },

	    /**
	     * @function
	     * @name pc.ScriptComponent#move
	     * @description Move script instance to different position to alter update order of scripts within entity.
	     * @param {String} name The name of the Script Type
	     * @param {Number} ind New position index
	     * @returns {Boolean} If it was successfully moved
	     * @example
	     * entity.script.move('playerController', 0);
	     */
	    move: function (name, ind) {
	        var len = this._scripts.length;
	        if (ind >= len || ind < 0)
	            return false;

	        var scriptName = name;

	        if (typeof scriptName !== 'string')
	            scriptName = name.__name;

	        var scriptData = this._scriptsIndex[scriptName];
	        if (!scriptData || !scriptData.instance)
	            return false;

	        var indOld = this._scripts.indexOf(scriptData.instance);
	        if (indOld === -1 || indOld === ind)
	            return false;

	        // move script to another position
	        this._scripts.splice(ind, 0, this._scripts.splice(indOld, 1)[0]);

	        // reset execution order for scripts and re-sort update and postUpdate lists
	        this._resetExecutionOrder(0, len);
	        this._updateList.sort();
	        this._postUpdateList.sort();

	        this.fire('move', scriptName, scriptData.instance, ind, indOld);
	        this.fire('move:' + scriptName, scriptData.instance, ind, indOld);

	        return true;
	    }
	});

	Object.defineProperty(GameObjectScriptHandler.prototype, 'scripts', {
	    get: function () {
	        return this._scripts;
	    },
	    set: function (value) {
	        this._scriptsData = value;

	        for (var key in value) {
	            if (!value.hasOwnProperty(key))
	                continue;

	            var script = this._scriptsIndex[key];
	            if (script) {
	                // existing script

	                // enabled
	                if (typeof value[key].enabled === 'boolean')
	                    script.enabled = !!value[key].enabled;

	                // attributes
	                if (typeof value[key].attributes === 'object') {
	                    for (var attr in value[key].attributes) {
	                        if (createScript.reservedAttributes[attr])
	                            continue;

	                        if (!script.__attributes.hasOwnProperty(attr)) {
	                            // new attribute
	                            var scriptType = this.system.app.scripts.get(key);
	                            if (scriptType)
	                                scriptType.attributes.add(attr, { });
	                        }

	                        // update attribute
	                        script[attr] = value[key].attributes[attr];
	                    }
	                }
	            } else {
	                // TODO scripts2
	                // new script
	                console.log(this.order);
	            }
	        }
	    }
	});

	/**
	 * @class Web3DEngine.MeshFilter
	 * @name Web3DEngine.MeshFilter
	 * @classdesc MeshFilter���,������Է�������������������������
	 * @property { Boolean } enabled ���û���ø������
	 * @property { Mesh } material �����������ʵ������Mesh��
	 */
	function MeshFilter(go) {
		Component.call(this, go);
	    this.instClassType = MeshFilter.classType;
		this._mesh = null;
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);

	    Object.defineProperty(this, "mesh",{
	        get:function () {
	            return this._mesh;
	        },

	        set: function (value) {
	            if(!(value instanceof Mesh)) value = null;
	            // if(this._mesh == value) return;

	            if(this._mesh)
	                this._mesh.removeEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	            this._mesh = value;
	            if(this._mesh)
	                this._mesh.addEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	            // if (value == null || !value.isMesh ) return;
	            this._mesh = value;
	            this.gameObject.dispatchEvent({type:Event$1.CHANGEMESH});
	        }
	    });
	}

	ExtendType(MeshFilter, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	        this._mesh = source._mesh;
	    },

	    _handleDestroy: function (event) {
	        if(this._mesh)
	            this._mesh.removeEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);
	    },

	    _assetRemoved: function (event) {
	        this.mesh = null;
	    },
	});

	MeshFilter.attributes.add('mesh', {
	    type: 'Mesh',
	    title: 'Mesh',
	    default : null
	});

	/**
	 * @class Web3DEngine.MeshRenderer
	 * @name Web3DEngine.MeshRenderer
	 * @classdesc MeshRenderer组件,渲染由 MeshFilter插入的网格。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Material } material 用于蒙皮的材质。
	 * @property { Boolean } receiveShadow  如果为true，则会在此模型上投射阴影。
	 * @property { Boolean } castShadow 如果为true，则此模型将为启用了阴影投射的灯投射阴影。
	 */
	function MeshRenderer(go) {
	    Renderer.call(this, go);

	    this.instClassType = MeshRenderer.classType;
		this._geometry = null;
		this._meshAssetValue = null;

	    this._checkRes();
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	    let scope = this;
	    this.gameObject.addEventListener(Event$1.CHANGEMESH, this, function(e){
	        scope._checkRes();
	    });
	}

	ExtendType(MeshRenderer, Renderer, {
	    _copy:function(source){
	        Renderer.prototype._copy.call( this, source );
	        if(source._imp)
	        {
	            this._imp.visible = source._imp.visible;
	        }
	    },

	    _OnMeshFilterDestroy:function(event){
	        //NOTE this has changed to meshfilter
	        let meshInst = this.gameObject.getComponent(MeshRenderer);
	        if(meshInst)
	        {
	            meshInst._checkRes();
	        }
	    },

	    _handleDestroy:function(event)
	    {
	        if(this._imp != null)
	        {
	            this.gameObject._imp.remove(this._imp);
	        }
	    },

	    _checkRes: function ( ) {
	        this._geometry = this.gameObject.getComponent(MeshFilter);

	        if(this._geometry != null && this._geometry.mesh != null)
	        {
	            this._meshAsset = this._geometry.mesh;
	        }
	        else {
	            this._meshAsset = null;
	        }
	    }
	});

	Object.defineProperty(MeshRenderer.prototype, "_meshAsset",{
	    get:function () {
	        return this._meshAssetValue;
	    },

	    set:function(value){
	        if(this._meshAssetValue === value)  return;
	        this._meshAssetValue = value;

	        //process existing value
	        if(this._imp != null)
	        {
	            this.gameObject._imp.remove(this._imp);
	            this._imp = null;
	        }
	        if(this._meshAsset !== null && this._meshAssetValue._imp !== null)
	        {
	            this._imp = this._meshAssetValue._imp.clone();
	            this.gameObject._imp.add(this._imp);

	            //apply other value
	            this._imp.layers.set(this.gameObject.layer);
	            this._imp.userData.engineComponent = this;

	            //设置模型材质
	            this._materialNodes = this._getMaterialNodes(this._imp);
	            this._setExternalMaterials(this._materialNodes, this._meshAssetValue._externalMaterials);

	            this.__castShadowInChild(this._imp, this._castShadow);
	            this.__receiveShadowInChild(this._imp, this._receiveShadow);
	            this._imp.visible = this.enabled;
	        }
	    }
	});

	MeshRenderer.attributes.add('castShadow', {
	    type: 'boolean',
	    title: 'CastShadow',
	    default : false
	});

	MeshRenderer.attributes.add('receiveShadow', {
	    type: 'boolean',
	    title: 'ReceiveShadow',
	    default: false
	});

	MeshRenderer.attributes.add('material', {
	    type: 'Material',
	    title: 'Material',
	    default:null
	});

	MeshRenderer.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enable',
	    default:true
	});

	function GameObject(manual, imp) {
	    BaseObject.call(this);
	    this.instClassType = GameObject.classType;
	    this._compoents=[];
	    this.name='GameObject';
	    if(imp === undefined)
	    {
	        this._imp = new THREE.Group;
	    }
	    else
	    {
	        this._imp = imp;
	    }

	    this._selfActive = true;
	    if(manual === undefined || !manual)
	    {
	        this.transform = this.addComponent(Transform);
	    }
	    this._scriptManager = null;
	    this._layer = 0;
	    this._imp.gameObject = this;
	}

	GameObject.Instantiate = function(obj){
	    let imp = obj._imp.clone(false);
	    let newInst = new obj.constructor(false, imp);
	    newInst._copy( obj );
	    return newInst;
	};


	ExtendType(GameObject, BaseObject, {
	    _copy:function(source){
	        BaseObject.prototype._copy.call( this, source );
	        this.name = source.name;
			this.layer = source.layer;
	        this._imp.copy(source._imp, false);

	        this.transform._copy(source.transform);
	        //copy components
	        //0 is transform
	        for(let index = 0; index < source._compoents.length; ++index)
	        {
	            let srcComponent = source._compoents[index];
				if(!!srcComponent.isTransform) continue;
                if(!!srcComponent.isMonoBehaviour) continue;
	            let dstComponent = this.addComponent(srcComponent.constructor);
	            dstComponent._copy(srcComponent);
	        }
	    },
	    addComponent: function ( componentType ) {

	        //if(Component.prototype.isPrototypeOf(type))
	        //{
	        var inst = new componentType(this);
	        if(inst != null)
	        {
	            //special process of script
	            if(inst.isMonoBehaviour)
	            {
	                inst.__typeRef = componentType;
	                if(this._scriptManager == null)
	                {
	                    this._scriptManager = new GameObjectScriptHandler(this);
	                }

	                this._scriptManager.InsertScriptInstance(inst, -1);
	            }
	            else if(inst.isTransform)
	            {
	                this.transform = inst;
	            }

	            this._compoents.push(inst);
	            this.dispatchEvent({type:Event$1.ADDCOMPONENT, componentType:componentType, componentInstance:inst});
	            return inst;
	        }
	        return null;
	        //}
	        //else {
	        //    return null;
	        //}
	    },

	    _removeCompoent:function(com){
	        if(com.isComponent)
	        {
	            var index = this._compoents.indexOf(com);
	            if(index > -1)
	            {
	                this._compoents.splice(index, 1);
	                this.dispatchEvent({type:Event$1.REMOVECOMPONENT, componentInstance:com});
	                com.dispatchEvent({type:Event$1.DESTROY});
	            }
	        }
	        return null;
	    },

	    _removeAllComponents:function()
	    {
	        var comInst = null;
	        while((comInst = this._compoents.pop()) != null)
	        {
	            this.dispatchEvent({type:Event$1.REMOVECOMPONENT, componentInstance:comInst});
	            comInst.dispatchEvent({type:Event$1.DESTROY});
	        }
	    },

	    getComponent: function ( type ) {

	        //if(Component.prototype.isPrototypeOf(type))
	        //{
	        let checkName = "is"+type.classType;
	        for(let index = 0; index < this._compoents.length; ++index)
	        {
	            let inst = this._compoents[index];
	            if(inst[checkName]) return inst;
	        }
	        return null;
	        //}
	        //else {
	        //	return null;
	        //}
	    },

	    getComponents: function ( type ) {
	        let result = [];
	        //if(Component.prototype.isPrototypeOf(type))
	        {
	            let checkName = "is"+type.classType;
	            for(let index = 0; index < this._compoents.length; ++index)
	            {
	                let inst = this._compoents[index];
	                if(inst[checkName])
	                {
	                    result.push(inst);
	                }
	            }
	        }
	        return result;
	    },

	    SetActive : function (value){
	        let realValue = !!value;
	        if(this._selfActive != realValue)
	        {
	            let oldActiveInHierarchy = this.activeInHierarchy;
	            this._selfActive = realValue;

	            //if global active state changed
	            //notify others
	            let nowActiveInHierarchy = this.activeInHierarchy;
	            this._imp.visible = nowActiveInHierarchy;
	            if(oldActiveInHierarchy != nowActiveInHierarchy)
	            {
	                this._handleStateChange(nowActiveInHierarchy);
	            }
	        }
	    },

	    _handleStateChange : function(active){
	        this.dispatchEvent({type:active?Event$1.ACTIVATE:Event$1.DEACTIVATE});

	        //notify child
	        let childNum = this.transform.childCount;
	        for(let index = 0; index < childNum; ++index)
	        {
	            let child = this.transform.GetChild(index);
	            child.gameObject._onParentActiveChange(active);
	        }
	    },

	    _onParentActiveChange : function(active){
	        if(this._selfActive)
	        {
	            this._handleStateChange(active);
	        }
	    },


	});

	Object.defineProperty(GameObject.prototype, "activeSelf",{
	    get:function () {
	        return this._selfActive;
	    },
	    set: function (value) {
	        this.SetActive(value);
	    }
	});

	Object.defineProperty(GameObject.prototype, "activeInHierarchy",{
	    get:function () {
	        let trans = this.transform;

	        if( trans == undefined ) return false;

	        do{
	            if(trans.gameObject.activeSelf === false)
	            {
	                return false
	            }
	            trans = trans.parent;
	        }while(trans !== null)

	        return true;
	    }
	});

	Object.defineProperty(GameObject.prototype, "layer",{
	    set:function(value){
	        if(value>=0 && value<=31)
	        {
	            if(this._layer == value)    return;
	            this._layer = value;
	            //notify components
	            this.dispatchEvent({type:Event$1.CHANGEGAMEOBJECTLAYER});
	        }
	    },
	    get:function () {
	        return this._layer;
	    }
	});

	GameObject.attributes.add('name', {
	    type: 'string',
	    title: 'Name',
	    default : "gameObject"
	});

	GameObject.attributes.add('activeSelf', {
	    type: 'boolean',
	    title: 'ActiveSelf',
	    default:true
	});

	GameObject.attributes.add('layer', {
	    type: 'number',
	    title: 'Layer',
	    default:0
	});

	//place this function here to avoid diamond link
	GameObject.CreatePrimitive = function(primitiveType )
	{
	    let primitiveGO = new GameObject();
	    let primitiveModel = primitiveGO.addComponent(MeshFilter);
	    //choose default mesh
	    if(primitiveType === PrimitiveType.Cube)
	    {
	        primitiveModel.mesh = Mesh._CreateBoxMesh();
	    }
	    else if(primitiveType === PrimitiveType.Sphere)
	    {
	        primitiveModel.mesh = Mesh._CreateSphereMesh();
	    }
	    else if(primitiveType === PrimitiveType.Cylinder)
	    {
	        primitiveModel.mesh = Mesh._CreateCylinderMesh();
	    }
		let primitiveMesh = primitiveGO.addComponent(MeshRenderer);
	    return primitiveGO;
	};

	GameObject.CreateEdges = function(primitiveType, data)
	{
	    let primitiveGO = new GameObject();
	    let primitiveModel = primitiveGO.addComponent(MeshFilter);
	    //choose default mesh
	    if(primitiveType === PrimitiveType.Cube)
	    {
	        primitiveModel.mesh = Mesh._CreateBoxEdge();
	    }
	    else if(primitiveType === PrimitiveType.Sphere)
	    {
	        primitiveModel.mesh = Mesh._CreateSphereEdge();
	    }
	    else if(primitiveType === PrimitiveType.Cylinder)
	    {
	        primitiveModel.mesh = Mesh._CreateCylinderEdge();
	    }
	    let primitiveMesh = primitiveGO.addComponent(MeshRenderer);
	    return primitiveGO;
	};

	GameObject.Find= function(name) {
	    let rootObj = SceneManager.GetActiveScene()._rootGO;

	    if(name.substr(0,1) == '/')
	    {
	        // console.log("按绝对路径查找");
	        let splitNames = name.split('/');
	        let currentParent = rootObj.transform;
	        for(let i=0 ; i< splitNames.length ; ++i) {
	            let splitName = splitNames[i];
	            if(i == 0 && splitName.length == 0) continue;
	            let currentObj = findGameobject(splitName, currentParent);
	            if(currentObj)
	            {
	                if(i == splitNames.length -1)
	                    return currentObj;
	                else
	                    currentParent = currentObj;
	            }
	            else
	            {
	                return null;
	            }
	        }
	        return null;
	    }
	    //console.log("按相对路径查找");
	    //console.log("按相对路径查找");
	    else
	    {
	        // console.log("按名字全局查找")
	        let trans = findAllGameobject(name, rootObj.transform);
	        if(trans)
	            return trans.gameObject;
	        return null;
	    }


	    function findGameobject(name ,transformParent)
	    {
	        if( transformParent.childCount > 0 ){
	            for(let i=0 ; i< transformParent.childCount ; ++i){
	                let child = transformParent._children[i];
	                if(child.gameObject.name === name)
	                    return child;
	            }
	        }
	    }

	    function findAllGameobject( name , transform){
	        if(name === transform.gameObject.name){
	            return transform;
	        }
	        if( transform.childCount > 0 ){
	            for(let i=0 ; i< transform.childCount ; ++i){
	                let trans = findAllGameobject( name , transform._children[i] );
	                if(trans){
	                    return trans;
	                }
	            }
	        }
	    }
	};

	function Bone() {
	    BaseObject.call(this);
	    this.instClassType = Bone.classType;
	    this._compoents=[];
		this.name='Bone';
	    this._imp = new THREE.Bone;

	    this._selfActive = true;
		// if(manual === undefined || !manual)
	    // {
	    //     this.transform = this.addComponent(Transform);
	    // }
	    this.transform = this.addComponent(Transform);
	    this._scriptManager = null;
	    this._layer = 0;
	}

	ExtendType(Bone, GameObject, {


	});

	function _W3DGLTFLoader( manager ) {
	    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;
	    this.dracoLoader = null;
	}

	_W3DGLTFLoader.prototype = {

	    constructor: _W3DGLTFLoader,

	    crossOrigin: 'anonymous',

	    load: function ( url, onLoad, onProgress, onError ) {

	        var scope = this;

	        var resourcePath;

	        if ( this.resourcePath !== undefined ) {

	            resourcePath = this.resourcePath;

	        } else if ( this.path !== undefined ) {

	            resourcePath = this.path;

	        } else {

	            resourcePath = THREE.LoaderUtils.extractUrlBase( url );

	        }

	        // Tells the LoadingManager to track an extra item, which resolves after
	        // the model is fully loaded. This means the count of items loaded will
	        // be incorrect, but ensures manager.onLoad() does not fire early.
	        scope.manager.itemStart( url );

	        var _onError = function ( e ) {

	            if ( onError ) {

	                onError( e );

	            } else {

	                console.error( e );

	            }

	            scope.manager.itemError( url );
	            scope.manager.itemEnd( url );

	        };

	        var loader = new THREE.FileLoader( scope.manager );

	        loader.setPath( this.path );
	        loader.setResponseType( 'arraybuffer' );

	        if ( scope.crossOrigin === 'use-credentials' ) {

	            loader.setWithCredentials( true );

	        }

	        loader.load( url, function ( data ) {

	            try {

	                scope.parse( data, resourcePath, function ( gltf ) {

	                    onLoad( gltf );

	                    scope.manager.itemEnd( url );

	                }, _onError );

	            } catch ( e ) {

	                _onError( e );

	            }

	        }, onProgress, _onError );

	    },

	    setCrossOrigin: function ( value ) {

	        this.crossOrigin = value;
	        return this;

	    },

	    setPath: function ( value ) {

	        this.path = value;
	        return this;

	    },

	    setResourcePath: function ( value ) {

	        this.resourcePath = value;
	        return this;

	    },

	    setDRACOLoader: function ( dracoLoader ) {

	        this.dracoLoader = dracoLoader;
	        return this;

	    },

	    parse: function ( data, path, onLoad, onError ) {

	        var content;
	        var extensions = {};

	        if ( typeof data === 'string' ) {

	            content = data;

	        } else {

	            var magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

	            if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

	                try {

	                    extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

	                } catch ( error ) {

	                    if ( onError ) onError( error );
	                    return;

	                }

	                content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

	            } else {

	                content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

	            }

	        }

	        var json = JSON.parse( content );

	        if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

	            if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead.' ) );
	            return;

	        }

	        if ( json.extensionsUsed ) {

	            for ( var i = 0; i < json.extensionsUsed.length; ++ i ) {

	                var extensionName = json.extensionsUsed[ i ];
	                var extensionsRequired = json.extensionsRequired || [];

	                switch ( extensionName ) {

	                    case EXTENSIONS.KHR_LIGHTS_PUNCTUAL:
	                        extensions[ extensionName ] = new GLTFLightsExtension( json );
	                        break;

	                    case EXTENSIONS.KHR_MATERIALS_UNLIT:
	                        extensions[ extensionName ] = new GLTFMaterialsUnlitExtension( json );
	                        break;

	                    case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
	                        extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension( json );
	                        break;

	                    case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
	                        extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
	                        break;

	                    case EXTENSIONS.MSFT_TEXTURE_DDS:
	                        extensions[ EXTENSIONS.MSFT_TEXTURE_DDS ] = new GLTFTextureDDSExtension();
	                        break;

	                    case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
	                        extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] = new GLTFTextureTransformExtension( json );
	                        break;

	                    default:

	                        if ( extensionsRequired.indexOf( extensionName ) >= 0 ) {

	                            console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

	                        }

	                }

	            }

	        }

	        var parser = new GLTFParser( json, extensions, {

	            path: path || this.resourcePath || '',
	            crossOrigin: this.crossOrigin,
	            manager: this.manager

	        } );

	        parser.parse( onLoad, onError );

	    }

	};

	/* GLTFREGISTRY */

	function GLTFRegistry() {

	    var objects = {};

	    return	{

	        get: function ( key ) {

	            return objects[ key ];

	        },

	        add: function ( key, object ) {

	            objects[ key ] = object;

	        },

	        remove: function ( key ) {

	            delete objects[ key ];

	        },

	        removeAll: function () {

	            objects = {};

	        }

	    };

	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	var EXTENSIONS = {
	    KHR_BINARY_GLTF: 'KHR_binary_glTF',
	    KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
	    KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
	    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
	    KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
	    KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
	    MSFT_TEXTURE_DDS: 'MSFT_texture_dds'
	};

	/**
	 * DDS Texture Extension
	 *
	 * Specification:
	 * https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_texture_dds
	 *
	 */
	function GLTFTextureDDSExtension() {

	    if ( ! THREE.DDSLoader ) {

	        throw new Error( 'THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader' );

	    }

	    this.name = EXTENSIONS.MSFT_TEXTURE_DDS;
	    this.ddsLoader = new THREE.DDSLoader();

	}

	/**
	 * Lights Extension
	 *
	 * Specification: PENDING
	 */
	function GLTFLightsExtension( json ) {

	    this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

	    var extension = ( json.extensions && json.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ] ) || {};
	    this.lightDefs = extension.lights || [];

	}

	GLTFLightsExtension.prototype.loadLight = function ( lightIndex ) {

	    var lightDef = this.lightDefs[ lightIndex ];
	    var lightNode;

	    var color = new THREE.Color( 0xffffff );
	    if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

	    var range = lightDef.range !== undefined ? lightDef.range : 0;

	    switch ( lightDef.type ) {

	        case 'directional':
	            lightNode = new THREE.DirectionalLight( color );
	            lightNode.target.position.set( 0, 0, - 1 );
	            lightNode.add( lightNode.target );
	            break;

	        case 'point':
	            lightNode = new THREE.PointLight( color );
	            lightNode.distance = range;
	            break;

	        case 'spot':
	            lightNode = new THREE.SpotLight( color );
	            lightNode.distance = range;
	            // Handle spotlight properties.
	            lightDef.spot = lightDef.spot || {};
	            lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
	            lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
	            lightNode.angle = lightDef.spot.outerConeAngle;
	            lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
	            lightNode.target.position.set( 0, 0, - 1 );
	            lightNode.add( lightNode.target );
	            break;

	        default:
	            throw new Error( 'THREE.GLTFLoader: Unexpected light type, "' + lightDef.type + '".' );

	    }

	    // Some lights (e.g. spot) default to a position other than the origin. Reset the position
	    // here, because node-level parsing will only override position if explicitly specified.
	    lightNode.position.set( 0, 0, 0 );

	    lightNode.decay = 2;

	    if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

	    lightNode.name = lightDef.name || ( 'light_' + lightIndex );

	    return Promise.resolve( lightNode );

	};

	/**
	 * Unlit Materials Extension (pending)
	 *
	 * PR: https://github.com/KhronosGroup/glTF/pull/1163
	 */
	function GLTFMaterialsUnlitExtension() {

	    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

	}

	GLTFMaterialsUnlitExtension.prototype.getMaterialType = function () {

	    return THREE.MeshBasicMaterial;

	};

	GLTFMaterialsUnlitExtension.prototype.extendParams = function ( materialParams, materialDef, parser ) {

	    var pending = [];

	    materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
	    materialParams.opacity = 1.0;

	    var metallicRoughness = materialDef.pbrMetallicRoughness;

	    if ( metallicRoughness ) {

	        if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

	            var array = metallicRoughness.baseColorFactor;

	            materialParams.color.fromArray( array );
	            materialParams.opacity = array[ 3 ];

	        }

	        if ( metallicRoughness.baseColorTexture !== undefined ) {

	            pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

	        }

	    }

	    return Promise.all( pending );

	};
	var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
	var BINARY_EXTENSION_HEADER_LENGTH = 12;
	var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	function GLTFBinaryExtension( data ) {

	    this.name = EXTENSIONS.KHR_BINARY_GLTF;
	    this.content = null;
	    this.body = null;

	    var headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

	    this.header = {
	        magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
	        version: headerView.getUint32( 4, true ),
	        length: headerView.getUint32( 8, true )
	    };

	    if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

	        throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

	    } else if ( this.header.version < 2.0 ) {

	        throw new Error( 'THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.' );

	    }

	    var chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
	    var chunkIndex = 0;

	    while ( chunkIndex < chunkView.byteLength ) {

	        var chunkLength = chunkView.getUint32( chunkIndex, true );
	        chunkIndex += 4;

	        var chunkType = chunkView.getUint32( chunkIndex, true );
	        chunkIndex += 4;

	        if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

	            var contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
	            this.content = THREE.LoaderUtils.decodeText( contentArray );

	        } else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

	            var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
	            this.body = data.slice( byteOffset, byteOffset + chunkLength );

	        }

	        // Clients must ignore chunks with unknown types.

	        chunkIndex += chunkLength;

	    }

	    if ( this.content === null ) {

	        throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

	    }

	}

	/**
	 * DRACO Mesh Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/pull/874
	 */
	function GLTFDracoMeshCompressionExtension( json, dracoLoader ) {

	    if ( ! dracoLoader ) {

	        throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

	    }

	    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
	    this.json = json;
	    this.dracoLoader = dracoLoader;

	}

	GLTFDracoMeshCompressionExtension.prototype.decodePrimitive = function ( primitive, parser ) {

	    var json = this.json;
	    var dracoLoader = this.dracoLoader;
	    var bufferViewIndex = primitive.extensions[ this.name ].bufferView;
	    var gltfAttributeMap = primitive.extensions[ this.name ].attributes;
	    var threeAttributeMap = {};
	    var attributeNormalizedMap = {};
	    var attributeTypeMap = {};

	    for ( var attributeName in gltfAttributeMap ) {

	        var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

	        threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

	    }

	    for ( attributeName in primitive.attributes ) {

	        var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

	        if ( gltfAttributeMap[ attributeName ] !== undefined ) {

	            var accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
	            var componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

	            attributeTypeMap[ threeAttributeName ] = componentType;
	            attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

	        }

	    }

	    return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

	        return new Promise( function ( resolve ) {

	            dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

	                for ( var attributeName in geometry.attributes ) {

	                    var attribute = geometry.attributes[ attributeName ];
	                    var normalized = attributeNormalizedMap[ attributeName ];

	                    if ( normalized !== undefined ) attribute.normalized = normalized;

	                }

	                resolve( geometry );

	            }, threeAttributeMap, attributeTypeMap );

	        } );

	    } );

	};

	/**
	 * Texture Transform Extension
	 *
	 * Specification:
	 */
	function GLTFTextureTransformExtension() {

	    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

	}

	GLTFTextureTransformExtension.prototype.extendTexture = function ( texture, transform ) {

	    texture = texture.clone();

	    if ( transform.offset !== undefined ) {

	        texture.offset.fromArray( transform.offset );

	    }

	    if ( transform.rotation !== undefined ) {

	        texture.rotation = transform.rotation;

	    }

	    if ( transform.scale !== undefined ) {

	        texture.repeat.fromArray( transform.scale );

	    }

	    if ( transform.texCoord !== undefined ) {

	        console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

	    }

	    texture.needsUpdate = true;

	    return texture;

	};

	/**
	 * Specular-Glossiness Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
	 */
	function GLTFMaterialsPbrSpecularGlossinessExtension() {

	    return {

	        name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

	        specularGlossinessParams: [
	            'color',
	            'map',
	            'lightMap',
	            'lightMapIntensity',
	            'aoMap',
	            'aoMapIntensity',
	            'emissive',
	            'emissiveIntensity',
	            'emissiveMap',
	            'bumpMap',
	            'bumpScale',
	            'normalMap',
	            'displacementMap',
	            'displacementScale',
	            'displacementBias',
	            'specularMap',
	            'specular',
	            'glossinessMap',
	            'glossiness',
	            'alphaMap',
	            'envMap',
	            'envMapIntensity',
	            'refractionRatio',
	        ],

	        getMaterialType: function () {

	            return THREE.ShaderMaterial;

	        },

	        extendParams: function ( materialParams, materialDef, parser ) {

	            var pbrSpecularGlossiness = materialDef.extensions[ this.name ];

	            var shader = THREE.ShaderLib[ 'standard' ];

	            var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	            var specularMapParsFragmentChunk = [
	                '#ifdef USE_SPECULARMAP',
	                '	uniform sampler2D specularMap;',
	                '#endif'
	            ].join( '\n' );

	            var glossinessMapParsFragmentChunk = [
	                '#ifdef USE_GLOSSINESSMAP',
	                '	uniform sampler2D glossinessMap;',
	                '#endif'
	            ].join( '\n' );

	            var specularMapFragmentChunk = [
	                'vec3 specularFactor = specular;',
	                '#ifdef USE_SPECULARMAP',
	                '	vec4 texelSpecular = texture2D( specularMap, vUv );',
	                '	texelSpecular = sRGBToLinear( texelSpecular );',
	                '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
	                '	specularFactor *= texelSpecular.rgb;',
	                '#endif'
	            ].join( '\n' );

	            var glossinessMapFragmentChunk = [
	                'float glossinessFactor = glossiness;',
	                '#ifdef USE_GLOSSINESSMAP',
	                '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
	                '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
	                '	glossinessFactor *= texelGlossiness.a;',
	                '#endif'
	            ].join( '\n' );

	            var lightPhysicalFragmentChunk = [
	                'PhysicalMaterial material;',
	                'material.diffuseColor = diffuseColor.rgb;',
	                'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );',
	                'material.specularColor = specularFactor.rgb;',
	            ].join( '\n' );

	            var fragmentShader = shader.fragmentShader
	                .replace( 'uniform float roughness;', 'uniform vec3 specular;' )
	                .replace( 'uniform float metalness;', 'uniform float glossiness;' )
	                .replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
	                .replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
	                .replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
	                .replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
	                .replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

	            delete uniforms.roughness;
	            delete uniforms.metalness;
	            delete uniforms.roughnessMap;
	            delete uniforms.metalnessMap;

	            uniforms.specular = { value: new THREE.Color().setHex( 0x111111 ) };
	            uniforms.glossiness = { value: 0.5 };
	            uniforms.specularMap = { value: null };
	            uniforms.glossinessMap = { value: null };

	            materialParams.vertexShader = shader.vertexShader;
	            materialParams.fragmentShader = fragmentShader;
	            materialParams.uniforms = uniforms;
	            materialParams.defines = { 'STANDARD': '' };

	            materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
	            materialParams.opacity = 1.0;

	            var pending = [];

	            if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

	                var array = pbrSpecularGlossiness.diffuseFactor;

	                materialParams.color.fromArray( array );
	                materialParams.opacity = array[ 3 ];

	            }

	            if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

	                pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

	            }

	            materialParams.emissive = new THREE.Color( 0.0, 0.0, 0.0 );
	            materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
	            materialParams.specular = new THREE.Color( 1.0, 1.0, 1.0 );

	            if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

	                materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

	            }

	            if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

	                var specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
	                pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
	                pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

	            }

	            return Promise.all( pending );

	        },

	        createMaterial: function ( params ) {

	            // setup material properties based on MeshStandardMaterial for Specular-Glossiness

	            var material = new THREE.ShaderMaterial( {
	                defines: params.defines,
	                vertexShader: params.vertexShader,
	                fragmentShader: params.fragmentShader,
	                uniforms: params.uniforms,
	                fog: true,
	                lights: true,
	                opacity: params.opacity,
	                transparent: params.transparent
	            } );

	            material.isGLTFSpecularGlossinessMaterial = true;

	            material.color = params.color;

	            material.map = params.map === undefined ? null : params.map;

	            material.lightMap = null;
	            material.lightMapIntensity = 1.0;

	            material.aoMap = params.aoMap === undefined ? null : params.aoMap;
	            material.aoMapIntensity = 1.0;

	            material.emissive = params.emissive;
	            material.emissiveIntensity = 1.0;
	            material.emissiveMap = params.emissiveMap === undefined ? null : params.emissiveMap;

	            material.bumpMap = params.bumpMap === undefined ? null : params.bumpMap;
	            material.bumpScale = 1;

	            material.normalMap = params.normalMap === undefined ? null : params.normalMap;

	            if ( params.normalScale ) material.normalScale = params.normalScale;

	            material.displacementMap = null;
	            material.displacementScale = 1;
	            material.displacementBias = 0;

	            material.specularMap = params.specularMap === undefined ? null : params.specularMap;
	            material.specular = params.specular;

	            material.glossinessMap = params.glossinessMap === undefined ? null : params.glossinessMap;
	            material.glossiness = params.glossiness;

	            material.alphaMap = null;

	            material.envMap = params.envMap === undefined ? null : params.envMap;
	            material.envMapIntensity = 1.0;

	            material.refractionRatio = 0.98;

	            material.extensions.derivatives = true;

	            return material;

	        },

	        /**
	         * Clones a GLTFSpecularGlossinessMaterial instance. The ShaderMaterial.copy() method can
	         * copy only properties it knows about or inherits, and misses many properties that would
	         * normally be defined by MeshStandardMaterial.
	         *
	         * This method allows GLTFSpecularGlossinessMaterials to be cloned in the process of
	         * loading a glTF model, but cloning later (e.g. by the user) would require these changes
	         * AND also updating `.onBeforeRender` on the parent mesh.
	         *
	         * @param  {THREE.ShaderMaterial} source
	         * @return {THREE.ShaderMaterial}
	         */
	        cloneMaterial: function ( source ) {

	            var target = source.clone();

	            target.isGLTFSpecularGlossinessMaterial = true;

	            var params = this.specularGlossinessParams;

	            for ( var i = 0, il = params.length; i < il; i ++ ) {

	                var value = source[ params[ i ] ];
	                target[ params[ i ] ] = ( value && value.isColor ) ? value.clone() : value;

	            }

	            return target;

	        },

	        // Here's based on refreshUniformsCommon() and refreshUniformsStandard() in WebGLRenderer.
	        refreshUniforms: function ( renderer, scene, camera, geometry, material, group ) {

	            if ( material.isGLTFSpecularGlossinessMaterial !== true ) {

	                return;

	            }

	            var uniforms = material.uniforms;
	            var defines = material.defines;

	            uniforms.opacity.value = material.opacity;

	            uniforms.diffuse.value.copy( material.color );
	            uniforms.emissive.value.copy( material.emissive ).multiplyScalar( material.emissiveIntensity );

	            uniforms.map.value = material.map;
	            uniforms.specularMap.value = material.specularMap;
	            uniforms.alphaMap.value = material.alphaMap;

	            uniforms.lightMap.value = material.lightMap;
	            uniforms.lightMapIntensity.value = material.lightMapIntensity;

	            uniforms.aoMap.value = material.aoMap;
	            uniforms.aoMapIntensity.value = material.aoMapIntensity;

	            // uv repeat and offset setting priorities
	            // 1. color map
	            // 2. specular map
	            // 3. normal map
	            // 4. bump map
	            // 5. alpha map
	            // 6. emissive map

	            var uvScaleMap;

	            if ( material.map ) {

	                uvScaleMap = material.map;

	            } else if ( material.specularMap ) {

	                uvScaleMap = material.specularMap;

	            } else if ( material.displacementMap ) {

	                uvScaleMap = material.displacementMap;

	            } else if ( material.normalMap ) {

	                uvScaleMap = material.normalMap;

	            } else if ( material.bumpMap ) {

	                uvScaleMap = material.bumpMap;

	            } else if ( material.glossinessMap ) {

	                uvScaleMap = material.glossinessMap;

	            } else if ( material.alphaMap ) {

	                uvScaleMap = material.alphaMap;

	            } else if ( material.emissiveMap ) {

	                uvScaleMap = material.emissiveMap;

	            }

	            if ( uvScaleMap !== undefined ) {

	                // backwards compatibility
	                if ( uvScaleMap.isWebGLRenderTarget ) {

	                    uvScaleMap = uvScaleMap.texture;

	                }

	                if ( uvScaleMap.matrixAutoUpdate === true ) {

	                    uvScaleMap.updateMatrix();

	                }

	                uniforms.uvTransform.value.copy( uvScaleMap.matrix );

	            }

	            if ( material.envMap ) {

	                uniforms.envMap.value = material.envMap;
	                uniforms.envMapIntensity.value = material.envMapIntensity;

	                // don't flip CubeTexture envMaps, flip everything else:
	                //  WebGLRenderTargetCube will be flipped for backwards compatibility
	                //  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
	                // this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
	                uniforms.flipEnvMap.value = material.envMap.isCubeTexture ? - 1 : 1;

	                uniforms.reflectivity.value = material.reflectivity;
	                uniforms.refractionRatio.value = material.refractionRatio;

	                uniforms.maxMipLevel.value = renderer.properties.get( material.envMap ).__maxMipLevel;

	            }

	            uniforms.specular.value.copy( material.specular );
	            uniforms.glossiness.value = material.glossiness;

	            uniforms.glossinessMap.value = material.glossinessMap;

	            uniforms.emissiveMap.value = material.emissiveMap;
	            uniforms.bumpMap.value = material.bumpMap;
	            uniforms.normalMap.value = material.normalMap;

	            uniforms.displacementMap.value = material.displacementMap;
	            uniforms.displacementScale.value = material.displacementScale;
	            uniforms.displacementBias.value = material.displacementBias;

	            if ( uniforms.glossinessMap.value !== null && defines.USE_GLOSSINESSMAP === undefined ) {

	                defines.USE_GLOSSINESSMAP = '';
	                // set USE_ROUGHNESSMAP to enable vUv
	                defines.USE_ROUGHNESSMAP = '';

	            }

	            if ( uniforms.glossinessMap.value === null && defines.USE_GLOSSINESSMAP !== undefined ) {

	                delete defines.USE_GLOSSINESSMAP;
	                delete defines.USE_ROUGHNESSMAP;

	            }

	        }

	    };

	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	function GLTFCubicSplineInterpolant( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

	    THREE.Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	GLTFCubicSplineInterpolant.prototype = Object.create( THREE.Interpolant.prototype );
	GLTFCubicSplineInterpolant.prototype.constructor = GLTFCubicSplineInterpolant;

	GLTFCubicSplineInterpolant.prototype.copySampleValue_ = function ( index ) {

	    // Copies a sample value to the result buffer. See description of glTF
	    // CUBICSPLINE values layout in interpolate_() function below.

	    var result = this.resultBuffer,
	        values = this.sampleValues,
	        valueSize = this.valueSize,
	        offset = index * valueSize * 3 + valueSize;

	    for ( var i = 0; i !== valueSize; i ++ ) {

	        result[ i ] = values[ offset + i ];

	    }

	    return result;

	};

	GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

	    var result = this.resultBuffer;
	    var values = this.sampleValues;
	    var stride = this.valueSize;

	    var stride2 = stride * 2;
	    var stride3 = stride * 3;

	    var td = t1 - t0;

	    var p = ( t - t0 ) / td;
	    var pp = p * p;
	    var ppp = pp * p;

	    var offset1 = i1 * stride3;
	    var offset0 = offset1 - stride3;

	    var s2 = - 2 * ppp + 3 * pp;
	    var s3 = ppp - pp;
	    var s0 = 1 - s2;
	    var s1 = s3 - pp + p;

	    // Layout of keyframe output values for CUBICSPLINE animations:
	    //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
	    for ( var i = 0; i !== stride; i ++ ) {

	        var p0 = values[ offset0 + i + stride ]; // splineVertex_k
	        var m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
	        var p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
	        var m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

	        result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

	    }

	    return result;

	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
	    FLOAT: 5126,
	    //FLOAT_MAT2: 35674,
	    FLOAT_MAT3: 35675,
	    FLOAT_MAT4: 35676,
	    FLOAT_VEC2: 35664,
	    FLOAT_VEC3: 35665,
	    FLOAT_VEC4: 35666,
	    LINEAR: 9729,
	    REPEAT: 10497,
	    SAMPLER_2D: 35678,
	    POINTS: 0,
	    LINES: 1,
	    LINE_LOOP: 2,
	    LINE_STRIP: 3,
	    TRIANGLES: 4,
	    TRIANGLE_STRIP: 5,
	    TRIANGLE_FAN: 6,
	    UNSIGNED_BYTE: 5121,
	    UNSIGNED_SHORT: 5123
	};

	var WEBGL_TYPE = {
	    5126: Number,
	    //35674: THREE.Matrix2,
	    35675: THREE.Matrix3,
	    35676: THREE.Matrix4,
	    35664: THREE.Vector2,
	    35665: THREE.Vector3,
	    35666: THREE.Vector4,
	    35678: THREE.Texture
	};

	var WEBGL_COMPONENT_TYPES = {
	    5120: Int8Array,
	    5121: Uint8Array,
	    5122: Int16Array,
	    5123: Uint16Array,
	    5125: Uint32Array,
	    5126: Float32Array
	};

	var WEBGL_FILTERS = {
	    9728: THREE.NearestFilter,
	    9729: THREE.LinearFilter,
	    9984: THREE.NearestMipMapNearestFilter,
	    9985: THREE.LinearMipMapNearestFilter,
	    9986: THREE.NearestMipMapLinearFilter,
	    9987: THREE.LinearMipMapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
	    33071: THREE.ClampToEdgeWrapping,
	    33648: THREE.MirroredRepeatWrapping,
	    10497: THREE.RepeatWrapping
	};

	var WEBGL_SIDES = {
	    1028: THREE.BackSide, // Culling front
	    1029: THREE.FrontSide // Culling back
	    //1032: THREE.NoSide   // Culling front and back, what to do?
	};

	var WEBGL_DEPTH_FUNCS = {
	    512: THREE.NeverDepth,
	    513: THREE.LessDepth,
	    514: THREE.EqualDepth,
	    515: THREE.LessEqualDepth,
	    516: THREE.GreaterEqualDepth,
	    517: THREE.NotEqualDepth,
	    518: THREE.GreaterEqualDepth,
	    519: THREE.AlwaysDepth
	};

	var WEBGL_BLEND_EQUATIONS = {
	    32774: THREE.AddEquation,
	    32778: THREE.SubtractEquation,
	    32779: THREE.ReverseSubtractEquation
	};

	var WEBGL_BLEND_FUNCS = {
	    0: THREE.ZeroFactor,
	    1: THREE.OneFactor,
	    768: THREE.SrcColorFactor,
	    769: THREE.OneMinusSrcColorFactor,
	    770: THREE.SrcAlphaFactor,
	    771: THREE.OneMinusSrcAlphaFactor,
	    772: THREE.DstAlphaFactor,
	    773: THREE.OneMinusDstAlphaFactor,
	    774: THREE.DstColorFactor,
	    775: THREE.OneMinusDstColorFactor,
	    776: THREE.SrcAlphaSaturateFactor
	    // The followings are not supported by Three.js yet
	    //32769: CONSTANT_COLOR,
	    //32770: ONE_MINUS_CONSTANT_COLOR,
	    //32771: CONSTANT_ALPHA,
	    //32772: ONE_MINUS_CONSTANT_COLOR
	};

	var WEBGL_TYPE_SIZES = {
	    'SCALAR': 1,
	    'VEC2': 2,
	    'VEC3': 3,
	    'VEC4': 4,
	    'MAT2': 4,
	    'MAT3': 9,
	    'MAT4': 16
	};

	var ATTRIBUTES = {
	    POSITION: 'position',
	    NORMAL: 'normal',
	    TANGENT: 'tangent',
	    TEXCOORD_0: 'uv',
	    TEXCOORD_1: 'uv2',
	    COLOR_0: 'color',
	    WEIGHTS_0: 'skinWeight',
	    JOINTS_0: 'skinIndex',
	};

	var PATH_PROPERTIES = {
	    scale: 'scale',
	    translation: 'position',
	    rotation: 'quaternion',
	    weights: 'morphTargetInfluences'
	};

	var INTERPOLATION = {
	    CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
	                            // keyframe track will be initialized with a default interpolation type, then modified.
	    LINEAR: THREE.InterpolateLinear,
	    STEP: THREE.InterpolateDiscrete
	};

	var ALPHA_MODES = {
	    OPAQUE: 'OPAQUE',
	    MASK: 'MASK',
	    BLEND: 'BLEND'
	};

	var MIME_TYPE_FORMATS = {
	    'image/png': THREE.RGBAFormat,
	    'image/jpeg': THREE.RGBFormat
	};

	/* UTILITY FUNCTIONS */

	function resolveURL( url, path ) {

	    // Invalid URL
	    if ( typeof url !== 'string' || url === '' ) return '';

	    // Absolute URL http://,https://,//
	    if ( /^(https?:)?\/\//i.test( url ) ) return url;

	    // Data URI
	    if ( /^data:.*,.*$/i.test( url ) ) return url;

	    // Blob URL
	    if ( /^blob:.*$/i.test( url ) ) return url;

	    // Relative URL
	    return path + url;

	}

	var defaultMaterial;

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
	 */
	function createDefaultMaterial() {

	    defaultMaterial = defaultMaterial || new THREE.MeshStandardMaterial( {
	        color: 0xFFFFFF,
	        emissive: 0x000000,
	        metalness: 1,
	        roughness: 1,
	        transparent: false,
	        depthTest: true,
	        side: THREE.FrontSide
	    } );

	    return defaultMaterial;

	}

	function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

	    // Add unknown glTF extensions to an object's userData.

	    for ( var name in objectDef.extensions ) {

	        if ( knownExtensions[ name ] === undefined ) {

	            object.userData.gltfExtensions = object.userData.gltfExtensions || {};
	            object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

	        }

	    }

	}

	/**
	 * @param {THREE.Object3D|THREE.Material|THREE.BufferGeometry} object
	 * @param {GLTF.definition} gltfDef
	 */
	function assignExtrasToUserData( object, gltfDef ) {

	    if ( gltfDef.extras !== undefined ) {

	        if ( typeof gltfDef.extras === 'object' ) {

	            Object.assign( object.userData, gltfDef.extras );

	        } else {

	            console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

	        }

	    }

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
	 *
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Array<GLTF.Target>} targets
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addMorphTargets( geometry, targets, parser ) {

	    var hasMorphPosition = false;
	    var hasMorphNormal = false;

	    for ( var i = 0, il = targets.length; i < il; i ++ ) {

	        var target = targets[ i ];

	        if ( target.POSITION !== undefined ) hasMorphPosition = true;
	        if ( target.NORMAL !== undefined ) hasMorphNormal = true;

	        if ( hasMorphPosition && hasMorphNormal ) break;

	    }

	    if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

	    var pendingPositionAccessors = [];
	    var pendingNormalAccessors = [];

	    for ( var i = 0, il = targets.length; i < il; i ++ ) {

	        var target = targets[ i ];

	        if ( hasMorphPosition ) {

	            var pendingAccessor = target.POSITION !== undefined
	                ? parser.getDependency( 'accessor', target.POSITION )
	                : geometry.attributes.position;

	            pendingPositionAccessors.push( pendingAccessor );

	        }

	        if ( hasMorphNormal ) {

	            var pendingAccessor = target.NORMAL !== undefined
	                ? parser.getDependency( 'accessor', target.NORMAL )
	                : geometry.attributes.normal;

	            pendingNormalAccessors.push( pendingAccessor );

	        }

	    }

	    return Promise.all( [
	        Promise.all( pendingPositionAccessors ),
	        Promise.all( pendingNormalAccessors )
	    ] ).then( function ( accessors ) {

	        var morphPositions = accessors[ 0 ];
	        var morphNormals = accessors[ 1 ];

	        // Clone morph target accessors before modifying them.

	        for ( var i = 0, il = morphPositions.length; i < il; i ++ ) {

	            if ( geometry.attributes.position === morphPositions[ i ] ) continue;

	            morphPositions[ i ] = cloneBufferAttribute( morphPositions[ i ] );

	        }

	        for ( var i = 0, il = morphNormals.length; i < il; i ++ ) {

	            if ( geometry.attributes.normal === morphNormals[ i ] ) continue;

	            morphNormals[ i ] = cloneBufferAttribute( morphNormals[ i ] );

	        }

	        for ( var i = 0, il = targets.length; i < il; i ++ ) {

	            var target = targets[ i ];
	            var attributeName = 'morphTarget' + i;

	            if ( hasMorphPosition ) {

	                // Three.js morph position is absolute value. The formula is
	                //   basePosition
	                //     + weight0 * ( morphPosition0 - basePosition )
	                //     + weight1 * ( morphPosition1 - basePosition )
	                //     ...
	                // while the glTF one is relative
	                //   basePosition
	                //     + weight0 * glTFmorphPosition0
	                //     + weight1 * glTFmorphPosition1
	                //     ...
	                // then we need to convert from relative to absolute here.

	                if ( target.POSITION !== undefined ) {

	                    var positionAttribute = morphPositions[ i ];
	                    positionAttribute.name = attributeName;

	                    var position = geometry.attributes.position;

	                    for ( var j = 0, jl = positionAttribute.count; j < jl; j ++ ) {

	                        positionAttribute.setXYZ(
	                            j,
	                            positionAttribute.getX( j ) + position.getX( j ),
	                            positionAttribute.getY( j ) + position.getY( j ),
	                            positionAttribute.getZ( j ) + position.getZ( j )
	                        );

	                    }

	                }

	            }

	            if ( hasMorphNormal ) {

	                // see target.POSITION's comment

	                if ( target.NORMAL !== undefined ) {

	                    var normalAttribute = morphNormals[ i ];
	                    normalAttribute.name = attributeName;

	                    var normal = geometry.attributes.normal;

	                    for ( var j = 0, jl = normalAttribute.count; j < jl; j ++ ) {

	                        normalAttribute.setXYZ(
	                            j,
	                            normalAttribute.getX( j ) + normal.getX( j ),
	                            normalAttribute.getY( j ) + normal.getY( j ),
	                            normalAttribute.getZ( j ) + normal.getZ( j )
	                        );

	                    }

	                }

	            }

	        }

	        if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
	        if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;

	        return geometry;

	    } );

	}

	/**
	 * @param {THREE.Mesh} mesh
	 * @param {GLTF.Mesh} meshDef
	 */
	function updateMorphTargets( mesh, meshDef ) {

	    mesh.updateMorphTargets();

	    if ( meshDef.weights !== undefined ) {

	        for ( var i = 0, il = meshDef.weights.length; i < il; i ++ ) {

	            mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

	        }

	    }

	    // .extras has user-defined data, so check that .extras.targetNames is an array.
	    if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

	        var targetNames = meshDef.extras.targetNames;

	        if ( mesh.morphTargetInfluences.length === targetNames.length ) {

	            mesh.morphTargetDictionary = {};

	            for ( var i = 0, il = targetNames.length; i < il; i ++ ) {

	                mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

	            }

	        } else {

	            console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

	        }

	    }

	}

	function createPrimitiveKey( primitiveDef ) {

	    var dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
	    var geometryKey;

	    if ( dracoExtension ) {

	        geometryKey = 'draco:' + dracoExtension.bufferView
	            + ':' + dracoExtension.indices
	            + ':' + createAttributesKey( dracoExtension.attributes );

	    } else {

	        geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

	    }

	    return geometryKey;

	}

	function createAttributesKey( attributes ) {

	    var attributesKey = '';

	    var keys = Object.keys( attributes ).sort();

	    for ( var i = 0, il = keys.length; i < il; i ++ ) {

	        attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

	    }

	    return attributesKey;

	}

	function cloneBufferAttribute( attribute ) {

	    if ( attribute.isInterleavedBufferAttribute ) {

	        var count = attribute.count;
	        var itemSize = attribute.itemSize;
	        var array = attribute.array.slice( 0, count * itemSize );

	        for ( var i = 0, j = 0; i < count; ++ i ) {

	            array[ j ++ ] = attribute.getX( i );
	            if ( itemSize >= 2 ) array[ j ++ ] = attribute.getY( i );
	            if ( itemSize >= 3 ) array[ j ++ ] = attribute.getZ( i );
	            if ( itemSize >= 4 ) array[ j ++ ] = attribute.getW( i );

	        }

	        return new THREE.BufferAttribute( array, itemSize, attribute.normalized );

	    }

	    return attribute.clone();

	}

	/* GLTF PARSER */

	function GLTFParser( json, extensions, options ) {

	    this.json = json || {};
	    this.extensions = extensions || {};
	    this.options = options || {};

	    // loader object cache
	    this.cache = new GLTFRegistry();

		this.lightMapTextures = {};
		this.lightMapTexturesType = {};

	    // BufferGeometry caching
	    this.primitiveCache = {};

	    this.textureLoader = new THREE.TextureLoader( this.options.manager );
	    this.textureLoader.setCrossOrigin( this.options.crossOrigin );

		this.exrLoader = new THREE.EXRLoader( this.options.manager);
		this.exrLoader.setDataType( THREE.FloatType );

		this.hdrLoader = new THREE.RGBELoader(this.options.manager);
		if (this.options.renderer)
		{
			this.hdrLoader.setDataType(this.options.renderer.capabilities.floatFragmentTextures ? THREE.FloatType : THREE.UnsignedByteType);
		}
		else
		{
			this.hdrLoader.setDataType(THREE.UnsignedByteType);
		}


		this.fileLoader = new THREE.FileLoader( this.options.manager );
	    this.fileLoader.setResponseType( 'arraybuffer' );

	    if ( this.options.crossOrigin === 'use-credentials' ) {

	        this.fileLoader.setWithCredentials( true );

	    }

	}

	GLTFParser.prototype.parse = function ( onLoad, onError ) {

	    var parser = this;
	    var json = this.json;
	    var extensions = this.extensions;

	    // Clear the loader cache
	    this.cache.removeAll();

	    // Mark the special nodes/meshes in json for efficient parse
	    this.markDefs();

	    Promise.all( [

	        this.getDependencies( 'scene' ),
	        this.getDependencies( 'animation' ),
	        this.getDependencies( 'camera' ),

	    ] ).then( function ( dependencies ) {

	        var result = {
	            scene: dependencies[ 0 ][ json.scene || 0 ],
	            scenes: dependencies[ 0 ],
	            animations: dependencies[ 1 ],
	            cameras: dependencies[ 2 ],
	            asset: json.asset,
	            parser: parser,
	            userData: {}
	        };

	        addUnknownExtensionsToUserData( extensions, result, json );

	        onLoad( result );

	    } ).catch( onError );

	};

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	GLTFParser.prototype.markDefs = function () {

	    var nodeDefs = this.json.nodes || [];
	    var skinDefs = this.json.skins || [];
	    var meshDefs = this.json.meshes || [];

	    var meshReferences = {};
	    var meshUses = {};

	    // Nothing in the node definition indicates whether it is a Bone or an
	    // Object3D. Use the skins' joint references to mark bones.
	    for ( var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

	        var joints = skinDefs[ skinIndex ].joints;

	        for ( var i = 0, il = joints.length; i < il; i ++ ) {

	            nodeDefs[ joints[ i ] ].isBone = true;

	        }

	    }

	    // Meshes can (and should) be reused by multiple nodes in a glTF asset. To
	    // avoid having more than one THREE.Mesh with the same name, count
	    // references and rename instances below.
	    //
	    // Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	    for ( var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

	        var nodeDef = nodeDefs[ nodeIndex ];

	        if ( nodeDef.mesh !== undefined ) {

	            if ( meshReferences[ nodeDef.mesh ] === undefined ) {

	                meshReferences[ nodeDef.mesh ] = meshUses[ nodeDef.mesh ] = 0;

	            }

	            meshReferences[ nodeDef.mesh ] ++;

	            // Nothing in the mesh definition indicates whether it is
	            // a SkinnedMesh or Mesh. Use the node's mesh reference
	            // to mark SkinnedMesh if node has skin.
	            if ( nodeDef.skin !== undefined ) {

	                meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

	            }

	        }

	    }

	    this.json.meshReferences = meshReferences;
	    this.json.meshUses = meshUses;

	};

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<THREE.Object3D|THREE.Material|THREE.Texture|THREE.AnimationClip|ArrayBuffer|Object>}
	 */
	GLTFParser.prototype.getDependency = function ( type, index ) {

	    var cacheKey = type + ':' + index;
	    var dependency = this.cache.get( cacheKey );

	    if ( ! dependency ) {

	        switch ( type ) {

	            case 'scene':
	                dependency = this.loadScene( index );
	                break;

	            case 'node':
	                dependency = this.loadNode( index );
	                break;

	            case 'mesh':
	                dependency = this.loadMesh( index );
	                break;

	            case 'accessor':
	                dependency = this.loadAccessor( index );
	                break;

	            case 'bufferView':
	                dependency = this.loadBufferView( index );
	                break;

	            case 'buffer':
	                dependency = this.loadBuffer( index );
	                break;

	            case 'material':
	                dependency = this.loadMaterial( index );
	                break;

	            case 'texture':
	                dependency = this.loadTexture( index );
	                break;

	            case 'skin':
	                dependency = this.loadSkin( index );
	                break;

	            case 'animation':
	                dependency = this.loadAnimation( index );
	                break;

	            case 'camera':
	                dependency = this.loadCamera( index );
	                break;

	            case 'light':
	                dependency = this.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].loadLight( index );
	                break;

	            default:
	                throw new Error( 'Unknown type: ' + type );

	        }

	        this.cache.add( cacheKey, dependency );

	    }

	    return dependency;

	};

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	GLTFParser.prototype.getDependencies = function ( type ) {

	    var dependencies = this.cache.get( type );

	    if ( ! dependencies ) {

	        var parser = this;
	        var defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

	        dependencies = Promise.all( defs.map( function ( def, index ) {

	            return parser.getDependency( type, index );

	        } ) );

	        this.cache.add( type, dependencies );

	    }

	    return dependencies;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBuffer = function ( bufferIndex ) {

	    var bufferDef = this.json.buffers[ bufferIndex ];
	    var loader = this.fileLoader;

	    if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

	        throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

	    }

	    // If present, GLB container is required to be the first buffer.
	    if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

	        return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

	    }

	    var options = this.options;

	    return new Promise( function ( resolve, reject ) {

	        loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

	            reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

	        } );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBufferView = function ( bufferViewIndex ) {

	    var bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

	    return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

	        var byteLength = bufferViewDef.byteLength || 0;
	        var byteOffset = bufferViewDef.byteOffset || 0;
	        return buffer.slice( byteOffset, byteOffset + byteLength );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
	 */
	GLTFParser.prototype.loadAccessor = function ( accessorIndex ) {

	    var parser = this;
	    var json = this.json;

	    var accessorDef = this.json.accessors[ accessorIndex ];

	    if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

	        // Ignore empty accessors, which may be used to declare runtime
	        // information about attributes coming from another source (e.g. Draco
	        // compression extension).
	        return Promise.resolve( null );

	    }

	    var pendingBufferViews = [];

	    if ( accessorDef.bufferView !== undefined ) {

	        pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

	    } else {

	        pendingBufferViews.push( null );

	    }

	    if ( accessorDef.sparse !== undefined ) {

	        pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
	        pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

	    }

	    return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

	        var bufferView = bufferViews[ 0 ];

	        var itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
	        var TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

	        // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
	        var elementBytes = TypedArray.BYTES_PER_ELEMENT;
	        var itemBytes = elementBytes * itemSize;
	        var byteOffset = accessorDef.byteOffset || 0;
	        var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
	        var normalized = accessorDef.normalized === true;
	        var array, bufferAttribute;

	        // The buffer is not interleaved if the stride is the item size in bytes.
	        if ( byteStride && byteStride !== itemBytes ) {

	            var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType;
	            var ib = parser.cache.get( ibCacheKey );

	            if ( ! ib ) {

	                // Use the full buffer if it's interleaved.
	                array = new TypedArray( bufferView );

	                // Integer parameters to IB/IBA are in array elements, not bytes.
	                ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

	                parser.cache.add( ibCacheKey, ib );

	            }

	            bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, byteOffset / elementBytes, normalized );

	        } else {

	            if ( bufferView === null ) {

	                array = new TypedArray( accessorDef.count * itemSize );

	            } else {

	                array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

	            }

	            bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

	        }

	        // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
	        if ( accessorDef.sparse !== undefined ) {

	            var itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
	            var TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

	            var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
	            var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

	            var sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
	            var sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

	            if ( bufferView !== null ) {

	                // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
	                bufferAttribute.setArray( bufferAttribute.array.slice() );

	            }

	            for ( var i = 0, il = sparseIndices.length; i < il; i ++ ) {

	                var index = sparseIndices[ i ];

	                bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
	                if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
	                if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
	                if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
	                if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

	            }

	        }

	        return bufferAttribute;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */
	GLTFParser.prototype.loadTexture = function ( textureIndex ) {

	    var parser = this;
	    var json = this.json;
	    var options = this.options;
	    var textureLoader = this.textureLoader;

		var exrLoader = this.exrLoader;
		var hdrLoader = this.hdrLoader;
		var lightMapTextures = this.lightMapTextures;
		var lightMapTexturesType = this.lightMapTexturesType;

	    var URL = window.URL || window.webkitURL;

	    var textureDef = json.textures[ textureIndex ];

	    var textureExtensions = textureDef.extensions || {};

	    var source;

	    if ( textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ] ) {

	        source = json.images[ textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].source ];

	    } else {

	        source = json.images[ textureDef.source ];

	    }

	    var sourceURI = source.uri;
	    var isObjectURL = false;

	    if ( source.bufferView !== undefined ) {

	        // Load binary image data from bufferView, if provided.

	        sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

	            isObjectURL = true;
	            var blob = new Blob( [ bufferView ], { type: source.mimeType } );
	            sourceURI = URL.createObjectURL( blob );
	            return sourceURI;

	        } );

	    }

	    return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

	        // Load Texture resource.
			console.log('贴图资源',sourceURI);
	        var loader = THREE.Loader.Handlers.get( sourceURI );

			console.log("---------------------------------------11111111: " + sourceURI);
	        if ( ! loader ) {
	            loader = textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ]
	                ? parser.extensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].ddsLoader
	                : textureLoader;
				console.log("---------------------------------------11111111");
				if(lightMapTextures[textureIndex])
				{

					if (sourceURI.endsWith('hdr'))
					{
						loader = hdrLoader;

						lightMapTexturesType[textureIndex] = 'HDR';
					}
					else
					{
						loader = exrLoader;

						lightMapTexturesType[textureIndex] = 'EXR';
					}
				}
	        }

	        return new Promise( function ( resolve, reject ) {
	        	let texture = loader.load( resolveURL( sourceURI, options.path ), resolve, undefined, function(){
	        		var texture = new THREE.Texture();
					//图片缺失时用1x1的Base64白色占位图替代
	                let img = document.createElement('img');
	                img.src = "data:image/png;base64,Qk06AAAAAAAAADYAAAAoAAAAAQAAAAEAAAABABgAAAAAAAQAAAATCwAAEwsAAAAAAAAAAAAA////AA==";
	                texture.image = img;
	                texture.needsUpdate = true;
              		resolve( texture );
                 });
	        } );

	    } ).then( function ( texture ) {

	        // Clean up resources and configure Texture.

	        if ( isObjectURL === true ) {

	            URL.revokeObjectURL( sourceURI );

	        }

	        texture.flipY = false;

	        if ( textureDef.name !== undefined ) texture.name = textureDef.name;

	        if(lightMapTextures[textureIndex]){
				if (lightMapTexturesType[textureIndex] == 'EXR')
				{
					texture.flipY = true;
				}
				else
				{
					texture.flipY = false;
				}
			}
	        else {
				// Ignore unknown mime types, like DDS files.
				if (source.mimeType in MIME_TYPE_FORMATS) {

					texture.format = MIME_TYPE_FORMATS[source.mimeType];

				}

	        var samplers = json.samplers || {};
	        var sampler = samplers[ textureDef.sampler ] || {};

	        texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || THREE.LinearFilter;
	        texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || THREE.LinearMipMapLinearFilter;
	        texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || THREE.RepeatWrapping;
	        texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || THREE.RepeatWrapping;
		}
	        return texture;

	    } );

	};

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise}
	 */
	GLTFParser.prototype.assignTexture = function ( materialParams, mapName, mapDef ) {

	    var parser = this;
		if(mapName == 'lightMap')
		{
			parser.lightMapTextures[mapDef.index] = true;

		}

	    return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

	        if ( ! texture.isCompressedTexture ) {

	            switch ( mapName ) {

	                case 'aoMap':
	                case 'emissiveMap':
	                case 'metalnessMap':
	                case 'normalMap':
	                case 'roughnessMap':
	                    texture.format = THREE.RGBFormat;
	                    break;

	            }

	        }

	        if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

	            var transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

	            if ( transform ) {

	                texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );

	            }

	        }

	        materialParams[ mapName ] = texture;

	    } );

	};

	/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accomodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {THREE.Object3D} mesh Mesh, Line, or Points instance.
	 */
	GLTFParser.prototype.assignFinalMaterial = function ( mesh ) {

	    var geometry = mesh.geometry;
	    var material = mesh.material;
	    var extensions = this.extensions;

	    var useVertexTangents = geometry.attributes.tangent !== undefined;
	    var useVertexColors = geometry.attributes.color !== undefined;
	    var useFlatShading = geometry.attributes.normal === undefined;
	    var useSkinning = mesh.isSkinnedMesh === true;
	    var useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
	    var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

	    if ( mesh.isPoints ) {

	        var cacheKey = 'PointsMaterial:' + material.uuid;

	        var pointsMaterial = this.cache.get( cacheKey );

	        if ( ! pointsMaterial ) {

	            pointsMaterial = new THREE.PointsMaterial();
	            THREE.Material.prototype.copy.call( pointsMaterial, material );
	            pointsMaterial.color.copy( material.color );
	            pointsMaterial.map = material.map;
	            pointsMaterial.lights = false; // PointsMaterial doesn't support lights yet

	            this.cache.add( cacheKey, pointsMaterial );

	        }

	        material = pointsMaterial;

	    } else if ( mesh.isLine ) {

	        var cacheKey = 'LineBasicMaterial:' + material.uuid;

	        var lineMaterial = this.cache.get( cacheKey );

	        if ( ! lineMaterial ) {

	            lineMaterial = new THREE.LineBasicMaterial();
	            THREE.Material.prototype.copy.call( lineMaterial, material );
	            lineMaterial.color.copy( material.color );
	            lineMaterial.lights = false; // LineBasicMaterial doesn't support lights yet

	            this.cache.add( cacheKey, lineMaterial );

	        }

	        material = lineMaterial;

	    }

	    // Clone the material if it will be modified
	    if ( useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

	        var cacheKey = 'ClonedMaterial:' + material.uuid + ':';

	        if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
	        if ( useSkinning ) cacheKey += 'skinning:';
	        if ( useVertexTangents ) cacheKey += 'vertex-tangents:';
	        if ( useVertexColors ) cacheKey += 'vertex-colors:';
	        if ( useFlatShading ) cacheKey += 'flat-shading:';
	        if ( useMorphTargets ) cacheKey += 'morph-targets:';
	        if ( useMorphNormals ) cacheKey += 'morph-normals:';

	        var cachedMaterial = this.cache.get( cacheKey );

	        if ( ! cachedMaterial ) {

	            cachedMaterial = material.isGLTFSpecularGlossinessMaterial
	                ? extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].cloneMaterial( material )
	                : material.clone();

	            if ( useSkinning ) cachedMaterial.skinning = true;
	            if ( useVertexTangents ) cachedMaterial.vertexTangents = true;
	            if ( useVertexColors ) cachedMaterial.vertexColors = THREE.VertexColors;
	            if ( useFlatShading ) cachedMaterial.flatShading = true;
	            if ( useMorphTargets ) cachedMaterial.morphTargets = true;
	            if ( useMorphNormals ) cachedMaterial.morphNormals = true;

	            this.cache.add( cacheKey, cachedMaterial );

	        }

	        material = cachedMaterial;

	    }

	    // workarounds for mesh and geometry

	    if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

	        console.log( 'THREE.GLTFLoader: Duplicating UVs to support aoMap.' );
	        geometry.addAttribute( 'uv2', new THREE.BufferAttribute( geometry.attributes.uv.array, 2 ) );

	    }

	    if ( material.isGLTFSpecularGlossinessMaterial ) {

	        // for GLTFSpecularGlossinessMaterial(ShaderMaterial) uniforms runtime update
	        mesh.onBeforeRender = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].refreshUniforms;

	    }

	    mesh.material = material;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<THREE.Material>}
	 */
	GLTFParser.prototype.loadMaterial = function ( materialIndex ) {

	    var parser = this;
	    var json = this.json;
	    var extensions = this.extensions;
	    var materialDef = json.materials[ materialIndex ];

	    var materialType;
	    var materialParams = {};
	    var materialExtensions = materialDef.extensions || {};

	    var pending = [];

	    if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

	        var sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
	        materialType = sgExtension.getMaterialType();
	        pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

	    } else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

	        var kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
	        materialType = kmuExtension.getMaterialType();
	        pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

	    } else {

	        // Specification:
	        // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

	        materialType = THREE.MeshStandardMaterial;

	        var metallicRoughness = materialDef.pbrMetallicRoughness || {};

	        materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
	        materialParams.opacity = 1.0;

	        if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

	            var array = metallicRoughness.baseColorFactor;

	            materialParams.color.fromArray( array );
	            materialParams.opacity = array[ 3 ];

	        }

	        if ( metallicRoughness.baseColorTexture !== undefined ) {

	            pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

	        }

	        materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
	        materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

	        if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

	            pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
	            pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

	        }

	    }

	    if ( materialDef.doubleSided === true ) {

	        materialParams.side = THREE.DoubleSide;

	    }

	    var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

	    if ( alphaMode === ALPHA_MODES.BLEND ) {

	        materialParams.transparent = true;

	    } else {

	        materialParams.transparent = false;

	        if ( alphaMode === ALPHA_MODES.MASK ) {

	            materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

	        }

	    }

	    if ( materialDef.normalTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

	        materialParams.normalScale = new THREE.Vector2( 1, 1 );

	        if ( materialDef.normalTexture.scale !== undefined ) {

	            materialParams.normalScale.set( materialDef.normalTexture.scale, materialDef.normalTexture.scale );

	        }

	    }

	    if ( materialDef.occlusionTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

	        if ( materialDef.occlusionTexture.strength !== undefined ) {

	            materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

	        }

	    }

	    if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

	    }

	    if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

	    }

	    //++ext
		if ( materialDef.specularTexture !== undefined /*&& materialType !== THREE.MeshStandardMaterial*/ ) {

			pending.push( parser.assignTexture( materialParams, 'specularMap', materialDef.specularTexture ) );

		}
		if ( materialDef.specularFactor !== undefined ) {

			materialParams.specularColor = new THREE.Color().fromArray( materialDef.specularFactor );
		}

		if(materialDef.smoothnessMin !== undefined){
			materialParams.smoothMin = materialDef.smoothnessMin;
		}
		if(materialDef.smoothnessMax !== undefined){
			materialParams.smoothMax = materialDef.smoothnessMax;
		}
		if(materialDef.AOMin !== undefined){
			materialParams.AOMin = materialDef.AOMin;
		}
		if(materialDef.AOMax !== undefined){
			materialParams.AOMax = materialDef.AOMax;
		}
		if(materialDef.shaderHint !== undefined){
			materialParams.shaderHint = materialDef.shaderHint;
		}
		//--ext

		//mask
		if( materialDef.lightMapTexture !==undefined && materialType !== THREE.MeshBasicMaterial)
		{
			pending.push(parser.assignTexture(materialParams, 'lightMap', materialDef.lightMapTexture));
		}
		//

	    return Promise.all( pending ).then( function () {

	        var material;

	        if ( materialType === THREE.ShaderMaterial ) {

	            material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

	        } else {

	            if(materialParams.shaderHint !== undefined){
					material = new THREE.MeshHDRPMaterial( materialParams );
				}
				else{
					material = new materialType( materialParams );
				}

	        }

	        if ( materialDef.name !== undefined ) material.name = materialDef.name;

	        // baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
	        if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
	        if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;
	        if ( material.specularMap ) material.specularMap.encoding = THREE.sRGBEncoding;

	        assignExtrasToUserData( material, materialDef );

	        if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

	        return material;

	    } );

	};

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

	    var attributes = primitiveDef.attributes;

	    var pending = [];

	    function assignAttributeAccessor( accessorIndex, attributeName ) {

	        return parser.getDependency( 'accessor', accessorIndex )
	            .then( function ( accessor ) {

	                geometry.addAttribute( attributeName, accessor );

	            } );

	    }

	    for ( var gltfAttributeName in attributes ) {

	        var threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

	        // Skip attributes already provided by e.g. Draco extension.
	        if ( threeAttributeName in geometry.attributes ) continue;

	        pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

	    }

	    if ( primitiveDef.indices !== undefined && ! geometry.index ) {

	        var accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

	            geometry.setIndex( accessor );

	        } );

	        pending.push( accessor );

	    }

	    assignExtrasToUserData( geometry, primitiveDef );

	    return Promise.all( pending ).then( function () {

	        return primitiveDef.targets !== undefined
	            ? addMorphTargets( geometry, primitiveDef.targets, parser )
	            : geometry;

	    } );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<THREE.BufferGeometry>>}
	 */
	GLTFParser.prototype.loadGeometries = function ( primitives ) {

	    var parser = this;
	    var extensions = this.extensions;
	    var cache = this.primitiveCache;

	    function createDracoPrimitive( primitive ) {

	        return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
	            .decodePrimitive( primitive, parser )
	            .then( function ( geometry ) {

	                return addPrimitiveAttributes( geometry, primitive, parser );

	            } );

	    }

	    var pending = [];

	    for ( var i = 0, il = primitives.length; i < il; i ++ ) {

	        var primitive = primitives[ i ];
	        var cacheKey = createPrimitiveKey( primitive );

	        // See if we've already created this geometry
	        var cached = cache[ cacheKey ];

	        if ( cached ) {

	            // Use the cached geometry if it exists
	            pending.push( cached.promise );

	        } else {

	            var geometryPromise;

	            if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

	                // Use DRACO geometry if available
	                geometryPromise = createDracoPrimitive( primitive );

	            } else {

	                // Otherwise create a new geometry
	                geometryPromise = addPrimitiveAttributes( new THREE.BufferGeometry(), primitive, parser );

	            }

	            // Cache this geometry
	            cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

	            pending.push( geometryPromise );

	        }

	    }

	    return Promise.all( pending );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
	 */
	//LJY 读取Mesh
	GLTFParser.prototype.loadMesh = function ( meshIndex ) {

	    var parser = this;
	    var json = this.json;
	    var extensions = this.extensions;

	    var meshDef = json.meshes[ meshIndex ];
	    var primitives = meshDef.primitives;

	    var pending = [];

	    //LJY 加载模型相关的材质放入pending�
	    for ( var i = 0, il = primitives.length; i < il; i ++ ) {

	        var material = primitives[ i ].material === undefined
	            ? createDefaultMaterial()
	            : this.getDependency( 'material', primitives[ i ].material );

	        pending.push( material );

	    }

	    return Promise.all( pending ).then( function ( originalMaterials ) {

	        return parser.loadGeometries( primitives ).then( function ( geometries ) {

	            var meshes = [];

	            for ( var i = 0, il = geometries.length; i < il; i ++ ) {

	                var geometry = geometries[ i ];
	                var primitive = primitives[ i ];

	                // 1. create Mesh
	                //LJY 创建Mesh

	                var mesh;

	                var material = originalMaterials[ i ];

	                if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
	                    primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
	                    primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
	                    primitive.mode === undefined ) {

	                    // .isSkinnedMesh isn't in glTF spec. See .markDefs()
	                    mesh = meshDef.isSkinnedMesh === true
	                        ? new THREE.SkinnedMesh( geometry, material )
	                        : new THREE.Mesh( geometry, material );

	                    if ( mesh.isSkinnedMesh === true && !mesh.geometry.attributes.skinWeight.normalized ) {

	                        // we normalize floating point skin weight array to fix malformed assets (see #15319)
	                        // it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
	                        mesh.normalizeSkinWeights();

	                    }

	                    if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

	                        mesh.drawMode = THREE.TriangleStripDrawMode;

	                    } else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

	                        mesh.drawMode = THREE.TriangleFanDrawMode;

	                    }

	                } else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

	                    mesh = new THREE.LineSegments( geometry, material );

	                } else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

	                    mesh = new THREE.Line( geometry, material );

	                } else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

	                    mesh = new THREE.LineLoop( geometry, material );

	                } else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

	                    mesh = new THREE.Points( geometry, material );

	                } else {

	                    throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

	                }

	                if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

	                    updateMorphTargets( mesh, meshDef );

	                }

	                mesh.name = meshDef.name || ( 'mesh_' + meshIndex );

	                if ( geometries.length > 1 ) mesh.name += '_' + i;

	                assignExtrasToUserData( mesh, meshDef );

	                parser.assignFinalMaterial( mesh );

	                meshes.push( mesh );

	            }

	            //LJY 若仅一个Mesh则直接返回
	            if ( meshes.length === 1 ) {

	                let go = new GameObject(null, meshes[ 0 ]);
	                // return meshes[ 0 ];
	                return go;
	            }

	            //LJY 若包含多个Mesh，则放入group中，在创建骨架时会对每个Mesh进行绑定
	            // var group = new THREE.Group();
	            var group = new GameObject();

	            for ( var i = 0, il = meshes.length; i < il; i ++ ) {
	                // group.add( meshes[ i ] );
	                let go = new GameObject(null, meshes[ i ]);
	                go.transform.parent = group.transform;
	            }

	            return group;

	        } );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	GLTFParser.prototype.loadCamera = function ( cameraIndex ) {

	    var camera;
	    var cameraDef = this.json.cameras[ cameraIndex ];
	    var params = cameraDef[ cameraDef.type ];

	    if ( ! params ) {

	        console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
	        return;

	    }

	    if ( cameraDef.type === 'perspective' ) {

	        camera = new THREE.PerspectiveCamera( THREE.Math.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

	    } else if ( cameraDef.type === 'orthographic' ) {

	        camera = new THREE.OrthographicCamera( params.xmag / - 2, params.xmag / 2, params.ymag / 2, params.ymag / - 2, params.znear, params.zfar );

	    }

	    if ( cameraDef.name !== undefined ) camera.name = cameraDef.name;

	    assignExtrasToUserData( camera, cameraDef );

	    return Promise.resolve( camera );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */
	GLTFParser.prototype.loadSkin = function ( skinIndex ) {

	    var skinDef = this.json.skins[ skinIndex ];

	    var skinEntry = { joints: skinDef.joints };

	    if ( skinDef.inverseBindMatrices === undefined ) {

	        return Promise.resolve( skinEntry );

	    }

	    return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

	        skinEntry.inverseBindMatrices = accessor;

	        return skinEntry;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<THREE.AnimationClip>}
	 */
	GLTFParser.prototype.loadAnimation = function ( animationIndex ) {

	    var json = this.json;

	    var animationDef = json.animations[ animationIndex ];

	    var pendingNodes = [];
	    var pendingInputAccessors = [];
	    var pendingOutputAccessors = [];
	    var pendingSamplers = [];
	    var pendingTargets = [];

	    for ( var i = 0, il = animationDef.channels.length; i < il; i ++ ) {

	        var channel = animationDef.channels[ i ];
	        var sampler = animationDef.samplers[ channel.sampler ];
	        var target = channel.target;
	        var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
	        var input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
	        var output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

	        pendingNodes.push( this.getDependency( 'node', name ) );
	        pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
	        pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
	        pendingSamplers.push( sampler );
	        pendingTargets.push( target );

	    }

	    return Promise.all( [

	        Promise.all( pendingNodes ),
	        Promise.all( pendingInputAccessors ),
	        Promise.all( pendingOutputAccessors ),
	        Promise.all( pendingSamplers ),
	        Promise.all( pendingTargets )

	    ] ).then( function ( dependencies ) {

	        var nodes = dependencies[ 0 ];
	        var inputAccessors = dependencies[ 1 ];
	        var outputAccessors = dependencies[ 2 ];
	        var samplers = dependencies[ 3 ];
	        var targets = dependencies[ 4 ];

	        var tracks = [];

	        for ( var i = 0, il = nodes.length; i < il; i ++ ) {

	            var node = nodes[ i ]._imp;
	            var inputAccessor = inputAccessors[ i ];
	            var outputAccessor = outputAccessors[ i ];
	            var sampler = samplers[ i ];
	            var target = targets[ i ];

	            if ( node === undefined ) continue;

	            node.updateMatrix();
	            node.matrixAutoUpdate = true;

	            var TypedKeyframeTrack;

	            switch ( PATH_PROPERTIES[ target.path ] ) {

	                case PATH_PROPERTIES.weights:

	                    TypedKeyframeTrack = THREE.NumberKeyframeTrack;
	                    break;

	                case PATH_PROPERTIES.rotation:

	                    TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
	                    break;

	                case PATH_PROPERTIES.position:
	                case PATH_PROPERTIES.scale:
	                default:

	                    TypedKeyframeTrack = THREE.VectorKeyframeTrack;
	                    break;

	            }

	            var targetName = node.name ? node.name : node.uuid;

	            var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : THREE.InterpolateLinear;

	            var targetNames = [];

	            if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

	                // Node may be a THREE.Group (glTF mesh with several primitives) or a THREE.Mesh.
	                node.traverse( function ( object ) {

	                    if ( object.isMesh === true && object.morphTargetInfluences ) {

	                        targetNames.push( object.name ? object.name : object.uuid );

	                    }

	                } );

	            } else {

	                targetNames.push( targetName );

	            }

	            var outputArray = outputAccessor.array;

	            if ( outputAccessor.normalized ) {

	                var scale;

	                if ( outputArray.constructor === Int8Array ) {

	                    scale = 1 / 127;

	                } else if ( outputArray.constructor === Uint8Array ) {

	                    scale = 1 / 255;

	                } else if ( outputArray.constructor == Int16Array ) {

	                    scale = 1 / 32767;

	                } else if ( outputArray.constructor === Uint16Array ) {

	                    scale = 1 / 65535;

	                } else {

	                    throw new Error( 'THREE.GLTFLoader: Unsupported output accessor component type.' );

	                }

	                var scaled = new Float32Array( outputArray.length );

	                for ( var j = 0, jl = outputArray.length; j < jl; j ++ ) {

	                    scaled[j] = outputArray[j] * scale;

	                }

	                outputArray = scaled;

	            }

	            for ( var j = 0, jl = targetNames.length; j < jl; j ++ ) {

	                var track = new TypedKeyframeTrack(
	                    targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
	                    inputAccessor.array,
	                    outputArray,
	                    interpolation
	                );

	                // Override interpolation with custom factory method.
	                if ( sampler.interpolation === 'CUBICSPLINE' ) {

	                    track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

	                        // A CUBICSPLINE keyframe in glTF has three output values for each input value,
	                        // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
	                        // must be divided by three to get the interpolant's sampleSize argument.

	                        return new GLTFCubicSplineInterpolant( this.times, this.values, this.getValueSize() / 3, result );

	                    };

	                    // Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
	                    track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

	                }

	                tracks.push( track );

	            }

	        }

	        var name = animationDef.name !== undefined ? animationDef.name : 'animation_' + animationIndex;

	        return new THREE.AnimationClip( name, undefined, tracks );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<THREE.Object3D>}
	 */
	//LJY 处理节点
	GLTFParser.prototype.loadNode = function ( nodeIndex ) {

	    var json = this.json;
	    var extensions = this.extensions;
	    var parser = this;

	    var meshReferences = json.meshReferences;
	    var meshUses = json.meshUses;

	    var nodeDef = json.nodes[ nodeIndex ];

	    return ( function () {

	        // .isBone isn't in glTF spec. See .markDefs
	        if ( nodeDef.isBone === true ) {

	            //LJY 替换W3D骨骼
	            return Promise.resolve( new Bone() );

	        } else if ( nodeDef.mesh !== undefined ) {

	            //LJY 加载mesh到node�
	            return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( go ) {

	                var mesh = go._imp;
	                var node;

	                if ( meshReferences[ nodeDef.mesh ] > 1 ) {

	                    var instanceNum = meshUses[ nodeDef.mesh ] ++;

	                    node = mesh.clone();
	                    node.name += '_instance_' + instanceNum;

						if(instanceNum > 0)
						{
							go = GameObject.Instantiate(go);
							node = go._imp;
						}
						go.name += '_instance_' + instanceNum;


	                    // onBeforeRender copy for Specular-Glossiness
	                    node.onBeforeRender = mesh.onBeforeRender;

	                    for ( var i = 0, il = node.children.length; i < il; i ++ ) {

	                        node.children[ i ].name += '_instance_' + instanceNum;
	                        node.children[ i ].onBeforeRender = mesh.children[ i ].onBeforeRender;

	                    }



	                } else {

	                    node = mesh;

	                }

	                // if weights are provided on the node, override weights on the mesh.
	                if ( nodeDef.weights !== undefined ) {

	                    node.traverse( function ( o ) {

	                        if ( ! o.isMesh ) return;

	                        for ( var i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

	                            o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

	                        }

	                    } );

	                }
	                // let go = new GameObject(null, node);
	                return go;

	            } );

	        } else if ( nodeDef.camera !== undefined ) {

	            //return parser.getDependency( 'camera', nodeDef.camera );
	            return Promise.resolve( new GameObject() );

	        } else if ( nodeDef.extensions
	            && nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ]
	            && nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light !== undefined ) {

	            //return parser.getDependency( 'light', nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light );
	            return Promise.resolve( new GameObject() );
	        } else {

	            //LJY 替换W3D对象
	            return Promise.resolve( new GameObject() );

	        }

	    }() ).then( function ( go ) {

	        let node = go._imp;
	        if (node.isBone) {
	            node.userData.originaluuid = node.uuid;
	        }
	        if ( nodeDef.name !== undefined ) {
	            //LJY 名字赋�
	            node.userData.name = nodeDef.name;
	            node.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );
	            go.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );
	        }

	        //LJY 为节点设置额外数�
	        assignExtrasToUserData( node, nodeDef );

	        if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

	        //设置节点坐标
	        if ( nodeDef.matrix !== undefined ) {

	            var matrix = new THREE.Matrix4();
	            matrix.fromArray( nodeDef.matrix );
	            node.applyMatrix( matrix );

	        } else {

	            if ( nodeDef.translation !== undefined ) {

	                node.position.fromArray( nodeDef.translation );

	            }

	            if ( nodeDef.rotation !== undefined ) {

	                node.quaternion.fromArray( nodeDef.rotation );

	            }

	            if ( nodeDef.scale !== undefined ) {

	                node.scale.fromArray( nodeDef.scale );

	            }

	        }

	        return go;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<THREE.Scene>}
	 */
	//LJY 读取场景
	GLTFParser.prototype.loadScene = function () {

	    // scene node hierachy builder

	    //LJY 创建节点和该节点下所有层级（设置父子关系、绑定骨架）
	    function buildNodeHierachy( nodeId, parentObject, json, parser ) {

	        var nodeDef = json.nodes[ nodeId ];

	        return parser.getDependency( 'node', nodeId ).then( function ( go ) {
	            let node = go._imp;
	            if ( nodeDef.skin === undefined ) return go;

	            // build skeleton here as well
	            //↓↓LJY 如果是Skinmesh则创建骨架↓�?/
	            var skinEntry;

	            //LJY 读取SkinJson数据，其中joints存放骨骼Index信息
	            return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

	                skinEntry = skin;

	                var pendingJoints = [];

	                for ( var i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

	                    // pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );
	                    let joint = parser.getDependency( 'node', skinEntry.joints[ i ] );
	                    pendingJoints.push( joint );

	                }

	                //LJY pendingJoints存放依据joints创建的所有骨骼实�
	                return Promise.all( pendingJoints );

	            } ).then( function ( jointNodes ) {

	                //LJY 判断此node是否包含多个子mesh，如果是则取子节点中的mesh
	                var meshes = node.isGroup === true ? node.children : [ node ];

	                for ( var i = 0, il = meshes.length; i < il; i ++ ) {

	                    var mesh = meshes[ i ];

	                    var bones = [];
	                    var boneInverses = [];

	                    for ( var j = 0, jl = jointNodes.length; j < jl; j ++ ) {

	                        var jointNode = jointNodes[ j ];

	                        if ( jointNode ) {

	                            bones.push( jointNode._imp );

	                            var mat = new THREE.Matrix4();

	                            if ( skinEntry.inverseBindMatrices !== undefined ) {

	                                mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

	                            }

	                            boneInverses.push( mat );

	                        } else {

	                            console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

	                        }

	                    }

	                    mesh.bind( new THREE.Skeleton( bones, boneInverses ), mesh.matrixWorld );

	                }                //↑↑LJY 如果是Skinmesh则创建骨架↑�?/
	                // return node;
	                return go;

	            } );

	        } ).then( function ( go ) {

	            // build node hierachy

	            //LJY 设置父子节点
	            // parentObject.add( node );
	            go.transform.parent = parentObject.transform;

	            var pending = [];

	            if ( nodeDef.children ) {

	                var children = nodeDef.children;

	                for ( var i = 0, il = children.length; i < il; i ++ ) {

	                    var child = children[ i ];
	                    pending.push( buildNodeHierachy( child, go, json, parser ) );

	                }

	            }

	            return Promise.all( pending );

	        } );

	    }

	    //LJY 读取场景
	    return function loadScene( sceneIndex ) {

	        var json = this.json;
	        var extensions = this.extensions;
	        var sceneDef = this.json.scenes[ sceneIndex ];
	        var parser = this;

	        // var scene = new THREE.Scene();
	        // if ( sceneDef.name !== undefined ) scene.name = sceneDef.name;

	        var scene = new GameObject();
	        // scene.transform.localScale = new Vector3(0,0,0);
	        if ( sceneDef.name !== undefined )
	        {
	            scene.name = sceneDef.name;
	            scene._imp.name = sceneDef.name;
	        }



	        assignExtrasToUserData( scene._imp, sceneDef );

	        if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene._imp, sceneDef );

	        //LJY 获取场景第一层节点，通过buildNodeHierachy根据此节点创建其下所有层级关�
	        var nodeIds = sceneDef.nodes || [];

	        var pending = [];

	        for ( var i = 0, il = nodeIds.length; i < il; i ++ ) {

	            pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

	        }

	        return Promise.all( pending ).then( function () {

	            return scene;

	        } ).catch(function(e){
	        	if( e && e.message && e.message.startsWith("THREE.GLTFLoader: Failed to load buffer") ){
	        		Web3DEngine.BaseObject.Destroy( scene );
	        		scene = new GameObject();
			        if ( sceneDef.name !== undefined )
			        {
			            scene.name = sceneDef.name;
			            scene._imp.name = sceneDef.name;
			        }
			        return scene;
	        	}
	        });

	    };

	}();

	function _GLTFLoader(manager) {
	    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;
	    this.dracoLoader = null;
	}

	Object.assign( _GLTFLoader.prototype, {

	        constructor: _GLTFLoader,

	        crossOrigin: 'anonymous',

	        load: function ( url, onLoad, onProgress, onError ) {

	            var scope = this;

	            var resourcePath;

	            if ( this.resourcePath !== undefined ) {

	                resourcePath = this.resourcePath;

	            } else if ( this.path !== undefined ) {

	                resourcePath = this.path;

	            } else {

	                resourcePath = THREE.LoaderUtils.extractUrlBase( url );

	            }

	            // Tells the LoadingManager to track an extra item, which resolves after
	            // the model is fully loaded. This means the count of items loaded will
	            // be incorrect, but ensures manager.onLoad() does not fire early.
	            scope.manager.itemStart( url );

	            var _onError = function ( e ) {

	                if ( onError ) {

	                    onError( e );

	                } else {

	                    console.error( e );

	                }

	                scope.manager.itemError( url );
	                scope.manager.itemEnd( url );

	            };

	            var loader = new THREE.FileLoader( scope.manager );

	            loader.setPath( this.path );
	            loader.setResponseType( 'arraybuffer' );

	            loader.load( url, function ( data ) {

	                try {

	                    scope.parse( data, resourcePath, function ( gltf ) {

	                        onLoad( gltf );

	                        scope.manager.itemEnd( url );

	                    }, _onError );

	                } catch ( e ) {

	                    _onError( e );

	                }

	            }, onProgress, _onError );

	        },

	        setCrossOrigin: function ( value ) {

	            this.crossOrigin = value;
	            return this;

	        },

	        setPath: function ( value ) {

	            this.path = value;
	            return this;

	        },

	        setResourcePath: function ( value ) {

	            this.resourcePath = value;
	            return this;

	        },

	        setDRACOLoader: function ( dracoLoader ) {

	            this.dracoLoader = dracoLoader;
	            return this;

	        },

	        parse: function ( data, path, onLoad, onError ) {

	            var content;
	            var extensions = {};

	            if ( typeof data === 'string' ) {

	                content = data;

	            } else {

	                var magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

	                if ( magic === BINARY_EXTENSION_HEADER_MAGIC$1 ) {

	                    try {

	                        extensions[ EXTENSIONS$1.KHR_BINARY_GLTF ] = new GLTFBinaryExtension$1( data );

	                    } catch ( error ) {

	                        if ( onError ) onError( error );
	                        return;

	                    }

	                    content = extensions[ EXTENSIONS$1.KHR_BINARY_GLTF ].content;

	                } else {

	                    content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

	                }

	            }

	            var json = JSON.parse( content );

	            if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

	                if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead.' ) );
	                return;

	            }

	            if ( json.extensionsUsed ) {

	                for ( var i = 0; i < json.extensionsUsed.length; ++ i ) {

	                    var extensionName = json.extensionsUsed[ i ];
	                    var extensionsRequired = json.extensionsRequired || [];

	                    switch ( extensionName ) {

	                        case EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL:
	                            extensions[ extensionName ] = new GLTFLightsExtension$1( json );
	                            break;

	                        case EXTENSIONS$1.KHR_MATERIALS_UNLIT:
	                            extensions[ extensionName ] = new GLTFMaterialsUnlitExtension$1( json );
	                            break;

	                        case EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
	                            extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension$1( json );
	                            break;

	                        case EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION:
	                            extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension$1( json, this.dracoLoader );
	                            break;

	                        case EXTENSIONS$1.MSFT_TEXTURE_DDS:
	                            extensions[ EXTENSIONS$1.MSFT_TEXTURE_DDS ] = new GLTFTextureDDSExtension$1( json );
	                            break;

	                        case EXTENSIONS$1.KHR_TEXTURE_TRANSFORM:
	                            extensions[ EXTENSIONS$1.KHR_TEXTURE_TRANSFORM ] = new GLTFTextureTransformExtension$1( json );
	                            break;

	                        default:

	                            if ( extensionsRequired.indexOf( extensionName ) >= 0 ) {

	                                console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

	                            }

	                    }

	                }

	            }

	            var parser = new GLTFParser$1( json, extensions, {

	                path: path || this.resourcePath || '',
	                crossOrigin: this.crossOrigin,
	                manager: this.manager

	            } );

	            parser.parse( function ( scene, scenes, cameras, animations, json ) {

	                var glTF = {
	                    scene: scene,
	                    scenes: scenes,
	                    cameras: cameras,
	                    animations: animations,
	                    asset: json.asset,
	                    parser: parser,
	                    userData: {}
	                };

	                addUnknownExtensionsToUserData$1( extensions, glTF, json );

	                onLoad( glTF );

	            }, onError );

	        }

	    }
	);


	/* GLTFREGISTRY */

	function GLTFRegistry$1() {

	    var objects = {};

	    return	{

	        get: function ( key ) {

	            return objects[ key ];

	        },

	        add: function ( key, object ) {

	            objects[ key ] = object;

	        },

	        remove: function ( key ) {

	            delete objects[ key ];

	        },

	        removeAll: function () {

	            objects = {};

	        }

	    };

	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	var EXTENSIONS$1 = {
	    KHR_BINARY_GLTF: 'KHR_binary_glTF',
	    KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
	    KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
	    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
	    KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
	    KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
	    MSFT_TEXTURE_DDS: 'MSFT_texture_dds'
	};

	/**
	 * DDS Texture Extension
	 *
	 * Specification:
	 * https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_texture_dds
	 *
	 */
	function GLTFTextureDDSExtension$1() {

	    if ( ! THREE.DDSLoader ) {

	        throw new Error( 'THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader' );

	    }

	    this.name = EXTENSIONS$1.MSFT_TEXTURE_DDS;
	    this.ddsLoader = new THREE.DDSLoader();

	}

	/**
	 * Lights Extension
	 *
	 * Specification: PENDING
	 */
	function GLTFLightsExtension$1( json ) {

	    this.name = EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL;

	    var extension = ( json.extensions && json.extensions[ EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL ] ) || {};
	    this.lightDefs = extension.lights || [];

	}

	GLTFLightsExtension$1.prototype.loadLight = function ( lightIndex ) {

	    var lightDef = this.lightDefs[ lightIndex ];
	    var lightNode;

	    var color = new THREE.Color( 0xffffff );
	    if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

	    var range = lightDef.range !== undefined ? lightDef.range : 0;

	    switch ( lightDef.type ) {

	        case 'directional':
	            lightNode = new THREE.DirectionalLight( color );
	            lightNode.target.position.set( 0, 0, -1 );
	            lightNode.add( lightNode.target );
	            break;

	        case 'point':
	            lightNode = new THREE.PointLight( color );
	            lightNode.distance = range;
	            break;

	        case 'spot':
	            lightNode = new THREE.SpotLight( color );
	            lightNode.distance = range;
	            // Handle spotlight properties.
	            lightDef.spot = lightDef.spot || {};
	            lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
	            lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
	            lightNode.angle = lightDef.spot.outerConeAngle;
	            lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
	            lightNode.target.position.set( 0, 0, -1 );
	            lightNode.add( lightNode.target );
	            break;

	        default:
	            throw new Error( 'THREE.GLTFLoader: Unexpected light type, "' + lightDef.type + '".' );

	    }

	    lightNode.decay = 2;

	    if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

	    lightNode.name = lightDef.name || ( 'light_' + lightIndex );

	    return Promise.resolve( lightNode );

	};

	/**
	 * Unlit Materials Extension (pending)
	 *
	 * PR: https://github.com/KhronosGroup/glTF/pull/1163
	 */
	function GLTFMaterialsUnlitExtension$1( json ) {

	    this.name = EXTENSIONS$1.KHR_MATERIALS_UNLIT;

	}

	GLTFMaterialsUnlitExtension$1.prototype.getMaterialType = function ( material ) {

	    return THREE.MeshBasicMaterial;

	};

	GLTFMaterialsUnlitExtension$1.prototype.extendParams = function ( materialParams, material, parser ) {

	    var pending = [];

	    materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
	    materialParams.opacity = 1.0;

	    var metallicRoughness = material.pbrMetallicRoughness;

	    if ( metallicRoughness ) {

	        if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

	            var array = metallicRoughness.baseColorFactor;

	            materialParams.color.fromArray( array );
	            materialParams.opacity = array[ 3 ];

	        }

	        if ( metallicRoughness.baseColorTexture !== undefined ) {

	            pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

	        }

	    }

	    return Promise.all( pending );

	};
	var BINARY_EXTENSION_HEADER_MAGIC$1 = 'glTF';
	var BINARY_EXTENSION_HEADER_LENGTH$1 = 12;
	var BINARY_EXTENSION_CHUNK_TYPES$1 = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	function GLTFBinaryExtension$1( data ) {

	    this.name = EXTENSIONS$1.KHR_BINARY_GLTF;
	    this.content = null;
	    this.body = null;

	    var headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH$1 );

	    this.header = {
	        magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
	        version: headerView.getUint32( 4, true ),
	        length: headerView.getUint32( 8, true )
	    };

	    if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC$1 ) {

	        throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

	    } else if ( this.header.version < 2.0 ) {

	        throw new Error( 'THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.' );

	    }

	    var chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH$1 );
	    var chunkIndex = 0;

	    while ( chunkIndex < chunkView.byteLength ) {

	        var chunkLength = chunkView.getUint32( chunkIndex, true );
	        chunkIndex += 4;

	        var chunkType = chunkView.getUint32( chunkIndex, true );
	        chunkIndex += 4;

	        if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES$1.JSON ) {

	            var contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH$1 + chunkIndex, chunkLength );
	            this.content = THREE.LoaderUtils.decodeText( contentArray );

	        } else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES$1.BIN ) {

	            var byteOffset = BINARY_EXTENSION_HEADER_LENGTH$1 + chunkIndex;
	            this.body = data.slice( byteOffset, byteOffset + chunkLength );

	        }

	        // Clients must ignore chunks with unknown types.

	        chunkIndex += chunkLength;

	    }

	    if ( this.content === null ) {

	        throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

	    }

	}

	/**
	 * DRACO Mesh Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/pull/874
	 */
	function GLTFDracoMeshCompressionExtension$1( json, dracoLoader ) {

	    if ( ! dracoLoader ) {

	        throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

	    }

	    this.name = EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION;
	    this.json = json;
	    this.dracoLoader = dracoLoader;
	    THREE.DRACOLoader.getDecoderModule();

	}

	GLTFDracoMeshCompressionExtension$1.prototype.decodePrimitive = function ( primitive, parser ) {

	    var json = this.json;
	    var dracoLoader = this.dracoLoader;
	    var bufferViewIndex = primitive.extensions[ this.name ].bufferView;
	    var gltfAttributeMap = primitive.extensions[ this.name ].attributes;
	    var threeAttributeMap = {};
	    var attributeNormalizedMap = {};
	    var attributeTypeMap = {};

	    for ( var attributeName in gltfAttributeMap ) {

	        if ( ! ( attributeName in ATTRIBUTES$1 ) ) continue;

	        threeAttributeMap[ ATTRIBUTES$1[ attributeName ] ] = gltfAttributeMap[ attributeName ];

	    }

	    for ( attributeName in primitive.attributes ) {

	        if ( ATTRIBUTES$1[ attributeName ] !== undefined && gltfAttributeMap[ attributeName ] !== undefined ) {

	            var accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
	            var componentType = WEBGL_COMPONENT_TYPES$1[ accessorDef.componentType ];

	            attributeTypeMap[ ATTRIBUTES$1[ attributeName ] ] = componentType;
	            attributeNormalizedMap[ ATTRIBUTES$1[ attributeName ] ] = accessorDef.normalized === true;

	        }

	    }

	    return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

	        return new Promise( function ( resolve ) {

	            dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

	                for ( var attributeName in geometry.attributes ) {

	                    var attribute = geometry.attributes[ attributeName ];
	                    var normalized = attributeNormalizedMap[ attributeName ];

	                    if ( normalized !== undefined ) attribute.normalized = normalized;

	                }

	                resolve( geometry );

	            }, threeAttributeMap, attributeTypeMap );

	        } );

	    } );

	};

	/**
	 * Texture Transform Extension
	 *
	 * Specification:
	 */
	function GLTFTextureTransformExtension$1( json ) {

	    this.name = EXTENSIONS$1.KHR_TEXTURE_TRANSFORM;

	}

	GLTFTextureTransformExtension$1.prototype.extendTexture = function ( texture, transform ) {

	    texture = texture.clone();

	    if ( transform.offset !== undefined ) {

	        texture.offset.fromArray( transform.offset );

	    }

	    if ( transform.rotation !== undefined ) {

	        texture.rotation = transform.rotation;

	    }

	    if ( transform.scale !== undefined ) {

	        texture.repeat.fromArray( transform.scale );

	    }

	    if ( transform.texCoord !== undefined ) {

	        console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

	    }

	    texture.needsUpdate = true;

	    return texture;

	};

	/**
	 * Specular-Glossiness Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
	 */
	function GLTFMaterialsPbrSpecularGlossinessExtension$1() {

	    return {

	        name: EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

	        specularGlossinessParams: [
	            'color',
	            'map',
	            'lightMap',
	            'lightMapIntensity',
	            'aoMap',
	            'aoMapIntensity',
	            'emissive',
	            'emissiveIntensity',
	            'emissiveMap',
	            'bumpMap',
	            'bumpScale',
	            'normalMap',
	            'displacementMap',
	            'displacementScale',
	            'displacementBias',
	            'specularMap',
	            'specular',
	            'glossinessMap',
	            'glossiness',
	            'alphaMap',
	            'envMap',
	            'envMapIntensity',
	            'refractionRatio',
	        ],

	        getMaterialType: function () {

	            return THREE.ShaderMaterial;

	        },

	        extendParams: function ( params, material, parser ) {

	            var pbrSpecularGlossiness = material.extensions[ this.name ];

	            var shader = THREE.ShaderLib[ 'standard' ];

	            var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	            var specularMapParsFragmentChunk = [
	                '#ifdef USE_SPECULARMAP',
	                '	uniform sampler2D specularMap;',
	                '#endif'
	            ].join( '\n' );

	            var glossinessMapParsFragmentChunk = [
	                '#ifdef USE_GLOSSINESSMAP',
	                '	uniform sampler2D glossinessMap;',
	                '#endif'
	            ].join( '\n' );

	            var specularMapFragmentChunk = [
	                'vec3 specularFactor = specular;',
	                '#ifdef USE_SPECULARMAP',
	                '	vec4 texelSpecular = texture2D( specularMap, vUv );',
	                '	texelSpecular = sRGBToLinear( texelSpecular );',
	                '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
	                '	specularFactor *= texelSpecular.rgb;',
	                '#endif'
	            ].join( '\n' );

	            var glossinessMapFragmentChunk = [
	                'float glossinessFactor = glossiness;',
	                '#ifdef USE_GLOSSINESSMAP',
	                '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
	                '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
	                '	glossinessFactor *= texelGlossiness.a;',
	                '#endif'
	            ].join( '\n' );

	            var lightPhysicalFragmentChunk = [
	                'PhysicalMaterial material;',
	                'material.diffuseColor = diffuseColor.rgb;',
	                'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );',
	                'material.specularColor = specularFactor.rgb;',
	            ].join( '\n' );

	            var fragmentShader = shader.fragmentShader
	                .replace( 'uniform float roughness;', 'uniform vec3 specular;' )
	                .replace( 'uniform float metalness;', 'uniform float glossiness;' )
	                .replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
	                .replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
	                .replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
	                .replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
	                .replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

	            delete uniforms.roughness;
	            delete uniforms.metalness;
	            delete uniforms.roughnessMap;
	            delete uniforms.metalnessMap;

	            uniforms.specular = { value: new THREE.Color().setHex( 0x111111 ) };
	            uniforms.glossiness = { value: 0.5 };
	            uniforms.specularMap = { value: null };
	            uniforms.glossinessMap = { value: null };

	            params.vertexShader = shader.vertexShader;
	            params.fragmentShader = fragmentShader;
	            params.uniforms = uniforms;
	            params.defines = { 'STANDARD': '' };

	            params.color = new THREE.Color( 1.0, 1.0, 1.0 );
	            params.opacity = 1.0;

	            var pending = [];

	            if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

	                var array = pbrSpecularGlossiness.diffuseFactor;

	                params.color.fromArray( array );
	                params.opacity = array[ 3 ];

	            }

	            if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

	                pending.push( parser.assignTexture( params, 'map', pbrSpecularGlossiness.diffuseTexture ) );

	            }

	            params.emissive = new THREE.Color( 0.0, 0.0, 0.0 );
	            params.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
	            params.specular = new THREE.Color( 1.0, 1.0, 1.0 );

	            if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

	                params.specular.fromArray( pbrSpecularGlossiness.specularFactor );

	            }

	            if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

	                var specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
	                pending.push( parser.assignTexture( params, 'glossinessMap', specGlossMapDef ) );
	                pending.push( parser.assignTexture( params, 'specularMap', specGlossMapDef ) );

	            }

	            return Promise.all( pending );

	        },

	        createMaterial: function ( params ) {

	            // setup material properties based on MeshStandardMaterial for Specular-Glossiness

	            var material = new THREE.ShaderMaterial( {
	                defines: params.defines,
	                vertexShader: params.vertexShader,
	                fragmentShader: params.fragmentShader,
	                uniforms: params.uniforms,
	                fog: true,
	                lights: true,
	                opacity: params.opacity,
	                transparent: params.transparent
	            } );

	            material.isGLTFSpecularGlossinessMaterial = true;

	            material.color = params.color;

	            material.map = params.map === undefined ? null : params.map;

	            material.lightMap = null;
	            material.lightMapIntensity = 1.0;

	            material.aoMap = params.aoMap === undefined ? null : params.aoMap;
	            material.aoMapIntensity = 1.0;

	            material.emissive = params.emissive;
	            material.emissiveIntensity = 1.0;
	            material.emissiveMap = params.emissiveMap === undefined ? null : params.emissiveMap;

	            material.bumpMap = params.bumpMap === undefined ? null : params.bumpMap;
	            material.bumpScale = 1;

	            material.normalMap = params.normalMap === undefined ? null : params.normalMap;
	            if ( params.normalScale ) material.normalScale = params.normalScale;

	            material.displacementMap = null;
	            material.displacementScale = 1;
	            material.displacementBias = 0;

	            material.specularMap = params.specularMap === undefined ? null : params.specularMap;
	            material.specular = params.specular;

	            material.glossinessMap = params.glossinessMap === undefined ? null : params.glossinessMap;
	            material.glossiness = params.glossiness;

	            material.alphaMap = null;

	            material.envMap = params.envMap === undefined ? null : params.envMap;
	            material.envMapIntensity = 1.0;

	            material.refractionRatio = 0.98;

	            material.extensions.derivatives = true;

	            return material;

	        },

	        /**
	         * Clones a GLTFSpecularGlossinessMaterial instance. The ShaderMaterial.copy() method can
	         * copy only properties it knows about or inherits, and misses many properties that would
	         * normally be defined by MeshStandardMaterial.
	         *
	         * This method allows GLTFSpecularGlossinessMaterials to be cloned in the process of
	         * loading a glTF model, but cloning later (e.g. by the user) would require these changes
	         * AND also updating `.onBeforeRender` on the parent mesh.
	         *
	         * @param  {THREE.ShaderMaterial} source
	         * @return {THREE.ShaderMaterial}
	         */
	        cloneMaterial: function ( source ) {

	            var target = source.clone();

	            target.isGLTFSpecularGlossinessMaterial = true;

	            var params = this.specularGlossinessParams;

	            for ( var i = 0, il = params.length; i < il; i ++ ) {

	                target[ params[ i ] ] = source[ params[ i ] ];

	            }

	            return target;

	        },

	        // Here's based on refreshUniformsCommon() and refreshUniformsStandard() in WebGLRenderer.
	        refreshUniforms: function ( renderer, scene, camera, geometry, material, group ) {

	            if ( material.isGLTFSpecularGlossinessMaterial !== true ) {

	                return;

	            }

	            var uniforms = material.uniforms;
	            var defines = material.defines;

	            uniforms.opacity.value = material.opacity;

	            uniforms.diffuse.value.copy( material.color );
	            uniforms.emissive.value.copy( material.emissive ).multiplyScalar( material.emissiveIntensity );

	            uniforms.map.value = material.map;
	            uniforms.specularMap.value = material.specularMap;
	            uniforms.alphaMap.value = material.alphaMap;

	            uniforms.lightMap.value = material.lightMap;
	            uniforms.lightMapIntensity.value = material.lightMapIntensity;

	            uniforms.aoMap.value = material.aoMap;
	            uniforms.aoMapIntensity.value = material.aoMapIntensity;

	            // uv repeat and offset setting priorities
	            // 1. color map
	            // 2. specular map
	            // 3. normal map
	            // 4. bump map
	            // 5. alpha map
	            // 6. emissive map

	            var uvScaleMap;

	            if ( material.map ) {

	                uvScaleMap = material.map;

	            } else if ( material.specularMap ) {

	                uvScaleMap = material.specularMap;

	            } else if ( material.displacementMap ) {

	                uvScaleMap = material.displacementMap;

	            } else if ( material.normalMap ) {

	                uvScaleMap = material.normalMap;

	            } else if ( material.bumpMap ) {

	                uvScaleMap = material.bumpMap;

	            } else if ( material.glossinessMap ) {

	                uvScaleMap = material.glossinessMap;

	            } else if ( material.alphaMap ) {

	                uvScaleMap = material.alphaMap;

	            } else if ( material.emissiveMap ) {

	                uvScaleMap = material.emissiveMap;

	            }

	            if ( uvScaleMap !== undefined ) {

	                // backwards compatibility
	                if ( uvScaleMap.isWebGLRenderTarget ) {

	                    uvScaleMap = uvScaleMap.texture;

	                }

	                if ( uvScaleMap.matrixAutoUpdate === true ) {

	                    uvScaleMap.updateMatrix();

	                }

	                uniforms.uvTransform.value.copy( uvScaleMap.matrix );

	            }

	            if ( material.envMap ) {

	                uniforms.envMap.value = material.envMap;
	                uniforms.envMapIntensity.value = material.envMapIntensity;

	                // don't flip CubeTexture envMaps, flip everything else:
	                //  WebGLRenderTargetCube will be flipped for backwards compatibility
	                //  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
	                // this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
	                uniforms.flipEnvMap.value = material.envMap.isCubeTexture ? - 1 : 1;

	                uniforms.reflectivity.value = material.reflectivity;
	                uniforms.refractionRatio.value = material.refractionRatio;

	                uniforms.maxMipLevel.value = renderer.properties.get( material.envMap ).__maxMipLevel;
	            }

	            uniforms.specular.value.copy( material.specular );
	            uniforms.glossiness.value = material.glossiness;

	            uniforms.glossinessMap.value = material.glossinessMap;

	            uniforms.emissiveMap.value = material.emissiveMap;
	            uniforms.bumpMap.value = material.bumpMap;
	            uniforms.normalMap.value = material.normalMap;

	            uniforms.displacementMap.value = material.displacementMap;
	            uniforms.displacementScale.value = material.displacementScale;
	            uniforms.displacementBias.value = material.displacementBias;

	            if ( uniforms.glossinessMap.value !== null && defines.USE_GLOSSINESSMAP === undefined ) {

	                defines.USE_GLOSSINESSMAP = '';
	                // set USE_ROUGHNESSMAP to enable vUv
	                defines.USE_ROUGHNESSMAP = '';

	            }

	            if ( uniforms.glossinessMap.value === null && defines.USE_GLOSSINESSMAP !== undefined ) {

	                delete defines.USE_GLOSSINESSMAP;
	                delete defines.USE_ROUGHNESSMAP;

	            }

	        }

	    };

	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	function GLTFCubicSplineInterpolant$1( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

	    THREE.Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	GLTFCubicSplineInterpolant$1.prototype = Object.create( THREE.Interpolant.prototype );
	GLTFCubicSplineInterpolant$1.prototype.constructor = GLTFCubicSplineInterpolant$1;

	GLTFCubicSplineInterpolant$1.prototype.copySampleValue_ = function ( index ) {

	    // Copies a sample value to the result buffer. See description of glTF
	    // CUBICSPLINE values layout in interpolate_() function below.

	    var result = this.resultBuffer,
	        values = this.sampleValues,
	        valueSize = this.valueSize,
	        offset = index * valueSize * 3 + valueSize;

	    for ( var i = 0; i !== valueSize; i ++ ) {

	        result[ i ] = values[ offset + i ];

	    }

	    return result;

	};

	GLTFCubicSplineInterpolant$1.prototype.beforeStart_ = GLTFCubicSplineInterpolant$1.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant$1.prototype.afterEnd_ = GLTFCubicSplineInterpolant$1.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant$1.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

	    var result = this.resultBuffer;
	    var values = this.sampleValues;
	    var stride = this.valueSize;

	    var stride2 = stride * 2;
	    var stride3 = stride * 3;

	    var td = t1 - t0;

	    var p = ( t - t0 ) / td;
	    var pp = p * p;
	    var ppp = pp * p;

	    var offset1 = i1 * stride3;
	    var offset0 = offset1 - stride3;

	    var s2 = - 2 * ppp + 3 * pp;
	    var s3 = ppp - pp;
	    var s0 = 1 - s2;
	    var s1 = s3 - pp + p;

	    // Layout of keyframe output values for CUBICSPLINE animations:
	    //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
	    for ( var i = 0; i !== stride; i ++ ) {

	        var p0 = values[ offset0 + i + stride ]; // splineVertex_k
	        var m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
	        var p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
	        var m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

	        result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

	    }

	    return result;

	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS$1 = {
	    FLOAT: 5126,
	    //FLOAT_MAT2: 35674,
	    FLOAT_MAT3: 35675,
	    FLOAT_MAT4: 35676,
	    FLOAT_VEC2: 35664,
	    FLOAT_VEC3: 35665,
	    FLOAT_VEC4: 35666,
	    LINEAR: 9729,
	    REPEAT: 10497,
	    SAMPLER_2D: 35678,
	    POINTS: 0,
	    LINES: 1,
	    LINE_LOOP: 2,
	    LINE_STRIP: 3,
	    TRIANGLES: 4,
	    TRIANGLE_STRIP: 5,
	    TRIANGLE_FAN: 6,
	    UNSIGNED_BYTE: 5121,
	    UNSIGNED_SHORT: 5123
	};

	var WEBGL_TYPE$1 = {
	    5126: Number,
	    //35674: THREE.Matrix2,
	    35675: THREE.Matrix3,
	    35676: THREE.Matrix4,
	    35664: THREE.Vector2,
	    35665: THREE.Vector3,
	    35666: THREE.Vector4,
	    35678: THREE.Texture
	};

	var WEBGL_COMPONENT_TYPES$1 = {
	    5120: Int8Array,
	    5121: Uint8Array,
	    5122: Int16Array,
	    5123: Uint16Array,
	    5125: Uint32Array,
	    5126: Float32Array
	};

	var WEBGL_FILTERS$1 = {
	    9728: THREE.NearestFilter,
	    9729: THREE.LinearFilter,
	    9984: THREE.NearestMipMapNearestFilter,
	    9985: THREE.LinearMipMapNearestFilter,
	    9986: THREE.NearestMipMapLinearFilter,
	    9987: THREE.LinearMipMapLinearFilter
	};

	var WEBGL_WRAPPINGS$1 = {
	    33071: THREE.ClampToEdgeWrapping,
	    33648: THREE.MirroredRepeatWrapping,
	    10497: THREE.RepeatWrapping
	};

	var WEBGL_SIDES$1 = {
	    1028: THREE.BackSide, // Culling front
	    1029: THREE.FrontSide // Culling back
	    //1032: THREE.NoSide   // Culling front and back, what to do?
	};

	var WEBGL_DEPTH_FUNCS$1 = {
	    512: THREE.NeverDepth,
	    513: THREE.LessDepth,
	    514: THREE.EqualDepth,
	    515: THREE.LessEqualDepth,
	    516: THREE.GreaterEqualDepth,
	    517: THREE.NotEqualDepth,
	    518: THREE.GreaterEqualDepth,
	    519: THREE.AlwaysDepth
	};

	var WEBGL_BLEND_EQUATIONS$1 = {
	    32774: THREE.AddEquation,
	    32778: THREE.SubtractEquation,
	    32779: THREE.ReverseSubtractEquation
	};

	var WEBGL_BLEND_FUNCS$1 = {
	    0: THREE.ZeroFactor,
	    1: THREE.OneFactor,
	    768: THREE.SrcColorFactor,
	    769: THREE.OneMinusSrcColorFactor,
	    770: THREE.SrcAlphaFactor,
	    771: THREE.OneMinusSrcAlphaFactor,
	    772: THREE.DstAlphaFactor,
	    773: THREE.OneMinusDstAlphaFactor,
	    774: THREE.DstColorFactor,
	    775: THREE.OneMinusDstColorFactor,
	    776: THREE.SrcAlphaSaturateFactor
	    // The followings are not supported by Three.js yet
	    //32769: CONSTANT_COLOR,
	    //32770: ONE_MINUS_CONSTANT_COLOR,
	    //32771: CONSTANT_ALPHA,
	    //32772: ONE_MINUS_CONSTANT_COLOR
	};

	var WEBGL_TYPE_SIZES$1 = {
	    'SCALAR': 1,
	    'VEC2': 2,
	    'VEC3': 3,
	    'VEC4': 4,
	    'MAT2': 4,
	    'MAT3': 9,
	    'MAT4': 16
	};

	var ATTRIBUTES$1 = {
	    POSITION: 'position',
	    NORMAL: 'normal',
	    TEXCOORD_0: 'uv',
	    TEXCOORD_1: 'uv2',
	    COLOR_0: 'color',
	    WEIGHTS_0: 'skinWeight',
	    JOINTS_0: 'skinIndex',
	};

	var PATH_PROPERTIES$1 = {
	    scale: 'scale',
	    translation: 'position',
	    rotation: 'quaternion',
	    weights: 'morphTargetInfluences'
	};

	var INTERPOLATION$1 = {
	    CUBICSPLINE: THREE.InterpolateSmooth, // We use custom interpolation GLTFCubicSplineInterpolation for CUBICSPLINE.
	                                          // KeyframeTrack.optimize() can't handle glTF Cubic Spline output values layout,
	                                          // using THREE.InterpolateSmooth for KeyframeTrack instantiation to prevent optimization.
	                                          // See KeyframeTrack.optimize() for the detail.
	    LINEAR: THREE.InterpolateLinear,
	    STEP: THREE.InterpolateDiscrete
	};

	var ALPHA_MODES$1 = {
	    OPAQUE: 'OPAQUE',
	    MASK: 'MASK',
	    BLEND: 'BLEND'
	};

	var MIME_TYPE_FORMATS$1 = {
	    'image/png': THREE.RGBAFormat,
	    'image/jpeg': THREE.RGBFormat
	};

	/* UTILITY FUNCTIONS */

	function resolveURL$1( url, path ) {

	    // Invalid URL
	    if ( typeof url !== 'string' || url === '' ) return '';

	    // Absolute URL http://,https://,//
	    if ( /^(https?:)?\/\//i.test( url ) ) return url;

	    // Data URI
	    if ( /^data:.*,.*$/i.test( url ) ) return url;

	    // Blob URL
	    if ( /^blob:.*$/i.test( url ) ) return url;

	    // Relative URL
	    return path + url;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
	 */
	function createDefaultMaterial$1() {

	    return new THREE.MeshStandardMaterial( {
	        color: 0xFFFFFF,
	        emissive: 0x000000,
	        metalness: 1,
	        roughness: 1,
	        transparent: false,
	        depthTest: true,
	        side: THREE.FrontSide
	    } );

	}

	function addUnknownExtensionsToUserData$1( knownExtensions, object, objectDef ) {

	    // Add unknown glTF extensions to an object's userData.

	    for ( var name in objectDef.extensions ) {

	        if ( knownExtensions[ name ] === undefined ) {

	            object.userData.gltfExtensions = object.userData.gltfExtensions || {};
	            object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

	        }

	    }

	}

	/**
	 * @param {THREE.Object3D|THREE.Material|THREE.BufferGeometry} object
	 * @param {GLTF.definition} gltfDef
	 */
	function assignExtrasToUserData$1( object, gltfDef ) {

	    if ( gltfDef.extras !== undefined ) {

	        if ( typeof gltfDef.extras === 'object' ) {

	            object.userData = gltfDef.extras;

	        } else {

	            console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

	        }

	    }

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
	 *
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Array<GLTF.Target>} targets
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addMorphTargets$1( geometry, targets, parser ) {

	    var hasMorphPosition = false;
	    var hasMorphNormal = false;

	    for ( var i = 0, il = targets.length; i < il; i ++ ) {

	        var target = targets[ i ];

	        if ( target.POSITION !== undefined ) hasMorphPosition = true;
	        if ( target.NORMAL !== undefined ) hasMorphNormal = true;

	        if ( hasMorphPosition && hasMorphNormal ) break;

	    }

	    if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

	    var pendingPositionAccessors = [];
	    var pendingNormalAccessors = [];

	    for ( var i = 0, il = targets.length; i < il; i ++ ) {

	        var target = targets[ i ];

	        if ( hasMorphPosition ) {

	            // TODO: Error-prone use of a callback inside a loop.
	            var accessor = target.POSITION !== undefined
	                ? parser.getDependency( 'accessor', target.POSITION )
	                    .then( function ( accessor ) {
	                        // Cloning not to pollute original accessor below
	                        return cloneBufferAttribute$1( accessor );
	                    } )
	                : geometry.attributes.position;

	            pendingPositionAccessors.push( accessor );

	        }

	        if ( hasMorphNormal ) {

	            // TODO: Error-prone use of a callback inside a loop.
	            var accessor = target.NORMAL !== undefined
	                ? parser.getDependency( 'accessor', target.NORMAL )
	                    .then( function ( accessor ) {
	                        return cloneBufferAttribute$1( accessor );
	                    } )
	                : geometry.attributes.normal;

	            pendingNormalAccessors.push( accessor );

	        }

	    }

	    return Promise.all( [
	        Promise.all( pendingPositionAccessors ),
	        Promise.all( pendingNormalAccessors )
	    ] ).then( function ( accessors ) {

	        var morphPositions = accessors[ 0 ];
	        var morphNormals = accessors[ 1 ];

	        for ( var i = 0, il = targets.length; i < il; i ++ ) {

	            var target = targets[ i ];
	            var attributeName = 'morphTarget' + i;

	            if ( hasMorphPosition ) {

	                // Three.js morph position is absolute value. The formula is
	                //   basePosition
	                //     + weight0 * ( morphPosition0 - basePosition )
	                //     + weight1 * ( morphPosition1 - basePosition )
	                //     ...
	                // while the glTF one is relative
	                //   basePosition
	                //     + weight0 * glTFmorphPosition0
	                //     + weight1 * glTFmorphPosition1
	                //     ...
	                // then we need to convert from relative to absolute here.

	                if ( target.POSITION !== undefined ) {

	                    var positionAttribute = morphPositions[ i ];
	                    positionAttribute.name = attributeName;

	                    var position = geometry.attributes.position;

	                    for ( var j = 0, jl = positionAttribute.count; j < jl; j ++ ) {

	                        positionAttribute.setXYZ(
	                            j,
	                            positionAttribute.getX( j ) + position.getX( j ),
	                            positionAttribute.getY( j ) + position.getY( j ),
	                            positionAttribute.getZ( j ) + position.getZ( j )
	                        );

	                    }

	                }

	            }

	            if ( hasMorphNormal ) {

	                // see target.POSITION's comment

	                if ( target.NORMAL !== undefined ) {

	                    var normalAttribute = morphNormals[ i ];
	                    normalAttribute.name = attributeName;

	                    var normal = geometry.attributes.normal;

	                    for ( var j = 0, jl = normalAttribute.count; j < jl; j ++ ) {

	                        normalAttribute.setXYZ(
	                            j,
	                            normalAttribute.getX( j ) + normal.getX( j ),
	                            normalAttribute.getY( j ) + normal.getY( j ),
	                            normalAttribute.getZ( j ) + normal.getZ( j )
	                        );

	                    }

	                }

	            }

	        }

	        if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
	        if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;

	        return geometry;

	    } );

	}

	/**
	 * @param {THREE.Mesh} mesh
	 * @param {GLTF.Mesh} meshDef
	 */
	function updateMorphTargets$1( mesh, meshDef ) {

	    mesh.updateMorphTargets();

	    if ( meshDef.weights !== undefined ) {

	        for ( var i = 0, il = meshDef.weights.length; i < il; i ++ ) {

	            mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

	        }

	    }

	    // .extras has user-defined data, so check that .extras.targetNames is an array.
	    if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

	        var targetNames = meshDef.extras.targetNames;

	        if ( mesh.morphTargetInfluences.length === targetNames.length ) {

	            mesh.morphTargetDictionary = {};

	            for ( var i = 0, il = targetNames.length; i < il; i ++ ) {

	                mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

	            }

	        } else {

	            console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

	        }

	    }

	}

	function isPrimitiveEqual( a, b ) {

	    var dracoExtA = a.extensions ? a.extensions[ EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION ] : undefined;
	    var dracoExtB = b.extensions ? b.extensions[ EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION ] : undefined;

	    if ( dracoExtA && dracoExtB ) {

	        if ( dracoExtA.bufferView !== dracoExtB.bufferView ) return false;

	        return isObjectEqual$1( dracoExtA.attributes, dracoExtB.attributes );

	    }

	    if ( a.indices !== b.indices ) {

	        return false;

	    }

	    return isObjectEqual$1( a.attributes, b.attributes );

	}

	function isObjectEqual$1( a, b ) {

	    if ( Object.keys( a ).length !== Object.keys( b ).length ) return false;

	    for ( var key in a ) {

	        if ( a[ key ] !== b[ key ] ) return false;

	    }

	    return true;

	}

	function isArrayEqual( a, b ) {

	    if ( a.length !== b.length ) return false;

	    for ( var i = 0, il = a.length; i < il; i ++ ) {

	        if ( a[ i ] !== b[ i ] ) return false;

	    }

	    return true;

	}

	function getCachedGeometry( cache, newPrimitive ) {

	    for ( var i = 0, il = cache.length; i < il; i ++ ) {

	        var cached = cache[ i ];

	        if ( isPrimitiveEqual( cached.primitive, newPrimitive ) ) return cached.promise;

	    }

	    return null;

	}

	function getCachedCombinedGeometry( cache, geometries ) {

	    for ( var i = 0, il = cache.length; i < il; i ++ ) {

	        var cached = cache[ i ];

	        if ( isArrayEqual( geometries, cached.baseGeometries ) ) return cached.geometry;

	    }

	    return null;

	}

	function getCachedMultiPassGeometry( cache, geometry, primitives ) {

	    for ( var i = 0, il = cache.length; i < il; i ++ ) {

	        var cached = cache[ i ];

	        if ( geometry === cached.baseGeometry && isArrayEqual( primitives, cached.primitives ) ) return cached.geometry;

	    }

	    return null;

	}

	function cloneBufferAttribute$1( attribute ) {

	    if ( attribute.isInterleavedBufferAttribute ) {

	        var count = attribute.count;
	        var itemSize = attribute.itemSize;
	        var array = attribute.array.slice( 0, count * itemSize );

	        for ( var i = 0; i < count; ++ i ) {

	            array[ i ] = attribute.getX( i );
	            if ( itemSize >= 2 ) array[ i + 1 ] = attribute.getY( i );
	            if ( itemSize >= 3 ) array[ i + 2 ] = attribute.getZ( i );
	            if ( itemSize >= 4 ) array[ i + 3 ] = attribute.getW( i );

	        }

	        return new THREE.BufferAttribute( array, itemSize, attribute.normalized );

	    }

	    return attribute.clone();

	}

	/**
	 * Checks if we can build a single Mesh with MultiMaterial from multiple primitives.
	 * Returns true if all primitives use the same attributes/morphAttributes/mode
	 * and also have index. Otherwise returns false.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Boolean}
	 */
	function isMultiPassGeometry( primitives ) {

	    if ( primitives.length < 2 ) return false;

	    var primitive0 = primitives[ 0 ];
	    var targets0 = primitive0.targets || [];

	    if ( primitive0.indices === undefined ) return false;

	    for ( var i = 1, il = primitives.length; i < il; i ++ ) {

	        var primitive = primitives[ i ];

	        if ( primitive0.mode !== primitive.mode ) return false;
	        if ( primitive.indices === undefined ) return false;
	        if ( primitive.extensions && primitive.extensions[ EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION ] ) return false;
	        if ( ! isObjectEqual$1( primitive0.attributes, primitive.attributes ) ) return false;

	        var targets = primitive.targets || [];

	        if ( targets0.length !== targets.length ) return false;

	        for ( var j = 0, jl = targets0.length; j < jl; j ++ ) {

	            if ( ! isObjectEqual$1( targets0[ j ], targets[ j ] ) ) return false;

	        }

	    }

	    return true;

	}

	/* GLTF PARSER */

	function GLTFParser$1( json, extensions, options ) {

	    this.json = json || {};
	    this.extensions = extensions || {};
	    this.options = options || {};

	    // loader object cache
	    this.cache = new GLTFRegistry$1();

	    // BufferGeometry caching
	    this.primitiveCache = [];
	    this.multiplePrimitivesCache = [];
	    this.multiPassGeometryCache = [];

	    this.textureLoader = new THREE.TextureLoader( this.options.manager );
	    this.textureLoader.setCrossOrigin( this.options.crossOrigin );

	    this.fileLoader = new THREE.FileLoader( this.options.manager );
	    this.fileLoader.setResponseType( 'arraybuffer' );

	}

	GLTFParser$1.prototype.parse = function ( onLoad, onError ) {

	    var json = this.json;

	    // Clear the loader cache
	    this.cache.removeAll();

	    // Mark the special nodes/meshes in json for efficient parse
	    this.markDefs();

	    // Fire the callback on complete
	    this.getMultiDependencies( [

	        'scene',
	        'animation',
	        'camera'

	    ] ).then( function ( dependencies ) {

	        var scenes = dependencies.scenes || [];
	        var scene = scenes[ json.scene || 0 ];
	        var animations = dependencies.animations || [];
	        var cameras = dependencies.cameras || [];

	        onLoad( scene, scenes, cameras, animations, json );

	    } ).catch( onError );

	};

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	GLTFParser$1.prototype.markDefs = function () {

	    var nodeDefs = this.json.nodes || [];
	    var skinDefs = this.json.skins || [];
	    var meshDefs = this.json.meshes || [];

	    var meshReferences = {};
	    var meshUses = {};

	    // Nothing in the node definition indicates whether it is a Bone or an
	    // Object3D. Use the skins' joint references to mark bones.
	    for ( var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

	        var joints = skinDefs[ skinIndex ].joints;

	        for ( var i = 0, il = joints.length; i < il; i ++ ) {

	            nodeDefs[ joints[ i ] ].isBone = true;

	        }

	    }

	    // Meshes can (and should) be reused by multiple nodes in a glTF asset. To
	    // avoid having more than one THREE.Mesh with the same name, count
	    // references and rename instances below.
	    //
	    // Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	    for ( var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

	        var nodeDef = nodeDefs[ nodeIndex ];

	        if ( nodeDef.mesh !== undefined ) {

	            if ( meshReferences[ nodeDef.mesh ] === undefined ) {

	                meshReferences[ nodeDef.mesh ] = meshUses[ nodeDef.mesh ] = 0;

	            }

	            meshReferences[ nodeDef.mesh ] ++;

	            // Nothing in the mesh definition indicates whether it is
	            // a SkinnedMesh or Mesh. Use the node's mesh reference
	            // to mark SkinnedMesh if node has skin.
	            if ( nodeDef.skin !== undefined ) {

	                meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

	            }

	        }

	    }

	    this.json.meshReferences = meshReferences;
	    this.json.meshUses = meshUses;

	};

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<THREE.Object3D|THREE.Material|THREE.Texture|THREE.AnimationClip|ArrayBuffer|Object>}
	 */
	GLTFParser$1.prototype.getDependency = function ( type, index ) {

	    var cacheKey = type + ':' + index;
	    var dependency = this.cache.get( cacheKey );

	    if ( ! dependency ) {

	        switch ( type ) {

	            case 'scene':
	                dependency = this.loadScene( index );
	                break;

	            case 'node':
	                dependency = this.loadNode( index );
	                break;

	            case 'mesh':
	                dependency = this.loadMesh( index );
	                break;

	            case 'accessor':
	                dependency = this.loadAccessor( index );
	                break;

	            case 'bufferView':
	                dependency = this.loadBufferView( index );
	                break;

	            case 'buffer':
	                dependency = this.loadBuffer( index );
	                break;

	            case 'material':
	                dependency = this.loadMaterial( index );
	                break;

	            case 'texture':
	                dependency = this.loadTexture( index );
	                break;

	            case 'skin':
	                dependency = this.loadSkin( index );
	                break;

	            case 'animation':
	                dependency = this.loadAnimation( index );
	                break;

	            case 'camera':
	                dependency = this.loadCamera( index );
	                break;

	            case 'light':
	                dependency = this.extensions[ EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL ].loadLight( index );
	                break

	            default:
	                throw new Error( 'Unknown type: ' + type );

	        }

	        this.cache.add( cacheKey, dependency );

	    }

	    return dependency;

	};

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	GLTFParser$1.prototype.getDependencies = function ( type ) {

	    var dependencies = this.cache.get( type );

	    if ( ! dependencies ) {

	        var parser = this;
	        var defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

	        dependencies = Promise.all( defs.map( function ( def, index ) {

	            return parser.getDependency( type, index );

	        } ) );

	        this.cache.add( type, dependencies );

	    }

	    return dependencies;

	};

	/**
	 * Requests all multiple dependencies of the specified types asynchronously, with caching.
	 * @param {Array<string>} types
	 * @return {Promise<Object<Array<Object>>>}
	 */
	GLTFParser$1.prototype.getMultiDependencies = function ( types ) {

	    var results = {};
	    var pending = [];

	    for ( var i = 0, il = types.length; i < il; i ++ ) {

	        var type = types[ i ];
	        var value = this.getDependencies( type );

	        // TODO: Error-prone use of a callback inside a loop.
	        value = value.then( function ( key, value ) {

	            results[ key ] = value;

	        }.bind( this, type + ( type === 'mesh' ? 'es' : 's' ) ) );

	        pending.push( value );

	    }

	    return Promise.all( pending ).then( function () {

	        return results;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser$1.prototype.loadBuffer = function ( bufferIndex ) {

	    var bufferDef = this.json.buffers[ bufferIndex ];
	    var loader = this.fileLoader;

	    if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

	        throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

	    }

	    // If present, GLB container is required to be the first buffer.
	    if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

	        return Promise.resolve( this.extensions[ EXTENSIONS$1.KHR_BINARY_GLTF ].body );

	    }

	    var options = this.options;

	    return new Promise( function ( resolve, reject ) {

	        loader.load( resolveURL$1( bufferDef.uri, options.path ), resolve, undefined, function () {

	            reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

	        } );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser$1.prototype.loadBufferView = function ( bufferViewIndex ) {

	    var bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

	    return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

	        var byteLength = bufferViewDef.byteLength || 0;
	        var byteOffset = bufferViewDef.byteOffset || 0;
	        return buffer.slice( byteOffset, byteOffset + byteLength );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
	 */
	GLTFParser$1.prototype.loadAccessor = function ( accessorIndex ) {

	    var parser = this;
	    var json = this.json;

	    var accessorDef = this.json.accessors[ accessorIndex ];

	    if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

	        // Ignore empty accessors, which may be used to declare runtime
	        // information about attributes coming from another source (e.g. Draco
	        // compression extension).
	        return Promise.resolve( null );

	    }

	    var pendingBufferViews = [];

	    if ( accessorDef.bufferView !== undefined ) {

	        pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

	    } else {

	        pendingBufferViews.push( null );

	    }

	    if ( accessorDef.sparse !== undefined ) {

	        pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
	        pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

	    }

	    return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

	        var bufferView = bufferViews[ 0 ];

	        var itemSize = WEBGL_TYPE_SIZES$1[ accessorDef.type ];
	        var TypedArray = WEBGL_COMPONENT_TYPES$1[ accessorDef.componentType ];

	        // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
	        var elementBytes = TypedArray.BYTES_PER_ELEMENT;
	        var itemBytes = elementBytes * itemSize;
	        var byteOffset = accessorDef.byteOffset || 0;
	        var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
	        var normalized = accessorDef.normalized === true;
	        var array, bufferAttribute;

	        // The buffer is not interleaved if the stride is the item size in bytes.
	        if ( byteStride && byteStride !== itemBytes ) {

	            var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType;
	            var ib = parser.cache.get( ibCacheKey );

	            if ( ! ib ) {

	                // Use the full buffer if it's interleaved.
	                array = new TypedArray( bufferView );

	                // Integer parameters to IB/IBA are in array elements, not bytes.
	                ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

	                parser.cache.add( ibCacheKey, ib );

	            }

	            bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, byteOffset / elementBytes, normalized );

	        } else {

	            if ( bufferView === null ) {

	                array = new TypedArray( accessorDef.count * itemSize );

	            } else {

	                array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

	            }

	            bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

	        }

	        // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
	        if ( accessorDef.sparse !== undefined ) {

	            var itemSizeIndices = WEBGL_TYPE_SIZES$1.SCALAR;
	            var TypedArrayIndices = WEBGL_COMPONENT_TYPES$1[ accessorDef.sparse.indices.componentType ];

	            var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
	            var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

	            var sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
	            var sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

	            if ( bufferView !== null ) {

	                // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
	                bufferAttribute.setArray( bufferAttribute.array.slice() );

	            }

	            for ( var i = 0, il = sparseIndices.length; i < il; i ++ ) {

	                var index = sparseIndices[ i ];

	                bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
	                if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
	                if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
	                if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
	                if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

	            }

	        }

	        return bufferAttribute;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */
	GLTFParser$1.prototype.loadTexture = function ( textureIndex ) {

	    var parser = this;
	    var json = this.json;
	    var options = this.options;
	    var textureLoader = this.textureLoader;

	    var URL = window.URL || window.webkitURL;

	    var textureDef = json.textures[ textureIndex ];

	    var textureExtensions = textureDef.extensions || {};

	    var source;

	    if ( textureExtensions[ EXTENSIONS$1.MSFT_TEXTURE_DDS ] ) {

	        source = json.images[ textureExtensions[ EXTENSIONS$1.MSFT_TEXTURE_DDS ].source ];

	    } else {

	        source = json.images[ textureDef.source ];

	    }

	    var sourceURI = source.uri;
	    var isObjectURL = false;

	    if ( source.bufferView !== undefined ) {

	        // Load binary image data from bufferView, if provided.

	        sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

	            isObjectURL = true;
	            var blob = new Blob( [ bufferView ], { type: source.mimeType } );
	            sourceURI = URL.createObjectURL( blob );
	            return sourceURI;

	        } );

	    }

	    return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

	        // Load Texture resource.

	        var loader = THREE.Loader.Handlers.get( sourceURI );

	        if ( ! loader ) {

	            loader = textureExtensions[ EXTENSIONS$1.MSFT_TEXTURE_DDS ]
	                ? parser.extensions[ EXTENSIONS$1.MSFT_TEXTURE_DDS ].ddsLoader
	                : textureLoader;

	        }

	        return new Promise( function ( resolve, reject ) {

	            loader.load( resolveURL$1( sourceURI, options.path ), resolve, undefined, reject );

	        } );

	    } ).then( function ( texture ) {

	        // Clean up resources and configure Texture.

	        if ( isObjectURL === true ) {

	            URL.revokeObjectURL( sourceURI );

	        }

	        texture.flipY = false;

	        if ( textureDef.name !== undefined ) texture.name = textureDef.name;

	        // Ignore unknown mime types, like DDS files.
	        if ( source.mimeType in MIME_TYPE_FORMATS$1 ) {

	            texture.format = MIME_TYPE_FORMATS$1[ source.mimeType ];

	        }

	        var samplers = json.samplers || {};
	        var sampler = samplers[ textureDef.sampler ] || {};

	        texture.magFilter = WEBGL_FILTERS$1[ sampler.magFilter ] || THREE.LinearFilter;
	        texture.minFilter = WEBGL_FILTERS$1[ sampler.minFilter ] || THREE.LinearMipMapLinearFilter;
	        texture.wrapS = WEBGL_WRAPPINGS$1[ sampler.wrapS ] || THREE.RepeatWrapping;
	        texture.wrapT = WEBGL_WRAPPINGS$1[ sampler.wrapT ] || THREE.RepeatWrapping;

	        return texture;

	    } );

	};

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise}
	 */
	GLTFParser$1.prototype.assignTexture = function ( materialParams, mapName, mapDef ) {

	    var parser = this;

	    return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

	        if ( parser.extensions[ EXTENSIONS$1.KHR_TEXTURE_TRANSFORM ] ) {

	            var transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS$1.KHR_TEXTURE_TRANSFORM ] : undefined;

	            if ( transform ) {

	                texture = parser.extensions[ EXTENSIONS$1.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );

	            }

	        }

	        materialParams[ mapName ] = texture;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<THREE.Material>}
	 */
	GLTFParser$1.prototype.loadMaterial = function ( materialIndex ) {

	    var parser = this;
	    var json = this.json;
	    var extensions = this.extensions;
	    var materialDef = json.materials[ materialIndex ];

	    var materialType;
	    var materialParams = {};
	    var materialExtensions = materialDef.extensions || {};

	    var pending = [];

	    if ( materialExtensions[ EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

	        var sgExtension = extensions[ EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
	        materialType = sgExtension.getMaterialType( materialDef );
	        pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

	    } else if ( materialExtensions[ EXTENSIONS$1.KHR_MATERIALS_UNLIT ] ) {

	        var kmuExtension = extensions[ EXTENSIONS$1.KHR_MATERIALS_UNLIT ];
	        materialType = kmuExtension.getMaterialType( materialDef );
	        pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

	    } else {

	        // Specification:
	        // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

	        materialType = THREE.MeshStandardMaterial;

	        var metallicRoughness = materialDef.pbrMetallicRoughness || {};

	        materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
	        materialParams.opacity = 1.0;

	        if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

	            var array = metallicRoughness.baseColorFactor;

	            materialParams.color.fromArray( array );
	            materialParams.opacity = array[ 3 ];

	        }

	        if ( metallicRoughness.baseColorTexture !== undefined ) {

	            pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

	        }

	        materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
	        materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

	        if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

	            pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
	            pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

	        }

	    }

	    if ( materialDef.doubleSided === true ) {

	        materialParams.side = THREE.DoubleSide;

	    }

	    var alphaMode = materialDef.alphaMode || ALPHA_MODES$1.OPAQUE;

	    if ( alphaMode === ALPHA_MODES$1.BLEND ) {

	        materialParams.transparent = true;

	    } else {

	        materialParams.transparent = false;

	        if ( alphaMode === ALPHA_MODES$1.MASK ) {

	            materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

	        }

	    }

	    if ( materialDef.normalTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

	        materialParams.normalScale = new THREE.Vector2( 1, 1 );

	        if ( materialDef.normalTexture.scale !== undefined ) {

	            materialParams.normalScale.set( materialDef.normalTexture.scale, materialDef.normalTexture.scale );

	        }

	    }

	    if ( materialDef.occlusionTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

	        if ( materialDef.occlusionTexture.strength !== undefined ) {

	            materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

	        }

	    }

	    if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

	    }

	    if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

	        pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

	    }

	    return Promise.all( pending ).then( function () {

	        var material;

	        if ( materialType === THREE.ShaderMaterial ) {

	            material = extensions[ EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

	        } else {

	            material = new materialType( materialParams );

	        }

	        if ( materialDef.name !== undefined ) material.name = materialDef.name;

	        // Normal map textures use OpenGL conventions:
	        // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materialnormaltexture
	        if ( material.normalScale ) {

	            material.normalScale.y = - material.normalScale.y;

	        }

	        // baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
	        if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
	        if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;
	        if ( material.specularMap ) material.specularMap.encoding = THREE.sRGBEncoding;

	        assignExtrasToUserData$1( material, materialDef );

	        if ( materialDef.extensions ) addUnknownExtensionsToUserData$1( extensions, material, materialDef );

	        return material;

	    } );

	};

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addPrimitiveAttributes$1( geometry, primitiveDef, parser ) {

	    var attributes = primitiveDef.attributes;

	    var pending = [];

	    function assignAttributeAccessor( accessorIndex, attributeName ) {

	        return parser.getDependency( 'accessor', accessorIndex )
	            .then( function ( accessor ) {

	                geometry.addAttribute( attributeName, accessor );

	            } );

	    }

	    for ( var gltfAttributeName in attributes ) {

	        var threeAttributeName = ATTRIBUTES$1[ gltfAttributeName ];

	        if ( ! threeAttributeName ) continue;

	        // Skip attributes already provided by e.g. Draco extension.
	        if ( threeAttributeName in geometry.attributes ) continue;

	        pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

	    }

	    if ( primitiveDef.indices !== undefined && ! geometry.index ) {

	        var accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

	            geometry.setIndex( accessor );

	        } );

	        pending.push( accessor );

	    }

	    assignExtrasToUserData$1( geometry, primitiveDef );

	    return Promise.all( pending ).then( function () {

	        return primitiveDef.targets !== undefined
	            ? addMorphTargets$1( geometry, primitiveDef.targets, parser )
	            : geometry;

	    } );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 * If we can build a single BufferGeometry with .groups from multiple primitives, returns one BufferGeometry.
	 * Otherwise, returns BufferGeometries without .groups as many as primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<THREE.BufferGeometry>>}
	 */
	GLTFParser$1.prototype.loadGeometries = function ( primitives ) {

	    var parser = this;
	    var extensions = this.extensions;
	    var cache = this.primitiveCache;

	    var isMultiPass = isMultiPassGeometry( primitives );
	    var originalPrimitives;

	    if ( isMultiPass ) {

	        originalPrimitives = primitives; // save original primitives and use later

	        // We build a single BufferGeometry with .groups from multiple primitives
	        // because all primitives share the same attributes/morph/mode and have indices.

	        primitives = [ primitives[ 0 ] ];

	        // Sets .groups and combined indices to a geometry later in this method.

	    }

	    function createDracoPrimitive( primitive ) {

	        return extensions[ EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION ]
	            .decodePrimitive( primitive, parser )
	            .then( function ( geometry ) {

	                return addPrimitiveAttributes$1( geometry, primitive, parser );

	            } );

	    }

	    var pending = [];

	    for ( var i = 0, il = primitives.length; i < il; i ++ ) {

	        var primitive = primitives[ i ];

	        // See if we've already created this geometry
	        var cached = getCachedGeometry( cache, primitive );

	        if ( cached ) {

	            // Use the cached geometry if it exists
	            pending.push( cached );

	        } else {

	            var geometryPromise;

	            if ( primitive.extensions && primitive.extensions[ EXTENSIONS$1.KHR_DRACO_MESH_COMPRESSION ] ) {

	                // Use DRACO geometry if available
	                geometryPromise = createDracoPrimitive( primitive );

	            } else {

	                // Otherwise create a new geometry
	                geometryPromise = addPrimitiveAttributes$1( new THREE.BufferGeometry(), primitive, parser );

	            }

	            // Cache this geometry
	            cache.push( { primitive: primitive, promise: geometryPromise } );

	            pending.push( geometryPromise );

	        }

	    }

	    return Promise.all( pending ).then( function ( geometries ) {

	        if ( isMultiPass ) {

	            var baseGeometry = geometries[ 0 ];

	            // See if we've already created this combined geometry
	            var cache = parser.multiPassGeometryCache;
	            var cached = getCachedMultiPassGeometry( cache, baseGeometry, originalPrimitives );

	            if ( cached !== null ) return [ cached.geometry ];

	            // Cloning geometry because of index override.
	            // Attributes can be reused so cloning by myself here.
	            var geometry = new THREE.BufferGeometry();

	            geometry.name = baseGeometry.name;
	            geometry.userData = baseGeometry.userData;

	            for ( var key in baseGeometry.attributes ) geometry.addAttribute( key, baseGeometry.attributes[ key ] );
	            for ( var key in baseGeometry.morphAttributes ) geometry.morphAttributes[ key ] = baseGeometry.morphAttributes[ key ];

	            var pendingIndices = [];

	            for ( var i = 0, il = originalPrimitives.length; i < il; i ++ ) {

	                pendingIndices.push( parser.getDependency( 'accessor', originalPrimitives[ i ].indices ) );

	            }

	            return Promise.all( pendingIndices ).then( function ( accessors ) {

	                var indices = [];
	                var offset = 0;

	                for ( var i = 0, il = originalPrimitives.length; i < il; i ++ ) {

	                    var accessor = accessors[ i ];

	                    for ( var j = 0, jl = accessor.count; j < jl; j ++ ) indices.push( accessor.array[ j ] );

	                    geometry.addGroup( offset, accessor.count, i );

	                    offset += accessor.count;

	                }

	                geometry.setIndex( indices );

	                cache.push( { geometry: geometry, baseGeometry: baseGeometry, primitives: originalPrimitives } );

	                return [ geometry ];

	            } );

	        } else if ( geometries.length > 1 && THREE.BufferGeometryUtils !== undefined ) {

	            // Tries to merge geometries with BufferGeometryUtils if possible

	            for ( var i = 1, il = primitives.length; i < il; i ++ ) {

	                // can't merge if draw mode is different
	                if ( primitives[ 0 ].mode !== primitives[ i ].mode ) return geometries;

	            }

	            // See if we've already created this combined geometry
	            var cache = parser.multiplePrimitivesCache;
	            var cached = getCachedCombinedGeometry( cache, geometries );

	            if ( cached ) {

	                if ( cached.geometry !== null ) return [ cached.geometry ];

	            } else {

	                var geometry = THREE.BufferGeometryUtils.mergeBufferGeometries( geometries, true );

	                cache.push( { geometry: geometry, baseGeometries: geometries } );

	                if ( geometry !== null ) return [ geometry ];

	            }

	        }

	        return geometries;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
	 */
	GLTFParser$1.prototype.loadMesh = function ( meshIndex ) {

	    var parser = this;
	    var json = this.json;
	    var extensions = this.extensions;

	    var meshDef = json.meshes[ meshIndex ];
	    var primitives = meshDef.primitives;

	    var pending = [];

	    for ( var i = 0, il = primitives.length; i < il; i ++ ) {

	        var material = primitives[ i ].material === undefined
	            ? createDefaultMaterial$1()
	            : this.getDependency( 'material', primitives[ i ].material );

	        pending.push( material );

	    }

	    return Promise.all( pending ).then( function ( originalMaterials ) {

	        return parser.loadGeometries( primitives ).then( function ( geometries ) {

	            var isMultiMaterial = geometries.length === 1 && geometries[ 0 ].groups.length > 0;

	            var meshes = [];

	            for ( var i = 0, il = geometries.length; i < il; i ++ ) {

	                var geometry = geometries[ i ];
	                var primitive = primitives[ i ];

	                // 1. create Mesh

	                var mesh;

	                var material = isMultiMaterial ? originalMaterials : originalMaterials[ i ];

	                if ( primitive.mode === WEBGL_CONSTANTS$1.TRIANGLES ||
	                    primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_STRIP ||
	                    primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_FAN ||
	                    primitive.mode === undefined ) {

	                    // .isSkinnedMesh isn't in glTF spec. See .markDefs()
	                    mesh = meshDef.isSkinnedMesh === true
	                        ? new THREE.SkinnedMesh( geometry, material )
	                        : new THREE.Mesh( geometry, material );

	                    if ( primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_STRIP ) {

	                        mesh.drawMode = THREE.TriangleStripDrawMode;

	                    } else if ( primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_FAN ) {

	                        mesh.drawMode = THREE.TriangleFanDrawMode;

	                    }

	                } else if ( primitive.mode === WEBGL_CONSTANTS$1.LINES ) {

	                    mesh = new THREE.LineSegments( geometry, material );

	                } else if ( primitive.mode === WEBGL_CONSTANTS$1.LINE_STRIP ) {

	                    mesh = new THREE.Line( geometry, material );

	                } else if ( primitive.mode === WEBGL_CONSTANTS$1.LINE_LOOP ) {

	                    mesh = new THREE.LineLoop( geometry, material );

	                } else if ( primitive.mode === WEBGL_CONSTANTS$1.POINTS ) {

	                    mesh = new THREE.Points( geometry, material );

	                } else {

	                    throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

	                }

	                if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

	                    updateMorphTargets$1( mesh, meshDef );

	                }

	                mesh.name = meshDef.name || ( 'mesh_' + meshIndex );

	                if ( geometries.length > 1 ) mesh.name += '_' + i;

	                assignExtrasToUserData$1( mesh, meshDef );

	                meshes.push( mesh );

	                // 2. update Material depending on Mesh and BufferGeometry

	                var materials = isMultiMaterial ? mesh.material : [ mesh.material ];

	                var useVertexColors = geometry.attributes.color !== undefined;
	                var useFlatShading = geometry.attributes.normal === undefined;
	                var useSkinning = mesh.isSkinnedMesh === true;
	                var useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
	                var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

	                for ( var j = 0, jl = materials.length; j < jl; j ++ ) {

	                    var material = materials[ j ];

	                    if ( mesh.isPoints ) {

	                        var cacheKey = 'PointsMaterial:' + material.uuid;

	                        var pointsMaterial = parser.cache.get( cacheKey );

	                        if ( ! pointsMaterial ) {

	                            pointsMaterial = new THREE.PointsMaterial();
	                            THREE.Material.prototype.copy.call( pointsMaterial, material );
	                            pointsMaterial.color.copy( material.color );
	                            pointsMaterial.map = material.map;
	                            pointsMaterial.lights = false; // PointsMaterial doesn't support lights yet

	                            parser.cache.add( cacheKey, pointsMaterial );

	                        }

	                        material = pointsMaterial;

	                    } else if ( mesh.isLine ) {

	                        var cacheKey = 'LineBasicMaterial:' + material.uuid;

	                        var lineMaterial = parser.cache.get( cacheKey );

	                        if ( ! lineMaterial ) {

	                            lineMaterial = new THREE.LineBasicMaterial();
	                            THREE.Material.prototype.copy.call( lineMaterial, material );
	                            lineMaterial.color.copy( material.color );
	                            lineMaterial.lights = false; // LineBasicMaterial doesn't support lights yet

	                            parser.cache.add( cacheKey, lineMaterial );

	                        }

	                        material = lineMaterial;

	                    }

	                    // Clone the material if it will be modified
	                    if ( useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

	                        var cacheKey = 'ClonedMaterial:' + material.uuid + ':';

	                        if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
	                        if ( useSkinning ) cacheKey += 'skinning:';
	                        if ( useVertexColors ) cacheKey += 'vertex-colors:';
	                        if ( useFlatShading ) cacheKey += 'flat-shading:';
	                        if ( useMorphTargets ) cacheKey += 'morph-targets:';
	                        if ( useMorphNormals ) cacheKey += 'morph-normals:';

	                        var cachedMaterial = parser.cache.get( cacheKey );

	                        if ( ! cachedMaterial ) {

	                            cachedMaterial = material.isGLTFSpecularGlossinessMaterial
	                                ? extensions[ EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].cloneMaterial( material )
	                                : material.clone();

	                            if ( useSkinning ) cachedMaterial.skinning = true;
	                            if ( useVertexColors ) cachedMaterial.vertexColors = THREE.VertexColors;
	                            if ( useFlatShading ) cachedMaterial.flatShading = true;
	                            if ( useMorphTargets ) cachedMaterial.morphTargets = true;
	                            if ( useMorphNormals ) cachedMaterial.morphNormals = true;

	                            parser.cache.add( cacheKey, cachedMaterial );

	                        }

	                        material = cachedMaterial;

	                    }

	                    materials[ j ] = material;

	                    // workarounds for mesh and geometry

	                    if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

	                        console.log( 'THREE.GLTFLoader: Duplicating UVs to support aoMap.' );
	                        geometry.addAttribute( 'uv2', new THREE.BufferAttribute( geometry.attributes.uv.array, 2 ) );

	                    }

	                    if ( material.isGLTFSpecularGlossinessMaterial ) {

	                        // for GLTFSpecularGlossinessMaterial(ShaderMaterial) uniforms runtime update
	                        mesh.onBeforeRender = extensions[ EXTENSIONS$1.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].refreshUniforms;

	                    }

	                }

	                mesh.material = isMultiMaterial ? materials : materials[ 0 ];

	            }

	            if ( meshes.length === 1 ) {

	                return meshes[ 0 ];

	            }

	            var group = new THREE.Group();

	            for ( var i = 0, il = meshes.length; i < il; i ++ ) {

	                group.add( meshes[ i ] );

	            }

	            return group;

	        } );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	GLTFParser$1.prototype.loadCamera = function ( cameraIndex ) {

	    var camera;
	    var cameraDef = this.json.cameras[ cameraIndex ];
	    var params = cameraDef[ cameraDef.type ];

	    if ( ! params ) {

	        console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
	        return;

	    }

	    if ( cameraDef.type === 'perspective' ) {

	        camera = new THREE.PerspectiveCamera( THREE.Math.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

	    } else if ( cameraDef.type === 'orthographic' ) {

	        camera = new THREE.OrthographicCamera( params.xmag / - 2, params.xmag / 2, params.ymag / 2, params.ymag / - 2, params.znear, params.zfar );

	    }

	    if ( cameraDef.name !== undefined ) camera.name = cameraDef.name;

	    assignExtrasToUserData$1( camera, cameraDef );

	    return Promise.resolve( camera );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */
	GLTFParser$1.prototype.loadSkin = function ( skinIndex ) {

	    var skinDef = this.json.skins[ skinIndex ];

	    var skinEntry = { joints: skinDef.joints };

	    if ( skinDef.inverseBindMatrices === undefined ) {

	        return Promise.resolve( skinEntry );

	    }

	    return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

	        skinEntry.inverseBindMatrices = accessor;

	        return skinEntry;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<THREE.AnimationClip>}
	 */
	GLTFParser$1.prototype.loadAnimation = function ( animationIndex ) {

	    var json = this.json;

	    var animationDef = json.animations[ animationIndex ];

	    var pendingNodes = [];
	    var pendingInputAccessors = [];
	    var pendingOutputAccessors = [];
	    var pendingSamplers = [];
	    var pendingTargets = [];

	    for ( var i = 0, il = animationDef.channels.length; i < il; i ++ ) {

	        var channel = animationDef.channels[ i ];
	        var sampler = animationDef.samplers[ channel.sampler ];
	        var target = channel.target;
	        var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
	        var input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
	        var output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

	        pendingNodes.push( this.getDependency( 'node', name ) );
	        pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
	        pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
	        pendingSamplers.push( sampler );
	        pendingTargets.push( target );

	    }

	    return Promise.all( [

	        Promise.all( pendingNodes ),
	        Promise.all( pendingInputAccessors ),
	        Promise.all( pendingOutputAccessors ),
	        Promise.all( pendingSamplers ),
	        Promise.all( pendingTargets )

	    ] ).then( function ( dependencies ) {

	        var nodes = dependencies[ 0 ];
	        var inputAccessors = dependencies[ 1 ];
	        var outputAccessors = dependencies[ 2 ];
	        var samplers = dependencies[ 3 ];
	        var targets = dependencies[ 4 ];

	        var tracks = [];

	        for ( var i = 0, il = nodes.length; i < il; i ++ ) {

	            var node = nodes[ i ];
	            var inputAccessor = inputAccessors[ i ];
	            var outputAccessor = outputAccessors[ i ];
	            var sampler = samplers[ i ];
	            var target = targets[ i ];

	            if ( node === undefined ) continue;

	            node.updateMatrix();
	            node.matrixAutoUpdate = true;

	            var TypedKeyframeTrack;

	            switch ( PATH_PROPERTIES$1[ target.path ] ) {

	                case PATH_PROPERTIES$1.weights:

	                    TypedKeyframeTrack = THREE.NumberKeyframeTrack;
	                    break;

	                case PATH_PROPERTIES$1.rotation:

	                    TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
	                    break;

	                case PATH_PROPERTIES$1.position:
	                case PATH_PROPERTIES$1.scale:
	                default:

	                    TypedKeyframeTrack = THREE.VectorKeyframeTrack;
	                    break;

	            }

	            var targetName = node.name ? node.name : node.uuid;

	            var interpolation = sampler.interpolation !== undefined ? INTERPOLATION$1[ sampler.interpolation ] : THREE.InterpolateLinear;

	            var targetNames = [];

	            if ( PATH_PROPERTIES$1[ target.path ] === PATH_PROPERTIES$1.weights ) {

	                // node can be THREE.Group here but
	                // PATH_PROPERTIES.weights(morphTargetInfluences) should be
	                // the property of a mesh object under group.

	                node.traverse( function ( object ) {

	                    if ( object.isMesh === true && object.morphTargetInfluences ) {

	                        targetNames.push( object.name ? object.name : object.uuid );

	                    }

	                } );

	            } else {

	                targetNames.push( targetName );

	            }

	            // KeyframeTrack.optimize() will modify given 'times' and 'values'
	            // buffers before creating a truncated copy to keep. Because buffers may
	            // be reused by other tracks, make copies here.
	            for ( var j = 0, jl = targetNames.length; j < jl; j ++ ) {

	                var track = new TypedKeyframeTrack(
	                    targetNames[ j ] + '.' + PATH_PROPERTIES$1[ target.path ],
	                    THREE.AnimationUtils.arraySlice( inputAccessor.array, 0 ),
	                    THREE.AnimationUtils.arraySlice( outputAccessor.array, 0 ),
	                    interpolation
	                );

	                // Here is the trick to enable custom interpolation.
	                // Overrides .createInterpolant in a factory method which creates custom interpolation.
	                if ( sampler.interpolation === 'CUBICSPLINE' ) {

	                    track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

	                        // A CUBICSPLINE keyframe in glTF has three output values for each input value,
	                        // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
	                        // must be divided by three to get the interpolant's sampleSize argument.

	                        return new GLTFCubicSplineInterpolant$1( this.times, this.values, this.getValueSize() / 3, result );

	                    };

	                    // Workaround, provide an alternate way to know if the interpolant type is cubis spline to track.
	                    // track.getInterpolation() doesn't return valid value for custom interpolant.
	                    track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

	                }

	                tracks.push( track );

	            }

	        }

	        var name = animationDef.name !== undefined ? animationDef.name : 'animation_' + animationIndex;

	        return new THREE.AnimationClip( name, undefined, tracks );

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<THREE.Object3D>}
	 */
	GLTFParser$1.prototype.loadNode = function ( nodeIndex ) {

	    var json = this.json;
	    var extensions = this.extensions;
	    var parser = this;

	    var meshReferences = json.meshReferences;
	    var meshUses = json.meshUses;

	    var nodeDef = json.nodes[ nodeIndex ];

	    return new Promise( function ( resolve ) {

	        // .isBone isn't in glTF spec. See .markDefs
	        if ( nodeDef.isBone === true ) {

	            resolve( new THREE.Bone() );

	        } else if ( nodeDef.mesh !== undefined ) {

	            parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

	                var node;

	                if ( meshReferences[ nodeDef.mesh ] > 1 ) {

	                    var instanceNum = meshUses[ nodeDef.mesh ] ++;

	                    node = mesh.clone();
	                    node.name += '_instance_' + instanceNum;

	                    // onBeforeRender copy for Specular-Glossiness
	                    node.onBeforeRender = mesh.onBeforeRender;

	                    for ( var i = 0, il = node.children.length; i < il; i ++ ) {

	                        node.children[ i ].name += '_instance_' + instanceNum;
	                        node.children[ i ].onBeforeRender = mesh.children[ i ].onBeforeRender;

	                    }

	                } else {

	                    node = mesh;

	                }

	                resolve( node );

	            } );

	        } else if ( nodeDef.camera !== undefined ) {

	            parser.getDependency( 'camera', nodeDef.camera ).then( resolve );

	        } else if ( nodeDef.extensions
	            && nodeDef.extensions[ EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL ]
	            && nodeDef.extensions[ EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL ].light !== undefined ) {

	            parser.getDependency( 'light', nodeDef.extensions[ EXTENSIONS$1.KHR_LIGHTS_PUNCTUAL ].light ).then( resolve );

	        } else {

	            resolve( new THREE.Object3D() );

	        }

	    } ).then( function ( node ) {

	        if ( nodeDef.name !== undefined ) {

	            node.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );

	        }

	        assignExtrasToUserData$1( node, nodeDef );

	        if ( nodeDef.extensions ) addUnknownExtensionsToUserData$1( extensions, node, nodeDef );

	        if ( nodeDef.matrix !== undefined ) {

	            var matrix = new THREE.Matrix4();
	            matrix.fromArray( nodeDef.matrix );
	            node.applyMatrix( matrix );

	        } else {

	            if ( nodeDef.translation !== undefined ) {

	                node.position.fromArray( nodeDef.translation );

	            }

	            if ( nodeDef.rotation !== undefined ) {

	                node.quaternion.fromArray( nodeDef.rotation );

	            }

	            if ( nodeDef.scale !== undefined ) {

	                node.scale.fromArray( nodeDef.scale );

	            }

	        }

	        return node;

	    } );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<THREE.Scene>}
	 */
	GLTFParser$1.prototype.loadScene = function () {

	    // scene node hierachy builder

	    function buildNodeHierachy( nodeId, parentObject, json, parser ) {

	        var nodeDef = json.nodes[ nodeId ];

	        return parser.getDependency( 'node', nodeId ).then( function ( node ) {

	            if ( nodeDef.skin === undefined ) return node;

	            // build skeleton here as well

	            var skinEntry;

	            return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

	                skinEntry = skin;

	                var pendingJoints = [];

	                for ( var i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

	                    pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

	                }

	                return Promise.all( pendingJoints );

	            } ).then( function ( jointNodes ) {

	                var meshes = node.isGroup === true ? node.children : [ node ];

	                for ( var i = 0, il = meshes.length; i < il; i ++ ) {

	                    var mesh = meshes[ i ];

	                    var bones = [];
	                    var boneInverses = [];

	                    for ( var j = 0, jl = jointNodes.length; j < jl; j ++ ) {

	                        var jointNode = jointNodes[ j ];

	                        if ( jointNode ) {

	                            bones.push( jointNode );

	                            var mat = new THREE.Matrix4();

	                            if ( skinEntry.inverseBindMatrices !== undefined ) {

	                                mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

	                            }

	                            boneInverses.push( mat );

	                        } else {

	                            console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

	                        }

	                    }

	                    mesh.bind( new THREE.Skeleton( bones, boneInverses ), mesh.matrixWorld );

	                }
	                return node;

	            } );

	        } ).then( function ( node ) {

	            // build node hierachy

	            parentObject.add( node );

	            var pending = [];

	            if ( nodeDef.children ) {

	                var children = nodeDef.children;

	                for ( var i = 0, il = children.length; i < il; i ++ ) {

	                    var child = children[ i ];
	                    pending.push( buildNodeHierachy( child, node, json, parser ) );

	                }

	            }

	            return Promise.all( pending );

	        } );

	    }

	    return function loadScene( sceneIndex ) {

	        var json = this.json;
	        var extensions = this.extensions;
	        var sceneDef = this.json.scenes[ sceneIndex ];
	        var parser = this;

	        var scene = new THREE.Scene();
	        if ( sceneDef.name !== undefined ) scene.name = sceneDef.name;

	        assignExtrasToUserData$1( scene, sceneDef );

	        if ( sceneDef.extensions ) addUnknownExtensionsToUserData$1( extensions, scene, sceneDef );

	        var nodeIds = sceneDef.nodes || [];

	        var pending = [];

	        for ( var i = 0, il = nodeIds.length; i < il; i ++ ) {

	            pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

	        }

	        return Promise.all( pending ).then( function () {

	            return scene;

	        } );

	    };

	}();

	function RenderTexture(widthValue, heightValue, depthValue) {
	    Texture.call(this);
	    this.instClassType = RenderTexture.classType;
	    this.name='Texture';
	    this.id = 0;
	    this.filePath = "";
	    this.__height = widthValue;
	    this.__width = heightValue;
	    this._imp = null;
	    this._checkImp();
	}

	RenderTexture.classType = 'RenderTexture';

	RenderTexture.prototype = Object.assign( Object.create( Texture.prototype ), {
	    isRenderTexture:true,
	    _assignData:function(data){
	        this.id = data.id;
	        this.__height = data.height;
	        this.__width = data.width;
	    },

	    _checkImp:function()
	    {
	        let realWidth = this._imp?this._imp.width:0;
	        let realHeight = this._imp?this._imp.height:0;
	        if(realHeight != this.__height ||realWidth != this.__width)
	        {
	            if(this.__height == 0 || this.__width == 0)
	            {
	                this._imp = null;
	            }
	            else {
	                this._imp = new THREE.WebGLRenderTarget(this.__width, this.__height/*, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBFormat }*/);
	            }
	        }
	    },

	    ReadPixels : function(x, y, width, height, buffer)
	    {
	        this.__offScreenRenderer.readRenderTargetPixels(this._imp, x, y, width, height, buffer);
	    }
	} );

	if(typeof document !== "undefined")
	{
	    RenderTexture.prototype.__offScreenRenderer = new THREE.WebGLRenderer( { antialias: true } );
	    RenderTexture.prototype.__offScreenRenderer.setPixelRatio( window.devicePixelRatio );
	    RenderTexture.prototype.__offScreenRenderer.shadowMap.enabled = true;
	    RenderTexture.prototype.__offScreenRenderer.shadowMap.gammaOutput = true;
	}

	/**
	 * @author ZhuLin
	 */

	Sprite.CoordinateSystem = {
	    Cartesian: "Cartesian",     //笛卡尔坐标系
	    Screen: "Screen",           //屏幕坐标系
	};


	function Sprite() {
	    Texture.call(this);
	    this.instClassType = Sprite.classType;

	    this._spriteData = null;

	    this._overriddenPixelsPerUnit = null;

	    this._overriddenPivot = null;

	    this._flipX = false;

	    this._flipY = false;

	    Object.defineProperty(this, 'texture', {

	        get: function () {
	            //Note this is not a "deep copy", the image is shared.
	            let cloned = this._imp.clone();
	            cloned.needsUpdate = true;
	            return cloned;
	        },

	    });

	    /**如果有合法的外部设定值，使用该值，否则使用sprite data 中定义的值 */
	    Object.defineProperty(this, 'pixelsPerUnit', {

	        get: function () {
	            return this._overriddenPixelsPerUnit || this._spriteData.pixelsPerUnit;
	        },

	        set: function (value) {
	            this._overriddenPixelsPerUnit = value;
	        }

	    });

	    Object.defineProperty(this, 'uv', {

	        get: function () {
	            return this.getUVRectOfFrame(0);
	        },

	    });

	    Object.defineProperty(this, 'borderInUV', {

	        get: function () {
	            return this.getBorderInUVRectOfFrame(0);
	        },

	    });

	    Object.defineProperty(this, 'pivot', {

	        get: function () {
	            return this.getPivotOfFrame(0);
	        },
	        set: function (value) {
	            this._overriddenPivot = value;
	        }
	    });

	    Object.defineProperty(this, 'bounds', {

	        get: function () {
	            return this.getBoundsOfFrame(0);
	        },

	    });

	    Object.defineProperty(this, 'borderInBounds', {

	        get: function () {
	            return this.getBorderInBoundsOfFrame(0);
	        },

	    });

	    Object.defineProperty(this, "flipX", {
	        get: function () {
	            return this._flipX;
	        },

	        set: function (value) {
	            this._flipX = value;
	        }
	    });

	    Object.defineProperty(this, "flipY", {
	        get: function () {
	            return this._flipY;
	        },

	        set: function (value) {
	            this._flipY = value;
	        }
	    });

	}

	ExtendType(Sprite, Texture, {
	    isSprite: true,

	    _assignData: function (data) {
	        this.id = data.id;
	        this.filePath = data.filePath;
	    },

	    _coordinateSystemAdjust: function (spriteData) {
	        let coordinate = spriteData.hasOwnProperty("coordinateSystem") ?
	            spriteData.coordinateSystem : Sprite.CoordinateSystem.Cartesian;

	        if (Sprite.CoordinateSystem.Screen === coordinate) {
	            spriteData.frames.forEach(element => {
	                element.rect[1] = spriteData.file.size.h - (element.rect[1] + element.rect[3]);
	            });
	        }

	        return spriteData;
	    },

	    fromJson: function (jsonObj) {
	        this._spriteData = this._coordinateSystemAdjust(jsonObj);

	        // this._imp = AssetManager.instance._getNativeTexture(this._spriteData.file.url);

	        let texture = AssetManager.instance.getTextureByID(this._spriteData.file.assetId);
	        this._imp = texture ? texture._imp : null;
	    },

	    /**如果有合法的外部设定Pivot值，使用该值，否则使用sprite data 中定义的值 */
	    getPivotOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];

	        let retPivot = this._overriddenPivot ?
	            this._overriddenPivot.clone() : new THREE.Vector2(
	                frameData.pivot[0],
	                frameData.pivot[1],
	            );

	        return this._pivotConsiderFlip(retPivot);
	    },

	    getBoundsOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];
	        let frameWidth = frameData.rect[2] / this.pixelsPerUnit;
	        let frameHeight = frameData.rect[3] / this.pixelsPerUnit;

	        let pivot = this.getPivotOfFrame(frameIndex);

	        return new THREE.Vector4(
	            -pivot.x * frameWidth,
	            -pivot.y * frameHeight,
	            (1 - pivot.x) * frameWidth,
	            (1 - pivot.y) * frameHeight,
	        );
	    },

	    getBorderInBoundsOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];

	        return this._borderConsiderFlip(new THREE.Vector4(
	            frameData.border[0] / this.pixelsPerUnit,
	            frameData.border[1] / this.pixelsPerUnit,
	            frameData.border[2] / this.pixelsPerUnit,
	            frameData.border[3] / this.pixelsPerUnit,
	        ));
	    },

	    getWidthOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];
	        return frameData.rect[2];
	    },

	    getHeightOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];
	        return frameData.rect[3];
	    },

	    getUVRectOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];
	        let atlasWidth = this._imp.image.width;
	        let atlasHeight = this._imp.image.height;

	        return this._rectConsiderFlip(new THREE.Vector4(
	            frameData.rect[0] / atlasWidth,
	            frameData.rect[1] / atlasHeight,
	            (frameData.rect[0] + frameData.rect[2]) / atlasWidth,
	            (frameData.rect[1] + frameData.rect[3]) / atlasHeight,
	        ), 1.0, 1.0);
	    },

	    getBorderInUVRectOfFrame: function (frameIndex) {
	        let frameData = this._spriteData.frames[frameIndex];
	        let atlasWidth = this._imp.image.width;
	        let atlasHeight = this._imp.image.height;

	        return this._borderConsiderFlip(new THREE.Vector4(
	            frameData.border[0] / atlasWidth,
	            frameData.border[1] / atlasHeight,
	            frameData.border[2] / atlasWidth,
	            frameData.border[3] / atlasHeight,
	        ));
	    },

	    _pivotConsiderFlip: function (value) {
	        return value.set(
	            this._flipX ? 1 - value.x : value.x,
	            this._flipY ? 1 - value.y : value.y,
	        );
	    },

	    _borderConsiderFlip: function (value) {
	        return value.set(
	            this._flipX ? value.z : value.x,
	            this._flipY ? value.w : value.y,
	            this._flipX ? value.x : value.z,
	            this._flipY ? value.y : value.w,
	        );
	    },

	    _rectConsiderFlip: function (value, width, height) {
	        return value.set(
	            this._flipX ? width - value.z : value.x,
	            this._flipY ? height - value.w : value.y,
	            this._flipX ? width - value.x : value.z,
	            this._flipY ? height - value.y : value.w,
	        );
	    },
	});

	function Bounds(centerVec3, sizeVec3)
	{
	    this.center = centerVec3 === undefined?new Vector3:new Vector3(centerVec3.x, centerVec3.y, centerVec3.z);
	    this.extents = sizeVec3 === undefined?new Vector3:new Vector3(sizeVec3.x, sizeVec3.y, sizeVec3.z);

	    Object.defineProperty(this, "max",{
	        get:function () {
	            let maxValue = new Vector3();
	            maxValue.x = this.center.x + this.extents.x;
	            maxValue.y = this.center.y + this.extents.y;
	            maxValue.z = this.center.z + this.extents.z;
	            return maxValue;
	        }
	    });

	    Object.defineProperty(this, "min",{
	        get:function () {
	            let minValue = new Vector3();
	            minValue.x = this.center.x - this.extents.x;
	            minValue.y = this.center.y - this.extents.y;
	            minValue.z = this.center.z - this.extents.z;
	            return minValue;
	        }
	    });
	}

	var _typeLookup = function () {
	    var result = {};
	    var names = ["Array", "Object", "Function", "Date", "RegExp", "Float32Array"];
	    for (var i = 0; i < names.length; i++) {
	        result["[object " + names[i] + "]"] = names[i].toLowerCase();
	    }
	    return result;
	}();

	let type = function (obj) {
	    if (obj === null) {
	        return "null";
	    }
	    var type = typeof obj;
	    if (type === "undefined" || type === "number" || type === "string" || type === "boolean") {
	        return type;
	    }
	    return _typeLookup[Object.prototype.toString.call(obj)];
	};

	let extend = function (target, ex) {
	    var prop, copy;
	    for (prop in ex) {
	        copy = ex[prop];
	        if ( type(copy) == "object") {
	            target[prop] = extend({}, copy);
	        } else {
	            if ( type(copy) == "array") {
	                target[prop] = extend([], copy);
	            } else {
	                target[prop] = copy;
	            }
	        }
	    }
	    return target;
	};
	/*
	 *
	 * @enum pc.CURVE
	 * @name pc.CURVE_SMOOTHSTEP
	 * @description A smooth step interpolation scheme.
	 */
	var CURVE_SMOOTHSTEP = 1;
	/**
	 * @enum pc.CURVE
	 * @name pc.CURVE_CATMULL
	 * @description A Catmull-Rom spline interpolation scheme.
	 */
	var CURVE_CATMULL = 2;
	/* *
	 * @enum pc.CURVE
	 * @name pc.CURVE_CARDINAL
	 * @description A cardinal spline interpolation scheme.
	 */
	var CURVE_CARDINAL = 3;


	/**
	 * @constructor Web3DEngine.Curve
	 * @name Web3DEngine.Curve
	 * @classdesc A curve is a collection of keys (time/value pairs). The shape of the
	 * curve is defined by its type that specifies an interpolation scheme for the keys.
	 * @description Creates a new curve.
	 * @param {Number[]} [data] An array of keys (pairs of numbers with the time first and
	 * value second)
	 * @property {Number} length The number of keys in the curve. [read only]
	 */

	function Curve(data) {
	    this.keys = [];
	    this.type = CURVE_SMOOTHSTEP;

	    this.tension = 0.5; // used for CURVE_CARDINAL

	    if (data) {
	        for (var i = 0; i < data.length - 1; i += 2) {
	            this.keys.push([data[i], data[i + 1]]);
	        }
	    }

	    this.sort();
	}

	/**
	 * Enum for Curve.ENMU_Type.
	 * @readonly
	 * @enum
	 * @name Web3DEngine.Curve#ENMU_Type
	 * @description enmu type .
	 */
	/**
	 * @enum Web3DEngine.Curve.ENMU_Type.CURVE_LINEAR
	 * @name Web3DEngine.Curve.ENMU_Type#CURVE_LINEAR
	 * @description A linear interpolation scheme.
	 */
	/**
	 * @enum Web3DEngine.Curve.ENMU_Type.CURVE_SMOOTHSTEP
	 * @name Web3DEngine.Curve.ENMU_Type#CURVE_SMOOTHSTEP
	 * @description A smooth step interpolation scheme.
	 */
	/**
	 * @enum Web3DEngine.Curve.ENMU_Type.CURVE_CATMULL
	 * @name Web3DEngine.Curve.ENMU_Type#CURVE_CATMULL
	 * @description A Catmull - Rom spline interpolation scheme;
	 Web3DEngine.Curve.ENMU_TypeCURVE.CURVE_CATMULL
	 */
	/**
	 * @enum Web3DEngine.Curve.ENMU_Type.CURVE_CARDINAL
	 * @name Web3DEngine.Curve.ENMU_Type#CURVE_CARDINAL
	 * @description A cardinal spline interpolation scheme.
	 */

	Curve.ENMU_Type = {
	    CURVE_LINEAR : 0,
	    CURVE_SMOOTHSTEP : 1,
	    CURVE_CATMULL : 2,
	    CURVE_CARDINAL : 3
	};

	Object.assign(Curve.prototype, {
	    /**
	     * @function
	     * @name Web3DEngine.Curve#add
	     * @description Add a new key to the curve.
	     * @param {Number} time Time to add new key
	     * @param {Number} value Value of new key
	     * @returns {Number[]} [time, value] pair
	     */
	    add: function (time, value) {
	        var keys = this.keys;
	        var len = keys.length;
	        var i = 0;

	        for (; i < len; i++) {
	            if (keys[i][0] > time) {
	                break;
	            }
	        }

	        var key = [time, value];
	        this.keys.splice(i, 0, key);
	        return key;
	    },

	    /**
	     * @function
	     * @name Web3DEngine.Curve# get
	     * @description Return a specific key.
	     * @param {Number} index The index of the key to return
	     * @returns {Number[]} The key at the specified index
	     */
	    get: function (index) {
	        return this.keys[index];
	    },

	    /**
	     * @function
	     * @name Web3DEngine.Curve# sort
	     * @description Sort keys by time.
	     */
	    sort: function () {
	        this.keys.sort(function (a, b) {
	            return a[0] - b[0];
	        });
	    },

	    /**
	     * @function
	     * @name Web3DEngine.Curve# value
	     * @description Returns the interpolated value of the curve at specified time.
	     * @param {Number} time The time at which to calculate the value
	     * @returns {Number} The interpolated value
	     */
	    value: function (time) {
	        var i;
	        var keys = this.keys;
	        var len = keys.length;

	        // no keys
	        if (!len) {
	            return 0;
	        }

	        // Clamp values before first and after last key
	        if (time < keys[0][0]) {
	            return keys[0][1];
	        } else if (time > keys[len - 1][0]) {
	            return keys[len - 1][1];
	        }

	        var leftTime = 0;
	        var leftValue = len ? keys[0][1] : 0;

	        var rightTime = 1;
	        var rightValue = 0;

	        for (i = 0; i < len; i++) {
	            // early exit check
	            if (keys[i][0] === time) {
	                return keys[i][1];
	            }

	            rightValue = keys[i][1];

	            if (time < keys[i][0]) {
	                rightTime = keys[i][0];
	                break;
	            }

	            leftTime = keys[i][0];
	            leftValue = keys[i][1];
	        }

	        var div = rightTime - leftTime;
	        var interpolation = (div === 0 ? 0 : (time - leftTime) / div);

	        if (this.type === CURVE_SMOOTHSTEP) {
	            interpolation *= interpolation * (3 - 2 * interpolation);
	        } else if (this.type === CURVE_CATMULL || this.type === CURVE_CARDINAL) {
	            var p1 = leftValue;
	            var p2 = rightValue;
	            var p0 = p1 + (p1 - p2); // default control points are extended back/forward from existing points
	            var p3 = p2 + (p2 - p1);

	            var dt1 = rightTime - leftTime;
	            var dt0 = dt1;
	            var dt2 = dt1;

	            // back up index to left key
	            if (i > 0) {
	                i--;
	            }

	            if (i > 0) {
	                p0 = keys[i - 1][1];
	                dt0 = keys[i][0] - keys[i - 1][0];
	            }

	            if (len > i + 1) {
	                dt1 = keys[i + 1][0] - keys[i][0];
	            }

	            if (len > i + 2) {
	                dt2 = keys[i + 2][0] - keys[i + 1][0];
	                p3 = keys[i + 2][1];
	            }

	            // normalize p0 and p3 to be equal time with p1->p2
	            p0 = p1 + (p0 - p1) * dt1 / dt0;
	            p3 = p2 + (p3 - p2) * dt1 / dt2;

	            if (this.type === CURVE_CATMULL) {
	                return this._interpolateCatmullRom(p0, p1, p2, p3, interpolation);
	            }

	            return this._interpolateCardinal(p0, p1, p2, p3, interpolation, this.tension);
	        }

	        return THREE.Math.lerp(leftValue, rightValue, interpolation);
	    },

	    _interpolateHermite: function (p0, p1, t0, t1, s) {
	        var s2 = s * s;
	        var s3 = s * s * s;
	        var h0 = 2 * s3 - 3 * s2 + 1;
	        var h1 = -2 * s3 + 3 * s2;
	        var h2 = s3 - 2 * s2 + s;
	        var h3 = s3 - s2;

	        return p0 * h0 + p1 * h1 + t0 * h2 + t1 * h3;
	    },

	    _interpolateCardinal: function (p0, p1, p2, p3, s, t) {
	        var t0 = t * (p2 - p0);
	        var t1 = t * (p3 - p1);

	        return this._interpolateHermite(p1, p2, t0, t1, s);
	    },

	    _interpolateCatmullRom: function (p0, p1, p2, p3, s) {
	        return this._interpolateCardinal(p0, p1, p2, p3, s, 0.5);
	    },

	    closest: function (time) {
	        var keys = this.keys;
	        var length = keys.length;
	        var min = 2;
	        var result = null;

	        for (var i = 0; i < length; i++) {
	            var diff = THREE.Math.abs(time - keys[i][0]);
	            if (min >= diff) {
	                min = diff;
	                result = keys[i];
	            } else {
	                break;
	            }
	        }

	        return result;
	    },

	    /**
	     * @function
	     * @name Web3DEngine.Curve# clone
	     * @description Returns a clone of the specified curve object.
	     * @returns { Web3DEngine.Curve } A clone of the specified curve
	     */
	    clone: function () {
	        var result = new Curve();
	        result.keys = extend(result.keys, this.keys);
	        result.type = this.type;
	        return result;
	    },

	    quantize: function (precision) {
	        precision = THREE.Math.max(precision, 2);

	        var values = new Float32Array(precision);
	        var step = 1.0 / (precision - 1);

	        // quantize graph to table of interpolated values
	        for (var i = 0; i < precision; i++) {
	            var value = this.value(step * i);
	            values[i] = value;
	        }

	        return values;
	    }
	});

	Object.defineProperty(Curve.prototype, 'length', {
	    get: function () {
	        return this.keys.length;
	    }
	});

	/**
	 * @constructor
	 * @name Web3DEngine.CurveSet
	 * @classdesc A curve set is a collection of curves.
	 * @description Creates a new curve set.
	 * @param {Array} [curveKeys] An array of arrays of keys (pairs of numbers with
	 * the time first and value second).
	 */
	var CurveSet = function () {
	    var i;

	    this.curves = [];
	    this._type = Curve.ENMU_Type.CURVE_SMOOTHSTEP;

	    if (arguments.length > 1) {
	        for (i = 0; i < arguments.length; i++) {
	            this.curves.push(new Curve(arguments[i]));
	        }
	    } else {
	        if (arguments.length === 0) {
	            this.curves.push(new Curve());
	        } else {
	            var arg = arguments[0];
	            if ( type(arg) === 'number') {
	                for (i = 0; i < arg; i++) {
	                    this.curves.push(new Curve());
	                }
	            } else {
	                for (i = 0; i < arg.length; i++) {
	                    this.curves.push(new Curve(arg[i]));
	                }
	            }
	        }
	    }
	};

	Object.assign(CurveSet.prototype, {
	    /**
	     * @function
	     * @name pc.CurveSet#get
	     * @description Return a specific curve in the curve set.
	     * @param {Number} index The index of the curve to return
	     * @returns {pc.Curve} The curve at the specified index
	     */
	    get: function (index) {
	        return this.curves[index];
	    },

	    /**
	     * @function
	     * @name pc.CurveSet#value
	     * @description Returns the interpolated value of all curves in the curve
	     * set at the specified time.
	     * @param {Number} time The time at which to calculate the value
	     * @param {Array} [result] The interpolated curve values at the specified time.
	     * If this parameter is not supplied, the function allocates a new array internally
	     * to return the result.
	     * @returns {Array} The interpolated curve values at the specified time
	     */
	    value: function (time, result) {
	        var length = this.curves.length;
	        result = result || [];
	        result.length = length;

	        for (var i = 0; i < length; i++) {
	            result[i] = this.curves[i].value(time);
	        }

	        return result;
	    },

	    /**
	     * @function
	     * @name pc.CurveSet#clone
	     * @description Returns a clone of the specified curve set object.
	     * @returns {pc.CurveSet} A clone of the specified curve set
	     */
	    clone: function () {
	        var result = new CurveSet();

	        result.curves = [];
	        for (var i = 0; i < this.curves.length; i++) {
	            result.curves.push(this.curves[i].clone());
	        }

	        result._type = this._type;

	        return result;
	    },

	    quantize: function (precision) {
	        precision = Math.max(precision, 2);

	        var numCurves = this.curves.length;
	        var values = new Float32Array(precision * numCurves);
	        var step = 1.0 / (precision - 1);
	        var temp = [];

	        for (var i = 0; i < precision; i++) { // quantize graph to table of interpolated values
	            var value = this.value(step * i, temp);
	            if (numCurves == 1) {
	                values[i] = value[0];
	            } else {
	                for (var j = 0; j < numCurves; j++) {
	                    values[i * numCurves + j] = value[j];
	                }
	            }
	        }

	        return values;
	    }
	});

	/**
	 * @readonly
	 * @name pc.CurveSet#length
	 * @type Number
	 * @description The number of curves in the curve set.
	 */
	Object.defineProperty(CurveSet.prototype, 'length', {
	    get: function () {
	        return this.curves.length;
	    }
	});

	/**
	 * @name pc.CurveSet#type
	 * @type Number
	 * @description The interpolation scheme applied to all curves in the curve set. Can be:
	 * <ul>
	 *     <li>pc.CURVE_LINEAR</li>
	 *     <li>pc.CURVE_SMOOTHSTEP</li>
	 *     <li>pc.CURVE_CATMULL</li>
	 *     <li>pc.CURVE_CARDINAL</li>
	 * </ul>
	 */
	Object.defineProperty(CurveSet.prototype, 'type', {
	    get: function () {
	        return this._type;
	    },

	    set: function (value) {
	        this._type = value;
	        for (var i = 0; i < this.curves.length; i++) {
	            this.curves[i].type = value;
	        }
	    }
	});

	/**
	 * @author ZhuLin
	 */

	SpriteRenderer.DEBUG = false;
	SpriteRenderer.BUFFER_GEOMETRY_MAX_POINTS = 256;
	SpriteRenderer.DEFAULT_SIZE = new THREE.Vector2(64, 64);
	SpriteRenderer.DrawMode = {
	    Simple: "Simple",       //简单拉伸
	    Sliced: "Sliced",       //九宫拉伸
	    Tiled: "Tiled",         //平铺拉伸
	};

	SpriteRenderer._oneWhiteDot = null;
	Object.defineProperty(SpriteRenderer, "oneWhiteDotTexture", {
	    get: function () {
	        if (null === SpriteRenderer._oneWhiteDot) {
	            // create a buffer with color data

	            let width = 1;
	            let height = 1;
	            let size = width * height;
	            let data = new Uint8Array(3 * size);
	            let color = new THREE.Color(0xffff00);

	            let r = Math.floor(color.r * 255);
	            let g = Math.floor(color.g * 255);
	            let b = Math.floor(color.b * 255);

	            for (var i = 0; i < size; i++) {

	                var stride = i * 3;

	                data[stride] = r;
	                data[stride + 1] = g;
	                data[stride + 2] = b;

	            }

	            // used the buffer to create a DataTexture

	            SpriteRenderer._oneWhiteDot = new THREE.DataTexture(data, width, height, THREE.RGBFormat);
	            SpriteRenderer._oneWhiteDot.needsUpdate = true;
	        }
	        return SpriteRenderer._oneWhiteDot;
	    }
	});

	function SpriteRenderer(go) {
	    Renderer.call(this, go);

	    this.instClassType = SpriteRenderer.classType;

	    this._dirty = false;
	    this._sprite = null;
	    this._drawMode = SpriteRenderer.DrawMode.Simple;
	    this._currentFrameIndex = 0;
	    this._size = new THREE.Vector2(1, 1);

	    this._flipX = false;
	    this._flipY = false;

	    //create default mesh
	    this._imp = createDefaultSpriteMesh();
	    go._imp.add(this._imp);
	    //apply other value
	    this._imp.layers.set(this.gameObject.layer);
	    this._imp.userData.engineComponent = this;
	    this._imp.visible = this.enabled;

	    //center point
	    this._center = new THREE.Vector2(0, 0);

	    go.addEventListener(Event$1.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Event$1.REMOVECOMPONENT, this, this.__onRemoveComponent);

	    this.addEventListener(Event$1.DESTROY, this, this.__onDestroyComponent);

	    Object.defineProperty(this, "sprite", {
	        get: function () {
	            return this._sprite;
	        },

	        set: function (value) {
	            this._sprite = value;

	            //set original size
	            let bounds = this._sprite.bounds;
	            this._size.set(
	                bounds.z - bounds.x,
	                bounds.w - bounds.y,
	            );

	            //set texture
	            this._imp.material.setValues({
	                "map": this._sprite.texture,
	            });

	            this.frame = 0; //this operation will call "setDirty()"
	        }
	    });

	    Object.defineProperty(this, "frame", {
	        get: function () {
	            return this._currentFrameIndex;
	        },

	        set: function (value) {
	            this._currentFrameIndex = value;

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "size", {
	        get: function () {
	            return this._size.clone();
	        },

	        set: function (value) {
	            this._size.copy(value);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "center", {
	        get: function () {
	            return this._center.clone();
	        },
	    });

	    Object.defineProperty(this, "color", {
	        get: function () {
	            return this._imp.material.color.clone();
	        },

	        set: function (value) {
	            this._imp.material.setValues({
	                "color": value,
	            });
	        }
	    });

	    Object.defineProperty(this, "opacity", {
	        get: function () {
	            return this._imp.material.opacity;
	        },

	        set: function (value) {
	            this._imp.material.setValues({
	                "opacity": value,
	            });
	        }
	    });

	    Object.defineProperty(this, "flipX", {
	        get: function () {
	            return this._flipX;
	        },

	        set: function (value) {
	            this._flipX = value;

	            this._imp.material.map.repeat.x = value ? -1 : 1;

	            if (this._sprite) {
	                this._sprite.flipX = value;
	            }

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "flipY", {
	        get: function () {
	            return this._flipY;
	        },

	        set: function (value) {
	            this._flipY = value;

	            this._imp.material.map.repeat.y = value ? -1 : 1;

	            if (this._sprite) {
	                this._sprite.flipY = value;
	            }

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "material", {
	        get: function () {
	            return this._imp.material;
	        },

	        set: function (value) {
	            value.setValues({
	                "map": this._imp.material.map,
	            });

	            this._imp.material = value;
	        }
	    });

	    Object.defineProperty(this, "drawMode", {
	        get: function () {
	            return this._drawMode;
	        },

	        set: function (value) {
	            this._drawMode = value;
	            this.setDirty();
	        }
	    });
	}

	function createDefaultSpriteMesh() {
	    let geometry = new THREE.BufferGeometry();
	    let drawCount = 2 * 3; //Two triangles
	    /** For non-indexed BufferGeometry, count is the number of vertices to render.
	     * For indexed BufferGeometry, count is the number of indices to render.*/
	    geometry.setDrawRange(0, drawCount);

	    let sprtVerticesArray = new Float32Array(SpriteRenderer.BUFFER_GEOMETRY_MAX_POINTS * 3);
	    sprtVerticesArray.set([
	        -SpriteRenderer.DEFAULT_SIZE.x / 2, -SpriteRenderer.DEFAULT_SIZE.y / 2, 0.0,
	        SpriteRenderer.DEFAULT_SIZE.x / 2, -SpriteRenderer.DEFAULT_SIZE.y / 2, 0.0,
	        SpriteRenderer.DEFAULT_SIZE.x / 2, SpriteRenderer.DEFAULT_SIZE.y / 2, 0.0,
	        -SpriteRenderer.DEFAULT_SIZE.x / 2, SpriteRenderer.DEFAULT_SIZE.y / 2, 0.0,
	    ]);

	    let sprtUVsArray = new Float32Array(SpriteRenderer.BUFFER_GEOMETRY_MAX_POINTS * 2);
	    sprtUVsArray.set([
	        0, 0,
	        1, 0,
	        1, 1,
	        0, 1,
	    ]);

	    //SpriteRenderer.BUFFER_GEOMETRY_MAX_POINTS * 2 * 3) seems enough .
	    let sprtIndicesArray = new Uint32Array(SpriteRenderer.BUFFER_GEOMETRY_MAX_POINTS * 2);
	    sprtIndicesArray.set([
	        0, 1, 2, 2, 3, 0,
	    ]);

	    geometry.addAttribute('position', new THREE.BufferAttribute(sprtVerticesArray, 3));
	    geometry.addAttribute('uv', new THREE.BufferAttribute(sprtUVsArray, 2));
	    geometry.setIndex(new THREE.BufferAttribute(sprtIndicesArray, 1));

	    //Contents of the buffer are likely to be used often and not change often, so set set dynamic to false.
	    geometry.attributes.position.setDynamic(false);
	    geometry.attributes.uv.setDynamic(false);

	    let result = new THREE.Mesh(geometry);

	    result.material.setValues({
	        "map": SpriteRenderer.oneWhiteDotTexture,
	        "color": 0xffffff,
	        "transparent": true,
	    });

	    return result;

	}

	ExtendType(SpriteRenderer, Renderer, {
	    isSpriteRenderer: true,

	    __onAddComponent: function () {
	    },

	    __onRemoveComponent: function () {
	    },

	    __onDestroyComponent: function (event) {

	        if (this._imp != null) {

	            if (this._imp.material &&
	                this._imp.material.map &&
	                this._imp.material.map !== SpriteRenderer.oneWhiteDotTexture) {
	                this._imp.material.map.dispose();
	            }

	            if (this._imp.material) {
	                this._imp.material.dispose();
	            }

	            if (this._imp.geometry) {
	                this._imp.geometry.dispose();
	            }

	            this._imp.parent.remove(this._imp);

	            this._imp = null;
	        }

	        this.gameObject.removeEventListener(Event$1.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Event$1.REMOVECOMPONENT, this, this.__onRemoveComponent);

	        this.removeEventListener(Event$1.DESTROY, this, this.__onDestroyComponent);
	    },

	    setDirty: function () {
	        this._dirty = true;
	        this.update(); //noupdate mode.
	    },

	    _updateSpriteMesh() {

	        let sprtPos = this._imp.geometry.attributes.position;
	        let sprtUVs = this._imp.geometry.attributes.uv;
	        let sprtIndices = this._imp.geometry.index;


	        if (this._sprite) {

	            let offset = this.size.multiply(
	                this._sprite.getPivotOfFrame(this._currentFrameIndex)
	            ).negate();

	            let uvRect = this._sprite.getUVRectOfFrame(this._currentFrameIndex);
	            let uvBorder = this._sprite.getBorderInUVRectOfFrame(this._currentFrameIndex);
	            let uvInnerRect = new THREE.Vector4(
	                uvRect.x + uvBorder.x,
	                uvRect.y + uvBorder.y,
	                uvRect.z - uvBorder.z,
	                uvRect.w - uvBorder.w,
	            );
	            let borderInBounds = this._sprite.getBorderInBoundsOfFrame(this._currentFrameIndex);
	            let borderScale = new THREE.Vector2(1, 1);

	            let outerFrame = new THREE.Vector4(
	                offset.x,
	                offset.y,
	                offset.x + this._size.x,
	                offset.y + this._size.y,
	            );
	            let innerFrame = outerFrame.clone(); //初始化为outerFrame

	            let bounds;
	            let tileSize;
	            let scaledBoderUV;
	            let uvInnerSize;

	            let drawCount = this._imp.geometry.drawRange.count;

	            //记录中心点位置
	            this._center.set(
	                (outerFrame.z - outerFrame.x) / 2,
	                (outerFrame.w - outerFrame.y) / 2,
	            );

	            switch (this._drawMode) {
	                case SpriteRenderer.DrawMode.Simple:

	                    sprtPos.setXYZ(0, outerFrame.x, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(1, outerFrame.z, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(2, outerFrame.z, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(3, outerFrame.x, outerFrame.w, 0.0);

	                    sprtUVs.setXY(0, uvRect.x, uvRect.y);
	                    sprtUVs.setXY(1, uvRect.z, uvRect.y);
	                    sprtUVs.setXY(2, uvRect.z, uvRect.w);
	                    sprtUVs.setXY(3, uvRect.x, uvRect.w);


	                    sprtIndices.set([
	                        0, 1, 2,
	                        2, 3, 0,
	                    ]);

	                    drawCount = 2 * 3; //Two triangles
	                    break;

	                case SpriteRenderer.DrawMode.Sliced:

	                    borderScale.set(
	                        Math.min(this._size.x / (borderInBounds.x + borderInBounds.z), 1),
	                        Math.min(this._size.y / (borderInBounds.y + borderInBounds.w), 1),
	                    );

	                    innerFrame.set(
	                        outerFrame.x + borderInBounds.x * borderScale.x,
	                        outerFrame.y + borderInBounds.y * borderScale.y,
	                        outerFrame.z - borderInBounds.z * borderScale.x,
	                        outerFrame.w - borderInBounds.w * borderScale.y,
	                    );

	                    sprtPos.setXYZ(0, outerFrame.x, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(1, outerFrame.z, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(2, outerFrame.z, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(3, outerFrame.x, outerFrame.w, 0.0);

	                    sprtPos.setXYZ(4, innerFrame.x, innerFrame.y, 0.0);
	                    sprtPos.setXYZ(5, innerFrame.z, innerFrame.y, 0.0);
	                    sprtPos.setXYZ(6, innerFrame.z, innerFrame.w, 0.0);
	                    sprtPos.setXYZ(7, innerFrame.x, innerFrame.w, 0.0);

	                    sprtPos.setXYZ(8, innerFrame.x, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(9, innerFrame.z, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(10, outerFrame.z, innerFrame.y, 0.0);
	                    sprtPos.setXYZ(11, outerFrame.z, innerFrame.w, 0.0);
	                    sprtPos.setXYZ(12, innerFrame.z, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(13, innerFrame.x, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(14, outerFrame.x, innerFrame.w, 0.0);
	                    sprtPos.setXYZ(15, outerFrame.x, innerFrame.y, 0.0);


	                    sprtUVs.setXY(0, uvRect.x, uvRect.y);
	                    sprtUVs.setXY(1, uvRect.z, uvRect.y);
	                    sprtUVs.setXY(2, uvRect.z, uvRect.w);
	                    sprtUVs.setXY(3, uvRect.x, uvRect.w);

	                    sprtUVs.setXY(4, uvInnerRect.x, uvInnerRect.y);
	                    sprtUVs.setXY(5, uvInnerRect.z, uvInnerRect.y);
	                    sprtUVs.setXY(6, uvInnerRect.z, uvInnerRect.w);
	                    sprtUVs.setXY(7, uvInnerRect.x, uvInnerRect.w);

	                    sprtUVs.setXY(8, uvInnerRect.x, uvRect.y);
	                    sprtUVs.setXY(9, uvInnerRect.z, uvRect.y);
	                    sprtUVs.setXY(10, uvRect.z, uvInnerRect.y);
	                    sprtUVs.setXY(11, uvRect.z, uvInnerRect.w);
	                    sprtUVs.setXY(12, uvInnerRect.z, uvRect.w);
	                    sprtUVs.setXY(13, uvInnerRect.x, uvRect.w);
	                    sprtUVs.setXY(14, uvRect.x, uvInnerRect.w);
	                    sprtUVs.setXY(15, uvRect.x, uvInnerRect.y);

	                    sprtIndices.set([
	                        //bottom left corner
	                        0, 8, 4,
	                        4, 15, 0,
	                        //bottom right corner
	                        9, 1, 10,
	                        10, 5, 9,
	                        //top right corner
	                        6, 11, 2,
	                        2, 12, 6,
	                        //top left corner
	                        14, 7, 13,
	                        13, 3, 14,
	                        //left border
	                        15, 4, 7,
	                        7, 14, 15,
	                        //bottom border
	                        8, 9, 5,
	                        5, 4, 8,
	                        //right border
	                        5, 10, 11,
	                        11, 6, 5,
	                        //top border
	                        7, 6, 12,
	                        12, 13, 7,
	                        //inner area
	                        4, 5, 6,
	                        6, 7, 4,
	                    ]);

	                    drawCount = 18 * 3; //18 triangles
	                    break;

	                case SpriteRenderer.DrawMode.Tiled:

	                    bounds = this._sprite.getBoundsOfFrame(this._currentFrameIndex);
	                    tileSize = new THREE.Vector2(
	                        bounds.z - bounds.x - (borderInBounds.x + borderInBounds.z),
	                        bounds.w - bounds.y - (borderInBounds.y + borderInBounds.w),
	                    );

	                    borderScale.set(
	                        Math.min(this._size.x / (borderInBounds.x + borderInBounds.z), 1),
	                        Math.min(this._size.y / (borderInBounds.y + borderInBounds.w), 1),
	                    );

	                    innerFrame.set(
	                        outerFrame.x + borderInBounds.x * borderScale.x,
	                        outerFrame.y + borderInBounds.y * borderScale.y,
	                        outerFrame.z - borderInBounds.z * borderScale.x,
	                        outerFrame.w - borderInBounds.w * borderScale.y,
	                    );

	                    uvInnerSize = new THREE.Vector2(
	                        uvInnerRect.z - uvInnerRect.x,
	                        uvInnerRect.w - uvInnerRect.y,
	                    );

	                    scaledBoderUV = new THREE.Vector4(
	                        uvBorder.x * borderScale.x,
	                        uvBorder.y * borderScale.y,
	                        uvBorder.z * borderScale.x,
	                        uvBorder.w * borderScale.y,
	                    );

	                    sprtPos.setXYZ(0, outerFrame.x, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(1, outerFrame.z, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(2, outerFrame.z, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(3, outerFrame.x, outerFrame.w, 0.0);

	                    sprtPos.setXYZ(4, innerFrame.x, innerFrame.y, 0.0);
	                    sprtPos.setXYZ(5, innerFrame.z, innerFrame.y, 0.0);
	                    sprtPos.setXYZ(6, innerFrame.z, innerFrame.w, 0.0);
	                    sprtPos.setXYZ(7, innerFrame.x, innerFrame.w, 0.0);

	                    sprtPos.setXYZ(8, innerFrame.x, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(9, innerFrame.z, outerFrame.y, 0.0);
	                    sprtPos.setXYZ(10, outerFrame.z, innerFrame.y, 0.0);
	                    sprtPos.setXYZ(11, outerFrame.z, innerFrame.w, 0.0);
	                    sprtPos.setXYZ(12, innerFrame.z, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(13, innerFrame.x, outerFrame.w, 0.0);
	                    sprtPos.setXYZ(14, outerFrame.x, innerFrame.w, 0.0);
	                    sprtPos.setXYZ(15, outerFrame.x, innerFrame.y, 0.0);


	                    sprtUVs.setXY(0, uvRect.x, uvRect.y);
	                    sprtUVs.setXY(1, uvInnerRect.z + scaledBoderUV.z, uvRect.y);
	                    sprtUVs.setXY(2, uvInnerRect.z + scaledBoderUV.z, uvInnerRect.w + scaledBoderUV.w);
	                    sprtUVs.setXY(3, uvRect.x, uvInnerRect.w + scaledBoderUV.w);

	                    sprtUVs.setXY(4, uvRect.x + scaledBoderUV.x, uvRect.y + scaledBoderUV.y);
	                    sprtUVs.setXY(5, uvInnerRect.z, uvRect.y + scaledBoderUV.y);
	                    sprtUVs.setXY(6, uvInnerRect.z, uvInnerRect.w);
	                    sprtUVs.setXY(7, uvRect.x + scaledBoderUV.x, uvInnerRect.w);

	                    sprtUVs.setXY(8, uvRect.x + scaledBoderUV.x, uvRect.y);
	                    sprtUVs.setXY(9, uvInnerRect.z, uvRect.y);
	                    sprtUVs.setXY(10, uvInnerRect.z + scaledBoderUV.z, uvRect.y + scaledBoderUV.y);
	                    sprtUVs.setXY(11, uvInnerRect.z + scaledBoderUV.z, uvInnerRect.w);
	                    sprtUVs.setXY(12, uvInnerRect.z, uvInnerRect.w + scaledBoderUV.w);
	                    sprtUVs.setXY(13, uvRect.x + scaledBoderUV.x, uvInnerRect.w + scaledBoderUV.w);
	                    sprtUVs.setXY(14, uvRect.x, uvInnerRect.w);
	                    sprtUVs.setXY(15, uvRect.x, uvRect.y + scaledBoderUV.y);

	                    sprtIndices.set([
	                        //bottom left corner
	                        0, 8, 4,
	                        4, 15, 0,
	                        //bottom right corner
	                        9, 1, 10,
	                        10, 5, 9,
	                        //top right corner
	                        6, 11, 2,
	                        2, 12, 6,
	                        //top left corner
	                        14, 7, 13,
	                        13, 3, 14,
	                    ]);

	                    drawCount = 8 * 3; //18 triangles

	                    let pointIndexBase = 16;
	                    let indexBase = 8 * 3;
	                    let repeatX, repeatY;
	                    let tileRect = new THREE.Vector4();
	                    //fill inner frame with tiles, only when it's visible.
	                    if (borderScale.width >= 1 && borderScale.height >= 1) {
	                        repeatX = Math.ceil((innerFrame.z - innerFrame.x) / tileSize.width);
	                        repeatY = Math.ceil((innerFrame.w - innerFrame.y) / tileSize.height);

	                        for (let iX = 0; iX < repeatX; ++iX) {
	                            for (let iY = 0; iY < repeatY; ++iY) {
	                                tileRect.setX(innerFrame.x + iX * tileSize.width);
	                                tileRect.setY(innerFrame.y + iY * tileSize.height);
	                                tileRect.setZ(Math.min(tileRect.x + tileSize.width, innerFrame.z));
	                                tileRect.setW(Math.min(tileRect.y + tileSize.height, innerFrame.w));

	                                //bottom left corner
	                                sprtPos.setXYZ(pointIndexBase, tileRect.x, tileRect.y, 0.0);
	                                sprtUVs.setXY(pointIndexBase, uvInnerRect.x, uvInnerRect.y);
	                                //bottom right corner
	                                sprtPos.setXYZ(pointIndexBase + 1, tileRect.z, tileRect.y, 0.0);
	                                sprtUVs.setXY(pointIndexBase + 1,
	                                    uvInnerRect.x + (tileRect.z - tileRect.x) / tileSize.width * uvInnerSize.width,
	                                    uvInnerRect.y,
	                                );
	                                //top right corner
	                                sprtPos.setXYZ(pointIndexBase + 2, tileRect.z, tileRect.w, 0.0);
	                                sprtUVs.setXY(pointIndexBase + 2,
	                                    uvInnerRect.x + (tileRect.z - tileRect.x) / tileSize.width * uvInnerSize.width,
	                                    uvInnerRect.y + (tileRect.w - tileRect.y) / tileSize.height * uvInnerSize.height,
	                                );
	                                //top left corner
	                                sprtPos.setXYZ(pointIndexBase + 3, tileRect.x, tileRect.w, 0.0);
	                                sprtUVs.setXY(pointIndexBase + 3,
	                                    uvInnerRect.x,
	                                    uvInnerRect.y + (tileRect.w - tileRect.y) / tileSize.height * uvInnerSize.height
	                                );

	                                //triangles
	                                sprtIndices.set(
	                                    [pointIndexBase, pointIndexBase + 1, pointIndexBase + 2],
	                                    indexBase,
	                                );
	                                sprtIndices.set(
	                                    [pointIndexBase + 2, pointIndexBase + 3, pointIndexBase],
	                                    indexBase + 3,
	                                );

	                                pointIndexBase += 4;
	                                indexBase += 2 * 3;
	                                drawCount += 2 * 3;     //2 more triangles.
	                            }
	                        }
	                    } else {
	                        if(SpriteRenderer.DEBUG) {
	                            console.log("Inner area not visible, skip filling.");
	                        }
	                    }

	                    //fill horizontal border with tiles, only when it's visible.
	                    if (borderScale.width >= 1 && borderScale.height > 0) {
	                        repeatX = Math.ceil((innerFrame.z - innerFrame.x) / tileSize.width);
	                        for (let i = 0; i < repeatX; ++i) {
	                            //top border
	                            tileRect.setX(innerFrame.x + i * tileSize.width);
	                            tileRect.setY(innerFrame.w);
	                            tileRect.setZ(Math.min(tileRect.x + tileSize.width, innerFrame.z));
	                            tileRect.setW(outerFrame.w);

	                            //bottom left corner
	                            sprtPos.setXYZ(pointIndexBase, tileRect.x, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase, uvInnerRect.x, uvInnerRect.w);
	                            //bottom right corner
	                            sprtPos.setXYZ(pointIndexBase + 1, tileRect.z, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 1,
	                                uvInnerRect.x + (tileRect.z - tileRect.x) / tileSize.width * uvInnerSize.width,
	                                uvInnerRect.w,
	                            );
	                            //top right corner
	                            sprtPos.setXYZ(pointIndexBase + 2, tileRect.z, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 2,
	                                uvInnerRect.x + (tileRect.z - tileRect.x) / tileSize.width * uvInnerSize.width,
	                                uvInnerRect.w + scaledBoderUV.w,
	                            );
	                            //top left corner
	                            sprtPos.setXYZ(pointIndexBase + 3, tileRect.x, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 3,
	                                uvInnerRect.x,
	                                uvInnerRect.w + scaledBoderUV.w,
	                            );

	                            //triangles
	                            sprtIndices.set(
	                                [pointIndexBase, pointIndexBase + 1, pointIndexBase + 2],
	                                indexBase,
	                            );
	                            sprtIndices.set(
	                                [pointIndexBase + 2, pointIndexBase + 3, pointIndexBase],
	                                indexBase + 3,
	                            );

	                            pointIndexBase += 4;
	                            indexBase += 2 * 3;
	                            drawCount += 2 * 3;     //2 more triangles.

	                            //bottom border
	                            tileRect.setX(innerFrame.x + i * tileSize.width);
	                            tileRect.setY(outerFrame.y);
	                            tileRect.setZ(Math.min(tileRect.x + tileSize.width, innerFrame.z));
	                            tileRect.setW(innerFrame.y);

	                            //bottom left corner
	                            sprtPos.setXYZ(pointIndexBase, tileRect.x, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase, uvInnerRect.x, uvRect.y);
	                            //bottom right corner
	                            sprtPos.setXYZ(pointIndexBase + 1, tileRect.z, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 1,
	                                uvInnerRect.x + (tileRect.z - tileRect.x) / tileSize.width * uvInnerSize.width,
	                                uvRect.y,
	                            );
	                            //top right corner
	                            sprtPos.setXYZ(pointIndexBase + 2, tileRect.z, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 2,
	                                uvInnerRect.x + (tileRect.z - tileRect.x) / tileSize.width * uvInnerSize.width,
	                                uvRect.y + scaledBoderUV.y,
	                            );
	                            //top left corner
	                            sprtPos.setXYZ(pointIndexBase + 3, tileRect.x, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 3,
	                                uvInnerRect.x,
	                                uvRect.y + scaledBoderUV.y,
	                            );

	                            //triangles
	                            sprtIndices.set(
	                                [pointIndexBase, pointIndexBase + 1, pointIndexBase + 2],
	                                indexBase,
	                            );
	                            sprtIndices.set(
	                                [pointIndexBase + 2, pointIndexBase + 3, pointIndexBase],
	                                indexBase + 3,
	                            );

	                            pointIndexBase += 4;
	                            indexBase += 2 * 3;
	                            drawCount += 2 * 3;     //2 more triangles.
	                        }
	                    } else {
	                        if(SpriteRenderer.DEBUG) {
	                            console.log("Horizontal border not visible, skip filling.");
	                        }
	                    }

	                    //fill vertical border with tiles, only when it's visible.
	                    if (borderScale.height >= 1 && borderScale.width > 0) {
	                        repeatY = Math.ceil((innerFrame.w - innerFrame.y) / tileSize.height);
	                        for (let i = 0; i < repeatY; ++i) {
	                            /** left border*/
	                            tileRect.setX(outerFrame.x);
	                            tileRect.setY(innerFrame.y + i * tileSize.height);
	                            tileRect.setZ(innerFrame.x);
	                            tileRect.setW(Math.min(tileRect.y + tileSize.height, innerFrame.w));

	                            //bottom left corner
	                            sprtPos.setXYZ(pointIndexBase, tileRect.x, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase, uvRect.x, uvInnerRect.y);
	                            //bottom right corner
	                            sprtPos.setXYZ(pointIndexBase + 1, tileRect.z, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 1,
	                                uvRect.x + scaledBoderUV.x,
	                                uvInnerRect.y,
	                            );
	                            //top right corner
	                            sprtPos.setXYZ(pointIndexBase + 2, tileRect.z, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 2,
	                                uvRect.x + scaledBoderUV.x,
	                                uvInnerRect.y + (tileRect.w - tileRect.y) / tileSize.height * uvInnerSize.height,
	                            );
	                            //top left corner
	                            sprtPos.setXYZ(pointIndexBase + 3, tileRect.x, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 3,
	                                uvRect.x,
	                                uvInnerRect.y + (tileRect.w - tileRect.y) / tileSize.height * uvInnerSize.height,
	                            );

	                            //triangles
	                            sprtIndices.set(
	                                [pointIndexBase, pointIndexBase + 1, pointIndexBase + 2],
	                                indexBase,
	                            );
	                            sprtIndices.set(
	                                [pointIndexBase + 2, pointIndexBase + 3, pointIndexBase],
	                                indexBase + 3,
	                            );

	                            pointIndexBase += 4;
	                            indexBase += 2 * 3;
	                            drawCount += 2 * 3;     //2 more triangles.

	                            /** right border*/
	                            tileRect.setX(innerFrame.z);
	                            tileRect.setY(innerFrame.y + i * tileSize.height);
	                            tileRect.setZ(outerFrame.z);
	                            tileRect.setW(Math.min(tileRect.y + tileSize.height, innerFrame.w));

	                            //bottom left corner
	                            sprtPos.setXYZ(pointIndexBase, tileRect.x, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase, uvInnerRect.z, uvInnerRect.y);
	                            //bottom right corner
	                            sprtPos.setXYZ(pointIndexBase + 1, tileRect.z, tileRect.y, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 1,
	                                uvInnerRect.z + scaledBoderUV.z,
	                                uvInnerRect.y,
	                            );
	                            //top right corner
	                            sprtPos.setXYZ(pointIndexBase + 2, tileRect.z, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 2,
	                                uvInnerRect.z + scaledBoderUV.z,
	                                uvInnerRect.y + (tileRect.w - tileRect.y) / tileSize.height * uvInnerSize.height,
	                            );
	                            //top left corner
	                            sprtPos.setXYZ(pointIndexBase + 3, tileRect.x, tileRect.w, 0.0);
	                            sprtUVs.setXY(pointIndexBase + 3,
	                                uvInnerRect.z,
	                                uvInnerRect.y + (tileRect.w - tileRect.y) / tileSize.height * uvInnerSize.height,
	                            );

	                            //triangles
	                            sprtIndices.set(
	                                [pointIndexBase, pointIndexBase + 1, pointIndexBase + 2],
	                                indexBase,
	                            );
	                            sprtIndices.set(
	                                [pointIndexBase + 2, pointIndexBase + 3, pointIndexBase],
	                                indexBase + 3,
	                            );

	                            pointIndexBase += 4;
	                            indexBase += 2 * 3;
	                            drawCount += 2 * 3;     //2 more triangles.
	                        }
	                    } else {
	                        if(SpriteRenderer.DEBUG) {
	                            console.log("Vertical border not visible, skip filling.");
	                        }
	                    }

	                    break;

	                default:
	                    break;
	            }

	            //update commit
	            sprtPos.needsUpdate = true;
	            sprtUVs.needsUpdate = true;
	            sprtIndices.needsUpdate = true;
	            this._imp.geometry.setDrawRange(0, drawCount);
	        } else {
	            //only effected by "size"
	            let scaledSize = this.size.multiply(SpriteRenderer.DEFAULT_SIZE);

	            sprtPos.setXYZ(0, -scaledSize.x / 2, -scaledSize.y / 2, 0.0);
	            sprtPos.setXYZ(1, scaledSize.x / 2, -scaledSize.y / 2, 0.0);
	            sprtPos.setXYZ(2, scaledSize.x / 2, scaledSize.y / 2, 0.0);
	            sprtPos.setXYZ(3, -scaledSize.x / 2, scaledSize.y / 2, 0.0);

	            sprtIndices.set([
	                0, 1, 2,
	                2, 3, 0,
	            ]);

	            sprtPos.needsUpdate = true;
	            // sprtIndices.needsUpdate = true;

	            let drawCount = 2 * 3; //Two triangles
	            this._imp.geometry.setDrawRange(0, drawCount);


	            this._center.set(0, 0);
	        }

	        this._imp.geometry.computeVertexNormals();
	        this._imp.geometry.computeBoundingSphere();
	    },

	    update: function (deltaTime) {
	        if (this._dirty) {
	            //update code here
	            if (this._sprite) ;
	            this._updateSpriteMesh();
	            this._dirty = false;
	        }
	    },
	});

	/**
	 * @author ZhuLin
	 */

	function AnimatedSpriteRenderer(go) {
	    SpriteRenderer.call(this, go);

	    this.instClassType = AnimatedSpriteRenderer.classType;

	    this._clips = {};

	    this._playingClip = null;

	    this._currentSeqenceIndex = 0;

	    this._playIntervalID = 0;

	    this._speed = 1;

	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyAnimatedSpriteRenderer);

	    Object.defineProperty(this, "speed", {
	        get: function () {
	            return this._speed;
	        },

	        set: function (value) {
	            this._speed = Math.max(value, 0.01);
	            this.pause();
	            this.resume();
	        }
	    });
	}

	ExtendType(AnimatedSpriteRenderer, SpriteRenderer, {
	    isAnimatedSpriteRenderer: true,

	    __onDestroyAnimatedSpriteRenderer: function (event) {
	        this.pause();
	        this.removeEventListener(Event.DESTROY, this, this.__onDestroyAnimatedSpriteRenderer);
	    },

	    addClips: function (jsonObj) {
	        jsonObj.clips.forEach(clip => {
	            this._clips[clip.name] = clip;
	        });
	    },

	    playClip: function (clipName){
	        if(this._clips.hasOwnProperty(clipName)){
	            this._playingClip = clipName;
	            this.play();
	        }
	    },

	    play:function(){
	        this.stop();
	        this.resume();
	    },

	    pause: function (){
	        if(0 !== this._playIntervalID){
	            //如有播放中的动画，中止
	            clearInterval(this._playIntervalID);
	            this._playIntervalID = 0;
	        }
	    },

	    resume: function(){
	        if(0 === this._playIntervalID){
	            this._playIntervalID = setInterval(() => {
	                let newSeqIndex = (this._currentSeqenceIndex + 1) % this._clips[this._playingClip].sequence.length;

	                this._setSequenceIndex(newSeqIndex);

	                if(this._clips[this._playingClip].sequence.length -1 == newSeqIndex &&
	                    !this._clips[this._playingClip].loop){
	                    //到最后一帧停止播放
	                    this.pause();
	                }
	            }, 1000 / this._clips[this._playingClip].frameRate / this._speed);
	        }
	    },

	    stop: function (){
	        this.pause();
	        this._setSequenceIndex(0);
	    },

	    _setSequenceIndex(seqIndex){
	        this.frame = this._clips[this._playingClip].sequence[seqIndex];
	        this._currentSeqenceIndex = seqIndex;
	    },
	});

	/*
	1、基于场景对象维护场景所有AudioListener，增加和删除时自动重设AudioListener
	2、根据AudioListener设置当前场景的监听者
	3、存在两个监听者给出警告
	4、当监听者发生改变通过消息刷新所有AudioSource
	*/

	function AudioManager() {
	    this.listenerList = new Array();
	    this.sourceList = new Array();
	    this._volume = 0.8;
	    this.activeListener = null;
	}

	AudioManager._instance = new AudioManager();

	Object.defineProperty(AudioManager, "instance",{
	    get:function () {
	        return AudioManager._instance;
	    }
	});

	Object.assign( AudioManager.prototype, {
	        addAudioListener: function (listener) {
	            if (this.activeListener != null) {
	                console.log("警告：场景中已存在AudioListener：" +
	                    listener.gameObject.name + "___" + this.activeListener.gameObject.name);
	                return;
	            }

	            //检查列表中是否存在listener，不存在则添加并重设Listener
	            var index = this.listenerList.indexOf(listener);
	            if (index == -1) {
	                this.listenerList.push(listener);
	                this.resetActiveListener();
	            }
	        },

	        removeAudioListener: function (listener) {
	            var index = this.listenerList.indexOf(listener);
	            if (!(index == -1)) {
	                this.listenerList.splice(index, 1);
	                if (listener == this.activeListener) {
	                    this.resetActiveListener();
	                }
	            } else {
	                console.log("removeAudioListener — listener no find:" + listener);
	            }
	        },

	        resetActiveListener: function () {
	            let newListener = null;
	            if (this.listenerList.length > 0) {
	                //将listenerList中最后一个listener激活
	                newListener = this.listenerList[this.listenerList.length - 1];
	            } else {
	                newListener = null;
	                console.log("警告：场景中无可用AudioListener");
	            }

	            if (this.activeListener != newListener) {
	                this.activeListener = newListener;
	                //通知所有AudioSource刷新Listener
	                for (let i = 0; i < this.sourceList.length; i++) {
	                    let source = this.sourceList[i];
	                    source.dispatchEvent({
	                        type: Event$1.CHANGEAUDIOLISTENER, data: this.activeListener
	                    });
	                }
	            }
	        },

	        getListener: function () {
	            return this.activeListener;
	        },

	        addAudioSource: function (audioSource) {
	            //检查列表中是否存在，不存在则添加
	            var index = this.sourceList.indexOf(audioSource);
	            if (index == -1) {
	                this.sourceList.push(audioSource);
	            }
	        },

	        removeAudioSource: function (audioSource) {
	            var index = this.sourceList.indexOf(audioSource);
	            if (!(index == -1)) {
	                this.sourceList.splice(index, 1);
	            }
	        },
	    }
	);

	Array.prototype.indexOf = function(val) {
	    for (var i = 0; i < this.length; i++) {
	        if (this[i] == val) return i;
	    }
	    return -1;
	};

	/**
	 * @class Web3DEngine.AudioListener
	 * @name Web3DEngine.AudioListener
	 * @classdesc AudioListener组件，表示3D世界中的音频侦听器，以便正确地听到3D定位的音频源。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 */
	function AudioListener(go) {
	    Component.call(this, go);
	    this.instClassType = AudioListener.classType;
	    this._imp = new THREE.AudioListener();

	    go._imp.add(this._imp);
	    go.addEventListener(Event$1.ACTIVATE, this, this._onActivate);
	    go.addEventListener(Event$1.DEACTIVATE, this, this._onDeactivate);
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);

	    //通知声音管理器添加AudioListener
	    AudioManager.instance.addAudioListener(this);

	    this._enabled = true;
	    Object.defineProperty(this, "enabled",{
	        get:function () {
	            return this._enabled;
	        },

	        set:function(value){
	            if(this._enabled === value)  return;
	            this._enabled = value;
	            var isEnabled = this.gameObject._selfActive && this.enabled;
	            this._imp.setMasterVolume(isEnabled ? 1 : 0);
	        }
	    });
	}
	ExtendType(AudioListener, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	    },

	    _onActivate:function()
	    {
	        var isEnabled = this.gameObject._selfActive && this.enabled;
	        this._imp.setMasterVolume(isEnabled ? 1 : 0);
	    },

	    _onDeactivate:function()
	    {
	        var isEnabled = this.gameObject._selfActive && this.enabled;
	        this._imp.setMasterVolume(isEnabled ? 1 : 0);
	    },

	    _handleDestroy:function(event)
	    {
	        AudioManager.instance.removeAudioListener(this);
	        this.gameObject._imp.remove(this._imp);
	        this._imp = null;
	    }
	});

	AudioListener.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enable',
	    default : true
	});

	/**
	 * @class Web3DEngine.AudioSource
	 * @name Web3DEngine.AudioSource
	 * @classdesc AudioSource组件，控制音频的播放。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Boolean } positional 如果为true，则音频将在空间中的实体位置播放，因此音频将受到AudioListener组件位置的影响。
	 * @property { AudioClip } audioClip 音频资源；
	 * @property { Boolean } loop  如果为true，则音频将在完成播放后重新启动。
	 * @property { Boolean } autoPlay 如果为true，则音频将在加载后立即开始播放
	 * @property { Number } distance 音频衰减停止时与AudioListener的最大距离。
	 * @property { Number } volume 用于修改播放音频的音量大小。
	 */
	function AudioSource(go) {
	    Component.call(this, go);
	    this.instClassType = AudioSource.classType;
	    this._imp = null;

	    //通知声音管理器添加AudioSource
	    AudioManager.instance.addAudioSource(this);

	    this._enabled = true;
	    Object.defineProperty(this, "enabled",{
	        get:function () {
	            return this._enabled;
	        },

	        set:function(value){
	            if(this._enabled === value)  return;
	            this._enabled = value;
	            var isEnabled = this.gameObject._selfActive && this.enabled;
	            this._imp.setVolume(isEnabled ? this._volume : 0);
	        }
	    });

	    /*————注册事件————*/
	    go.addEventListener(Event$1.ACTIVATE, this, this._onActivate);
	    go.addEventListener(Event$1.DEACTIVATE, this, this._onDeactivate);
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	    //AudioLinster发生改变通知消息
	    this.addEventListener(Event$1.CHANGEAUDIOLISTENER, this, this._changeAudioListener);

	    /*————编辑器属性————*/
	    //是否3D音效
	    this._isPositional = false;
	    Object.defineProperty(this, "positional",{
	        get:function () {
	            return this._isPositional;
	        },

	        set:function(value){
	            if(this._isPositional == value) return;
	            if(this._isPositional != value)
	            {
	                this._isPositional = value;
	                if(this._imp)
	                {
	                    this.resetAudio();
	                }
	            }
	        }
	    });

	    //音源
	    this._currentAudioClip = null;
	    Object.defineProperty(this, "audioClip",{
	        get:function () {
	            return this._currentAudioClip;
	        },

	        set: function (value) {
	            if(!(value instanceof AudioClip)) value = null;
	            if(this._currentAudioClip == value) return;

	            if(this._currentAudioClip)
	                this._currentAudioClip.removeEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	            this._currentAudioClip = value;
	            if(this._currentAudioClip)
	                this._currentAudioClip.addEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);

	            if(!this._imp)
	            {
	                this.resetAudio();
	            }
	            if(this._imp) {
	                if (this._imp.isPlaying)
	                    this.stop();
	                if(this._currentAudioClip)
	                    this._imp.setBuffer(this._currentAudioClip._imp);
	            }
	        }
	    });

	    //是否循环
	    this._isLoop = false;
	    Object.defineProperty(this, "loop",{
	        get:function () {
	            return this._isLoop;
	        },

	        set:function(value){
	            if(this._isLoop == value) return;
	            this._isLoop = value;
	            if(this._imp)
	            {
	                this._imp.setLoop(this._isLoop);
	            }
	        }
	    });

	    //

	    //是否自动播放
	    this._isAutoPlay = false;
	    Object.defineProperty(this, "autoPlay",{
	        get:function () {
	            return this._isAutoPlay;
	        },

	        set:function(value){
	            if(this._isAutoPlay == value) return;
	            this._isAutoPlay = value;
	            if(this._imp)
	            {
	                this._imp.autoplay = this._isAutoPlay;
	                if(!this._imp.isPlaying)
	                {
	                    this.play();
	                }
	            }
	        }
	    });

	    //播放距离
	    this._distance = 20;
	    Object.defineProperty(this, "distance",{
	        get:function () {
	            return this._distance;
	        },

	        set:function(value){
	            if(this._distance == value) return;
	            this._distance = value;
	            if(this._imp && this._isPositional)
	            {
	                this._imp.setRefDistance(this._distance);
	            }
	        }
	    });

	    //设置音量
	    this._volume = 1;
	    Object.defineProperty(this, "volume",{
	        get:function () {
	            return this._volume;
	        },

	        set:function(value){
	            if(this._volume == value) return;
	            this._volume = value;
	            if(this._imp) {
	                if (this._enabled)
	                    this._imp.setVolume(this._volume);
	            }
	        }
	    });
	}
	//判断Edit和GAME确定是否播放声音

	//接收消息播放声音

	ExtendType(AudioSource, Component, {
	    _copy: function (source) {
	        Component.prototype._copy.call(this, source);
	    },

	    _handleDestroy: function (event) {
	        //通知声音管理器添加AudioSource
	        AudioManager.instance.removeAudioSource(this);
	        this.stop();
	        if(this._currentAudioClip)
	            this._currentAudioClip.removeEventListener(Event$1.REMOVEASSET, this, this._assetRemoved);
	        this.gameObject._imp.remove(this._imp);
	        this._imp = null;
	    },

	    _assetRemoved: function (event) {
	        this.audioClip = null;
	    },

	    _onActivate:function()
	    {
	        var isEnabled = this.gameObject._selfActive && this.enabled;
	        this._imp.setVolume(isEnabled ? this._volume : 0);
	    },

	    _onDeactivate:function()
	    {
	        var isEnabled = this.gameObject._selfActive && this.enabled;
	        this._imp.setVolume(isEnabled ? this._volume : 0);
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AudioSource#play
	     * @description 播放音频。
	     */
	    //播放
	    play: function () {
	        if(this._imp)
	        {
	            this._imp.play();
	        }
	        else
	        {
	            this.resetAudio();
	            if(this._imp)
	            {
	                this._imp.play();
	            }
	        }
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AudioSource#stop
	     * @description 暂停播放音频。
	     */
	    //暂停
	    stop: function () {
	        if(this._imp)
	        {
	            if(this._imp.isPlaying)
	            	this._imp.stop();
	        }
	    },
	    /**
	     * @function
	     * @name Web3DEngine.AudioSource#resetAudio
	     * @description 重设Audio。
	     */
	    //重设Audio
	    resetAudio: function () {
	        let listener = AudioManager.instance.activeListener;

	        //移除当前Audio底层模块
	        if(this._imp != null)
	        {
	            this.stop();
	            this.gameObject._imp.remove(this._imp);
	            this._imp = null;
	        }

	        //添加Audio底层模块
	        if(listener != null)
	        {
	            if(this._isPositional)
	            {
	                this._imp = new THREE.PositionalAudio( listener._imp );
	                this._imp.setRefDistance(this._distance);
	            }
	            else
	            {
	                this._imp = new THREE.Audio( listener._imp );
	            }

	            this.gameObject._imp.add(this._imp);
	            if(this._currentAudioClip)
	            {
	                this._imp.setBuffer(this._currentAudioClip._imp);
	            }
	            this._imp.setLoop(this._isLoop);
	            this._imp.autoplay = this._isAutoPlay;
	            if(this._imp.autoplay)
	            {
	                this.play();
	            }
	            this._imp.setVolume(this._volume);
	        }
	    },

	    //变更AudioListener
	    _changeAudioListener: function (event) {
	        //非编辑器运行时则刷新audio
	        this.resetAudio();
	    },

	    //设置播放偏移量
	    setOffset: function (value) {
	        if (this._imp) {
	            if (this._enabled)
	                this._imp.offset = value;
	        }
	    }
	});

	AudioSource.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enable',
	    default : true
	});

	AudioSource.attributes.add('positional', {
	    type: 'boolean',
	    title: 'Positional',
	    default: false
	});

	AudioSource.attributes.add('loop', {
	    type: 'boolean',
	    title: 'Loop',
	    default: true
	});

	AudioSource.attributes.add('autoPlay', {
	    type: 'boolean',
	    title: 'AutoPlay',
	    default:false
	});

	AudioSource.attributes.add('distance', {
	    type: 'number',
	    title: 'Distance',
	    default: 20
	});

	AudioSource.attributes.add('volume', {
	    type: 'number',
	    title: 'volume',
	    default: 1
	});

	AudioSource.attributes.add('offset', {
	    type: 'number',
	    title: 'offset',
	    default: 0
	});

	AudioSource.attributes.add('audioClip', {
	    type: 'asset',
	    title: 'AudioClip',
	    default: false
	});

	/**
	 * @class Web3DEngine.Light
	 * @name Web3DEngine.Light
	 * @classdesc Light组件，使实体可以点亮场景。有三种类型的光：方向，点和点。定向灯是全球性的，因为它们被认为是无限远的并且照亮整个场景。
	 * 点光源和聚光灯是局部的，因为它们具有位置和范围。聚光灯是点光源的专门化，其中光以锥形而不是所有方向发射。灯光还可以投射阴影，为场景增添真实感。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { String } type 光照类型，平行光（"Directional"）、点光（"Point"）、聚光（"Spot"）；
	 * @property { Color } color 光的颜色。
	 * @property { Number } intensity 光的强度。
	 * @property { Number } range 点光和聚光的光照范围。
	 * @property { Number } spotAngle 聚光的光照角度。
	 * @property { Boolean } castShadow 如果启用，灯光将投射阴影。
	 * @property { Number } mapSize 灯光产生阴影贴图的尺寸大小
	 * @property { Number } shadowDistance 距离视点的距离，超过该距离不再渲染阴影。
	 * @property { Number } bias 用于调整由该光产生的阴影映射的外观的深度偏差。
	 * @property { Number } cullingMask 这个用来选择照亮的部分场景。
	 */
	function Light(go) {
	    Component.call(this, go);
	    this.instClassType = Light.classType;

	    this._enabled = true;
		this._mode = "Realtime";
	    this._color = 0xffffff;
	    this._intensity = 1;
	    this._range = 10.0;
	    this._spotAngle = 1;
	    this._decay = 2.0;
	    this._penumbra = 0.05;
	    this._type = Light.ENUM_LightType.Directional;
	    this._castShadow = false;
	    //阴影贴图尺寸
	    this._mapSize = 512;
	    //投影距离
	    this._shadowDistance = 300;
	    //阴影贴图偏差
	    this._bias = 0.0001;
	    this._imp = new THREE.DirectionalLight(this._color, this._intensity);
		this._imp.position.fromArray( Light.ENUM_LightPos.Directional );
	    this._imp.target = this.gameObject._imp;
	    this.__cullingMask = 0xffffffff;
	    this.__handleCullingMask();

	    this.gameObject._imp.add(this._imp);
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	}
	Light.ENUM_LightType = {
	    Spot:"Spot",
	    Directional:"Directional",
	    Point:"Point",
	};
	Light.ENUM_LightMode = {
	    Realtime:"Realtime",
	    Mixed:"Mixed",
	    Baked:"Baked",
	};
	Light.ENUM_LightPos = {
		Directional : [ 0,0, -3 ],
		Spot : [ 0, 0.1 , 0 ]
	}
	ExtendType(Light, Component, {
	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	        this.type = source.type;
	        this.color = source.color;
	        this.intensity = source.intensity;
	        this.range = source.range;
	        this.spotAngle = source.spotAngle;
	        this.shadowType = source.shadowType;
	    },

	    _handleDestroy:function(event)
	    {
	        this.gameObject._imp.remove(this._imp);
	    },

	    _resetShadow:function(source){
	        if(!this._castShadow) return;

	        this._imp.castShadow = true;
	        if(this._imp.isDirectionalLight)
	        {
	            this._imp.shadow.camera.far = this._shadowDistance;
	            this._imp.shadow.camera.left = -this._shadowDistance / 10;
	            this._imp.shadow.camera.bottom = -this._shadowDistance / 10;
	            this._imp.shadow.camera.right = this._shadowDistance / 10;
	            this._imp.shadow.camera.top = this._shadowDistance / 10;
	            this._imp.shadow.camera.updateProjectionMatrix();
	        }
	        else if(this._imp.isPointLight)
	        {
	            this._imp.shadow.camera.far = this._range;
	            this._imp.shadow.camera.updateProjectionMatrix();
	        }

	        //设置阴影贴图
	        this._imp.shadow.mapSize.width = this._mapSize;
	        this._imp.shadow.mapSize.height = this._mapSize;

	        //设置阴影偏差
	        this._imp.shadow.bias = this._bias;
	    },

	    __handleCullingMask:function(){

	        let cullingMaskValue = this.__cullingMask;
	        for(let index = 0; index < 32; ++index)
	        {
	            if(cullingMaskValue & 1)
	            {
	                this._imp.layers.enable(index);
	            }
	            else {
	                this._imp.layers.disable(index);
	            }
	            cullingMaskValue = (cullingMaskValue>>1);
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "enabled",{
	    get:function () {
	        return this._enabled;
	    },

	    set:function(value){
	        // if(this._enabled === value)  return;
	        this._enabled = value;
	        if(this._enabled)
	        {
	            this._imp.intensity = this._intensity;
	        }
	        else
	        {
	            this._imp.intensity = 0;
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "mode",{
	    get:function () {
	        return this._mode;
	    },

	    set:function(value){
	        if (!Light.ENUM_LightMode.hasOwnProperty(value) || this._mode === value)
	            return;
	        this._mode = value;
	        if(this._mode === Light.ENUM_LightMode.Baked)
	        {
	            this._imp.visible = false;
	        }
	        else
	        {
	            this._imp.visible = true;
	        }
	    }
	});
	Object.defineProperty(Light.prototype, "color",{
	    get:function () {
	        return this._color;
	    },

	    set:function(value){
	        if(this._color === value)  return;
	        this._color = value;
	        this._imp.color.set( this._color );
	    }
	});

	Object.defineProperty(Light.prototype, "intensity",{
	    get:function () {
	        return this._intensity;
	    },

	    set:function(value) {
	        if (this._intensity === value) return;
	        this._intensity = value;
	        if (this._enabled)
	            this._imp.intensity = this._intensity;
	    }
	});

	Object.defineProperty(Light.prototype, "range",{
	    get:function () {
	        //if( this._imp.isSpotLight || this._imp.isPointLight ){
	            return this._range;
	        //}
	    },

	    set:function(value){
	        if(this._range === value)  return;
	        this._range = value;

	        if(this._imp.isSpotLight || this._imp.isPointLight)
	        {
	            this._imp.distance = this._range;
	            if(this._imp.isPointLight)
	            {
	                this._imp.shadow.camera.far = this._range;
	                this._imp.shadow.camera.updateProjectionMatrix();
	            }
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "spotAngle",{
	    get:function () {
	       // if( this._imp.isSpotLight )
	            return this._spotAngle;
	    },

	    set:function(value){
	        if(this._spotAngle === value)  return;
	        this._spotAngle = value;

	        if(this._imp.isSpotLight)
	        {
	            this._imp.angle = this._spotAngle;
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "type",{
	    get:function () {
	        return this._type;
	    },

	    set:function(value){
	        if (!Light.ENUM_LightType.hasOwnProperty(value) || this._type === value)
	            return;

	        if(this._imp != null)
	        {
	            this.gameObject._imp.remove(this._imp);
	        }
	        this._type = value;
	        if(this._type === Light.ENUM_LightType.Spot)
	        {
	            this._imp = new THREE.SpotLight(this._color, this._intensity, this._range, this._spotAngle, this._penumbra, this._decay);
				this._imp.position.fromArray( Light.ENUM_LightPos.Spot );
				this._imp.target = this.gameObject._imp;
	        }
	        else if(this._type === Light.ENUM_LightType.Directional)
	        {
	            this._imp = new THREE.DirectionalLight(this._color, this._intensity);
				this._imp.position.fromArray( Light.ENUM_LightPos.Directional );
	            this._imp.target = this.gameObject._imp;
	        }
	        else if(this._type === Light.ENUM_LightType.Point)
	        {
	            this._imp = new THREE.PointLight(this._color, this._intensity, this._range, this._decay);
	        }

	        if(this._imp != null)
	        {
	            this.enabled = this._enabled;
	            this.gameObject._imp.add(this._imp);
	            this._resetShadow();  //设置灯光阴影
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "castShadow",{
	    get:function () {
	        return this._castShadow;
	    },

	    set:function(value){
	        if(this._castShadow === value)  return;
	        this._castShadow = value;
	        if(this._imp)
	        {
	            this._imp.castShadow = value;
	            this.enabled = this._enabled;
	            this.gameObject._imp.add(this._imp);
	            this._resetShadow();  //设置灯光阴影
	        }
	        if(this._imp != null)
	        {
	            this.enabled = this._enabled;
	            this.gameObject._imp.add(this._imp);
	            this._resetShadow();  //设置灯光阴影
	        }
	            this._imp.castShadow = value;
	    }
	});

	Object.defineProperty(Light.prototype, "mapSize",{
	    get:function () {
	        return this._mapSize;
	    },

	    set:function(value){
	        if(this._mapSize === value)  return;
	        this._mapSize = value;
	        if(this._imp)
	        {
	            this._imp.shadow.mapSize.width = value;
	            this._imp.shadow.mapSize.height = value;
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "shadowDistance",{
	    get:function () {
	        return this._shadowDistance;
	    },

	    set:function(value){
	        if(this._shadowDistance === value)  return;
	        this._shadowDistance = value;
	        if(this._imp.isDirectionalLight)
	        {
	            this._imp.shadow.camera.far = this._shadowDistance;
	            this._imp.shadow.camera.left = -this._shadowDistance / 10;
	            this._imp.shadow.camera.bottom = -this._shadowDistance / 10;
	            this._imp.shadow.camera.right = this._shadowDistance / 10;
	            this._imp.shadow.camera.top = this._shadowDistance / 10;
	            this._imp.shadow.camera.updateProjectionMatrix();
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "bias",{
	    get:function () {
	        return this._bias;
	    },

	    set:function(value){
	        if(this._bias === value)  return;
	        this._bias = value;
	        if(this._imp)
	        {
	            this._imp.shadow.bias = value;
	        }
	    }
	});

	Object.defineProperty(Light.prototype, "cullingMask",{
	    set:function(value)
	    {
	        if(value < 0 || value > 0xffffffff) return;
	        if(value !== this.__cullingMask)
	        {
	            this.__cullingMask = value;
	            this.__handleCullingMask();
	        }
	    },
	    get:function () {
	        return this.__cullingMask;
	    }
	});

	Light.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enabled',
	    default: true
	});

	Light.attributes.add('mode', {
	    type: 'string',
	    title: 'Mode',
	    default: "Realtime"
	});

	Light.attributes.add('color', {
	    type: 'rgb',
	    title: 'Color',
	    default: 0xffffff
	});

	Light.attributes.add('intensity', {
	    type: 'number',
	    title: 'Intensity',
	    default: 1
	});

	Light.attributes.add('range', {
	    type: 'number',
	    title: 'Range',
	    default: 10
	});

	Light.attributes.add('spotAngle', {
	    type: 'number',
	    title: 'SpotAngle',
	    default: 1
	});

	Light.attributes.add('type', {
	    type: 'string',
	    title: 'Type',
	    default: "Directional"
	});

	Light.attributes.add('castShadow', {
	    type: 'boolean',
	    title: 'CastShadow',
	    default: false
	});

	Light.attributes.add('mapSize', {
	    type: 'number',
	    title: 'MapSize',
	    default: 1024
	});

	Light.attributes.add('shadowDistance', {
	    type: 'number',
	    title: 'ShadowDistance',
	    default: 300
	});

	Light.attributes.add('bias', {
	    type: 'number',
	    title: 'Bias',
	    default: 0.0001
	});

	Light.attributes.add('cullingMask', {
	    type: 'number',
	    title: 'CullingMask',
	    default: 0xffffffff
	});

	/*
	 * GPU Particle System
	 * @author flimshaw - Charlie Hoey - http://charliehoey.com
	 *
	 * A simple to use, general purpose GPU system. Particles are spawn-and-forget with
	 * several options available, and do not require monitoring or cleanup after spawning.
	 * Because the paths of all particles are completely deterministic once spawned, the scale
	 * and direction of time is also variable.
	 *
	 * Currently uses a static wrapping perlin noise texture for turbulence, and a small png texture for
	 * particles, but adding support for a particle texture atlas or changing to a different type of turbulence
	 * would be a fairly light day's work.
	 *
	 * Shader and javascript packing code derrived from several Stack Overflow examples.
	 *
	 */

	var GPUParticleSystem = function ( options ) {

		THREE.Object3D.apply( this, arguments );

		options = options || {};

		// parse options and use defaults

		this.PARTICLE_COUNT = options.maxParticles || 1000000;
		this.PARTICLE_CONTAINERS = options.containerCount || 1;

		this.PARTICLE_NOISE_TEXTURE = options.particleNoiseTex || null;
		this.PARTICLE_SPRITE_TEXTURE = options.particleSpriteTex || null;
	    this.PARTICLE_CURSOR = 0;
	    this.time = 0;
	    this.particleContainers = [];
	    this.rand = [];

	    // custom vertex and fragement shader

	    var GPUParticleShader = {

	        vertexShader: [

	            'uniform float uTime;',
	            'uniform float uScale;',
	            'uniform sampler2D tNoise;',

	            'attribute vec3 positionStart;',
	            'attribute float startTime;',
	            'attribute vec3 velocity;',
	            'attribute float turbulence;',
	            'attribute vec3 color;',
	            'attribute float size;',
	            'attribute float lifeTime;',

	            'varying vec4 vColor;',
	            'varying float lifeLeft;',

	            'void main() {',

	            // unpack things from our attributes'

	            '	vColor = vec4( color, 1.0 );',

	            // convert our velocity back into a value we can use'

	            '	vec3 newPosition;',
	            '	vec3 v;',

	            '	float timeElapsed = uTime - startTime;',

	            '	lifeLeft = 1.0 - ( timeElapsed / lifeTime );',

	            '	gl_PointSize = ( uScale * size ) * lifeLeft;',

	            '	v.x = ( velocity.x - 0.5 ) * 3.0;',
	            '	v.y = ( velocity.y - 0.5 ) * 3.0;',
	            '	v.z = ( velocity.z - 0.5 ) * 3.0;',

	            '	newPosition = positionStart + ( v * 10.0 ) * timeElapsed;',

	            '	vec3 noise = texture2D( tNoise, vec2( newPosition.x * 0.015 + ( uTime * 0.05 ), newPosition.y * 0.02 + ( uTime * 0.015 ) ) ).rgb;',
	            '	vec3 noiseVel = ( noise.rgb - 0.5 ) * 30.0;',

	            '	newPosition = mix( newPosition, newPosition + vec3( noiseVel * ( turbulence * 5.0 ) ), ( timeElapsed / lifeTime ) );',

	            '	if( v.y > 0. && v.y < .05 ) {',

	            '		lifeLeft = 0.0;',

	            '	}',

	            '	if( v.x < - 1.45 ) {',

	            '		lifeLeft = 0.0;',

	            '	}',

	            '	if( timeElapsed > 0.0 ) {',

	            '		gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );',

	            '	} else {',

	            '		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
	            '		lifeLeft = 0.0;',
	            '		gl_PointSize = 0.;',

	            '	}',

	            '}'

	        ].join( '\n' ),

	        fragmentShader: [

	            'float scaleLinear( float value, vec2 valueDomain ) {',

	            '	return ( value - valueDomain.x ) / ( valueDomain.y - valueDomain.x );',

	            '}',

	            'float scaleLinear( float value, vec2 valueDomain, vec2 valueRange ) {',

	            '	return mix( valueRange.x, valueRange.y, scaleLinear( value, valueDomain ) );',

	            '}',

	            'varying vec4 vColor;',
	            'varying float lifeLeft;',

	            'uniform sampler2D tSprite;',

	            'void main() {',

	            '	float alpha = 0.;',

	            '	if( lifeLeft > 0.995 ) {',

	            '		alpha = scaleLinear( lifeLeft, vec2( 1.0, 0.995 ), vec2( 0.0, 1.0 ) );',

	            '	} else {',

	            '		alpha = lifeLeft * 0.75;',

	            '	}',

	            '	vec4 tex = texture2D( tSprite, gl_PointCoord );',
	            // '	gl_FragColor = vec4( vColor.rgb * tex.a, alpha * tex.a );',
	            '	gl_FragColor = vec4( vColor.rgb * tex.a, alpha * tex.a ) * tex;',
	            // '	gl_FragColor = tex;',
	            '}'

	        ].join( '\n' )

	    };

	    // preload a million random numbers

	    var i;

		this.PARTICLES_PER_CONTAINER = Math.ceil( this.PARTICLE_COUNT / this.PARTICLE_CONTAINERS );

		for ( i = 1e5; i > 0; i -- ) {

			this.rand.push( Math.random() - 0.5 );

		}

		this.random = function () {

			return ++ i >= this.rand.length ? this.rand[ i = 1 ] : this.rand[ i ];

		};

		var textureLoader = new THREE.TextureLoader();

		this.particleNoiseTex = this.PARTICLE_NOISE_TEXTURE || textureLoader.load( 'assets/textures/particle2.png' );
		this.particleNoiseTex.wrapS = this.particleNoiseTex.wrapT = THREE.RepeatWrapping;

		this.particleSpriteTex = this.PARTICLE_SPRITE_TEXTURE || textureLoader.load( 'assets/textures/perlin-512.png' );
		this.particleSpriteTex.wrapS = this.particleSpriteTex.wrapT = THREE.RepeatWrapping;

		this.particleShaderMat = new THREE.ShaderMaterial( {
			transparent: true,
			depthWrite: false,
			uniforms: {
				'uTime': {
					value: 0.0
				},
				'uScale': {
					value: 1.0
				},
				'tNoise': {
					value: this.particleNoiseTex
				},
				'tSprite': {
					value: this.particleSpriteTex
				}
			},
			// blending: THREE.AdditiveBlending,
			vertexShader: GPUParticleShader.vertexShader,
			fragmentShader: GPUParticleShader.fragmentShader,
		} );

		// define defaults for all values

		this.particleShaderMat.defaultAttributeValues.particlePositionsStartTime = [ 0, 0, 0, 0 ];
		this.particleShaderMat.defaultAttributeValues.particleVelColSizeLife = [ 0, 0, 0, 0 ];

		this.init = function () {

			for ( var i = 0; i < this.PARTICLE_CONTAINERS; i ++ ) {

				var c = new GPUParticleContainer( this.PARTICLES_PER_CONTAINER, this );
				this.particleContainers.push( c );
				this.add( c );

			}

		};

		this.spawnParticle = function ( options ) {

			this.PARTICLE_CURSOR ++;

			if ( this.PARTICLE_CURSOR >= this.PARTICLE_COUNT ) {

				this.PARTICLE_CURSOR = 1;

			}

			var currentContainer = this.particleContainers[ Math.floor( this.PARTICLE_CURSOR / this.PARTICLES_PER_CONTAINER ) ];

			currentContainer.spawnParticle( options );

		};

		this.update = function ( time ) {

			for ( var i = 0; i < this.PARTICLE_CONTAINERS; i ++ ) {

				this.particleContainers[ i ].update( time );

			}

		};

		this.dispose = function () {

			this.particleShaderMat.dispose();
			this.particleNoiseTex.dispose();
			this.particleSpriteTex.dispose();

			for ( var i = 0; i < this.PARTICLE_CONTAINERS; i ++ ) {

				this.particleContainers[ i ].dispose();

			}

		};

		this.init();

	};

	GPUParticleSystem.prototype = Object.create( THREE.Object3D.prototype );
	GPUParticleSystem.prototype.constructor = GPUParticleSystem;


	// Subclass for particle containers, allows for very large arrays to be spread out

	var GPUParticleContainer = function ( maxParticles, particleSystem ) {

		THREE.Object3D.apply( this, arguments );

		this.PARTICLE_COUNT = maxParticles || 100000;
		this.PARTICLE_CURSOR = 0;
		this.time = 0;
		this.offset = 0;
		this.count = 0;
		this.DPR = window.devicePixelRatio;
		this.GPUParticleSystem = particleSystem;
		this.particleUpdate = false;

		// geometry

		this.particleShaderGeo = new THREE.BufferGeometry();

		this.particleShaderGeo.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT * 3 ), 3 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'positionStart', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT * 3 ), 3 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'startTime', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT ), 1 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'velocity', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT * 3 ), 3 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'turbulence', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT ), 1 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'color', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT * 3 ), 3 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'size', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT ), 1 ).setDynamic( true ) );
		this.particleShaderGeo.addAttribute( 'lifeTime', new THREE.BufferAttribute( new Float32Array( this.PARTICLE_COUNT ), 1 ).setDynamic( true ) );

		// material

		this.particleShaderMat = this.GPUParticleSystem.particleShaderMat;

		var position = new THREE.Vector3();
		var velocity = new THREE.Vector3();
		var color = new THREE.Color();

		this.spawnParticle = function ( options ) {

			var positionStartAttribute = this.particleShaderGeo.getAttribute( 'positionStart' );
			var startTimeAttribute = this.particleShaderGeo.getAttribute( 'startTime' );
			var velocityAttribute = this.particleShaderGeo.getAttribute( 'velocity' );
			var turbulenceAttribute = this.particleShaderGeo.getAttribute( 'turbulence' );
			var colorAttribute = this.particleShaderGeo.getAttribute( 'color' );
			var sizeAttribute = this.particleShaderGeo.getAttribute( 'size' );
			var lifeTimeAttribute = this.particleShaderGeo.getAttribute( 'lifeTime' );

			options = options || {};

			// setup reasonable default values for all arguments

			position = options.position !== undefined ? position.copy( options.position ) : position.set( 0, 0, 0 );
			velocity = options.velocity !== undefined ? velocity.copy( options.velocity ) : velocity.set( 0, 0, 0 );
			color = options.color !== undefined ? color.set( options.color ) : color.set( 0xffffff );

			var positionRandomness = options.positionRandomness !== undefined ? options.positionRandomness : 0;
			var velocityRandomness = options.velocityRandomness !== undefined ? options.velocityRandomness : 0;
			var colorRandomness = options.colorRandomness !== undefined ? options.colorRandomness : 1;
			var turbulence = options.turbulence !== undefined ? options.turbulence : 1;
			var lifetime = options.lifetime !== undefined ? options.lifetime : 5;
			var size = options.size !== undefined ? options.size : 10;
			var sizeRandomness = options.sizeRandomness !== undefined ? options.sizeRandomness : 0;
			var smoothPosition = options.smoothPosition !== undefined ? options.smoothPosition : false;

			if ( this.DPR !== undefined ) size *= this.DPR;

			var i = this.PARTICLE_CURSOR;

			// position

			positionStartAttribute.array[ i * 3 + 0 ] = position.x + ( particleSystem.random() * positionRandomness );
			positionStartAttribute.array[ i * 3 + 1 ] = position.y + ( particleSystem.random() * positionRandomness );
			positionStartAttribute.array[ i * 3 + 2 ] = position.z + ( particleSystem.random() * positionRandomness );

			if ( smoothPosition === true ) {

				positionStartAttribute.array[ i * 3 + 0 ] += - ( velocity.x * particleSystem.random() );
				positionStartAttribute.array[ i * 3 + 1 ] += - ( velocity.y * particleSystem.random() );
				positionStartAttribute.array[ i * 3 + 2 ] += - ( velocity.z * particleSystem.random() );

			}

			// velocity

			var maxVel = 2;

			var velX = velocity.x + particleSystem.random() * velocityRandomness;
			var velY = velocity.y + particleSystem.random() * velocityRandomness;
			var velZ = velocity.z + particleSystem.random() * velocityRandomness;

			velX = THREE.Math.clamp( ( velX - ( - maxVel ) ) / ( maxVel - ( - maxVel ) ), 0, 1 );
			velY = THREE.Math.clamp( ( velY - ( - maxVel ) ) / ( maxVel - ( - maxVel ) ), 0, 1 );
			velZ = THREE.Math.clamp( ( velZ - ( - maxVel ) ) / ( maxVel - ( - maxVel ) ), 0, 1 );

			velocityAttribute.array[ i * 3 + 0 ] = velX;
			velocityAttribute.array[ i * 3 + 1 ] = velY;
			velocityAttribute.array[ i * 3 + 2 ] = velZ;

			// color

			color.r = THREE.Math.clamp( color.r + particleSystem.random() * colorRandomness, 0, 1 );
			color.g = THREE.Math.clamp( color.g + particleSystem.random() * colorRandomness, 0, 1 );
			color.b = THREE.Math.clamp( color.b + particleSystem.random() * colorRandomness, 0, 1 );

			colorAttribute.array[ i * 3 + 0 ] = color.r;
			colorAttribute.array[ i * 3 + 1 ] = color.g;
			colorAttribute.array[ i * 3 + 2 ] = color.b;

			// turbulence, size, lifetime and starttime

			turbulenceAttribute.array[ i ] = turbulence;
			sizeAttribute.array[ i ] = size + particleSystem.random() * sizeRandomness;
			lifeTimeAttribute.array[ i ] = lifetime;
			startTimeAttribute.array[ i ] = this.time + particleSystem.random() * 2e-2;

			// offset

			if ( this.offset === 0 ) {

				this.offset = this.PARTICLE_CURSOR;

			}

			// counter and cursor

			this.count ++;
			this.PARTICLE_CURSOR ++;

			if ( this.PARTICLE_CURSOR >= this.PARTICLE_COUNT ) {

				this.PARTICLE_CURSOR = 0;

			}

			this.particleUpdate = true;

		};

		this.init = function () {

			this.particleSystem = new THREE.Points( this.particleShaderGeo, this.particleShaderMat );
			this.particleSystem.frustumCulled = false;
			this.add( this.particleSystem );

		};

		this.update = function ( time ) {

			this.time = time;
			this.particleShaderMat.uniforms.uTime.value = time;

			this.geometryUpdate();

		};

		this.geometryUpdate = function () {

			if ( this.particleUpdate === true ) {

				this.particleUpdate = false;

				var positionStartAttribute = this.particleShaderGeo.getAttribute( 'positionStart' );
				var startTimeAttribute = this.particleShaderGeo.getAttribute( 'startTime' );
				var velocityAttribute = this.particleShaderGeo.getAttribute( 'velocity' );
				var turbulenceAttribute = this.particleShaderGeo.getAttribute( 'turbulence' );
				var colorAttribute = this.particleShaderGeo.getAttribute( 'color' );
				var sizeAttribute = this.particleShaderGeo.getAttribute( 'size' );
				var lifeTimeAttribute = this.particleShaderGeo.getAttribute( 'lifeTime' );

				if ( this.offset + this.count < this.PARTICLE_COUNT ) {

					positionStartAttribute.updateRange.offset = this.offset * positionStartAttribute.itemSize;
					startTimeAttribute.updateRange.offset = this.offset * startTimeAttribute.itemSize;
					velocityAttribute.updateRange.offset = this.offset * velocityAttribute.itemSize;
					turbulenceAttribute.updateRange.offset = this.offset * turbulenceAttribute.itemSize;
					colorAttribute.updateRange.offset = this.offset * colorAttribute.itemSize;
					sizeAttribute.updateRange.offset = this.offset * sizeAttribute.itemSize;
					lifeTimeAttribute.updateRange.offset = this.offset * lifeTimeAttribute.itemSize;

					positionStartAttribute.updateRange.count = this.count * positionStartAttribute.itemSize;
					startTimeAttribute.updateRange.count = this.count * startTimeAttribute.itemSize;
					velocityAttribute.updateRange.count = this.count * velocityAttribute.itemSize;
					turbulenceAttribute.updateRange.count = this.count * turbulenceAttribute.itemSize;
					colorAttribute.updateRange.count = this.count * colorAttribute.itemSize;
					sizeAttribute.updateRange.count = this.count * sizeAttribute.itemSize;
					lifeTimeAttribute.updateRange.count = this.count * lifeTimeAttribute.itemSize;

				} else {

					positionStartAttribute.updateRange.offset = 0;
					startTimeAttribute.updateRange.offset = 0;
					velocityAttribute.updateRange.offset = 0;
					turbulenceAttribute.updateRange.offset = 0;
					colorAttribute.updateRange.offset = 0;
					sizeAttribute.updateRange.offset = 0;
					lifeTimeAttribute.updateRange.offset = 0;

					// Use -1 to update the entire buffer, see #11476
					positionStartAttribute.updateRange.count = - 1;
					startTimeAttribute.updateRange.count = - 1;
					velocityAttribute.updateRange.count = - 1;
					turbulenceAttribute.updateRange.count = - 1;
					colorAttribute.updateRange.count = - 1;
					sizeAttribute.updateRange.count = - 1;
					lifeTimeAttribute.updateRange.count = - 1;

				}

				positionStartAttribute.needsUpdate = true;
				startTimeAttribute.needsUpdate = true;
				velocityAttribute.needsUpdate = true;
				turbulenceAttribute.needsUpdate = true;
				colorAttribute.needsUpdate = true;
				sizeAttribute.needsUpdate = true;
				lifeTimeAttribute.needsUpdate = true;

				this.offset = 0;
				this.count = 0;

			}

		};

		this.dispose = function () {

			this.particleShaderGeo.dispose();

		};

		this.init();

	};

	GPUParticleContainer.prototype = Object.create( THREE.Object3D.prototype );
	GPUParticleContainer.prototype.constructor = GPUParticleContainer;
	// export { GPUParticleContainer };

	/**
	 * @class Web3DEngine.ParticleSystem
	 * @name Web3DEngine.ParticleSystem
	 * @classdesc ParticleSystem组件,用于模拟粒子并在CPU或GPU上生成可渲染的粒子网格。GPU仿真通常比其CPU仿真快得多，因为它避免了CPU-GPU的慢速同步并利用了许多GPU核心。
	 * @property { Boolean } enabled 启用或禁用该组件。
	 * @property { Number } spawnRate 粒子的喷射数量。
	 * @property { Texture } spriteTexture 粒子贴图。
	 * @property { Texture } noiseTexture 粒子噪点图。
	 * @property { Color } color  粒子颜色。
	 * @property { Number } size  粒子数量。
	 * @property { Number } sizeRandomness 粒子大小随机。
	 * @property { Number } lifetime 粒子的生命周期。
	 * @property { Number } positionRandomness 粒子区域随机。
	 * @property { Number } timeScale 粒子的播放的时间缩放。
	 */
	function ParticleSystem(go) {
	    Component.call(this, go);
	    this.instClassType = ParticleSystem.classType;
	    this.options = {
	        particleSpriteTex: null,
	        particleNoiseTex: null,
	        position: new THREE.Vector3(),
	        positionRandomness: .3,
	        velocity: new THREE.Vector3(),
	        velocityRandomness: .5,
	        color: 0xffaade,
	        colorRandomness: .0,
	        turbulence: 0,
	        lifetime: 2,
	        size: 20,
	        sizeRandomness: 1,
	    };

	    this.init = function ()
	    {
	        /*————创建粒子并在管理器中注册————*/
	        this._imp = new GPUParticleSystem( {
	            maxParticles: 1000,
	            particleSpriteTex: this.options.particleSpriteTex? this.options.particleSpriteTex._imp : new THREE.Texture,
	            particleNoiseTex: this.options.particleNoiseTex? this.options.particleNoiseTex._imp : new THREE.Texture,
	        } );
	        Application.instance.particleSystemManager.regParticles(this);
	        this.gameObject._imp.add(this._imp);
	        this.__handleLayerChange(null);
	    };

	    this.init();

	    /*————编辑器属性————*/
	    this._enabled = true;
	    Object.defineProperty(this, "enabled",{
	        get:function () {
	            return this._enabled;
	        },

	        set:function(value){
	            if(this._enabled === value)  return;
	            this._enabled = value;
	            if(this._enabled)
	            {
	                this._imp.visible = value;
	                if(this._reflash)
	                {
	                    this._reflash = false;
	                    this._handleDestroy(null);
	                    this.init();
	                }
	            }
	            else
	            {
	                this._imp.visible = value;
	            }
	        }
	    });

	    //喷射数
	    this._spawnRate = 1;
	    Object.defineProperty(this, "spawnRate",{
	        get:function () {
	            return this._spawnRate;
	        },

	        set:function(value){
	            if(this._spawnRate == value) return;
	            this._spawnRate = value;
	        }
	    });

	    //Sprite图
	    Object.defineProperty(this, "spriteTexture",{
	        get:function () {
	            return this.options.particleSpriteTex;
	        },

	        set:function(value){
	            if(this.options.particleSpriteTex == value) return;
	            this.options.particleSpriteTex = value;
	            if(!this.enabled)
	            {
	                this._reflash = true;
	                return;
	            }
	            this._handleDestroy(null);
	            this.init();
	        }
	    });

	    //噪点图
	    Object.defineProperty(this, "noiseTexture",{
	        get:function () {
	            return this.options.particleNoiseTex;
	        },

	        set:function(value){
	            if(this.options.particleNoiseTex == value) return;
	            this.options.particleNoiseTex = value;

	            if(!this.enabled)
	            {
	                this._reflash = true;
	                return;
	            }
	            this._handleDestroy(null);
	            this.init();
	        }
	    });

	    //颜色
	    Object.defineProperty(this, "color",{
	        get:function () {
	            return this.options.color;
	        },

	        set:function(value){
	            if(this.options.color == value) return;
	            this.options.color = value;
	        }
	    });

	    //粒子大小
	    Object.defineProperty(this, "size",{
	        get:function () {
	            return this.options.size;
	        },

	        set:function(value){
	            if(this.options.size == value) return;
	            this.options.size = value;
	        }
	    });

	    //大小随机
	    Object.defineProperty(this, "sizeRandomness",{
	        get:function () {
	            return this.options.sizeRandomness;
	        },

	        set:function(value){
	            if(this.options.sizeRandomness == value) return;
	            this.options.sizeRandomness = value;
	        }
	    });

	    //生命时间
	    Object.defineProperty(this, "lifetime",{
	        get:function () {
	            return this.options.lifetime;
	        },

	        set:function(value){
	            if(this.options.lifetime == value) return;
	            this.options.lifetime = value;
	        }
	    });

	    //区域随机
	    Object.defineProperty(this, "positionRandomness",{
	        get:function () {
	            return this.options.positionRandomness;
	        },

	        set:function(value){
	            if(this.options.positionRandomness == value) return;
	            this.options.positionRandomness = value;
	        }
	    });

	    //速率
	    Object.defineProperty(this, "velocityRandomness",{
	        get:function () {
	            return this.options.velocityRandomness;
	        },

	        set:function(value){
	            if(this.options.velocityRandomness == value) return;
	            this.options.velocityRandomness = value;
	        }
	    });

	    //时间缩放
	    this._timeScale = 1;
	    Object.defineProperty(this, "timeScale",{
	        get:function () {
	            return this._timeScale;
	        },

	        set:function(value){
	            if(this._timeScale == value) return;
	            this._timeScale = value;
	        }
	    });

	    //是否循环

	    //是否自动发射

	    //预加载

	    //销毁监听
	    this.addEventListener(Event$1.DESTROY, this, this._handleDestroy);
	    this.gameObject.addEventListener(Event$1.CHANGEGAMEOBJECTLAYER, this, this.__handleLayerChange);

	}
	ExtendType(ParticleSystem, Component, {
	    tick: 0,

	    _copy:function(source){
	        Component.prototype._copy.call( this, source );
	    },

	    _handleDestroy:function(event)
	    {
	        Application.instance.particleSystemManager.unregParticles(this);
	        this._imp.dispose();
	        this.gameObject._imp.remove(this._imp);
	        this._imp = null;
	    },
	    /**
	     * @function
	     * @name Web3DEngine.ParticleSystem#play
	     * @description 播放粒子动画。
	     */
	    //播放
	    play: function () {
	        this.timeScale = 1;
	        this.stop();
	        this.init();
	    },
	    /**
	     * @function
	     * @name Web3DEngine.ParticleSystem#stop
	     * @description 停止粒子动画。
	     */
	    //终止
	    stop: function () {
	        if(this._imp)
	        {
	            this._handleDestroy(null);
	        }
	    },

	    //
	    update:function(deltaTime){
	        deltaTime = deltaTime * this.timeScale;

	        if ( deltaTime > 0 ) {

	            this.tick += deltaTime;

	            if ( this.tick < 0 ) this.tick = 0;
	            for ( let x = 0; x < this.spawnRate * deltaTime; x ++ ) {
	                this._imp.spawnParticle( this.options );
	            }
	        }
	        this._imp.update( this.tick );
	    },

	    __applyLayerInChild:function(mesh, layerValue){
	        mesh.layers.set(layerValue);

	        for(let i =0; i < mesh.children.length; i++) {
	            let childMesh = mesh.children[i];
	            this.__applyLayerInChild(childMesh, layerValue);
	        }
	    },

	    __handleLayerChange:function(e){
	        let layerValue = this.gameObject.layer;
	        if(this._imp)
	        {
	            //存放相机Layer和对象layer并进行比对，然后激活和隐藏对象
	            this.__applyLayerInChild(this._imp, layerValue);
	        }
	    },
	});

	ParticleSystem.attributes.add('enabled', {
	    type: 'boolean',
	    title: 'Enabled',
	    default: true
	});

	ParticleSystem.attributes.add('spawnRate', {
	    type: 'number',
	    title: 'SpawnRate',
	    default: 1
	});

	ParticleSystem.attributes.add('spriteTexture', {
	    type: 'Texture',
	    title: 'SpriteTexture',
	    default: null
	});

	ParticleSystem.attributes.add('noiseTexture', {
	    type: 'Texture',
	    title: 'NoiseTexture',
	    default: null
	});

	ParticleSystem.attributes.add('color', {
	    type: 'rgb',
	    title: 'Color',
	    default : [0, 0, 0]
	});

	ParticleSystem.attributes.add('size', {
	    type: 'number',
	    title: 'Size',
	    default: 20
	});

	ParticleSystem.attributes.add('sizeRandomness', {
	    type: 'number',
	    title: 'SizeRandomness'
	});

	ParticleSystem.attributes.add('lifetime', {
	    type: 'number',
	    title: 'Lifetime',
	    default: 2
	});

	ParticleSystem.attributes.add('positionRandomness', {
	    type: 'number',
	    title: 'PositionRandomness',
	    default: 0.3
	});

	ParticleSystem.attributes.add('velocityRandomness', {
	    type: 'number',
	    title: 'VelocityRandomness',
	    default: 0.5
	});

	ParticleSystem.attributes.add('timeScale', {
	    type: 'number',
	    title: 'TimeScale',
	    default: 1
	});

	/**
	 * @author ZhuLin
	 */

	RectTransformHelper.gizmosZPos = -0.01;
	RectTransformHelper.pivotGizmoSize = new THREE.Vector2(32, 32);
	RectTransformHelper.pivotGizmoRadius = 12;
	RectTransformHelper.pivotGizmoEdges = 16;
	RectTransformHelper.anchorGizmoSize = new THREE.Vector2(16, 16);
	RectTransformHelper.anchorGizmoAngle = 30;

	function RectTransformHelper(rectTran, color) {

		this.rectTran = rectTran;

		if (color === undefined) color = 0xffffff;

		var geometry = new THREE.BufferGeometry();
		var indices = new Uint16Array(52 + RectTransformHelper.pivotGizmoEdges * 2);
		var positions = new Float32Array(28 * 3 + RectTransformHelper.pivotGizmoEdges * 3);

		indices.set(
			[0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 4, 4, 8, 8, 9, 9, 4, 5, 10, 10, 11, 11, 5, 6, 12, 12, 13, 13, 6, 7, 14, 14, 15, 15, 7, 16, 20, 17, 21, 18, 22, 19, 23, 24, 25, 25, 26, 26, 27, 27, 24]
		);

		geometry.setIndex(new THREE.BufferAttribute(indices, 1));
		geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

		THREE.LineSegments.call(this, geometry, new THREE.LineBasicMaterial({ color: color }));

		this.matrixAutoUpdate = false;

		// this.layers.set(4);

		this.visible = false;

		if (rectTran) {
			// rectTran.gameObject._imp.add(this);
			rectTran._pivotPoint.add(this);
			this.position.set(0, 0, 0);
		}

		this.update();

	}

	RectTransformHelper.prototype = Object.create(THREE.LineSegments.prototype);
	RectTransformHelper.prototype.constructor = RectTransformHelper;

	RectTransformHelper.prototype.update = (function () {

		return function update(rectTran) {

			if (rectTran !== undefined) {

				console.warn('RectTransformHelper: .update() has no longer arguments.');

			}

			if (
				!this.rectTran ||
				!this.rectTran._anchorRect ||
				!this.rectTran.rect) {
				return;
			}


			let position = this.geometry.attributes.position;
			let indices = this.geometry.index;

			let rTransRect = this.rectTran.rect;
			rTransRect.set(
				rTransRect.x - this.rectTran._pivotPoint.position.x,
				rTransRect.y - this.rectTran._pivotPoint.position.y,
				rTransRect.z - this.rectTran._pivotPoint.position.x,
				rTransRect.w - this.rectTran._pivotPoint.position.y,
			);

			let rTransPivot = this.rectTran.pivot;
			let rTransCalculatedSize = new THREE.Vector2(
				rTransRect.z - rTransRect.x,
				rTransRect.w - rTransRect.y,
			);

			let posBaseIndex = 28;
			let indicesBase = 52;

			/**绘制Pivot Gizmo */
			let pivotPos = new THREE.Vector2(0, 0);

			pivotPos.set(
				rTransRect.x + rTransPivot.x * rTransCalculatedSize.x,
				rTransRect.y + rTransPivot.y * rTransCalculatedSize.y,
			);

			position.setXYZ(0, pivotPos.x - RectTransformHelper.pivotGizmoSize.x / 2, pivotPos.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(1, pivotPos.x + RectTransformHelper.pivotGizmoSize.x / 2, pivotPos.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(2, pivotPos.x, pivotPos.y - RectTransformHelper.pivotGizmoSize.y / 2, RectTransformHelper.gizmosZPos);
			position.setXYZ(3, pivotPos.x, pivotPos.y + RectTransformHelper.pivotGizmoSize.y / 2, RectTransformHelper.gizmosZPos);

			let angle = Math.PI / 2;
			let angleDelta = 2 * Math.PI / RectTransformHelper.pivotGizmoEdges;
			for (let index = 0; index < RectTransformHelper.pivotGizmoEdges; ++index) {

				position.setXYZ(posBaseIndex + index,
					pivotPos.x + Math.cos(angle) * RectTransformHelper.pivotGizmoRadius,
					pivotPos.y + Math.sin(angle) * RectTransformHelper.pivotGizmoRadius,
					RectTransformHelper.gizmosZPos
				);

				indices.set([
					posBaseIndex + index,
					posBaseIndex + (index + 1) % RectTransformHelper.pivotGizmoEdges
				], indicesBase + index * 2);

				angle += angleDelta;
			}

			/** 绘制 Anchor Rect */
			let anchorRect = this.rectTran._anchorRect.clone();
			anchorRect.set(
				anchorRect.x - this.rectTran._pivotPoint.position.x,
				anchorRect.y - this.rectTran._pivotPoint.position.y,
				anchorRect.z - this.rectTran._pivotPoint.position.x,
				anchorRect.w - this.rectTran._pivotPoint.position.y,
			);

			position.setXYZ(4, anchorRect.x, anchorRect.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(5, anchorRect.x, anchorRect.w, RectTransformHelper.gizmosZPos);
			position.setXYZ(6, anchorRect.z, anchorRect.w, RectTransformHelper.gizmosZPos);
			position.setXYZ(7, anchorRect.z, anchorRect.y, RectTransformHelper.gizmosZPos);

			/** 绘制 Anchor Gizmo */

			//左下
			let zeroBase = new THREE.Vector2();
			let anchorOrigin = new THREE.Vector2(anchorRect.x, anchorRect.y);
			let refLine = new THREE.Vector2(-RectTransformHelper.anchorGizmoSize.x, -RectTransformHelper.anchorGizmoSize.y);
			let anticlockwiseLine = refLine.clone().rotateAround(zeroBase, THREE.Math.degToRad(-RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);
			let clockwiseLine = refLine.clone().rotateAround(zeroBase, THREE.Math.degToRad(RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);

			position.setXYZ(8, anticlockwiseLine.x, anticlockwiseLine.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(9, clockwiseLine.x, clockwiseLine.y, RectTransformHelper.gizmosZPos);

			//左上
			anchorOrigin.set(anchorRect.x, anchorRect.w);
			refLine.set(-RectTransformHelper.anchorGizmoSize.x, +RectTransformHelper.anchorGizmoSize.y);
			anticlockwiseLine.set(refLine.x, refLine.y).rotateAround(zeroBase, THREE.Math.degToRad(-RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);
			clockwiseLine.set(refLine.x, refLine.y).rotateAround(zeroBase, THREE.Math.degToRad(RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);

			position.setXYZ(10, anticlockwiseLine.x, anticlockwiseLine.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(11, clockwiseLine.x, clockwiseLine.y, RectTransformHelper.gizmosZPos);

			//右上
			anchorOrigin.set(anchorRect.z, anchorRect.w);
			refLine.set(+RectTransformHelper.anchorGizmoSize.x, +RectTransformHelper.anchorGizmoSize.y);
			anticlockwiseLine.set(refLine.x, refLine.y).rotateAround(zeroBase, THREE.Math.degToRad(-RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);
			clockwiseLine.set(refLine.x, refLine.y).rotateAround(zeroBase, THREE.Math.degToRad(RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);

			position.setXYZ(12, anticlockwiseLine.x, anticlockwiseLine.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(13, clockwiseLine.x, clockwiseLine.y, RectTransformHelper.gizmosZPos);

			//右下
			anchorOrigin.set(anchorRect.z, anchorRect.y);
			refLine.set(+RectTransformHelper.anchorGizmoSize.x, -RectTransformHelper.anchorGizmoSize.y);
			anticlockwiseLine.set(refLine.x, refLine.y).rotateAround(zeroBase, THREE.Math.degToRad(-RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);
			clockwiseLine.set(refLine.x, refLine.y).rotateAround(zeroBase, THREE.Math.degToRad(RectTransformHelper.anchorGizmoAngle / 2)).add(anchorOrigin);

			position.setXYZ(14, anticlockwiseLine.x, anticlockwiseLine.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(15, clockwiseLine.x, clockwiseLine.y, RectTransformHelper.gizmosZPos);

			/** 绘制Margin标识Gizmo */
			let p16 = new THREE.Vector2(anchorRect.x, pivotPos.y);
			let p17 = new THREE.Vector2(pivotPos.x, anchorRect.w);
			let p18 = new THREE.Vector2(anchorRect.z, pivotPos.y);
			let p19 = new THREE.Vector2(pivotPos.x, anchorRect.y);
			let p20 = new THREE.Vector2(rTransRect.x, p16.y);
			let p21 = new THREE.Vector2(p17.x, rTransRect.w);
			let p22 = new THREE.Vector2(rTransRect.z, p18.y);
			let p23 = new THREE.Vector2(p19.x, rTransRect.y);

			position.setXYZ(16, p16.x, p16.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(17, p17.x, p17.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(18, p18.x, p18.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(19, p19.x, p19.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(20, p20.x, p20.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(21, p21.x, p21.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(22, p22.x, p22.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(23, p23.x, p23.y, RectTransformHelper.gizmosZPos);

			/** 绘制Rect Gizmo */
			let rectTranRect = new THREE.Vector4(p20.x, p23.y, p22.x, p21.y);

			position.setXYZ(24, rectTranRect.x, rectTranRect.y, RectTransformHelper.gizmosZPos);
			position.setXYZ(25, rectTranRect.x, rectTranRect.w, RectTransformHelper.gizmosZPos);
			position.setXYZ(26, rectTranRect.z, rectTranRect.w, RectTransformHelper.gizmosZPos);
			position.setXYZ(27, rectTranRect.z, rectTranRect.y, RectTransformHelper.gizmosZPos);

			position.needsUpdate = true;
			indices.needsUpdate = true;

			this.geometry.computeBoundingSphere();

		};

	})();

	RectTransformHelper.prototype.setFromRectTran = function (rectTran) {

		this.rectTran = rectTran;
		this.update();

		return this;

	};

	RectTransformHelper.prototype.copy = function (source) {

		THREE.LineSegments.prototype.copy.call(this, source);

		this.rectTran = source.rectTran;

		return this;

	};

	RectTransformHelper.prototype.clone = function () {

		return new this.constructor().copy(this);

	};

	/**
	 * @author ZhuLin
	 */

	RectTransform.DEBUG = false;

	/**
	 *Position, size, anchor and pivot information for a rectangle.
	 *
	 * @param {GameObject} go
	 *
	 * @property {THREE.Vector4} rect The calculated rectangle in the local space of the Transform.
	 * @property {THREE.Vector4} anchor The normalized position in the parent RectTransform that corners is anchored to.
	 * @property {THREE.Vector2} anchoredPosition The position of the pivot of this RectTransform relative to the anchor reference point.
	 * @property {THREE.Vector3} anchoredPosition3D The 3D position of the pivot of this RectTransform relative to the anchor reference point.
	 * @property {THREE.Vector2} pivot The normalized position in this RectTransform that it rotates around.
	 * @property {THREE.Vector2} sizeDelta The size of this RectTransform relative to the distances between the anchors.
	 * @property {Number} leftEdge The offset of the left edge of the rectangle relative to the left anchor.
	 * @property {Number} rightEdge The offset of the right edge of the rectangle relative to the right anchor.
	 * @property {Number} bottomEdge The offset of the lower edge of the rectangle relative to the lower anchor.
	 * @property {Number} topEdge The offset of the upper edge of the rectangle relative to the upper anchor.

	 */
	function RectTransform(go) {

	    Transform.call(this, go);

	    if (go.transform) {
	        this._copy(go.transform);
	        go._removeCompoent(go.transform);
	        go.transform = null;
	    }
	    go.transform = this;

	    this.instClassType = RectTransform.classType;

	    this._canvas = this._findCanvas();

	    this._anchorRect = new THREE.Vector4(0, 0, 0, 0);
	    this._rect = new THREE.Vector4(0, 0, 0, 0);

	    this._anchor = new THREE.Vector4(0, 0, 0, 0);
	    this._anchoredPosition = new THREE.Vector2(0, 0);

	    this._pivot = new THREE.Vector2(0.5, 0.5);

	    this._sizeDelta = new THREE.Vector2(0, 0);

	    this._onClickedEvent = null;

	    this._pivotPoint = new THREE.Group();
	    go._imp.add(this._pivotPoint);

	    this._helper = new RectTransformHelper(this);

	    this._dirty = true;

	    go.addEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);

	    go.addEventListener(Web3DEngine.Event.CHANGEGAMEOBJECTLAYER, this, this.__onGameObjectLayerChanged);
	    this.addEventListener(Web3DEngine.Event.REPARENT, this, this.__onReparent);

	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    Object.defineProperty(this, "canvas", {
	        get: function () {
	            return this._canvas;
	        },
	    });

	    Object.defineProperty(this, "rect", {
	        get: function () {
	            return this._rect.clone();
	        },
	    });

	    Object.defineProperty(this, "anchor", {
	        get: function () {
	            return this._anchor.clone();
	        },

	        set: function (value) {
	            this._anchor.copy(value);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "anchoredPosition", {
	        get: function () {
	            return this._anchoredPosition.clone();
	        },

	        set: function (value) {
	            this._anchoredPosition.copy(value);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "anchoredPosition3D", {
	        get: function () {
	            return new THREE.Vector3(this._anchoredPosition.x, this._anchoredPosition.y, this.localPosition.z);
	        },

	        set: function (value) {
	            this._anchoredPosition.set(value.x, value.y);
	            this.localPosition.setZ(value.z);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "pivot", {
	        get: function () {
	            return this._pivot.clone();
	        },

	        set: function (value) {
	            this._pivot.copy(value);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "sizeDelta", {
	        get: function () {
	            return this._sizeDelta.clone();
	        },

	        set: function (value) {
	            this._sizeDelta.copy(value);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "leftEdge", {
	        get: function () {
	            return this._anchoredPosition.x - this._sizeDelta.x * this._pivot.x;
	        },

	        set: function (value) {
	            //set left
	            let mx = value - (this._anchoredPosition.x - this._sizeDelta.x * this._pivot.x);
	            this._sizeDelta.setX(this._sizeDelta.x - mx);
	            this._anchoredPosition.setX(this._anchoredPosition.x + mx * (1 - this._pivot.x));

	            //set bottom
	            let my = this.bottomEdge - (this._anchoredPosition.y - this._sizeDelta.y * this._pivot.y);
	            this._sizeDelta.setY(this._sizeDelta.y - my);
	            this._anchoredPosition.setY(this._anchoredPosition.y + my * (1 - this._pivot.y));

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "bottomEdge", {
	        get: function () {
	            return this._anchoredPosition.y - this._sizeDelta.y * this._pivot.y;
	        },

	        set: function (value) {
	            //set left
	            let mx = this.leftEdge - (this._anchoredPosition.x - this._sizeDelta.x * this._pivot.x);
	            this._sizeDelta.setX(this._sizeDelta.x - mx);
	            this._anchoredPosition.setX(this._anchoredPosition.x + mx * (1 - this._pivot.x));

	            //set bottom
	            let my = value - (this._anchoredPosition.y - this._sizeDelta.y * this._pivot.y);
	            this._sizeDelta.setY(this._sizeDelta.y - my);
	            this._anchoredPosition.setY(this._anchoredPosition.y + my * (1 - this._pivot.y));

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "rightEdge", {
	        get: function () {
	            let value = this._anchoredPosition.x + this._sizeDelta.x * (1 - this._pivot.x);
	            return -value;
	        },

	        set: function (value) {
	            //set right
	            let negVal = -value;
	            let mx = negVal - (this._anchoredPosition.x + this._sizeDelta.x * (1 - this._pivot.x));
	            this._sizeDelta.setX(this._sizeDelta.x + mx);
	            this._anchoredPosition.setX(this._anchoredPosition.x + mx * this._pivot.x);

	            //set top
	            negVal = -this.topEdge;
	            let my = negVal - (this._anchoredPosition.y + this._sizeDelta.y * (1 - this._pivot.y));
	            this._sizeDelta.setY(this._sizeDelta.y + my);
	            this._anchoredPosition.setY(this._anchoredPosition.y + my * this._pivot.y);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "topEdge", {
	        get: function () {
	            let value = this._anchoredPosition.y + this._sizeDelta.y * (1 - this._pivot.y);
	            return -value;
	        },

	        set: function (value) {
	            //set right
	            let negVal = -this.rightEdge;
	            let mx = negVal - (this._anchoredPosition.x + this._sizeDelta.x * (1 - this._pivot.x));
	            this._sizeDelta.setX(this._sizeDelta.x + mx);
	            this._anchoredPosition.setX(this._anchoredPosition.x + mx * this._pivot.x);

	            //set top
	            negVal = -value;
	            let my = negVal - (this._anchoredPosition.y + this._sizeDelta.y * (1 - this._pivot.y));
	            this._sizeDelta.setY(this._sizeDelta.y + my);
	            this._anchoredPosition.setY(this._anchoredPosition.y + my * this._pivot.y);

	            this.setDirty();
	        }
	    });

	    Object.defineProperty(this, "localRotation", {
	        get: function () {
	            return this._pivotPoint.quaternion;
	        },

	        set: function (value) {
	            if (value.isQuaternion != true) return;
	            this._pivotPoint.quaternion.copy(value);
	        },
	    });

	    Object.defineProperty(this, "localScale", {
	        get: function () {
	            return this._pivotPoint.scale;
	        },

	        set: function (value) {
	            if (value.isVector3 != true) return;
	            this._pivotPoint.scale.copy(value);
	        },
	    });

	    Object.defineProperty(this, "helper", {
	        get: function () {
	            return this._helper;
	        }
	    });

	}

	ExtendType(RectTransform, Transform, {
	    isRectTransform: true,

	    __onAddComponent: function () {
	        //注册到管理器
	        Application.instance.uiManager.regRectTransform(this);
	    },

	    __onRemoveComponent: function () {
	        //从管理器中移除
	        Application.instance.uiManager.unregRectTransform(this);
	    },

	    __onDestroyComponent: function () {
	        if (this._pivotPoint) {

	            if (this._helper) {
	                this._pivotPoint.remove(this._helper);
	            }

	            this.gameObject._imp.remove(this._pivotPoint);
	        }

	        this.gameObject.removeEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);

	        this.gameObject.removeEventListener(Web3DEngine.Event.CHANGEGAMEOBJECTLAYER, this, this.__onGameObjectLayerChanged);
	        this.removeEventListener(Web3DEngine.Event.REPARENT, this, this.__onReparent);

	        this.removeEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    },

	    __onGameObjectLayerChanged: function () {
	        this._syncLayer();
	    },

	    __onReparent: function () {
	        if (this.parent) {
	            this.gameObject.layer = this.parent.gameObject.layer;
	        }

	        this._canvas = this._findCanvas();
	    },

	    __getParentSize: function () {
	        var parent = this.parent;
	        var parentSize = new THREE.Vector2(0, 0);
	        if (parent && parent.isRectTransform) {
	            parentSize.set(
	                parent.rect.z - parent.rect.x,
	                parent.rect.w - parent.rect.y,
	            );
	        }

	        return parentSize;
	    },

	    __getParenRect: function () {
	        var parent = this.parent;
	        var parentRect = new THREE.Vector4(0, 0, 0, 0);
	        if (parent && parent.isRectTransform) {
	            parentRect.copy(
	                parent.rect
	            );
	        }

	        return parentRect;
	    },

	    _findCanvas: function () {
	        let parent = this.gameObject.transform;
	        let canvas = null;

	        do {
	            canvas = parent.gameObject.getComponent(Web3DEngine.Canvas);
	            parent = parent.parent;
	        } while (!canvas && parent);

	        return canvas;
	    },

	    _calculateAnchorRect: function () {
	        let parentSize = this.__getParentSize();
	        let parentRect = this.__getParenRect();

	        this._anchorRect.set(
	            parentRect.x + this._anchor.x * parentSize.x,
	            parentRect.y + this._anchor.y * parentSize.y,
	            parentRect.x + this._anchor.z * parentSize.x,
	            parentRect.y + this._anchor.w * parentSize.y,
	        );
	    },

	    _calculateRect: function () {
	        this._rect.set(
	            this._anchorRect.x + this.leftEdge,
	            this._anchorRect.y + this.bottomEdge,
	            this._anchorRect.z - this.rightEdge,
	            this._anchorRect.w - this.topEdge,
	        );
	    },

	    _adjustPivotPoint: function () {
	        this._pivotPoint.position.set(
	            this._rect.x + this._pivot.x * (this._rect.z - this._rect.x),
	            this._rect.y + this._pivot.y * (this._rect.w - this._rect.y),
	            0,
	        );
	    },

	    setDirty: function () {
	        this._dirty = true;
	    },

	    update: function (deltaTime) {
	        if (this._dirty) {

	            this._calculateAnchorRect();
	            this._calculateRect();
	            this._adjustPivotPoint();

	            this._updateHelper();

	            this.forEachChild(this, trans => {
	                if (trans && trans.isRectTransform) {
	                    trans.setDirty();
	                }
	            }, false, true);

	            if(RectTransform.DEBUG) {
	                console.log(this.gameObject.name + " updated!");
	            }

	            this.dispatchEvent({ type: Web3DEngine.Event.RECTTRANSFORM_RESIZED, eventSource: this, newRect: this.rect, });

	            this._dirty = false;
	        }
	    },

	    forceUpdate: function () {
	        this.setDirty();
	        this.update();
	    },

	    _updateHelper: function () {
	        if (this._helper) {
	            this._helper.update();
	        }
	    },

	    _syncLayer: function () {
	        // if (this._pivotPoint) {
	        //     this._pivotPoint.layers.set(this.gameObject.layer);
	        // }
	        if (this._helper) {
	            this._helper.layers.set(this.gameObject.layer);
	        }
	    },

	    __onClicked: function (data) {
	        if (this._onClickedEvent) {
	            this._onClickedEvent.call(this, data);
	        }
	    },

	    onClicked: function (callBack) {
	        return this._onClickedEvent = callBack, this;
	    },

	});

	RectTransform.attributes.add('anchor', {
	    type: 'vec4',
	    title: 'Anchor',
	    default: [0, 0, 0, 0]
	});

	RectTransform.attributes.add('anchoredPosition', {
	    type: 'vec2',
	    title: 'AnchoredPosition',
	    default: [0, 0]
	});

	RectTransform.attributes.add('anchoredPosition3D', {
	    type: 'vec3',
	    title: 'AnchoredPosition3D',
	    default: [0, 0, 0]
	});

	RectTransform.attributes.add('pivot', {
	    type: 'vec2',
	    title: 'Pivot',
	    default: [0.5, 0.5]
	});

	RectTransform.attributes.add('sizeDelta', {
	    type: 'vec2',
	    title: 'SizeDelta',
	    default: [100, 100]
	});

	RectTransform.attributes.add('localScale', {
	    type: 'vec3',
	    title: 'LocalScale',
	    default: [1, 1, 1]
	});

	/**
	 * @author ZhuLin
	 */

	Canvas.RenderMode = {
	    ScreenSpaceOverlay: "ScreenSpaceOverlay",
	    ScreenSpaceCamera: "ScreenSpaceCamera",
	    WorldSpace: "WorldSpace",
	};

	function Canvas(go) {

	    Component.call(this, go);
	    this.instClassType = Canvas.classType;

	    if (go.transform && go.transform.isRectTransform) ; else {
	        //没有RectTransform或者只有Transform，创建一个RectTransform或者把已有的Transform替换为RectTransform
	        go.addComponent(Web3DEngine.RectTransform);
	    }

	    this._currentMode = Canvas.RenderMode.ScreenSpaceOverlay;

	    let goUICam = new Web3DEngine.GameObject();
	    goUICam.name = "UICameraOverlay";
	    goUICam.transform.parent = go.transform;

	    this._uiCamera = goUICam.addComponent(Web3DEngine.Camera);
	    this._uiCamera.Projection = Web3DEngine.Camera.ENUM_Projection.Orthographic;
	    this._uiCamera.cullingMask = Web3DEngine.Application.instance.uiManager.getUIOnlyMask(); //只渲染UI层

	    this._eventCamera = null;

	    //用屏幕尺寸初始化Canvas尺寸
	    let appRendererSize = Web3DEngine.Application.instance.getRenderSize();
	    this._onResizeAppRenderer({
	        type: Event.RESIZE_APP_RENDERER,
	        prevRenderSize: null,
	        currentRendererSize: appRendererSize,
	    });

	    //层级默认设置为UI层
	    go.layer = Web3DEngine.Application.instance.uiManager.getUILayer();

	    go.addEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);

	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    Web3DEngine.Application.instance.addEventListener(Web3DEngine.Event.RESIZE_APP_RENDERER, this, this._onResizeAppRenderer);

	    Object.defineProperty(this, "renderMode", {
	        get: function () {
	            return this._currentMode;
	        },

	        set: function (value) {

	            switch (value) {
	                case Canvas.RenderMode.ScreenSpaceOverlay:
	                    this._uiCamera.enabled = true;
	                    break;

	                case Canvas.RenderMode.ScreenSpaceCamera:
	                    this._uiCamera.enabled = false;
	                    break;

	                case Canvas.RenderMode.WorldSpace:
	                    this._uiCamera.enabled = false;
	                    break;

	                default:
	                    break;
	            }

	            this._currentMode = value;

	            //尝试重新用屏幕尺寸初始化Canvas尺寸（仅在切换为ScreenSpaceOverlay模式时会生效）
	            let appRendererSize = Web3DEngine.Application.instance.getRenderSize();
	            this._onResizeAppRenderer({
	                type: Event.RESIZE_APP_RENDERER,
	                prevRenderSize: null,
	                currentRendererSize: appRendererSize,
	            });
	        }
	    });

	    Object.defineProperty(this, "eventCamera", {
	        get: function () {
	            return this._eventCamera || this._uiCamera;
	        },

	        set: function (value) {
	            this._eventCamera = value;
	        }
	    });
	}

	ExtendType(Canvas, Component, {
	    isCanvas: true,

	    __onAddComponent: function () {
	    },

	    __onRemoveComponent: function () {
	    },

	    __onDestroyComponent: function () {

	        if (this._uiCamera) {
	            Web3DEngine.BaseObject.Destroy(this._uiCamera.gameObject);
	        }

	        this.gameObject.removeEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);

	        this.removeEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	        Web3DEngine.Application.instance.removeEventListener(Web3DEngine.Event.RESIZE_APP_RENDERER, this, this._onResizeAppRenderer);

	    },

	    _onResizeAppRenderer: function (eventData) {

	        if (Canvas.RenderMode.ScreenSpaceOverlay === this._currentMode) {
	            this.gameObject.transform.sizeDelta = new THREE.Vector2(eventData.currentRendererSize.x, eventData.currentRendererSize.y);
	            this.gameObject.transform.forceUpdate();
	            this._syncUICamera();
	        }

	    },

	    _syncUICamera: function () {
	        if (this._uiCamera) {
	            let viewRect = this.gameObject.transform.rect;
	            let left = viewRect.x;
	            let right = viewRect.z;
	            let bottom = viewRect.y;
	            let top = viewRect.w;
	            let near = 1;
	            let far = -1;
	            this._uiCamera.SetOrthographicCamera(left, right, bottom, top, near, far);
	        }
	    }

	});

	Canvas.attributes.add('renderMode', {
	    type: 'string',
	    title: 'RenderMode',
	    default: Canvas.RenderMode.ScreenSpaceOverlay
	});

	Canvas.attributes.add('eventCamera', {
	    type: 'Camera',
	    title: 'EventCamera',
	    default: null
	});

	(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
	var str = Object.prototype.toString;

	module.exports = anArray;

	function anArray(arr) {
	  return (
	       arr.BYTES_PER_ELEMENT
	    && str.call(arr.buffer) === '[object ArrayBuffer]'
	    || Array.isArray(arr)
	  )
	}

	},{}],2:[function(require,module,exports){
	module.exports = function numtype(num, def) {
		return typeof num === 'number'
			? num
			: (typeof def === 'number' ? def : 0)
	};
	},{}],3:[function(require,module,exports){
	module.exports = function(dtype) {
	  switch (dtype) {
	    case 'int8':
	      return Int8Array
	    case 'int16':
	      return Int16Array
	    case 'int32':
	      return Int32Array
	    case 'uint8':
	      return Uint8Array
	    case 'uint16':
	      return Uint16Array
	    case 'uint32':
	      return Uint32Array
	    case 'float32':
	      return Float32Array
	    case 'float64':
	      return Float64Array
	    case 'array':
	      return Array
	    case 'uint8_clamped':
	      return Uint8ClampedArray
	  }
	};

	},{}],4:[function(require,module,exports){
	/*eslint new-cap:0*/
	var dtype = require('dtype');

	module.exports = flattenVertexData;

	function flattenVertexData (data, output, offset) {
	  if (!data) throw new TypeError('must specify data as first parameter')
	  offset = +(offset || 0) | 0;

	  if (Array.isArray(data) && (data[0] && typeof data[0][0] === 'number')) {
	    var dim = data[0].length;
	    var length = data.length * dim;
	    var i, j, k, l;

	    // no output specified, create a new typed array
	    if (!output || typeof output === 'string') {
	      output = new (dtype(output || 'float32'))(length + offset);
	    }

	    var dstLength = output.length - offset;
	    if (length !== dstLength) {
	      throw new Error('source length ' + length + ' (' + dim + 'x' + data.length + ')' +
	        ' does not match destination length ' + dstLength)
	    }

	    for (i = 0, k = offset; i < data.length; i++) {
	      for (j = 0; j < dim; j++) {
	        output[k++] = data[i][j] === null ? NaN : data[i][j];
	      }
	    }
	  } else {
	    if (!output || typeof output === 'string') {
	      // no output, create a new one
	      var Ctor = dtype(output || 'float32');

	      // handle arrays separately due to possible nulls
	      if (Array.isArray(data) || output === 'array') {
	        output = new Ctor(data.length + offset);
	        for (i = 0, k = offset, l = output.length; k < l; k++, i++) {
	          output[k] = data[i] === null ? NaN : data[i];
	        }
	      } else {
	        if (offset === 0) {
	          output = new Ctor(data);
	        } else {
	          output = new Ctor(data.length + offset);

	          output.set(data, offset);
	        }
	      }
	    } else {
	      // store output in existing array
	      output.set(data, offset);
	    }
	  }

	  return output
	}

	},{"dtype":3}],5:[function(require,module,exports){
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}

	},{}],6:[function(require,module,exports){
	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	};

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}

	},{}],7:[function(require,module,exports){
	var wordWrap = require('word-wrapper');
	var xtend = require('xtend');
	var number = require('as-number');

	var X_HEIGHTS = ['x', 'e', 'a', 'o', 'n', 's', 'r', 'c', 'u', 'm', 'v', 'w', 'z'];
	var M_WIDTHS = ['m', 'w'];
	var CAP_HEIGHTS = ['H', 'I', 'N', 'E', 'F', 'K', 'L', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


	var TAB_ID = '\t'.charCodeAt(0);
	var SPACE_ID = ' '.charCodeAt(0);
	var ALIGN_LEFT = 0,
	    ALIGN_CENTER = 1,
	    ALIGN_RIGHT = 2;

	module.exports = function createLayout(opt) {
	  return new TextLayout(opt)
	};

	function TextLayout(opt) {
	  this.glyphs = [];
	  this._measure = this.computeMetrics.bind(this);
	  this.update(opt);
	}

	TextLayout.prototype.update = function(opt) {
	  opt = xtend({
	    measure: this._measure
	  }, opt);
	  this._opt = opt;
	  this._opt.tabSize = number(this._opt.tabSize, 4);

	  if (!opt.font)
	    throw new Error('must provide a valid bitmap font')

	  var glyphs = this.glyphs;
	  var text = opt.text||'';
	  var font = opt.font;
	  this._setupSpaceGlyphs(font);

	  var lines = wordWrap.lines(text, opt);
	  var minWidth = opt.width || 0;

	  //clear glyphs
	  glyphs.length = 0;

	  //get max line width
	  var maxLineWidth = lines.reduce(function(prev, line) {
	    return Math.max(prev, line.width, minWidth)
	  }, 0);

	  //the pen position
	  var x = 0;
	  var y = 0;
	  var lineHeight = number(opt.lineHeight, font.common.lineHeight);
	  var baseline = font.common.base;
	  var descender = lineHeight-baseline;
	  var letterSpacing = opt.letterSpacing || 0;
	  var height = lineHeight * lines.length - descender;
	  var align = getAlignType(this._opt.align);

	  //draw text along baseline
	  y -= height;

	  //the metrics for this text layout
	  this._width = maxLineWidth;
	  this._height = height;
	  this._descender = lineHeight - baseline;
	  this._baseline = baseline;
	  this._xHeight = getXHeight(font);
	  this._capHeight = getCapHeight(font);
	  this._lineHeight = lineHeight;
	  this._ascender = lineHeight - descender - this._xHeight;

	  //layout each glyph
	  var self = this;
	  lines.forEach(function(line, lineIndex) {
	    var start = line.start;
	    var end = line.end;
	    var lineWidth = line.width;
	    var lastGlyph;

	    //for each glyph in that line...
	    for (var i=start; i<end; i++) {
	      var id = text.charCodeAt(i);
	      var glyph = self.getGlyph(font, id);
	      if (glyph) {
	        if (lastGlyph)
	          x += getKerning(font, lastGlyph.id, glyph.id);

	        var tx = x;
	        if (align === ALIGN_CENTER)
	          tx += (maxLineWidth-lineWidth)/2;
	        else if (align === ALIGN_RIGHT)
	          tx += (maxLineWidth-lineWidth);

	        glyphs.push({
	          position: [tx, y],
	          data: glyph,
	          index: i,
	          line: lineIndex
	        });

	        //move pen forward
	        x += glyph.xadvance + letterSpacing;
	        lastGlyph = glyph;
	      }
	    }

	    //next line down
	    y += lineHeight;
	    x = 0;
	  });
	  this._linesTotal = lines.length;
	};

	TextLayout.prototype._setupSpaceGlyphs = function(font) {
	  //These are fallbacks, when the font doesn't include
	  //' ' or '\t' glyphs
	  this._fallbackSpaceGlyph = null;
	  this._fallbackTabGlyph = null;

	  if (!font.chars || font.chars.length === 0)
	    return

	  //try to get space glyph
	  //then fall back to the 'm' or 'w' glyphs
	  //then fall back to the first glyph available
	  var space = getGlyphById(font, SPACE_ID)
	          || getMGlyph(font)
	          || font.chars[0];

	  //and create a fallback for tab
	  var tabWidth = this._opt.tabSize * space.xadvance;
	  this._fallbackSpaceGlyph = space;
	  this._fallbackTabGlyph = xtend(space, {
	    x: 0, y: 0, xadvance: tabWidth, id: TAB_ID,
	    xoffset: 0, yoffset: 0, width: 0, height: 0
	  });
	};

	TextLayout.prototype.getGlyph = function(font, id) {
	  var glyph = getGlyphById(font, id);
	  if (glyph)
	    return glyph
	  else if (id === TAB_ID)
	    return this._fallbackTabGlyph
	  else if (id === SPACE_ID)
	    return this._fallbackSpaceGlyph
	  return null
	};

	TextLayout.prototype.computeMetrics = function(text, start, end, width) {
	  var letterSpacing = this._opt.letterSpacing || 0;
	  var font = this._opt.font;
	  var curPen = 0;
	  var curWidth = 0;
	  var count = 0;
	  var glyph;
	  var lastGlyph;

	  if (!font.chars || font.chars.length === 0) {
	    return {
	      start: start,
	      end: start,
	      width: 0
	    }
	  }

	  end = Math.min(text.length, end);
	  for (var i=start; i < end; i++) {
	    var id = text.charCodeAt(i);
	    var glyph = this.getGlyph(font, id);

	    if (glyph) {
	      //move pen forward
	      var xoff = glyph.xoffset;
	      var kern = lastGlyph ? getKerning(font, lastGlyph.id, glyph.id) : 0;
	      curPen += kern;

	      var nextPen = curPen + glyph.xadvance + letterSpacing;
	      var nextWidth = curPen + glyph.width;

	      //we've hit our limit; we can't move onto the next glyph
	      if (nextWidth >= width || nextPen >= width)
	        break

	      //otherwise continue along our line
	      curPen = nextPen;
	      curWidth = nextWidth;
	      lastGlyph = glyph;
	    }
	    count++;
	  }

	  //make sure rightmost edge lines up with rendered glyphs
	  if (lastGlyph)
	    curWidth += lastGlyph.xoffset;

	  return {
	    start: start,
	    end: start + count,
	    width: curWidth
	  }
	}

	//getters for the private vars
	;['width', 'height',
	  'descender', 'ascender',
	  'xHeight', 'baseline',
	  'capHeight',
	  'lineHeight' ].forEach(addGetter);

	function addGetter(name) {
	  Object.defineProperty(TextLayout.prototype, name, {
	    get: wrapper(name),
	    configurable: true
	  });
	}

	//create lookups for private vars
	function wrapper(name) {
	  return (new Function([
	    'return function '+name+'() {',
	    '  return this._'+name,
	    '}'
	  ].join('\n')))()
	}

	function getGlyphById(font, id) {
	  if (!font.chars || font.chars.length === 0)
	    return null

	  var glyphIdx = findChar(font.chars, id);
	  if (glyphIdx >= 0)
	    return font.chars[glyphIdx]
	  return null
	}

	function getXHeight(font) {
	  for (var i=0; i<X_HEIGHTS.length; i++) {
	    var id = X_HEIGHTS[i].charCodeAt(0);
	    var idx = findChar(font.chars, id);
	    if (idx >= 0)
	      return font.chars[idx].height
	  }
	  return 0
	}

	function getMGlyph(font) {
	  for (var i=0; i<M_WIDTHS.length; i++) {
	    var id = M_WIDTHS[i].charCodeAt(0);
	    var idx = findChar(font.chars, id);
	    if (idx >= 0)
	      return font.chars[idx]
	  }
	  return 0
	}

	function getCapHeight(font) {
	  for (var i=0; i<CAP_HEIGHTS.length; i++) {
	    var id = CAP_HEIGHTS[i].charCodeAt(0);
	    var idx = findChar(font.chars, id);
	    if (idx >= 0)
	      return font.chars[idx].height
	  }
	  return 0
	}

	function getKerning(font, left, right) {
	  if (!font.kernings || font.kernings.length === 0)
	    return 0

	  var table = font.kernings;
	  for (var i=0; i<table.length; i++) {
	    var kern = table[i];
	    if (kern.first === left && kern.second === right)
	      return kern.amount
	  }
	  return 0
	}

	function getAlignType(align) {
	  if (align === 'center')
	    return ALIGN_CENTER
	  else if (align === 'right')
	    return ALIGN_RIGHT
	  return ALIGN_LEFT
	}

	function findChar (array, value, start) {
	  start = start || 0;
	  for (var i = start; i < array.length; i++) {
	    if (array[i].id === value) {
	      return i
	    }
	  }
	  return -1
	}
	},{"as-number":2,"word-wrapper":14,"xtend":15}],8:[function(require,module,exports){
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	},{}],9:[function(require,module,exports){
	var dtype = require('dtype');
	var anArray = require('an-array');
	var isBuffer = require('is-buffer');

	var CW = [0, 2, 3];
	var CCW = [2, 1, 3];

	module.exports = function createQuadElements(array, opt) {
	    //if user didn't specify an output array
	    if (!array || !(anArray(array) || isBuffer(array))) {
	        opt = array || {};
	        array = null;
	    }

	    if (typeof opt === 'number') //backwards-compatible
	        opt = { count: opt };
	    else
	        opt = opt || {};

	    var type = typeof opt.type === 'string' ? opt.type : 'uint16';
	    var count = typeof opt.count === 'number' ? opt.count : 1;
	    var start = (opt.start || 0);

	    var dir = opt.clockwise !== false ? CW : CCW,
	        a = dir[0],
	        b = dir[1],
	        c = dir[2];

	    var numIndices = count * 6;

	    var indices = array || new (dtype(type))(numIndices);
	    for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
	        var x = i + start;
	        indices[x + 0] = j + 0;
	        indices[x + 1] = j + 1;
	        indices[x + 2] = j + 2;
	        indices[x + 3] = j + a;
	        indices[x + 4] = j + b;
	        indices[x + 5] = j + c;
	    }
	    return indices
	};
	},{"an-array":1,"dtype":3,"is-buffer":6}],10:[function(require,module,exports){
	var createLayout = require('layout-bmfont-text');
	var inherits = require('inherits');
	var createIndices = require('quad-indices');
	var buffer = require('three-buffer-vertex-data');
	var assign = require('object-assign');

	var vertices = require('./lib/vertices');
	var utils = require('./lib/utils');

	var Base = THREE.BufferGeometry;

	module.exports = function createTextGeometry (opt) {
	  return new TextGeometry(opt)
	};

	function TextGeometry (opt) {
	  Base.call(this);

	  if (typeof opt === 'string') {
	    opt = { text: opt };
	  }

	  // use these as default values for any subsequent
	  // calls to update()
	  this._opt = assign({}, opt);

	  // also do an initial setup...
	  if (opt) this.update(opt);
	}

	inherits(TextGeometry, Base);

	TextGeometry.prototype.update = function (opt) {
	  if (typeof opt === 'string') {
	    opt = { text: opt };
	  }

	  // use constructor defaults
	  opt = assign({}, this._opt, opt);

	  if (!opt.font) {
	    throw new TypeError('must specify a { font } in options')
	  }

	  this.layout = createLayout(opt);

	  // get vec2 texcoords
	  var flipY = opt.flipY !== false;

	  // the desired BMFont data
	  var font = opt.font;

	  // determine texture size from font file
	  var texWidth = font.common.scaleW;
	  var texHeight = font.common.scaleH;

	  // get visible glyphs
	  var glyphs = this.layout.glyphs.filter(function (glyph) {
	    var bitmap = glyph.data;
	    return bitmap.width * bitmap.height > 0
	  });

	  // provide visible glyphs for convenience
	  this.visibleGlyphs = glyphs;

	  // get common vertex data
	  var positions = vertices.positions(glyphs);
	  var uvs = vertices.uvs(glyphs, texWidth, texHeight, flipY);
	  var indices = createIndices({
	    clockwise: true,
	    type: 'uint16',
	    count: glyphs.length
	  });

	  // update vertex data
	  buffer.index(this, indices, 1, 'uint16');
	  buffer.attr(this, 'position', positions, 2);
	  buffer.attr(this, 'uv', uvs, 2);

	  // update multipage data
	  if (!opt.multipage && 'page' in this.attributes) {
	    // disable multipage rendering
	    this.removeAttribute('page');
	  } else if (opt.multipage) {
	    var pages = vertices.pages(glyphs);
	    // enable multipage rendering
	    buffer.attr(this, 'page', pages, 1);
	  }
	};

	TextGeometry.prototype.computeBoundingSphere = function () {
	  if (this.boundingSphere === null) {
	    this.boundingSphere = new THREE.Sphere();
	  }

	  var positions = this.attributes.position.array;
	  var itemSize = this.attributes.position.itemSize;
	  if (!positions || !itemSize || positions.length < 2) {
	    this.boundingSphere.radius = 0;
	    this.boundingSphere.center.set(0, 0, 0);
	    return
	  }
	  utils.computeSphere(positions, this.boundingSphere);
	  if (isNaN(this.boundingSphere.radius)) {
	    console.error('THREE.BufferGeometry.computeBoundingSphere(): ' +
	      'Computed radius is NaN. The ' +
	      '"position" attribute is likely to have NaN values.');
	  }
	};

	TextGeometry.prototype.computeBoundingBox = function () {
	  if (this.boundingBox === null) {
	    this.boundingBox = new THREE.Box3();
	  }

	  var bbox = this.boundingBox;
	  var positions = this.attributes.position.array;
	  var itemSize = this.attributes.position.itemSize;
	  if (!positions || !itemSize || positions.length < 2) {
	    bbox.makeEmpty();
	    return
	  }
	  utils.computeBox(positions, bbox);
	};

	},{"./lib/utils":11,"./lib/vertices":12,"inherits":5,"layout-bmfont-text":7,"object-assign":8,"quad-indices":9,"three-buffer-vertex-data":13}],11:[function(require,module,exports){
	var itemSize = 2;
	var box = { min: [0, 0], max: [0, 0] };

	function bounds (positions) {
	  var count = positions.length / itemSize;
	  box.min[0] = positions[0];
	  box.min[1] = positions[1];
	  box.max[0] = positions[0];
	  box.max[1] = positions[1];

	  for (var i = 0; i < count; i++) {
	    var x = positions[i * itemSize + 0];
	    var y = positions[i * itemSize + 1];
	    box.min[0] = Math.min(x, box.min[0]);
	    box.min[1] = Math.min(y, box.min[1]);
	    box.max[0] = Math.max(x, box.max[0]);
	    box.max[1] = Math.max(y, box.max[1]);
	  }
	}

	module.exports.computeBox = function (positions, output) {
	  bounds(positions);
	  output.min.set(box.min[0], box.min[1], 0);
	  output.max.set(box.max[0], box.max[1], 0);
	};

	module.exports.computeSphere = function (positions, output) {
	  bounds(positions);
	  var minX = box.min[0];
	  var minY = box.min[1];
	  var maxX = box.max[0];
	  var maxY = box.max[1];
	  var width = maxX - minX;
	  var height = maxY - minY;
	  var length = Math.sqrt(width * width + height * height);
	  output.center.set(minX + width / 2, minY + height / 2, 0);
	  output.radius = length / 2;
	};

	},{}],12:[function(require,module,exports){
	module.exports.pages = function pages (glyphs) {
	  var pages = new Float32Array(glyphs.length * 4 * 1);
	  var i = 0;
	  glyphs.forEach(function (glyph) {
	    var id = glyph.data.page || 0;
	    pages[i++] = id;
	    pages[i++] = id;
	    pages[i++] = id;
	    pages[i++] = id;
	  });
	  return pages
	};

	module.exports.uvs = function uvs (glyphs, texWidth, texHeight, flipY) {
	  var uvs = new Float32Array(glyphs.length * 4 * 2);
	  var i = 0;
	  glyphs.forEach(function (glyph) {
	    var bitmap = glyph.data;
	    var bw = (bitmap.x + bitmap.width);
	    var bh = (bitmap.y + bitmap.height);

	    // top left position
	    var u0 = bitmap.x / texWidth;
	    var v1 = bitmap.y / texHeight;
	    var u1 = bw / texWidth;
	    var v0 = bh / texHeight;

	    if (flipY) {
	      v1 = (texHeight - bitmap.y) / texHeight;
	      v0 = (texHeight - bh) / texHeight;
	    }

	    // BL
	    uvs[i++] = u0;
	    uvs[i++] = v1;
	    // TL
	    uvs[i++] = u0;
	    uvs[i++] = v0;
	    // TR
	    uvs[i++] = u1;
	    uvs[i++] = v0;
	    // BR
	    uvs[i++] = u1;
	    uvs[i++] = v1;
	  });
	  return uvs
	};

	module.exports.positions = function positions (glyphs) {
	  var positions = new Float32Array(glyphs.length * 4 * 2);
	  var i = 0;
	  glyphs.forEach(function (glyph) {
	    var bitmap = glyph.data;

	    // bottom left position
	    var x = glyph.position[0] + bitmap.xoffset;
	    var y = glyph.position[1] + bitmap.yoffset;

	    // quad size
	    var w = bitmap.width;
	    var h = bitmap.height;

	    // BL
	    positions[i++] = x;
	    positions[i++] = y;
	    // TL
	    positions[i++] = x;
	    positions[i++] = y + h;
	    // TR
	    positions[i++] = x + w;
	    positions[i++] = y + h;
	    // BR
	    positions[i++] = x + w;
	    positions[i++] = y;
	  });
	  return positions
	};

	},{}],13:[function(require,module,exports){
	var flatten = require('flatten-vertex-data');
	var warned = false;

	module.exports.attr = setAttribute;
	module.exports.index = setIndex;

	function setIndex (geometry, data, itemSize, dtype) {
	  if (typeof itemSize !== 'number') itemSize = 1;
	  if (typeof dtype !== 'string') dtype = 'uint16';

	  var isR69 = !geometry.index && typeof geometry.setIndex !== 'function';
	  var attrib = isR69 ? geometry.getAttribute('index') : geometry.index;
	  var newAttrib = updateAttribute(attrib, data, itemSize, dtype);
	  if (newAttrib) {
	    if (isR69) geometry.addAttribute('index', newAttrib);
	    else geometry.index = newAttrib;
	  }
	}

	function setAttribute (geometry, key, data, itemSize, dtype) {
	  if (typeof itemSize !== 'number') itemSize = 3;
	  if (typeof dtype !== 'string') dtype = 'float32';
	  if (Array.isArray(data) &&
	    Array.isArray(data[0]) &&
	    data[0].length !== itemSize) {
	    throw new Error('Nested vertex array has unexpected size; expected ' +
	      itemSize + ' but found ' + data[0].length)
	  }

	  var attrib = geometry.getAttribute(key);
	  var newAttrib = updateAttribute(attrib, data, itemSize, dtype);
	  if (newAttrib) {
	    geometry.addAttribute(key, newAttrib);
	  }
	}

	function updateAttribute (attrib, data, itemSize, dtype) {
	  data = data || [];
	  if (!attrib || rebuildAttribute(attrib, data, itemSize)) {
	    // create a new array with desired type
	    data = flatten(data, dtype);

	    var needsNewBuffer = attrib && typeof attrib.setArray !== 'function';
	    if (!attrib || needsNewBuffer) {
	      // We are on an old version of ThreeJS which can't
	      // support growing / shrinking buffers, so we need
	      // to build a new buffer
	      if (needsNewBuffer && !warned) {
	        warned = true;
	        console.warn([
	          'A WebGL buffer is being updated with a new size or itemSize, ',
	          'however this version of ThreeJS only supports fixed-size buffers.',
	          '\nThe old buffer may still be kept in memory.\n',
	          'To avoid memory leaks, it is recommended that you dispose ',
	          'your geometries and create new ones, or update to ThreeJS r82 or newer.\n',
	          'See here for discussion:\n',
	          'https://github.com/mrdoob/three.js/pull/9631'
	        ].join(''));
	      }

	      // Build a new attribute
	      attrib = new THREE.BufferAttribute(data, itemSize);
	    }

	    attrib.itemSize = itemSize;
	    attrib.needsUpdate = true;

	    // New versions of ThreeJS suggest using setArray
	    // to change the data. It will use bufferData internally,
	    // so you can change the array size without any issues
	    if (typeof attrib.setArray === 'function') {
	      attrib.setArray(data);
	    }

	    return attrib
	  } else {
	    // copy data into the existing array
	    flatten(data, attrib.array);
	    attrib.needsUpdate = true;
	    return null
	  }
	}

	// Test whether the attribute needs to be re-created,
	// returns false if we can re-use it as-is.
	function rebuildAttribute (attrib, data, itemSize) {
	  if (attrib.itemSize !== itemSize) return true
	  if (!attrib.array) return true
	  var attribLength = attrib.array.length;
	  if (Array.isArray(data) && Array.isArray(data[0])) {
	    // [ [ x, y, z ] ]
	    return attribLength !== data.length * itemSize
	  } else {
	    // [ x, y, z ]
	    return attribLength !== data.length
	  }
	  return false
	}

	},{"flatten-vertex-data":4}],14:[function(require,module,exports){
	var newline = /\n/;
	var newlineChar = '\n';
	var whitespace = /\s/;

	module.exports = function(text, opt) {
	    var lines = module.exports.lines(text, opt);
	    return lines.map(function(line) {
	        return text.substring(line.start, line.end)
	    }).join('\n')
	};

	module.exports.lines = function wordwrap(text, opt) {
	    opt = opt||{};

	    //zero width results in nothing visible
	    if (opt.width === 0 && opt.mode !== 'nowrap')
	        return []

	    text = text||'';
	    var width = typeof opt.width === 'number' ? opt.width : Number.MAX_VALUE;
	    var start = Math.max(0, opt.start||0);
	    var end = typeof opt.end === 'number' ? opt.end : text.length;
	    var mode = opt.mode;

	    var measure = opt.measure || monospace;
	    if (mode === 'pre')
	        return pre(measure, text, start, end, width)
	    else
	        return greedy(measure, text, start, end, width, mode)
	};

	function idxOf(text, chr, start, end) {
	    var idx = text.indexOf(chr, start);
	    if (idx === -1 || idx > end)
	        return end
	    return idx
	}

	function isWhitespace(chr) {
	    return whitespace.test(chr)
	}

	function pre(measure, text, start, end, width) {
	    var lines = [];
	    var lineStart = start;
	    for (var i=start; i<end && i<text.length; i++) {
	        var chr = text.charAt(i);
	        var isNewline = newline.test(chr);

	        //If we've reached a newline, then step down a line
	        //Or if we've reached the EOF
	        if (isNewline || i===end-1) {
	            var lineEnd = isNewline ? i : i+1;
	            var measured = measure(text, lineStart, lineEnd, width);
	            lines.push(measured);

	            lineStart = i+1;
	        }
	    }
	    return lines
	}

	function greedy(measure, text, start, end, width, mode) {
	    //A greedy word wrapper based on LibGDX algorithm
	    //https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/BitmapFontCache.java
	    var lines = [];

	    var testWidth = width;
	    //if 'nowrap' is specified, we only wrap on newline chars
	    if (mode === 'nowrap')
	        testWidth = Number.MAX_VALUE;

	    while (start < end && start < text.length) {
	        //get next newline position
	        var newLine = idxOf(text, newlineChar, start, end);

	        //eat whitespace at start of line
	        while (start < newLine) {
	            if (!isWhitespace( text.charAt(start) ))
	                break
	            start++;
	        }

	        //determine visible # of glyphs for the available width
	        var measured = measure(text, start, newLine, testWidth);

	        var lineEnd = start + (measured.end-measured.start);
	        var nextStart = lineEnd + newlineChar.length;

	        //if we had to cut the line before the next newline...
	        if (lineEnd < newLine) {
	            //find char to break on
	            while (lineEnd > start) {
	                if (isWhitespace(text.charAt(lineEnd)))
	                    break
	                lineEnd--;
	            }
	            if (lineEnd === start) {
	                if (nextStart > start + newlineChar.length) nextStart--;
	                lineEnd = nextStart; // If no characters to break, show all.
	            } else {
	                nextStart = lineEnd;
	                //eat whitespace at end of line
	                while (lineEnd > start) {
	                    if (!isWhitespace(text.charAt(lineEnd - newlineChar.length)))
	                        break
	                    lineEnd--;
	                }
	            }
	        }
	        if (lineEnd >= start) {
	            var result = measure(text, start, lineEnd, testWidth);
	            lines.push(result);
	        }
	        start = nextStart;
	    }
	    return lines
	}

	//determines the visible number of glyphs within a given width
	function monospace(text, start, end, width) {
	    var glyphs = Math.min(width, end-start);
	    return {
	        start: start,
	        end: start+glyphs
	    }
	}
	},{}],15:[function(require,module,exports){
	module.exports = extend;

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	},{}],16:[function(require,module,exports){
	// browserify three-bmfont-text.js -o three-bmfont-text-bundle.js
	var createGeometry = window.createGeometry = require('three-bmfont-text');
	},{"three-bmfont-text":10}]},{},[16]);

	var SDFShader = {

	  uniforms: {
	    map: { type: 't', value: null },
	    color: { type: 'v3', value: new THREE.Color('#fff') },
	    smoothing: { type: 'f', value: 0.1 },
	    threshold: { type: 'f', value: 0.5 },
	    outlineDistance: { type: 'f', value: 0.3 },
	    outlineColor: { type: 'v3', value: new THREE.Color('#000') },
	    opacity: { type: 'f', value: 1.0 },
	  },

	  vertexShader: [

	    "varying vec2 vUv;",

	    "void main() {",
	      "vUv = uv;",
	      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
	    "}"

	  ].join('\n'),

	  // outline
	  // https://github.com/libgdx/libgdx/wiki/Distance-field-fonts#adding-an-outline
	  // http://stackoverflow.com/questions/26155614/outlining-a-font-with-a-shader-and-using-distance-field

	  fragmentShader: [

	    "varying vec2 vUv;",

	    "uniform sampler2D map;",
	    "uniform vec3 color;",

	    "uniform float smoothing;",
	    "uniform float threshold;",
	    "uniform float opacity;",

	    "uniform float outlineDistance;", // Between 0 and 0.5, 0 = thick outline, 0.5 = no outline
	    "uniform vec3 outlineColor;",

	    "void main() {",
	      "float distance = texture2D( map, vUv ).a;",

	      // no outline
	      // "float alpha = smoothstep( threshold - smoothing, threshold + smoothing, distance );",
	      // "alpha *= opacity;",
	      // "gl_FragColor = vec4( color, alpha );",

	      // outline
	      "float outlineFactor = smoothstep(threshold - smoothing, threshold + smoothing, distance);", // change 0.5 to threshold?
	      "vec3 color2 = mix(outlineColor, color, outlineFactor);",
	      "float alpha = smoothstep(outlineDistance - smoothing, outlineDistance + smoothing, distance);",
	      "alpha *= opacity;",
	      "gl_FragColor = vec4( color2, alpha );",
	    "}"

	  ].join('\n')

	};

	var TextBitmap = function (config) {

	    THREE.Group.call(this);

	    this.config = config;
	    config.color = config.color || '#fff';
	    config.outlineColor = config.outlineColor || '#000';

	    config.fontKey = config.fontKey || "";
	    if (Web3DEngine.Application.instance.uiManager.haveFont(config.fontKey)) {
	        config.font = Web3DEngine.Application.instance.uiManager.fonts[config.fontKey].json;
	        config.texture = Web3DEngine.Application.instance.uiManager.fonts[config.fontKey].texture;
	    }


	    config.width = config.width || undefined; // Leave as undefined to remove word-wrapping
	    config.align = config.align || 'left';
	    config.valign = config.valign || 'center';
	    config.lineHeight = config.lineHeight || config.font.common.lineHeight;
	    config.letterSpacing = config.letterSpacing || 0;

	    // https://github.com/Jam3/three-bmfont-text
	    // defined in // three-bmfont-text-bundle.js
	    var geometry = this.geometry = createGeometry(config);

	    var material = this.material = new THREE.ShaderMaterial({
	        uniforms: THREE.UniformsUtils.clone(SDFShader.uniforms),
	        fragmentShader: SDFShader.fragmentShader,
	        vertexShader: SDFShader.vertexShader,
	        side: THREE.DoubleSide,
	        transparent: true,
	        depthTest: false
	    });

	    material.uniforms.map.value = config.texture;
	    if (config.color) material.uniforms.color.value.setStyle(config.color);
	    if (config.outlineColor) material.uniforms.outlineColor.value.setStyle(config.outlineColor);

	    var mesh = this.mesh = new THREE.Mesh(geometry, material);

	    mesh.renderOrder = 1;

	    mesh.rotation.x = Math.PI;

	    var boxGeo = new THREE.BoxGeometry(1, 1, 1);
	    var boxMat = new THREE.MeshBasicMaterial({
	        color: 0xff0000,
	        transparent: true,
	        opacity: config.showHitBox ? 1 : 0,
	        side: THREE.DoubleSide,
	        wireframe: true
	    });
	    var hitBox = this.hitBox = new THREE.Mesh(boxGeo, boxMat);
	    hitBox.mesh = mesh;

	    this.update();

	    config.scale = config.scale || 1;
	    this.scale.setScalar(config.scale);

	    this.add(mesh);
	    this.add(hitBox);

	};

	TextBitmap.prototype = Object.assign(Object.create(THREE.Group.prototype), {
	    constructor: TextBitmap,

	    update: function () {

	        var geometry = this.geometry;
	        var mesh = this.mesh;

	        geometry.update(this.config);

	        // centering
	        // todo: add config option for valign center or top (or bottom?)
	        geometry.computeBoundingBox();

	        this.hitBox.scale.set(geometry.layout.width, geometry.layout.height, 1);

	        // center horizontally
	        mesh.position.x = - geometry.layout.width / 2;

	        switch (this.config.valign) {
	            case 'top':
	                mesh.position.y = - (geometry.boundingBox.max.y - geometry.boundingBox.min.y);
	                this.hitBox.position.y = - geometry.layout.height / 2;
	                break;
	            case 'bottom':
	                mesh.position.y = 0;
	                this.hitBox.position.y = geometry.layout.height / 2;
	                break;
	            case 'center':
	            default:
	                mesh.position.y = - (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2;
	                this.hitBox.position.y = 0;
	        }

	        // for html-like flow / positioning
	        this.height = geometry.layout.height * this.config.scale;
	    },

	});

	/**
	 * @author ZhuLin
	 */

	function Text(go) {

	    Component.call(this, go);
	    this.instClassType = Text.classType;

	    if (go.transform && go.transform.isRectTransform) ; else {
	        //没有RectTransform或者只有Transform，创建一个RectTransform或者把已有的Transform替换为RectTransform
	        go.addComponent(Web3DEngine.RectTransform);
	    }

	    //Create TextBitmap
	    this._textBitmap = new TextBitmap({
	        text: "",
	        fontKey: "default",
	        width: 0,
	        align: 'center',
	        valign: 'center',
	        lineHeight: 80,
	        letterSpacing: 1,
	        scale: 1,
	        color: '#fff',
	        outlineColor: '#000',
	        showHitBox: false,
	    });

	    go.transform._pivotPoint.add(this._textBitmap);
	    this._textBitmap.position.set(0, 0, 0);
	    this._textBitmap.visible = false;
	    this._textBitmap.hitBox.userData.engineComponent = this;
	    // this._textBitmap.mesh.userData.engineComponent = this;

	    this._onClickedEvent = null;

	    go.addEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	    go.addEventListener(Web3DEngine.Event.CHANGEGAMEOBJECTLAYER, this, this.__onGameObjectLayerChanged);

	    go.transform.addEventListener(Web3DEngine.Event.RECTTRANSFORM_RESIZED, this, this.__onRectTransformResized);
	    go.transform.addEventListener(Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onClicked);

	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    Object.defineProperty(this, 'font', {

	        get: function () {
	            return this._textBitmap.config.fontKey;
	        },

	        set: function (fontKey) {
	            if (Web3DEngine.Application.instance.uiManager.haveFont(fontKey)) {
	                this._textBitmap.config.fontKey = fontKey;
	                this._textBitmap.config.font = Web3DEngine.Application.instance.uiManager.fonts[fontKey].json;
	                this._textBitmap.config.texture = Web3DEngine.Application.instance.uiManager.fonts[fontKey].texture;
	                this._textBitmap.material.uniforms.map.value = this._textBitmap.config.texture;
	                this._textBitmap.update();
	            } else {
	                console.warn("Font not loaded : " + fontKey);
	            }

	            return this;
	        }

	    });

	    Object.defineProperty(this, 'text', {

	        get: function () {
	            return this._textBitmap.config.text;
	        },

	        set: function (s) {
	            s = s || '';
	            if (s.length > 0) {
	                this._textBitmap.visible = true;
	            } else {
	                this._textBitmap.visible = false;
	            }

	            this._textBitmap.config.text = s;
	            this._textBitmap.update();
	            return this;

	        }

	    });

	    Object.defineProperty(this, 'flipY', {

	        get: function () {
	            return this._textBitmap.config.flipY;
	        },

	        set: function (flipY) {
	            this._textBitmap.config.flipY = flipY;
	            this._textBitmap.update();
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'mode', {

	        get: function () {
	            return this._textBitmap.config.mode;
	        },

	        set: function (mode) {
	            this._textBitmap.config.mode = mode;
	            this._textBitmap.update();
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'alignment', {

	        get: function () {
	            return this._textBitmap.config.align;
	        },

	        set: function (align) {
	            this._textBitmap.config.align = align;
	            this._textBitmap.update();
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'spacing', {

	        get: function () {
	            return this._textBitmap.config.letterSpacing;
	        },

	        set: function (spacing) {
	            this._textBitmap.config.letterSpacing = spacing;
	            this._textBitmap.update();
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'lineHeight', {

	        get: function () {
	            return this._textBitmap.config.lineHeight;
	        },

	        set: function (lineHeight) {
	            this._textBitmap.config.lineHeight = lineHeight;
	            this._textBitmap.update();
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'scale', {

	        get: function () {
	            return this._textBitmap.config.scale;
	        },

	        set: function (scale) {
	            this._textBitmap.config.scale = scale;
	            this._textBitmap.scale.setScalar(this.scale);
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'opacity', {

	        get: function () {
	            return this._textBitmap.material.opacity;
	        },

	        set: function (value) {
	            this._textBitmap.material.opacity = value;
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'color', {

	        get: function () {
	            return this._textBitmap.config.color;
	        },

	        set: function (color) {
	            this._textBitmap.config.color = color;
	            this._textBitmap.material.uniforms.color.value.setStyle(this.color);
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'outlineColor', {

	        get: function () {
	            return this._textBitmap.config.outlineColor;
	        },

	        set: function (color) {
	            this._textBitmap.config.outlineColor = color;
	            this._textBitmap.material.uniforms.outlineColor.value.setStyle(this.outlineColor);
	            return this;
	        }

	    });

	    Object.defineProperty(this, 'width', {

	        get: function () {
	            return this._textBitmap.config.width;
	        }

	    });

	}

	ExtendType(Text, Component, {
	    isText: true,

	    __onAddComponent: function () {
	    },

	    __onRemoveComponent: function () {
	    },

	    __onDestroyComponent: function () {
	        if (this._textBitmap) {
	            this.gameObject.transform._pivotPoint.remove(this._textBitmap);
	        }

	        this.gameObject.removeEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.CHANGEGAMEOBJECTLAYER, this, this.__onGameObjectLayerChanged);

	        this.gameObject.transform.removeEventListener(Web3DEngine.Event.RECTTRANSFORM_RESIZED, this, this.__onRectTransformResized);
	        this.gameObject.transform.removeEventListener(Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onClicked);

	        this.removeEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);
	    },

	    __onGameObjectLayerChanged: function () {
	        this._syncLayer();
	    },

	    __onRectTransformResized: function (data) {
	        let pivot = data.eventSource.pivot;
	        let txtAreaSize = new THREE.Vector2(
	            data.newRect.z - data.newRect.x,
	            data.newRect.w - data.newRect.y,
	        );
	        this._textBitmap.position.set(
	            txtAreaSize.width / 2 - pivot.x * txtAreaSize.width,
	            txtAreaSize.height / 2 - pivot.y * txtAreaSize.height,
	            0,
	        );

	        this._setWidth(data.newRect.z - data.newRect.x);
	    },

	    __onClicked: function (data) {
	        if (this._onClickedEvent) {
	            this._onClickedEvent.call(this, data);
	        }
	    },

	    _syncLayer: function () {
	        if (this._textBitmap) {
	            this._textBitmap.layers.set(this.gameObject.layer);

	            for (let index = 0; index < this._textBitmap.children.length; index++) {
	                const child = this._textBitmap.children[index];
	                child.layers.set(this.gameObject.layer);
	            }
	        }
	    },

	    _setWidth: function (newWidth) {
	        this._textBitmap.config.width = newWidth;
	        this._textBitmap.update();
	        return this;
	    },

	    onClicked: function (callBack) {
	        return this._onClickedEvent = callBack, this;
	    },

	});

	Text.attributes.add('font', {
	    type: 'string',
	    title: 'Font',
	    default: "default"
	});

	Text.attributes.add('text', {
	    type: 'string',
	    title: 'Text',
	    default: ""
	});

	Text.attributes.add('flipY', {
	    type: 'boolean',
	    title: 'FlipY',
	    default: true
	});

	Text.attributes.add('mode', {
	    type: 'string',
	    title: 'Mode',
	    default: ""
	});

	Text.attributes.add('alignment', {
	    type: 'string',
	    title: 'Alignment',
	    default: "center"
	});

	Text.attributes.add('spacing', {
	    type: 'number',
	    title: 'Spacing',
	    default: 1
	});

	Text.attributes.add('lineHeight', {
	    type: 'number',
	    title: 'LineHeight',
	    default: 80
	});

	Text.attributes.add('scale', {
	    type: 'number',
	    title: 'Scale',
	    default: 1
	});

	Text.attributes.add('color', {
	    type: 'rgb',
	    title: 'Color',
	    default: [0, 0, 0]
	});

	Text.attributes.add('opacity', {
	    type: 'number',
	    title: 'Opacity',
	    default: 1
	});

	Text.attributes.add('outlineColor', {
	    type: 'rgb',
	    title: 'OutlineColor',
	    default: [0, 0, 0]
	});

	function Image(go) {

	    Component.call(this, go);
	    this.instClassType = Image.classType;

	    if (go.transform && go.transform.isRectTransform) ; else {
	        //没有RectTransform或者只有Transform，创建一个RectTransform或者把已有的Transform替换为RectTransform
	        go.addComponent(Web3DEngine.RectTransform);
	    }

	    this._spriteRenderer = go.addComponent(SpriteRenderer);
	    go.transform._pivotPoint.add(this._spriteRenderer._imp);

	    this._onClickedEvent = null;

	    go.addEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	    go.addEventListener(Web3DEngine.Event.CHANGEGAMEOBJECTLAYER, this, this.__onGameObjectLayerChanged);

	    go.transform.addEventListener(Web3DEngine.Event.RECTTRANSFORM_RESIZED, this, this.__onRectTransformResized);
	    go.transform.addEventListener(Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onClicked);

	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    Object.defineProperty(this, 'sprite', {

	        get: function () {
	            return this._spriteRenderer._sprite;
	        },

	        set: function (sprite) {
	            sprite.pixelsPerUnit = 1;
	            sprite.pivot = new THREE.Vector2(0.5, 0.5);
	            this._spriteRenderer.sprite = sprite;

	            //fit size
	            this.__onRectTransformResized({
	                eventSource: this.gameObject.transform,
	                newRect: this.gameObject.transform.rect,
	            });
	        }

	    });

	    Object.defineProperty(this, 'frame', {

	        get: function () {
	            return this._spriteRenderer.frame;
	        },

	        set: function (value) {
	            this._spriteRenderer.frame = value;
	        }

	    });

	    Object.defineProperty(this, 'color', {

	        get: function () {
	            return this._spriteRenderer.color;
	        },

	        set: function (value) {
	            this._spriteRenderer.color = value;
	        }

	    });

	    Object.defineProperty(this, 'opacity', {

	        get: function () {
	            return this._spriteRenderer.opacity;
	        },

	        set: function (value) {
	            this._spriteRenderer.opacity = value;
	        }

	    });

	    Object.defineProperty(this, 'material', {

	        get: function () {
	            return this._spriteRenderer.material;
	        },

	        set: function (value) {
	            this._spriteRenderer.material = value;
	        }

	    });

	    Object.defineProperty(this, 'imageType', {

	        get: function () {
	            return this._spriteRenderer.drawMode;
	        },

	        set: function (value) {
	            this._spriteRenderer.drawMode = value;
	        }

	    });
	}

	ExtendType(Image, Component, {
	    isImage: true,

	    __onAddComponent: function () {
	    },

	    __onRemoveComponent: function () {
	    },

	    __onDestroyComponent: function () {
	        if (this._spriteRenderer) {
	            Web3DEngine.BaseObject.Destroy(this._spriteRenderer);
	        }

	        this.gameObject.removeEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.CHANGEGAMEOBJECTLAYER, this, this.__onGameObjectLayerChanged);

	        this.gameObject.transform.removeEventListener(Web3DEngine.Event.RECTTRANSFORM_RESIZED, this, this.__onRectTransformResized);
	        this.gameObject.transform.removeEventListener(Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onClicked);

	        this.removeEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);
	    },

	    __onGameObjectLayerChanged: function () {
	        // this._syncLayer();
	    },

	    __onRectTransformResized: function (data) {

	        let pivot = data.eventSource.pivot;
	        let spriteSize = new THREE.Vector2(
	            data.newRect.z - data.newRect.x,
	            data.newRect.w - data.newRect.y,
	        );

	        this._spriteRenderer._imp.position.set(
	            spriteSize.width / 2 - pivot.x * spriteSize.width,
	            spriteSize.height / 2 - pivot.y * spriteSize.height,
	            0,
	        );

	        if (this._spriteRenderer.sprite) {
	            this._spriteRenderer.size = spriteSize;
	        } else {
	            //using actual size when no sprite specified.
	            this._spriteRenderer.size = spriteSize.divide(SpriteRenderer.DEFAULT_SIZE);
	        }

	    },

	    __onClicked: function (data) {
	        if (this._onClickedEvent) {
	            this._onClickedEvent.call(this, data);
	        }
	    },

	    _syncLayer: function () {
	        if (this._spriteRenderer) {
	            this._spriteRenderer._imp.layers.set(this.gameObject.layer);
	        }
	    },

	    onClicked: function (callBack) {
	        return this._onClickedEvent = callBack, this;
	    },
	});

	Image.attributes.add('sprite', {
	    type: 'Sprite',
	    title: 'Sprite',
	    default: null
	});

	Image.attributes.add('frame', {
	    type: 'number',
	    title: 'Frame',
	    default: 0
	});

	Image.attributes.add('color', {
	    type: 'rgb',
	    title: 'Color',
	    default: [0, 0, 0]
	});

	Image.attributes.add('opacity', {
	    type: 'number',
	    title: 'Opacity',
	    default: 1
	});

	Image.attributes.add('material', {
	    type: 'Material',
	    title: 'Material',
	    default: null
	});

	Image.attributes.add('imageType', {
	    type: 'string',
	    title: 'ImageType',
	    default: SpriteRenderer.DrawMode.Simple
	});

	Button.TransitionMode = {
	    ColorTint: "ColorTint",       //颜色过渡
	    SpriteSwap: "SpriteSwap",       //精灵过渡
	};

	function Button(go) {
	    Component.call(this, go);
	    this.instClassType = Button.classType;

	    if (go.transform && go.transform.isRectTransform) ; else {
	        //没有RectTransform或者只有Transform，创建一个RectTransform或者把已有的Transform替换为RectTransform
	        go.addComponent(Web3DEngine.RectTransform);
	    }

	    this._active = true;
	    this._targetImage = null;
	    this._transitionMode = Button.TransitionMode.ColorTint;

	    this._normalColor = 0xFFFFFF;
	    this._highlightedColor = 0xF5F5F5;
	    this._pressedColor = 0xC8C8C8;
	    this._disabledColor = 0xC8C8C8;

	    this._setTargetEventHandler("_targetImage", go.getComponent(Image));

	    this._setImageColor(this._normalColor);

	    this._fadeDuration = 0.2;

	    this._tweenValue = { value: 0.0 };

	    this._colorFrom = new THREE.Color(this._normalColor);
	    this._colorTo = new THREE.Color(this._normalColor);
	    this._colorInterpolated = new THREE.Color(this._normalColor);

	    this._transitionTween = new TWEEN.Tween(this._tweenValue)
	        .to({ value: 1.0 }, this._fadeDuration * 1000)
	        .repeat(0)
	        .easing(TWEEN.Easing.Sinusoidal.InOut)
	        .on('update', val => {
	            if (Button.TransitionMode.ColorTint === this._transitionMode) {
	                this._colorInterpolated.copy(this._colorFrom);
	                this._setImageColor(this._colorInterpolated.lerp(this._colorTo, val.value));
	            }
	        });

	    this._onClickEventListeners = [];

	    go.addEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    Object.defineProperty(this, "active", {
	        get: function () {
	            return this._active;
	        },

	        set: function (value) {
	            this._active = value;
	        }
	    });

	    Object.defineProperty(this, "targetImage", {
	        get: function () {
	            return this._targetImage;
	        },

	        set: function (value) {
	            this._setTargetEventHandler("_targetImage", value);
	        }
	    });

	    Object.defineProperty(this, "transitionMode", {
	        get: function () {
	            return this._transitionMode;
	        },

	        set: function (value) {
	            this._transitionMode = value;
	        }
	    });

	    Object.defineProperty(this, "normalColor", {
	        get: function () {
	            return this._normalColor;
	        },

	        set: function (value) {
	            this._normalColor = value;
	        }
	    });

	    Object.defineProperty(this, "highlightedColor", {
	        get: function () {
	            return this._highlightedColor;
	        },

	        set: function (value) {
	            this._highlightedColor = value;
	        }
	    });

	    Object.defineProperty(this, "pressedColor", {
	        get: function () {
	            return this._pressedColor;
	        },

	        set: function (value) {
	            this._pressedColor = value;
	        }
	    });

	    Object.defineProperty(this, "disabledColor", {
	        get: function () {
	            return this._disabledColor;
	        },

	        set: function (value) {
	            this._disabledColor = value;
	        }
	    });

	    Object.defineProperty(this, "fadeDuration", {
	        get: function () {
	            return this._fadeDuration;
	        },

	        set: function (value) {
	            this._fadeDuration = value;
	            this._transitionTween.duration(this._fadeDuration * 1000);
	        }
	    });

	}

	ExtendType(Button, Component, {
	    isButton: true,

	    __addEvent: function (eventSource, eventType, caller, callBack) {
	        if (eventSource) {
	            eventSource.addEventListener(eventType, caller, callBack);
	        }
	    },

	    __removeEvent: function (eventSource, eventType, caller, callBack) {
	        if (eventSource) {
	            eventSource.removeEventListener(eventType, caller, callBack);
	        }
	    },

	    __addEvent: function (eventSource, eventType, caller, callBack) {
	        if (eventSource) {
	            eventSource.addEventListener(eventType, caller, callBack);
	        }
	    },

	    __removeEvent: function (eventSource, eventType, caller, callBack) {
	        if (eventSource) {
	            eventSource.removeEventListener(eventType, caller, callBack);
	        }
	    },

	    __onAddComponent: function () {

	    },

	    __onRemoveComponent: function () {

	    },

	    __onDestroyComponent: function () {

	        this._setTargetEventHandler("_targetImage", null);
	        this.gameObject.removeEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	        this.removeEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	        this.removeAllOnClickEventListeners();

	        if (this._transitionTween) {
	            this._transitionTween.stop();
	        }
	    },

	    __onPointerDown: function () {
	        this._transitionToColor(this._pressedColor);
	    },

	    __onPointerUp: function () {
	        this._transitionToColor(this._normalColor);
	    },

	    __onPointerEnter: function () {
	        this._transitionToColor(this._highlightedColor);
	    },

	    __onPointerExit: function () {
	        this._transitionToColor(this._normalColor);
	    },

	    __onPointerClick: function () {
	        this._dispatchOnClickEvent();
	    },

	    _setTargetEventHandler: function (targetEventHandlerName, value) {
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_DOWN, this, this.__onPointerDown);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_UP, this, this.__onPointerUp);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_ENTER, this, this.__onPointerEnter);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_EXIT, this, this.__onPointerExit);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onPointerClick);

	        this[targetEventHandlerName] = value;

	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_DOWN, this, this.__onPointerDown);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_UP, this, this.__onPointerUp);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_ENTER, this, this.__onPointerEnter);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_EXIT, this, this.__onPointerExit);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onPointerClick);
	    },

	    _transitionToColor: function (color) {
	        if (this._transitionTween) {
	            // this._transitionTween.stop();
	            // this._tweenValue.value = 0.0;

	            this._colorFrom.setHex(this._targetImage ? this._targetImage.color.getHex() : this._normalColor);
	            this._colorTo.setHex(color);

	            // this._transitionTween.start();
	            this._transitionTween.restart();

	            // console.log("Tween started!");

	        }

	    },

	    _setImageColor: function (color) {
	        if (this._targetImage) {
	            this._targetImage.color = color;
	        }
	    },

	    _dispatchOnClickEvent: function () {
	        this._onClickEventListeners.forEach(listener => {
	            listener.callBack.call(listener.caller, { eventSource: this });
	        });
	    },

	    addOnClickEventListener(caller, callBack) {
	        this._onClickEventListeners.push({ caller: caller, callBack: callBack });
	    },

	    removeOnClickEventListener(caller, callBack) {

	        let targetIndex = this._onClickEventListeners
	            .findIndex(listener => listener.caller == caller && listener.callBack == callBack);

	        this._onClickEventListeners.splice(targetIndex, 1);
	    },

	    removeAllOnClickEventListeners() {
	        this._onClickEventListeners.splice(0);
	    },

	});

	Button.attributes.add('active', {
	    type: 'boolean',
	    title: 'Active',
	    default: true
	});

	Button.attributes.add('targetImage', {
	    type: 'Image',
	    title: 'TargetImage',
	    default: null
	});

	Button.attributes.add('transitionMode', {
	    type: 'string',
	    title: 'TransitionMode',
	    default: Button.TransitionMode.ColorTint
	});

	Button.attributes.add('normalColor', {
	    type: 'rgb',
	    title: 'NormalColor',
	    default: 0xFFFFFF
	});

	Button.attributes.add('highlightedColor', {
	    type: 'rgb',
	    title: 'HighlightedColor',
	    default: 0xF5F5F5
	});

	Button.attributes.add('pressedColor', {
	    type: 'rgb',
	    title: 'PressedColor',
	    default: 0xC8C8C8
	});

	Button.attributes.add('disabledColor', {
	    type: 'rgb',
	    title: 'DisabledColor',
	    default: 0xC8C8C8
	});

	Button.attributes.add('fadeDuration', {
	    type: 'number',
	    title: 'FadeDuration',
	    default: 0.2
	});

	Toggle.ToggleTransitionMode = {
	    None: "None",       //硬切
	    Fade: "Fade",       //Fade 过渡
	};

	function Toggle(go) {
	    Component.call(this, go);
	    this.instClassType = Toggle.classType;

	    if (go.transform && go.transform.isRectTransform) ; else {
	        //没有RectTransform或者只有Transform，创建一个RectTransform或者把已有的Transform替换为RectTransform
	        go.addComponent(Web3DEngine.RectTransform);
	    }

	    this._active = true;
	    this._targetImage = null;
	    this._transitionMode = Button.TransitionMode.ColorTint;

	    this._normalColor = 0xFFFFFF;
	    this._highlightedColor = 0xF5F5F5;
	    this._pressedColor = 0xC8C8C8;
	    this._disabledColor = 0xC8C8C8;

	    this._targetImage = null;

	    this._setImageColor(this._normalColor);

	    this._fadeDuration = 0.2;

	    this._tweenValue = { value: 0.0 };

	    this._colorFrom = new THREE.Color(this._normalColor);
	    this._colorTo = new THREE.Color(this._normalColor);
	    this._colorInterpolated = new THREE.Color(this._normalColor);

	    this._transitionTween = new TWEEN.Tween(this._tweenValue)
	        .to({ value: 1.0 }, this._fadeDuration * 1000)
	        .repeat(0)
	        .easing(TWEEN.Easing.Sinusoidal.InOut)
	        .on('update', val => {
	            if (Button.TransitionMode.ColorTint === this._transitionMode) {
	                this._colorInterpolated.copy(this._colorFrom);
	                this._setImageColor(this._colorInterpolated.lerp(this._colorTo, val.value));
	            }
	        });


	    this._isOn = true;
	    this._checkMarkImage = null;
	    this._toggleTransitionMode = Toggle.ToggleTransitionMode.Fade;

	    this._toggleTweenValue = { value: 0.0 };
	    this._toggleTweenTarget = { value: 0.0 };

	    this._toggleTransitionTween = new TWEEN.Tween(this._toggleTweenValue)
	        .to(this._toggleTweenTarget, 0.2 * 1000)
	        .repeat(0)
	        .easing(TWEEN.Easing.Sinusoidal.InOut)
	        .on('update', val => {
	            this._checkMarkImage.opacity = val.value;
	        });

	    this._onValueChangedEventListeners = [];

	    go.addEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	    go.addEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	    this.addEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	    Object.defineProperty(this, "active", {
	        get: function () {
	            return this._active;
	        },

	        set: function (value) {
	            this._active = value;
	        }
	    });

	    Object.defineProperty(this, "targetImage", {
	        get: function () {
	            return this._targetImage;
	        },

	        set: function (value) {
	            this._setTargetEventHandler("_targetImage", value);
	        }
	    });

	    Object.defineProperty(this, "transitionMode", {
	        get: function () {
	            return this._transitionMode;
	        },

	        set: function (value) {
	            this._transitionMode = value;
	        }
	    });

	    Object.defineProperty(this, "normalColor", {
	        get: function () {
	            return this._normalColor;
	        },

	        set: function (value) {
	            this._normalColor = value;
	        }
	    });

	    Object.defineProperty(this, "highlightedColor", {
	        get: function () {
	            return this._highlightedColor;
	        },

	        set: function (value) {
	            this._highlightedColor = value;
	        }
	    });

	    Object.defineProperty(this, "pressedColor", {
	        get: function () {
	            return this._pressedColor;
	        },

	        set: function (value) {
	            this._pressedColor = value;
	        }
	    });

	    Object.defineProperty(this, "disabledColor", {
	        get: function () {
	            return this._disabledColor;
	        },

	        set: function (value) {
	            this._disabledColor = value;
	        }
	    });

	    Object.defineProperty(this, "fadeDuration", {
	        get: function () {
	            return this._fadeDuration;
	        },

	        set: function (value) {
	            this._fadeDuration = value;
	            this._transitionTween.duration(this._fadeDuration * 1000);
	        }
	    });

	    Object.defineProperty(this, "checkMarkImage", {
	        get: function () {
	            return this._checkMarkImage;
	        },

	        set: function (value) {
	            this._checkMarkImage = value;
	        }
	    });

	    Object.defineProperty(this, "isOn", {
	        get: function () {
	            return this._isOn;
	        },

	        set: function (value) {
	            this._isOn = value;
	        }
	    });

	    Object.defineProperty(this, "toggleTransitionMode", {
	        get: function () {
	            return this._toggleTransitionMode;
	        },

	        set: function (value) {
	            this._toggleTransitionMode = value;
	        }
	    });

	}

	ExtendType(Toggle, Component, {
	    isToggle: true,

	    __addEvent: function (eventSource, eventType, caller, callBack) {
	        if (eventSource) {
	            eventSource.addEventListener(eventType, caller, callBack);
	        }
	    },

	    __removeEvent: function (eventSource, eventType, caller, callBack) {
	        if (eventSource) {
	            eventSource.removeEventListener(eventType, caller, callBack);
	        }
	    },

	    __onAddComponent: function () {

	    },

	    __onRemoveComponent: function () {

	    },

	    __onDestroyComponent: function () {

	        this._setTargetEventHandler("_targetImage", null);

	        this.gameObject.removeEventListener(Web3DEngine.Event.ADDCOMPONENT, this, this.__onAddComponent);
	        this.gameObject.removeEventListener(Web3DEngine.Event.REMOVECOMPONENT, this, this.__onRemoveComponent);
	        this.removeEventListener(Web3DEngine.Event.DESTROY, this, this.__onDestroyComponent);

	        this.removeAllOnValueChangedEventListeners();

	        if (this._transitionTween) {
	            this._transitionTween.stop();
	        }
	    },

	    __onPointerDown: function () {
	        this._translateToColor(this._pressedColor);
	    },

	    __onPointerUp: function () {
	        this._translateToColor(this._normalColor);
	    },

	    __onPointerEnter: function () {
	        this._translateToColor(this._highlightedColor);
	    },

	    __onPointerExit: function () {
	        this._translateToColor(this._normalColor);
	    },

	    __onPointerClick: function () {

	        this.isOn = !this.isOn;

	        this._dispatchOnValueChangedEvent();

	        switch (this._toggleTransitionMode) {
	            case Toggle.ToggleTransitionMode.Fade:
	                if (this._checkMarkImage) {
	                    this._toggleTranslateToAlpha(this.isOn ? 1.0 : 0.0);
	                }
	                break;

	            case Toggle.ToggleTransitionMode.None:
	                if (this._checkMarkImage) {
	                    this._checkMarkImage.opacity = this.isOn ? 1.0 : 0.0;
	                }
	                break;

	            default:
	                break;
	        }
	    },

	    _setTargetEventHandler: function (targetEventHandlerName, value) {
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_DOWN, this, this.__onPointerDown);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_UP, this, this.__onPointerUp);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_ENTER, this, this.__onPointerEnter);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_EXIT, this, this.__onPointerExit);
	        this.__removeEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onPointerClick);

	        this[targetEventHandlerName] = value;

	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_DOWN, this, this.__onPointerDown);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_UP, this, this.__onPointerUp);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_ENTER, this, this.__onPointerEnter);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_EXIT, this, this.__onPointerExit);
	        this.__addEvent(this[targetEventHandlerName] ? this[targetEventHandlerName].gameObject.transform : null,
	            Web3DEngine.Event.RECTTRANSFORM_ON_POINTER_CLICK, this, this.__onPointerClick);
	    },

	    _translateToColor: function (color) {
	        if (this._transitionTween) {
	            // this._transitionTween.stop();
	            // this._tweenValue.value = 0.0;

	            this._colorFrom.setHex(this._targetImage ? this._targetImage.color.getHex() : this._normalColor);
	            this._colorTo.setHex(color);

	            // this._transitionTween.start();
	            this._transitionTween.restart();

	            // console.log("Tween started!");

	        }

	    },

	    _toggleTranslateToAlpha: function (alpha) {
	        if (this._toggleTransitionTween) {
	            // this._toggleTransitionTween.stop();

	            this._toggleTweenValue.value = this._checkMarkImage.opacity;

	            this._toggleTweenTarget.value = alpha;

	            this._toggleTransitionTween.restart();
	        }
	    },

	    _setImageColor: function (color) {
	        if (this._targetImage) {
	            this._targetImage.color = color;
	        }
	    },

	    _dispatchOnValueChangedEvent: function () {
	        this._onValueChangedEventListeners.forEach(listener => {
	            listener.callBack.call(listener.caller, { eventSource: this, value: this.isOn });
	        });
	    },

	    addOnValueChangedEventListener(caller, callBack) {
	        this._onValueChangedEventListeners.push({ caller: caller, callBack: callBack });
	    },

	    removeOnValueChangedEventListener(caller, callBack) {

	        let targetIndex = this._onValueChangedEventListeners
	            .findIndex(listener => listener.caller == caller && listener.callBack == callBack);

	        this._onValueChangedEventListeners.splice(targetIndex, 1);
	    },

	    removeAllOnValueChangedEventListeners() {
	        this._onValueChangedEventListeners.splice(0);
	    },

	});

	Toggle.attributes.add('active', {
	    type: 'boolean',
	    title: 'Active',
	    default: true
	});

	Toggle.attributes.add('targetImage', {
	    type: 'Image',
	    title: 'TargetImage',
	    default: null
	});

	Toggle.attributes.add('transitionMode', {
	    type: 'string',
	    title: 'TransitionMode',
	    default: Button.TransitionMode.ColorTint
	});

	Toggle.attributes.add('normalColor', {
	    type: 'rgb',
	    title: 'NormalColor',
	    default: 0xFFFFFF
	});

	Toggle.attributes.add('highlightedColor', {
	    type: 'rgb',
	    title: 'HighlightedColor',
	    default: 0xF5F5F5
	});

	Toggle.attributes.add('pressedColor', {
	    type: 'rgb',
	    title: 'PressedColor',
	    default: 0xC8C8C8
	});

	Toggle.attributes.add('disabledColor', {
	    type: 'rgb',
	    title: 'DisabledColor',
	    default: 0xC8C8C8
	});

	Toggle.attributes.add('fadeDuration', {
	    type: 'number',
	    title: 'FadeDuration',
	    default: 0.1
	});

	Toggle.attributes.add('checkMarkImage', {
	    type: 'Image',
	    title: 'CheckMarkImage',
	    default: null
	});

	Toggle.attributes.add('isOn', {
	    type: 'boolean',
	    title: 'IsOn',
	    default: true
	});

	Toggle.attributes.add('toggleTransitionMode', {
	    type: 'string',
	    title: 'ToggleTransitionMode',
	    default: Toggle.ToggleTransitionMode.Fade
	});

	function LayerMask() {
	    this._value = 0;
	}

	LayerMask.__layerTable =
	    ["Default","TransparentFX","Ignore Raycast",null,"Water","UI",null,null,//0-7
	    null,null,null,null,null,null,null,null,//8-15
	    null,null,null,null,null,null,null,null,//16-23
	    null,null,null,null,null,null,null,null];//24-31

	LayerMask.GetMask = function(layerNames)
	{
	    let maskValue = 0;
	    if(layerNames instanceof Array)
	    {
	        for(let index = 0; index < layerNames.length; ++index)
	        {
	            let pos = LayerMask.__layerTable.indexOf(layerNames[index]);
	            if(pos >= 0)
	            {
	                maskValue |= (1<<pos);
	            }
	        }
	    }
	    else {
	        let layerIndex = LayerMask.NameToLayer(layerNames);
	        if(layerIndex >= 0)
	        {
	            layerIndex = (1<<layerIndex);
	        }
	    }

	    return maskValue;
	};

	LayerMask._SetMaskName = function(layerIndex, name)
	{
	    if(LayerMask.__layerTable[layerIndex] == null)
	    {
	        LayerMask.__layerTable[layerIndex] = name;
	    }
	};

	LayerMask.LayerToName = function(layerIndex)
	{
	    if(layerIndex >= 0 && layerIndex < LayerMask.__layerTable.length)
	    {
	        return LayerMask.__layerTable[layerIndex];
	    }

	    return null;
	};

	LayerMask.NameToLayer = function (layerName) {
	    return LayerMask.__layerTable.indexOf(layerName);
	};

	ProjectSettings._eventDispatcher = new EventDispatcher();

	function ProjectSettings() {

	}

	/*---------Quality---------*/
	ProjectSettings.ENUM_QUALITYLEVEL = {
	    Performance:"Performance",
	    Balanced:"Balanced",
	    Fantastic:"Fantastic",
	};

	ProjectSettings._qualityLevel = ProjectSettings.ENUM_QUALITYLEVEL.Balanced;

	ProjectSettings.setQualityLevel = function(level) {
	    //TODO
	    // if(level == ProjectSettings._qualityLevel) return;
	    ProjectSettings._qualityLevel = level;
	};


	/*---------TAG---------*/
	ProjectSettings._tagTable = new Array();

	ProjectSettings.addTag = function(tag){
	    var index = ProjectSettings._tagTable.indexOf(tag);
	    if(!(index > -1))
	    {
	        ProjectSettings._tagTable.push(tag);
	    }
	};

	ProjectSettings.removeTag = function(tag){
	    var index = ProjectSettings._tagTable.indexOf(tag);
	    if(index > -1)
	    {
	        ProjectSettings._tagTable.splice(index, 1);

	        //TODO
	        //删除项目中所有已绑定该tag的对象
	    }
	};


	/*---------Save&Load---------*/
	ProjectSettings.saveFile = function() {
	    let layers = LayerMask.__layerTable;

	    let tags = ProjectSettings._tagTable;

	    let quality = {};
	    quality.qualityLevel = ProjectSettings._qualityLevel;

	    let output = {layers, tags, quality};
	    return JSON.stringify(output, null, 2);
	};

	ProjectSettings.loadJson = function( json ){
	    if(json.layers)
	        LayerMask.__layerTable = json.layers;

	    if(json.tags)
	        ProjectSettings._tagTable = json.tags;

	    if(json.quality)
	        ProjectSettings.setQualityLevel(json.quality.qualityLevel);
	};

	function GetTansformWorldBoundingBox(transform)
	{
	    let box3 = new THREE.Box3().setFromObject(transform.gameObject._imp);
	    let bounds = new Bounds();
	    box3.getCenter(bounds.center);
	    box3.getSize(bounds.extents);
	    if(bounds.extents.equals(new THREE.Vector3(0,0,0)) && bounds.center.equals(new THREE.Vector3(0,0,0)))
	    {
	        bounds.center = transform.position;
	    }
	    return bounds;
	}

	/**
	 * 本引擎的命名空间.
	 * @namespace Web3DEngine
	 */

	exports._W3DGLTFLoader = _W3DGLTFLoader;
	exports._GLTFLoader = _GLTFLoader;
	exports._MMDLoader = _MMDLoader;
	exports._TGALoader = _TGALoader;
	exports.AssetLoader = AssetLoader;
	exports.URLRequest = URLRequest;
	exports.Asset = Asset;
	exports.AudioClip = AudioClip;
	exports.Material = Material;
	exports.PrimitiveType = PrimitiveType;
	exports.Mesh = Mesh;
	exports.RenderTexture = RenderTexture;
	exports.Texture = Texture;
	exports.Sprite = Sprite;
	exports.BaseObject = BaseObject;
	exports.Bounds = Bounds;
	exports.Component = Component;
	exports.Event = Event$1;
	exports.EventDispatcher = EventDispatcher;
	exports.ExtendType = ExtendType;
	exports.Color = Color;
	exports.Vector2 = Vector2;
	exports.Vector3 = Vector3;
	exports.Vector4 = Vector4;
	exports.Quaternion = Quaternion;
	exports.Euler = Euler;
	exports.Matrix4 = Matrix4;
	exports.Curve = Curve;
	exports.CurveSet = CurveSet;
	exports.GameObject = GameObject;
	exports.AnimationAction = AnimationAction;
	exports.AnimationPlayer = AnimationPlayer;
	exports.Behaviour = Behaviour;
	exports.MeshFilter = MeshFilter;
	exports.BoxCollider = BoxCollider;
	exports.Collider = Collider;
	exports.Rigidbody = Rigidbody;
	exports.Collision = Collision;
	exports.MeshRenderer = MeshRenderer;
	exports.Renderer = Renderer;
	exports.SkinnedMeshRenderer = SkinnedMeshRenderer;
	exports.SpriteRenderer = SpriteRenderer;
	exports.AnimatedSpriteRenderer = AnimatedSpriteRenderer;
	exports.GameObjectScriptHandler = GameObjectScriptHandler;
	exports.MonoBehaviour = MonoBehaviour;
	exports.ScriptAttributes = ScriptAttributes;
	exports.AudioListener = AudioListener;
	exports.AudioSource = AudioSource;
	exports.Camera = Camera;
	exports.Light = Light;
	exports.Transform = Transform;
	exports.ParticleSystem = ParticleSystem;
	exports.GPUParticleSystem = GPUParticleSystem;
	exports.AnimationHelper = AnimationHelper;
	exports.Input = Input;
	exports.RectTransform = RectTransform;
	exports.Canvas = Canvas;
	exports.Text = Text;
	exports.Image = Image;
	exports.Button = Button;
	exports.Toggle = Toggle;
	exports._Animation = _Animation;
	exports._Physics = _Physics;
	exports.Application = Application;
	exports.AssetManager = AssetManager;
	exports.AudioManager = AudioManager;
	exports.LayerMask = LayerMask;
	exports.ParticleSystemManager = ParticleSystemManager;
	exports.Scene = Scene;
	exports.SceneManager = SceneManager;
	exports.RenderSettings = RenderSettings;
	exports.ProjectSettings = ProjectSettings;
	exports.GetTansformWorldBoundingBox = GetTansformWorldBoundingBox;
	exports.TWEEN = TWEEN;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
