'use strict';

class Animal {
  static alive = [];
  static aliveOnlyFilter() {
    this.alive = this.alive.filter(beast => beast.health > 0);
  }

  constructor(name) {
    this.name = name;
  }

  health = 100;
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
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
      Animal.aliveOnlyFilter();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
