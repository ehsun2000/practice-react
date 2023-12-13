import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const rows = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    phone: '1234567890',
    address: '桃園市中壢區中大路300號',
    age: 33
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@example.com',
    phone: '0987654321',
    address: '台中市西區台灣大道3段1號',
    age: 26
  },
  {
    id: 3,
    name: 'Carol',
    email: 'carol@example.com',
    phone: '2345678901',
    address: '宜蘭縣宜蘭市中山路2段1號',
    age: 99
  },
  {
    id: 4,
    name: 'David',
    email: 'david@example.com',
    phone: '3456789012',
    address: '桃園市中壢區中大路300號',
    age: 54
  },
  {
    id: 5,
    name: 'Eve',
    email: 'eve@example.com',
    phone: '4567890123',
    address: '新竹市東區光復路2段101號',
    age: 49
  },
  {
    id: 6,
    name: 'Frank',
    email: 'frank@example.com',
    phone: '5678901234',
    address: '台南市東區大學路1號',
    age: 66
  },
  {
    id: 7,
    name: 'Grace',
    email: 'grace@example.com',
    phone: '6789012345',
    address: '高雄市鼓山區蓮海路70號',
    age: 21
  },
  {
    id: 8,
    name: 'Henry',
    email: 'henry@example.com',
    phone: '7890123456',
    address: '台南市東區大學路1號',
    age: 58
  },
  {
    id: 9,
    name: 'Isaac',
    email: 'isaac@example.com',
    phone: '8901234567',
    address: '嘉義市西區林森西路1號',
    age: 41
  },
  {
    id: 10,
    name: 'Judy',
    email: 'judy@example.com',
    phone: '9012345678',
    address: '宜蘭縣宜蘭市中山路2段1號',
    age: 33
  }
];

const getAlignment = (value) => {
  return typeof value === 'number' ? 'right' : 'center';
};

const MaterialForm = () => 
  <form>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell variant="head" align="center">姓名</TableCell>
            <TableCell variant="head" align="center">Email</TableCell>
            <TableCell variant="head" align="center">電話</TableCell>
            <TableCell variant="head" align="center">住址</TableCell>
            <TableCell variant="head" align="right">年齡</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell align={getAlignment(row.name)} variant="body">{row.name}</TableCell>
              <TableCell align={getAlignment(row.email)} variant="body">{row.email}</TableCell>
              <TableCell align={getAlignment(row.phone)} variant="body">{row.phone}</TableCell>
              <TableCell align={getAlignment(row.address)} variant="body">{row.address}</TableCell>
              <TableCell align={getAlignment(row.age)} variant="body">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>  
    </TableContainer>
  </form>
  ;


export default MaterialForm;
