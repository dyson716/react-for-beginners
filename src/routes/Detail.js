import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
    // const { id } = useParams();
    const x = useParams();

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
        ).json();

        console.log(x.id);
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail</h1>;
}

export default Detail;