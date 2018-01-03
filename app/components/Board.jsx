import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addColumn, removeColumn } from 'actions/ColumnsActions';
import Column from './Column'

export class Board extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddColumnClick = this.handleAddColumnClick.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
        this.handleChangeColumnName = this.handleChangeColumnName.bind(this)

        this.state = {
            isPopup: false,
            columnName: ''
        }
    }

    togglePopup (e) {
        e.preventDefault();
        this.setState({isPopup: !this.state.isPopup})   
    }

    handleChangeColumnName(e) {
        this.setState({columnName: e.target.value})
    }

    handleAddColumnClick (e) {
        e.preventDefault();
        this.togglePopup(e)

        this.props.dispatch(addColumn(this.state.columnName))
    }

    handleCreateNew(e) {
        this.props.addUser(this.state.text, this.state.email);
        this.setState({ 
            columnName: ""
        });
    }

    render() {
        return (
            <div className="board">
                <div className="grid">
                    <Column />
                    <div className="columns">
                        <button
                            onClick={this.togglePopup} 
                            className="add-column">
                            Add a list...
                        </button>
                    </div>
                </div>

                {
                    this.state.isPopup 
                    && <div onClick={this.togglePopup} className="popup">
                        <div onClick={(e) => e.stopPropagation()} className="popup__content">
                            <h3>Enter Column title</h3>
                            <input
                                type="text"
                                placeholder="Type here"
                                onChange={this.handleChangeColumnName}
                                name=""
                                id=""/>
                            <button onClick={this.handleAddColumnClick}>Add column</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default connect(undefined)(Board);
