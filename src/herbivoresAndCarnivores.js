'use strict'

class Animal {
  static alive = [];

  constructor(name, health = 100) {
      this.name = name;
      this.health = health;
      Animal.alive.push(this);
  }

  die() {
    console.log(`${this.name} has died.`);
    Animal.alive = Animal.alive.filter(i => i !== this);
  }

}

class Herbivore extends Animal {
  constructor(name, health) {
      super(name, health);
      this.hidden = false;
  }

  hide() {
      this.hidden = true;
      console.log(`${this.name} is now hiding.`);
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
      super(name, health);
  }

  bite(victim) {
      if (victim instanceof Herbivore && !victim.hidden) {
          victim.health -= 50;
          if (victim.health <= 0) {
            victim.die();
          }
      }
  }
}


module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
