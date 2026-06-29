'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  death() {
    Animal.alive = Animal.alive.filter((a) => a !== this);
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
    // Проверка типа
    if (!(target instanceof Herbivore)) {
      return;
    }

    // Если true не отнимаем
    if (target.hidden) {
      return;
    }

    // Уменьшаем здорове на 50
    target.health -= 50;

    // Если здоровье равно 0
    if (target.health <= 0) {
      target.death();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
