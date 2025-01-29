import { CANVAS_HEIGHT, ENEMY_SIZE } from 'constants/gameConstants';

class Moving {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  update() {
    this.y += this.speed;
  }
}

export class Enemy extends Moving {
  alive: boolean;
  gameOver: boolean;

  constructor(x: number, y: number, speed: number) {
    super(x, y, speed);
    this.alive = true;
    this.gameOver = false;
  }

  update() {
    if (this.alive) {
      super.update();

      if (this.y >= CANVAS_HEIGHT) {
        this.gameOver = true;
      }
    }
  }
}

export class Bullet extends Moving {
  enemiesRef: Enemy[];
  alive: boolean;
  onUpdateScore: () => void;

  constructor(
    x: number,
    y: number,
    speed: number,
    enemiesRef: Enemy[],
    onUpdateScore: () => void
  ) {
    super(x, y, speed);
    this.enemiesRef = enemiesRef;
    this.alive = true;
    this.onUpdateScore = onUpdateScore;
  }

  update() {
    this.y -= this.speed;
  }

  attack() {
    if (!this.alive) return;
    for (let i = 0; i < this.enemiesRef.length; i++) {
      const enemy = this.enemiesRef[i];

      if (enemy.alive) {
        if (
          // 총알 위치
          this.x >= enemy.x - ENEMY_SIZE / 2 &&
          this.x <= enemy.x + ENEMY_SIZE - 20 &&
          this.y >= enemy.y &&
          this.y <= enemy.y + ENEMY_SIZE
        ) {
          this.alive = false;
          enemy.alive = false;
          this.enemiesRef = this.enemiesRef.filter((e) => e.alive);
          this.onUpdateScore();
        }
      }
    }
  }
}
