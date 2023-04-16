'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this)
  }
} 

 Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    this.health = 100;
  }

  hide() {
    const hide = this.hidden;
    hide === false ? this.hidden = true : this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor( name) {
    super(name)
    this.health = 100;
  };

  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
