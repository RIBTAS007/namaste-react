# Episode 19: Wrapping Up YouTube Project

## Live Chat

- infinite scroll >>> pagination
- live means it is changing dynamically
- their are 2 ways we can do it.

## Challenges of live chat

- to get live data.
- how to update data in UI 
- so every new chat i a div appended in the chat feed.
- so if 20k people comment simultaneously our chat feed div will bloat.
- hence page will freeze.
- Hence we need to UI in an effecient way so that we can get live data and user experience is also not affected.

## Handling live data

- if data is  not live we can simpley call it in useEffect.
- The first way to manage it is using web sockets.
- websocket is like a 2 way connection between frontend and backend.
- It creates a handshake, and we can send data bidirectionally live.
- Second option is API Polling: UI request the server and server sends the data, and after an interval. It is one directional, data will flow from backend to frontend.
- In web socket their is no interval.
- Gmail, whatsapp, cricket match score : API Polling.
- ZErodha: Sock market Apps : Web Socket
- youtube does not show timestamps in chat messages.

## Youtube live chat

- It use API Polling.
- It deletes some messages from the top after few seconds, otherwise the DOM will explode.
- It can also do different config for different browsers and devices.
- Youtube keeps around 239 messages in their live chat.
- for polling we can use setInterval, inside the useeffect.

## API Polling Logic

- we can then set the interval = time after wgich we need to poll the data.
- we also need to call the use effect once  so we will use [].
- we also need to do garbage collection, in which we will clear the interal of setinterval. 
- we are using makeRandomMessage and generateRandomNames to generate random names and messages in our live chat.
- we are using **flex flex-col-reverse** to make the chat appear in reverse , that is coming from bottom and going to top and then we will change the reducer logic so that the new message comes in the bottom.
- We will use **unshift**, it pushes an element in the first instead of using **push**
-  For removing the messages we will be using **Splice** that will keep the length of list as 10 and will remove one message from the top if length becomes > 10.
- then we can create a input to take comment as input and of rthis we can create a form component.
- here we need to do a **prevent event default** otherwise it will rfresh the page.

