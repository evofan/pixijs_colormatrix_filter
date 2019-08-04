const WIDTH = 384;
const HEIGHT = 384;
const APP_FPS = 60;

// init
let app = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT
});
let canvas = document.getElementById("canvas");
canvas.appendChild(app.view);
app.renderer.backgroundColor = 0x000000;
app.stage.interactive = true;
app.ticker.remove(app.render, app);
const fpsDelta = 60 / APP_FPS;

let app2 = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT
});
let canvas2 = document.getElementById("canvas2");
canvas2.appendChild(app2.view);
app2.renderer.backgroundColor = 0x000000;

let app3 = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT
});
let canvas3 = document.getElementById("canvas3");
canvas3.appendChild(app3.view);
app3.renderer.backgroundColor = 0x000000;

let app4 = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT
});
let canvas4 = document.getElementById("canvas4");
canvas4.appendChild(app4.view);
app4.renderer.backgroundColor = 0x000000;

let app5 = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT
});
let canvas5 = document.getElementById("canvas5");
canvas5.appendChild(app5.view);
app5.renderer.backgroundColor = 0x000000;

let app6 = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT
});
let canvas6 = document.getElementById("canvas6");
canvas6.appendChild(app6.view);
app6.renderer.backgroundColor = 0x000000;

let bg, bg2, bg3, bg4, bg5, bg6;
let colorMatrixFilter,
	colorMatrixFilter2,
	colorMatrixFilter3,
	colorMatrixFilter4,
	colorMatrixFilter5,
	colorMatrixFilter6;

let elapsedTime = 0;

let container_bg = new PIXI.Container();
container_bg.x = 0;
container_bg.y = 0;
app.stage.addChild(container_bg);

let container = new PIXI.Container();
container.width = 384;
container.height = 384;
container.x = 0;
container.y = 0;
container.pivot.x = 0;
container.pivot.y = 0;
container.interactive = true;
app.stage.addChild(container);

// asset property
const ASSET_BG = "images/pic_bg_fish.jpg";

PIXI.loader.add("bg_data", ASSET_BG).load(onAssetsLoaded);

/**
 * Asset load Complete
 * @param { object } loader object
 * @param { object } res asset data
 */
function onAssetsLoaded(loader, res) {
	// BG
	bg = new PIXI.Sprite(res.bg_data.texture);
	container_bg.addChild(bg);
	bg.x = 0;
	bg.y = 0;
	bg.interactive = true;
	bg.on("tap", (event) => {
		console.log("onTap"); // Desktop(Touch)
	});
	bg.on("click", (event) => {
		console.log("click"); // Desktop
	});

	bg2 = new PIXI.Sprite(res.bg_data.texture);
	app2.stage.addChild(bg2);
	bg2.x = 0;
	bg2.y = 0;

	bg3 = new PIXI.Sprite(res.bg_data.texture);
	app3.stage.addChild(bg3);
	bg3.x = 0;
	bg3.y = 0;

	bg4 = new PIXI.Sprite(res.bg_data.texture);
	app4.stage.addChild(bg4);
	bg4.x = 0;
	bg4.y = 0;

	bg5 = new PIXI.Sprite(res.bg_data.texture);
	app5.stage.addChild(bg5);
	bg5.x = 0;
	bg5.y = 0;

	bg6 = new PIXI.Sprite(res.bg_data.texture);
	app6.stage.addChild(bg6);
	bg6.x = 0;
	bg6.y = 0;

	// Filters //

	// blackAndWhite
	colorMatrixFilter = new PIXI.filters.ColorMatrixFilter();
	colorMatrixFilter.blackAndWhite();
	bg.filters = [colorMatrixFilter];
	// Text
	let text = new PIXI.Text("blackAndWhite", {
		fontFamily: "Arial",
		fontSize: 30,
		fill: 0xffffff,
		align: "center",
		fontWeight: "bold",
		dropShadow: true,
		dropShadowColor: "#000000",
		trim: true
	});
	container.addChild(text);
	text.x = 82;
	text.y = 30;

	// brightness
	colorMatrixFilter2 = new PIXI.filters.ColorMatrixFilter();
	colorMatrixFilter2.brightness(0.5, false);
	bg2.filters = [colorMatrixFilter2];
	// Text
	let text2 = new PIXI.Text("brightness", {
		fontFamily: "Arial",
		fontSize: 30,
		fill: 0xffffff,
		align: "center",
		fontWeight: "bold",
		dropShadow: true,
		dropShadowColor: "#000000",
		trim: true
	});
	app2.stage.addChild(text2);
	text2.x = 115;
	text2.y = 30;

	// browni
	colorMatrixFilter3 = new PIXI.filters.ColorMatrixFilter();
	colorMatrixFilter3.browni(true); // must true
	bg3.filters = [colorMatrixFilter3];
	// Text
	let text3 = new PIXI.Text("browni", {
		fontFamily: "Arial",
		fontSize: 30,
		fill: 0xffffff,
		align: "center",
		fontWeight: "bold",
		dropShadow: true,
		dropShadowColor: "#000000",
		trim: true
	});
	app3.stage.addChild(text3);
	text3.x = 145;
	text3.y = 30;

	// colorTone
	colorMatrixFilter4 = new PIXI.filters.ColorMatrixFilter();
	colorMatrixFilter4.colorTone(0.5, 0.5, 0xffe580, 0x33cc99, false);
	bg4.filters = [colorMatrixFilter4];
	// Text
	let text4 = new PIXI.Text("colorTone", {
		fontFamily: "Arial",
		fontSize: 30,
		fill: 0xffffff,
		align: "center",
		fontWeight: "bold",
		dropShadow: true,
		dropShadowColor: "#000000",
		trim: true
	});
	app4.stage.addChild(text4);
	text4.x = 120;
	text4.y = 30;

	// contrast
	colorMatrixFilter5 = new PIXI.filters.ColorMatrixFilter();
	colorMatrixFilter5.contrast(0.5, true);
	bg5.filters = [colorMatrixFilter5];
	// Text
	let text5 = new PIXI.Text("contrast", {
		fontFamily: "Arial",
		fontSize: 30,
		fill: 0xffffff,
		align: "center",
		fontWeight: "bold",
		dropShadow: true,
		dropShadowColor: "#000000",
		trim: true
	});
	app5.stage.addChild(text5);
	text5.x = 130;
	text5.y = 30;

	// desaturate
	colorMatrixFilter6 = new PIXI.filters.ColorMatrixFilter();
	colorMatrixFilter6.desaturate();
	bg6.filters = [colorMatrixFilter6];
	// Text
	let text6 = new PIXI.Text("desaturate", {
		fontFamily: "Arial",
		fontSize: 30,
		fill: 0xffffff,
		align: "center",
		fontWeight: "bold",
		dropShadow: true,
		dropShadowColor: "#000000",
		trim: true
	});
	app6.stage.addChild(text6);
	text6.x = 120;
	text6.y = 30;

	// ticker
	let ticker = PIXI.ticker.shared;
	ticker.autoStart = false;
	ticker.stop();
	PIXI.settings.TARGET_FPMS = 0.06;
	app.ticker.add(tick);
}

/**
 * adjust fps
 * @param { number } delta time
 */
function tick(delta) {
	elapsedTime += delta;

	if (elapsedTime >= fpsDelta) {
		// enough time passed, update app
		update(elapsedTime);
		// reset
		elapsedTime = 0;
	}
}

/**
 * rendering
 * @param { number } delta time
 */
function update(delta) {
	// console.log("update()");

	// render the canvas
	app.render();
}
