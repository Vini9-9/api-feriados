import StartUp from "./startUp";

let port = process.env.PORT || '3050';

StartUp.app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})