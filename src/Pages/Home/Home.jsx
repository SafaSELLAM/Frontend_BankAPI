import { Features } from "../../Components/Features/Features.jsx"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { Hero } from "../../Components/Hero/Hero.jsx"
import { Navigation } from "../../Components/Navigation/Navigation.jsx"

export const Home = () => {
    return (
        <>
            <Navigation />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />

        </>
    )
}