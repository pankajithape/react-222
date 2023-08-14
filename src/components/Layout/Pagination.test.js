import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeMockStore } from '../../TestUtils/mockStore';
import Pagination from './Pagination';

const store = makeMockStore({   
  ui: { cartIsVisible: "" },
  cart: {items: [],totalQuantity: 0 }
});

const props = {
  totalPosts:12,
  postsPerPage:8,
  setCurrentPage:1,
  currentPage:1,
}
  
const setUpFull = () => {
  const wrapper = render(
    <Provider store={store}>
      <Pagination {...props}/>
  </Provider>
  );
  return wrapper;
};

describe("Render Pagination Component", () => {
  beforeEach(() => {
    setUpFull();
  })

  test('renders pagination on page', () => {
    expect(screen.getByTestId("pagination-list")).toBeInTheDocument();
  });

});
