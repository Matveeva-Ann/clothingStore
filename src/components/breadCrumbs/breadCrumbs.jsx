import { BreadCrumbsItem, BreadCrumbsItemName, BreadCrumbsLink, BreadCrumbsList } from "./breadCrumbs.styled";

export default function BreadCrumbs({linksArr=[], name=''}) {
  return (
    <>
      <BreadCrumbsList>
      {linksArr.map(elem =>(
        <BreadCrumbsItem key={elem.name}>
          <BreadCrumbsLink to={`/${elem.link}`} key={elem}>{elem.name}</BreadCrumbsLink>
        </BreadCrumbsItem>
      ))}
      <BreadCrumbsItemName style={{color: '#3C4242'}}>{name}</BreadCrumbsItemName>
    </BreadCrumbsList>
    </>
  )
}

  