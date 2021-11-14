const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello world!!! I am coming soon, Be prepared for the storm!")
});

const users = [
    { id: 1, name: "aa", job: "aaaa", phone: 22, email: "zzz" },
    { id: 2, name: "bb", job: "bbbb", phone: 22, email: "zzz" },
    { id: 3, name: "cc", job: "cccc", phone: 22, email: "zzz" },
    { id: 4, name: "dd", job: "dddd", phone: 22, email: "zzz" },
    { id: 7, name: "ee", job: "eeee", phone: 22, email: "zzz" },
]
app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else
        res.send(users)
})

app.post("/users", (req, res) => {
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log("hit it freak" ,req.body);
    // res.send("hit")
    res.json(newUser)
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    // console.log(req.params.id);
})

app.get("/")

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})