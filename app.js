const request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function(){
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400){
        const container = document.getElementById('container')

        data.forEach(movie =>{
            console.log(movie.description)
            const movie_div = document.createElement('div')
            movie_div.innerHTML = '<div class="title">' + movie.title + '</div>' + '<div class="description">' + movie.description + '</div>' 
            container.append(movie_div)
        });
    }

}
request.send()