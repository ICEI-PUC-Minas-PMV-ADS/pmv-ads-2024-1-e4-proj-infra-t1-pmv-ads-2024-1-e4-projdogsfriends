import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createUser, login } from "../../store/slices/auth";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';




export const Cadastro = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    isPasseador: false,
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    fotoPerfil: null,
    sobreMim: '',
    telefones: {
      codigo: '',
      numero: ''
    },

    enderecos: {
      cep: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: ''

    }




  });

  const stringifyFormData = JSON.stringify(formData);
  


  const handleChange = (e) => {
    const { name, value, type, checked, files, id } = e.target;
    const val = type === 'checkbox' ? checked : type === 'file' ? URL.createObjectURL(files[0]) : value;

  
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'telefones' || name === 'enderecos' ? { ...prevState[name], [id]: val } : val
    }));
  

  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
console.log(stringifyFormData.valueOf())
    dispatch(createUser(stringifyFormData));
    toast.success('Usuário cadastrado com sucesso!')
    return navigate('/auth/login')
   
  };


  return (

    <div className='container sm:mx-auto sm:w-full sm:max-w-sm'>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">


          <div className="border-b border-gray-900/10 pb-12">


            <h2 className="text-base font-semibold leading-7 text-gray-900">Informação Pessoal</h2>


            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="isPasseador"
                    name="isPasseador"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    value={formData.isPasseador}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    Passeador
                  </label>
                  <p className="text-gray-500">Quero me cadastrar como passeador</p>
                </div>
              </div>
            </div>


            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="sobrenome" className="block text-sm font-medium leading-6 text-gray-900">
                  Sobrenome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="sobrenome"
                    id="sobrenome"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.sobrenome}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                  Cpf
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    autoComplete="cpf"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="mt-2">
                  <input
                    id="senha"
                    name="senha"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                </div>
              </div>


              <div className="col-span-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="codigo" className="block text-sm font-medium leading-6 text-gray-900">
                  DDD
                </label>
                <div className="mt-2">
                  <input
                    id="codigo"
                    name="telefones"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.telefones.codigo}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="numero" className="block text-sm font-medium leading-6 text-gray-900">
                  Numero de telefone
                </label>
                <div className="mt-2">
                  <input
                    id="numero"
                    name="telefones"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.telefones.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>







              <div className="col-span-full">
                <label htmlFor="logradouro" className="block text-sm font-medium leading-6 text-gray-900">
                  Endereço
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="enderecos"
                    id="logradouro"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.enderecos.logradouro}
                    onChange={handleChange}
                  />
                </div>
              </div>







              <div className="sm:col-span-3 sm:col-start-1">
                <label htmlFor="numero" className="block text-sm font-medium leading-6 text-gray-900">
                  Número
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="enderecos"
                    id="numero"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.enderecos.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>



              <div className="sm:col-span-3">
                <label htmlFor="bairro" className="block text-sm font-medium leading-6 text-gray-900">
                  Bairro
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="enderecos"
                    id="bairro"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.enderecos.bairro}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">
                  Cidade
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="enderecos"
                    id="cidade"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.enderecos.cidade}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="uf" className="block text-sm font-medium leading-6 text-gray-900">
                  U.F.
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="enderecos"
                    id="uf"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.enderecos.uf}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">
                  Cep
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="enderecos"
                    id="cep"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={formData.enderecos.cep}
                    onChange={handleChange}
                  />
                </div>
              </div>


            </div>
          </div>


        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
          <legend className="mt-1 text-sm leading-6 text-gray-600">
            Essa informação será exibida publicamente, então seja cuidadoso com o que você compartilha.
          </legend>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


            <div className="col-span-full">
              <label htmlFor="sobreMim" className="block text-sm font-medium leading-6 text-gray-900">
                Sobre mim
              </label>
              <div className="mt-2">
                <textarea
                  id="sobreMim"
                  name="sobreMim"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  value={formData.sobreMim}
                  onChange={handleChange}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Escreva algumas linhas sobre você</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="fotoPerfil" className="block text-sm font-medium leading-6 text-gray-900">
                Foto
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {formData.fotoPerfil ? (
                  <img src={formData.fotoPerfil} alt='Foto de perfil' className='h-12 w-12 rounded-full' />
                ) : (
                  <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />)}

                <input
                  id="fotoPerfil"
                  name="fotoPerfil"
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                />
                <label
                  htmlFor="fotoPerfil"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
                >
                  Trocar
                </label>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-6 flex items-center justify-end gap-x-6 ">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            onClick={handleSubmit}
          >
            Salvar
          </button>
          
        </div>
      
      </form>
    </div>
  )
}
