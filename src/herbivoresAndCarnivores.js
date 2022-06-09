'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  };
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(Animal);
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }

    return this;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.slice(this);
  }

  bite(beast) {
    Animal.alive.filter(el => el.health <= 0);

    if (beast.hidden === false
      && beast instanceof Herbivore) {
      beast.health -= 50;
    };

    if (beast.health <= 0) {
      Animal.alive.splice(beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
