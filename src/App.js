import './App.css';
import * as React from 'react';
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
import AdminMainPage from './components/AdminMainPage';
import CategorieMenu from './components/CategorieMenu';
import ReadProspect from './components/ReadProspect';



const categories = ["prospect", "article", "project", "inspiration"]; 
// On passe cette variable dans le component AdminMainPage pour récupérer les noms des categories



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

const articlesReducer = (state, action) => {
  switch(action.type) {
    case "ARTICLE_FETCH_START":
      return {
        ...state,
        isLoading : true,
        isError : false
      };
    case "ARTICLE_FETCH_SUCCESS":
      return {
        ...state,
        isLoading : false,
        isError: false,
        data : action.payload
      };
    case "ARTICLE_FETCH_ERROR":
      return {
        ...state,
        isLoading : false,
        isError : true
      };
    default :
      throw new Error();


  }
}


const prospectReducer = (state, action) => {
  switch(action.type) {
    case "PROSPECT_FETCH_START":
      return {
        ...state,
        isLoading : true,
        isError : false
      };
    case "PROSPECT_FETCH_SUCCESS":
      return {
        ...state,
        isLoading : false,
        isError: false,
        data : action.payload
      };
    case "PROSPECT_FETCH_ERROR":
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
  

// REDUCER MENU BLOG

    const [articlesList, dispatchArticles] = React.useReducer(
      articlesReducer,
      {data: [], isLoading : false, isError :false}
    )


    React.useEffect( () => {
      const articleManagement = async() => {
        try {
          dispatchArticles({type :"ARTICLE_FETCH_START"})

          const allArticles = await axios.get("http://localhost:1993/blog", { crossdomain: true })
          await console.log(allArticles);
          dispatchArticles({
            type : "ARTICLE_FETCH_SUCCESS",
            payload : allArticles.data,
          });

        } catch {
          dispatchArticles({type: "ARTICLE_FETCH_ERROR"})
        }

      }
      articleManagement();
  
    }, [])

// REDUCER PROSPECTS



  const [prospectsList, dispatchProspect] = React.useReducer(
    prospectReducer,
    {data : [], isLoading : false, isError: false}
  )

  React.useEffect( () => {
    const articleManagement = async() => {
      try {
        dispatchProspect({type :"PROSPECT_FETCH_START"})

        const allProspects = await axios.get("http://localhost:1993/prospect", { crossdomain: true })
        await console.log(allProspects);
        dispatchProspect({
          type : "PROSPECT_FETCH_SUCCESS",
          payload : allProspects.data,
        });

      } catch {
        dispatchProspect({type: "PROSPECT_FETCH_ERROR"})
      }

    }
    articleManagement();

  }, [])




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
            <Route path="/article/:id">
              <Article />
            </Route>
            <Route path="/blog">
              {articlesList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
              {articlesList.isLoading ? (
                <p> Chargement des articles...</p>
              ) : (
                <Blog articles={articlesList.data} /* setArticleId={setArticleId()} */ />
              )}
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
                <p> Chargement des projets...</p>
              ) : (
                <ProjectList projets={projectList.data}/>
              )}
            </Route>
            <Route path="/project/:id">
              <Project/>
            </Route>
            <Route exact path="/admin">
              <AdminMainPage categories = {categories}/>
            </Route>
            <Route exact path="/admin/:categorie">
              <CategorieMenu/>
            </Route>
            <Route path="/admin/prospect/all">
            {prospectsList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
              {prospectsList.isLoading ? (
                <p> Chargement des projets...</p>
              ) : (
                <ReadProspect prospects={prospectsList.data}/>
                )}
            </Route>
            <Route path="/admin/article/all">
              <ReadProspect/>
            </Route>
            <Route path="/admin/project/all">
              <ReadProspect/>
            </Route>
            <Route path="/admin/inspiration/all">
              <ReadProspect/>
            </Route>
        </Switch> 
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
