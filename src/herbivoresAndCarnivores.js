'use strict';

class Animal {
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore
      && prey.hidden === false
      && Animal.alive.includes(prey)
    ) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(prey), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
