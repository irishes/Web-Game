let express = require('express');
let app = express();
let serv = require('http').Server(app);

/// Server Settings
port = 2000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

serv.listen(port);
console.log("Server started on port: " + port);

let SOCKET_LIST = {};

let io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
    console.log('Player Connected');

    socket.id = Math.random();
    socket.x = Math.floor(Math.random() * 20);
    socket.y = Math.floor(Math.random() * 20);
    socket.z = Math.floor(Math.random() * 20);

    SOCKET_LIST[socket.id] = socket;

    socket.emit("gameSettings", gameSettings);
});

setInterval(function(){
    for(let i in SOCKET_LIST){
        let socket = SOCKET_LIST[i];
        socket.x;
        socket.y;
        socket.z;

        socket.emit('newPosition', {
            x:socket.x,
            y:socket.y,
            z:socket.z
        });
    }
}, 1000);

/// Game Settings
let gameSettings = {
    // Rebels, Empire, Scum, CIS, Republic
    availableFactions: ["Rebellion", "Empire"],
    ships: [
        {
            "TIE/LN": {
                "turnLeftSpeed": 0,
                "turnRightSpeed": 0,
                "accelSpeed": 0,
                "deccelSpeed": 0,
                "maxSpeed": 0,
                "minSpeed": 0,
                "pitchSped": 0,
                "yawSpeed": 0,
                "rollSpeed": 0,
                "allegience": ["Empire"],
                "name": "TIE/LN",
                "nickName": "Tie Fighter",
                "hasHyperDrive": false,
                "shields": 0,
                "hull": 0,
                "model": "/client/models/tie_ln.glb"
            },
            "TIE/SA": {
                "turnLeftSpeed": 0,
                "turnRightSpeed": 0,
                "accelSpeed": 0,
                "deccelSpeed": 0,
                "maxSpeed": 0,
                "minSpeed": 0,
                "pitchSped": 0,
                "yawSpeed": 0,
                "rollSpeed": 0,
                "allegience": ["Empire"],
                "name": "TIE/SA",
                "nickName": "Tie Bomber",
                "hasHyperDrive": false,
                "shields": 0,
                "hull": 0,
                "model": "/client/models/tie_ln.glb"
            },
            "TIE/IN": {
                "turnLeftSpeed": 0,
                "turnRightSpeed": 0,
                "accelSpeed": 0,
                "deccelSpeed": 0,
                "maxSpeed": 0,
                "minSpeed": 0,
                "pitchSped": 0,
                "yawSpeed": 0,
                "rollSpeed": 0,
                "allegience": ["Empire"],
                "name": "TIE/IN",
                "nickName": "Tie Interceptor",
                "hasHyperDrive": false,
                "shields": 0,
                "hull": 0,
                "model": "/client/models/tie_ln.glb"
            },
            "T-65": {
                "turnLeftSpeed": 0,
                "turnRightSpeed": 0,
                "accelSpeed": 0,
                "deccelSpeed": 0,
                "maxSpeed": 0,
                "minSpeed": 0,
                "pitchSped": 0,
                "yawSpeed": 0,
                "rollSpeed": 0,
                "allegience": ["Rebellion"],
                "name": "T-65",
                "nickName": "X-Wing",
                "hasHyperDrive": false,
                "shields": 0,
                "hull": 0,
                "model": "/client/models/xwing.glb"
            },
            "RZ-1": {
                "turnLeftSpeed": 0,
                "turnRightSpeed": 0,
                "accelSpeed": 0,
                "deccelSpeed": 0,
                "maxSpeed": 0,
                "minSpeed": 0,
                "pitchSped": 0,
                "yawSpeed": 0,
                "rollSpeed": 0,
                "allegience": ["Rebellion"],
                "name": "RZ-1",
                "nickName": "A-Wing",
                "hasHyperDrive": false,
                "shields": 0,
                "hull": 0,
                "model": "/client/models/tie_ln.glb"
            },
            "A/SF-01": {
                "turnLeftSpeed": 0,
                "turnRightSpeed": 0,
                "accelSpeed": 0,
                "deccelSpeed": 0,
                "maxSpeed": 0,
                "minSpeed": 0,
                "pitchSped": 0,
                "yawSpeed": 0,
                "rollSpeed": 0,
                "allegience": ["Rebellion"],
                "name": "A/SF-01",
                "nickName": "B-Wing",
                "hasHyperDrive": false,
                "shields": 0,
                "hull": 0,
                "model": "/client/models/tie_ln.glb"
            }
        }
    ]
};