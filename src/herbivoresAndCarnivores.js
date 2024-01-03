'use strict';

class Animal {
  static alive = []

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
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivoreType) {
    if (this instanceof Carnivore && herbivoreType instanceof Herbivore) {
      if (herbivoreType.hidden !== true) {
        herbivoreType.health -= 50;

        if (herbivoreType.health <= 0) {
          const index = Animal.alive.indexOf(herbivoreType);

          if (index > -1) {
            Animal.alive.splice(index, 1);
          }
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
