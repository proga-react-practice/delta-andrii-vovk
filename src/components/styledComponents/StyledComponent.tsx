import { TableCell, tableCellClasses, TableRow, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    fontSize: 16,
    textAlign: 'center',
    color: theme.palette.primary.light,
    fontFamily: "'Comic Sans MS', sans-serif",
    padding: 10,
    borderBottom: '1px solid #ddd',
    
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

export const StyledTableCellMobile = styled(StyledTableCell)(() => ({
  textAlign: 'left',
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '@keyframes scaleDown': {
    '0%': {
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      backgroundColor: 'transparent',
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: 'top',
      backgroundColor: theme.palette.background.default,
    },
  },
  animation: 'scaleDown 1s ease-in-out',
}));

export const StyledButton = styled(Button)(({theme}) => ({
  width: '100%',
  backgroundColor: theme.palette.error.light,
  color: theme.palette.secondary.light,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  borderColor: theme.palette.primary.main,
  fontSize: '16px',
  color: theme.palette.primary.dark,
  boxSizing: 'border-box',
  '&.Mui-error': {
      borderColor: theme.palette.error.main,
  },
}));