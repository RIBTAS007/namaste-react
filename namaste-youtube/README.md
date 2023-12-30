# Episode 17: Machine Coding Interview and Building YouTube

## How would you develop youtube ?

- Requirements clarification
    - features that we are going to develop
    - for eg: we see the homepage, video list, side nav bar , shimmer etc are present on youtube.
    - we need to discuss what features we want to build

- Discuss the tech stack
    - we can tell the interviewer,  we will use react + tailwind to customize our application.
    - typescript or JS
    - redux for data management or context API
    - Tailwind for designing
    - basically tell about the proper justification on why you will use it.
    - react router dom for routing
    - bundler
    - testing library like jest
    - storege etc.
    - spend 5 mins to discuss it.

- most of the interviwer will allow doing google search but if you are prepared you wont need google search.

- spend next 5 mins in planning things.
    - discus your approach
    - header with hamburger icon to open the sidepanel
    - side nav bar
    - youtube logo icon on top corner
    - user logo icon
    - video list
    - button list
    - videos to render
    - new page when we click on a video from the list.

- we can also discuss about components and file distribution

## Setup the app and Tailwind

- start with `npx create-react-app` : we are executing package that will give us the react app and we will give a name to it.
- we will execute `npm run start` to start the app.
- you can explain the folder structure
- remve everything from app.js and install tailwind using `npm i -D tailwindcss`
- we wont need postcss over here because create react app takes care of it.
- we need to create a config file for tailwind using `npx tailwindcss init`
- after this configure app.css for tailwind.
- now run the app and see if tailwind is working properly or not.

## 
