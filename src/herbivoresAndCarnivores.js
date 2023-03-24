'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  dead() {
    const indexAnimal = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1)
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);

    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

   Animal.alive = Animal.alive.filter(x => x.health !== 0)
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
