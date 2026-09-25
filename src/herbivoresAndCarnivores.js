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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(anim) {
    if (anim.hidden !== undefined && anim.hidden === false) {
      anim.health -= 50;

      if (anim.health <= 0) {
        const indexDelit = Animal.alive.findIndex((x) => x === anim);

        Animal.alive.splice(indexDelit, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
