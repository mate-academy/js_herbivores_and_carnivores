'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    // Звичайна властивість для коректної роботи тестів (toHaveProperty)
    this.health = 100;
    // Реєстрація тварини у статичному списку
    Animal.alive.push(this);
  }
}

// Ініціалізація статичного масиву
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  /**
   * Згідно з Елементом контрольного списку №2:
   * Метод лише встановлює значення true.
   */
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  /**
   * Метод для атаки травоїдних.
   * @param {Animal} target
   */
  bite(target) {
    // Перевірка типу цілі та чи вона не схована
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      // Автоматичне видалення зі списку при смерті
      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
