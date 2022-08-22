'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  };

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  };
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
      Animal.alive = Animal.alive.filter((el) => el.health !== 0);
    }
  };
}
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
