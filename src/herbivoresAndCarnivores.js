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
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(aim) {
    Animal.alive.map((an, index) => {
      // eslint-disable-next-line max-len
      if (an === aim && aim.constructor.name === 'Herbivore' && an.hidden !== true) {
        an.health -= 50;

        if (an.health === 0) {
          Animal.alive.splice(index);
        }
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
