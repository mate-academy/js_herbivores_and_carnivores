'use strict';

class Animal {
  static alive = [];

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

  bite(pray) {
    if (pray instanceof Herbivore && !pray.hidden) {
      pray.health -= 50;

      if (pray.health <= 0) {
        const index = Animal.alive.findIndex((animal) => {
          return JSON.stringify(animal) === JSON.stringify(pray);
        });

        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
