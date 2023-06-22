const movies = [
  {
    "Title": "They Shall Not Grow Old",
    "Rated": "8.3",
    "Released": "01 Feb 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
  },
  {
    "Title": "Midnight Family",
    "Year": 2019,
    "Rated": "7.8",
    "Released": "06 Dec 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
 
  },
  {
    "Title": "Pain & Gain",
    "Year": 2013,
    "Rated": "6.4",
    "Released": "26 Apr 2013",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg",
    
  },
  {
    "Title": "The Irishman",
    "Year": 2019,
    "Rated": "8.2",
    "Released": "27 Nov 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
   
  },
  {
    "Title": "Once Upon a Time",
    "Year": 2019,
    "Rated": "7.8",
    "Released": "26 Jul 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
  },
  {
    "Title": "Marriage Story",
    "Year": 2019,
    "Rated": "R",
    "Released": "06 Dec 2019",
    "Runtime": "137 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Noah Baumbach",
    "Writer": "Noah Baumbach",
    "Actors": "Adam Driver, Scarlett Johansson, Julia Greer, Azhy Robertson",
    "Plot": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Won 1 Golden Globe. Another 86 wins & 212 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "93/100"
      }
    ],
    "Metascore": 93,
    "imdbRating": 8.1,
    "imdbVotes": "108,524",
    "imdbID": "tt7653254",
    "Type": "movie",
    "DVD": "06 Dec 2019",
    "BoxOffice": "N/A",
    "Production": "Netflix",
    "Response": "True"
  },
  {
    "Title": "Little Women",
    "Year": 1994,
    "Rated": "PG",
    "Released": "25 Dec 1994",
    "Runtime": "115 min",
    "Genre": "Drama, Family, Romance",
    "Director": "Gillian Armstrong",
    "Writer": "Louisa May Alcott (novel), Robin Swicord (screenplay)",
    "Actors": "Winona Ryder, Gabriel Byrne, Trini Alvarado, Samantha Mathis",
    "Plot": "The March sisters live and grow in post-Civil War America.",
    "Language": "English, German, French",
    "Country": "USA, Canada",
    "Awards": "Nominated for 3 Oscars. Another 5 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Metacritic",
        "Value": "87/100"
      }
    ],
    "Metascore": 87,
    "imdbRating": 7.3,
    "imdbVotes": "45,297",
    "imdbID": "tt0110367",
    "Type": "movie",
    "DVD": "26 Feb 2008",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Parasite",
    "Year": 2019,
    "Rated": "R",
    "Released": "08 Nov 2019",
    "Runtime": "132 min",
    "Genre": "Comedy, Drama, Thriller",
    "Director": "Bong Joon Ho",
    "Writer": "Bong Joon Ho (story), Bong Joon Ho (screenplay), Bong Joon Ho (story by), Jin Won Han (screenplay)",
    "Actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo, Woo-sik Choi",
    "Plot": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    "Language": "Korean, English",
    "Country": "South Korea",
    "Awards": "Won 1 Golden Globe. Another 119 wins & 179 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "99%"
      },
      {
        "Source": "Metacritic",
        "Value": "96/100"
      }
    ],
    "Metascore": 96,
    "imdbRating": 8.6,
    "imdbVotes": "128,604",
    "imdbID": "tt6751668",
    "Type": "movie",
    "DVD": "14 Jan 2020",
    "BoxOffice": "N/A",
    "Production": "NEON",
    "Response": "True"
  },
  {
    "Title": "Knives Out",
    "Year": 2019,
    "Rated": "PG-13",
    "Released": "27 Nov 2019",
    "Runtime": "130 min",
    "Genre": "Comedy, Crime, Drama, Mystery, Thriller",
    "Director": "Rian Johnson",
    "Writer": "Rian Johnson",
    "Actors": "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis",
    "Plot": "A detective investigates the death of a patriarch of an eccentric, combative family.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 3 Golden Globes. Another 22 wins & 37 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": 82,
    "imdbRating": 8.1,
    "imdbVotes": "66,522",
    "imdbID": "tt8946378",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Lionsgate",
    "Response": "True"
  },
  {
    "Title": "Dolemite Is My Name",
    "Year": 2019,
    "Rated": "R",
    "Released": "25 Oct 2019",
    "Runtime": "118 min",
    "Genre": "Biography, Comedy, Drama",
    "Director": "Craig Brewer",
    "Writer": "Scott Alexander, Larry Karaszewski",
    "Actors": "Eddie Murphy, Keegan-Michael Key, Mike Epps, Craig Robinson",
    "Plot": "Eddie Murphy portrays real-life legend Rudy Ray Moore, a comedy and rap pioneer who proved naysayers wrong when his hilarious, obscene, kung-fu fighting alter ego, Dolemite, became a 1970s Blaxploitation phenomenon.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Golden Globes. Another 17 wins & 54 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzFiYWQxYzgtOThmYi00ZmIwLWFlZWMtMzk2NTI2YTYzMjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": 76,
    "imdbRating": 7.3,
    "imdbVotes": "31,613",
    "imdbID": "tt8526872",
    "Type": "movie",
    "DVD": "25 Oct 2019",
    "BoxOffice": "N/A",
    "Production": "Netflix",
    "Response": "True"
  },

  {
    "Title": "They Shall Not Grow Old",
    "Rated": "8.3",
    "Released": "01 Feb 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
  },
  {
    "Title": "Midnight Family",
    "Year": 2019,
    "Rated": "7.8",
    "Released": "06 Dec 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
 
  },
  {
    "Title": "Pain & Gain",
    "Year": 2013,
    "Rated": "6.4",
    "Released": "26 Apr 2013",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg",
    
  },
  {
    "Title": "The Irishman",
    "Year": 2019,
    "Rated": "8.2",
    "Released": "27 Nov 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
   
  },
  {
    "Title": "Once Upon a Time",
    "Year": 2019,
    "Rated": "7.8",
    "Released": "26 Jul 2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
  },
  {
    "Title": "Marriage Story",
    "Year": 2019,
    "Rated": "R",
    "Released": "06 Dec 2019",
    "Runtime": "137 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Noah Baumbach",
    "Writer": "Noah Baumbach",
    "Actors": "Adam Driver, Scarlett Johansson, Julia Greer, Azhy Robertson",
    "Plot": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Won 1 Golden Globe. Another 86 wins & 212 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "93/100"
      }
    ],
    "Metascore": 93,
    "imdbRating": 8.1,
    "imdbVotes": "108,524",
    "imdbID": "tt7653254",
    "Type": "movie",
    "DVD": "06 Dec 2019",
    "BoxOffice": "N/A",
    "Production": "Netflix",
    "Response": "True"
  },
  {
    "Title": "Little Women",
    "Year": 1994,
    "Rated": "PG",
    "Released": "25 Dec 1994",
    "Runtime": "115 min",
    "Genre": "Drama, Family, Romance",
    "Director": "Gillian Armstrong",
    "Writer": "Louisa May Alcott (novel), Robin Swicord (screenplay)",
    "Actors": "Winona Ryder, Gabriel Byrne, Trini Alvarado, Samantha Mathis",
    "Plot": "The March sisters live and grow in post-Civil War America.",
    "Language": "English, German, French",
    "Country": "USA, Canada",
    "Awards": "Nominated for 3 Oscars. Another 5 wins & 15 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Metacritic",
        "Value": "87/100"
      }
    ],
    "Metascore": 87,
    "imdbRating": 7.3,
    "imdbVotes": "45,297",
    "imdbID": "tt0110367",
    "Type": "movie",
    "DVD": "26 Feb 2008",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Parasite",
    "Year": 2019,
    "Rated": "R",
    "Released": "08 Nov 2019",
    "Runtime": "132 min",
    "Genre": "Comedy, Drama, Thriller",
    "Director": "Bong Joon Ho",
    "Writer": "Bong Joon Ho (story), Bong Joon Ho (screenplay), Bong Joon Ho (story by), Jin Won Han (screenplay)",
    "Actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo, Woo-sik Choi",
    "Plot": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    "Language": "Korean, English",
    "Country": "South Korea",
    "Awards": "Won 1 Golden Globe. Another 119 wins & 179 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "99%"
      },
      {
        "Source": "Metacritic",
        "Value": "96/100"
      }
    ],
    "Metascore": 96,
    "imdbRating": 8.6,
    "imdbVotes": "128,604",
    "imdbID": "tt6751668",
    "Type": "movie",
    "DVD": "14 Jan 2020",
    "BoxOffice": "N/A",
    "Production": "NEON",
    "Response": "True"
  },
  {
    "Title": "Knives Out",
    "Year": 2019,
    "Rated": "PG-13",
    "Released": "27 Nov 2019",
    "Runtime": "130 min",
    "Genre": "Comedy, Crime, Drama, Mystery, Thriller",
    "Director": "Rian Johnson",
    "Writer": "Rian Johnson",
    "Actors": "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis",
    "Plot": "A detective investigates the death of a patriarch of an eccentric, combative family.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "Nominated for 3 Golden Globes. Another 22 wins & 37 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "82/100"
      }
    ],
    "Metascore": 82,
    "imdbRating": 8.1,
    "imdbVotes": "66,522",
    "imdbID": "tt8946378",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Lionsgate",
    "Response": "True"
  },
  {
    "Title": "Dolemite Is My Name",
    "Year": 2019,
    "Rated": "R",
    "Released": "25 Oct 2019",
    "Runtime": "118 min",
    "Genre": "Biography, Comedy, Drama",
    "Director": "Craig Brewer",
    "Writer": "Scott Alexander, Larry Karaszewski",
    "Actors": "Eddie Murphy, Keegan-Michael Key, Mike Epps, Craig Robinson",
    "Plot": "Eddie Murphy portrays real-life legend Rudy Ray Moore, a comedy and rap pioneer who proved naysayers wrong when his hilarious, obscene, kung-fu fighting alter ego, Dolemite, became a 1970s Blaxploitation phenomenon.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Golden Globes. Another 17 wins & 54 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzFiYWQxYzgtOThmYi00ZmIwLWFlZWMtMzk2NTI2YTYzMjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": 76,
    "imdbRating": 7.3,
    "imdbVotes": "31,613",
    "imdbID": "tt8526872",
    "Type": "movie",
    "DVD": "25 Oct 2019",
    "BoxOffice": "N/A",
    "Production": "Netflix",
    "Response": "True"
  }
]



module.exports = movies