import HomePage from "./HomePage";
import HomepageHeader from "./HomepageHeader";

// Import Bootstrap and its default variables
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'; // Added this :boom:
import '../../styles/bootstrap.min.css';


function Homepage({userData}) {
    return (
        <div className="bg-none">
            <HomepageHeader/>
            <HomePage userData={userData}/>
        </div>
    );
}

export default Homepage;
