'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health; // Виправлено на health
    Animal.alive.push(this);
    this.hidden = false;
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1); // Використовуємо splice замість slice
    }
  }

  checkHealth() {
    if (this.health <= 0) {
      // Виправлено на health
      this.die();
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }

  unHide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      herbivore.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
