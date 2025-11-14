'use strict';

class Animal {
  // write your code here
  // Статична властивість для відстеження всіх живих тварин
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // При створенні нової тварини, додаємо її до масиву
    Animal.alive.push(this);
  }

  // Метод, що видаляє тварину з масиву Animal.alive
  static kill(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }

  // Метод для перевірки стану здоров'я та видалення тварини, якщо вона померла
  checkHealth() {
    if (this.health <= 0) {
      this.health = 0; // Встановлюємо 0, щоб уникнути від'ємних значень
      Animal.kill(this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    // Додаємо властивість hidden, яка за замовчуванням false
    this.hidden = false;
  }

  // Метод, який встановлює властивість hidden в true
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  // Метод, що кусає іншу тварину (victim)
  bite(victim) {
    // 1. Не працює, якщо це інший Carnivore
    if (
      victim instanceof Carnivore ||
      (victim instanceof Herbivore && victim.hidden)
    ) {
      return; // Нічого не робимо
      // 2. Перевірка, чи не ховається Herbivore
      // Нічого не робимо, якщо ховається
    }

    // 3. Зменшуємо здоров'я жертви на 50
    victim.health -= 50;

    // 4. Перевіряємо, чи жертва померла
    victim.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
