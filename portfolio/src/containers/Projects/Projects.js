import React from 'react';
import Project from '../../components/Project/Project'
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            name:'Pokedex',
            gif: 'https://media.giphy.com/media/lHnotB9a56dMps20kQ/giphy.gif',
            description: 'My very first front-end build using HTML, CSS, Javascript, jQuery, and AJAX calls from a the PokeApi. Search up your favorite Pokemon and get some stats, or check their Evolution Chain!',
            link: 'https://masonsteeger.github.io/pokedex/'
        },
        {
            id: 2,
            name:'RocketClipz',
            gif: 'https://media.giphy.com/media/8otWLBLmjXAS9huquM/giphy.gif',
            description: 'My first full-stack build using MongoDB, Express.js, EJS, and Node.js. Share some of your best goals or saves from the hit car-soccer game Rocket League!',
            link: 'https://rocketclipz.herokuapp.com/home'
        },
        {
            id: 3,
            name:'GitRecipe',
            gif: 'https://media.giphy.com/media/AuycgALOB7gHRqzE2v/giphy.gif',
            description: 'A recipe sharing app and first full stack group project using MongoDB, Express.js, React, and Node.js. Create and share recipes or search up some tags for some dinner ideas tonight!',
            link: 'https://git-recipez.herokuapp.com/'
        },
        {
            id: 4,
            name:'Jokez',
            gif: 'https://media.giphy.com/media/dA3Z0tnDWN9aAtMBLO/giphy.gif',
            description: 'A joke app and my second group project with PostGres, PHP, React, and MAMP. The app allows a user to create jokes and vote on the site! Careful, because if a joke gets less than -10 votes, it\'s deleted from the database!',
            link: 'https://gitjokez.herokuapp.com/'
        },
        {
            id: 5,
            name:'Twitter +1',
            gif: 'https://media.giphy.com/media/dYxMCOpgfmCJUBUuh2/giphy.gif',
            description: 'Twitter Clone using the PERN stack (and the Bulma CSS framework) with one key change... max characters allowed in a tweet are 281!',
            link: 'https://twitterplusone.herokuapp.com/'
        },

    ]


    return (
    <div className="projects">
        {projects.map( (project) => {
            return <Project 
                key={project.id}
                title={project.name}
                gif={project.gif}
                description={project.description}
                link={project.link}
            />
        })}

    </div>
    );
};

export default Projects;