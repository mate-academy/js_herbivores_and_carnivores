'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      Animal.alive = Animal.alive.filter(beast => beast.health > 0);
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
