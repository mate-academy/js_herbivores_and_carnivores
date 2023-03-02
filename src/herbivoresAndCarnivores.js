'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

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
  bite(anotherAnimal) {
    if (anotherAnimal instanceof Herbivore && !anotherAnimal.hidden) {
      anotherAnimal.health -= 50;
      Animal.alive = Animal.alive.filter((enimal) => enimal.health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
