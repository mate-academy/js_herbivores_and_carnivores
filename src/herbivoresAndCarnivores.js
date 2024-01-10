'use strict';

class Animal {
  static alive = [];
  constructor (name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(item => item.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name){
    super(name)
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || (animal.hidden)) {
      return;
    }

    animal.health -= 50;
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
