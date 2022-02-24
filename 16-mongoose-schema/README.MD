# Schema

## First Step:
1. Connect to your mongo database (local/atlas) bookstore
2. create users schema collection/table should contains:
    1. name: String
    2. email: String
    3. password: String
    4. age: Number
    5. active: boolean

## Schema Structure:
```javascript
const my_schema = new Schema({
    attr1: {type: TYPE, required: true/false},
},{collection_name: "MY_COLLECTION"})
// required by default is false
```

## Schema Validators
1. Strings:
    1. maxLength, minLength
```javascript
email: {
        type: String,
        required: true,
        minlength: [10, `Email  required 10 at lest`],
        maxlength: [50, "Email must be less than 50 characters"]
    },
```
2. Numbers:
```javascript
age: {
        type: Number,
        required: true,
        min: [18, 'Your error message'],
        max: [50, 'your error message']
    },
```
3. Custom Validator
```javascript
age: {
        type: Number,
        required: true,
        min: [18, 'must be more than 18'],
        max: [50, 'must be less than 50'],
        // custom validator even numbers only
        validate: {
            validator: n=>{
                if(n%2 === 0){
                    return true
                }else{
                    return false
                }
            },
            message: 'Age must be even only!'
        }
    },
```

3. nested object in schema
```javascript
const mySchema = new Schema({
    name: {type: String, required: true},
    nested: {
        atter1: {type: ANY, .....},
        atter2: {type: ANY, .....},
        ....
        ....
        ....
    }
}, {OPTIONS})
```
