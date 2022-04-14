'use strict';
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(anim) {
    if (anim instanceof Herbivore && anim.hidden === false) {
      anim.health -= 50;
    }

    if (anim.health === 0) {
      const indexAnim = Animal.alive.indexOf(anim);

      Animal.alive.splice(indexAnim, 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
