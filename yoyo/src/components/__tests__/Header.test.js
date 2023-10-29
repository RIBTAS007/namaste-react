import {fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a login Button", ()=>{
    render(
        <BrowserRouter> 
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with Cart text as 0", ()=>{
    render(
        <BrowserRouter> 
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", ()=>{
    render(
        <BrowserRouter> 
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});

