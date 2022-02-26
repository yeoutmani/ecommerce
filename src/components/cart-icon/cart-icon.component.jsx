import { React } from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToPros = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
/*
La méthode reduce() applique une fonction qui est un « accumulateur » 
et qui traite chaque valeur d'une liste (de la gauche vers la droite) 
afin de la réduire à une seule valeur.
*/
const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
        0
      )
});


export default connect(mapStateToProps, mapDispatchToPros)(CartIcon);