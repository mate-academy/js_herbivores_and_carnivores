'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  checkLifeStatus() {
    if (this.health <= 0) {
      // Шукаємо, під яким номером (індексом) ця тварина в списку
      const index = Animal.alive.indexOf(this);
      // Якщо знайшли (індекс не -1), то видаляємо 1 елемент за цим індексом

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

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

  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return;
    }
    target.health -= 50;
    target.checkLifeStatus();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
