# DoveBox

![DoveBox](http://res.cloudinary.com/df9oqycdp/image/upload/v1513893095/Screen_Shot_2017-12-21_at_1.51.13_PM_okmkb9.png "DoveBox")

## Instructions to run on your local machine: 

1) Create a new folder on your computer. Clone the repository into this folder: `git clone https://github.com/rachelmoore/DoveBox.git`
2) Change directories into DoveBox which should now be inside the folder you use to make the clone.
3) Run `npm install` to install MCUI json-server and API. 
4) Run `npm install babel-preset-es2015 babel-preset-stage-2 react-modal react-redux` to add some additional libraries I used that mysteriously were lost from my configuration. 🙃
5) Run `webpack --watch` to create the bundle file. 
6) In a different terminal window (but staying in the Dovebox directory), run `npm start`. 
7) Open up a browser window and type http://localhost:3000/ in the address field. You should see DoveBox on the screen. 
