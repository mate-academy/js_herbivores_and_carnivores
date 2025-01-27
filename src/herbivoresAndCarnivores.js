'use strict';

class Animal {
  static alive = []; // Массив с живыми животными

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this); // Добавляем животное в список живых
  }

  static updateAlive() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  #hidden = false;

  get hidden() {
    // для чтения значения
    return this.#hidden;
  }

  hide() {
    this.#hidden = true; // метод позволяет травоядным "прятаться"
  }
}

class Carnivore extends Animal {
  bite(victim) {
    // Проверяем, является ли жертва хищником или спряталась
    if (victim instanceof Herbivore && !victim.hidden) {
      // victim.hidden === false
      victim.health -= 50;
    }

    // Обновляем массив живых животных, если жертва умерла
    Animal.updateAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
