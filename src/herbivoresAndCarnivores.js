'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  type = 'Herbivore'

  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  type = 'Carnivore'

  bite(bist) {
    if (bist.type === 'Herbivore' && bist.hidden === false) {
      bist.health -= 50;
    }

    if (bist.health <= 0) {
      Animal.alive.splice(cutie => cutie === bist);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
