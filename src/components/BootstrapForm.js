import React from 'react';
import Table from 'react-bootstrap/Table';


const rows = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      phone: '1234567890',
      address: '桃園市中壢區中大路300號',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      phone: '0987654321',
      address: '台中市西區台灣大道3段1號',
      status: 'Inactive'
    },
    {
      id: 3,
      name: 'Carol',
      email: 'carol@example.com',
      phone: '2345678901',
      address: '宜蘭縣宜蘭市中山路2段1號',
      status: 'Active'
    },
    {
      id: 4,
      name: 'David',
      email: 'david@example.com',
      phone: '3456789012',
      address: '桃園市中壢區中大路300號',
      status: 'Inactive'
    },
    {
      id: 5,
      name: 'Eve',
      email: 'eve@example.com',
      phone: '4567890123',
      address: '新竹市東區光復路2段101號',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Frank',
      email: 'frank@example.com',
      phone: '5678901234',
      address: '台南市東區大學路1號',
      status: 'Inactive'
    },
    {
      id: 7,
      name: 'Grace',
      email: 'grace@example.com',
      phone: '6789012345',
      address: '高雄市鼓山區蓮海路70號',
      status: 'Active'
    },
    {
      id: 8,
      name: 'Henry',
      email: 'henry@example.com',
      phone: '7890123456',
      address: '台南市東區大學路1號',
      status: 'Inactive'
    },
    {
      id: 9,
      name: 'Isaac',
      email: 'isaac@example.com',
      phone: '8901234567',
      address: '嘉義市西區林森西路1號',
      status: 'Active'
    },
    {
      id: 10,
      name: 'Judy',
      email: 'judy@example.com',
      phone: '9012345678',
      address: '宜蘭縣宜蘭市中山路2段1號',
      status: 'Inactive'
    }
];

const BootstrapForm = () => {
    return (
        <Table striped bordered hover style={{ width: '100%', margin: 'auto' }}>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>Email</th>
                    <th>電話</th>
                    <th>住址</th>
                    <th>狀態</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.address}</td>
                        <td>{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BootstrapForm;
