import accountReducer from '../../reducers/accountsReducer';
import * as types from '../../constants';
import * as AccountFakeData from '../../common/fake/Accounts';
import {Currency} from "../../actions";
import {AccountTypes} from "../../actions/AccountActions";

describe('Account reducer', () => {
    const accounts = AccountFakeData.createAccounts();
    
    it('Should return the initial state when action type cannot be found', () => {
        expect(accountReducer(undefined, {})).toEqual([]);
    });

    it('Should return the given accounts on FETCH_ACCOUNTS type', () => {
        expect(
            accountReducer(accounts, {
                type: types.FETCH_ACCOUNTS,
                payload: accounts
            })
        ).toEqual(accounts);
    });
    
    test('ADD_ACCOUNT returns the initial state with the new given account', () => {
        const firstAccountToBeAdded = accounts[0];
        expect(
            accountReducer([], {
                type: types.ADD_ACCOUNT,
                payload: firstAccountToBeAdded
            })
        ).toEqual([firstAccountToBeAdded]);

        const secondAccountToBeAdded = accounts[1];
        expect(
            accountReducer([firstAccountToBeAdded], {
                type: types.ADD_ACCOUNT,
                payload: secondAccountToBeAdded
            })
        ).toEqual([firstAccountToBeAdded, secondAccountToBeAdded]);
    });
    
    test('UPDATE_ACCOUNT returns the initial state with the account updated', () => {
        const initAccountState = accounts[0];
        const anotherAccount = accounts[1];
        
        const accountTobeUpdated = {...initAccountState};
        accountTobeUpdated.name = 'Name Updated';
        accountTobeUpdated.balance = 13000;
        accountTobeUpdated.note = 'A new now check that updated';
        accountTobeUpdated.currency = Currency.EUR;
        accountTobeUpdated.type = AccountTypes.INVESTMENTS;
        
        expect(
            accountReducer([initAccountState, anotherAccount], {
                type: types.UPDATE_ACCOUNT,
                payload: accountTobeUpdated
            })
        ).toEqual([accountTobeUpdated, anotherAccount]);
    });
    
    test('DELETE_ACCOUNT returns the initial state without the account for the given Id', () => {
        const account1 = accounts[0];
        const account2 = accounts[1];
        
        expect(
            accountReducer([account1, account2], {
                type: types.DELETE_ACCOUNT,
                payload: account2.id
            })
        ).toEqual([account1]);
    });
})
