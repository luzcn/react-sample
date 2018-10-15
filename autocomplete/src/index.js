import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



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
    const value = event.target.value;
    if (value.indexOf("#") != -1) {

      this.setState({
        suggestions: this.getProjects(event.target.value.substring(value.indexOf("#") + 1))
      });
    }
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
          <ul class="suggestions">{listItems}</ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <DropdownExample />,
  document.getElementById('root')
);