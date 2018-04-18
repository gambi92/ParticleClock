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
      panels[i] = new Panel(currentX, PANEL_START_Y, PANEL_WIDTH / 2, PANEL_HEIGHT * 0.8, 1, 2, 10, "CENTER");
      currentX += (PANEL_WIDTH / 2) + PANEL_MARGIN_RIGHT;
    } else {
      panels[i] = new Panel(currentX, PANEL_START_Y, PANEL_WIDTH, PANEL_HEIGHT);
      currentX += PANEL_WIDTH + PANEL_MARGIN_RIGHT;
    }
  }
}

function draw() {
  clear();

  if (seconds != second()) {
    hours = hour().toString();
    minutes = minute().toString();
    seconds = second().toString();

    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;

    panels[0].display(hours[0]);
    panels[1].display(hours[1]);
    panels[2].display(":");
    panels[3].display(minutes[0]);
    panels[4].display(minutes[1]);
    panels[5].display(":");
    panels[6].display(seconds[0]);
    panels[7].display(seconds[1]);

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