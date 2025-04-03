import express from "express";

const app = express();
let port;
if (process.env.PORT) {
    port = process.env.PORT;
} else {
    port = 3000;
}

app.listen(3000, () => {
    console.log(`Server running on port 3000....`)
})