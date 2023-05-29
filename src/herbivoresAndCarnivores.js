'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.removeDeadAnimal = () => {
  Animal.alive = Animal.alive.filter(beast => beast.health > 0);
};

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
  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;

      if (animal.health === 0) {
        Animal.removeDeadAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
