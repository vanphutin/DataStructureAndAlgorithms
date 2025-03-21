function findAllRecipes(
  recipes: string[],
  ingredients: string[][],
  supplies: string[]
): string[] {
  // Chuyển supplies thành Set để tra cứu nhanh
  const available: Set<string> = new Set(supplies);
  // Ghi nhớ trạng thái của từng công thức: true (có thể làm), false (không thể làm), undefined (chưa kiểm tra)
  const memo: Map<string, boolean> = new Map();
  // Tạo map từ công thức đến nguyên liệu
  const recipeToIngredients: Map<string, string[]> = new Map();
  recipes.forEach((recipe, index) => {
    recipeToIngredients.set(recipe, ingredients[index]);
  });

  // Hàm kiểm tra xem một công thức có thể làm được không
  function canMake(recipe: string): boolean {
    // Nếu đã kiểm tra trước đó, trả kết quả từ memo
    if (memo.has(recipe)) {
      return memo.get(recipe)!;
    }

    // Nếu không phải là công thức mà có trong supplies, coi như làm được
    if (!recipeToIngredients.has(recipe)) {
      return available.has(recipe);
    }

    // Đánh dấu recipe đang được kiểm tra (false tạm thời) để tránh lặp vô hạn
    memo.set(recipe, false);

    // Kiểm tra tất cả nguyên liệu cần cho recipe
    const ingredList = recipeToIngredients.get(recipe)!;
    for (const ingred of ingredList) {
      if (!canMake(ingred)) {
        // Nếu một nguyên liệu không làm được, trả false
        return false;
      }
    }

    // Nếu tất cả nguyên liệu đều làm được, đánh dấu recipe này là true
    memo.set(recipe, true);
    return true;
  }

  // Tìm tất cả công thức có thể làm
  const result: string[] = [];
  for (const recipe of recipes) {
    if (canMake(recipe)) {
      result.push(recipe);
    }
  }

  return result;
}

// Test case
const recipes: string[] = ["bread", "sandwich"];
const ingredients: string[][] = [
  ["flour", "water"],
  ["bread", "meat"],
];
const supplies: string[] = ["flour", "water", "meat"];
console.log(findAllRecipes(recipes, ingredients, supplies)); // Output: ["bread", "sandwich"]

// Test case khác
const recipes2: string[] = ["ju", "fzjnm", "x", "fozx"];
const ingredients2: string[][] = [
  ["d", "hvem", "f", "cpind"],
  ["hvem", "cpind", "x", "fozx"],
  ["d", "hvem"],
  ["d", "hvem", "cpind"],
];
const supplies2: string[] = ["f", "hvem", "cpind", "d"];
console.log(findAllRecipes(recipes2, ingredients2, supplies2)); // Output: ["ju", "fzjnm", "x", "fozx"]
