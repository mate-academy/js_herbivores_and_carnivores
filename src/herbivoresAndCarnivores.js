'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(x) {
    if (!(x instanceof Carnivore) && x.hidden === false) {
      x.health -= 50;

      if (x.health <= 0) {
        const i = Animal.alive.indexOf(x);

        if (i > -1) {
          Animal.alive.splice(i, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
