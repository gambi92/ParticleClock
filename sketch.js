const PANEL_START_X = 10;
const PANEL_START_Y = 10;
const PANEL_WIDTH = 60;
const PANEL_HEIGHT = 100;
const PANEL_MARGIN_RIGHT = 10;

let panels = [];
let hours;
let minutes;
let seconds;


function setup() {
  createCanvas(800, 480);

  let currentX = PANEL_START_X;
  for (let i = 0; i < 8; i++) {
    if (i == 2 || i == 5) {
      panels[i] = new Panel(currentX, PANEL_START_Y, PANEL_WIDTH / 2, PANEL_HEIGHT*0.8, 1, 2, 10, "CENTER");
      currentX += (PANEL_WIDTH / 2) + PANEL_MARGIN_RIGHT;
    }
    else {
      panels[i] = new Panel(currentX, PANEL_START_Y, PANEL_WIDTH, PANEL_HEIGHT);
      currentX += PANEL_WIDTH + PANEL_MARGIN_RIGHT;
    }
  }
  /*
  for (let i = 0; i < 8; i++) {
    if (i == 2 || i == 5)
      panels[i] = new Panel((i * (PANEL_WIDTH/2 + PANEL_MARGIN_RIGHT)) + PANEL_START_X, PANEL_START_Y, PANEL_WIDTH / 2, PANEL_HEIGHT, 1, 2, 10, "CENTER");
    else
      panels[i] = new Panel((i * (PANEL_WIDTH + PANEL_MARGIN_RIGHT)) + PANEL_START_X, PANEL_START_Y, PANEL_WIDTH, PANEL_HEIGHT);
  }*/
}

function draw() {
  clear();

  if (seconds != second()) {
    hours = hour();
    minutes = minute();
    seconds = second();

    for (p in panels)
      panels[p].display(0);
  } else {
    for (let pan = 0; pan < panels.length; pan++) {
      let panelPoints = panels[pan].GetPoints()
      for (let i = 0; i < panelPoints.length; i++) {
        for (let j = 0; j < panelPoints[i].length; j++) {
          if (floor(random(0, 10)) <= 4)
            panelPoints[i][j].move();
          panelPoints[i][j].display();
        }
      }
    }
  }

}