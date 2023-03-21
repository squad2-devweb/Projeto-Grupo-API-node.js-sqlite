import Globalstyle from "./styles/global.js";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js"
import { useEffect, useState } from "react";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1opx;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setOnEdit]);


  return (
   <>
   <Container>
    <Title>Usuários</Title>
    <Form onEdit={onEdit} users={users} setUsers={setUsers} getUsers={getUsers} setOnEdit={setOnEdit} />
    <Grid users={users} setUsers={setUsers}  setOnEdit={setOnEdit}/>
   </Container>
   <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
   <Globalstyle />
   </>
  );
}

export default App;


//onedit erro