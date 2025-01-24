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
  enemiesRef: Enemy[];
  alive: boolean;

  constructor(
    x: number,
    y: number,
    speed: number,
    enemies: Enemy[],
    enemiesRef: Enemy[]
  ) {
    super(x, y, speed);
    this.enemies = enemies;
    this.enemiesRef = enemiesRef;
    this.alive = true;
  }

  update() {
    this.y -= this.speed;
  }

  attack(setEnemies: React.Dispatch<React.SetStateAction<Enemy[]>>) {
    for (let i = 0; i < this.enemiesRef.length; i++) {
      if (
        // 총알 위치
        this.x >= this.enemiesRef[i].x - ENEMY_SIZE / 2 &&
        this.x <= this.enemiesRef[i].x + ENEMY_SIZE - 20 &&
        this.y >= this.enemiesRef[i].y &&
        this.y <= this.enemiesRef[i].y + ENEMY_SIZE
      ) {
        this.alive = false;
        const enemyToDelete = this.enemiesRef[i];
        this.enemiesRef = this.enemiesRef.filter(
          (e) => e.id !== enemyToDelete.id
        );
        setEnemies((prev) => prev.filter((e) => e.id !== enemyToDelete.id));
      }
    }
  }
}
