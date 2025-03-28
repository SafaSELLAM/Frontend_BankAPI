import { useState, useEffect } from "react"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { Navigation } from "../../Components/Navigation/Navigation.jsx"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess, setUser } from "../../Components/Store/authSlice.js"

export const Login = () => {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/profile")
        }
    }, [isAuthenticated, navigate])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(" http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: username, password }),
            })
            const data = await response.json();
            if (response.ok) {
                const token = data.body.token;
                dispatch(loginSuccess({ token }))
                navigate("/profile")
            } else {
                setErrorMessage("Login Error : " + data.message)
            }
        } catch (error) {
            console.error("Error :", error)
            setErrorMessage("Server Error.")
        }
    }


    return (
        <>
            <Navigation />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label
                            ><input type="text" id="username" value={username} onChange={(element) => setUsername(element.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label
                            ><input type="password" id="password" value={password} onChange={(element) => setPassword(element.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label
                            >
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="sign-in-button">Sign In</button>

                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}