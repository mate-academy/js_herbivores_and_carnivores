'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      const killAnimal = Animal.alive.indexOf(herb);

      if (killAnimal > -1) {
        Animal.alive.splice(killAnimal, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
