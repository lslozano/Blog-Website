const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis velit eu metus luctus dapibus. Donec et ligula ante. Curabitur eget massa ac felis egestas dictum. Cras cursus aliquam tellus eu sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus risus id magna efficitur lobortis. Morbi malesuada augue at massa luctus, eu dictum ante ultrices. Suspendisse at purus nisi. Duis vestibulum sagittis augue vitae ultricies. Fusce consequat consequat lectus, ut rutrum nibh fringilla imperdiet. Integer egestas mi at mauris fringilla, vitae gravida nisl egestas.";
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis velit eu metus luctus dapibus. Donec et ligula ante. Curabitur eget massa ac felis egestas dictum. Cras cursus aliquam tellus eu sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus risus id magna efficitur lobortis. Morbi malesuada augue at massa luctus, eu dictum ante ultrices. Suspendisse at purus nisi. Duis vestibulum sagittis augue vitae ultricies. Fusce consequat consequat lectus, ut rutrum nibh fringilla imperdiet. Integer egestas mi at mauris fringilla, vitae gravida nisl egestas.";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis velit eu metus luctus dapibus. Donec et ligula ante. Curabitur eget massa ac felis egestas dictum. Cras cursus aliquam tellus eu sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus risus id magna efficitur lobortis. Morbi malesuada augue at massa luctus, eu dictum ante ultrices. Suspendisse at purus nisi. Duis vestibulum sagittis augue vitae ultricies. Fusce consequat consequat lectus, ut rutrum nibh fringilla imperdiet. Integer egestas mi at mauris fringilla, vitae gravida nisl egestas.";
const posts = [];

app.get("/", (req, res) => {
  console.log(posts);
  res.render("home", {homeContent: homeStartingContent});
})

app.get("/about", (req, res) => {
  res.render("about", {aboutContent: aboutContent});
})

app.get("/contact", (req, res) => {
  res.render("contact", {contactContent: contactContent});
})

app.get("/compose", (req, res) => {
  res.render("compose");
})

app.post("/compose", (req, res) => {
  const post = {
    postTitle: req.body.postTitle,
    postContent: req.body.postContent
  }

  posts.push(post);
  res.redirect("/")
})

app.listen(3000, () => console.log("Server listening on port 3000"));