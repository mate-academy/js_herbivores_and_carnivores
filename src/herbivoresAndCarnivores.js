'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removing(creature) {
    this.alive.splice(creature, 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (!creature.hidden && !(creature instanceof Carnivore)) {
      creature.health -= 50;
    }

    if (creature.health <= 0) {
      Animal.removing(Animal.alive.indexOf(creature));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
