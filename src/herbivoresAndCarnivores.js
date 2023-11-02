'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAliveAnimal(this);
  }

  static addAliveAnimal(animal) {
    this.alive.push(animal);
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health, alive) {
    super(name, health, alive);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(item) {
    if (item.hidden === false) {
      item.health -= 50;
    }

    if (item.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== item);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
