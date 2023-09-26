'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    
    Animal.alive ? Animal.alive.push(this) : Animal.alive = [this];
  }

  static removeAnimal() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}
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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
