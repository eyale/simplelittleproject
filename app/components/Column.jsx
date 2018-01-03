import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from 'actions/ProductsActions';

export class Column extends React.Component {
    renderColumns() {
        console.log('props',this.props) 
        const { columns } = this.props
        return columns.map((column, idx) => {
            return (
                <div key={Math.random()} className="columns__item">
                    <div className="header">{column.name}</div>
                    <siv className="settings">...</siv>
                    <div className="card">Card1</div>
                    <button className="add-card">Add a card...</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>{this.renderColumns()}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        columns: state.columns
    };
}

export default connect(mapStateToProps)(Column);
