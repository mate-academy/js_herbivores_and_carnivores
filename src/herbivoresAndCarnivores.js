'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    // Додаємо кожного новоствореного живого робота/звіра у статичний масив
    Animal.alive.push(this);
  }

  // Метод для оновлення стану та видалення з Animal.alive у разі смерті
  checkHealth() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

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
    // Укус працює лише якщо ціль є травоїдною (Herbivore) і вона НЕ схована
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target.checkHealth();
    }
  }
}

module.exports = { Animal, Herbivore, Carnivore };
