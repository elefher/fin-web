import React from 'react';
import {render, fireEvent, screen, wait} from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import AccountList from '../../components/accounts/AccountList';
import {createStore} from 'redux';
import fetchMock from "fetch-mock";
import axios from 'axios';
import {createAccounts} from "../../common/fake/Accounts";
// import {fetchAccounts} from "../../actions";

// const server = setupServer(
//     rest.get(process.env.REACT_APP_API_URL + '/accounts', (req, res, ctx) => {
//         return res(ctx.json({greeting: 'hello there'}))
//     })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const accounts = createAccounts(1);

test('can render with redux with defaults', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: []}));

    render(<AccountList/>);
    expect(screen.getByText('Press "+" button to create an account')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
})

test('can render with redux with dummy data', async () => {
    const promise = Promise.resolve({data: accounts});
    mockedAxios.get.mockImplementationOnce(() => promise);
    render(<AccountList/>);


// await act(() => promise);
// expect(fetchAccounts).toHaveBeenCalledTimes(1);
// fireEvent.click(screen.getByText('-'))
// expect(screen.getByTestId('count-value')).toHaveTextContent('2')
    screen.debug();
    await wait(() => expect(screen.getAllByRole('listitem')).toHaveLength(2));
    screen.debug();

})

// test('can render with redux with custom store', () => {
//     // this is a silly store that can never be changed
//     const store = createStore(() => ({ count: 1000 }))
//     render(<AccountList />, {
//         store,
//     })
//     fireEvent.click(screen.getByText('+'))
//     expect(screen.getByTestId('count-value')).toHaveTextContent('1000')
//     fireEvent.click(screen.getByText('-'))
//     expect(screen.getByTestId('count-value')).toHaveTextContent('1000')
// })


// test('loads and displays list of accounts', async () => {
//     render(<AccountList/>);

// fireEvent.click(screen.getByText('Load Greeting'))
//
// await waitFor(() => screen.getByRole('heading'))
//
// expect(screen.getByRole('heading')).toHaveTextContent('hello there')
// expect(screen.getByRole('button')).toHaveAttribute('disabled')
// })

// test('handlers server error', async () => {
//     server.use(
//         rest.get('/greeting', (req, res, ctx) => {
//             return res(ctx.status(500))
//         })
//     )
//
//     render(<Fetch url="/greeting"/>)
//
//     fireEvent.click(screen.getByText('Load Greeting'))
//
//     await waitFor(() => screen.getByRole('alert'))
//
//     expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//     expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
// })

