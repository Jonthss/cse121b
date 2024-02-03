/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Jonathas Oliveira",
    photo: 'images/Jonathas.png', 
    favoriteFoods: [
      'Pizza',
      'Burger',
      'Cheesecake',
      'Shrimp',
      'Steak'
    ],
    hobbies: ['Watch Movies', 'Coding', 'Traveling'],
    placesLived: []
  };
  
  /* Populate Profile Object with placesLive objects */
  
  // This occurs outside of the object definition.
  myProfile.placesLived.push(
    {
      place: 'Teresina, PI - Brazil',
      length: '1 year'
    },
    
    {
      place: 'João Pessoa, PB - Brazil',
      length: '6 years'
    },  
    
    {
      place: 'Campina Grande, PB - Brazil',
      length: '7 years'
    },
  );
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector('#name').textContent = myProfile.name;
  
  /* Photo with attributes */
  let photoElement = document.querySelector('#photo');
  photoElement.src = myProfile.photo;
  photoElement.alt = myProfile.name;
  
  /* Favorite Foods List*/
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  /* Places Lived DataList */
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  