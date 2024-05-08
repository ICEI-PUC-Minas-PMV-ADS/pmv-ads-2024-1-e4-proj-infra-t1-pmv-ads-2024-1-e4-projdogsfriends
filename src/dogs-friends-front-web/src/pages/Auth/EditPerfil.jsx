
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { api } from "../../api/axios"
import { getUser } from "../../store/slices/auth";





export const EditPerfil = () => {
    const getValueOrDefault = (object, attribute, defaultValue = '') => {
        return object && object[attribute] !== undefined ? object[attribute] : defaultValue;
    };

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {

                const token = localStorage.getItem('access_token');

                if (!token) {
                    throw new Error('Token não encontrado no localStorage.');
                }

                const userData = await getUser(token);
                setUser(userData);
                setLoading(false);
            } catch (error) {
                console.log('Erro ao obter dados do usuário:', error);
                setLoading(false);

            }
        };

        fetchUser();
    }, []);

    const handleSubmit = () => { }

    const handleChange = () => { }


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
                                        value={user.isPasseador}
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
                                    Nome*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        value={user.nome}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="sobrenome" className="block text-sm font-medium leading-6 text-gray-900">
                                    Sobrenome*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="sobrenome"
                                        id="sobrenome"
                                        autoComplete="family-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        value={user.sobrenome}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cpf*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="cpf"
                                        id="cpf"
                                        autoComplete="cpf"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        value={user.cpf}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="senha"
                                        name="senha"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        value={user.senha}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

<div className="col-span-5">





                            {
                                user.telefones?.map((telefones, index) => (


                                    <div key={index} className="flex">

                                        <div key={index + "codigo"} className="mx-2 w-1/4">
                                            <label htmlFor={`telefoneCodigo${index}`} className="block text-sm font-medium leading-6 text-gray-900">DDD:</label>

                                            <div className="mt-2">
                                                <input
                                                    id={`telefoneCodigo${index}`}
                                                    name="telefones"
                                                    type="text"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                                    value={telefones.codigo}
                                                    onChange={(e) => handleChange(e, index, 'codigo')}
                                                />

                                            </div>

                                        </div>

                                        <div key={index + 'numero'} className="mx-2">
                                            <label htmlFor={`telefoneNumero${index}`} className="block text-sm font-medium leading-6 text-gray-900">Número de telefone:</label>
                                            <div className="mt-2">
                                                <input
                                                    id={`telefoneNumero${index}`}
                                                    name="telefones"
                                                    type="text"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                                    value={telefones.numero}
                                                    onChange={(e) => handleChange(e, index, 'numero')}
                                                />
                                            </div>
                                        </div>


                                    </div>



                                ))
                            }

</div>















                            <div className="col-span-full">
                                <label htmlFor="logradouro" className="block text-sm font-medium leading-6 text-gray-900">
                                    Endereço
                                </label>
                                <div className="mt-2">


                                </div>
                            </div>







                            <div className="sm:col-span-3 sm:col-start-1">
                                <label htmlFor="numero" className="block text-sm font-medium leading-6 text-gray-900">
                                    Número
                                </label>
                                <div className="mt-2">

                                </div>
                            </div>



                            <div className="sm:col-span-3">
                                <label htmlFor="bairro" className="block text-sm font-medium leading-6 text-gray-900">
                                    Bairro
                                </label>
                                <div className="mt-2">

                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cidade
                                </label>
                                <div className="mt-2">

                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="uf" className="block text-sm font-medium leading-6 text-gray-900">
                                    U.F.
                                </label>
                                <div className="mt-2">

                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cep
                                </label>
                                <div className="mt-2">

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
                                    value={user.sobreMim}
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
                                {user.fotoPerfil ? (
                                    <img src={user.fotoPerfil} alt='Foto de perfil' className='h-12 w-12 rounded-full' />
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

                        {/* <div className="col-span-full">
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
            </div> */}
                    </div>
                </div>

                <div className="m-6 flex items-center justify-end gap-x-6 ">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={''}
                    >
                        Salvar
                    </button>

                </div>

            </form>
        </div>
    )
}
