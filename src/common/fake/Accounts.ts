import {Currency, IAccount, AccountTypes} from "../../actions/AccountActions";
import _ from 'lodash';
import faker from 'faker';

export const createAccounts = (numOfAccounts = 5): Array<IAccount> => {
    const accounts: Array<IAccount> = [];

    for (let i = 0; i < numOfAccounts; i++) {
        accounts.push({
            id: faker.random.uuid(),
            name: faker.name.findName(),
            type: _.sample(Object.values(AccountTypes)),
            balance: faker.finance.amount(),
            currency: _.sample(Object.values(Currency)),
            note: faker.lorem.text(),
        });
    }
    return accounts;
};
