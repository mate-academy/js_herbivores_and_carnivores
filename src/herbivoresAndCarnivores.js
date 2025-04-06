'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100; // Здоров'я за замовчуванням
    this.hidden = false; // Властивість для ховання
    Animal.alive.push(this); // Додаємо тварину до масиву живих тварин
  }

  static alive = []; // Статичний масив живих тварин

  // eslint-disable-next-line max-len
  // Оновлений метод die, який використовує filter для видалення тварини з масиву
  die() {
    // eslint-disable-next-line max-len
    Animal.alive = Animal.alive.filter((animal) => animal !== this); // Використовуємо filter для видалення тварини
  }
}

// Клас для травоїдних тварин, який наслідується від Animal
class Herbivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name); // Викликаємо конструктор Animal
  }

  hide() {
    this.hidden = true; // Робимо тварину прихованою від хижаків
  }
}

// Клас для хижаків, який наслідується від Animal
class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name); // Викликаємо конструктор Animal
  }

  bite(herbivore) {
    // Перевірка, чи це травоїдна тварина і чи вона не прихована
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50; // Зменшуємо здоров'я травоїдної тварини на 50

      if (herbivore.health <= 0) {
        herbivore.die(); // Якщо здоров'я <= 0, травоїдна тварина вмирає
      }
    }
  }
}

// Експортуємо класи для використання в інших файлах
module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
