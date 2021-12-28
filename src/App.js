import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  // Necessary to use the router with React
import Approche from './components/Approche';
import Article from './components/Article';
import Blog from './components/Blog';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import AdminMainPage from './components/CRUD/AdminMainPage';
import CategorieMenu from './components/CRUD/CategorieMenu';
import ReadProspect from './components/CRUD/READ/ReadProspect';
import useFetchModel from './components/parts/customHooks/useFetchModel';
import ReadArticle from './components/CRUD/READ/ReadArticle';
import ReadProject from './components/CRUD/READ/ReadProject';
import ReadInspiration from './components/CRUD/READ/ReadInspiration';
import CreateArticle from './components/CRUD/CREATE/CreateArticle';
import CreateProject from './components/CRUD/CREATE/CreateProject';
import CreateInspiration from './components/CRUD/CREATE/CreateInspiration';
import CreateProspect from './components/CRUD/CREATE/CreateProspect';
import UpdateArticle from './components/CRUD/UPDATE/UpdateArticle';
import UpdateProject from './components/CRUD/UPDATE/UpdateProject';
import UpdateProspect from './components/CRUD/UPDATE/UpdateProspect';
import UpdateInspiration from './components/CRUD/UPDATE/UpdateInspiration';
import DeleteObject from './components/CRUD/DELETE/DeleteObject';
import DeleteArticle from './components/CRUD/DELETE/DeleteArticle';
import BlocPicture from './components/BlocPicture';
import { createGlobalStyle } from "styled-components";
import Colors from './components/parts/Esthete';


const categories = ["prospect", "article", "project", "inspiration"]; 
// On passe cette variable dans le component AdminMainPage pour récupérer les noms des categories




const API_ENDPOINT = "http://localhost:1993"  

// Pour la phase de développement, utiliser : http://localhost:1993
// Pour la pase de déploiement, utiliser : https://us-central1-nassmassa-backend.cloudfunctions.net/app


