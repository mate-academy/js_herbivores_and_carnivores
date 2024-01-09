'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  removeAnimal() {
    Animal.alive = Animal.alive.filter(item => item.health > 0);
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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(herbivoreObj) {
    if (!(herbivoreObj instanceof Carnivore) && herbivoreObj.hidden === false) {
      herbivoreObj.health -= 50;
    }

    if (herbivoreObj.health <= 0) {
      this.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
