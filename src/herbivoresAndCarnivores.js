'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  deleteAnimal() {
    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health <= 0) {
        Animal.alive.splice(i, 1);
        i--;
      }
    }
  }

  changeHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.deleteAnimal();
    }
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

  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }
    animal.changeHealth(-50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
