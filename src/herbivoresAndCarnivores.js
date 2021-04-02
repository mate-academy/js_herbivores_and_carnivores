'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.addToAlive(this);
  }
}
Animal.alive = [];
Animal.addToAlive = (animal) => Animal.alive.push(animal);

Animal.updateAliveAnimals = function() {
  const filteredAnimals = Animal.alive.filter(animal => animal.health > 0);

  Animal.alive = [...filteredAnimals];
};

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }
    Animal.updateAliveAnimals();
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
