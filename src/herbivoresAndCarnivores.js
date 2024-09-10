'use strict';

class Animal {
  // static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.adToAlive(this);
  }

  static adToAlive(animal) {
    this.alive.push(animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      Animal.alive.forEach((item, index, arr) => {
        if (item.name === animal.name) {
          if (animal.health <= 0) {
            arr.splice(index, 1);
          } else {
            item.health = animal.health;
          }
        }
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
