import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: opx opx 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-botton: insert;
    padding-botton: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;




export const Tbody = styled.tbody``;

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handledelete = async (id) => {
        await axios
        .delete("http://localhost:8800/" + id)
        .then(({ data }) => {
            const newArray = users.filter((users) => users.id !== id);
    
            setUsers(newArray);
            toast.success(data);
        }).catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
    };


  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th onlyweb>Fone</Th>
                <Th></Th>
                <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {users.map((item, i) => (
                <Tr key={i}>
                    <Td width="30%">{item.nome}</Td>
                    <Td width="30%">{item.email}</Td>
                    <Td width="20%" onlyweb>{item.fone}</Td>
                    <Td alignCen  width="5%">
                        <FaEdit onClick={() => handleEdit(item)} />
                    </Td>
                    <Td alignCen  width="5%">
                        <FaTrash onClick={() => handledelete(item.id)}/>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}

export default Grid
