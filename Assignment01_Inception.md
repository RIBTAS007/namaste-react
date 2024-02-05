# Assignment 01: Inception

## What is Emmet ?

- Emmet is a toolkit for web developers that greatly enhances HTML and CSS coding productivity. 
- It allows you to write HTML and CSS code faster by using abbreviations and shortcuts that expand into well-formed code. 
- Originally known as Zen Coding, Emmet supports a wide range of integrated development environments (IDEs) and text editors.
- For example, typing `html:5` and hitting enter will generate a boilerplate code for HTML5.

## Difference between a Library and a framework ?

The terms "library" and "framework" are often used in the context of software development, and while they share some similarities, they have distinct differences:

1. **Control Flow:**
   - **Library:** A library is a collection of pre-written code that you can use in your program. It typically consists of functions, procedures, and classes that you can call to perform specific tasks. However, the overall control flow of your program remains in your hands.
   - **Framework:** A framework, on the other hand, provides a more structured architecture and dictates the flow of control in your application. In a framework, you often write code that fits into the framework's structure, and the framework manages the flow of control.

2. **Inversion of Control (IoC):**
   - **Library:** When using a library, you have more control over the flow of your application. Your code decides when and how to call the library functions.
   - **Framework:** Frameworks often follow the principle of Inversion of Control (IoC), meaning the framework controls the flow of the application. Your code is called by the framework at specific points rather than you explicitly calling the framework.

3. **Flexibility:**
   - **Library:** Libraries are generally more flexible since you can choose which components to use and how to integrate them into your application.
   - **Framework:** Frameworks provide a more opinionated structure, and while this can make development faster, it may also limit flexibility as you need to adhere to the framework's conventions.

4. **Size and Scope:**
   - **Library:** Libraries are typically smaller in scope and focus on specific tasks or functionalities. You can use multiple libraries together in a single project.
   - **Framework:** Frameworks are more comprehensive and provide a larger set of tools, often covering multiple aspects of application development, such as handling HTTP requests, database interactions, and more.

5. **Example:**
   - **Library:** jQuery is an example of a JavaScript library. It provides functions for tasks like DOM manipulation and AJAX requests.
   - **Framework:** Django (for Python) and Ruby on Rails are examples of web development frameworks. They include tools and conventions for building web applications.

In summary, while both libraries and frameworks are tools that help developers build applications more efficiently, the key distinction lies in the level of control and structure they impose on your code. 

**Libraries are more about providing reusable components, while frameworks provide a broader structure and dictate the flow of your application.**

## What is CDN , why do we use it ?

CDN stands for Content Delivery Network. 

It is a network of distributed servers strategically located across the globe to deliver web content, such as images, stylesheets, scripts, and other resources, to users more efficiently. 

The primary purpose of using a CDN is to improve the performance, reliability, and availability of web applications and websites.

Here are the key reasons why CDNs are used:

1. **Faster Content Delivery:**
   - CDNs reduce latency by serving content from servers that are geographically closer to the end-users. When a user requests a resource, the CDN delivers it from the nearest server, resulting in faster loading times.

2. **Load Distribution:**
   - CDNs distribute the load across multiple servers, preventing any single server from becoming overloaded with traffic. This helps to ensure consistent performance, especially during traffic spikes or heavy usage periods.

3. **Scalability:**
   - CDNs can scale easily to handle increased traffic and demand. This is important for websites and applications that experience varying levels of traffic throughout the day or during specific events.

4. **Reliability and Redundancy:**
   - CDNs provide redundancy and reliability by replicating content across multiple servers. If one server fails or experiences issues, the CDN can automatically reroute traffic to another available server, minimizing downtime.

5. **Bandwidth Savings:**
   - CDNs reduce the burden on the origin server by caching and delivering static content locally. This helps to save bandwidth on the origin server and reduces the overall server load.

6. **Security:**
   - CDNs often include security features, such as DDoS (Distributed Denial of Service) protection, SSL/TLS support, and other security measures. This helps to mitigate potential threats and enhance the overall security of web applications.

7. **Global Reach:**
   - With servers distributed worldwide, CDNs provide a global reach. This is particularly beneficial for websites and applications that cater to a global audience, ensuring that users from different regions experience fast and reliable access.

8. **Content Optimization:**
   - CDNs can optimize content for delivery, including compressing images, minifying scripts and stylesheets, and leveraging techniques like browser caching. This leads to improved performance and a better user experience.

Popular CDN providers include Akamai, Cloudflare, Amazon CloudFront, and others. Many websites and applications leverage CDNs to enhance their overall performance, reduce latency, and provide a more seamless experience for users regardless of their geographic location.

## Why is React known as react ?

React, a JavaScript library for building user interfaces, was developed by Facebook. It was open-sourced in 2013, and the name "React" reflects the library's primary focus on efficiently updating and rendering user interfaces in response to changes in data.

The name "React" implies the reactive nature of the framework, where the user interface reacts dynamically to changes in the application's state. React introduces a component-based architecture, allowing developers to build UIs by composing reusable and modular components. When the underlying data changes, React efficiently updates only the necessary components, which contributes to a more responsive and interactive user experience.

In summary, React is named for its emphasis on reactive programming, where the UI reacts to changes in the application state.

## What is cross origin in script tag ?

In web development, the same-origin policy is a security feature implemented by web browsers to prevent a web page from making requests to a different domain than the one that served the web page. This policy helps protect users from potential security threats, such as cross-site request forgery (CSRF) and cross-site scripting (XSS) attacks.

