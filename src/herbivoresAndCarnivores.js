'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this); // Додаємо кожну нову тварину до масиву живих
  }

  // Видаляємо тварину з alive, якщо вона мертва
  static checkAlive() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

// Статична властивість для зберігання всіх живих тварин
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false; // Властивість для приховування
  }

  // Метод, що дозволяє сховатися
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // Немає потреби додавати конструктор, якщо він просто викликає super(name)

  // Метод для атаки на травоїдне
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden && animal.health > 0) {
      animal.health -= 50; // Зменшуємо здоров'я
      Animal.checkAlive(); // Оновлюємо список живих тварин
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
