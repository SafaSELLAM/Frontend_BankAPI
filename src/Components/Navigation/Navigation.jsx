import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/authSlice.js";

export const Navigation = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/");
    }
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {isAuthenticated ? (
                <div>
                    <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i> {user?.firstName}
                    </Link>
                    <button className="main-nav-item logout-button" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i> Sign Out
                    </button>

                </div>

            ) : (
                <div>
                    <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i> Sign In
                    </Link>
                </div>
            )}

        </nav>
    )
}