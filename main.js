var foodieApp=angular.module('foodieApp',['ngRoute']);

foodieApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/login.html',
    controller:'loginController'
  })
  .when('/home',{
    templateUrl:'pages/main.html',
    controller:'mainController'
  })
  .when('/restaurant/:id',{
    templateUrl:'pages/restaurant.html',
    controller:'restaurantController'
  })
})


  foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
    $scope.restaurantId = $routeParams.id;
    var restaurants = [{
    name: 'Farzi Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
    vote: '4.2',
    id:'1',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    hours: '12 Noon to 1 AM',
bestDish: {
  name: 'Corn Pizza',
  image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
      name: 'Circus',
    address: 'D-14, 3rd floor, South Extension,New Delhi',
    location: 'South Extension2',
    category: 'Casual Dining, Bar',
    vote: '4.1',
    id:'2',
    cuisines: 'North Indian,Chinese,Italian',
    cost: '2000',
    hours: '12 Noon to 2 AM (Mon-Sun)',
    hours: '12 Noon to 1 AM',
bestDish: {
  name: 'paneer tikka',
  image: 'http://www.vegrecipesofindia.com/wp-content/uploads/2011/10/paneer-veggies-skewered.jpg'
},
    image: 'http://madeinshoreditch.co.uk/wp-content/uploads/2014/09/circ1.jpg'
  },
  {
    name: 'Alkauser',
    address: 'Korner of kautilya marg, Near Assam Bhawan, Chanakya Puri , New Delhi',
    location: 'Chankyapuri',
    category: 'Takeaway,Delivery',
    vote: '4.0',
    id:'3',
    cuisines: 'North Indian,Lucknowi,Rolls',
    cost: '800',
    hours: '4:30 pm to 1 AM (Mon-Sun)',
    hours: '12 Noon to 1 AM',
bestDish: {
  name: 'Chicken tikka',
  image: 'http://indianhealthyrecipes.com/wp-content/uploads/2013/02/chicken-tikka-recipe-step-6.jpg'
},
    image: 'http://images.jdmagicbox.com/comp/delhi/59/011pge20259/catalogue/alkakori-alkauser-restaurant-rk-puram-sector-6-delhi-a2fcc.jpg'
  },
  {
      name: 'Pa Pa Ya',
    address: 'Dome, Level 4, Select Citywalk, Saket , New Delhi',
    location: 'Saket',
    category: 'Casual Dining',
    vote: '4.8',
    id:'5',
    cuisines: 'Asian,Chinese,Thai,Japanese',
    cost: '2000',
    hours: '12 noon to 1 AM ',
    hours: '12 Noon to 1 AM',
bestDish: {
  name: 'Chicken Tandoori',
  image: 'http://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg'
},
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/b2/2e/26/papaya-cafe.jpg'

}];

$scope.ingredients = [];

$scope.getIngredients = function(url) {

              var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
              $http({
                'method': 'POST',
                'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
                'headers': {
                  'Authorization': 'Key febaf0ff47984c8b9280a047e523d807',
                  'Content-Type': 'application/json'
                },
                'data': data,
                }).then(function (response) {
                  var ingredients = response.data.outputs[0].data.concepts;
                    var list = '';
                    for (var i =0;i < ingredients.length ;i++) {
                   $scope.ingredients.push(ingredients[i].name);  
                    }
                  })

}


                $scope.restaurant = restaurants[$routeParams.id - 1];
              })



foodieApp.controller('loginController',function($scope,$location){
  $scope.goToHome = function(){
    $location.url('home')
  }
})

foodieApp.controller('mainController',function($scope){
       // $scope.squery='chinese'--already search the chinese food
       $scope.restaurants = [{
  name: 'Farzi Cafe',
  address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  location: 'Connaught Place',
  category: 'Casual Dining, Bar',
  vote: '4.2',
  id:'1',
  cuisines: 'Modern Indian',
  cost: '2200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  bestDish: {
  name: 'Corn Pizza',
  image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},

  image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
    name: 'Circus',
  address: 'D-14, 3rd floor, South Extension,New Delhi',
  location: 'South Extension2',
  category: 'Casual Dining, Bar',
  vote: '4.1',
  id:'2',
  cuisines: 'North Indian,Chinese,Italian',
  cost: '2000',
  hours: '12 Noon to 2 AM (Mon-Sun)',
  bestDish: {
  name: 'paneer tikka',
  image: 'http://www.vegrecipesofindia.com/wp-content/uploads/2011/10/paneer-veggies-skewered.jpg'
},
  image: 'http://madeinshoreditch.co.uk/wp-content/uploads/2014/09/circ1.jpg'
},
{
  name: 'Alkauser',
  address: 'Korner of kautilya marg, Near Assam Bhawan, Chanakya Puri , New Delhi',
  location: 'Chankyapuri',
  category: 'Takeaway,Delivery',
  vote: '4.0',
  id:'3',
  cuisines: 'North Indian,Lucknowi,Rolls',
  cost: '800',
  hours: '4:30 pm to 1 AM (Mon-Sun)',
  bestDish: {
  name: 'Chicken tikka',
  image: 'http://indianhealthyrecipes.com/wp-content/uploads/2013/02/chicken-tikka-recipe-step-6.jpg'
},
  image: 'http://images.jdmagicbox.com/comp/delhi/59/011pge20259/catalogue/alkakori-alkauser-restaurant-rk-puram-sector-6-delhi-a2fcc.jpg'
},
{
    name: 'Pa Pa Ya',
  address: 'Dome, Level 4, Select Citywalk, Saket , New Delhi',
  location: 'Saket',
  category: 'Casual Dining',
  vote: '4.8',
  id:'4',
  cuisines: 'Asian,Chinese,Thai,Japanese',
  cost: '2000',
  hours: '12 noon to 1 AM ',
  bestDish: {
  name: 'Chicken Tandoori',
  image: 'http://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg'
},

  image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/b2/2e/26/papaya-cafe.jpg'
}
];

})
