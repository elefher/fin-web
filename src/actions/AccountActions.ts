import {
    FETCH_ACCOUNTS,
} from '../constants';

export enum Currency {
    EUR = '€',
    USD = '$',
    GBP = '£',
}

interface IAccount {
    id: string;
    name: string;
    type: string;
    balance: number;
    currency: Currency;
    note?: string;
    user?: object;
}

export const fetchAccounts: any = () => (dispatch, getState): void => {
    let accounts: IAccount[] = [];
    accounts = [
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
    ];
    

    dispatch({type: FETCH_ACCOUNTS, payload: accounts});
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
