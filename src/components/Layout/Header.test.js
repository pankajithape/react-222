import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeMockStore } from '../../TestUtils/mockStore';
import Header from './Header';


const store = makeMockStore({   
  ui: { cartIsVisible: "" },
  cart: {items: [],totalQuantity: 0 }
});

const setUpFull = () => {
  const wrapper = render(
    <Provider store={store}>
      <Header />
  </Provider>
  );
  return wrapper;
};

describe("Render Header Component", () => {
  beforeEach(() => {
    setUpFull();
  })

  test('renders Header component with site title', () => {
    const logoElement = screen.getByText(/MEME'S BEER/i);
    expect(logoElement).toBeInTheDocument();
  });
  
});