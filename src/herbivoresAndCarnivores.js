'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  destroy() {
    Animal.alive = Animal.alive.filter(animal => animal.name !== this.name)
  }

  static alive = []
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
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health < 1) {
        animal.destroy();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
