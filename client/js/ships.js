function Ship(){
    /// INFO ///
    let name = "";
    let nickName = "";
    let type = "";
    let allegience = [""];
    let hasHyperDrive = false;

    /// STATS ///
    // Movement
    let accelSpeed = 0;
    let deccelSpeed = 0;
    let maxSpeed = 0;
    let minSpeed = 0;
    let pitchSpeedUp = 0;
    let pitchSpeedDown = 0;
    let yawSpeedLeft = 0;
    let yawSpeedRight = 0;
    let rollSpeedLeft = 0;
    let rollSpeedRight = 0;

    // Health
    let shields = 0;
    let hull = 0;

    /// FILES ///
    // Models
    let model = "/client/models/bwing_hull.glb";
    let parts = [];

    // SFX
    let engineSFX = "";
    let blasterSFX = "";

    function buildShip(x, y, z){
        let shipElement = document.createElement("a-entity");
        shipElement.setAttribute("gltf-model", model);
        shipElement.setAttribute("position", x + " " + " " + y + " " + z);
        shipElement.setAttribute("scale", ".15 .15 .15");

        if(parts.length > 0){
            for(let i=0;i<parts.length;i++){
                let part = document.createElement("a-entity");
                part.setAttribute("gltf-model", parts[i].model);
                part.setAttribute("position", parts[i].x + " " + parts[i].y + " " + parts[i].z);
                part.setAttribute("scale", ".15 .15 .15");
    
                shipElement.appendChild(part);
            }
        }
        return shipElement;
    }

    function addToScene(x, y, z){
        let game = document.getElementById("game");
        game.appendChild(buildShip(x, y, z));
    }

}

function Part(x, y, z, model, type){
    /// INFO ///
    let partType = type;
    let partModel = model;

    /// COORDINATES ///
    let x = x;
    let y = y;
    let z = z;
}