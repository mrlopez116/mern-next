import React, { Component } from 'react';
import "./PatientForm.css";
import { Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
const APIURL = '/api/patients';
import * as apiCalls from '../api';

class PatientForm extends Component {
    constructor(props) {
        super(props);
        // Default Data or Data that we will input
        this.state = {
            dropdownOpen: false,
            firstName: "",
            lastname: "",
            title: "",
            phoneNumber: "",
            email: ""
        };
        // Methods to bind
        this.handleChange = this.handleChange.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.addPatient = this.addPatient.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleTitle(event) {
        this.setState({
            title: event.currentTarget.textContent
        })
    }
    handleSubmit(event) {
        event.preventDefault(); // Stops the page from refreshing
        alert(`You typed: ${this.state.firstName}`);
        this.addPatient(
            this.state.firstName,
            this.state.lastName,
            this.state.title,
            this.state.phoneNumber,
            this.state.email
        )
        this.setState({
            firstName: "",
            lastName: "",
            title: "",
            phoneNumber: "",
            email: ""
        });
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    async addPatient(fn, ln, tl, pn, em) {
        alert("in addPatient");
        let newPatients = await apiCalls.createPatient(fn, ln, tl, pn, em);
        this.setState({ patients: [...this.state.patients, newPatients] })
    }

    render() {

        return (
            <div className="PatientForm">
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="PatientForm-title">Add a New Patient</h1>

                    <FormGroup>
                        <Label for="firstName">First Name*</Label>
                        {/* Name has to be the same as the name in state */}
                        <Input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="lastName">Last Name*</Label>
                        {/* Name has to be the same as the name in state */}
                        <Input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                {this.state.title || `Title*`}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.handleTitle}>Mrs.</DropdownItem>
                                <DropdownItem onClick={this.handleTitle}>Ms.</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.handleTitle}>Mr.</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.handleTitle}>Dr.</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email*</Label>
                        {/* Name has to be the same as the name in state */}
                        <Input
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number*</Label>
                        {/* Name has to be the same as the name in state */}
                        <Input
                            type="text"
                            placeholder="(626) 123-1234"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                            required />
                    </FormGroup>
                    <Button color="danger" block size="lg">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default PatientForm;