import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  // Necessary to use the router with React
import Approche from './components/Approche';
import Article from './components/Article';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Form from './components/CreateProspect';
import HomePage from './components/HomePage';
import Humain from './components/Humain';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import AdminMainPage from './components/AdminMainPage';
import CategorieMenu from './components/CategorieMenu';
import ReadProspect from './components/ReadProspect';
import useFetchModel from './components/parts/customHooks/useFetchModel';
import ReadArticle from './components/ReadArticle';
import ReadProject from './components/ReadProject';
import ReadInspiration from './components/ReadInspiration';
import CreateArticle from './components/CreateArticle';
import CreateProject from './components/CreateProject';
import CreateInspiration from './components/CreateInspiration';
import CreateProspect from './components/CreateProspect';
import UpdateArticle from './components/UpdateArticle';
import UpdateProject from './components/UpdateProject';
import UpdateProspect from './components/UpdateProspect';
import UpdateInspiration from './components/UpdateInspiration';
import DeleteObject from './components/DeleteObject';
import DeleteArticle from './components/DeleteArticle';



const categories = ["prospect", "article", "project", "inspiration"]; 
// On passe cette variable dans le component AdminMainPage pour récupérer les noms des categories








function App() {

  const [prospectsList, dispatchProspect] = useFetchModel("prospect");
  const [articlesList, dispatchArticle] = useFetchModel("blog");
  const [projectsList, dispatchProject] = useFetchModel("project");
  const [inspirationsList, dispatchInspiration] = useFetchModel("inspiration");
  



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
              {projectsList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
              {projectsList.isLoading ? (
                <p> Chargement des projets...</p>
              ) : (
                <ProjectList projets={projectsList.data}/>
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

{/* LES ROUTES POUR LE R DU CRUD */}
            <Route path="/admin/prospect/all">
              {prospectsList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
                {prospectsList.isLoading ? (
                  <p> Chargement des projets...</p>
                ) : (
                  <ReadProspect prospects={prospectsList.data}/>
                  )}
            </Route>
            <Route path="/admin/article/all">
              {articlesList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
                {articlesList.isLoading ? (
                  <p> Chargement des projets...</p>
                ) : (
                  <ReadArticle articles={articlesList.data}/>
                  )}            
            </Route>
            <Route path="/admin/project/all">
              {projectsList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
                {projectsList.isLoading ? (
                  <p> Chargement des projets...</p>
                ) : (
                  <ReadProject projects={projectsList.data}/>
                  )} 
            </Route>
            <Route path="/admin/inspiration/all">
              {inspirationsList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
                {inspirationsList.isLoading ? (
                  <p> Chargement des projets...</p>
                ) : (
                  <ReadInspiration inspirations={inspirationsList.data}/>
                  )}
            </Route>

{/* LES ROUTES POUR LE C DU CRUD */}
            <Route path="/admin/prospect/create">
              <CreateProspect/>
            </Route>
            <Route path="/admin/article/create">
              <CreateArticle />       
            </Route>
            <Route path="/admin/project/create">
              <CreateProject />       
            </Route>
            <Route path="/admin/inspiration/create">
              <CreateInspiration />       
            </Route>

{/* LES ROUTES POUR LE U DU CRUD */}
            <Route path="/admin/prospect/update/:id">
              <UpdateProspect categorie = "prospect"/>
            </Route>
            <Route path="/admin/article/update/:id">
                   <UpdateArticle categorie = "blog" />
            </Route>
            <Route path="/admin/project/update/:id">
              <UpdateProject categorie = "project"/>       
            </Route>
            <Route path="/admin/inspiration/update/:id">
              <UpdateInspiration categorie = "inspiration" />       
            </Route>

{/* LES ROUTES POUR LE D DU CRUD */}
            <Route exact path="/admin/article/delete/:id">
              <DeleteArticle/>
            </Route>
            <Route path="/admin/:categorie/delete/:id">
              <DeleteObject/>
            </Route>
        </Switch> 
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
