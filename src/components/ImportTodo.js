import React from "react";
import { connect } from "react-redux";
import { importTodo } from "../redux/actions";
import { words } from "../constants";

class ImportTodo extends React.Component {
  handleImportTodo = () => {
    this.props.importTodo();
  };

  render() {
    return (
      <button className="import-todo" onClick={this.handleImportTodo}>
        {words.IMPORT_TODO}
      </button>
    );
  }
}

export default connect(
  null,
  { importTodo }
)(ImportTodo);
