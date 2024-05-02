import React from 'react';
import { RentCar } from '../interfaces';
import { StyledTableCell, StyledTableRow, StyledButton } from './styledComponents/StyledComponent'
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';

interface FormResultsProps {
  forms: RentCar[];
  onDelete: (index: number) => void;
}

export const FormResults: React.FC<FormResultsProps> = ({ forms, onDelete }) => {
  const theme = useTheme()

  const FormResultStyle = {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '20px',
    marginTop: '50px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
  }

  return (
    <TableContainer component={Paper} sx={FormResultStyle}>
      <Table aria-label="customize table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Place Of Issue</StyledTableCell>
            <StyledTableCell>Start Rent Date</StyledTableCell>
            <StyledTableCell>End Rent Date</StyledTableCell>
            <StyledTableCell>Comments</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms.map((form, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{form.firstName}</StyledTableCell>
              <StyledTableCell>{form.lastName}</StyledTableCell>
              <StyledTableCell>{form.phoneNumber}</StyledTableCell>
              <StyledTableCell>{form.email}</StyledTableCell>
              <StyledTableCell>{form.placeOfIssue}</StyledTableCell>
              <StyledTableCell>{form.startRentDate.format('YYYY-MM-DD hh:mm A')}</StyledTableCell>
              <StyledTableCell>{form.finishRentDate.format('YYYY-MM-DD hh:mm A')}</StyledTableCell>
              <StyledTableCell>{form.comments}</StyledTableCell>
              <StyledTableCell>
                <StyledButton onClick={() => onDelete(index)}>Delete</StyledButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};