import { BrowserRouter, Routes, Route } from "react-router-dom";
import SteamAPI from './network/Steam.api';
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import GamePage from './pages/gamePage/GamePage';

import { useEffect, useState } from "react"


import './reset.css';


// SteamAPI.getTopGames().then(data => console.log(data))

export default function App() {

    const [topGames, setTopGames] = useState([]);

    useEffect(() => {
        getTopGames()
    }, []);

    const getTopGames = async () => {
        setTopGames(await SteamAPI.getTopGames())
    };

    return (
        <>
            <BrowserRouter>
                <Header topGames={topGames}/>
                <Routes>
                    <Route path="/" element={<HomePage topGames={topGames}/>} />
                    <Route path='/:game/:id' element={<GamePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}