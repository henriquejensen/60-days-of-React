import React, { Component } from 'react';
import ReactDataGrid from "react-data-grid";
import Button from "./Button";
import faker from "faker";

faker.locale = "pt_BR";

class RowRenderer extends Component {

  setScrollLeft(scrollBy) {
    // if you want freeze columns to work, you need to make sure you implement this as apass through
    this.refs.row.setScrollLeft(scrollBy);
  }

  getRowStyle() {
    return {
      color: this.getRowBackground()
    };
  }

  getRowBackground() {
    return this.props.idx % 2 ?  'green' : 'blue';
  }

  render() {
    // here we are just changing the style
    // but we could replace this with anything we liked, cards, images, etc
    // usually though it will just be a matter of wrapping a div, and then calling back through to the grid
    return (<div style={this.getRowStyle()} className="my-row-render"><ReactDataGrid.Row ref="row" {...this.props}/></div>);
  }
}

class App extends Component {
    state = {
        columns: [
            { key: 'id', name: 'ID', sortable: true },
            { key: 'user', name: 'User', sortable: true },
            { key: 'job', name: 'Job', sortable: true },
            { key: 'button', name: 'Button' } 
        ],
        rows: []
    }

    componentWillMount() {
        let rows = [];
        for (let i = 0; i < 15; i++) {
            rows.push({
                id: i,
                user: faker.name.firstName(),
                job: faker.name.jobTitle(),
                jobDescriptor: faker.name.jobDescriptor(),
                phone: faker.phone.phoneNumber(),
                lorem: faker.lorem.paragraphs(),
                button: <Button index={i} handleShowAlert={this.handleShowAlert} text="Mais informações"/>
            })
        }
        this.setState({
            rows
        })
    }

    handleShowAlert = (index) => {
        alert("Informações \n"+
              "Usuário: " + this.state.rows[index].user + "\n" +
              "Profissão: " + this.state.rows[index].job + "\n" +
              "Descrição da profissão: " + this.state.rows[index].jobDescriptor + "\n" +
              "Telefone: " + this.state.rows[index].phone + "\n" +
              "Mensagem: " + this.state.rows[index].lorem
              )
    }

    handleGridSort = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
            }
        }

        const newRows = sortDirection === 'NONE' ? this.state.rows.slice(0) : this.state.rows.sort(comparer);

        this.setState({ rows: newRows });
    }

    rowGetter = (i) => {
        return this.state.rows[i];
    }
    
    render() {
        let columns = this.state.columns;
        let rows = this.state.rows;
        return (
            <ReactDataGrid
                onGridSort={this.handleGridSort}
                columns={columns}
                rowGetter={this.rowGetter}
                rowsCount={rows.length}
                rowRenderer={RowRenderer}
                 />
        )
    }
}

export default App;