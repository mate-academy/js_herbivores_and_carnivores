'use strict';

class Animal {
  static alive = [];

  static updateAliveList = () => {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0)
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static BITE_DAMAGE = 50;
  
  bite(target) {
    if (Animal.alive.includes(target) && target instanceof Herbivore && !target.hidden) {
      target.health -= Carnivore.BITE_DAMAGE;

      if (target.health <= 0) {
        Animal.updateAliveList();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
