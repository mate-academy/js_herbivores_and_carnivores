'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static alive = [];

  static removeDeadAnimal() {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    super.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden && prey.health > 0) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.removeDeadAnimal();
      }
    }
  }
}

module.exports = { Animal, Herbivore, Carnivore };

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
