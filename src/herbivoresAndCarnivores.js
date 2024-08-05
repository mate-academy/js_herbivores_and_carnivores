'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health = 100) {
    super(name, health);

    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden === true) {
      return;
    }

    animal.health -= 50;

    if (animal.health === 0) {
      const AnimalAliveNewList = [];

      Animal.alive.map((item) => {
        if (item.health > 0) {
          AnimalAliveNewList.push(item);
        }
      });

      Animal.alive = AnimalAliveNewList;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
