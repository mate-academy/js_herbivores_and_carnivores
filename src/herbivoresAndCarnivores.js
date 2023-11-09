'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  };

  die() {
    const a = Animal.alive.filter((el) => el !== this);

    Animal.alive = a;
  };
};

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
};

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  };

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.decreaseHealth(50);
    };
  };
};

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
