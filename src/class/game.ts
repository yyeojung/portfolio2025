import { ENEMY_SIZE } from 'constants/gameConstants';
let enemyCounter = 0;

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
  id: string;
  constructor(x: number, y: number, speed: number) {
    super(x, y, speed);
    enemyCounter += 1;
    this.id = `enemy${enemyCounter}`;
  }

  update() {
    super.update();
  }
}

export class Bullet extends Moving {
  enemies: Enemy[];
  alive: boolean;

  constructor(x: number, y: number, speed: number, enemies: Enemy[]) {
    super(x, y, speed);
    this.enemies = enemies;
    this.alive = true;
  }

  update() {
    this.y -= this.speed;
  }

  attack(setEnemies: React.Dispatch<React.SetStateAction<Enemy[]>>) {
    for (let i = 0; i < this.enemies.length; i++) {
      if (
        // 총알 위치
        this.x >= this.enemies[i].x - ENEMY_SIZE / 2 &&
        this.x <= this.enemies[i].x + ENEMY_SIZE - 20 &&
        this.y >= this.enemies[i].y &&
        this.y <= this.enemies[i].y + ENEMY_SIZE
      ) {
        this.alive = false;
        setEnemies((prev) => prev.filter((e) => e.id !== this.enemies[i].id));
      }
    }
  }
}
