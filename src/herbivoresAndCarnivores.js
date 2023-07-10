'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
};

class Herbivore extends Animal {
  constructor(props) {
    super(props);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  };
};

class Carnivore extends Animal {
  bite(animal) {
    animal instanceof Herbivore
      && !animal.hidden
      && (animal.health -= 50);

    animal.health <= 0
      && (Animal.alive = Animal.alive.filter(creature => creature.health > 0));
  };
};

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
