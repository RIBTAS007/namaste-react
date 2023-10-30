import sum from "../sum";

test("Sum function should calculate the sum of two numbers", ()=>{
 const res = sum(3,4);

 //Assertion
 expect(res).toBe(7);
});

// - description the test as String
// - callback function that writes the test.
// - Assertion: expect(res).toBe(7);
