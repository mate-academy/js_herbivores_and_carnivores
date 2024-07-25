'use strict';

const FULL_HP = 100;
const BITE_HP = 50;
const DEAD_HP = 0;

class Animal {
  static alive = [];

  constructor(name, health = FULL_HP) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static deleteAliveObj() {
    Animal.alive = Animal.alive.filter((item) => item.health > DEAD_HP);
  }
}

class Herbivore extends Animal {
  constructor(name, health = FULL_HP) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = FULL_HP) {
    super(name, health);
  }

  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= BITE_HP;

      Animal.deleteAliveObj(obj);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
