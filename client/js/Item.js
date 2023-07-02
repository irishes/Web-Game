class Item {
    constructor(){
        this.health = 1;

        this.objectRef;

        this.object = this.buildObject();
    }

    buildObject(){
        let random = Math.floor(Math.random() * 10);
        let randomize = random + " " + random + " " + random;

        let objectEntity = document.createElement("a-entity");
        objectEntity.setAttribute("position", );
        objectEntity.setAttribute("scale", "" + randomize +"");
        objectEntity.setAttribute("rotation", "" + randomize +"");


        let objectModel = document.createElement("a-box");
        objectModel.setAttribute("color", "#525252");

        objectEntity.appendChild(objectModel);

        this.objectRef = objectEntity;

        return objectEntity;
    }
}