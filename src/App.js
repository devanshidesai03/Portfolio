
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Error from "./components/Error";
import background from "./image1.jpg";

const App = ()  => {
  return (
  /* <div 
   style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',
   width:'100%'  }}
  >*/
    <BrowserRouter>
       <Switch>
       <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <Error />
        </Route>
       </Switch>
    </BrowserRouter>
    //</div>
    
  );
}

export default App;
