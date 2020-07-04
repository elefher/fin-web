import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountShow from '../../components/accounts/AccountShow';

test('loads and displays an account', async () => {
    render(<AccountShow/>);
    expect(screen.getByText('AccountShow')).toBeInTheDocument();
})

