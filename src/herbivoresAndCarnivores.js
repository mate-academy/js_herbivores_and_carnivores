'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.checkIfAlive = function(animal) {
  if (animal.health <= 0) {
    const position = Animal.alive.indexOf(animal);

    Animal.alive.splice(position, 1);
  }
};

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
  bite(herbivore) {
    if (
      herbivore instanceof Herbivore
      && herbivore.health > 0
      && !herbivore.hidden
    ) {
      herbivore.health -= 50;
    }

    Animal.checkIfAlive(herbivore);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
