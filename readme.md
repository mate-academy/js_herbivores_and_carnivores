# Herbivores and Сarnivores

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

# Task description:

Nature is well suited to reflect the principles of Object Oriented Programming.
All instances of the `Animal` class must have properties `health` and a `name`.
Health is `100` by default.

Create a `Herbivore` class.
Herbivore has a method of `hide`, which sets the `hidden` property of the beast to the value of `true`, and helps to hide from carnivores.

Create a `Сarnivore` class.
Carnivore has a `bite` method, which takes a herbivore object and decreases the object's health by `50`. The method does not work if it is another сarnivore, or the herbivore is currently hiding.

`Herbivore` and `Сarnivore` should extend an `Animal` class.

All alive animals should be in the static `Animal.alive` array.
If the health of the animal becomes less than or equal to `0`, the beast dies and it should be removed from the static array `Animals.alive`.

Example:
```js
const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

Animal.alive === [
  {name: 'Bembi', health: 100, hidden: false},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: false},
];

lion.bite(deer);
panther.bite(lion);

Animal.alive === [
  {name: 'Bembi', health: 50},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100},
];

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

Animal.alive === [
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: true},
];
```
Natura dobrze nadaje się do odzwierciedlania zasad programowania obiektowego.
Wszystkie instancje klasy `Animal` muszą mieć właściwości `health` i `name`.
Domyślnie zdrowie wynosi „100”.

Utwórz klasę „Herbivore”.
Roślinożerca ma metodę „ukryj”, która ustawia „ukrytą” właściwość bestii na wartość „true” i pomaga ukryć się przed mięsożercami.

Utwórz klasę „Сarnivore”.
Carnivore ma metodę „ugryzienia”, która zabiera obiekt roślinożerny i zmniejsza jego zdrowie o „50”. Metoda nie działa, jeśli jest to inny mięsożerca lub roślinożerca aktualnie się ukrywa.

`Herbivore` i `Сarnivore` powinny rozszerzać klasę `Animal`.

Wszystkie żywe zwierzęta powinny znajdować się w statycznej tablicy `Animal.alive`.
Jeżeli zdrowie zwierzęcia spadnie lub będzie równe `0`, zwierzę umrze i powinno zostać usunięte ze statycznej tablicy `Animals.alive`.
