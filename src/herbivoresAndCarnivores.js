'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
  }

  static removeFromAlive(creature) {
    this.alive = this.alive.filter((animal) => animal !== creature);
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.removeFromAlive(herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
