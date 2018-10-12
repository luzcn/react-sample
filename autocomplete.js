import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';



class DropdownExample extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    }
  };


  getProjects = (keyword) => {
    const allProjects = ["Personal", "Shopping", "Work", "Errands"];

    if (keyword === "") {
      return [];
    }

    return allProjects
      .filter(x => {
        return x.toLowerCase().indexOf(keyword.trim().toLowerCase()) >= 0;
      });
  };
  onChange = (event) => {
    this.setState({
      suggestions: this.getProjects(event.target.value)
    });
  };


  render() {
    const {suggestions } = this.state;

    const listItems = suggestions.map((item) =>
      <li>{item}</li>
    );
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} />
        <div>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <DropdownExample />,
  document.getElementById('root')
);