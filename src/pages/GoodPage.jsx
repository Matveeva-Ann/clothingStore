import BreadCrumbs from "components/breadCrumbs/breadCrumbs";
import GoodInfo from "components/goods/GoodInfo/GoodInfo";
import { urlGoods } from "constants/urlGoodsCollection";
import sendRequest from "helpers/sendRequest";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorRequest from "./Additionals/ErrorRequest/ErrorRequest";
import Loading from "./Additionals/Loading/Loading";

const Status = {
  LOADING: "loading",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function GoodPage() {
  const [status, setStatus] = useState(Status.LOADING);
  const [cardData, setCardData] = useState({})
  const [linksArr, setLinksArr] = useState([]);

  const { goodId } = useParams();

  // імітація запиту на отримання даних по одному товару
  useEffect(() => {
     fetchData()
  }, [goodId]);

  const fetchData = async () => {
    try {
      const data = await sendRequest(urlGoods);
      const fetchedCard = data.find((good) => Number(good.sku) === Number(goodId))
      setCardData(fetchedCard)      
      setLinksArr([
        {
          link: '',
          name: 'Home',
        },
        {
          link: `Shop`,
          name: `Wardrobe for Everyone`,
        },
        {
          link: `${fetchedCard.category}`,
          name: `${fetchedCard.category}`,
        }
      ])
      setStatus(Status.RESOLVED);
    } catch (e) {
      setStatus(Status.REJECTED);
    }
  };

  if (status === "loading") {
    return <Loading></Loading>;
  } else if (status === "resolved") {
    return (
      <>
        <BreadCrumbs linksArr={linksArr} name={cardData.name}></BreadCrumbs>
        <GoodInfo cardData={cardData}></GoodInfo>;
      </>
    )

  } else if (status === "rejected") {
    return <ErrorRequest></ErrorRequest>;
  }

}

GoodPage.propTypes = {
  setBasketCount: PropTypes.func,
}