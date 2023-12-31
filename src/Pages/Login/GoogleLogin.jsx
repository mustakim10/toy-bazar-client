import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleLogin}= useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/' ;

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate(from,{replace: true});
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default GoogleLogin;