'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
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

  bite(victimObject) {
    if (victimObject.hidden !== true && victimObject instanceof Herbivore) {
      victimObject.health -= 50;
    }

    if (victimObject.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== victimObject);

      return Animal.alive;
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
