import { ErrorMessageStyle, FieldCheckbox, FieldLabel, FieldStyle } from 'components/checkOut/CheckOut.styled';
import { GoodsCollectionTitle } from 'components/goods/GoodsList/GoodsList.styled';
import ButtonSubmit from 'containers/ButtonSubmit/ButtonSubmit';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/isLoginSlice';
import { FormStyle, FieldWrapper, Message } from './userLogin.styled';
import * as Yup from "yup";
import { useState } from 'react';

const initialValue = {
  login: 'User',
  password: '123123йййЙ'
}
const SchemaDataOrder = Yup.object().shape({
  login: Yup.string()
    .min(2, '*Надто коротке ім’я')
    .max(30, '*Максимальна кількість символів 30')
    .required('*Це поле обов’язкове для заповнення'),
  password: Yup.string()
    .min(2, '*Надто коротке прізвище')
    .max(30, '*Максимальна кількість символів 30')
    .required('*Це поле обов’язкове для заповнення'),
});

export default function UserLogin() {
  const [isCredentials, setIsCredentials] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if(values.login === 'User' && values.password === '123123йййЙ'){
      if(location.state ){
        navigate(`${location.state}`, { replace: true });
      } else{
        navigate('/userPage', { replace: true });
      }
      dispatch(logIn())
      setIsCredentials(false)
    } else{
      setIsCredentials(true)
    }
  }

  return (
    <>
      <GoodsCollectionTitle style={{ marginLeft: '150px', marginTop: '50px'}}>Вхід </GoodsCollectionTitle>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={SchemaDataOrder}
      >
        <FormStyle>
          <FieldWrapper>
            <FieldLabel htmlFor="login">Login*</FieldLabel>
            <FieldStyle type="text" name="login" placeholder='First Name' />
            <ErrorMessageStyle>
              <ErrorMessage name="login" />
            </ErrorMessageStyle>
          </FieldWrapper>
          <FieldWrapper>
            <FieldLabel htmlFor="password">Passwopd*</FieldLabel>
            <FieldStyle type="password" name="password" placeholder='First Name' />
            <ErrorMessageStyle>
              <ErrorMessage name="password" />
            </ErrorMessageStyle>
          </FieldWrapper>

          <div style={{position: 'relative'}}>
            {isCredentials && <Message>*Невірно введений логін або пароль</Message>}
            <ButtonSubmit padding='16px 20px' fontSize='18px' radius='8px' bColor='base-color' colorText='#fff'>Continue to delivery</ButtonSubmit>
            <div style={{ marginTop: '20px' }}>
              <FieldCheckbox className='checkbox' id='checkbox' type="checkbox" name="saveInformation" />
            </div>
          </div>
        </FormStyle>
      </Formik>

    </>
  );
}
