class Person {
    constructor(val, movies) {
        this.val = val;
        this.friends = new Set();
        this.movies = movies;
    }

    addFriend(person){
        this.friends.add(person)
    }
}

const a = new Person("a", ["movie10", "movie2", "movie3", "movie1", "movie4"]);
const b = new Person("b", ["movie10", "movie2", "movie3", "movie1", "movie4"]);
const c = new Person("c", ["movie10", "movie2", "movie3", "movie4", "movie12"]);
const d = new Person("d", ["movie1", "movie6", "movie3", "movie4"]);
const e = new Person("e", ["movie1", "movie2", "movie3", "movie4"]);
const f = new Person("f", ["movie1", "movie2", "movie3", "movie4"]);

a.addFriend(c)
c.addFriend(a)

b.addFriend(a)
a.addFriend(b)

d.addFriend(f)
f.addFriend(d)

e.addFriend(c)
c.addFriend(e)

f.addFriend(b)
b.addFriend(f)

function findMostPopMovie (start){
    const visited = new Set([start]);
    const queue = [start];
    const movieMap = {};
    let mostPop = 0;
    let mostPopMovie = [];

    while(queue.length > 0){

        const person = queue.shift();
        const movies = person.movies
        for(const movie of movies){
            if(movieMap[movie] === undefined){
                movieMap[movie] = 1
            }else{
                movieMap[movie] += 1
            }
        }

        const friends = person.friends

        for(const friend of friends) {
            if(!visited.has(friend)){
                visited.add(friend);
                queue.push(friend);

            }
        }
    }

    const moviesOfMovieMap = Object.keys(movieMap)
    for(let i = 0; i < moviesOfMovieMap.length; i++ ){
        if(movieMap[moviesOfMovieMap[i]] > mostPop){
            mostPop = movieMap[moviesOfMovieMap[i]]
            mostPopMovie = [moviesOfMovieMap[i]]
        }
        else if(movieMap[moviesOfMovieMap[i]] === mostPop){
            mostPopMovie.push(moviesOfMovieMap[i])
       }
    }
    console.log(movieMap)
    console.log(mostPopMovie)
    return mostPopMovie
}

findMostPopMovie (a)
