'use strict';

class Animal {
  static alive = [];

  health = 100;
  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
    this.hidden = false;
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

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => prey !== item);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
