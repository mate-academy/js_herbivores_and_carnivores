'use strict';

class Animal {
  static add(obj) {
    this.alive.push(obj);
  };

  static delete(name) {
    this.alive = this.alive
      .filter(animal => animal.name !== name);
  };

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.add(this);
  }
}

Herbivore.prototype.hide = function() {
  this.hidden = !this.hidden;
};

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.add(this);
  }
}

Carnivore.prototype.bite = function(victim) {
  if (victim instanceof Herbivore && victim.hidden === false) {
    victim.health -= 50;
  }

  if (victim.health <= 0) {
    Animal.delete(victim.name);
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
