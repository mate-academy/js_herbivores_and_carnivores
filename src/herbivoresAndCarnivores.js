'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb.hidden === false & herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      const indDeath = Animal.alive.indexOf(herb);

      Animal.alive.splice(indDeath, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
