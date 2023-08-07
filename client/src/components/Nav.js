import "../Nav.css"
import {Link} from "react-router-dom"

const LandingNav =()=>{



    return(
        <>
             <div className="homepage">
        <div className="hero">
            <h1 className="h1nav">Welcome to Crowd-Tix</h1>
            <p className="pnav">Discover the best Events in the country, organized by your best creators </p>
            <div className="buttn-container">
            <Link to="/signup" className="signup">
                <span className="gs-show">
                    <span className="gs-show2">Don't miss out, sign up now</span>
                </span>   
            </Link>
            <span className="or-text">OR</span>
            <Link to="/login" className="login-nav">
                <span className="gs-show">
                    <span className="gs-show2">Login if you already have an account</span>
                </span>   
            </Link>
            {/* <p>We are dedicated to helping you discover the best dining experiences in your area. Our platform provides a wealth of information about restaurants in different locations, making it easy for you to find the perfect spot for your next meal.</p> */}
        </div>
        </div>
        </div>
        <footer className="footernav">
        <div className="container">
            <p>&copy; 2023 Crowd-Tix</p>
        </div>
        </footer>
        </>
    )
}

export default LandingNav