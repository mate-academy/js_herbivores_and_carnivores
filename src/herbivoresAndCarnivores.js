'use strict';

class Animal {
  // 1. Обов'язково додаємо цей рядок!
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    // 2. Тепер цей запис буде працювати правильно
    Animal.alive.push(this);
  }

  checkLife() {
    if (this.health <= 0) {
      // 3. Тут ми оновлюємо той самий статичний масив
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
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
  bite(target) {
    // Умови, коли кусати НЕ МОЖНА:
    // 1. Ціль — хижак (Carnivore)
    // 2. Ціль ховається (hidden === true)
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    // Зменшуємо здоров'я на 50
    target.health -= 50;

    // Перевіряємо, чи вижила жертва
    target.checkLife();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