function App() {


  const [prospectsList, dispatchProspect] = useFetchModel("prospect", API_ENDPOINT);
  const [articlesList, dispatchArticle] = useFetchModel("blog", API_ENDPOINT);
  const [projectsList, dispatchProject] = useFetchModel("project", API_ENDPOINT);
  const [inspirationsList, dispatchInspiration] = useFetchModel("inspiration", API_ENDPOINT);
  



  return (
    <Router>
      <CustomStyle/>
      <div className ="App">
       <NavBar />
        <div className ="content">
        <Switch>
            <Route exact path="/">                      {/* exact path nous permet d'indiquer à React de charger cette page uniquement le page corespond exactement. Cela nous permet d'éviter de charger la homePage partout  */ }
              <div>  {/* Ici on calera la background-color */}
                <HomePage/>
                <Approche detailsApproche={buttonBenefits} />
                <BlocPicture works ={dataBlocMyWork} />
                <CreateProspect id="form" endpoint = {API_ENDPOINT} />
              </div>
            </Route>
            <Route path="/blog">
              {articlesList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
              {articlesList.isLoading ? (
                <p> Chargement des articles...</p>
              ) : (
                <Blog articles={articlesList.data} endpoint = {API_ENDPOINT}  />
              )}
            </Route>
            <Route path="/article/:id">
              <Article endpoint = {API_ENDPOINT} />
            </Route>
            <Route path="/projectsList">
              {projectsList.error && <p>Une couille dans le pâte, scheissss !!! </p>}
              {projectsList.isLoading ? (
                <p> Chargement des projets...</p>
              ) : (
                <ProjectList projets={projectsList.data} />
              )}
            </Route>
            <Route path="/project/:id">
              <Project endpoint = {API_ENDPOINT} />
            </Route>
            <Route path="/contact">
                <CreateProspect endpoint = {API_ENDPOINT}/>
            </Route>


{/*MENU DE L'ADMIN */}            
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
                  <ReadProspect prospects={prospectsList.data} />
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
              <CreateProspect endpoint = {API_ENDPOINT}/>
            </Route>
            <Route path="/admin/article/create">
              <CreateArticle endpoint = {API_ENDPOINT} />       
            </Route>
            <Route path="/admin/project/create">
              <CreateProject endpoint = {API_ENDPOINT} />       
            </Route>
            <Route path="/admin/inspiration/create">
              <CreateInspiration endpoint = {API_ENDPOINT} />       
            </Route>

{/* LES ROUTES POUR LE U DU CRUD */}
            <Route path="/admin/prospect/update/:id">
              <UpdateProspect categorie = "prospect" endpoint = {API_ENDPOINT}/>
            </Route>
            <Route path="/admin/article/update/:id">
                   <UpdateArticle categorie = "blog" endpoint = {API_ENDPOINT} />
            </Route>
            <Route path="/admin/project/update/:id">
              <UpdateProject categorie = "project" endpoint = {API_ENDPOINT}/>       
            </Route>
            <Route path="/admin/inspiration/update/:id">
              <UpdateInspiration categorie = "inspiration" endpoint = {API_ENDPOINT} />       
            </Route>

{/* LES ROUTES POUR LE D DU CRUD */}
            <Route exact path="/admin/article/delete/:id" endpoint = {API_ENDPOINT}>
              <DeleteArticle endpoint = {API_ENDPOINT}/>                 {/* A supprimer quand on passera de "blog" à "article" dans le back */}
            </Route>
            <Route path="/admin/:categorie/delete/:id" >
              <DeleteObject endpoint = {API_ENDPOINT}/>
            </Route>
        </Switch> 
        </div>
        <Footer endpoint = {API_ENDPOINT} />
      </div>
    </Router>
  );
}


// CSS STYLED COMPONENT


const buttonBenefits = [
  {
    title : "Pourquoi ?" ,
    colorTitle : "white",
    id : "why",
    categories : [
      {
        intitule : " site web / app = $$$",  // POURQUOI UN SITE WEB ?
        hiddenText : "C'est le pillier de votre stratégie commerciale. Obtenez un site web / app qui s'aligne à 100% avec vos objectifs business...  ",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : Colors.BGContent,
        textColor : Colors.secundaryColor
      },
      {
        intitule : "Vous êtes au bon endroit...",    // POURQUOI MOI ?
        hiddenText : "Nouvel entrepreneur, PMEs dynamiques, Assos ? Mon approche et mes solutions sont alignés sur vos besoins spécifiques...",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : Colors.BGContent,
        textColor : Colors.secundaryColor
      },
      {
        intitule : "...au bon moment",  // POURQUOI MAINTENANT ?
        hiddenText : "Votre produit/service est bon! Donnez-lui le site qu'il mérite. Maintenant.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : Colors.BGContent,
        textColor : Colors.secundaryColor
      },
    ],
    bgColor : Colors.secundaryColor,

  },
  {
    title : "Mon Approche" ,
    colorTitle : Colors.secundaryColor,
    id : "approche",
    categories : [
      {
        intitule : "Sublimer votre image",
        hiddenText : "Vous êtes unique. Prouvez-le avec un site web / app sur mesure qui véhicule vos valeurs.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : Colors.secundaryColor,
        textColor : "white"
      },
      {
        intitule : "Design Orienté Client",
        hiddenText : "Convertissez vos visiteurs en clients fidèles grâce à un design suscitant l'intéraction et l'acte d'achat.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : Colors.secundaryColor,
        textColor : "white"
      },
      {
        intitule : "Conseils Business",
        hiddenText : "Je vous aide à déployer une stratégie en ligne concrète grâce à mon expérience de Business Developer / Marketing Specialist.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : Colors.secundaryColor,
        textColor : "white"
      }
    ],
    bgColor : Colors.BGContent,
  },
  

];

const dataBlocMyWork = [
  {
    title: "projets",
    backgroundpic :"projetsPicture.jpg",
    link : "projectsList"
  },
  {
    title : "blog",
    backgroundpic :"blogPicture.jpg",
    link : "blog"

  }
];


const CustomStyle = createGlobalStyle`
    .content {
      font-family : Segoe UI;
      background-color : ${Colors.secundaryColor}; 
    }
    a {
      text-decoration: none;
    }
    button, h3 {
        background-color : ${Colors.primaryColor};
        border : 0rem;
        border-radius : 0.5rem;
        -moz-border-radius : 0.5rem;
        -webkit-border-radius : 0.5rem;
        font-family : Segoe UI;
        font-weight : bold;
        font-size : 2rem;
        text-transform : uppercase;
        color : white;
        cursor : pointer;
    }
    button:hover, input[type=submit]:hover {
        background-color : ${Colors.secundaryColor};
    }



    .body-form {
      display : flex;
      flex-direction: column;
      background-color : ${Colors.primaryColor};
      border-radius : 1rem;
      -moz-border-radius : 0.75rem;
      -webkit-border-radius : 0.75rem;
      padding: 2rem 0rem ;
      margin: 1rem;
    }


    .filter label {
      color : ${Colors.secundaryColor};
      text-align : center;
    }

    `


// REM for the font-size, margin and padding | EM for the component that need to ,  | PX for root level element (HTML)



export default App;
