var accountUsers = {
  user1:{
  userName: "@elonmusk",
    firstName: "Elon",
    displayName: "Elon Musk", 
    city: "Austin, TX",
    intro: "Co-founder of Tesla, PayPal and ChatGPT.",
    timestamp: "March 4, 2021",
    following: 103,
    followers: 47900000,
    tweetCount: 136000,
    profilePhoto: "assets/elonmusk.jpg",
    bannerPhoto: "assets/elonmusk-cover.jpeg",
    tweets:[{
        tweet:'I admit to judging books by their cover',
        time: '5/10/2025 17:11:20'
      },
      {
        tweet:'On launch pad, engine swap underway',
        time: '9/10/2024 10:01:53' 
      },
      {
        tweet:'Next stop -- the moon',
        time: '8/30/2024 11:09:49' 
      },
      {
        tweet:`Paypal's days seem so long ago`,
        time: '6/19/2024 15:11:05' 
      }
      ]    
  },
  user2:{
  userName: "@billgates",
    firstName: "Bill",
    displayName: "Bill Gates",
    city: "Seattle, WA",
    intro: "Co-founder of Microsoft with Paul Allen",
    timestamp: "March 4, 2021",
    following: 210,
    followers: 21800000,    
    tweetCount: 115000,
    profilePhoto: "assets/billgates.jpg",
    bannerPhoto: "assets/billgates-cover.jpeg",
    tweets:[{
        tweet:'Heading out of the country for a few weeks',
        time: '2/10/2025 00:11:20'
      },
      {
        tweet:'Heading to the Gates Foundation',
        time: '9/10/2024 00:01:53' 
      },
            {
        tweet:'Should I start tweeting memes?',
        time: '8/04/2024 16:33:09'
      },
            {
        tweet:'Single and ready to mingle. #swipeRightForBill',
        time: '4/01/2024 16:49:30'
      }
      ]   
  }
};

//
var urlParams = new URLSearchParams(window.location.search);
var userParam = urlParams.get('user');
var selectedUser = accountUsers[userParam] || accountUsers.user1; 

function userElon() {
    var urlParams = new URLSearchParams();
    urlParams.set("user", "user1");
    window.location.href = "https://copymike05.github.io/twitter-project/?" + urlParams.toString();
};

function userBill() {
    var urlParams = new URLSearchParams();
    urlParams.set("user", "user2");
    window.location.href = "https://copymike05.github.io/twitter-project/?" + urlParams.toString();
};

var goToMusk = document.getElementsByClassName('muskButton')[0];
goToMusk.addEventListener('click', userElon);

var goToGates = document.getElementsByClassName('gatesButton')[0];
goToGates.addEventListener('click', userBill);

//Top Container  
var header = document.getElementsByClassName("header-container")[0];
var userRow = document.createElement("div");
userRow.classList.add("user-row");
var gatesUserName = document.createElement("h2");
gatesUserName.classList.add("display-name");

var checkMark = document.createElement("h2");
checkMark.classList.add("check-mark");
checkMark.textContent = "✔"
gatesUserName.innerHTML = `${selectedUser.displayName} `;
userRow.appendChild(gatesUserName);
userRow.appendChild(checkMark);
header.appendChild(userRow); 
  
var tweetCount = document.createElement("h5");
tweetCount.classList.add("tweetCount");
tweetCount.textContent = `${selectedUser.tweets.length} Tweets`;
header.appendChild(tweetCount);
  
//Main profile photo
var mainPhoto = document.getElementsByClassName("main-photo")[0];
mainPhoto.src = selectedUser.profilePhoto;

var photoWrapper = document.getElementsByClassName("photo-wrapper-text")[0];
var aboutContainer = document.getElementsByClassName("about-container")[0];
const gatesCopy = gatesUserName.cloneNode(true); 
const checkMarkCopy = checkMark.cloneNode(true); 
photoWrapper.appendChild(gatesCopy); 
photoWrapper.appendChild(checkMarkCopy); 

//Banner photo
var bannerPhoto = document.getElementsByClassName('collage')[0];
bannerPhoto.src = selectedUser.bannerPhoto;
bannerPhoto.alt = `Banner photo for ${selectedUser.displayName}`;

//User Handle
var userHandle = document.getElementsByClassName("user-handle")[0];
var userHandleName = document.createElement("p");
userHandleName.classList.add("handle");
userHandleName.textContent = selectedUser.userName;

var userHandleIntro = document.createElement("p");
userHandleIntro.textContent = selectedUser.intro;

var userLocation = document.createElement("p");
userLocation.textContent = `${selectedUser.city}`;

userHandle.prepend(userHandleIntro); 
userHandle.prepend(userLocation); 
userHandle.prepend(userHandleName); 

//Follower Figures
var followerDetails = document.getElementsByClassName("follower-details")[0];
var followingUser1 = document.createElement("p");
followingUser1.innerHTML = `<strong class="follower-figures">${formatNumber(selectedUser.following)}</strong> Following`;
followerDetails.appendChild(followingUser1);

var followersUser1 = document.createElement("p");
followersUser1.innerHTML = `<strong class="follower-figures">${formatNumber(selectedUser.followers)}</strong> Following`;
followerDetails.appendChild(followersUser1);

//Tweets
var tweetPhoto = document.getElementsByClassName("tweet-avatar");
tweetPhoto.src = selectedUser.profilePhoto;
for (let i = 0; i < tweetPhoto.length; i++) {
  tweetPhoto[i].src = selectedUser.profilePhoto;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//Top row of text in tweet box
var tweetSection = document.getElementsByClassName("tweet-details");
var tweetParagraphs = document.getElementsByClassName("tweet-text");
var tweetIcons = document.getElementsByClassName("tweet-icons");

for (let i = 0; i < tweetSection.length; i++) {
  var rowCounter = i;
  var tweetText = document.createElement("h4");
  tweetText.innerHTML = `${selectedUser.displayName}`;
  tweetSection[i].appendChild(tweetText);
  
  var tweetCheckmark = document.createElement("h3");
  tweetCheckmark.classList.add("checkmark-Tweet");
  tweetCheckmark.textContent = "✔"
  tweetSection[i].appendChild(tweetCheckmark);
  
  var tweetHandle = document.createElement("p");
  tweetHandle.classList.add("handle");
  tweetHandle.textContent = `${selectedUser.userName}`;
  tweetSection[i].appendChild(tweetHandle);
  
  if (selectedUser.tweets[i]) {
    const date = new Date(selectedUser.tweets[i].time);
    const monthAbbrev = months[date.getMonth()].slice(0, 3);
    const tweetDate = document.createElement("p");
    tweetDate.textContent = `${monthAbbrev} ${date.getDate()}`;
    tweetSection[i].appendChild(tweetDate);

    tweetParagraphs[i].innerHTML = '';
    var tweetText = document.createElement("p");
    tweetText.textContent = selectedUser.tweets[i].tweet;
    tweetParagraphs[i].appendChild(tweetText);
 
    tweetIcons[i].innerHTML = `
    <i class="fa fa-comment"></i>
    <i class="fa fa-retweet"></i>
    <i class="fa fa-check-circle"></i>
    <i class="fa fa-heart"></i>`;
  }
}

//Follower formatting
function formatNumber(num)  {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};

