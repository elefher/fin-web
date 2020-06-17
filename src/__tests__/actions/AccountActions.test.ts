import configureStore from 'redux-mock-store';
import {
    fetchAccounts,
    Currency
} from '../../actions';
import thunk from "redux-thunk";
import {FETCH_ACCOUNTS} from "../../constants";

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('AccountActions', () => {
    beforeEach(() => {
        store.clearActions();
    })

    describe('fetchAccounts', () => {
        test('Dispatches the correct action and payload', () => {
            const expectedAction = [{
                type: FETCH_ACCOUNTS,
                payload: [
                    {
                        id: '1',
                        name: 'Account 1',
                        type: 'Account type',
                        currency: Currency.EUR,
                        note: 'NOTES',
                        balance: 12000,
                    }, {
                        id: '2',
                        name: 'Account 2',
                        type: 'Account type',
                        currency: Currency.GBP,
                        note: 'NOTES uk',
                        balance: 1000,
                    }, {
                        id: '3',
                        name: 'Account 3',
                        type: 'Account type',
                        currency: Currency.USD,
                        note: 'NOTES usd',
                        balance: 1000,
                    },
                ]
            }];
            
            store.dispatch(fetchAccounts());
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
