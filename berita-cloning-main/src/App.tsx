import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/headers/Navbar/Navbar'
import Banner from './components/headers/Banner/Banner'
import Bar from './components/headers/bar/Bar'
import Footer from './components/footer/Footer/Footer'


import Home from './pages/Home/Home'
import Baitul from './pages/baitul/baitulPage';
import Mstyle from './pages/M_style/Mstyle';
import Mullaf from './pages/Muallaf/Mullaf';
import Love from './pages/Love/Love';
import Halal from './pages/Halal/Halal';
import ClipVideo from './pages/Clip_Video/Clip_Video';
import Portfolio from './pages/Portfolio/Portfolio';

import Art from './pages/berita_muslim/Art'
import Bussiness from './pages/berita_muslim/Business';
import CoverStory from './pages/berita_muslim/CoverStory';
import Doa from './pages/berita_muslim/Doa';
import Finace from './pages/berita_muslim/Finace';
import Food from './pages/berita_muslim/Food';
import History from './pages/berita_muslim/History';
import Life from './pages/berita_muslim/Life';
import Magazine from './pages/berita_muslim/Magazine';
import News from './pages/berita_muslim/News';
import Quran from './pages/berita_muslim/Quran';
import Resturant from './pages/berita_muslim/Resturant';
import Slowlife from './pages/berita_muslim/Slowlife';
import Travel from './pages/berita_muslim/Travel';
import Copyright from './components/footer/Copyright/Copyright';


type Props = {}

const App = (props: Props) => {
  return (
    <>
      <div>
        <Banner />
        <Bar />
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/bussiness" element={<Bussiness />} />
          <Route path="/coverstory" element={<CoverStory />} />
          <Route path="/doa" element={<Doa />} />
          <Route path="/finace" element={<Finace />} />
          <Route path="/food" element={<Food />} />
          <Route path="/history" element={<History />} />
          <Route path="/life" element={<Life />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/news" element={<News />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/slowlife" element={<Slowlife />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/baitul" element={<Baitul />} />
          <Route path="/mstyle" element={<Mstyle />} />
          <Route path="/muallaf" element={<Mullaf />} />
          <Route path="/love" element={<Love />} />
          <Route path="/halal" element={<Halal />} />
          <Route path="/clipvideo" element={<ClipVideo />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      <Footer />
      
    </>
  );
}

export default App