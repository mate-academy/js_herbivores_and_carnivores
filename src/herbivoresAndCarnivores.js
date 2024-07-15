'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static filterAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
}

class Carnivore extends Animal {
  bite(deer) {
    if (deer instanceof Herbivore && !deer.hidden) {
      deer.health -= 50;

      if (deer.health <= 0) {
        Animal.filterAnimal();
      }
    }
  }
}

// const deer = new Herbivore('Bembi');
// const panther = new Carnivore('Bagira');
// const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
