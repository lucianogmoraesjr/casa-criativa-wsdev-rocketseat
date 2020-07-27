//express used to configure server
const express = require("express");
const server = express();


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729077.svg",
        title: "Receitas",
        category: "Culinária",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    }
]


//configure static files
server.use(express.static("public"));

//configure nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true
})

//route / created
server.get("/", function(req, res){

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];

    for(let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea);
        }
    }

    return res.render("index.html", {ideas: lastIdeas});
});

server.get("/ideas", function(req, res){

    const reversedIdeas = [...ideas].reverse();

    return res.render("ideas.html", {ideas: reversedIdeas});
})

//active server port 3000
server.listen(3000);