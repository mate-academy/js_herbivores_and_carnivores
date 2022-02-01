'use strict';

class Animal {
  static addAnimal(animalObject) {
    Animal.alive.push(animalObject);
  }

  constructor(name, health) {
    this.health = health || 100;
    this.name = name;
    this.hidden = false;
    Animal.addAnimal(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbObject) {
    if (!herbObject.hidden && herbObject instanceof Herbivore) {
      herbObject.health -= 50;
    }

    Animal.alive = Animal.alive.filter(obj => obj.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
