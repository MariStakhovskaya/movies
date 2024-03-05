import loader from "../../assets/image/loader.gif"
import "../../App.css";



function Preloader() {

    return (
        <div className="preloader">
            <img className="loader" src={loader} alt="preloader"/>
        </div>
    );
}

export default Preloader;