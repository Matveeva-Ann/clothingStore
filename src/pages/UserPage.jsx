import { GoodsCollectionTitle } from "components/goods/GoodsList/GoodsList.styled";
import ColorsTheme from "components/userPageComponent/colorsTheme";


export default function UserPage(){
  return(
    <>
       {/* <ButtonGoBack></ButtonGoBack> */}
       <GoodsCollectionTitle style={{ marginLeft: '120px', marginTop: '50px'}}>User Page</GoodsCollectionTitle>
       <ColorsTheme></ColorsTheme>
    </>
  )
}