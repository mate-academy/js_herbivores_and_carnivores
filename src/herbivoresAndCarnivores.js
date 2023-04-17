'use strict';

class Animal {
  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
    Animal.addAnimal(this);
  }

  static alive = [];

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal() {
    Animal.alive = Animal.alive.filter(being => being.health > 0);
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

  checkHealth() {
    if (this.health <= 0) {
      Animal.removeAnimal(this);
    }
  }
}

class Carnivore extends Animal {

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
      victim.checkHealth();
      Animal.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
