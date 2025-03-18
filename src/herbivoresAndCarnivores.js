'use strict';

class Animal {
  static alive = [];
  static idCounter = 0;

  constructor(name, health = '100') {
    this.name = name;
    this.health = health;
    this.id = Animal.idCounter++;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore) {
      if (!animal.hidden) {
        animal.health -= 50;
      }

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => item.id !== animal.id);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
