import { BrowserRouter, Routes, Route } from "react-router-dom";
import SteamAPI from './network/Steam.api';
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import GamePage from './pages/gamePage/GamePage';

import './reset.css';


// SteamAPI.getTopGames().then(data => console.log(data))

export default function App() {



    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path ='/:game/:id' element={<GamePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}