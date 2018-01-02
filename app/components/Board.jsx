import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from 'actions/ProductsActions';
import Column from './Column'

export class Board extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddColumnClick = this.handleAddColumnClick.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
        this.handleChangeColumnTitle = this.handleChangeColumnTitle.bind(this)

        this.state = {
            isPopup: false,
            columnTitle: ''
        }
    }
    
    componentDidUpdate() {
        console.log(this.state)
    }

    renderColumns() {
        console.log(this.props)
        return _.map(this.props.items, column => {
            return (
                <Column key={Math.random()} />
            )
        })
    }

    renderProducts() {
        return _.map(this.props.items, product => {
            const isInCart = _.indexOf(this.props.cart, product.id) !== -1;

            return (
                <div key={product.id} className="products__item">
                    <strong>{product.name}</strong>
                    <div className="products__item-price">${product.price}</div>
                    <button
                        className="products__item-button"
                        onClick={this.onCartChange.bind(this, isInCart, product.id)}
                    >
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                    <div>{product.description}</div>
                </div>
            );
        });
    }

    togglePopup (e) {
        e.preventDefault();
        
        this.setState({isPopup: !this.state.isPopup})   
    }

    handleChangeColumnTitle(e) {
        this.setState({columnTitle: e.target.value})
    }

    handleAddColumnClick (e) {
        e.preventDefault();
        this.togglePopup(e)
    }

    render() {
        return (
            <div className="board">
                <div className="grid">
                    {this.renderColumns()}
                    <div className="columns">
                        <button
                            onClick={this.togglePopup} 
                            className="add-column">
                            Add a list...
                        </button>
                    </div>
                    
                    {/* <div className="products">
                        <div className="cart__count">
                            Number of items in cart: 
                            <strong>{this.props.cart.length}</strong>
                        </div>
                        <h2 className="products__heading">Products</h2>
                        <div className="products__items">
                            {this.renderProducts()}
                        </div>
                    </div>
                     */}
                </div>

                {
                    this.state.isPopup 
                    && <div onClick={this.togglePopup} className="popup">
                        <div onClick={(e) => e.stopPropagation()} className="popup__content">
                            <input
                                type="text"
                                placeholder="Column name"
                                onChange={this.handleChangeColumnTitle}
                                name=""
                                id=""/>
                            <button onClick={this.handleAddColumnClick}>Add column</button>
                        </div>
                    </div>
                }
            </div>
        );
    }

    onCartChange(isInCart, id) {
        const dispatch = this.props.dispatch;
        if (isInCart) {
            dispatch(removeFromCart(id));
            return;
        }
        dispatch(addToCart(id));
    }
}

function mapStateToProps(state) {
    return {
        items: state.products.get('items').toJS(),
        cart: state.products.get('cart').toJS()
    };
}

export default connect(mapStateToProps)(Board);
