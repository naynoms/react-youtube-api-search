import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // used arrow function about instead
  // onInputChange(event) {
  //   // console.log(event.target.value)
  // }
}

// FUNCTIONAL COMPONENT
// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
