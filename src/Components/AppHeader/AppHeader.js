import React, { Component } from 'react';

import Search from '../Search/Search';
import logo from '../../Images/skiddle-logo.png'; 
import './AppHeader.css';

class AppHeader extends Component {
    render() { 
        return ( 
            <header className="app-header">
                <img src={logo} className="app-logo" alt="skiddle" />
                <div className="input-action-wrapper">
                    { 
                        !this.props.view 
                            && <Search callback={this.props.search} value={this.props.keyword}></Search> 
                    }
                    { 
                        (this.props.view === 'artistdetails') 
                            && <button className={`back-button ${this.props.view}`} onClick={()=> this.props.set({view : 'eventdetails'})}>Back to details</button>
                    }
                    { 
                        (this.props.view === 'eventdetails' || this.props.view === 'artistdetails') 
                            && <button className={`back-button ${this.props.view}`} onClick={()=> this.props.set({view : null})}>Back to results</button>
                    }
                </div>
            </header>
         );
    }
}
 
export default AppHeader;