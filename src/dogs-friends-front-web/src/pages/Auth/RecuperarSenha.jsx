import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

export const RecuperarSenha = () => {

  const navigate = useNavigate();
 
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      toast.success('Você receberá um email com as instruções para recuperar sua senha.')
      setTimeout(() => {
        navigate("/auth/login");
    }, 2000);
      console.log("Email enviado para:", email);
      // Limpar o campo de email após o envio
      setEmail('');
    };
  


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md mb-5">
      <h2 className="text-2xl font-bold mb-6">Recuperar Senha</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Enviar Email de Recuperação
        </button>
      </form>
    </div>
  )
}
