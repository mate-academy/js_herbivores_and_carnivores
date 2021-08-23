'use strict';
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
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
    } else if (this.hidden === true) {
      this.hidden = false;
    };
  };
};

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const index = Animal.alive.findIndex(item => item === animal);

      Animal.alive.splice(index, 1);
    };
  };
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
