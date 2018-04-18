const DEFAULT_NUMBER_OF_POINTS_X = 3;
const DEFAULT_NUMBER_OF_POINTS_Y = 5;
const DEFAULT_POINT_WEIGHT = 6;

class Panel {
  constructor(panelX, panelY, panelWidth, panelHeight, xPoints = undefined, yPoints = undefined, pointWeight = undefined, align = undefined) {
    this.panelX = panelX;
    this.panelY = panelY;
    this.panelWidth = panelWidth;
    this.panelHeight = panelHeight;
    this.align = align;
    this.pointsOffsetX = 0;
    this.pointsOffsetY = 0;
    this.points = [];

    if (xPoints != undefined) this.xPoints = xPoints;
    else this.xPoints = DEFAULT_NUMBER_OF_POINTS_X;
    if (yPoints != undefined) this.yPoints = yPoints;
    else this.yPoints = DEFAULT_NUMBER_OF_POINTS_Y;
    if (pointWeight != undefined) this.pointWeight = pointWeight;
    else this.pointWeight = DEFAULT_POINT_WEIGHT;

    switch (align) {
      case "CENTER":
        {
          this.pointsOffsetX = this.panelWidth / 4;
          this.pointsOffsetY = this.panelHeight / 4;
        }
        break;
    }

    for (let i = 0; i < this.xPoints; i++) {
      this.points[i] = [];
      for (let j = 0; j < this.yPoints; j++) {
        this.points[i][j] = new Point(this.panelX + (i * (this.panelWidth / this.xPoints)) + this.pointsOffsetX, this.panelY + (j * (this.panelHeight / this.yPoints)) + this.pointsOffsetY, this.pointWeight);
      }
    }

  }

  GetPoints() {
    return this.points;
  }

  display(number) {

    for (let i = 0; i < this.xPoints; i++) {
      for (let j = 0; j < this.yPoints; j++) {

        this.points[i][j].move(this.panelX + (i * (this.panelWidth / this.xPoints)) + this.pointsOffsetX, this.panelY + (j * (this.panelHeight / this.yPoints)) + this.pointsOffsetY);

        switch (number) {
          case '0':
            {
              if (this.inTopLine(i, j) || this.inLeftLine(i, j) || this.inRightLine(i, j) || this.inBottomLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '1':
            {
              if (this.inRightLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '2':
            {
              if (this.inTopLine(i, j) || (i == this.xPoints - 1 && j <= this.yPoints / 2) || j == floor(this.yPoints / 2) || (i == 0 && j >= this.yPoints / 2) || this.inBottomLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '3':
            {
              if (this.inTopLine(i, j) || this.inMiddleLine(i, j) || this.inRightLine(i, j) || this.inBottomLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '4':
            {
              if ((i == 0 && j <= this.yPoints / 2) || j == floor(this.yPoints / 2) || (i == floor(this.xPoints / 2) && j >= this.yPoints / 4))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '5':
            {
              if ((i == 0 && j <= this.yPoints / 2) || (i == this.xPoints - 1 && j >= this.yPoints / 2) || this.inTopLine(i, j) || this.inBottomLine(i, j) || this.inMiddleLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '6':
            {
              if ((i == this.xPoints - 1 && j >= this.yPoints / 2) || this.inMiddleLine(i, j) || this.inTopLine(i, j) || this.inBottomLine(i, j) || this.inLeftLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '7':
            {
              if (this.inTopLine(i, j) || this.inRightLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '8':
            {
              if (this.inTopLine(i, j) || this.inBottomLine(i, j) || this.inMiddleLine(i, j) || this.inLeftLine(i, j) || this.inRightLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case '9':
            {
              if ((i == 0 && j <= this.yPoints / 2) || this.inTopLine(i, j) || this.inBottomLine(i, j) || this.inMiddleLine(i, j) || this.inRightLine(i, j))
                this.points[i][j].activate();
              else
                this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
          case ':':
            {
              this.points[i][j].activate();
              this.points[i][j].display();
            }
            break;
          default:
            {
              this.points[i][j].deactivate();
              this.points[i][j].display();
            }
            break;
        }
      }
    }
  }

  inTopLine(x, y) {
    if (y == 0) return true;
    return false;
  }

  inBottomLine(x, y) {
    if (y == this.yPoints - 1) return true;
    return false;
  }

  inLeftLine(x, y) {
    if (x == 0) return true;
    return false;
  }

  inRightLine(x, y) {
    if (x == this.xPoints - 1) return true;
    return false;
  }

  inMiddleLine(x, y) {
    if (y == floor(this.yPoints / 2)) return true;
    return false;
  }

}