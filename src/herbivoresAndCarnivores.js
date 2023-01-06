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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(injuredAnimal) {
    if (injuredAnimal instanceof Herbivore && !injuredAnimal.hidden) {
      injuredAnimal.health -= 50;
    }

    if (!injuredAnimal.health) {
      const listPosition = Animal.alive.indexOf(injuredAnimal);

      (listPosition !== -1) && Animal.alive.splice(listPosition, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
