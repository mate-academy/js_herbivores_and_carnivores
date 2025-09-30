'use strict';

const ANIMAL_ALIVE = [];

class Animal {
  constructor(health = 100, name) {
this.health = health;
this.name = name;

if (this.health > 0) {
  ANIMAL_ALIVE.push(this)
}
isAlive() {
  return this.health > 0;
}

  }
}

class Herbivore extends Animal {
  constructor(name, health) {
super(name, health);

    hide() {
      return this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
   constructor(name, health) {
super(name);

bite(targetHerbivore) {
  if (targetHerbivore) {
 if (targetHerbivore.hidden === true) {
  const demage = 50;
  targetHerbivore.health - 50;
  }
 if (targetHerbivore.health <= 0) {
        targetHerbivore.health = 0;
const index = ANIMAL_ALIVE.indexOf(targetHerbivore);
        if (index > -1) {
          ANIMAL_ALIVE.splice(index, 1);
  }
 
}
return targetHerbivore.health;
}
}   
        }
      }
      

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
