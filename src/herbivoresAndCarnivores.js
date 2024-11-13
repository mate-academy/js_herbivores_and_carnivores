'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  static removeAnimal(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, damage = 50) {
    super(name);
    this.damage = damage;
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= this.damage;

      if (herbivore.health <= 0) {
        Animal.removeAnimal(herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
