'use strict';

export class Animal {
  static alive = [];

  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  // Допоміжний метод для перевірки здоров'я та видалення зі списку живих
  checkLife() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

export class Herbivore extends Animal {
  /**
   * @param {string} name
   */
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

export class Carnivore extends Animal {
  /**
   * @param {Animal} target
   */
  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;

    target.checkLife();
  }
}
