/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>

*/



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

// const followersArray = [https://api.github.com/users/<Your github name>/followers];

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
function gitData(obj){

  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const imgSrc1 = document.createElement('img');
  imgSrc1.setAttribute('src', obj.avatar_url)

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const hThree = document.createElement('h3');
  hThree.classList.add("name");

  const uName = document.createElement('p');
  uName.classList.add('username');

  const theLocation = document.createElement("p");

  const profile = document.createElement('p');

  const gitAddy = document.createElement('a');
  gitAddy.setAttribute('href', obj.html_url);

  const followers = document.createElement('p');


  const following = document.createElement('p');

  const theBio = document.createElement('p');

  // set structure
  newCard.appendChild(imgSrc1);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(hThree);
  cardInfo.appendChild(uName);
  cardInfo.appendChild(theLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(gitAddy);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);

  // set text content src
  imgSrc1.textContent = obj.avatar_url;
  hThree.textContent = obj.name; 
  uName.textContent = obj.login;
  theLocation.textContent = obj.location;
  gitAddy.textContent = obj.html_url;
  followers.textContent = `Follower ${obj.followers}`;
  following.textContent = `Following ${obj.following}`;
  theBio.textContent = obj.bio;

  return newCard;
};


const theCards = document.querySelector('.cards');
const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
  .then((response) => theCards.appendChild(gitData(response.data)))
});
// axios.get('https://api.github.com/users/MichaelHMods')
//   .then((response) => { 
//     theCards.appendChild(gitData(response.data));
//   });
/* List of LS Instructors Github username's:/* 
 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
