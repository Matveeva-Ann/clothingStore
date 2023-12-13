import { Formik } from 'formik';
import { FieldCheckbox, FormStyle, LabelCheckbox, SubTitle } from '../CheckOut.styled';
import '../checkbox.css';
import ButtonSubmit from 'containers/ButtonSubmit/ButtonSubmit';
import { useDispatch, useSelector } from 'react-redux';
import { userDataState } from 'redux/userData';
import { urlSendOrder } from 'constants/urlGoodsCollection';
import { useNavigate } from 'react-router-dom';
import { basketGoods } from 'redux/basketSlice';
import SchemaDataOrder from '../validationSchema';
import fields from './fieldsArr';
import FormField from './FormField';
import initValue from './initValue';

export default function BillingDetails() {
  const dispatch = useDispatch();
  const userData = useSelector(store => store.userData);
  const basketData = useSelector(store => store.basket);
  const navigate = useNavigate();

  const handelSubmit = (values, { resetForm }) => {
    resetForm();
    values.saveInformation && dispatch(userDataState(values));
    sendDataToServer(values, basketData);
    navigate('/sentSuccessfully', { replace: true });
    dispatch(basketGoods([]));
  };

  function sendDataToServer(userData, basketData) {
    const dataToSend = { ...userData };
    dataToSend.order = [...basketData];

    console.log('Дані які відправляються на сервер', dataToSend);

    fetch(urlSendOrder, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
      .then(response => {
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

  return (
    <div>
      <SubTitle>Billing Details</SubTitle>
      <Formik initialValues={initValue(userData)} onSubmit={handelSubmit} validationSchema={SchemaDataOrder}>
        <FormStyle action="">
          {fields?.map(field => (
            <FormField fieldData={field} key={field.name}></FormField>
          ))}

          <div>
            <ButtonSubmit padding="16px 20px" fontSize="18px" radius="8px" bColor="base-color" colorText="#fff">
              Continue to delivery
            </ButtonSubmit>
            <div style={{ marginTop: '20px' }}>
              <FieldCheckbox className="checkbox" id="checkbox" type="checkbox" name="saveInformation" />
              <LabelCheckbox htmlFor="checkbox" className="labelCheckbox">
                Save my information for a faster checkout
              </LabelCheckbox>
            </div>
          </div>
        </FormStyle>
      </Formik>
    </div>
  );
}
