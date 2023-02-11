'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = []; // need to use static propery instead

Animal.deleteDead = function() {
  for (let i = 0; i < Animal.alive.length; i++) {
    if (Animal.alive[i].health === 0) {
      Animal.alive.splice(i, 1);
    }
  }
};

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
  bite(obj) {
    if (!obj.hidden && obj instanceof Herbivore) {
      obj.health -= 50;

      if (obj.health === 0) {
        Animal.deleteDead();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
