import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import BannerProduct1 from '../components/BannerProduct1'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import Background from '../components/Background'
import Img3banner from '../components/Img3banner'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <VerticalCardProduct category={"women"} heading={"Top's Woman Fashoin"}/>
      {/* <HorizontalCardProduct category={"woman"} heading={"Top's Woman Fasion"}/> */}
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <Img3banner/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      {/* <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/> */}
      <BannerProduct1/>
      {/* <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/> */}
      {/* <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/> */}
      <VerticalCardProduct category={"men"} heading={"Men's Fashion"}/>
      <VerticalCardProduct category={"women"} heading={"Women's Fashoin"}/>
      <VerticalCardProduct category={"kids"} heading={"Kid's Fashoin"}/>
      <Background/>
    </div>
  )
}

export default Home