'use strict';

class Animal {
  constructor(
    name,
    health,
  ) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(
    name,
    health,
    hidden,
  ) {
    super(
      name,
      health,
      hidden,
    );

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(item) {
    if (!item.hidden && !(item instanceof Carnivore)) {
      item.health -= 50;
    }
    Animal.alive = Animal.alive.filter(el => el.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
