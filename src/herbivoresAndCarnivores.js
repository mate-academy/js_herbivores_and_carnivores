'use strict';

class Animal {
  static alive = [];
  
  static newAnimal(animal) {
    this.alive.push(animal)
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.newAnimal(this)
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health)
    this.hidden = false;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true
    } else {
      this.hidden = false
    }
  }
}

class Carnivore extends Animal {
  bite(herbivor) {
    if(herbivor.hidden === false && herbivor instanceof Herbivore) {
      herbivor.health -= 50
    }
    
    if(herbivor.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivor), 1)
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
