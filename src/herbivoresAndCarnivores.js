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
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, hungry) {
    super(name);
    this.hungry = hungry;
  }

  bite(animal) {
    if (animal.hasOwnProperty('hidden')) {
      if (!animal.hidden) {
        animal.health -= 50;

        if (animal.health === 0) {
          Animal.alive = Animal.alive.filter(animal1 => animal1.health !== 0);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
