'use strict';

class Animal {
  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeDied(died) {
    Animal.alive = Animal.alive.filter(animal => animal !== died);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.addAnimal(this);
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
  bite(herbAnimal) {
    if (herbAnimal instanceof Herbivore && !herbAnimal.hidden) {
      herbAnimal.health -= 50;

      if (herbAnimal.health <= 0) {
        Animal.removeDied(herbAnimal);
      }
    }
  }
}
// !====================
module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
