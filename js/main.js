var computers = 0;
var av = 0;
var save = {
    computers: computers,
    av: av
};

function fixComputer(number) {
    'use strict';
    computers = computers + number;
    document.getElementById("computers").innerHTML = computers;
}

function buyAV() {
    'use strict';
    var avCost = Math.floor(10 * Math.pow(1.1, av)),
        nextCost = Math.floor(10 * Math.pow(1.1, av));
    if (computers >= avCost) {
        av = av + 1;
        computers = computers - avCost;
        document.getElementById('av').innerHTML = av;
        document.getElementById('computers').innerHTML = computers;
    }
    document.getElementById('avCost').innerHTML = nextCost;
}

function saveGame() {
    'use strict';
    localStorage.setItem("savefile", JSON.stringify(save));
}

function loadGame() {
    'use strict';
    var savegame = JSON.parse(localStorage.getItem("savefile"));
    if (typeof savegame.computers !== "undefined") {computers = savegame.computers; }
    if (typeof savegame.av !== "undefined") {av = savegame.computers; }
}

function prettify(input) {
    'use strict';
    var output = Math.round(input * 1000000) / 1000000;
	return output;
}

window.setInterval(function () {
    'use strict';
    fixComputer(av);
    
}, 1000);