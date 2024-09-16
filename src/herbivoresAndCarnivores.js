'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeDiedAmimals() {
    Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal.health > 0);
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
  constructor(name) {
    super(name);
    this.damage = 50;
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= this.damage;
    }

    if (animal.health <= 0) {
      Animal.removeDiedAmimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
