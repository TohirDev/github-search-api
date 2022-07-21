let g = (id) => document.getElementById(id)
let search = g("search")
let btn = g("btn")
let container = g('result')
btn.addEventListener('click', () => result())


console.log(g('btn'))

window.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        result()
    }
})

function result() {
    if(search.value !== '') {
        fetch(`https://api.github.com/users/${search.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let top = g('top')
                top.className = 'top'
                let img = g('img')
                img.src = data.avatar_url
                let info = g('info')
                info.className = 'info'
                info.appendChild(name)
                info.appendChild(nick)
                info.appendChild(joined)
                top.appendChild(img)
                top.appendChild(info)
                let name = g('name')
                let nick = g('nick')
                let joined = g('joined')
                let bio = g('bio')
                let bioInfo = g('bio-info')
                let follows = g('follows')
                let repos = g('repos')
                let repo = g('repo')
                let repNum = g('repo-num')
                let followers = g('followers')
                let follower = g('follower')
                let followerNum = g('follower-num')
                let followings = g('followings')
                let following = g('following')
                let followingNums = g('follower-num')
                let links = g('links')
                let firstSide = g('first-side')
                let secondSide = g('second-side')
                let location = g('location')
                let link = g('link')
                let twitter = g('twitter')
                let building = g('building')
                let locationName = g('location-name')
                let linkName = g('link-name')
                let twitterName = g('twitter-name')
                let buildingName = g('building-name')
                let divFirst = document.querySelectorAll('#div-first')
                let divSecond = document.querySelectorAll('#div-second')

            })
        .catch(err => {
            throw(err)
        })
    }    
    search.value = ''
    search.focus()
}