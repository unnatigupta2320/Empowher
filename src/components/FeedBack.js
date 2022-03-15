import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import '../styling/CarouselImage.css';
import { Button, TextField } from "@material-ui/core";
import CampaignManagementBackendClient from "./../repositories/CampaignManagementBackendClient";
import CustomerData from "../models/CustomerData";
import { Link } from "react-router-dom";

// Author - Unnati Gupta
const emailAddressRegEx = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);
const contactNumberRegExp = RegExp(/^[789]\d{9}$/)

export default class FeedBack extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            profession: '',
            contactNumber: '',
            age: 0,
            feedback: '',
            isInvalid:true,
            isError: {
                name: '',
                email: '',
                profession: '',
                contactNumber: '',
                age: '',
                feedback: '',
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();
        
        var customerData = new CustomerData();
        customerData.name = this.state.name;
        customerData.email = this.state.email;
        customerData.password = this.state.profession;
        customerData.contactNumber = this.state.contactNumber;
        customerData.age = this.state.age.toString();
        customerData.membershipPeriod = this.state.feedback;

        var backendClient = new CampaignManagementBackendClient();
        backendClient.feedbackPost(customerData);
    };

    formValid = ({ isError, ...rest }) => {
        let isValid = false;

        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });

        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });

        return isValid;
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = emailAddressRegEx.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "profession":
                isError.profession =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            case "age":
                isError.age =
                    value < 18 || value > 65 ? "Only people with Age between 18 years to 65 years allowed to enrolled" : "";
                break;
            case "contactNumber":
                isError.contactNumber = contactNumberRegExp.test(value)
                    ? ""
                    : "Contact number is invalid";
                break;
            default:
                break;
        }
        var isInvalid = true;
        if(isError.name.length === 0 && isError.email.length===0  && isError.profession.length===0 && isError.age.length ===0 && isError.contactNumber.length===0)
            isInvalid=false;
        this.setState({
            isError,
            [name]: value,
            isInvalid:isInvalid
        })
    };

    render() {
        const { isError } = this.state;

        return (
            <div style={{marginLeft:'20%', marginRight:'20%', marginBottom:'2%'}}>
                <h1 style={{ position: "relative", marginTop: 80 }}> Provide your valueable feedback!!</h1>
                <h3 style={{ position: "relative", color: "darkBlue" }}>We are growing and constantly enhancing our website. Your suggestions could be substantial in helping us get better .</h3>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="form-group">
                        <TextField
                            required
                            type="text"
                            label="Full Name"
                            className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="name"
                            style={{ width: '70%', margin: 10 }}
                            onChange={this.formValChange}
                            helperText={isError.name}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            type="profession"
                            className={isError.profession.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="profession"
                            label="Profession"
                            style={{ width: '70%',margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.profession.length}
                            helperText={isError.profession}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            type="number"
                            className={isError.age.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="age"
                            label="Age"
                            style={{width: '70%', margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.age}
                            helperText={isError.age}
                        />
                    </div>

                    <div className="email">
                        <TextField
                            required
                            type="email"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="email"
                            label="Email Address"
                            style={{width: '70%',margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.email.length}
                            helperText={isError.email}
                        />
                    </div>

                    <div className="contactNumber">
                        <TextField
                            required
                            type="contactNumber"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="contactNumber"
                            label="Contact Number"
                            style={{ width: '70%', margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.contactNumber.length}
                            helperText={isError.contactNumber}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            required
                            type="number"
                            multiline
                            className={isError.age.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="feedback"
                            label="Feedback"
                            style={{width: '70%', margin: 10 }}
                            onChange={this.formValChange}
                            error={isError.feedback}
                            helperText={isError.feedback}
                        />
                    </div>                    
                    <div style={{marginTop:'2%'}}>
                    <Button
                        type="submit"
                        disabled={this.state.isInvalid}
                        variant="contained"
                        >
                        Submit Feedback
                    </Button>
                    <Link to="/dashboard">
                    <Button
                        type="submit"
                        variant="contained"
                        style={{color:'black', background: '#45caf3', marginLeft:'20%'}}
                        >
                        Home
                    </Button>
                    </Link>
                    </div>                 
                </form>
            </div>
        );
    }
}