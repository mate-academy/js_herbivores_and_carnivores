'use strict';
class Animal {
  static alive = [];

  name;
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

module.exports = Animal;
