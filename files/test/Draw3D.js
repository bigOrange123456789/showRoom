var myDraw3D=new Draw3D();
function Draw3D(){
    this.createLight=function () {
        var scene    =appInst._renderScenePass.scene;
        scene.add( new THREE.AmbientLight( 0x444444 ) );

        var light1 = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light1.position.set( 0, 1, 0 );
        scene.add( light1 );

        var light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light2.position.set( 0, - 1, 0 );
        scene.add( light2 );
    }
    this.draw=function () {
        var geometry=new THREE.BufferGeometry();
        var vertices=new Float32Array([
            -1.0, -1.0, 1.0,
            1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,

            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, -1.0, 1.0,

            0, 1, 0,
            0, 1, 1,
            1, 1, 0
        ]);
        geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
        var material = new THREE.MeshBasicMaterial({color: 0xff0000});
        var mesh = new THREE.Mesh(geometry, material);
        appInst._renderScenePass.scene.add(mesh);
        return mesh;
        //var myParamMeasure=new ParamMeasure(mesh,0);
    }
    this.draw_zhemian=function(){
        //开始测试
        var scene    =appInst._renderScenePass.scene;
        var cs= new Array();
        cs.push(new THREE.Color(0x000000 ));
        cs.push(new THREE.Color(0xffffff ));
        cs.push(new THREE.Color(0x0000ff ));
        cs.push(new THREE.Color(0xff0000 ));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        cs.push(new THREE.Color(0xffffff * Math.random()));
        var triangles = 100;
        var geometry = new THREE.BufferGeometry();
        var positions = new Float32Array( triangles * 3 * 3*2 );
        var normals = new Float32Array( triangles * 3 * 3*2 );
        var colors = new Float32Array( triangles * 3 * 3*2 );
        var color = new THREE.Color();
        var n = 800, n2 = n / 2;    // triangles spread in the cube
        var d = 120, d2 = d / 2;    // individual triangle size
        var pA = new THREE.Vector3();
        var pB = new THREE.Vector3();
        var pC = new THREE.Vector3();
        var pD = new THREE.Vector3();
        var cb = new THREE.Vector3();
        var ab = new THREE.Vector3();
        for ( var i = 0; i < positions.length; i += 18 ) {
            // positions
            var x = Math.floor(i/180);
            var y = 0;
            var z = i/18%10;

            var ax = x ;
            var ay =x%2/2;
            var az = z ;

            var bx = x ;
            var by = x%2/2;
            var bz = z + 1;

            var cx = x + 1;
            var cy = (x+1)%2/2;
            var cz = z ;

            var dx = x + 1;
            var dy = (x+1)%2/2;
            var dz = z +1;
            positions[ i ] = ax;
            positions[ i + 1 ] = ay;
            positions[ i + 2 ] = az;
            positions[ i + 3 ] = bx;
            positions[ i + 4 ] = by;
            positions[ i + 5 ] = bz;
            positions[ i + 6 ] = cx;
            positions[ i + 7 ] = cy;
            positions[ i + 8 ] = cz;

            positions[ i+9 ] = dx;
            positions[ i + 10 ] = dy;
            positions[ i + 11 ] = dz;
            positions[ i + 12 ] = bx;
            positions[ i +13 ] = by;
            positions[ i + 14 ] = bz;
            positions[ i + 15 ] = cx;
            positions[ i + 16 ] = cy;
            positions[ i + 17 ] = cz;

            // flat face normals
            pA.set( ax, ay, az );
            pB.set( bx, by, bz );
            pC.set( cx, cy, cz );
            pD.set( dx, dy, dz );
            cb.subVectors( pC, pB );
            ab.subVectors( pA, pB );
            cb.cross( ab );
            cb.normalize();
            var nx = cb.x;
            var ny = cb.y;
            var nz = cb.z;

            normals[ i ] = nx;
            normals[ i + 1 ] = ny;
            normals[ i + 2 ] = nz;
            normals[ i + 3 ] = nx;
            normals[ i + 4 ] = ny;
            normals[ i + 5 ] = nz;
            normals[ i + 6 ] = nx;
            normals[ i + 7 ] = ny;
            normals[ i + 8 ] = nz;

            cb.subVectors( pC, pB );
            ab.subVectors( pD, pB );
            cb.cross( ab );
            cb.normalize();
            nx = cb.x;
            ny = cb.y;
            nz = cb.z;

            normals[ i +9] = nx;
            normals[ i +10 ] = ny;
            normals[ i +11 ] = nz;
            normals[ i +12 ] = nx;
            normals[ i +13 ] = ny;
            normals[ i +14 ] = nz;
            normals[ i +15 ] = nx;
            normals[ i + 16 ] = ny;
            normals[ i + 17 ] = nz;

            // colors
            var vx = ( x / n ) + 0.5;
            var vy = ( y / n ) + 0.5;
            var vz = ( z / n ) + 0.5;
            console.log(z);
            colors[ i ] = cs[x+z].r;
            colors[ i + 1 ] = cs[x+z].g;
            colors[ i + 2 ] = cs[x+z].b;
            colors[ i + 3 ] = cs[x+z+1].r;
            colors[ i + 4 ] = cs[x+z+1].g;
            colors[ i + 5 ] = cs[x+z+1].b;
            colors[ i + 6 ] = cs[x+z+1].r;
            colors[ i + 7 ] = cs[x+z+1].g;
            colors[ i + 8 ] = cs[x+z+1].b;

            colors[ i+9 ] = cs[x+z+2].r;
            colors[ i + 10 ] = cs[x+z+2].g;
            colors[ i + 11 ] = cs[x+z+2].b;
            colors[ i + 12 ] = cs[x+z+1].r;
            colors[ i + 13 ] = cs[x+z+1].g;
            colors[ i + 14 ] = cs[x+z+1].b;
            colors[ i + 15 ] = cs[x+z+1].r;
            colors[ i + 16] = cs[x+z+1].g;
            colors[ i + 17 ] = cs[x+z+1].b;
        }
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
        geometry.computeBoundingSphere();
        var material = new THREE.MeshPhongMaterial( {
            color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
            side: THREE.DoubleSide, vertexColors: THREE.VertexColors
        } );
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        //完成测试
    }
}