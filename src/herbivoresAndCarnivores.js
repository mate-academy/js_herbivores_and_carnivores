'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
};

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    };
  }
};

class Carnivore extends Animal {
  bite(typeOfAnimal) {
    if (typeOfAnimal instanceof Herbivore && !typeOfAnimal.hidden) {
      typeOfAnimal.health -= 50;
    };

    if (typeOfAnimal.health === 0) {
      Animal.alive = Animal.alive.filter(animals => animals.health > 0);
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
