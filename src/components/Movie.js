import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Movie(props) {
    return (
        // <li key={movie.id}>{movie.title}</li>
        <div key={props.id}>
            <img src={props.coverImg}/>
            <h3>
                <Link to="/movie">{props.title}</Link>
            </h3>
            <h2>
                <Link to={`/movie/${props.id}`}>{props.title}</Link>
            </h2>
            <p>{props.summary}</p>
            <ul>
                {props.genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired
}

export default Movie;