import NNBeef from "../img/beef_mash.jpeg";
import NNPork from "../img/pork_potluck.jpeg";
import NNTurkey from "../img/turkey_fare.jpeg";
import NNChicken from "../img/chicken_cuisine.jpeg";
import BBDuckImage from "../img/blue_buffalo_duck.jpeg";
import BBSalmonImage from "../img/blue_buffalo_salmon.jpeg";
import BBChickenImage from "../img/blue_buffalo_chicken.jpeg";
import BBCatDuckImage from "../img/blue_buffalo_cat_duck.jpeg";
import BBCatSalmonImage from "../img/blue_buffalo_cat_salmon.jpeg";
import BBCatChickenImage from "../img/blue_buffalo_cat_chicken.jpeg";

const NomNomDogFoodInfo = [
  {
    id: 1,
    name: "Beef Mash",
    img: NNBeef,
    protein: 93,
    fat: 48,
    carbs: 75,
  },
  {
    id: 2,
    name: "Chicken Cuisine",
    img: NNChicken,
    protein: 80,
    fat: 56,
    carbs: 71,
  },
  {
    id: 3,
    name: "Turkey Fare",
    img: NNTurkey,
    protein: 85,
    fat: 41,
    carbs: 103,
  },
  { id: 4, name: "Pork Potluck", img: NNPork, protein: 76, fat: 48, carbs: 93 },
];

const NomNomCatFoodInfo = [{
  id: 1,
  name: "Chicken Cuisine",
  img: NNChicken,
  protein: 163,
  fat: 42,
  carbs: 21,
}];
  
const CompetitorDogFoodInfo = [
  {
    id: 1,
    tagLine:
      "Blue Buffalo ® Wilderness ™ Duck contains 34% min protein, 15% min fat and has a calorie density of 3596kcal/kg.",
    name: "Blue Buffalo ® Wilderness ™ Duck",
    img: BBDuckImage,
    protein: 99,
    fat: 44,
    carbs: 79,
  },
  {
    id: 2,
    tagLine:
      "Blue Buffalo ® Wilderness ™ Salmon contains 34% min protein, 15% min fat and has a calorie density of 3592kcal/kg.",
    name: "Blue Buffalo ® Wilderness ™ Salmon",
    img: BBSalmonImage,
    protein: 99,
    fat: 45,
    carbs: 79,
  },
  {
    id: 3,
    tagLine:
      "Blue Buffalo ® Wilderness ™ Chicken contains 34% min protein, 15% min fat and has a calorie density of 3599kcal/kg.",
    name: "Blue Buffalo ® Wilderness ™ Chicken",
    img: BBChickenImage,
    protein: 99,
    fat: 44,
    carbs: 79,
  },
];

const CompetitorCatFoodInfo = [
  {
    id: 1,
    tagLine:
      "Blue Buffalo ® Wilderness ™ Duck contains 34% min protein, 15% min fat and has a calorie density of 3596kcal/kg.",
    name: "Blue Buffalo ® Wilderness ™ Duck",
    img: BBCatDuckImage,
    protein: 99,
    fat: 44,
    carbs: 79,
  },
  {
    id: 2,
    tagLine:
      "Blue Buffalo ® Wilderness ™ Salmon contains 34% min protein, 15% min fat and has a calorie density of 3592kcal/kg.",
    name: "Blue Buffalo ® Wilderness ™ Salmon",
    img: BBCatSalmonImage,
    protein: 99,
    fat: 45,
    carbs: 79,
  },
  {
    id: 3,
    tagLine:
      "Blue Buffalo ® Wilderness ™ Chicken contains 40% min protein, 18% min fat and has a calorie density of 3832kcal/kg.",
    name: "Blue Buffalo ® Wilderness ™ Chicken",
    img: BBCatChickenImage,
    protein: 99,
    fat: 44,
    carbs: 79,
  },
];

export {
  CompetitorDogFoodInfo,
  NomNomDogFoodInfo,
  NomNomCatFoodInfo,
  CompetitorCatFoodInfo,
};
