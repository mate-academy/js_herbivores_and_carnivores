'use strict';

class Animal {
  // write your code here
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      const BITE_FORCE = 50;

      animal.health -= BITE_FORCE;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(
        (currentAnimal) => currentAnimal !== animal
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
