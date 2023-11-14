import { BreadCrumbsItem, BreadCrumbsLink, BreadCrumbsList } from "./breadCrumbs.styled";

export default function BreadCrumbs({linksArr=[]}) {

  return (
    <>
      <BreadCrumbsList>
      {linksArr.map(elem =>(
        <BreadCrumbsItem key={elem.name}>
          <BreadCrumbsLink to={`/${elem.link}`} key={elem}>{elem.name}</BreadCrumbsLink>
        </BreadCrumbsItem>
      ))}
    </BreadCrumbsList>
    </>
  )
}

  