import React from 'react';
import Divisions from '../Divisions/Divisions';
import Header from '../Header/Header';
import News from '../News/News';
import Staff from '../Staff/Staff';
import Tag from '../Tag/Tag';
import Whyus from '../Whyus/Whyus';

function Home(){
    return(
        <>
        <Header />
        <News />
        <Tag />
        <Divisions />
        <Whyus />
        <Staff />
        </>
    )
}
export default Home;