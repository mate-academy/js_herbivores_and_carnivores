'use strict';
class Animal {
  static alive = [];
  static deleteIndex = Animal.alive.findIndex((animal) => animal.health <= 0);
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  deleteAnimale() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    } else {
      animal.health = 100;
    }

    if (animal.health <= 0) {
      animal.deleteAnimale();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
