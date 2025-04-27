import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

import './Stylus.css';

const API_URL = "http://localhost:8081/";

export default function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({nome: "", telefone: "" , email: "", endereco: ""}); /*Não precisa do campo "id"   const [form, setForm] = useState({nome: "", telefone: "" , email: "", endereco: ""}); */
  const [errors = [], setErrors] = useState([]);
  const [submitModal, setSubmitModal] = useState(false);
  const [deleteDialog, serDeleteDialog] = useState(false);

  // Carregar usuários da API ao iniciar
  useEffect(() => {
    fetch(`${API_URL}getAll`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Erro ao carregar usuários:", error));
  }, []);

  // Atualizar estado do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors([]); 
  };

  const clear = () =>  {
    setForm({ id: "", nome: "", telefone: "", email: "", endereco: ""});
    setErrors([]);
  }

  const toggleSubmitModal = () => {
    setSubmitModal(!submitModal);
  }


  // Adicionar ou atualizar usuário
  const handleSubmit = () => {

    if (!form.nome || !form.telefone || !form.email || !form.endereco) {
      errors.push("nome");{/* style={{borderColor: errors.includes("nome") ? "red" : "transparent" }} */}
      alert("Favor preencher todos os campos...");
      return;
    }
    
    if (form.id) {
      // Atualizar usuário (PUT)
      fetch(`${API_URL}edit/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedUser) => {
          setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
          setForm({ id: "", nome: "", telefone: "", email: "", endereco: ""});
        })
        .catch((error) => console.error("Erro ao atualizar usuário:", error));
    } else {
      // Criar novo usuário (POST)}
      fetch(`${API_URL}new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newUser) => {
          setUsers([...users, newUser]);
          setForm({ id: "", nome: "", telefone: "", email: "", endereco: ""});
        })
        .catch((error) => console.error("Erro ao adicionar usuário:", error));
    }
    setSubmitModal(false);
    clear();
  };

  const openFormSubmit = () =>{
    clear();
    setSubmitModal(true);
  }
  // Preencher formulário ao editar usuário
  const handleEdit = (user) => {
    setForm(user);
    setSubmitModal(true);
  };

  // Excluir usuário (DELETE)
  const handleDelete = (id) => {
    fetch(`${API_URL}delete/${id}`, { method: "DELETE" })
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.error("Erro ao excluir usuário:", error));
  };

  return (
    
    <div className="fundo">
      

      {submitModal && (
        <div className="modal">
          
          <div onClick={toggleSubmitModal} className="overlay"></div>
          
          <div className="modalContent">
            <button onClick={toggleSubmitModal} className="closeSubmitModal">X</button>
            <h1 className="modalSubmitTitle">{form.id ? "Atualizar" : "New Aluno"}</h1>
            
            <input name="id" type="hidden" value={form.id} onChange={handleChange} placeholder="id" className="inputFildo" />{/* type="hidden" seria uma boa... Não sei se deixo aqui ou não, a aplicação funcionaria engual */}
            <input name="nome" type="text" value={form.nome} onChange={handleChange} placeholder="Nome" className="inputFilds" style={{borderColor: errors.includes('nome') ? "red" : "transparent" }}/>
            <input name="telefone" type="tel" value={form.telefone} onChange={handleChange} placeholder="Telefone" className="inputFilds" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-mail" className="inputFilds" />
            <input name="endereco" type="text" value={form.endereco} onChange={handleChange} placeholder="Endereco" className="inputFilds" />
            
            <div className="btnBar">
              <button onClick={handleSubmit} className="modalFormBtn">{form.id ? "Atualizar" : "Adicionar"}</button>
              <div id="uniformSpacer"></div>
              <button onClick={form.id ? toggleSubmitModal : clear} className="modalFormBtn">{form.id ? "Cancelar" : "Clear"}</button> 
            </div>
            
          </div>
        </div>  
      )}

         
      <div className="greyCard">
        <div className="mainBar">
          <h1 id="mainTitle">Listagem de Alunos</h1>
          
          <button onClick={openFormSubmit} className="modalFormBtn" id="openSubmitModal">Novo Aluno</button>
          
          <div className="totalWrap">
            <h1 id="totaLable">Total:</h1>
            <h1 id="totalCount">{users.length}</h1>
          </div>

        </div>

        <table  className="mainTable">
          <tr>
            <th>Nome:</th>
            <th>Telefone:</th>
            <th>E-mail:</th>
            <th>Endereco:</th>
            <th id="actionsTh">Actions</th>
          </tr>
          {users.map((user) => (
          <tr key={user.id}>
            <td>{user.nome}</td>
            <td>{user.telefone}</td>
            <td>{user.email}</td>
            <td>{user.endereco}</td>
            <td id="buttonsRow">
                <Button onClick={() => handleEdit(user)} className="">Editar</Button>
                <Button onClick={() => handleDelete(user.id)} variant="destructive">Excluir</Button>
              </td>
          </tr>
          ))}
        </table>
        
      </div>{/*...end grey card... */}


    </div>
  );
}