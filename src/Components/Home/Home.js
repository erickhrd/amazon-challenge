import React from 'react';
import "./Home.css";
import Product from './Products/Product';
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
        <div className="home">
            <div>
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <Grid container className="home__products" spacing={2}>
                     <Grid item  xs={12} sm={6} md={6}>
                    <Product id="983721" title="Sony MDRZX110NC Noise Cancelling Headphones, Black, medium" price={28.99} image="https://images-na.ssl-images-amazon.com/images/I/31XMSLC5kNL._AC_US200_.jpg"  rating={4} />
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Product id="7812772" title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)" price={949.99} image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC._SR360,460.jpg" rating={4} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.49} image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UL320_.jpg" rating={4}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Product id="4680973" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={4}>
                    <Product id="3219832" title="LED TV with HDR and Alexa Compatibility - 2020 Model" price={1119.95} image="https://images-na.ssl-images-amazon.com/images/I/612U-Yeox0L._AC_SX679_.jpg" rating={5} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                    <Product id="0213289" title="NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision, 3GB RAM, 2x USB, Works with Alexa" price={199.49} image="https://m.media-amazon.com/images/I/61rowppY2TL._AC_UY218_.jpg" rating={5} />
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Product id="214356" title="AmazonBasics Standard Jump Rope" price={12.99} image="https://images-na.ssl-images-amazon.com/images/I/81F0bYf3DOL._AC_SX679_.jpg"  rating={4} />
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Product id="712721" title="UPGROW USB C Hub, Type C Hub Adapter, MacBook Pro Accessories with 3 USB 3.0 Ports, 4K@30Hz HDMI,TF/SD Card Reader, USB-C PD Docking for MacBook Pro 13&amp;Prime; 15&amp;Prime; 16&amp;Prime;2017-2020 &amp;amp; MacBook Air 2020/2019/2018" price={22.99} image="https://images-na.ssl-images-amazon.com/images/I/61JmvFX4U2L._AC_SX679_.jpg" rating={5} />
                    </Grid>
                    <Grid item  xs={12} sm={12} md={12}>
                    <Product id="238170" title="iOttie Easy One Touch 4 Dash &amp; Windshield Car Mount Phone Holder Desk Stand Pad &amp; Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones" price={24.99} image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"  rating={5} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;
