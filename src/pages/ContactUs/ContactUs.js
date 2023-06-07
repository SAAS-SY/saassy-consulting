import React from 'react';
import './ContactUs.scss';


const ContactUs = () => {
    const [inputValues, setInputValues] = React.useState({
        first_name: "",
        last_name: "",
        company_name: "",
        mobile__number: "",
        description: ""
    })

    const handleInput = (event) => {
        let field = event.target.dataset.field;
        setInputValues(
            {
                ...inputValues,
                [field]: event.target.value.trim()
            }
        )
    }

    const captureData = (event) => {
        console.log(inputValues)
    }

    return (
        <React.Fragment>
            <div className='form-container'>

                <div className='get-in-touch'>
                    <h1>
                        Get in Touch with us!
                    </h1>
                </div>
                <form
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycby9OJaBdEktC47egLuCFdYVN1LgJjj6K0bcn0WDxvxfXEBbRY-xbEIqGYlevz3jLA/exec"
                >
                    <img className='bg-wrap' src='./images/contactus/contact-banner.webp' />
                    <div className='form-wrapper'>
                        <div className='form-header'>
                        </div>
                        <div className='form-input-container'>
                            {/* <p className='label'>First Name</p> */}
                            <input type='text' name="First Name" className='form-value' placeholder='First Name' onChange={handleInput} data-field="first_name" />
                        </div>
                        <div className='form-input-container'>
                            {/* <p className='label'>Last Name</p> */}
                            <input type='text' name="Last Name" className='form-value' placeholder='Last Name' onChange={handleInput} data-field="last_name" />
                        </div>
                        <div className='form-input-container'>
                            {/* <p className='label'>Company</p> */}
                            <input type='text' name="Company Name" className='form-value' placeholder='Company Name' onChange={handleInput} data-field="company_name" />
                        </div>
                        <div className='form-input-container'>
                            {/* <p className='label'>Mobile Number</p> */}
                            <input type='text' maxLength={10} name="Mobile Number" className='form-value' placeholder='Contact Number' onChange={handleInput} data-field="mobile_number" />
                        </div>
                        <div className='form-input-container'>
                            {/* <p className='label'>Description</p> */}
                            <textarea name="Description" className='form-value' placeholder='Description' onChange={handleInput} data-field="description"></textarea>
                        </div>
                        <div>
                            <button className='submit-form' onClick={captureData} type='submit'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactUs;