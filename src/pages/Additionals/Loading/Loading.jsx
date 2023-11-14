import { LoadingSvg, LoadingText, LoadingWrapper } from "./Loading.styled";

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingText>Loading...</LoadingText>
      <LoadingSvg size={50} />
    </LoadingWrapper>
  )
}