import React,{Component} from 'react';
import './Header.css';
import Menu from '../menu/Menu';

class Header extends Component{

  render(){
    return(
      <div>
        <div className="container Header">
        <span className="brand-title">Kisumu Online Store</span>
        <div className="brand-tag">
          <span>Best market deals you can find</span>
        </div>
      </div>
        <Menu />

      </div>
    )
  }
  }


export default Header;
