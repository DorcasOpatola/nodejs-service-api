<h1>nodejs-service-api<h1>
<br>

<h3>Instructions on how to run NodeJS service<h3>

> - Install Node.js [here](https://www.nodejs.org) on your local machine.
> 
> - Install dependencies: run "npm install express axios" to install the required dependencies in the project directory.
> 
> - Run the Node.js service: to get the server started, run "node app.js". You should get a reply saying 'Server is listening on port 3000'.
> 
> - Access the API endpoints through the URLs: comments [here](https://jsonplaceholder.typicode.com/comments) & posts [here](https://jsonplaceholder.typicode.com/posts).

- To get a specific number of comments, https://jsonplaceholder.typicode.com/comments?_limit=${limit} where "${limit}"is altered to the number of comments desired.
For example: [https://jsonplaceholder.typicode.com/comments?_limit=6] returns six comments.

- To get a specific number of posts, https://jsonplaceholder.typicode.com/posts?_limit=${limit} where "${limit}" is altered to the number of posts desired.
For example: [https://jsonplaceholder.typicode.com/posts?_limit=4] returns four posts.
