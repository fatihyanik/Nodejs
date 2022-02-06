# Request Data

## GET Request


```javascript
router.get('route/:param', (req, res)=>{
    // any thing after domain/route/any_thing will be readed as param
    req.params['param'] /*or*/req.params.param
})
```

> To make a GET request we can use url area from browser like: domain/home, or in Form tag in HTML using method="GET"

```HTML
    <form action="/" method="GET"></form>
```

> GET request can contains params or query:

``` domain/home?name=any ``` (?) means a query sent from browser 

``` domain/home?name=any&val=any ``` two quaries splited with (&)


> to read query from express:

```javascript
router.get('/home', (req, res)=>{
    console.log(req.query)
    // req.query an object of all queries 
    // if we send: domain/home?name=any&val=any
    /* then req.query will:
        {name: "any", val: "any"}
    */
})
```

> Manually from browser we can just type in url area ``` domain/home?name=any&val=any ```
or in form HTML:

```HTML
    <form action="/home" method="GET">
        <input type="text" name="name" />
        <input type="text" name="val" />
        <input type="submit" value="SEND" />
    </form>
```

> Usualy sending GET request using forms is used in search controls, so that it's ok when the data appear in url area, but not in sensetive data like usernames, passwords, so it's better to use POST method.

## POST Request

> To send a POST requset from Browser using form tag and method attribute to be POST like the following:

```HTML
<form action="/somepage" method="POST"></form>
```

> The data which are sent to server using POST method will not appear in URL like in GET method. <br>
And Like GET method we have to set "name" attribute for each input inside the form.<br>
Example:<br>
```HTML
<form action="/somepage" method="POST">
    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <input type="submit" value="Submit">
</form>
```
> To read this data in Server Side, we have to use ``` express.json() ``` as a middleware to parse the incoming object
```javascript
app.use(express.json())
app.use(express.urlencoded({extended: false}))
/*The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
Defaults to true, but using the default has been deprecated. Please research into the difference between qs and querystring and choose the appropriate setting.
Defaults to true, but using the default has been deprecated.
*/
```
> Read more about [query string "qs"](https://www.npmjs.com/package/qs#readme) librery.

> Not: in GET, DELETE methods yo don't have to use ``` express.json(), express.urlencoded() ```

> To read POST request data fron express:
```javascript
router.post('/someRoute', (req, res)=>{
    console.log(req.body)
    /* req.body is an object of all incoming data from POST request, 
        the name attribute in each input is a key, and the value is the value from this input
        req.body = {
            first_name: "the first_name input value",
            last_name: "the last_name input value"
        }
        sure if we have more inputs, will be sent as each input name attribute will be as key for req.body object.
    */
})
```

> then after processing the POST request, you may looking for some matching data or add a new item in file ore in database, you have to send response to the client, or redirect
```javascript
// sending response as json
res.json({success: "true"})
// or sending response as HTML rendered file
res.render('renderFile', {})
// or redirect to some route
res.redirect('/someRoute')
```

> We can send POST requests not only from browsers, but olso from any program/application like Postman or from another server.