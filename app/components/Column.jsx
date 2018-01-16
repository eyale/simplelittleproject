import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeColumn, toggleMenuColumn } from 'actions/ColumnsActions';

export class Column extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            columnToShow: null,
            isShown:false,
            color: '#fff'
        }
        this.toggleColumnSettings = this.toggleColumnSettings.bind(this)
        this.handleRemoveColumn = this.handleRemoveColumn.bind(this)
    }

    toggleColumnSettings(e, id) {
        e.preventDefault()

        this.props.columns.map(column => {
            if (column.id === id) {
                this.setState({
                    columnToShow: id,
                    isShown: !this.state.isShown
                })
            }
        })
    }

    handleRemoveColumn(e, name, id) {
        e.preventDefault()
        
        this.props.dispatch(removeColumn(name, id))
        this.toggleColumnSettings(e)
    }
    changeCardColor(e) {
        e.preventDefault()

        this.setState({color: e.target.value})
    }

    renderColumns() {
        const { columns } = this.props

        return columns.map((column, idx) => {
            
            return (
                <div key={columns[idx].id} id={columns[idx].id} className="columns__item">
                    <div className="columns__item--header">{column.name}</div>
                    <div className="columns__item--settings">
                        <span onClick={(e) => this.toggleColumnSettings(e, columns[idx].id)} className="dots">...</span>
                        {
                            this.state.isShown && this.state.columnToShow === columns[idx].id &&
                            <p className="columns__item--settings__actions">
                            <span 
                                className="close"
                                onClick={(e) => this.toggleColumnSettings(e, columns[idx].id)}>x</span>
                            <span>Settings</span>
                            <button
                                onClick={(e) => this.handleRemoveColumn(e, columns[idx].name, columns[idx].id)}>
                                Remove column
                            </button>
                            </p>
                        }
                    </div>
                    <div className="columns__item--card" style={{backgroundColor: this.state.color}}>
                        <input type="color"  value={this.state.color} onChange={(e) => this.changeCardColor(e)}/>
                        Card1
                        </div>
                    <button className="columns__item--add-card">Add a card...</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="columns">{this.renderColumns()}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        columns: state.columns
    };
}

export default connect(mapStateToProps)(Column);
