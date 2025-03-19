import { useDispatch, useSelector } from "react-redux"
import { Account } from "../../Components/Account.jsx"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { Header } from "../../Components/Header.jsx"
import { Navigation } from "../../Components/Navigation/Navigation.jsx"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { logout } from "../../Components/Store/authSlice.js"

export const Profile = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(logout())
            navigate("/sign-in");

        }
    }, [isAuthenticated, dispatch, navigate])

    if (!isAuthenticated) return null

    return (
        <>
            <Navigation />
            <main className="main bg-dark">
                <Header />
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            </main>
            <Footer />
        </>
    )
}