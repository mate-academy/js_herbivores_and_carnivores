'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeCorpse(corpse) {
    Animal.alive = Animal.alive.filter(animal => animal !== corpse);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
  damageControl(damage) {
    if (this.health <= damage) {
      Animal.removeCorpse(this);
    }

    this.health -= damage;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    const damage = 50;

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.damageControl(damage);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
