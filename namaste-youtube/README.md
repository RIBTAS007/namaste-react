# Episode 18: Advanced Features In YouTube Project

## Higher Order Components

- A function that takes a component and reaturns a new component.
- for eg: if you need to add a border to some of the videos then you can pass those components into high order components and add a border to it.

## Debouncing

- on each and every key press on the search bar youtub emakes an API call and show us the suggestions.
- like for the word "flag" we will wake 4 API calls, f , fl, fla, flag
- but if you time very fast then the API calls will be less.
- flipkart makes API calls after skipping some keystrokes.
- This concept is known as **debouncing**.
- if you are typing very fast then the difference between the keystrokes is very less.
    - typing slow: 200ms
    - typing fast: 30ms
- It makes an impact in performance
    - 14 letter * 1000 people = 14000 API calls
    - with debouncing: 3 API calls * 1000 people = 3000 API calls
- they show the recommedations to give a better user experience.
- Debouncing with 200 ms
    - if difference between 2 key strokes is <20ms - DECLINE API CALL
    - > 200ms make an API

## Binding the input with state variable

- const [searchQuery, setSearchQuery]=useState('');
- <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />

## make api call for search query

- inside an useffect make an API call after every key press but if the difference between 2 api calls i less than 200ms decline the API call.
- For implementing this you need to understand how react reconcilation works

- key - i
    - render the component
    - useEffect() is called
    - start timer => make API call after 200 ms

- key - ip
    - it destroys the component and it calls the useEffect return method
    - the return method of the useEffect is called during the unmounting cycle.
    - re renders the component
    - useEffect()
    - a new timer is created => make an API call after 200ms

## optimize api call

- now once we say type "abcd" it makes API call, this we know now how to do.
- but say the user clicks on backspace and text becomes ab, then it should not make search suggestions API call.
- for doing this we will create a cache in redux.
- it will have a variable that will store the search results in key value pair i.e. object, i.e. a map.
- we are using map because its TC for search will be O(1).

## N level nested comments

- Here the replies will again be a list of comments.
- so we can do recrusion and call the commentList component inside commentList Component.
