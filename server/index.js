const app = require("./app");
const { AuthRouter } = require('./routes')

const port = app.get('port');

app.use(AuthRouter);

app.listen(port,()=>{
    console.log(`App is live on http://localhost:${port}`);
})