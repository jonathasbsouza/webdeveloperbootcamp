let movieDB = [
    {
        name: 'The Expendables',
        rating: 2.5,
        haveWatched: true
    },
    {
        name: 'Halloween',
        rating: 3,
        haveWatched: false
    },
    {
        name: 'The Godfather',
        rating: 5,
        haveWatched: true
    },
    {
        name: 'The Incredibles',
        rating: 3,
        haveWatched: false
    }
];


function movieList(arr) {
    arr.forEach(el => {
        const watched = el.haveWatched ? 'You have watched' : 'You haven\'t watched';
        console.log(`${watched} ${el.name} - ${el.rating} stars.`)
    });
}

