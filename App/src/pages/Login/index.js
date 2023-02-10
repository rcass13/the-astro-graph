import CreateAccountCard from "./CreateAccountCard";
import LoginCard from "./LoginCard";
// Import Bootstrap and its default variables
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'; // Added this :boom:
import '../../styles/bootstrap.min.css';
import LoginHeader from "./LoginHeader";

function Login() {
    return (
        <div>
            <LoginHeader/>
            <LoginCard />
            <CreateAccountCard/>
        </div>
    );
}

export default Login;
