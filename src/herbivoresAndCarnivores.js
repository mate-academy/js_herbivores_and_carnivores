'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static getAliveAnimals() {
    return Animal.alive.map((animal) => {
      if (animal instanceof Herbivore) {
        return {
          name: animal.name,
          health: animal.health,
          hidden: animal.hidden,
        };
      }

      return { name: animal.name, health: animal.health };
    });
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

  bite(enemy) {
    if (!(enemy instanceof Herbivore) || enemy.hidden) {
      return;
    }

    enemy.health -= 50;

    if (enemy.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== enemy);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
