'use strict';

class Animal {
  static alive = []; // Масив для зберігання всіх живих тварин

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    // Додаємо тварину до масиву живих
    Animal.alive.push(this);
  }

  // Метод перевірки смерті
  die() {
    if (this.health <= 0) {
      // Видаляємо з масиву живих
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name); // Викликаємо конструктор Animal
    this.hidden = false; // Властивість "сховався"
  }

  // Метод для сховання
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name); // Викликаємо конструктор Animal
  }

  // Метод для укусу
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50; // Зменшуємо здоров'я травоїдної
      herbivore.die(); // Перевіряємо, чи померла травоїдна
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
