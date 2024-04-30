import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../store/slices/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";


export const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(login(formData));
      
      if (response) {
        toast.success(`Bem-vindo, ${response.nome}!`)
       
        setTimeout(() => {
          navigate("/user/pesquisa");
      }, 2000);
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Erro ao fazer login. Por favor, verifique seu email ou senha.");
    }
  };


  return (


    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Bem vindo!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="./RecuperarSenha" className="font-semibold text-blue-700 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="senha"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.senha}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não tem cadastro?{' '}
            <a href="./Cadastro" className="font-semibold leading-6 text-blue-700 hover:text-indigo-500">
              Cadastre-se agora
            </a>
          </p>
        </div>
      </div>
    </>

  )
}
