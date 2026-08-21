'use strict';

class Animal {
  static alive = [];

  health = 100;
  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    Animal.alive.push(this);
    this.hidden = hidden;
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
  bite(animal) {
    if (!(animal instanceof Carnivore) && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((aliveAnimal) => {
        return aliveAnimal.health > 0;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
