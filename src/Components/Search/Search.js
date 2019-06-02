import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = { 
        keyword : ''
    };

    onKeyUp = this.debounce(()=>{
        if(this.props.callback){
            this.props.callback(this.state.keyword);
        }
    }, 1000);

    onChange(evt){
        this.setState({keyword : evt.target.value});
    }

    render() { 
        return ( 
            <input type="search" className="search-events" placeholder="Search for events" onKeyUp = {this.onKeyUp} onChange={this.onChange.bind(this)} value={this.state.keyword}/>
        );
    }

    componentDidMount(){
        this.setState({keyword : this.props.value})
    }

    debounce(fn, delay){
        let timeoutHandler;

        return (evt) => {

            this.setState({keyword : evt.currentTarget.value});

            clearTimeout(timeoutHandler);

            timeoutHandler = setTimeout(() => {
                fn.call(this);
                timeoutHandler = null;

            }, delay);
        }
    }
}
 
export default Search;