import accountReducer from '../../reducers/accountsReducer';
import * as types from '../../constants';
import * as AccountFakeData from '../../common/fake/Accounts';

describe('Account reducer', () => {
    it('should return the initial state', () => {
        expect(accountReducer(undefined, {})).toEqual([]);
    })

    it('should return the given accounts on FETCH_ACCOUNTS type', () => {
        
        const accounts = AccountFakeData.Accounts()
        expect(
            accountReducer([], {
                type: types.FETCH_ACCOUNTS,
                payload: accounts
            })
        ).toEqual(accounts);
    })
})
