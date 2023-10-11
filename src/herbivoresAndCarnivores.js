'use strict';
class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static removeFromAliveList(animal) {
    const index = Animal.alive.findIndex(a => a === animal);
    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  takeDamage(damage) {
    if (this.health > 0) {
      this.health -= damage;
      if (this.health <= 0) {
        Animal.removeFromAliveList(this);
      }
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden === true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.takeDamage(50);
    }
  }
}