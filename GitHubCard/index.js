/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const axiosPromise =
  // Make a request for a user with a given ID
  axios.get("https://api.github.com/users/rbhouck32").then(function(response) {
    // handle success
    console.log(response);
  });

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
const componentCreator = object => {
  // creates the card div
  const divCard = document.createElement("div");
  // creates img element child of "card" div
  const userImage = document.createElement("img");
  // creates card-info div
  const divCardInfo = document.createElement("div");
  // creates h3 child of "card-info" for username
  const nameH3 = document.createElement("h3");
  // creates paragraph child of "card-info" div
  const userNamePara = document.createElement("p");
  // creates paragraph child of "card-info" div
  const locationPara = document.createElement("p");
  // creates paragraph child of "card-info" div
  const profilePara = document.createElement("p");
  // creates paragraph child of "card-info" div
  const followersPara = document.createElement("p");
  // creates paragraph child of "card-info" div
  const followingPara = document.createElement("p");
  // creates paragraph child of "card-info" div
  const bioPara = document.createElement("p");

  // Add class names to created elements

  // adds class name to divCard
  divCard.classList.add("card");
  // adds class name to divCardInfo
  divCardInfo.classList.add("card-info");
  // add class name to h3
  nameH3.classList.add("name");
  // add class name to userJNamePara
  userNamePara.classList.add("username");
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
