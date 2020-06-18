import {
    FETCH_ACCOUNTS,
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

export const fetchAccounts: any = () => (dispatch, getState): void => {
    fetch(process.env.REACT_APP_API_URL + '/accounts')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch({type: FETCH_ACCOUNTS, payload: res});
        })
        .catch((res) => {
            dispatch({type: FETCH_ACCOUNTS, payload: res});
        });
};

// export const addAccount: any = (account) => (dispatch, getState): void => {
//     account.balance = parseFloat(account.balance);
//     realm.write(() => {
//         const user = retrieveUser(getState().auth.userData.id);
//         user.accounts.push(account);
//     });
//     dispatch({type: ADD_ACCOUNT, payload: account});
// };
//
// export const deleteAccount: any = (account) => (dispatch, getState): void => {
//     realm.write(() => {
//         const user = retrieveUser(getState().auth.userData.id);
//         let accountsOfUser = user.accounts;
//         let accountTobeDeleted = accountsOfUser.filtered('id = $0', account.id);
//         realm.delete(accountTobeDeleted);
//     });
//
//     dispatch({type: DELETE_ACCOUNT, payload: account});
// };
//
// export const updateAccount: any = (account) => (dispatch, getState): void => {
//     account.balance = parseFloat(account.balance);
//     realm.write(() => {
//         const user = retrieveUser(getState().auth.userData.id);
//         const accountsOfUser = Array.from(user.accounts);
//         const updatedAccounts = accountsOfUser.map((a: IAccount) => {
//             if (account.id === a.id) {
//                 return account;
//             }
//             return a;
//         });
//
//         user.accounts = updatedAccounts;
//     });
//
//     dispatch({type: UPDATE_ACCOUNT, payload: account});
// };
//
// const retrieveAccountsForUser = (id): IAccount[] => {
//     const user = realm.objectForPrimaryKey('User', id);
//     return Array.from(user.accounts);
// };
//
// const retrieveUser = (id) => {
//     return realm.objectForPrimaryKey('User', id);
// };
