# javascript-sql-like-operator
Provides a like function that behaves similar to a SQL LIKE operator.

# Usage

The first two parameters are strings to be comapred, then an optional partial match
boolean followed by an optional case sensitive boolean.

Partial match defaults to false and case sensitive defaults to true.

```
var like = require('sql-like-operator')

like.like("hey", "hey")
//result: true

like.like("hey1", "hey")
//result: false

like.like("hey1", "hey", true)
//result: true

like.like("hEy1", "hey", true, false)
//result: true
```