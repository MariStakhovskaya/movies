import {Route, Routes } from "react-router-dom"
import {DetailsMovie} from "../../components/movies/movie/DetailsMovie";
import Movies from "../../components/movies/Movies";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Movies />}/>
            <Route path="details">
                <Route path=":id" element={<DetailsMovie />} />
            </Route>

    </Routes>)
}