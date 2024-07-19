'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(bittenAnimal) {
    if (bittenAnimal instanceof Carnivore || bittenAnimal.hidden === true) {
      return;
    }

    bittenAnimal.health -= 50;

    if (bittenAnimal.health <= 0) {
      const indexOfBittenAnimal = Animal.alive.indexOf(bittenAnimal);

      Animal.alive.splice(indexOfBittenAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
