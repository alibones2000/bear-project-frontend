import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import ArtistContainer from "./ArtistContainer";
import Footer from "./Footer";





function App() {



    return (
        <div className="App">
            <Header />

            {/* PLACE ROUTES */}
            <Home />
            <ArtistContainer />
            {/* PLACE ROUTES */}

            <Footer />
        </div>

    )
}