'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(nameHerb) {
    if (nameHerb.hidden === false && nameHerb instanceof Herbivore) {
      nameHerb.health -= 50;
    }

    if (nameHerb.health <= 0) {
      Animal.alive.pop(nameHerb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
