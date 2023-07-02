let up = false;
let right = false;
let down = false;
let left = false;
let rollLeft = false;
let rollRight = false;
let SFoils = false;

document.addEventListener('keydown',press)
    function press(e){
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
            up = true
        }
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
            right = true
        }
        if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
            down = true
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
            left = true
        }
        if (e.keyCode === 67){
            cameraChange = true;
        }
        if (e.keyCode === 32){
            SFoils = true;
        }
    }



document.addEventListener('keyup',release)
    function release(e){
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
            up = false
        }
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
            right = false
        }
        if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
            down = false
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
            left = false
        }
        if (e.keyCode === 67){
            cameraChange = false;
        }
        if (e.keyCode === 32){
            SFoils = false;
        }
    }



function gameLoop(){
    //var rover = document.getElementById('rover');
    var currentPosition = bwing.ship.getAttribute('position');
    var currentRotation = bwing.ship.getAttribute('rotation');

    var direction = new THREE.Vector3(0, currentRotation.y, currentPosition.z);
    
    let speed = bwing.minSpeed;
    console.log(speed);

    bwing.ship.object3D.translateZ(speed);


    if (up){
        if(speed >= bwing.maxSpeed){
            console.log("here");
            //bwing.ship.object3D.translateZ(bwing.maxSpeed);
            speed = bwing.maxSpeed;
        }else{
            speed += bwing.accelSpeed;
            //bwing.ship.object3D.translateZ(speed);
        }
    }
    if(down){
        if(speed <= bwing.minSpeed){
            speed = bwing.minSpeed;
            //bwing.ship.object3D.translateZ(bwing.minSpeed);
        }else{
            speed -= bwing.deccelSpeed;
            //bwing.ship.object3D.translateZ(speed);
        }
    }
    if(left){
        bwing.ship.setAttribute("rotation", {x: 0, y: (currentRotation.y + 1), z: 0});
    }
    if(right){
        bwing.ship.setAttribute("rotation", {x: 0, y: (currentRotation.y - 1), z:  0});
    }

    if(SFoils){
        bwing.toggleSFoils();
    }
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/*
document.addEventListener('keyup', event => {
    if (event.code === 'ArrowLeft') {
        bwing.ship.object3D.translateZ(10);
    }
});
*/