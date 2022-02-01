# Render Data

```
.
├── app.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
├── README.MD
├── routes
│   ├── about.js
│   ├── contact.js
│   └── index.js
└── views
```

> set views Folder:

```javascript
app.use("views", express.static(path.join(__dirname, "views")));
```

```javascript
res.render("FILE_NAME", OBJECT);
// second argument must be an OBJECT !!
```

> In .ejs file a special character user to read the data:

```HTML
<%= VARIABLE_NAME%>
<!-- VARIABLE_NAME must be an attripute from sent OBJECT -->
```

> If the variable is an object or array, we must use array/object methods to display the values

```HTML
    <!--ARRAYS-->
    <% VARIABLE_NAME.forEach(item=>{ %>
        <p><%= item%></p>
    <%})%>
    <!--Object-->
    <p><%= VARIABLE_NAME.attr%></p>
    <!--OR-->
    <p><%= VARIABLE_NAME['attr']%></p>
```

> Sometimes it's better to check of VARIABLE_NAME is NOT null

```HTML
<% if(VARIABLE_NAME){ %>
    <p><%= VARIABLE_NAME['attr']%></p>
<%}%>
```

## TASK

1. Create performance get handler

   a. router/performance.js

   b. views/performance.ejs

2. the request (/performance), should show the following:

   a. System Time

   b. Free Memory

   c. All CPUs info

   d. Node version

   e. System Version

> Hint: use os library to get this information
