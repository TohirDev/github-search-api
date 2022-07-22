let g = (id) => document.getElementById(id);
let el = (id) => document.createElement(id);
let search = g("search");
let btn = g("btn");
let container = document.getElementById("container");
btn.addEventListener("click", () => result());

console.log(g("btn"));

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result();
  }
});

function result() {
  if (search.value !== "") {
    fetch(`https://api.github.com/users/${search.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let a = `
               <div class="result">
               <div class="top" id="">
               <img src="${data.avatar_url}" class="img" alt="github user img" />
               <div class="info">
                 <h2 class="name">${data.name}</h2>
                 <span class="nick">${data.login}</span>
                 <p class="joined">${data.created_at}</p>
               </div>
             </div>
             <div class="bio" id="bio">
               <p id="bio-info">
                 ${data.bio}
               </p>
             </div>
             <div class="follows-repos" id="follows">
               <div class="repo" id="repos">
                 <p class="same" id="repo">Repos</p>
                 <h3 class="nums"id="repo-num">${data.public_repos}</h3>
               </div>
               <div class="followers" id="followers">
                 <p class="same" id="follower">followers</p>
                 <h3 class="nums" id="follower-num">${data.followers}</h3>
               </div>
               <div class="followings" id="followings">
                 <p class="same" id="following">following</p>
                 <h3 class="nums" id="following-nums">${data.following}</h3>
               </div>
             </div>
             <div class="links">
               <div class="first-side" id="first-side">
                 <div class="div-first" id="div-first">
                   <i class="fa-solid fa-location-dot same" id="location"></i>
                   <p class="similar" id="location-name">${data.location}</p>
                 </div>
                 <div class="div-first" id="div-first">
                   <i class="fa-solid fa-link same" id="link"></i>
                   <p class="similar" id="link-name">${data.blog}</p>
                 </div>
               </div>
               <div class="second-side" id="second-side">
                 <div class="div-second" id="div-second">
                   <i class="fa-solid fa-building same" id="building"></i>
                   <p class="similar" id="building-name">${data.company}</p>
                 </div>
                 <div class="div-second" id="div-second">
                     <i class="fa-brands fa-twitter same" id="twitter"></i> 
                     <p class="similar" id="twitter-name">${data.twitter_username}</p>
                 </div>
               </div>
             </div>
               </div>
                `;
        let another = document.getElementById("another");
        another.innerHTML = a;
        container.appendChild(res);
      })
      .catch((err) => {
        throw err;
      });
  }
  search.value = "";
  search.focus();
}
