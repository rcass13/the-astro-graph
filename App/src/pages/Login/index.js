import CreateAccountCard from "./CreateAccountCard";
import LoginCard from "./LoginCard";
// Import Bootstrap and its default variables
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'; // Added this :boom:
import '../../styles/bootstrap.min.css';
import LoginHeader from "./LoginHeader";

function Login({setAuth}) {
    return (
        <div className="bg-dark">
            <LoginHeader />
            <LoginCard setAuth={setAuth}/>
            <CreateAccountCard setAuth={setAuth}/>
        </div>
    );
}

export default Login;
