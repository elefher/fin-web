import React, {ReactElement} from "react";
import {render as rtlRender, RenderOptions} from "@testing-library/react";
import {Provider} from "react-redux";
import store from '../reducers';
import {MemoryRouter} from 'react-router-dom';

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
    const Wrapper: React.FC = ({children}) => {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    {children}
                </MemoryRouter>
            </Provider>
        );
    };
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

// re-export everything
export * from "@testing-library/react";

// override render method
export {render};
