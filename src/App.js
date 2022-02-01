import React from 'react';
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Search from './components/search/Search';

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            {/* <Home /> */}
            {/* <Watch /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/movies" element={<Home type="movie" />} />
                    <Route path="/series" element={<Home type="series" />} />
                    <Route path="/Watch" element={<Watch />} />
                    <Route path="/Search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;