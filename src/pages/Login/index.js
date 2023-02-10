import CreateAccountCard from "./CreateAccountCard";
import LoginCard from "./LoginCard";
// Import Bootstrap and its default variables
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'; // Added this :boom:
import '../../styles/bootstrap.min.css';

function Login() {
    return (
        <div>
            <LoginCard />
            <CreateAccountCard/>
        </div>
    );
}

export default Login;
