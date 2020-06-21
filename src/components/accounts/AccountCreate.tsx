import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './Accounts.css';
import {Currency} from "../../actions";
import {connect} from 'react-redux';
import {addAccount} from "../../actions";
import {Redirect} from 'react-router-dom';

const currencies = [
    {
        value: 'USD',
        label: Currency.USD,
    },
    {
        value: 'EUR',
        label: Currency.EUR,
    },
    {
        value: 'GBP',
        label: Currency.GBP,
    },
];

const ACCOUNTS = [
    {label: 'Cash', value: 'Cash'},
    {label: 'Debit Card', value: 'DebitCard'},
    {label: 'Credit Card', value: 'CreditCard'},
    {label: 'Investment Account', value: 'InvestmentAccount'},
    {label: 'Other', value: '0'},
];

const AccountCreate: React.FC<{ addAccount }> = ({addAccount}) => {
    const [saved, setSaved] = useState(false);
    const [account, setAccount] = useState({
        name: '',
        currency: currencies[2].value,
        type: ACCOUNTS[1].value,
        balance: '',
        note: '',
    });

    const handleChange = (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, [prop]: event.target.value});
    };

    const saveAccount = () => {
        if (!account.name) {
            return;
        }
        
        if (!account.balance) {
            return;
        }

        addAccount(account);
        setSaved(true);
    };

    if (saved) {
        return <Redirect to="/accounts"/>;
    }

    return (
        <div>
            <header>Create an Account</header>
            <div className='account-form'>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Account Name"
                        value={account.name}
                        onChange={handleChange('name')}
                    />
                    <div id="selectors">
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={account.currency}
                            onChange={handleChange('currency')}
                            helperText="Select your currency"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-select-account-type"
                            select
                            label="Select"
                            value={account.type}
                            onChange={handleChange('type')}
                            helperText="Select your account type"
                        >
                            {ACCOUNTS.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-balance">Balance</InputLabel>
                        <Input
                            id="standard-adornment-balance"
                            value={account.balance}
                            onChange={handleChange('balance')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <TextField
                        id="standard-textarea"
                        label="Note"
                        placeholder="Notes"
                        value={account.note}
                        onChange={handleChange('note')}
                        multiline
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon/>}
                        onClick={saveAccount}
                    >
                        Save
                    </Button>
                </form>
            </div>
        </div>
    )
        ;
};

export default connect(null, {addAccount})(AccountCreate);
