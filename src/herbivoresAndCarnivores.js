'use strict';

class Animal {
  constructor(_name, _health = 100) {
    this.name = _name;
    this.health = _health;
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
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.constructor === Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      let animalName;

      Animal.alive.some((herbivore, index) => {
        if (herbivore.name === animal.name) {
          animalName = index;
        }
      });
      Animal.alive.splice(animalName, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
