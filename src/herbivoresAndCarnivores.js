'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  getInfo() {
    return `Name: ${this.name}, Health: ${this.health}`;
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

  getInfo() {
    const hiddenStatus = this.hidden ? 'hidden' : 'not hidden';

    return `${super.getInfo()}, Status: ${hiddenStatus}`;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50; // Зменшуємо здоров'я на 50

      if (target.health <= 0) {
        target.health = 0;
        target.die(); // Видаляємо жертву з масиву Animal.alive
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
