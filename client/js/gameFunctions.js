let game = document.getElementsByClassName("game")[0];
console.log(game);

/*
function addBox(x, y, z){
    let box = document.createElement("a-box");
    box.setAttribute("position", x + " " + y + " " + z);
    box.setAttribute("color", "#4CC3D9");

    game.appendChild(box);
}

function addXWING(){
    let xwing = document.createElement("a-entity");
    xwing.setAttribute("gltf-model", "/client/models/bwing_hull.glb");
    xwing.setAttribute("position", "0 0 0");
    xwing.setAttribute("scale", ".15 .15 .15");

    game.appendChild(xwing);
}
*/


function addToScene(entity){
    game.appendChild(entity);
}

let bwing = new Ship();
//console.log(bwing.ship);
addToScene(bwing.ship);

let obj_1 = new Item();
//addToScene(obj_1.object);

let obj_2 = new Item();
//addToScene(obj_2.object);

let obj_3 = new Item();
//addToScene(obj_3.object);

let obj_4 = new Item();
//addToScene(obj_4.object);

/*
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 82) {
        console.log("here");
        bwing.ship.translateZ(10);
    }
});

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 32) {
        bwing.toggleSFoils();
    }
});
*/
