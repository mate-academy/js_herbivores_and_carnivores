'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    // Тести очікують звичайну властивість health: 100
    this.health = 100;
    // Додаємо в масив саме через конструктор Animal
    Animal.alive.push(this);
  }
}

// Ініціалізуємо масив зовні, щоб він був доступний тестам як Animal.alive
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    // Ініціалізуємо hidden явно, щоб не було undefined
    this.hidden = false;
  }

  // Метод у прототипі (тести перевіряють, що він успадкований)
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // Конструктор можна не писати, він успадкується автоматично

  bite(target) {
    // 1. Перевірка: тільки травоїдні (не хижаки)
    // 2. Перевірка: чи не сховався
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      // Якщо здоров'я 0 або менше — видаляємо з масиву
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
