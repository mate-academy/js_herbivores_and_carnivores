'use strict';

class Animal {
  static alive = [];

  static deleteCreature(creature) {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden === false ? this.hidden = true : this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature instanceof Herbivore && !creature.hidden) {
      creature.health -= 50;

      if (creature.health === 0) {
        Animal.deleteCreature(creature);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
