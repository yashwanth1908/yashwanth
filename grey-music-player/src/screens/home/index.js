import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Favourites from "../favourites";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import './home.css'
import Sidebar from "../../components/sidebar";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </div>  
    </Router>
  )
}
