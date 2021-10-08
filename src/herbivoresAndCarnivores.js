'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(aim) {
    if (aim instanceof Herbivore && !aim.hidden) {
      aim.health -= 50;

      if (aim.health === 0) {
        const result = Animal.alive.filter(x => x.health > 0);

        Animal.alive = [...result];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
