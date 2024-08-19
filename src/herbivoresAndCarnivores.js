'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((item) => item !== this);

    return `${this.name}`;
  }
}

class Herbivore extends Animal {
  #hidden = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(name, health) {
    super(name, health);
  }

  hide() {
    this.#hidden = !this.#hidden;
  }

  isHidden() {
    return this.#hidden;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, health) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.isHidden()) {
      target.takeDamage(50);
    } else {
      return `${this.name} не може вкусити ${target.name}`;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
