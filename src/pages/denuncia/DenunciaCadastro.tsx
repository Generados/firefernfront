import React, { ChangeEvent, useState } from 'react'
import Denuncia from '../../models/Denuncia'
import { cadastrar } from '../../service/Service'
import ondasvg from '../../assets/wave.svg'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function DenunciaCadastro() {

    const [isVisible, setIsVisible] = useState<boolean>(true)

    const handleCheckBoxChange = () => {
        setIsVisible(!isVisible);
    }
    const [data, setData] = useState<any>()
    const [denuncia, setDenuncia] = useState<Denuncia>({} as Denuncia)


    async function cadastrarDenuncia(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(data)
        try {
            await cadastrar('/api/denuncias', data)
            alert('Denuncia enviada')
        } catch (error) {
            alert("Erro ao enviar denuncia")
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) {
        setDenuncia({
            ...denuncia,
            [e.target.name]: e.target.value
        })
        setData({
            data: {
                email: denuncia.email,
                Local: denuncia.local,
                descricao: denuncia.descricao,
            }
        })
        console.log(JSON.stringify(denuncia))
    }


    return (
        <>
            <div className='relative '>
                <img src={ondasvg} alt="" className='' />
                <h1 className='absolute top-0 left-0 text-white text-3xl p-4 md:text-6xl  md:mt-20 md:mx-auto '>Denuncie um incêndio</h1>
            </div>
           <Link to={'/home'}> <FaArrowLeft className='text-2xl mx-9 my-8'></FaArrowLeft></Link>
            <div className='container flex flex-col items-center justify-center mx-auto mt-8'>
            
                <form className="w-3/4 flex flex-col gap-4 md:w-1/2" onSubmit={cadastrarDenuncia}>
                    <div className='flex flex-col gap-2'>
                        {isVisible && (
                            <>
                                <label htmlFor="email" className='font-medium'>Email</label>
                                <input
                                    type="text"
                                    className='border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-[#e5e5e5] font-medium focus:bg-white'
                                    name="email"
                                    placeholder="Digite seu email"
                                    value={denuncia?.email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                            </>
                        )}
                        <div className='flex gap-2'>
                            <label>Anônimo</label>
                            <input
                                type="checkbox" onChange={handleCheckBoxChange} />
                        </div>
                        <label htmlFor="local" className='font-medium'>Local</label>
                        <input
                            type="text"
                            className='border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-[#e5e5e5]  font-medium focus:bg-white'
                            name="local"
                            placeholder="Endereço da denúncia"
                            value={denuncia.local}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <label htmlFor="descricao" className='font-medium'>Descrição</label>
                        <textarea
                           
                            className='border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-[#e5e5e5]  font-medium focus:bg-white'
                            name="descricao"
                            placeholder="Descreva sua denúncia"
                            value={denuncia.descricao}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}    rows={5}/>
                    </div>
                    <button type='submit' className='border rounded-xl bg-[#fcbf49] w-1/2 mx-auto p-2 my-6 md:w-56'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default DenunciaCadastro
