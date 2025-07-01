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
    profilePhoto: 'assets/elonmusk.jpg',
    tweets:[{
        tweet:'I admit to judging books by their cover',
        time: '5/10/2025 17:11:20'
      },
      {
        tweet:'Out on launch pad, engine swap underway.',
        time: '9/10/2024 10:01:53' 
      },
      {
        tweet:'In 2020, I did not read a book every hour.',
        time: '8/30/2024 11:09:49' 
      },
      {
        tweet:'In 2020, I read a book every hour.',
        time: '6/19/2024 15:11:05' 
      }
      ]    
  },
  user2:{
  userName: "@billgates",
    firstName: "Bill",
    displayName: "Bill Gates",
    city: "Seattle, WA",
    intro: "Interested in the latest technology since 1970. Co-founder of Microsoft with Paul Allen",
    timestamp: "March 4, 2021",
    following: 210,
    followers: 21800000,    
    tweetCount: 115000,
    profilePhoto: "assets/billgates.jpg",
    tweets:[{
        tweet:'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill?',
        time: '2/10/2025 00:11:20'
      },
      {
        tweet:'Heading to the Gates Foundation headquarters.',
        time: '9/10/2024 00:01:53' 
      },
            {
        tweet:'Should I start tweeting memes? Let me know in a comment.',
        time: '8/04/2024 16:33:09'
      },
            {
        tweet:'Single and ready to mingle. #swipeRightForBill',
        time: '4/01/2024 16:49:30'
      }
      ]   
  }
};

var selectedUser = 0;
var users = [accountUsers.user1, accountUsers.user2];

var urlParams = new URLSearchParams(window.location.search);
var userInt = 0;

function userElon() {
    var urlParams = new URLSearchParams();
    urlParams.set("user", "user1");
    window.location.href = "https://copymike05.github.io/twitter-project/" + urlParams.toString();
};

// function to change URL to user 2
function userBill() {
    var urlParams = new URLSearchParams();
    urlParams.set("user", "user2");
    window.location.href = "https://copymike05.github.io/twitter-project/" + urlParams.toString();
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
gatesUserName.innerHTML = `${users[1].displayName} `;
userRow.appendChild(gatesUserName);
userRow.appendChild(checkMark);
header.appendChild(userRow); 
  
var tweetCount = document.createElement("h5");
tweetCount.classList.add("tweetCount");
tweetCount.textContent = `${users[1].tweets.length} Tweets`;
header.appendChild(tweetCount);
  
//Main profile photo
var mainPhoto = document.getElementsByClassName("main-photo")[0];
mainPhoto.src = users[1].profilePhoto;

var photoWrapper = document.getElementsByClassName("photo-wrapper-text")[0];
var aboutContainer = document.getElementsByClassName("about-container")[0];
const gatesCopy = gatesUserName.cloneNode(true); 
const checkMarkCopy = checkMark.cloneNode(true); 
photoWrapper.appendChild(gatesCopy); 
photoWrapper.appendChild(checkMarkCopy); 

//User Handle
var userHandle = document.getElementsByClassName("user-handle")[0];
var userHandleName = document.createElement("p");
userHandleName.classList.add("handle");
userHandleName.textContent = users[1].userName;

var userHandleIntro = document.createElement("p");
userHandleIntro.textContent = users[1].intro;

var userLocation = document.createElement("p");
userLocation.textContent = `${users[1].city}`;

userHandle.prepend(userHandleIntro); 
userHandle.prepend(userLocation); 
userHandle.prepend(userHandleName); 

//Follower Figures
var followerDetails = document.getElementsByClassName("follower-details")[0];
var followingUser1 = document.createElement("p");
followingUser1.innerHTML = `<strong class="follower-figures">${formatNumber(accountUsers.user2.following)}</strong> Following`;
followerDetails.appendChild(followingUser1);

var followersUser1 = document.createElement("p");
followersUser1.innerHTML = `<strong class="follower-figures">${formatNumber(users[1].followers)}</strong> Following`;
followerDetails.appendChild(followersUser1);

//Tweets

//Photo is being applied in every Twitter container
var tweetPhoto = document.getElementsByClassName("tweet-avatar");
tweetPhoto.src = accountUsers.user2.profilePhoto;
for (let i = 0; i < tweetPhoto.length; i++) {
  tweetPhoto[i].src = users[1].profilePhoto;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//Top row of text in tweet box
var tweetSection = document.getElementsByClassName("tweet-details");
for (let i = 0; i < tweetSection.length; i++) {
  var rowCounter = i;
  var tweetText = document.createElement("h4");
  tweetText.innerHTML = `${users[1].displayName}`;
  tweetSection[i].appendChild(tweetText);
  
  var tweetCheckmark = document.createElement("h3");
  tweetCheckmark.classList.add("checkmark-Tweet");
  tweetCheckmark.textContent = "✔"
  tweetSection[i].appendChild(tweetCheckmark);
  
  var tweetHandle = document.createElement("p");
  tweetHandle.classList.add("handle");
  tweetHandle.textContent = `${accountUsers.user2.userName}`;
  tweetSection[i].appendChild(tweetHandle);
  
   for (let i = 0; i < users[1].tweets.length; i++) {
     if(i === rowCounter){
       var tweetDate = document.createElement("p");
       const date = new Date(`${users[1].tweets[i].time}`); 
       const monthAbbrev = months[date.getMonth()].slice(0, 3);
       tweetDate.textContent = `${monthAbbrev} ${date.getDate()}`;     
       tweetSection[i].appendChild(tweetDate);
       
       //Actual Tweet
       console.log('this was hit');
       break;
     }  
  }

  var tweetParagraphs = document.getElementsByClassName("tweet-text");

  for (let i = 0; i < tweetParagraphs.length; i++) {
  tweetParagraphs[i].innerHTML = '';
  var tweetText = document.createElement("p");
  tweetText.textContent = users[1].tweets[i].tweet;
  tweetParagraphs[i].appendChild(tweetText);
  }

}


//Functions

//Follower formatting
function formatNumber(num)  {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  //By default, returns number as is if < 1000
  return num.toString();
};

// console.log(window.location.href);
//console.log(accountUsers.user1.displayName);
console.log(users[0].displayName)

//Console.log playing
//console.log(accountUsers.user1.tweets[0].tweet); 


//https://kaidoso.github.io/dynamic-twitter/assets/billgates-cover.jpeg
//https://kaidoso.github.io/dynamic-twitter/assets/elonmusk.jpg
//https://kaidoso.github.io/dynamic-twitter/assets/billgates
//https://kaidoso.github.io/dynamic-twitter/assets/elonmusk.jpg
