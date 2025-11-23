'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health)
    this.hidden = false;
  }

  hide(){
    this.hidden = true;
  }

  show(){
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(animal) {
    if (animal instanceof Herbivore){
      if (animal.hidden === false) {
        animal.health -= 50;
        animal.health = Math.max(animal.health, 0);

      }
      
      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((elem) => elem !== animal)
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
