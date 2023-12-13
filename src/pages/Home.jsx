import Banner from "components/banner/Banner";
import {DisplayModeToggle, GoodsList} from "components/goods";

export default function Home() {

  return (
    <>
      <Banner></Banner>
      <DisplayModeToggle></DisplayModeToggle>
      <GoodsList category={'Women'} ></GoodsList>
      <GoodsList category={'Men'}></GoodsList>
      <GoodsList category={'Children'}></GoodsList>
    </>
  )
}
