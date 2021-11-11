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





function App() {

  const [quote, setQuote] = React.useState("");

  const fetchInspi = () => {
    axios.get("http://localhost:1993/inspiration", { crossdomain: true } )
    .then(fancyWords => {
      setQuote(fancyWords.data.quote);
      console.log(quote);
    })
  }
  React.useEffect(() => {
    fetchInspi()
  })



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
              <ProjectList/>
            </Route>
            <Route path="/project">
              <Project/>
            </Route>
        </Switch> 
        </div>
        <Footer citation={quote}/>
      </div>
    </Router>
  );
}

export default App;
