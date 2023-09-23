'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

Animal.alive = []; // Оголошення статичного поля за межами конструктора

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health === 0) {
        target.die();
      }
    }
  }
}

// Використання класів Herbivore та Carnivore для створення об'єктів
// const herbione = new Herbivore('Herbione');
// const corniole = new Carnivore('Corniole');

Animal.alive = []; // Оголошення статичного поля за межами конструктора

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
