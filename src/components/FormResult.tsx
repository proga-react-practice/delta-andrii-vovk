import React from 'react';
import { RentCar } from '../interfaces';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button, useTheme } from '@mui/material';
import { styled } from '@mui/system';

interface FormResultsProps {
  form: RentCar;
  onDelete: () => void;
}

const StyledTableCell = styled(TableCell)(({theme}) => ({
  fontSize: 16,
  textAlign: 'center',
  color: theme.palette.primary.light,
  fontFamily: "'Comic Sans MS', sans-serif",
  padding: 10,
  borderBottom: '1px solid #ddd',
  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCellMobile = styled(StyledTableCell)(() => ({
  textAlign: 'left',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledButton = styled(Button)(({theme}) => ({
  width: '100%',
  backgroundColor: theme.palette.error.light,
  color: theme.palette.secondary.dark,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

export const FormResults: React.FC<FormResultsProps> = ({ form, onDelete }) => {
  const theme = useTheme()

  const FormResultStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '140px',
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
              <StyledTableRow>
                    <StyledTableCell>{form.firstName}</StyledTableCell>
                    <StyledTableCell>{form.lastName}</StyledTableCell>
                    <StyledTableCell>{form.phoneNumber}</StyledTableCell>
                    <StyledTableCell>{form.email}</StyledTableCell>
                    <StyledTableCell>{form.placeOfIssue}</StyledTableCell>
                    <StyledTableCell>{form.startRentDate.format('YYYY-MM-DD hh:mm A')}</StyledTableCell>
                    <StyledTableCell>{form.finishRentDate.format('YYYY-MM-DD hh:mm A')}</StyledTableCell>
                    <StyledTableCell>{form.comments}</StyledTableCell>
                    <StyledTableCell>
                        <StyledButton onClick={onDelete}>Delete</StyledButton>
                    </StyledTableCell>
              </StyledTableRow>
              </TableBody>
          </Table>
      </TableContainer>
    );
};

export const FormResultsMobile: React.FC<FormResultsProps> = ({ form, onDelete }) => {
  const theme = useTheme()

  const MobileStyle = {
    display: 'flex',
    maxWidth: '400px',
    marginLeft: '140px',
    marginBottom: '20px',
    marginTop: '50px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.25)',
  
    '@media (max-width: 1420px)': {
        marginTop: '70px',
    },
    '@media (max-width: 450px)': {
        marginLeft: '35px',
        maxWidth: '350px',
    },
    '@media (max-width: 380px)': {
        marginLeft: '35px',
        maxWidth: '300px',
    },
  }  

  return (
    <TableContainer component={Paper} 
    sx={ MobileStyle }
    >
        <Table aria-label="customize table">
            <TableBody>
                <StyledTableRow>
                    <StyledTableCellMobile>First Name</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.firstName}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>Last Name</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.lastName}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>Phone Number</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.phoneNumber}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>Email</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.email}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>Place Of Issue</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.placeOfIssue}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>Start Rent Date</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.startRentDate.format('YYYY-MM-DD')}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>End Rent Date</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.finishRentDate.format('YYYY-MM-DD')}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCellMobile>Comments</StyledTableCellMobile>
                    <StyledTableCellMobile>{form.comments}</StyledTableCellMobile>
                </StyledTableRow>
                <StyledTableRow sx={{ backgroundColor: 'f5f5f5', justifyContent: 'flex-end',}}>
                    <StyledTableCellMobile colSpan={2}>
                        <StyledButton onClick={onDelete}>Delete</StyledButton>
                    </StyledTableCellMobile>
                </StyledTableRow>
            </TableBody>
        </Table>
    </TableContainer>
  );
};