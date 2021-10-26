import './App.css'
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Header from './component/Header/Header';
import Container from './component/MainContainer/Container';
import ManageOrder from './component/MainContainer/ManageOrder';
import NotFound from './component/MainContainer/NotFound';
import ReviewOrder from './component/MainContainer/ReviewOrder';
import PlaceOrder from './component/MainContainer/PlaceOrder';
import AuthProvider from './component/Context/AuthProvider';
import Registrasion from './component/Registrasion/Registrasion';
import Login from './component/Registrasion/Login';
import PrivetRouter from './component/PrivetRouter';
import Shiping from './component/Shiping';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Container></Container>
            </Route>
            <Route path="/shop">
              <Container></Container>
            </Route>
            <Route path="/manage-inventory">
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path="/review">
              <ReviewOrder></ReviewOrder>
            </Route>
            <Route path="/signup">
              <Registrasion></Registrasion>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRouter path="/shipping">
              <Shiping></Shiping>
            </PrivetRouter>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
