var MemoryStats = require('./memory-stats');

var memoryStats = new MemoryStats();

memoryStats.domElement.style.position = 'fixed';
memoryStats.domElement.style.right        = '0px';
memoryStats.domElement.style['z-index']  = '1';
memoryStats.domElement.style.bottom       = '0px';

document.body.appendChild( memoryStats.domElement );

function tick() {
	memoryStats.update();
	window.requestAnimationFrame(tick);
}

tick();