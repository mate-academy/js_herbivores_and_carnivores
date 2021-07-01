'use strict';

class Animal {
  constructor(name, hp = 100) {
    this.name = name;
    this.health = hp;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hp, hidden = false) {
    super(name, hp);

    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, hp) {
    super(name, hp);

    Animal.alive.push(this);
  }

  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
