'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  };
};

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name);

    if (hidden === undefined) {
      this.hidden = false;
    };

    Animal.alive.push(this);
  };

  hide() {
    this.hidden = true;
  };
};

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  };

  bite(herb) {
    if (herb.hidden === false) {
      herb.health = herb.health - 50;
    };

    Animal.alive = Animal.alive.filter(a => a.health !== 0);
  };
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
