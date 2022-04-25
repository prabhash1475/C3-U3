// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// var url =`http://www.omdbapi.com/?apikey=b7d7c34c&t`

var values = JSON.parse(localStorage.getItem('amount')) || []
var rs = document.getElementById('wallet')
rs.innerText = values

var arr = JSON.parse(localStorage.getItem('data')) || [];


function submit() {
    let movies = document.getElementById('search').values

    let url = `http://www.omdbapi.com/?s=${movie}&page=1&apikey=b7d7c34c`


    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            console.log(res)

        })
        .catch(function (err) {
            console.log(err)
        })

    function getdata(data) {
        if (data === undefined) {
            return false
        }
        data.map(function (elem) {
            var div = document.createElement('div')

            var title = document.createElement('h3')
            title.innerText = elem.title

            var image = document.createElement('img')
            image.src = elem.Poster

            var btn = document.createElement('button')
            btn.innerText = 'Book Now'

            btn.addEventListener('click', function () {
                arr.push(elem)
                localStorage.setItem('data', JSON.strigify(arr))
                windo.location.href = 'checkout.html'

            })

            div.append(image, title, btn)
            document.getElementById('movies').append(div)
        })
    }
}



