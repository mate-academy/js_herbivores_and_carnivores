'use strict';

class Animal {
  // write your code here
  static alive = [];

  // console.dir(animalAlive);

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        const index = Animal.alive.lastIndexOf(animal);

        Animal.alive.splice(index, 1);
      };
    };
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
