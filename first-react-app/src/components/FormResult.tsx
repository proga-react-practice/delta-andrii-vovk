import React from 'react';
import { RentCar } from '../interfaces';
import styles from '../App.module.css';

interface FormResultsProps {
  form: RentCar;
  onDelete: () => void;
}

export const FormResults: React.FC<FormResultsProps> = ({ form, onDelete }) => {
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
                <button className={styles.deleteCard} onClick={onDelete}>Delete</button>
            </tbody>
        </table>
    );
};

export const FormResultsMobile: React.FC<FormResultsProps> = ({ form, onDelete }) => {
    return (
        <table className={styles.formResultMobile}>
            <tbody>
                <tr>
                    <th>First Name:</th>
                    <td>{form.firstName}</td>
                </tr>
                <tr>
                    <th>Last Name:</th>
                    <td>{form.lastName}</td>
                </tr>
                <tr>
                    <th>Phone Number:</th>
                    <td>{form.phoneNumber}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{form.email}</td>
                </tr>
                <tr>
                    <th>Place of Issue:</th>
                    <td>{form.placeOfIssue}</td>
                </tr>
                <tr>
                    <th>Start Rent Date:</th>
                    <td>{form.startRentDate.format('YYYY-MM-DD')}</td>
                </tr>
                <tr>
                    <th>Finish Rent Date:</th>
                    <td>{form.finishRentDate.format('YYYY-MM-DD')}</td>
                </tr>
                <tr>
                    <th>Comments:</th>
                    <td>{form.comments}</td>
                </tr>
                <button className={styles.deleteCard} onClick={onDelete}>Delete</button>
            </tbody>
        </table>
    );
};