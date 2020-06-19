import {
    ADD_ACCOUNT,
    FETCH_ACCOUNTS,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT
} from '../constants';

export enum Currency {
    EUR = '€',
    USD = '$',
    GBP = '£',
}

export enum AccountTypes {
    DEBIT_CARD = 'Debit Card',
    CREDIT_CARD = 'Credit Card',
    INVESTMENTS = 'Credit Card',
}

export interface IAccount {
    id: string;
    name: string;
    type: string;
    balance: number;
    currency: Currency;
    note?: string;
    user?: object;
}

export const fetchAccounts: any = () => (dispatch): Promise<Response> => {
    return fetch(process.env.REACT_APP_API_URL + '/accounts')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch({type: FETCH_ACCOUNTS, payload: res});
        })
        .catch(ex => dispatch({type: FETCH_ACCOUNTS, ex}));
};

export const addAccount: any = (account) => (dispatch): Promise<Response> => {
    return fetch(process.env.REACT_APP_API_URL + '/accounts', {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {
            dispatch({type: ADD_ACCOUNT, payload: json});
        })
        .catch(ex => dispatch({type: ADD_ACCOUNT, ex}));
};

export const deleteAccount: any = (accountId) => (dispatch): Promise<Response> => {
    return fetch(process.env.REACT_APP_API_URL + '/accounts/' + accountId, {
        method: 'DELETE'
    })
        .then(() => dispatch({type: DELETE_ACCOUNT, payload: accountId}))
        .catch(ex => dispatch({type: DELETE_ACCOUNT, ex}));
};

export const updateAccount: any = (account) => (dispatch): Promise<Response> => {
    return fetch(process.env.REACT_APP_API_URL + '/accounts/' + account.id, {
        method: 'PUT',
        body: JSON.stringify(account),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            dispatch({type: UPDATE_ACCOUNT, payload: json});
        })
        .catch(ex => dispatch({type: UPDATE_ACCOUNT, ex}));
};
