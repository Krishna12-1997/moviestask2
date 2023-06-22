import  React, { useEffect, useState } from 'react'
import "./App.css";
import styled from "styled-components";

// const movies = [
//   {
//     Title: "They Shall Not Grow Old",
//     Rated: "8.3",
//     Released: "01 Feb 2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
//   },
//   {
//     Title: "Midnight Family",
//     Year: 2019,
//     Rated: "7.8",
//     Released: "06 Dec 2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
//   },
// ];

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
    .then((res) => res.json())
    .then((data) => { setMovies(data)})
    .catch((err) => console.error("Error : ", err))
  })

  return (
    <Wraping>
      <h2 style={{ fontSize: "4em" }}>Movies Card</h2>
      <p>Check Current movies</p>
      <Card>
        {movies &&
          movies.map((movie) => {
            return (
              <Movie key={movie._id}>
                <img src={movie.Poster} alt="logo" />
                <h2>{movie.Title}</h2>
                <p>Rating: {movie.Rated}</p>
                <h5> {movie.Released}</h5>
              </Movie>
            );
          })}
      </Card>
    </Wraping>
  );
}

const Wraping = styled.div`
  width: 100%;
  height: 50vh;
  background: #fff;
  text-align: center;
  font-size: 0.8rem;
  color: #333;

  p {
    display: inline-block;
    margin: -1em 0.5em -0.5em 0;
    color: red;
  }
`;

const Card = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
  padding: 6% 4%;
  margin: auto auto;
  @media screen and (max-width: 400px) {
    padding: 5% 5%;
  }
`;

const Movie = styled.div`
  border: solid #ccc 1px;
  padding: 4% 6%;
  box-shadow: rgba(0, 0, 0, 0.1) -1px 9px 20px 0 inset,
    rgba(0, 0, 0, 0.1) -1px -1px 2 px 0 inset,
    rgba(0, 0, 0, 0.1) 1px -1px 2 px 0 inset,
    rgba(0, 0, 0, 0.1) 1px 9px 2 px 0 inset;
  margin-top: 8%;
  max-width: fit-content;
  min-width: fit-content;

  img{
    height: 200px
  }
  @media screen and (max-width: 400px) {
    padding: 5% 5%;
  }
`;


export default App;
