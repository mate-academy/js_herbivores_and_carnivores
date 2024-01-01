'use strict';

const HEALTH_THRESHOLD_DEAD = 0;
const DAMAGE_FROM_BITE = 50;
const DEFAULT_HEALTH = 100;

class Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.removeFromAlive = function(target) {
  const index = this.alive.indexOf(target);

  if (index !== -1) {
    this.alive.splice(index, 1);
  }
};

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= HEALTH_THRESHOLD_DEAD) {
      Animal.removeFromAlive(this);
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.decreaseHealth(DAMAGE_FROM_BITE);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
