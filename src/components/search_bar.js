import React, { Component } from 'react';

// create a class component which renders an input search field

class SearchBar extends Component {

    constructor (props) {
        super(props);
        this.state = {term: ''};

    }

    render () {
        return (
            <div className="search-bar">
                <input value={ this.state.term }
                    onChange={ event => this.handleInputChange(event.target.value) } />
            </div>
        );
    }

    handleInputChange (term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
