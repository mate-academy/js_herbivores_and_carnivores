'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    };

    if (prey.health === 0) {
      const ind = Animal.alive.indexOf(prey);

      Animal.alive.splice(ind, 1);
    };
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
