'use strict';

class Animal {
  static alive = [];
  static FULL_HEALTH = 100;

  constructor(name, health = Animal.FULL_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static HARM_OF_BITE = 50;

  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= Carnivore.HARM_OF_BITE;

      if (herb.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
