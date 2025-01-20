'use strict';

class Animal {
  static alive = [];
  static DEATH = 0;

  static addAnimalToAlive(animal) {
    this.alive.push(animal);
  }

  static removeAnimalFromAlive(animal) {
    this.alive = this.alive.filter(item => item !== animal);
  }

  health = 100;

  constructor(name) {
    this.name = name;

    Animal.addAnimalToAlive(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  BITE_DAMAGE = 50;
  constructor(name) {
    super(name);
  }

  bite(animal) {
    if (
      animal instanceof Herbivore
      && animal.hidden === false
    ) {
      animal.health -= this.BITE_DAMAGE;
    }

    if (animal.health <= Animal.DEATH) {
      Animal.removeAnimalFromAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
