import { Account } from "../../Components/Account.jsx"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { Header } from "../../Components/Header.jsx"
import { Navigation } from "../../Components/Navigation/Navigation.jsx"

export const Profile = () => {
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