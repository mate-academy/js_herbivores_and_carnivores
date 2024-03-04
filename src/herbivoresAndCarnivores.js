'use strict';

class Animal {
  static alive = [];

  static borned(anim) {
    Animal.alive.push(anim);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.borned(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(anim) {
    if (anim instanceof Herbivore && !anim.hidden) {
      anim.health -= 50;

      Animal.alive = Animal.alive.filter((an) => an.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
