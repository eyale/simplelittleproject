import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { removeColumn } from 'actions/ColumnsActions';

export class Column extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showSettings: false
        }
        this.toggleColumnSettings = this.toggleColumnSettings.bind(this)
        this.handleRemoveColumn = this.handleRemoveColumn.bind(this)
    }

    toggleColumnSettings(e) {
        e.preventDefault()
        this.setState({showSettings: !this.state.showSettings})
    }

    handleRemoveColumn(e) {
        e.preventDefault()
        console.log(e.target);
        
        // this.props.dispatch(removeColumn(id))
        this.toggleColumnSettings(e)
    }

    renderColumns() {
        console.log('props',this.props) 
        const { columns } = this.props

        return columns.map((column, idx) => {
            console.log(column,idx);
            
            return (
                <div key={Math.random()} className="columns__item">
                    <div className="columns__item--header">{column.name}</div>
                    <div className="columns__item--settings">
                        <span onClick={this.toggleColumnSettings} className="dots">...</span>
                        <p className={`columns__item--settings__actions ${this.state.showSettings && 'visible'}`}>
                            <span>Settings</span>
                            <button onClick={this.handleRemoveColumn}>Remove column</button>
                        </p>
                    </div>
                    <div className="columns__item--card">Card1</div>
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
