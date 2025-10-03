'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }
    Animal.alive = Animal.alive.filter((anim) => anim.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
