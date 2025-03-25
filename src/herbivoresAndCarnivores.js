'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  bite(animal) {
    if (animal.__proto__ === Herbivore.prototype && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.reduce((acc, creature) => {
          if (creature.health > 0) {
            acc.push(creature);
          }

          return acc;
        }, []);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
