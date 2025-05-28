import React, { useReducer, useEffect } from 'react';

const initialValue = {
  movies: [],
  loading: false,
  error: ''
};
const movieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { ...state, movies: [], loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, movies: action.payload, loading: false, error: "" };
    case "FETCH_ERROR":
      return { ...state, movies: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(movieReducer, initialValue);

  const fetchData = async () => {
    try {
      dispatch({ type: "FETCH_LOADING" });
      const res = await fetch('https://movielistapp-4.onrender.com/movie');
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data.movies });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">🎬 Movie App</h1>
      </nav>

      <div className="container mx-auto p-6">
        {state.loading && <p className="text-center text-gray-700">Loading movies...</p>}
        {state.error && <p className="text-center text-red-600 font-semibold">Error: {state.error}</p>}
        {!state.loading && state.movies.length === 0 && !state.error && (
          <p className="text-center text-gray-500">No movies found.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {state.movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-indigo-700">{movie.title}</h2>
              <p><strong>Director:</strong> <span className="text-gray-700">{movie.director}</span></p>
              <p>
                <strong>Cast:</strong> <span className="text-gray-700">{Array.isArray(movie.cast) ? movie.cast.join(', ') : movie.cast}</span>
              </p>
              <p>
                <strong>Released:</strong> <span className="text-gray-700">{new Date(movie.releaseDate).toLocaleDateString()}</span>
              </p>
              <p>
                <strong>Rating:</strong> <span className="text-yellow-500 font-bold">{movie.rating}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
