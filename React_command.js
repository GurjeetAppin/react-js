/************ ReactJs Enviorment up with Windows ************/
/* 
1. Install NodeJs and NPM.
Ans :- 1. Install nodeJs
2. VS code editor.
3. Install CRA ( Create React App ) app. 
Ans :- npx create-react-app project_name (blog).
4. Interview question.

Steps to install and used the ReactJs App.
1. Install nodeJs
2. Check the version of nodeJs in command line :- node -v
3. Check the NPM version :- npm -v
4. Make a folder using cmd :- makedir folder_name (react-tut)
5. Goto the react-tut folder using cmd :- cd react-tut
6. Check the npx in the cmd :- npx -v (This is install with the nodeJs)
7. Create a react project using cmd :- npx create-react-app project_name (blog)
8. Goto the blog folder and open inside the Visual studion using cmd :- code .
9. Start the react project with cmd :- npm start
Url :- http://127.0.0.1:5500/index.html
After that react project :- 
Url :-  Local:            http://localhost:3000
        On Your Network:  http://192.168.42.245:3000

*/

/************ ReactJs write First code ***********/
/* 
1. Write first code.
Ans :-  When you write a first. you will write first code in the app.js file.
        First file is load in the react is index.js file.
2. Make a new file.
Ans :- Create a first file inside the src folder. first letter of file always is capital.
        Users.js.
3. Interview question.
Q :- Alternative of NPM?
Ans :- Yarn is alternative of NPM. Yarn is a product of facebook.
Q :- Current version of ReactJs?
Ans :- Using CMD command check the version of ReactJS :- npm view react version
        In side the package.js file you will check the current version of ReactJs.
*/

/************ ReactJs App Structured ( start from 35 minute) ***********/
/* 
1. Understand File use and structure.
Ans :-  1. App.css :- File is basically used for styling.
        2. App.js :- We have start write from App.js file.
        3. App.test.js :- In this write the unit test cases. For example :- Developer write unit test case. Developer run the test case using CMD. The load of testing team is less and We know the where is some Bug inside the app.
                          This is a advanced level thinks.
        4. Index.css :- File is basically used for styling. You have make one or more file for styling.
        5. Index.js :- This is file is enter point of ReactJs.
        6. reportWebVitals.js :- This file is get the report of application performance. This file embbed inside the index.js file.
        7. setupTests.js :- All test case of App.test.js file is setup start from setupTests.js file.

2. Understand Folder use and structure.
Ans :-  1. Public folder :- Public folder stored the details of HTML related that not related with ReactJs 
        For example :- Favicon.ioc, index.html. All the work of ReactJs run inside the index.html file div. <div id="root"></div>
        2. Inside the (src) folder we have worked of ReactJs related.
        3. manifest.json :- manifest.json also called meta file. This is stored the some icon or display color theme etc.
                            This used when developed the basic level app (Prograsive app).
        4. robots.txt :- Protect form google serach engine.
        5. node_module :- All the package are stored inside this folder. All package code are avaliable inside this folder.
        6. build :- This folder is created when we make a build.
3. Interview question.
Q :- Most important file inside ReactJs?
Ans :- Package.json file is most important file.
Q :- Why we not push the node_module folder in Git?
Ans :- Because it's too heavy and include the node_module it's very have for git repository. 
Q :- How get the node_module when the other developer is working on the project?
Ans :- npm install :- This command is install all the node_module inside the reactjs project. If we have already installed it's check the modules.

*/

/************* Package.json file in Details ************/
/* 
1. What is package.json file.
Ans :- Package.json file is most important file. It's stored all the details of projects.
2. How to add new NPM package.
Ans :- find the react npm package. Using the command line and past the package install command.
        like :- npm i react-validation
        Second method to install the package :- Goto npm package >> version >> open the version and copy and past inside the 
        package.json file after that run the npm install command. Package are installed automatically.
3. Remove NPM package.
Ans :-  1. npm uninstall package_name
        2. Remove the package form package.json file and npm install
4. Custom commands.
Q :- Suppose npm is start. But we don't start npm with start. I want to start npm with other name?
Ans :- Goto package.json file >> "start": "react-scripts start", and replace the "start" with custom_name.
        After that goto CMD and run the this command :- npm run gurjeet (custome_name)

4. Inteview question
Q :- How many type of component in ReactJs?
Ans :- 
*/

/************* Component in ReactJS ************/
/* 
1. What is component.
Ans :-  Peace of code that can reuse. such as function. but more powerful than function. Because his own lifecyle, state, props, own html.
        Example :- Header and footer.
2. Types of component.
Ans :- There is basicaly two types of components.
        1. Functional component
        2. Class component.
        Some other component :-
        1. HOC (High order component)
        2. Pure component.
        3. Controlled component.
        4. Uncontrolled component.
3. Example of component.
Ans :- We don't need a different file for create component.
        Example :- User.js file
        // Functional Component
        function User(){
        return <h1>User component</h1>
        }

        // export the component with export default component_name. This is standarad way to export
        //export default User;

        // Second way to export. Use the export before the function.
        // export function User(){
        //         return <h1>User component</h1>
        //     }
        // Inside the file where you want to import used the : import {component_name} from './User'
        // import {User} from './User'
        App.js file
        // import User from './User';   
        // import {User} from './User';  
4. Interview question.
Q :- Can we used the component inside the another component?
Ans :- 
*/

1