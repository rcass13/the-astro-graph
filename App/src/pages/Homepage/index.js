import HomePage from "./HomePage";
import HomepageHeader from "./HomepageHeader";

// Import Bootstrap and its default variables
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'; // Added this :boom:
import '../../styles/bootstrap.min.css';


function Homepage() {
    return (
        <div className="bg-dark">
            <HomepageHeader/>
            <HomePage/>
        </div>
    );
}

export default Homepage;
