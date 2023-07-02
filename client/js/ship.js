class Ship {    
    constructor(){
        /// Ship ///
        // Info
        this.name = "";
        this.shipType = "";

        // Health
        this.health = 0;
        this.shields = 0;

        // Movement
        this.leftRollSpeed;
        this.rightRollSpeed;
        this.upPitchSpeed;
        this.downPitchSpeed;
        this.leftYawSpeed = 10;
        this.rightYawSpeed = 10;
        this.accelSpeed = .1;
        this.deccelSpeed = .1;
        this.maxSpeed = 1;
        this.minSpeed = .1;

        // S-Foils
        this.hasSFoils = true;
        this.SFoils = false;
        this.SFoilSpeed = 3000;

        // Audio
        this.aud_SFoil;

        // Model File Paths
        this.hullModelPath = "/client/models/bwing_hull.glb";
        this.leftWingModelPath = "/client/models/bwing_wing_l.glb";
        this.rightWingModelPath = "/client/models/bwing_wing_r.glb";

        this.leftWingOffset = "0.572 -0.904 -0.136";
        this.rightWingOffset = "-0.572 -0.904 -0.136";

        this.leftWingSFoilsOnAngle = "0 0 0";
        this.leftWingSFoilsOffAngle = "0 0 -90";

        this.rightWingSFoilsOnAngle = "0 0 0";
        this.rightWingSFoilsOffAngle = "0 0 90";

        // Cameras
        this.chaseCam;
        this.chaseCamPosition = "0 -3 -11";
        this.chaseCamRotation = "0 180 0";

        this.reverseCam;
        this.reverseCamPosition;
        this.reverseCamRotation;

        // Entity References
        this.hullRef;
        this.leftWingRef;
        this.rightWingRef;

        this.ship = this.buildShip();
    }

    buildShip(){
        let shipEntity = document.createElement("a-entity");
        shipEntity.setAttribute("name", "Main Ship Component");
        shipEntity.setAttribute("gltf-model", this.hullModelPath);
        //ship.setAttribute("position", x + " " + " " + y + " " + z);
        shipEntity.setAttribute("scale", ".15 .15 .15");
        shipEntity.setAttribute("rotation", "0 180 0");

        let leftWingEntity = document.createElement("a-entity");
        leftWingEntity.setAttribute("name", "Left Wing Component");
        leftWingEntity.setAttribute("gltf-model", this.leftWingModelPath);
        leftWingEntity.setAttribute("position", this.leftWingOffset);

        let rightWingEntity = document.createElement("a-entity");
        rightWingEntity.setAttribute("name", "Right Wing Component");
        rightWingEntity.setAttribute("gltf-model", this.rightWingModelPath);
        rightWingEntity.setAttribute("position", this.rightWingOffset);

        // Check Ship Settings
        if(this.SFoils === true){
            leftWingEntity.setAttribute("rotation", this.leftWingSFoilsOnAngle);
            rightWingEntity.setAttribute("rotation", this.rightWingSFoilsOnAngle);
        }else{
            leftWingEntity.setAttribute("rotation", this.leftWingSFoilsOffAngle);
            rightWingEntity.setAttribute("rotation", this.rightWingSFoilsOffAngle);
        }

        shipEntity.appendChild(leftWingEntity);
        shipEntity.appendChild(rightWingEntity);

        // Build Cameras (Chase Cam on By Default)
        this.chaseCam = document.createElement("a-entity");
        this.chaseCam.setAttribute("camera", "active: true;");
        this.chaseCam.setAttribute("position", this.chaseCamPosition);
        this.chaseCam.setAttribute("rotation", this.chaseCamRotation);

        this.hullRef = shipEntity;
        this.leftWingRef = leftWingEntity;
        this.rightWingRef = rightWingEntity;

        shipEntity.appendChild(this.chaseCam);

        return shipEntity;
    }

    toggleSFoils(){
        if(this.SFoils === true){
            this.SFoils = false;
            this.leftWingRef.setAttribute("animation", "property: rotation; to:" + this.leftWingSFoilsOffAngle + "; from:" + this.leftWingSFoilsOnAngle + "; loop: false; dur: " + this.SFoilSpeed + "");
            this.rightWingRef.setAttribute("animation", "property: rotation; to:" + this.rightWingSFoilsOffAngle + "; from:" + this.rightWingSFoilsOnAngle + "; loop: false; dur: " + this.SFoilSpeed + "");
        }else{
            this.SFoils = true;
            this.leftWingRef.setAttribute("animation", "property: rotation; to:" + this.leftWingSFoilsOnAngle + "; from:" + this.leftWingSFoilsOffAngle + "; loop: false; dur: " + this.SFoilSpeed + "");
            this.rightWingRef.setAttribute("animation", "property: rotation; to:" + this.rightWingSFoilsOnAngle + "; from:" + this.rightWingSFoilsOffAngle + "; loop: false; dur: " + this.SFoilSpeed + "");
        }
    }

    accelerateForward(){

    }
}