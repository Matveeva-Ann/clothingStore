import Banner from "components/banner/Banner";
import DisplayModeToggle from "components/goods/DisplayModeToggle/DisplayModeToggle";
import GoodsList from "components/goods/GoodsList/GoodsList";

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
