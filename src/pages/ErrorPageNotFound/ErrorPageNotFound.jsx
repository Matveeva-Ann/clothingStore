import LinkButton from 'containers/LinkButton/LinkButton';
import { ErrorImg, ErrorText, ErrorTextAccent, ErrorTextAction, ErrorTextActionTitle, ErrorWrapper } from './ErrorPageNotFound.styled';
import img404 from './img/UA_D__1_-removebg-preview-removebg-preview.png';

export default function ErrorPageNotFound() {
  return (
    <ErrorWrapper>
      <ErrorImg
        src={img404}
        alt="404"
      />
      <ErrorText>
        <p>Ця сторінка порожня, але твій <ErrorTextAccent>кошик може бути повним!</ErrorTextAccent></p>
   
          <ErrorTextActionTitle>Що робимо?</ErrorTextActionTitle>
          <ErrorTextAction>
            <LinkButton link={'/'}>Повернутись на головну</LinkButton>
            <LinkButton link={'/'}>Повернутись на головну</LinkButton>
          </ErrorTextAction>
      
      </ErrorText>

    </ErrorWrapper>
  );
}
