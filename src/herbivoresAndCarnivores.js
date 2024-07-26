'use strict';

const FULL_HEALTH = 100;

const BITE_SCORE = 50;

class Animal {
  static alive = [];
  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  removeDead() {
    Animal.alive = Animal.alive.filter((el) => el.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    const isHerbivore = prey instanceof Herbivore;
    const isHidden = prey.hidden;
    const canBite = isHerbivore && !isHidden;

    if (canBite) {
      prey.health -= BITE_SCORE;
    }

    if (prey.health <= 0) {
      prey.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
