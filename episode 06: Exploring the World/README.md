# Episode 06: Exploring the World

## Monolith and microservice architecture

- In the same project we have all the code like API files, UI files, DB etc. then its monolith architecture.
- the world is moving towards microservice architecture.
- the project is divided into seperate services to handle different tasks like BE, UI, AUth, DB etc. This is called microservice architecture.
- This is called **seperation of concern**, every service is independent.
- These services need to interact with each other to coordinate.
- Our react project is a UI microservice. 
- The advantage of microservice is we can use any lanaguage to code any microservice, like frontend in react, backend in django, DB in sql etc.
- In monolith architecture the whole app uses one fixed techstack.
- All big companies uses multiple techstacks depending on the requirements and services.

## Connecting microservices

- Every service runs on their own ports. Like our UI is running on port:1234.
- Similarly we can have backend on other port, SMS on other port etc.
- All these ports are then mapped to a domain name.
  - /    :1234 UI
  - /api :1000 BE
  - /sms :3000 SMS
- The services interact with each other by calling these URLs.
- We will see how a react application talks to different services 

## Approach to fetch data

- earlier we used hardcoded data to create restaurant cards.
- now we will make it dynamic.
- Their are 2 approaches to do this:
  1. Page loads -> API Call -> Render UI
  2. Page loads -> Render UI -> API Call -> Rerender UI
- In react we will always be using the second approach since it gives us better UX.
- In first approach when API call is done, until we get the data from API our screen will be froze, which will give a poor user experience.
- render cycles are very fast, so its okay to go for two renders. 

## UseEffect

- we use it when we want to take some actions based on certain condition.
- it takes 2 arguments, 
   1. callback function: `()=>{}`
   2. Dependency array: `[]`
- The callback function is called after the component renders.
- eg: 
-  ```
   const Comp = () => {
   useEffect(()=>{
      console.log("useEffect renders");
   }, []);
   console.log("component renders");
   return(<></>);
   };

   Output:
   component renders
   useEffect renders
   ```

## Fetching data using use Effect

- fetch() is a method provided by browser API, its a superpower that JS Engine has.
- once fetch is done we can use then to resolve the promise or we can use async await.
- Its better to use async await.
- The convert it to json.
- If we do the above steps we will get the `CORS Policy` error.
- Our browsers block us to call the API from one origin to other origin i.e. from swiggy API to localhost.
- We can use the CORS enable extension to resolve it.
- **Tip:** Always use optional chaining when fetching data.

## Loader

- When we are fetching from the API , at that phase the sreen is shown empty.
- One way to resolve it is to show a loader, but its not a optiomal option.
- Their is a concept known as Shimmer UI. We load a fake page, until real data is updated.
- Page loads -> render shimmer UI -> API call -> rerender.
- This is also called **conditional rendering**

## Why we use UseState ?

- Implement a login logout button.
- whenever state variable changes, react starts the reconcialition process and rerenders the component, which doesnt happen when we use normal variables.
- how is constant variable is assigned a new variable ?
- it doesnt assign, it deletes the old var and creates a new variable when it renders the component.

## Taking inputs


- ```
   const [searchText, setSearchText] = useState('');
   <input type="text" className="search-box" value={searchText}/>
               <button onClick={()=>{
               setSearchText()
               }}>Search</button>
   ```
- if we do like this , the input will not display anything.
- we have bind the serachText variable with the value and the value is binded with the input element.
- when I am changing the value by typing in the input the value is not changing since it is binded with the searchText variable.
- Hence we need to change the searchText var, for this we will use the onChange() function.
- ``` 
   <input   
      type="text" 
      className="search-box" 
      value={searchText}
      onChange={(e)=>{
         setSearchText(e.target.value);
         }}
   />
   ```
- Hence our component is getting rerendered, whenever we are doing a key press, since the state variable searchtext is getting updated.

## Filter concept

- whenever we are filtering never update the orignal varaibale.
- store the filtered result in a new state variable and use that state variable to display the result.
- ```
  <button onClick={()=>{
         const filteredRestaurant = listOfRestaurant?.filter(
             (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
         );
         setFilteredRestaurant(filteredRestaurant);
   }}>
      Search
   </button>
  ```
