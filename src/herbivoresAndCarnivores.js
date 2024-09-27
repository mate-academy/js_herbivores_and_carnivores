'use strict';

class Animal {
  static addAnimal(animal) {
    this.alive.push(animal);
  };

  static deleteAnimal() {
    this.alive = this.alive.filter(el => el.health > 0);
  };

  constructor(name, health = 100,) {
    this.name = name;
    this.health = health;
    Animal.addAnimal(this);
  }
}
Animal.alive = [];

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
  bite(herbivoreObj) {
    if (herbivoreObj instanceof Herbivore && !herbivoreObj.hidden) {
      herbivoreObj.health -= 50;
    }

    if (herbivoreObj.health <= 0) {
      Animal.deleteAnimal(herbivoreObj);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
