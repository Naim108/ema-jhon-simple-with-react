import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import Not from './components/NotFound/Not'
import Inventory from './components/Inventory/Inventory'

function App() {
  return (
    <div>
      
     <Router>
     <Header></Header>
     <Switch>
       <Route path="/shop">
         <Shop></Shop>
       </Route>
       <Route exact path="/">
         <Shop></Shop>
       </Route>
       <Route path="/inventory">
         <Inventory></Inventory>
       </Route>
       <Route path="/orders">
         <OrderReview></OrderReview>
       </Route>
       <Route path="*">
         <Not></Not>
         
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
