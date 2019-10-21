// Purpose of file: This is the file that loads all the patients.
import React, { Component } from 'react';
import PatientBlock from './PatientBlock';
import * as apiCalls from '../../api/patients';

class PatientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: []
        }
        this.loadPatients = this.loadPatients.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }
    componentWillMount() {
        this.loadPatients();
    }

    async loadPatients() {
        let patients = await apiCalls.getPatients();
        this.setState({ patients });
    }

    async deletePatient(id) {
        await apiCalls.removePatient(id);
        const patients = this.state.patients.filter(Patient => Patient._id !== id);
        this.setState({ patients: patients });
    }

    render() {
        const patients = this.state.patients.map((p) => (
            <PatientBlock
                key={p._id}
                {...p}
            />
        ));
        return (
            <div className="PatientList">
                <h1>Directory!</h1>
                <ul>
                    {patients}
                </ul>
            </div>
        )
    }
}

export default PatientList;