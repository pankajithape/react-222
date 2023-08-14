import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeMockStore } from '../../TestUtils/mockStore';
import HeaderCartButton from './HeaderCartButton';

const store = makeMockStore({   
  ui: { cartIsVisible: "" },
  cart: {items: [],totalQuantity: 0 }
});

const setUpFull = () => {
  const wrapper = render(
    <Provider store={store}>
      <HeaderCartButton />
  </Provider>
  );
  return wrapper;
};

describe("Render HeaderCartButton Component", () => {
  beforeEach(() => {
    setUpFull();
  })

  test('renders Header component with site title', () => {
    const favBtnElement = screen.getByText(/Your Favorites/i);
    expect(favBtnElement).toBeInTheDocument();
  });

});
