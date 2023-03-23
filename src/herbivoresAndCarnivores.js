'use strict';

class Animal {
 static alive = [];

 health = 100;

 constructor(animal) {
   this.name = animal;

   Animal.alive.push(this);
 }
}

class Herbivore extends Animal {
  constructor(animal) {
    super(animal);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;
    };

    Animal.alive = Animal.alive.filter(aliveAnimal => aliveAnimal.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
