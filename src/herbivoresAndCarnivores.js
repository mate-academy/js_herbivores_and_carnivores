'use strict';

const BASIC_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = BASIC_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= BITE_DAMAGE;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((creature) => creature !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
