import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import myBackground from "../assets/navbar-hero-bg.webp";

function Home() {
    
    return (
        <div 
        style={{backgroundImage: `url(${myBackground})`}}
        className="min-h-screen bg-cover bg-center bg-no-repeat">
            <Navbar/>
            <Hero/>
        </div>
    );
}

export default Home;