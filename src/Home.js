import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" 
                />
            </div>

            <div className="home__row">
                <Product 
                id="02"
                title='Televistion'
                price={19}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                rating={1} />
                 <Product 
                id="01"
                title='Sound'
                price={10000}
                image="https://s.alicdn.com/@sc01/kf/HTB1mFxNek9E3KVjSZFGq6A19XXaL.jpg_220x220.jpg"
                rating={5} />
            </div>

            <div className="home__row">
                 <Product 
                id="10"
                title='Chair'
                price={2569}
                image="https://s.alicdn.com/@sc01/kf/Hb26846ba59ea4e0082a476e09f72aebbO.jpg_220x220.jpg"
                rating={3} />
                <Product 
                id="20"
                title='Remote'
                price={25}
                image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
                rating={2} />
                <Product 
                id="12"
                title='HP'
                price={.23}
                image="https://m.media-amazon.com/images/I/717HLlpdcIL._AC_UL480_FMwebp_QL65_.jpg"
                rating={4} />
            </div>

            <div className="home__row">
            <Product 
                id="14"
                title='SD Card'
                price={500}
                image="https://m.media-amazon.com/images/I/81ti8lPxEjL._AC_UL480_FMwebp_QL65_.jpg"
                rating={4} />
            </div>
        </div>
    )
}

export default Home
