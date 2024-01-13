'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(pet) {
    if (!pet.hidden && pet instanceof Herbivore) {
      pet.health -= 50;

      if (pet.health <= 0) {
        Animal.alive = Animal.alive.filter(el => el !== pet);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
