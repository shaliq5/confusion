import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents'
import './App.css';

function App() {

  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Confusion Site</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
    </div>
  );
  
}

export default App;
