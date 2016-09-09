var computers = 0;
var av = 0;
var manualClicks = 1;
var avCost = 10;

function fixComputer(number) {
    'use strict';
    computers += number;
	updateLoop();
}

function buyAV() {
    'use strict';
    var nextCost = Math.floor(10 * Math.pow(1.1, av));
    if (computers >= avCost) {
        av = av + 1;
        computers = computers - avCost;
        avCost = nextCost;
		updateLoop();
    }
}

function saveGame() {
    'use strict';
    var save = {
        computers: computers,
        av: av,
        manualClicks: manualClicks,
        avCost: avCost,
    },
        jsonSave = JSON.stringify(save);
    localStorage.setItem("savefile", jsonSave);
}

function loadGame() {
    'use strict';
    var savegame = JSON.parse(localStorage.getItem("savefile"));
    if (typeof savegame.computers !== "undefined") {computers = savegame.computers; }
    if (typeof savegame.av !== "undefined") {av = savegame.av; }
    if (typeof savegame.manualClicks !== "undefined") {manualClicks = savegame.manualClicks}
    if (typeof savegame.avCost !== "undefined") {avCost = savegame.avCost}
}

function prettify(input) {
    'use strict';
    var output = Math.round(input * 1000000) / 1000000;
	return output;
}

function updateLoop() {
	'use strict';
	$("#computers-fixed").text(computers);
	$("#av").text(av);
  $("#avCost").text(avCost);
	saveGame();
}

window.setInterval(function () {
    'use strict';
    fixComputer(av);
	  updateLoop();
}, 1000);
