import Banner from "components/banner/Banner";
import GoodsList from "components/goods/GoodsList/GoodsList";

export default function Home() {

  return (
    <>
      <Banner></Banner>
      <GoodsList category={'Women'} ></GoodsList>
      <GoodsList category={'Men'}></GoodsList>
      <GoodsList category={'Children'}></GoodsList>
    </>
  )
}
