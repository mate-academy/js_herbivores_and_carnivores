'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  removeDead() {
    Animal.alive = Animal.alive.filter((el) => el.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    const isHerbivore = prey instanceof Herbivore;
    const isHidden = prey.hidden;
    const canBite = isHerbivore && !isHidden;

    if (canBite) {
      prey.health -= 50;
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
