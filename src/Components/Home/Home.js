import React from 'react';
import "./Home.css";
import Product from './Products/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div id="12321341" className="home__row">
                    <Product id="4680973" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                    <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UL320_.jpg" rating={4}/>
                </div>
                <div className="home__row">
                    <Product id="7812772" title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)" price={949.99} image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC._SR360,460.jpg" rating={4} />
                    <Product id="983721" title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone" price={49.99} image="https://m.media-amazon.com/images/I/61cSwIDSVbL._AC_UY218_.jpg" rating={4} />
                    <Product id="0213289" title="NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision, 3GB RAM, 2x USB, Works with Alexa" price={239.0} image="https://m.media-amazon.com/images/I/61rowppY2TL._AC_UY218_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product id="3219832" title="LED TV with HDR and Alexa Compatibility - 2020 Model" price={1119.95} image="https://images-na.ssl-images-amazon.com/images/I/612U-Yeox0L._AC_SX679_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home;
