'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  };
};

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  };

  hide() {
    this.hidden = !this.hidden;
  };
};

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  };

  bite(animal) {
    if (animal.hidden === false) {
      animal.health = animal.health - 50;
    };

    Animal.alive = Animal.alive.filter(a => a.health > 0);
  };
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
