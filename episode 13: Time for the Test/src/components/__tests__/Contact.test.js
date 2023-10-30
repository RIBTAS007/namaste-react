import {render,screen} from '@testing-library/react';
import Contact from '../Contact';
import "@testing-library/jest-dom";

describe("Contact us page Test Cases", ()=>{

  // beforeAll(()=>{
  //   console.log("Before All");
  // })

  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  // afterEach(()=>{
  //   console.log("After Each");
  // })
  
  // afterAll(()=>{
  //   console.log("After All");
  // })


  it("Should load contact us component", ()=>{
    // rendered a component inside JS Dom
    render(<Contact/>);   
    
    // query
    const heading = screen.getByRole("heading");
  
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  
  test("Should load button inside contact component", ()=>{
     // rendered a component inside JS Dom
    render(<Contact/>);   
    
   //querying
    const button = screen.getByText("Submit");
  
    //Assertion
    expect(button).toBeInTheDocument();
  });
  
  test("Should load input name inside contact component", ()=>{
     // rendered a component inside JS Dom
    render(<Contact/>);   
    
    //querying
    const inputName = screen.getByPlaceholderText("name");
  
    //Assertion
    expect(inputName).toBeInTheDocument();
  });
  
  test("Should load 2 input boxes inside contact component", ()=>{
    // rendered a component inside JS Dom
    render(<Contact/>);   
    
    //querying
    const inputBoxes = screen.getAllByRole("textbox");
  
    // console.log(inputBoxes);
  
    //Assertion
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});

