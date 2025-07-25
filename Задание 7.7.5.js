function getUniqueSortedNumbers(numbers) {
   const uniqueNumbers = new Set(numbers);
   return Array.from(uniqueNumbers).sort((a, b) => a - b);
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const uniqueSorted = getUniqueSortedNumbers(numbers);

console.log("Исходный массив:", numbers);
console.log("Уникальные числа, отсортированные по возрастанию:", uniqueSorted);

const testArray = [10, 2, 8, 2, 5, 10, 3, 5];
console.log("Тестовый массив:", testArray);
console.log("Результат:", getUniqueSortedNumbers(testArray));