'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(health = 100, name) {
    this._health = health;
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(target) {
    if (target instanceof Carnivore) {
      return 'cant bite';
    } else if (target instanceof Herbivore && target.hidden) {
      return 'cant bite';
    } else {
      target.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
