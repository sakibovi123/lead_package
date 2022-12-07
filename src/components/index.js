import React from 'react'
import {useNavigate} from "react-router-dom";

function LeadForm(){
    let navigate = new useNavigate()
    // sending data to zapier
    let sendLeadToZapier = async (e) => {
        let firstName = e.target.first_name.value
        let lastName = e.target.last_name.value
        let phone = e.target.phone.value
        let email = e.target.email.value
        let zipCode = e.target.zip_code.value

        if( phone.length < 10 && phone.length > 10 ){
            let response = await fetch("", {
                "lp_campaign_id": "",
                "lp_campaign_key": "",
                "first_name": firstName,
                "last_name": lastName,
                "phone": phone,
                "email": email,
                "zip_code": zipCode,
            })
                .then(result => result.json())
                .catch(error => console.log(error))

            // navigate to somewhere
            console.log(response.body)
            navigate()
        }
        else{
            // show error here
        }

    }

    let sendLeadToSheets = async (e) => {
        let firstName = e.target.first_name.value
        let lastName = e.target.last_name.value
        let phone = e.target.phone.value
        let email = e.target.email.value
        let zipCode = e.target.zip_code.value
        if( phone.length < 10 && phone.length > 10 ){
            let responseToSheets = await fetch("", {
                "lp_campaign_id": "",
                "lp_campaign_key": "",
                "first_name": firstName,
                "last_name": lastName,
                "phone": phone,
                "email": email,
                "zip_code": zipCode,
            })
                .then(output => output.json())
                .catch(error => console.log(error))
            console.log(responseToSheets.body)
            // navigate to somewhere
            navigate()
        }
        else{
            // show error here
        }

    }

    return (
        <>
            <h1>Hello World</h1>
            <form onSubmit={sendLeadToZapier && sendLeadToSheets}>
                <label htmlFor="">First Name</label><br/>
                <input type="text" name="first_name" placeholder="Enter First Name"/><br/>
                <label htmlFor="">Last Name</label><br/>
                <input type="text" name="last_name" placeholder="Enter Last Name"/><br/>
                <label htmlFor="">Phone Number</label><br/>
                <input type="number" maxLength="10" name="phone" placholder="E:G 1234567892"/><br/>
                <label htmlFor="">Email</label><br/>
                <input type="email" name="email" placholder="Enter email.."/><br/>
                <label htmlFor="">Zip Code</label><br/>
                <input type="text" name="zip_code" placholder="Enter zip code.."/><br/>
                <button className="">Save</button>
            </form>
        </>
    )
}

export default LeadForm