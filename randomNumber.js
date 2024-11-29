const numbers = [25, 50, 75, 100, 200];

// Функція для вибору випадкового числа з масиву
function getRandomFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length); // Випадковий індекс
    return array[randomIndex]; // Повертаємо число за цим індексом
}

// Використання функції
const randomNumber = getRandomFromArray(numbers);
console.log("Випадкове число:", randomNumber);