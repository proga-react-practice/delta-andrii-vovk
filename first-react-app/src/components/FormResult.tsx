import React from 'react';
import { RentCar } from '../interfaces';
import styles from '../App.module.css';

interface FormResultsProps {
  form: RentCar;
}

const FormResults: React.FC<FormResultsProps> = ({ form }) => {
    return (
        <table className={styles.formResult}>
            <tbody>
                <tr>
                    <th>First Name:</th>
                    <th>Last Name:</th>
                    <th>Phone Number:</th>
                    <th>Email:</th>
                    <th>Place of Issue:</th>
                    <th>Start Rent Date:</th>
                    <th>Finish Rent Date:</th>
                    <th>Comments:</th>
                </tr>
                <tr>
                    <td>{form.firstName}</td>
                    <td>{form.lastName}</td>
                    <td>{form.phoneNumber}</td>
                    <td>{form.email}</td>
                    <td>{form.placeOfIssue}</td>
                    <td>{form.startRentDate.format('YYYY-MM-DD')}</td>
                    <td>{form.finishRentDate.format('YYYY-MM-DD')}</td>
                    <td>{form.comments}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default FormResults;