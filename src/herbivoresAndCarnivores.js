'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }

  isHidden() {
    return this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if ((animal instanceof Herbivore) && animal.hidden === false) {
      animal.health -= 50;
    };

    const checkAnimal = Animal.alive.filter(item => item.health > 0);

    Animal.alive = checkAnimal;
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
