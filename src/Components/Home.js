import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import About from './About/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Marquee from './Marquee/Marquee';
import Static from './Static/Static';
import Teachers from './Teachers/Teachers';
const Home = () => {
    return (
        <div >
<Header />
<Marquee/>
<Teachers/>
<About/>
<Static/>
<Footer/>
        </div>
    );
};

export default Home;