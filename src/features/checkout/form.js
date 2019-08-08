import React from 'react'
import { Field, reduxForm } from 'redux-form';

function CheckoutForm(props) {
    const { handleSubit } = props

    return (
        <div>
            <form onSubmit={handleSubit}>
                <div>
                    <label htmlFor="order[name]">Name: </label> <br />
                    <Field name="order[name]" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="order[email]">email: </label> <br />
                    <Field name="order[email]" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="order[mobile]">Mobile: </label> <br />
                    <Field name="order[mobile]" component="input" type="number" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary align-right">Checkout </button>
                </div>
            </form>
        </div>
    );

}

CheckoutForm = reduxForm({
    form: 'checkout'

})(CheckoutForm)


export default CheckoutForm;