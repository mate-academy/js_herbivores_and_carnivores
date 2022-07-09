'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(aim) {
    if (aim instanceof Carnivore || aim.hidden) {
      return;
    }

    aim.health -= 50;

    if (aim.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== aim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
