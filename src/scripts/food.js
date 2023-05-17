const getFood = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese';
  try {
    const response = await fetch(`${baseUrl}`, { method: 'GET' });
    const food = await response.json();
    loadFood(food.meals);
  } catch (e) {
    throw e;
  }
};

getFood();

const loadFood = (data) => {
  const foodList = document.querySelector('.food');
  foodList.innerHTML = '';

  data.forEach((meal) => {
    const { strMealThumb, strMeal } = meal;
    const food = `<div class="card" tabindex="0">
    <img src="${strMealThumb}" alt="${strMeal} Gambar">
    <h3>${strMeal}</h3>
    </div>`;
    foodList.innerHTML += food;
  });
};