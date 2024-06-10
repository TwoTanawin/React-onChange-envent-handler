
import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("Visa");
    const [shipping, setShipping] = useState("");

    function handlerNameChnage(event){
        setName(event.target.value)
    }

    function handlerQuantityChnage(event){
        setQuantity(event.target.value)
    }

    function handlerCommentChnage(event){
        setComment(event.target.value)
    }

    function handlerPaymentChnage(event){
        setPayment(event.target.value)
    }

    function handlerShippingChnage(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handlerNameChnage}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handlerQuantityChnage} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handlerCommentChnage}
            placeholder="Enter delivery instruction" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlerPaymentChnage}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handlerShippingChnage}/>
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handlerShippingChnage}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
);
}

export default MyComponent