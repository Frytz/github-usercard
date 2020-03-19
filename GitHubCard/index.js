/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/frytz');
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// Dummy Url.
const usersNames = [
  "frytz", 
  "Jrive204",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
  ];
  console.log(usersNames);



// Axios Test.
const axiosTest = axios.get

// Axios Test Data.

//test function


usersNames.forEach((userName) => {
 const one = "https://api.github.com/users/" + userName;
  console.log(userName);
 
axiosTest(one)
.then( response => {
  let cards = document.querySelector('.cards');
  cards.appendChild(cardMaker(response));
  return response;


// .then( response => {
//   axios.get(response.data.followers_url)
  // .then(response => {
  //   response.data.forEach(el => {
  //     axiosTest(one)
  //     .then(response => {
  //       let cards = document.querySelector('.cards');
  //       cards.appendChild(cardMaker(response));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   })
    
  })
  .catch( err => {
    console.log(err);
  })

.catch( err => {
  console.log(err);
})

})
function cardMaker(obj) {
  // Create elements
  let card = document.createElement('div');
  let image = document.createElement('img');
  let info = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let link = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  let button = document.createElement('button');

  // Attach elements to main div
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(link);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  info.appendChild(button);
  
  // Add classes as needed
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  button.classList.add('button');
  // added css classes for buttons
  followers.classList.add('button');
  following.classList.add('button');
  
  // Add text content and image source
  image.src = obj.data.avatar_url;
  name.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = 'Location: ' + obj.data.location;
  profile.textContent = 'Profile: ';
  link.textContent = obj.data.html_url;
  link.href = obj.data.html_url;
  followers.textContent = 'Following: ' + obj.data.followers;
  following.textContent = 'Followers: ' + obj.data.following;
  bio.textContent = 'Bio: ' + obj.data.bio;
  button.textContent = 'See Contributions';

  button.addEventListener('click', () => {
    graph.classList.toggle('calendar-show');
    card.classList.toggle('card-open');
  })

  // Creating hidden div
  // let graph = document.createElement('div');
  // // Hidden div
  // graph.classList.add('calendar');
  // // Hidden div
  // card.appendChild(graph);
  // new GitHubCalendar(graph, obj.data.login, { responsive: true });
  
  return card;
}



// console.log(cards);

// let gitName = document.createElement('h3');
// gitName.classList.add('name');
// gitName.textContent = data.login;
// card.appendChild(gitName);
// card.classList.add('card');

// let name = document.createElement('h3');
 
// cards.appendChild(name);

// function cardCreator(image, userName, usersUserName, usersLocation, profileGitHubPage, followingUser, followedByUser, userBio) {
//   //elements
//   let card = document.createElement('div');
//   let userImage = document.createElement('img');
//   let cardInfo = document.createElement('div');
//   let gitName = document.createElement('h3');
//   let nameUser = document.createElement('p');
//   let location = document.createElement('p');
//   let profile = document.createElement('p');
//   let profileAddress = document.createElement('a');
//   let follows = document.createElement('p');
//   let followed = document.createElement('p');
//   let bio = document.createElement('p');

//   //classes
//   card.classList.add('card');
//   cardInfo.classList.add('card-info');
  
//   nameUser.classList.add('username');
  
//   // appends
//  card.appendChild(userImage);
//  card.appendChild(cardInfo);
//  cardInfo.append(name);
//  cardInfo.appendChild(nameUser)
//  cardInfo.appendChild(location);
//  cardInfo.appendChild(profile);
//  cardInfo.appendChild(profileAddress);
//  cardInfo.appendChild(follows);
//  cardInfo.appendChild(followed);
//  cardInfo.appendChild(bio);
 
//  //texts
// }
// conat
// let firstCard = cardCreator();
// cards.appendChild(firstCard);