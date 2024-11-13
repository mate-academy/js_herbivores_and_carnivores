'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(target) {
    if (target.hidden === false && target instanceof Herbivore) {
      target.health = target.health - 50;
    }

    if (target.health <= 0) {
      const filtredArray = [...Animal.alive];

      Animal.alive = filtredArray.filter((item) => item !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
