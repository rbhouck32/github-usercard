/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// Make a request for a user with a given ID
axios
  .get("https://api.github.com/users/rbhouck32")
  .then(response => {
    // handle success
    console.log(response);
    cardsDiv.appendChild(cardCreator(response.data));
  })
  .catch(error => console.log("Error:", error));

axios
  .get("https://api.github.com/users/rbhouck32/followers")
  .then(response => {
    console.log(response);
    response.data.forEach(username => {
      return axios
        .get(username.url)
        .then(response => {
          cardsDiv.appendChild(cardCreator(response.data));
        })
        .catch(error => console.log("Error: ", error));
      // const newCard = componentCreator(user);
      // entryPoint.appendChild(newCard);
    });
  })
  .catch(error => console.log("Error:", error));

const cardsDiv = document.querySelector(".cards");

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
const cardCreator = user => {
  // creates the card div
  const divCard = document.createElement("div"),
    // creates img element child of "card" div
    userImage = document.createElement("img"),
    // creates card-info div
    divCardInfo = document.createElement("div"),
    // creates h3 child of "card-info" for username
    nameH3 = document.createElement("h3"),
    // creates paragraph child of "card-info" div
    userNamePara = document.createElement("p"),
    // creates paragraph child of "card-info" div
    locationPara = document.createElement("p"),
    // creates paragraph child of "card-info" div
    profilePara = document.createElement("p"),
    // creates anchor tag child of PROFILE paragraph
    link = document.createElement("a"),
    // creates paragraph child of "card-info" div
    followersPara = document.createElement("p"),
    // creates paragraph child of "card-info" div
    followingPara = document.createElement("p"),
    // creates paragraph child of "card-info" div
    bioPara = document.createElement("p");

  //add elements to the divCard
  divCard.appendChild(userImage);
  divCard.appendChild(divCardInfo);
  // add elements to the divCardInfo
  divCardInfo.appendChild(nameH3);
  divCardInfo.appendChild(userNamePara);
  divCardInfo.appendChild(locationPara);
  divCardInfo.appendChild(profilePara);
  profilePara.appendChild(link);
  divCardInfo.appendChild(followersPara);
  divCardInfo.appendChild(followingPara);
  divCardInfo.appendChild(bioPara);

  // Add class names to created elements
  // adds class name to divCard
  divCard.classList.add("card");
  // adds class name to divCardInfo
  divCardInfo.classList.add("card-info");
  // add class name to h3
  nameH3.classList.add("name");
  // add class name to userJNamePara
  userNamePara.classList.add("username");

  // content additions
  userImage.src = user.avatar_url;
  nameH3.textContent = user.name;
  userNamePara.textContent = user.login;
  locationPara.textContent = "Location: " + user.location;
  link.setAttribute("href", user.html_url); /* camelCase? */
  link.textContent = user.html_url; /* camelCase? */
  followersPara.textContent = "Followers: " + user.followers; /* camelCase? */
  followingPara.textContent = "Following: " + user.following; /* camelCase? */
  bioPara.textContent = "Bio: " + user.bio;

  return divCard;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
