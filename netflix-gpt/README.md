# Episode 16: NetflixGPT Wrapping Up

## Integrate GPT API into page

- we will mak a gpt recomendation system using GPT
- we will use GPT APIs
- create a toggle functionality for GPT search bar
- made the multi language optionality in gpt search
- always remember to add a `e.preventDefault` when writing a form.

## make a gpt serach button

- when we click on search button we will add a toggle functionality.
- when clicked it will show us a toggle serach bar
- we will make a redux variable to store the toggle search bar and name the slice as gptSlice.
- we will use dispatch() to call the reducer that calls the toggle function.
- when we want to access the variable we will use the UseSelector hook.

## make search bar

- make sure the bg and all other constant links are stored in utils.
- we can make multi language website also.
- for this just create a language constant file and write the constant for each language you want.
- then use that variable in GPT search bar.
- then we can create a dropdown button using which we can select the language.
- then we can create a supported_languages variable in which we can add a key value pairs of different languages.
- iterate the supported_language to select options from the langauge dropdown and pass the respective value and display the corresponding language in Ui with help of redux variable stored in configSlice.
- use `lang[langKey].gptSearchPlaceHolder` to access the values of corresponding keys.

## Open AI

- go to `platform.openai.com`
- try to find openAI keys section `https://platform.openai.com/api-keys`
- create a secret key and store it somewhere
- chatgpt APIs are not free.
- install npm openai package that will help us to run the chatgpt api, write `npm install --save openai`
- once chtgpt is setup we need to setup gpt queries


## It looks like you're running in a browser-like environment.

- we are calling this api from frontend(client side) instead of backend so our API key can be leaked.
- to fix this error we need to add ` dangerouslyAllowBrowser: true,`
- for each movie we will search the TMDB API
- you can create env file to store the secret and confidential info.

## fetching results from getmovies API

- so once we click on search bar and search for some movies we will get a promise from the api.
- we will then resolve the promise with help of promise.all and will get the results.
- Once we get the results we will pus those results into our redux store inside gpt slice.

## Memoization

- added to all types of movies hooks.























