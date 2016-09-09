var computers = 0;
var av = 0;
var manualClicks = 1;

function fixComputer(number) {
    'use strict';
    computers += number;
	updateLoop();
}

$("#fix-computer").click(fixComputer(manualClicks));

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
    var save = {
        computers: computers,
        av: av
    },
        jsonSave = JSON.stringify(save);
    localStorage.setItem("savefile", jsonSave);
}

function loadGame() {
    'use strict';
    var savegame = JSON.parse(localStorage.getItem("savefile"));
    if (typeof savegame.computers !== "undefined") {computers = savegame.computers; }
    if (typeof savegame.av !== "undefined") {av = savegame.av; }
}

function prettify(input) {
    'use strict';
    var output = Math.round(input * 1000000) / 1000000;
	return output;
}

function updateLoop() {
	'use strict';
	$("#computers-fixed").text(computers)
	saveGame();
}

window.setInterval(function () {
    'use strict';
    fixComputer(av);
	updateLoop();
}, 1000);