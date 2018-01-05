import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addColumn } from 'actions/ColumnsActions';
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
        e.stopPropagation();
        this.togglePopup(e)

        this.props.dispatch(addColumn(this.state.columnName,Math.floor(Math.random()*1000000000000)))
        return
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
                    <button
                        onClick={this.togglePopup} 
                        className="add-column">
                        Add a list...
                    </button>
                </div>

                {
                    this.state.isPopup 
                    && <div onClick={this.togglePopup} className="popup">
                        <form 
                            onSubmit={this.handleAddColumnClick}
                            onClick={(e) => e.stopPropagation()} 
                            className="popup__content">
                            <h3>Enter Column title</h3>
                            <input
                                type="text"
                                placeholder="Type here"
                                onChange={this.handleChangeColumnName}
                                name=""
                                autoFocus
                                id=""/>
                            <button type="button" onClick={this.handleAddColumnClick}>Add column</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default connect(undefined)(Board);
