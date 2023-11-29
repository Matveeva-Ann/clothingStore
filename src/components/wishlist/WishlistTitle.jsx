import { useSelector } from "react-redux";
import { Title } from "./Wishlist.styled";


export default function WishlistTitle (){
  const scheme = useSelector(state => state.baseColor);

  return(
    <Title scheme={scheme}>Wishlist</Title>
  )
}