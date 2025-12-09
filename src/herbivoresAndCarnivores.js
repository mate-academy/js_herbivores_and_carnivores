'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
  static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  hide() {
    this.hidden = true;

    return `${this.name} is hiding!`;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => item !== target);
      }

      return `${this.name} bites ${target.name}! ${target.name}'s health is now ${target.health}.`;
    } else if (target instanceof Herbivore && target.hidden) {
      return `${target.name} is hiding and cannot be bitten!`;
    } else {
      return `${this.name} can only bite herbivores!`;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
