# Herbivores and Сarnivores

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

# Task description:


# Травоїдні та Хижаки

**Перш ніж розпочати, прочитайте [керівництво](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)**

# Опис завдання:

Природа добре підходить для відображення принципів об'єктно-орієнтованого програмування.
Усі екземпляри класу `Animal` повинні мати властивості `health` та `name`.
Значення здоров'я за замовчуванням дорівнює `100`.

Створіть клас `Herbivore`.
Травоїдний має метод `hide`, який встановлює властивість `hidden` тварини на значення `true` та допомагає сховатися від хижаків.

Створіть клас `Carnivore`.
Хижак має метод `bite`, який приймає об'єкт травоїдної тварини та зменшує його здоров'я на `50`. Метод не працює, якщо це інший хижак або травоїдна тварина зараз ховається.

Класи `Herbivore` та `Carnivore` повинні розширювати клас `Animal`.

Усі живі тварини повинні бути в статичному масиві `Animal.alive`.
Якщо здоров'я тварини стає меншим або рівним `0`, вона гине, і її слід видалити зі статичного масиву `Animals.alive`.

Приклад:
```js
const deer = new Herbivore('Bembi');

const panther = new Carnivore('Bagira');

const lion = new Carnivore('King');

const rabbit = new Herbivore('Max');

Animal.alive === [
{name: 'Бембі', здоров'я: 100, hidden: false},
{name: 'Багіра', здоров'я: 100},
{name: 'Король', здоров'я: 100},
{name: 'Макс', здоров'я: 100, hidden: false},
];

lion.bite(олень);
panther.bite(лев);

Animal.alive === [
{name: 'Бембі', здоров'я: 50},
{name: 'Багіра', здоров'я: 100},
{name: 'Король', здоров'я: 100},
{name: 'Макс', здоров'я: 100},
];

panther.bite(олень);
rabbit.hide();

panther.bite(кролик);

Animal.alive === [
{name: 'Багіра', здоров'я: 100},
{name: 'Король', здоров'я: 100},
{name: 'Макс', здоров'я: 100, приховано: true},
];
```
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
