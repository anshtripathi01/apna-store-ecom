import axios from 'axios'
export const addToCart = (item, encodedToken,dispatch) => {

    try {
        fetch("/api/user/cart", {
            method: "POST",
            body: JSON.stringify({ product: item }),
            headers: {
                authorization: encodedToken,
                "Content-type": "application/json; charset=UTF-8"
            }
           
        })
            .then(res => res.json())
            .then(data => 
            dispatch({ type: 'SET_CART', payload: data.cart }))
    } catch (error) {
        console.log(error)
    }
}

export const updateProductQty = async (id, encodedToken, dispatch, actionType) => {
    try {
        const {
            data: { cart },
        } = await axios.post(
            `api/user/cart/${id}`,
            {
                action: {
                    type: actionType,
                },
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        dispatch({ type: 'SET_CART', payload: cart })
    } catch (error) {
        console.log("Error in update quantity service", error);
    }
}

export const removeFromCart = async (id, encodedToken, dispatch) => {
    try {
        const {
            data: { cart },
        } = await axios.delete(`api/user/cart/${id}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        dispatch({ type: 'SET_CART', payload: cart })

    } catch (error) {
        console.log("Error in cart", error);
    }
}


export const findPriceOfAllItems = (cart) => {

    const totalPrice = cart.reduce((acc, curr) => {
        acc = acc + curr.price * curr.qty
        return acc

    }, 0)
    return totalPrice;

}

export const findTotalDiscount = (cart) => {

    const totalDiscount = cart.reduce((acc, curr) => {
        acc = acc + ((curr.discountPrice / 100) * curr.price) * curr.qty
        return acc
    }, 0)

    return Math.round(totalDiscount.toFixed(2));

}

export const calculateFinalCartPrice = (totalPrice, totalDiscount, DeliveryCharges) => {
    return Math.round(totalPrice - totalDiscount + DeliveryCharges)
}