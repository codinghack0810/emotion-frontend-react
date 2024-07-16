import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLogined = localStorage.getItem('isLogined');
    useEffect(() => {
        if(!isLogined) {
            navigate("login", { replace: true });
        }
    }, [isLogined, navigate, location]);
    return children;
}

export default AuthGuard;