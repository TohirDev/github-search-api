let g = (id) => document.getElementById(id)
let search = g("search")
let btn = g("btn")
let result = g('result')
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
                
            })
        .catch(err => {
            throw(err)
        })
    }    
    search.value = ''
    search.focus()
}