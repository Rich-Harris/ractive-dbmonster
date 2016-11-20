(function (Ractive) {
'use strict';

Ractive = 'default' in Ractive ? Ractive['default'] : Ractive;

var component = { exports: {} };

component.exports.template = {v:4,t:[{p:[1,1,0],t:7,e:"table",m:[{n:"class",f:"table table-striped latest-data",t:13}],f:[{p:[2,3,50],t:7,e:"tbody",f:[{t:4,f:[{p:[5,5,79],t:7,e:"tr",f:[{p:[7,7,91],t:7,e:"td",m:[{n:"class",f:"dbname",t:13}],f:[{t:2,r:"dbname",p:[8,9,119]}]}," ",{p:[11,7,151],t:7,e:"td",m:[{n:"class",f:"query-count",t:13}],f:[{p:[12,9,184],t:7,e:"span",m:[{n:"class",f:[{t:2,r:"lastSample.countClassName",p:[12,22,197]}],t:13}],f:[{t:2,r:"lastSample.nbQueries",p:[13,11,241]}]}]}," ",{t:4,f:[{p:[18,9,347],t:7,e:"td",m:[{n:"class",f:["Query ",{t:2,r:"elapsedClassName",p:[18,26,364]}],t:13}],f:[{t:2,r:"formatElapsed",p:[19,11,399]}," ",{p:[20,11,429],t:7,e:"div",m:[{n:"class",f:"popover left",t:13}],f:[{p:[21,13,468],t:7,e:"div",m:[{n:"class",f:"popover-content",t:13}],f:[{t:2,r:"query",p:[21,42,497]}]}," ",{p:[22,13,527],t:7,e:"div",m:[{n:"class",f:"arrow",t:13}]}]}]}],n:52,r:"lastSample.topFiveQueries",p:[17,7,303]}]}],n:52,r:"dbs",p:[4,3,61]}]}]}]};
var Table = Ractive.extend( component.exports );

perfMonitor.startFPSMonitor();
perfMonitor.startMemMonitor();
perfMonitor.initProfiler('view update');

const table = new Table({
	el: document.querySelector( '#body' ),
	data: {
		dbs: ENV.generateData().toArray()
	}
});

function redraw() {
	perfMonitor.startProfile('view update');
	table.set( 'dbs', ENV.generateData().toArray() );
	perfMonitor.endProfile('view update');
	setTimeout(redraw, ENV.timeout);
}

redraw();

}(Ractive));
//# sourceMappingURL=bundle.js.map
