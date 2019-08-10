const WIDTH = 384;
const HEIGHT = 384;
const FILTER_AREA_X = 0;
const FILTER_AREA_Y = 0;

// init
let app = [];
let canvas = [];
let text = [];
let bg = [];
let colorMatrixFilter = [];
let text_name = [
  "original",
  "negative",
  "night",
  "polaroid",
  "predator",
  "reset",
  "saturate",
  "sepia",
  "technicolor",
  "toBGR",
  "vintage"
];
let text_x = [135, 135, 150, 135, 135, 150, 140, 150, 120, 145, 145];
let text_y = 30;
let filters_leng = text_x.length;

// set canvas
for (let i = 0; i < filters_leng; i++) {
  app[i] = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT
  });
  canvas[i] = document.getElementById(`canvas${i}`);
  canvas[i].appendChild(app[i].view);
  app[i].renderer.backgroundColor = 0x000000;
}

// asset property
const ASSET_TARGET = "images/pic_bg_fish.jpg";
// asset load
PIXI.loader.add("target", ASSET_TARGET).load(onAssetsLoaded);

/**
 * Asset load Complete
 * @param { object } loader object
 * @param { object } res asset data
 */
function onAssetsLoaded(loader, res) {
  for (let i = 0; i < filters_leng; i++) {
    // set BG
    bg[i] = new PIXI.Sprite(res.target.texture);
    app[i].stage.addChild(bg[i]);
    bg[i].x = 0;
    bg[i].y = 0;

    // set Filter
    colorMatrixFilter[i] = new PIXI.filters.ColorMatrixFilter();
    bg[i].filters = [colorMatrixFilter[i]];
    bg[i].filterArea = new PIXI.Rectangle(
      FILTER_AREA_X,
      FILTER_AREA_Y,
      WIDTH,
      HEIGHT
    );

    // set Text
    text[i] = new PIXI.Text(text_name[i], {
      fontFamily: "Arial",
      fontSize: 30,
      fill: 0xffffff,
      align: "center",
      fontWeight: "bold",
      dropShadow: true,
      dropShadowColor: "#000000",
      trim: true
    });
    app[i].stage.addChild(text[i]);
    text[i].x = text_x[i];
    text[i].y = text_y;

    // apply Filter
    switch (i) {
      case 1:
        colorMatrixFilter[i].negative(); // [multiply]
        break;

      case 2:
        colorMatrixFilter[i].night(0.5, false); // [intensity, multiply]
        break;

      case 3:
        colorMatrixFilter[i].polaroid(false); // [multiply]
        break;

      case 4:
        colorMatrixFilter[i].predator(0.5, false); // [amount, multiply]
        break;

      case 5:
        colorMatrixFilter[i].reset();
        break;

      case 6:
        colorMatrixFilter[i].saturate(20, false); // [amount, multiply]
        break;

      case 7:
        colorMatrixFilter[i].sepia(false); // [multiply]
        break;

      case 8:
        colorMatrixFilter[i].technicolor(1); // [multiply]
        break;

      case 9:
        colorMatrixFilter[i].toBGR(); // [multiply]
        break;

      case 10:
        colorMatrixFilter[i].vintage(1); // [multiply]
        break;

      default:
        break;
    }
  }
}
