'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

const BITE_STRENGTH = 50;

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if ((animal instanceof Herbivore) && (animal.hidden === false)) {
      animal.health -= BITE_STRENGTH;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(({ health }) => health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
