'use strict';

class Animal {
  static alive = [];
  static died() {
    Animal.alive = Animal.alive.filter(({ health }) => health > 0);
  }

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bittenAnimal) {
    if (bittenAnimal instanceof Carnivore || bittenAnimal.hidden === true) {
      return;
    }

    bittenAnimal.health -= 50;

    if (bittenAnimal.health <= 0) {
      Animal.died();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
