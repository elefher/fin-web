import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchAccounts} from "../../actions";

interface Props {
    accounts;
    fetchAccounts: () => void
}

const AccountList: React.FC<Props> = ({accounts, fetchAccounts}) => {
    
    useEffect(() => {
        fetchAccounts();
    }, []);

    const AccountList = () => {
        if (accounts) {
            const accountList = accounts.map((account) =>
                <li key={account.id}>{account.name}</li>
            );
            return (
                <ul>{accountList}</ul>
            );
        }
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            {AccountList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {accounts: state.accounts};
};

export default connect(mapStateToProps, {fetchAccounts})(AccountList);
