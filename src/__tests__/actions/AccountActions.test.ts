import configureStore from 'redux-mock-store';
import {
    fetchAccounts,
} from '../../actions';
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('AccountActions', () => {
    beforeEach(() => {
        store.clearActions();
    })

    afterEach(() => {
        fetchMock.restore()
    })

    describe('fetchAccounts', () => {
        test('Dispatches the correct action and payload', () => {
            fetchMock.getOnce(process.env.REACT_APP_API_URL + '/accounts', {
                headers: {'content-type': 'application/json'}
            })

            store.dispatch(fetchAccounts());
            expect(store.getActions()).toEqual([]);
        });
    });
});
