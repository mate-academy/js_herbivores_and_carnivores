'use strict';

const Carnivore = require('./herbivoresAndCarnivores');

function healPoints(value) {
  return Carnivore.bite
    ? value - Carnivore.damage
    : value;
}

module.exports = healPoints;
