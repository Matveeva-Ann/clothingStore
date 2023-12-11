import { basketSlice } from 'redux/basketSlice';
import { favoriteSlice } from 'redux/favoriteSlice';
import { loginSlice } from 'redux/isLoginSlice';
import { modalAddToBasketSlice } from 'redux/modalAddToBasketSlice';
import { goodsReducer, setAllGoods } from '../../redux/goodsSlice';

jest.mock("../../helpers/sendRequest");

describe('Goods Reducer', () => {
  it('should handle setAllGoods', () => {
    const initialState = [];
    const goodsData = [
      {
        "name": "Куртка",
        "price": "49.99",
        "imagePath": [
          {"color": "Cірий", "url": "https://static.sinsay.com/media/catalog/product/1/8/1810O-09X-001-1-566061_18.jpg"},
          {"color": "Червоний", "url": "https://static.sinsay.com/media/catalog/product/1/8/1810O-33X-003-1-519679_22.jpg"},
          {"color": "Оливковий", "url": "https://static.sinsay.com/media/catalog/product/1/8/1810O-91X-001-1-566063_18.jpg"},
          {"color": "Чорний", "url": "https://static.sinsay.com/media/catalog/product/1/8/1810O-99X-002-1-519681_22.jpg"}
        ]
      }
    ];

    const nextState = goodsReducer(initialState, setAllGoods(goodsData));

    expect(nextState).toEqual(goodsData);
  });
});

describe('Favorite Reducer', () => {
  it('should handle favoriteGoods action', () => {
    const initialState = [];
    const favoriteData = [
      {
        name: 'Product 1',
        price: 19.99,
        image: 'product-1.jpg',
      },
      {
        name: 'Product 2',
        price: 29.99,
        image: 'product-2.jpg',
      },
    ];

    const nextState = favoriteSlice.reducer(initialState, favoriteSlice.actions.favoriteGoods(favoriteData));

    expect(nextState).toEqual(favoriteData);
  });
});

describe('Basket Reducer', () => {
  it('should handle basketGoods action', () => {
    const initialState = [];
    const basketData = [
      {
        name: 'Product 1',
        price: 19.99,
        quantity: 2,
      },
      {
        name: 'Product 2',
        price: 29.99,
        quantity: 1,
      },
    ];

    const nextState = basketSlice.reducer(initialState, basketSlice.actions.basketGoods(basketData));

    expect(nextState).toEqual(basketData);
  });
});

describe('Login Reducer', () => {
  it('should handle logIn action', () => {
    const initialState = false;

    const nextState = loginSlice.reducer(initialState, loginSlice.actions.logIn());

    expect(nextState).toEqual(true);
  });

  it('should handle logOut action', () => {
    const initialState = true;

    const nextState = loginSlice.reducer(initialState, loginSlice.actions.logOut());

    expect(nextState).toEqual(false);
  });
});

describe('Modal Add To Basket Reducer', () => {
  it('should handle modalAddToBasket action', () => {
    const initialState = false;

    const nextState = modalAddToBasketSlice.reducer(initialState, modalAddToBasketSlice.actions.modalAddToBasket());

    expect(nextState).toEqual(true);
  });
});