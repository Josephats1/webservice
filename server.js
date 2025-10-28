const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//  syntax for require - use parentheses, not curly braces
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});