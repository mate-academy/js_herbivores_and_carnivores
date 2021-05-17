'use strict';

class Animal {
  constructor(name, heal = 100) {
    this.name = name;
    this.health = heal;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, heal) {
    super(name, heal);
    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(anim) {
    if (!anim.hidden && anim instanceof Herbivore) {
      anim.health -= 50;
    }

    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
