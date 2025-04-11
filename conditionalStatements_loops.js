// Exercise 1: Temperature Check
let temperature = 18;
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

switch (true) {
    case (temperature < 0): console.log("It's freezing!"); break;
    case (temperature <= 15): console.log("It's cold."); break;
    case (temperature <= 25): console.log("It's mild."); break;
    default: console.log("It's warm.");
}

// Exercise 2: Divisibility Check
let number = 6;
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

switch (true) {
    case (number % 2 === 0 && number % 3 === 0): console.log("Divisible by both."); break;
    case (number % 2 === 0): console.log("Divisible by 2."); break;
    case (number % 3 === 0): console.log("Divisible by 3."); break;
    default: console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For Loops
for (let i = 1; i <= 10; i++) console.log(i);
for (let i = 2; i <= 20; i += 2) console.log(i);
let total = 0;
for (let i = 1; i <= 100; i++) total += i;
console.log(total);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) largest = numbers2[i];
}
console.log(largest);

// Exercise 4: While Loops
let i = 1;
while (i <= 10) console.log(i++);

i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

total = 0;
i = 1;
while (i <= 100) {
    total += i;
    i++;
}
console.log(total);

i = 5;
while (i < 50) {
    console.log(i);
    i += 5;
}

// Exercise 5: Do While Loops
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

total = 0;
i = 1;
do {
    total += i;
    i++;
} while (i <= 100);
console.log(total);