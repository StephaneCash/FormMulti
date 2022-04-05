import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Form0 from "./pages/Form0";
import DetailAvantageCarte from "./pages/DetailAvantageCarte";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Form0 />} />
                <Route path='/avantages' element={<DetailAvantageCarte />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp