'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  hidden = false;

  hide() {
    if (this.hidden === true) {
      return 'This animal is already hidden';
    }

    this.hidden = true;
  }

  unhide() {
    if (this.hidden === false) {
      return 'This animal isn`t hiding';
    }

    this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    const BITE_DAMAGE = 50;

    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= BITE_DAMAGE;

      if (animal.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
