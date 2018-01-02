import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from 'actions/ProductsActions';

export class Board extends React.Component {
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

    render() {
        return (
            <div className="board">
                <div className="grid">
                    <div className="columns">
                        <div className="columns__item">
                            <div className="header">Column</div>
                            <siv className="settings">...</siv>
                            <div className="card">Card1</div>
                            <button className="add-card">Add a card...</button>
                        </div>
                        <div className="columns__item">
                            <div className="header">Column</div>
                            <siv className="settings">...</siv>
                            <div className="card">Card1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum animi odio perferendis, culpa molestiae sit fugit consequatur quos exercitationem aliquam voluptate recusandae sequi dicta omnis, impedit aut, possimus veritatis!</div>
                            <button className="add-card">Add a card...</button>
                        </div>
                        <div className="columns__item">
                            <div className="header">Column</div>
                            <siv className="settings">...</siv>
                            <div className="card">Card1</div>
                            <button className="add-card">Add a card...</button>
                        </div>
                        <div className="columns__item">
                            <div className="header">Column</div>
                            <siv className="settings">...</siv>
                            <div className="card">Card1</div>
                            <button className="add-card">Add a card...</button>
                        </div>
                        <button className="add-column">Add a list...</button>
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
