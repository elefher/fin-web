import React, {CSSProperties, HTMLProps, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAccounts} from "../../actions";
import {IAccount} from "../../actions/AccountActions";

interface Props {
    accounts: IAccount[];
    fetchAccounts: () => void
}

const AccountList: React.FC<Props> = ({accounts, fetchAccounts}) => {

    useEffect(() => {
        fetchAccounts();
    }, []);

    const AccountList = () => {
        if (accounts) {
            const accountList = accounts.map((account) =>
                <li key={account.id} style={styles.accountList}>
                    <span style={styles.listDetails}>{account.name}</span>
                    <span style={styles.listDetails}>{account.type}</span>
                    <span style={styles.listDetails}>{account.currency}</span>
                    <span style={styles.listDetails}>{account.balance}</span>
                    <span style={styles.listDetails}>{account.note}</span>
                </li>
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
        <div style={styles.accounts}>
            {AccountList()}
        </div>
    );
};

const styles = {
    accounts:{
        width: '500px',
    },
    accountList: {
        marginBottom: '10px',
        listStyle: 'none',
        textAlign: 'left' as 'left',
    },
    listDetails:{
        marginLeft: '10px'
    }
}

const mapStateToProps = (state) => {
    return {accounts: state.accounts};
};

export default connect(mapStateToProps, {fetchAccounts})(AccountList);
