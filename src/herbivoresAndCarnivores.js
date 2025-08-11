'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkAlive() {
    // Перезаписуємо Animal.alive, відфільтровуючи тварин з health > 0
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
  bite(target) {
    // Об'єднана перевірка в одному if
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health < 0) {
        target.health = 0;
      }
      target.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