When you include a script tag in an HTML document to load an external script, such as a JavaScript file, the browser enforces the same-origin policy. If the script source (i.e., the URL specified in the `src` attribute of the script tag) is from a different origin (domain, protocol, or port) than the one that served the HTML page, the browser will block the script from being loaded. This restriction is known as a "cross-origin" or "cross-origin resource sharing" (CORS) limitation.

To handle cross-origin requests, the server should include appropriate CORS headers in its response to explicitly allow the browser to load and execute the script from a different origin. The CORS headers indicate which origins are permitted to access the resource and what types of requests are allowed.

Here's an example of how you might encounter a cross-origin issue in a script tag:

```html
<!-- This script tag will be blocked if the server doesn't include proper CORS headers -->
<script src="https://example.com/external-script.js"></script>
```

In the above example, if the script at "https://example.com/external-script.js" does not include the necessary CORS headers, the browser will block the script from loading due to cross-origin restrictions.

## what is the difference between react and react DOM ?

React and ReactDOM are two related but distinct packages in the React ecosystem:

1. **React:**
   - **Purpose:** The core React library is focused on providing the functionality for building user interfaces with a component-based architecture.
   - **Environment:** React can be used not only for web development but also for other platforms, such as mobile app development using React Native or virtual reality applications using React 360.
   - **Usage:** You write your components using React, which includes the virtual DOM, JSX syntax, and the core concepts like state and props.

2. **ReactDOM:**
   - **Purpose:** ReactDOM is a package specifically designed for web development. It provides the necessary tools to render React components in the browser.
   - **Environment:** ReactDOM is used in web applications to interact with the actual DOM (Document Object Model). It bridges the gap between the virtual DOM managed by React and the real DOM that the browser understands.
   - **Usage:** When you want to render a React component in a web page, you use ReactDOM. It includes methods like `ReactDOM.render()` to mount your React component into a specific HTML element in the DOM.

In summary, React is the core library for building user interfaces, and it is platform-agnostic. ReactDOM, on the other hand, is a package that specifically handles the interaction between React and the DOM when building web applications. If you're working on a web project, you'll typically use both React and ReactDOM together to create and render your UI components.

- What is the difference between react.development.js and react.production.js files via CDN ?

When you include React via a CDN (Content Delivery Network), you may notice that there are different versions of the library for development and production. The primary distinction between `react.development.js` and `react.production.js` lies in the optimizations applied to each version:

1. **react.development.js:**
   - **Development Version:**
     - Unminified and human-readable code.
     - Includes additional warnings and debugging information.
     - Larger file size, which aids in debugging and provides clearer error messages.
     - Suitable for development environments where debugging and detailed warnings are valuable.

   Example CDN link for development:
   ```html
   <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
   ```

2. **react.production.js:**
   - **Production Version:**
     - Minified and optimized for performance.
     - Warnings and debugging information are stripped out, resulting in a smaller file size.
     - Suitable for deployment in production environments where minimizing file size and optimizing performance are crucial.

   Example CDN link for production:
   ```html
   <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
   ```

When deploying a React application to production, it is recommended to use the production version to reduce the size of the JavaScript bundle and improve the performance of your application. The development version, with its additional warnings and debugging features, is more appropriate for the development phase where you may need more information to identify and fix issues.

Remember to use the development version during development and switch to the production version for deployment to ensure optimal performance and a smaller payload for end-users.

## What is async and defer ?

- when we load a webpage 2 things happen: html parsing + loading of the script
- when loading of script tags happen: fetching the script + executing the script line by line
- async | defer | using a script tag : these are the 3 possible ways to write a script.
1. In normal async 
   a. first the HTML Parsing begins.
   b. when a script tag is encountered the HTML parsing is stopped and the script fetching starts.
   c. After script fetching, the script execution takes place.
   d. After the script execution is finished, the HTML parsing starts again and continues.
   e. Parsing -> fetch script -> execute script -> Parsing
2. In Aysnc Case
   a. first the HTML Parsing begins.
   b. when a script tag is encountered the HTML parsing continues and the script fetching starts in parallel.
   c. After script fetching, HTML parsing is stopped and the script execution takes place.
   d. After the script execution is finished, the HTML parsing starts again and continues.
   e. Parsing -> Parsing + fetch script -> execute script -> Parsing
3. In Defer Case
   a. first the HTML Parsing begins
   b. when a script tag is encountered the HTML parsing continues and the script fetching starts in parallel.
   c. the script execution starts after the HTML parsing is completed.
   d. Parsing -> Parsing + fetch script both complete -> execute script
- Using an async attribues does not gaurantee the order of executing the scripts.
- If you want to use external script then we can use async script.

## What are arrow functions ?

Arrow functions do not bind their own `this` value. Instead, they inherit `this` from the enclosing scope. This behavior is different from traditional functions, which have their own `this` value.

```JS
function TraditionalFunction() {
    this.value = 1;

    setTimeout(function() {
        this.value++;
        console.log(this.value); // undefined (not what you might expect)
    }, 1000);
}

function ArrowFunction() {
    this.value = 1;

    setTimeout(() => {
        this.value++;
        console.log(this.value); // 2 (inherits `this` from the surrounding scope)
    }, 1000);
}

new TraditionalFunction(); // Logs "NaN"
new ArrowFunction();       // Logs "2"
```