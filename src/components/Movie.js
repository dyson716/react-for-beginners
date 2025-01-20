import PropTypes from "prop-types";
import styles from "./Movie.module.css";

import { Link } from "react-router-dom";

function Movie(props) {
    return (
        // <li key={movie.id}>{movie.title}</li>
        <div className={styles.movie}>
            <img src={props.coverImg} alt={props.title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${props.id}`}>{props.title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{props.year}</h3>
                <p>{props.summary.length > 235 ? `${props.summary.slice(0, 235)}...` : props.summary}</p>
                <ul className={styles.movie__genres}>
                    {props.genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired
}

export default Movie;