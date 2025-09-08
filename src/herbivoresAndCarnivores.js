'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static alive = [];

  static deleteAnimal(obj) {
    const i = Animal.alive.indexOf(obj);

    return Animal.alive.splice(i, 1);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden !== true && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.deleteAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
