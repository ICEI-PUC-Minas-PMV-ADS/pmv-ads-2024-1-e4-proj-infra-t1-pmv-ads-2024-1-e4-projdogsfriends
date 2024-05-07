
import React, { useState, useEffect } from 'react'
import { getUser } from "../../store/slices/auth";
import { useNavigate } from "react-router-dom";


export const Perfil = () => {


    const getValueOrDefault = (object, attribute, defaultValue = '') => {
        return object && object[attribute] !== undefined ? object[attribute] : defaultValue;
    };

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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











let image =  'https://e7.pngegg.com/pngimages/949/339/png-clipart-avatar-profile-pic-masculine-man-human-character-person.png'



    return (


        <div className="container mx-auto px-4 py-8">
            {loading ? (
                <p>Carregando...</p>
            ) : user ? (
                

                <div class="bg-white overflow-hidden shadow rounded-lg border">

                    <img src={user.fotoPerfil ?(user.fotoPerfil): image } alt='fotoPerfil' className='mx-auto mt-1 w-36 h-36 rounded-full' />

                    <div class="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-7 font-medium text-gray-900">
                        {`${user.nome} ${user.sobrenome}`}
                        </h3>
                        <legend class="mt-1 text-sm leading-6 text-gray-600" >Sobre mim:</legend>
                        
                        <div class="flex items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       
                        <p class="mt-1 max-w-2xl text-sm text-gray-900">
                            {user.sobreMim}
                        </p>
                       
                        

                       
                                                

                        </div>

                        
                        
                       
                    </div>
                    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl class="sm:divide-y sm:divide-gray-200">
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Perfil
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    
                                    <p className="mt-2 text-gray-900 ">{user.isPasseador ? "Passeador" : "Cliente"}</p>
                                </dd>


                            </div>
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Email
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.email}
                                </dd>
                            </div>
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Telefone
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.telefones?.map((telefone, index) => (
                                        <div key={index}>
                                            {getValueOrDefault(telefone, 'codigo')} {getValueOrDefault(telefone, 'numero')}
                                        </div>
                                    ))}
                                </dd>
                            </div>
                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Endereço
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.enderecos?.map((endereco, index) => (
                                        <div key={index}>
                                            {getValueOrDefault(endereco, 'logradouro')} - {getValueOrDefault(endereco, 'numero')} - {getValueOrDefault( endereco, 'bairro')}
                                        </div>

                                        
                                    ))}

                                </dd>

                                <dt class="text-sm font-medium text-gray-500">
                                   
                                </dt>


                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.enderecos?.map((endereco,index) => (
                                        <div key={index}>
                                          {` 
                                          ${getValueOrDefault(endereco, 'cidade')} - 
                                          ${getValueOrDefault(endereco, 'uf')} - 
                                          ${getValueOrDefault(endereco, 'cep')}`}
                                        </div>
                                    ))}
                                  

                                </dd>



                            </div>
                        </dl>
                    </div>
                </div>

            ) : (
                <p>Nenhum usuário encontrado.</p>
            )}
        </div>
    )
}
