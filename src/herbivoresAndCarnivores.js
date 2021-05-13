'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide(hidden) {
    if (!hidden) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
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
    }

    if (prey.health === 0) {
      const index = Animal.alive.indexOf(prey);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
