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
    this.hidden = (this.hidden === false)
      ? this.hidden = true
      : this.hidden = false;
  };
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden === false) {
      if (prey.health > 50) {
        prey.health -= 50;
      } else {
        const ind = Animal.alive.indexOf(prey);

        Animal.alive.splice(ind, 1);
      };
    };
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
