import { ErrorMessage, Formik } from "formik";
import { ErrorMessageStyle, FieldCheckbox, FieldLabel, FieldStyle, FieldWrapper, FormStyle, LabelCheckbox, SubTitle } from "./CheckOut.styled";
import './checkbox.css';
import ButtonSubmit from "containers/ButtonSubmit/ButtonSubmit";
import { PatternFormat } from 'react-number-format';
import { useDispatch, useSelector } from "react-redux";
import { userDataState } from "redux/userData";
import { urlSendOrder } from "constants/urlGoodsCollection";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { basketGoods } from "redux/basketSlice";


const SchemaDataOrder = Yup.object().shape({
  firstName: Yup.string()
    .min(2, '*Надто коротке ім’я')
    .max(30, '*Максимальна кількість символів 30')
    .required('*Це поле обов’язкове для заповнення'),
  lastName: Yup.string()
    .min(2, '*Надто коротке прізвище')
    .max(30, '*Максимальна кількість символів 30')
    .required('*Це поле обов’язкове для заповнення'),
  phone: Yup.string()
    .matches(/^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/, '*Введіть коректний номер телефону')
    .required('*Це поле обов’язкове для заповнення'),
  email: Yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, '*Введіть коректну електронну пошту')
    .required('*Це поле обов’язкове для заповнення'),
  city: Yup.string()
    .min(2, '*Введіть повнк назву міста')
    .max(30, '*Максимальна кількість символів 30')  
    .required('*Це поле обов’язкове для заповнення'),
  state: Yup.string()  
    .oneOf(['Ukraine', 'Poland', 'Germany', 'GB'], '*Виберіть одну з доступних країн'),
  street: Yup.string()
    .min(2, '*Назва вулиці має бути мінімум 2 символи')
    .max(30, '*Максимальна кількість символів 30')  
    .required('*Це поле обов’язкове для заповнення'),
  aptSuiteUnit: Yup.string()
  .min(2, '*Введіть повні дані')
  .max(30, '*Максимальна кількість символів 30')  
  .required('*Це поле обов’язкове для заповнення'),
});


export default function BillingDetails() {
  const dispatch = useDispatch();
  const userData = useSelector(store => store.userData);
  const basketData = useSelector(store => store.basket);
  const navigate = useNavigate();

  const initialValues = {
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    street: userData.street || '',
    aptSuiteUnit: userData.aptSuiteUnit || '',
    city: userData.city || '',
    state: userData.state || 'Select a country',
    postalCode: userData.postalCode || '',
    phone: userData.phone || '',
    email: userData.email || '',
    saveInformation: false || '',
  };

  const handelSubmit = (values, { resetForm }) => {
    resetForm();
    values.saveInformation && dispatch(userDataState(values));
    sendDataToServer(values, basketData);
    navigate("/sentSuccessfully", { replace: true })
    dispatch(basketGoods([]))
  };

  function sendDataToServer(userData, basketData) {
    const dataToSend = { ...userData };
    dataToSend.order = [...basketData];

    console.log('Дані які відправляються на сервер', dataToSend)

    fetch(urlSendOrder, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(dataToSend)
    }).then(response => {
      if (!response.ok) {
        //тут мало б перекидати на сторінку помилки
      }
      return response.json();
      //тут мали б видалятись дані з кошика і відбуватися редірект на сторінку юзера
      // window.location.href = '/user-page';
    })
      .catch(error => {
        // console.error(error);
      });
  }

  const PhoneInput = ({ field, ...props }) => (
    <PatternFormat
      {...field}
      {...props}

      format="+38 (0##) ### ## ##"
      mask="_"
      allowEmptyFormatting
    />
  );

  return (
    <div>
      <SubTitle>Billing Details</SubTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={SchemaDataOrder}
      >
        <FormStyle action="">
          <FieldWrapper>
            <FieldLabel htmlFor="firstName">First Name*</FieldLabel>
            <FieldStyle type="text" name="firstName" placeholder='First Name' />
            <ErrorMessageStyle>
              <ErrorMessage name="firstName" />
            </ErrorMessageStyle>
          </FieldWrapper>
          <FieldWrapper>
            <FieldLabel>Last Name*</FieldLabel>
            <FieldStyle type="text" name="lastName" placeholder='Last Name' />
            <ErrorMessageStyle>
              <ErrorMessage name="lastName" />
            </ErrorMessageStyle>
          </FieldWrapper>
          <FieldWrapper>
            <FieldLabel>Phone*</FieldLabel>
            <FieldStyle type="text" name="phone" component={PhoneInput} />
            <ErrorMessageStyle>
              <ErrorMessage name="phone" />
            </ErrorMessageStyle>
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>Email*</FieldLabel>
            <FieldStyle type="email" name="email" placeholder='Email' />
            <ErrorMessageStyle>
              <ErrorMessage name="email" />
            </ErrorMessageStyle>
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>State*</FieldLabel>
            <FieldStyle
              component="select"
              id="state"
              name="state"
            >
              <option value="Select a country">Select a country</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Poland">Poland</option>
              <option value="Germany">Germany</option>
              <option value="GB">Great Britain</option>
            </FieldStyle>
            <ErrorMessageStyle>
              <ErrorMessage name="state" />
            </ErrorMessageStyle>
          </FieldWrapper>
          <FieldWrapper>
            <FieldLabel>City*</FieldLabel>
            <FieldStyle type="text" name="city" placeholder='City' />
            <ErrorMessageStyle>
              <ErrorMessage name="city" />
            </ErrorMessageStyle>
          </FieldWrapper>
          <FieldWrapper>
            <FieldLabel>Street Address*</FieldLabel>
            <FieldStyle type="text" name="street" placeholder='Street Address' />
            <ErrorMessageStyle>
              <ErrorMessage name="street" />
            </ErrorMessageStyle>
          </FieldWrapper>
          <FieldWrapper>
            <FieldLabel>Apt, suite, unit</FieldLabel>
            <FieldStyle type="text" name="aptSuiteUnit" placeholder='apartment, suite, unit, etc. (optional)' />
            <ErrorMessageStyle>
              <ErrorMessage name="aptSuiteUnit" />
            </ErrorMessageStyle>
          </FieldWrapper>

          <div>
            <ButtonSubmit padding='16px 20px' fontSize='18px' radius='8px' bColor='#8A33FD' colorText='#fff'>Continue to delivery</ButtonSubmit>
            <div style={{ marginTop: '20px' }}>
              <FieldCheckbox className='checkbox' id='checkbox' type="checkbox" name="saveInformation" />
              <LabelCheckbox htmlFor='checkbox' className="labelCheckbox">Save my information for a faster checkout</LabelCheckbox>
            </div>
          </div>
        </FormStyle>
      </Formik>
    </div>
  );
}
