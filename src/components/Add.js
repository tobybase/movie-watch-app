import React, { useState } from 'react';
import { ResultCard } from './ResultCard';

export const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    const movie_url = 'https://api.themoviedb.org/3/search/movie';
    const accessKey = process.env.REACT_APP_TMDB_API_KEY;

    fetch(
      `${movie_url}?api_key=${accessKey}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={onChange}
            />
          </div>

          {results.map((movie) => (
            <ul className='results'>
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            </ul>
          ))}

          {/* {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
};
