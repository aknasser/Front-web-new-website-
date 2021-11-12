import './App.css';
import  React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  // Necessary to use the router with React
import Approche from './components/Approche';
import Article from './components/Article';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Form from './components/Form';
import HomePage from './components/HomePage';
import Humain from './components/Humain';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import axios from 'axios';




const projectsReducer = (state, action) => {
  switch(action.type) {
    case "PROJECT_FETCH_START":
      return {
        ...state,
        isLoading : true,
        isError : false
      };
    case "PROJECT_FETCH_SUCCESS":
      return {
        ...state,
        isLoading : false,
        isError: false,
        data : action.payload
      };
    case "PROJECT_FETCH_ERROR":
      return {
        ...state,
        isLoading : false,
        isError : true
      };
    default :
      throw new Error();


  }
}




function App() {


// REDUCER PROJECTS
  const [projectList, dispatchProjectList] = React.useReducer(
    projectsReducer,                                    // REDUCER
    {data: [], isLoading : false, isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
  );


     React.useEffect(() => {
        const projectMgmt = async() => {
          try {
            dispatchProjectList({type: "PROJECT_FETCH_START"});
  
          
            const allProjects = await axios.get("http://localhost:1993/project", { crossdomain: true })
            dispatchProjectList({
              type: "PROJECT_FETCH_SUCCESS",
              payload : allProjects.data,
            });
              
          } catch {
            dispatchProjectList ({
              type: "PROJECT_FETCH_ERROR"
            })
          }
        }

      projectMgmt();
    }, []);
  


  return (
    <Router>
      <div className ="App">
       <NavBar />
        <div className ="content">
        <Switch>
            <Route exact path="/">                      {/* exact path nous permet d'indiquer à React de charger cette page uniquement le page corespond exactement. Cela nous permet d'éviter de charger la homePage partout  */ }
              <HomePage/>
            </Route>
            <Route path="/approche">
              <Approche/>
            </Route>
            <Route path="/article">
              <Article/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/contact">
              <Form/>
            </Route>
            <Route path="/who">
              <Humain/>
            </Route>
            <Route path="/projectsList">
              {projectList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
              {projectList.isLoading ? (
                <p> Chargement...</p>
              ) : (
                <ProjectList projets={projectList.data}/>
              )}
            </Route>
            <Route path="/project">
              <Project/>
            </Route>
        </Switch> 
        </div>
{        <Footer/>}
      </div>
    </Router>
  );
}

export default App;
