import { render,screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render restaurant car component with props data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Kanti Sweets");
    expect(name).toBeInTheDocument();
});

it("should not render 'Discount Available' label", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const discount = screen.queryByText("Discount Available"); // Use queryByText to check for absence
  
    expect(discount).toBeNull(); // Assert that 'Discount Available' is not present
  });
  