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
import Colors, { LoadingMessage } from './components/parts/Esthete';
import Signup from './components/Signup';
import Login from './components/Login';
import UserContext from './context/UserContext';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import LoadingCircle from './components/parts/LoadingCircle';





const categories = ["prospect", "article", "project", "inspiration"]; 
// On passe cette variable dans le component AdminMainPage pour r??cup??rer les noms des categories




const API_ENDPOINT = "https://us-central1-nassmassa-backend.cloudfunctions.net/app"  

// Pour la phase de d??veloppement, utiliser : http://localhost:1993
// Pour la pase de d??ploiement, utiliser : https://us-central1-nassmassa-backend.cloudfunctions.net/app


function App() {

// eslint-disable-next-line
  const [prospectsList, dispatchProspect] = useFetchModel("prospect", API_ENDPOINT);
  // eslint-disable-next-line
  const [articlesList, dispatchArticle] = useFetchModel("blog", API_ENDPOINT);
  // eslint-disable-next-line
  const [projectsList, dispatchProject] = useFetchModel("project", API_ENDPOINT);
  // eslint-disable-next-line
  const [inspirationsList, dispatchInspiration] = useFetchModel("inspiration", API_ENDPOINT);
  


  // START AUTH ACTION IN APP.JS

  const [userAccount, setUserAccount] = React.useState("");
  const value = { userAccount, setUserAccount };


// CHECK IF A TOKEN  
  const checkUser = async() => {
      const loggedInUser = await localStorage.getItem("token");
      console.log(loggedInUser);
      if (loggedInUser) {
        setUserAccount(loggedInUser);
        console.log(userAccount);
        console.log("GOOD SHIT!");
      } else {
        console.log ("ISSUE WITH LOCAL STORAGE VALUE")
      }
  };  



React.useEffect(() => {
  checkUser()
}, []);   // To trigger use effect only for the first render of a given page(no need to invoke it more often)

  // END AUTH ACTION IN APP.JS



  return (
    <UserContext.Provider value={value}>
      <Router>
        <CustomStyle/>
        <div className ="App">
        <NavBar />
          <div className ="content">
          <Switch>
              <Route exact path="/">                      {/* exact path nous permet d'indiquer ?? React de charger cette page uniquement le page corespond exactement. Cela nous permet d'??viter de charger la homePage partout  */ }
                <div>  {/* Ici on calera la background-color */}
                  <HomePage/>
                  <Approche detailsApproche={buttonBenefits} />
                  <BlocPicture works ={dataBlocMyWork} />
                  <CreateProspect id="form" endpoint = {API_ENDPOINT} />
                </div>
              </Route>
              <Route path="/blog">
                {articlesList.error && <p>Une couille dans le p??te, scheissss !!! </p>}
                {articlesList.isLoading ? (
                  <>
                    <LoadingMessage> Chargement des articles...</LoadingMessage>
                    <LoadingCircle/>
                  </>
                ) : (
                  <Blog articles={articlesList.data} endpoint = {API_ENDPOINT}  />
                )}
              </Route>
              <Route path="/article/:id">
                <Article endpoint = {API_ENDPOINT} />
              </Route>
              <Route path="/projectsList">
                {projectsList.error && <p>Une couille dans le p??te, scheissss !!! </p>}
                {projectsList.isLoading ? (
                <>
                    <LoadingMessage> Chargement des projets...</LoadingMessage>
                    <LoadingCircle/>
                </>
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
              {userAccount ? (
                <Route exact path="/admin"> 
                  <>
                    <AdminMainPage categories = {categories}/>
                    <Logout/>
                  </>
                </Route>
                  ) : (
                <Route  path="/admin"> 
                  <Login endpoint = {API_ENDPOINT}/>
                </Route>
              )}

              <Route exact path="/admin/:categorie">
                <CategorieMenu/>
                <Logout/>
              </Route>

  {/* LES ROUTES POUR LE SIGNUP/LOGIN/LOGOUT/WELCOME */}
              <Route exact path="/signup" >
                <Signup endpoint = {API_ENDPOINT} />
              </Route>
              <Route exact path="/login" >
                <Login endpoint = {API_ENDPOINT}/>
              </Route>





  {/* LES ROUTES POUR LE R DU CRUD */}                  
              <Route path="/admin/prospect/all"> 
                {prospectsList.error && <p>Une couille dans le p??te, scheissss !!! </p>}
                  {prospectsList.isLoading ? (
                <>
                    <LoadingMessage> Chargement des contacts...</LoadingMessage>
                    <LoadingCircle/>
                </>
                ) : (
                    <>
                      <ReadProspect prospects={prospectsList.data} />
                      <Logout/>
                    </>
                    )}
              </Route>
              <Route path="/admin/article/all">
                {articlesList.error && <p>Une couille dans le p??te, scheissss !!! </p>}
                  {articlesList.isLoading ? (
                <>
                    <LoadingMessage> Chargement des articles...</LoadingMessage>
                    <LoadingCircle/>
                </>                  
                ) : (
                    <>
                      <ReadArticle articles={articlesList.data}/>
                      <Logout/>
                    </>
                    )}            
              </Route>
              <Route path="/admin/project/all">
                {projectsList.error && <p>Une couille dans le p??te, scheissss !!! </p>}
                  {projectsList.isLoading ? (
                <>
                    <LoadingMessage> Chargement des projets...</LoadingMessage>
                    <LoadingCircle/>
                </>                  
                ) : (
                    <>
                      <ReadProject projects={projectsList.data}/>
                      <Logout/>
                    </>
                    )} 
              </Route>
              <Route path="/admin/inspiration/all">
                {inspirationsList.error && <p>Une couille dans le p??te, scheissss !!! </p>}
                  {inspirationsList.isLoading ? (
                <>
                    <LoadingMessage> Chargement des citations...</LoadingMessage>
                    <LoadingCircle/>
                </>                  
                ) : (
                    <>
                      <ReadInspiration inspirations={inspirationsList.data}/>
                      <Logout/>
                    </>
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
                <DeleteArticle endpoint = {API_ENDPOINT}/>                 {/* A supprimer quand on passera de "blog" ?? "article" dans le back */}
              </Route>
              <Route path="/admin/:categorie/delete/:id" >
                <DeleteObject endpoint = {API_ENDPOINT}/>
              </Route>

              <Route>
{/*                 <LoadingMessage> Chargement des citations...</LoadingMessage>
                <LoadingCircle/> * ONLY TO TEST THE LOADING PICTURE */}
                 <NotFound/>
              </Route>
          </Switch> 
          </div>
          <Footer endpoint = {API_ENDPOINT} />
        </div>
      </Router>
    </UserContext.Provider>

  );
}


// CSS STYLED COMPONENT


const buttonBenefits = [
  {
    title : "Comment ?" ,
    colorTitle : "white",
    id : "why",
    marginTop : "-7rem",
    categories : [
      {
        intitule : "Economique",  // POURQUOI UN SITE WEB ?
        hiddenText : "Lancer rapidement et ?? moindre co??t la 1ere version de votre app. Id??al pour valider la viabilit?? de votre id??e.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : "transparent",
        textColor : Colors.BGContent,
        picture : "euro.png",
      },
      {
        intitule : "de bout en bout",
        hiddenText : "Back-end, front-end et d??ploiement, un seul interlocuteur pour chaque ??tape du d??veloppement de votre app.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : "transparent",
        textColor : Colors.BGContent,
        picture : "heart.png",

      },
      {
        intitule : "Suivi",
        hiddenText : "Je vous accompagne dans l'am??lioration / mont??e de version de votre app.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : "transparent",
        textColor : Colors.BGContent,
        picture : "ruler.png"
      }, 
    ],
    bgColor : Colors.secundaryColor,

  },
  {
    title : "Mon Approche" ,
    colorTitle : Colors.secundaryColor,
    id : "approche",
    marginTop : "",
    categories : [
      {
        intitule : "+ de Conversion",
        hiddenText : "Convertissez vos visiteurs en clients fid??les gr??ce ?? un design / UX favorisant l'usage de votre app.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : "transparent",
        textColor : Colors.secundaryColor,
        picture : "funnel.png"
      },
      {
        intitule : "Id??ation",
        hiddenText : "Nous brainstormons ensemble r??guli??rement pour identifier de nouvelles features ?? ajouter ?? votre app.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : "transparent",
        textColor : Colors.secundaryColor,
        picture : "star.png"
      },
      {
        intitule : "Conseil Marketing",
        hiddenText : "Je vous aide ??galement ?? d??ployer une strat??gie marketing adapt??e ?? votre app.",
        buttonColor : Colors.primaryColor,
        bgColorHiddenText : "transparent",
        textColor : Colors.secundaryColor,
        picture : "bar_chart.png"
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
        font-weight : bold;
        font-size : 2rem;
        text-transform : uppercase;
        color : white;
        cursor : pointer;
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
