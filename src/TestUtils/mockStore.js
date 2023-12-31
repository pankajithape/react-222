import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

export const makeMockStore = (store = {}) => {
    return mockStore({
        ...store
    });
};