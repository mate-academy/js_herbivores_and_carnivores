'use strict';

class Animal {
  static alive = [];
  BITE_AMOUNT = 50;
  HEALTH_AMOUNT = 100;

  constructor(name, health = this.HEALTH_AMOUNT) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= this.BITE_AMOUNT;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((beast) => beast !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
