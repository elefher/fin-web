import configureStore from 'redux-mock-store';
import {
    fetchAccounts,
    addAccount,
    updateAccount,
    deleteAccount
} from '../../actions';
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {createAccounts} from "../../common/fake/Accounts";
import {ADD_ACCOUNT, DELETE_ACCOUNT, FETCH_ACCOUNTS, UPDATE_ACCOUNT} from "../../constants";

const mockStore = configureStore([thunk]);
let store = mockStore();

describe('AccountActions', () => {
    beforeEach(() => {
        store.clearActions();
    })

    afterEach(() => {
        fetchMock.restore()
    })

    describe('fetchAccounts', () => {
        const accounts = createAccounts(1);

        it('Should dispatch FETCH_ACCOUNTS and successful payload with accounts', () => {
            fetchMock.getOnce(process.env.REACT_APP_API_URL + '/accounts', accounts);

            const expected = [{type: FETCH_ACCOUNTS, payload: accounts}];
            return store.dispatch(fetchAccounts()).then(() => {
                expect(store.getActions()).toEqual(expected);
            });
        });

        it('Should dispatch FETCH_ACCOUNTS and return exception when the request is not successful', () => {
            fetchMock.catch('*');

            const expected = [{type: FETCH_ACCOUNTS, ex: expect.anything()}];
            return store.dispatch(fetchAccounts()).then(() => {
                expect(store.getActions()).toEqual(expected);
            });
        });
    });

    describe('addAccount', () => {
        const newAccountToBeAdded = createAccounts(1)[0];
        it('Should dispatch ADD_ACCOUNT and successful response with the new account', () => {
            fetchMock.post(process.env.REACT_APP_API_URL + '/accounts', newAccountToBeAdded);

            const expectedAction = [
                {type: ADD_ACCOUNT, payload: newAccountToBeAdded}
            ];

            return store.dispatch(addAccount(newAccountToBeAdded)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it('Should dispatch ADD_ACCOUNT and exception when request is not successful', () => {
            fetchMock.catch('*');

            const expected = [
                {type: ADD_ACCOUNT, ex: expect.anything()}
            ];

            return store.dispatch(addAccount()).then(() => {
                expect(store.getActions()).toMatchObject(expected);
            });
        });
    });

    describe('updateAccount', () => {
        const updatedAccount = createAccounts(1)[0];
        it('Should dispatch UPDATE_ACCOUNT and successful response with the updated account', () => {
            fetchMock.put(process.env.REACT_APP_API_URL + '/accounts/' + updatedAccount.id, updatedAccount);

            const expectedAction = [
                {type: UPDATE_ACCOUNT, payload: updatedAccount}
            ];

            return store.dispatch(updateAccount(updatedAccount)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it('Should dispatch UPDATE_ACCOUNT and exception when update account is not successful', () => {
            fetchMock
                .put(process.env.REACT_APP_API_URL + '/accounts/' + updatedAccount.id, updatedAccount)
                .catch(404);

            const expected = [
                {type: UPDATE_ACCOUNT}
            ];

            return store.dispatch(updateAccount(updatedAccount)).then(() => {
                expect(store.getActions()).toMatchObject(expected);
            });
        });
    });

    describe('deleteAccount', () => {
        const accountToBeDeleted = createAccounts(1)[0];
        it('Should dispatch DELETE_ACCOUNT and successful response', () => {
            fetchMock.delete(process.env.REACT_APP_API_URL + '/accounts/' + accountToBeDeleted.id, {});

            const expected = [
                {type: DELETE_ACCOUNT, payload: accountToBeDeleted.id}
            ];

            return store.dispatch(deleteAccount(accountToBeDeleted.id)).then(() => {
                expect(store.getActions()).toEqual(expected);
            });
        });

        it('Should dispatch DELETE_ACCOUNT and exception when delete is not successful', () => {
            fetchMock
                .delete(process.env.REACT_APP_API_URL + '/accounts/' + accountToBeDeleted.id, {})
                .catch(404);

            const expected = [
                {type: DELETE_ACCOUNT}
            ];

            return store.dispatch(deleteAccount(accountToBeDeleted.id)).then(() => {
                expect(store.getActions()).toMatchObject(expected);
            });
        });
    });
});
