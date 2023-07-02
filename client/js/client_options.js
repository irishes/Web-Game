/*
function setFactions(data){
    let factionButtons = document.getElementById("factionButtons");
    let factionsArray = data["availableFactions"];

    for(let i=0;i<factionsArray.length;i++){
        let factionName = factionsArray[i];

        if(document.getElementById(factionName) === null){
            let factionButton = document.createElement("div");
            factionButton.classList.add("img_button");
            factionButton.setAttribute("faction", factionName);
            factionButton.setAttribute("id", factionName);
            
            let factionImg = document.createElement("img");
            factionImg.src = "/client/img/flags/" + factionName + "_flag.jpg";
    
            factionButton.appendChild(factionImg);
    
            factionButton.addEventListener("click", function(){
                let shipSection = document.getElementById("ship");
                shipSection.classList.remove("hidden");
                let factionSelection = this.getAttribute("faction");
    
                clearShipButtons();
                setShips(factionSelection, data);
            });
    
            factionButtons.appendChild(factionButton);
        }else{
            console.log("Reconnect?");
        }
    }
}

function setShips(faction, data){
    let shipArray = Object.keys(data["ships"][0]);

    for(let i=0;i<shipArray.length;i++){
        let current = data["ships"][0][shipArray[i]];

        if(current["allegience"] == faction){
            //clearShipButtons();
            addShipButton(current);
        }
    }
}

function clearShipButtons(){
    let shipButtons = document.getElementById("shipButtons");
    shipButtons.innerHTML = "";
}

function addShipButton(obj){
    let shipButtons = document.getElementById("shipButtons");
    let shipButton = document.createElement("div");

    let shipTitle = document.createElement("h3");
    shipTitle.innerHTML = obj["name"];

    let shipModel = document.createElement("div");
    shipModel.innerHTML = '<model-viewer alt="" src="' + obj["model"] + '" shadow-intensity="1"  auto-rotate></model-viewer>';

    shipButton.appendChild(shipTitle);
    shipButton.appendChild(shipModel);

    shipButton.classList.add("ship_button");
    shipButtons.appendChild(shipButton);
}

function selectSector(element){
    let info = document.getElementsByClassName("info")[0];

    if(element.classList.contains("selected")){
        element.classList.remove("selected");
        info.classList.add("hidden");
    }else{
        let sectors = document.getElementsByClassName("sector");

        for(let i=0;i<sectors.length;i++){
            sectors[i].classList.remove("selected");
        }
    
        element.classList.add("selected");
        info.classList.remove("hidden");

        setInfo(element);
    }
}

function setInfo(element){
    let data = element;
    console.log(data);
    let infoName = document.getElementById("info-name");
    let infoOccupied = document.getElementById("info-occupied");
    let infoPlayers = document.getElementById("info-players");
    let infoDescription = document.getElementById("info-description");

    infoName.innerHTML = "Name: " + data.getAttribute("name") + " (" + data.getAttribute("id") + ")";
    infoDescription.innerHTML = "Description: " + data.getAttribute("description");
    infoOccupied.innerHTML = "Occupied By: " + data.getAttribute("occupied");
    infoPlayers.innerHTML = "Players Active: " + data.getAttribute("players");
}
*/