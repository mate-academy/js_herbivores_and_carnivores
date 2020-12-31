'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.pushing(this);
  }

  static pushing(creature) {
    this.alive.push(creature);
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
    !this.hidden ? this.hidden = true : this.hidden = false;
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
