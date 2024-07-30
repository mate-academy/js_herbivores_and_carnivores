'use strict';

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  static alive = [];

  isAlive() {
    return this.health > 0;
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (!this.isAlive()) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
