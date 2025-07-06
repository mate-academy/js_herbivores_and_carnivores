'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  delete() {
    Animal.alive = Animal.alive.filter(animal => animal !== this)
  }
}


class Herbivore extends Animal {
  constructor(name, health){
    super(name, health)
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health){
    super(name, health)
      this.hidden = false;
    }

    bite(herbivore) {
      if (!herbivore.hidden && herbivore instanceof Herbivore) {
        herbivore.health -= 50;

        if(herbivore.health <= 0) {
          herbivore.delete();
        }
      }
    }
  }

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
