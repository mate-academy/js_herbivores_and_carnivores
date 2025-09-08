'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  _checkDeath() {
    // Перезаписуємо alive, залишаючи тільки живих тварин
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
      prey._checkDeath();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
