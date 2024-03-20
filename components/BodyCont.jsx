import Link from 'next/link'
import React from 'react'
import FullCalendarComponent from  "@/components/FullCalendarComponent";
import ExternalPage from '../components/ExternalPage';




export const BodyCont = () => {
  return (
    <div className='flex gap-20 ' >
    <div className=' w-2/5 h-auto p-10 flex flex-col-reverse gap-4' >
        <div className='boletin  pl-32 flex flex-col justify-center  rounded shadow overflow-hidden relative bg-[rgb(81,173,226)] w-[100%] h-auto py-8 '>
            <img  className='w-32 absolute left-[-50px] ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1710415327/Marca-Eldorado-FF.png22_t2ecfn.png' ></img>
            <h2 className='text-white' >14/12/2023| BOLETÍN Nº 1</h2>
            <h4 className='text-white' >Eldorado Misiones 14/12/2023</h4>
            <Link href={'/'} className='btnSecondary mt-6' >Descargar  PDF</Link>
        </div>
        <div className='boletin  pl-32 flex flex-col justify-center  rounded shadow overflow-hidden relative bg-[rgb(81,173,226)] w-[100%] h-auto py-8 '>
            <img  className='w-32 absolute left-[-50px] ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1710415327/Marca-Eldorado-FF.png22_t2ecfn.png' ></img>
            <h2 className='text-white' >14/1/2024 | BOLETÍN Nº 2</h2>
            <h4 className='text-white' >Eldorado Misiones 14/1/2024</h4>
            <Link href={'/'} className='btnSecondary mt-6' >Descargar  PDF</Link>
        </div>
        <div className='boletin  pl-32 flex flex-col justify-center  rounded shadow overflow-hidden relative bg-[rgb(81,173,226)] w-[100%] h-auto py-8 '>
            <img  className='w-32 absolute left-[-50px] ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1710415327/Marca-Eldorado-FF.png22_t2ecfn.png' ></img>
            <h2 className='text-white' >14/2/2024| BOLETÍN Nº 3</h2>
            <h4 className='text-white' >Eldorado Misiones 14/2/2024</h4>
            <Link href={'/'} className='btnSecondary mt-6' >Descargar  PDF</Link>
        </div>
        <div className='boletin  pl-32 flex flex-col justify-center  rounded shadow overflow-hidden relative bg-[rgb(0,162,255)] w-[100%] h-auto py-8 '>
            <img  className='w-32 absolute left-[-50px] ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1710415327/Marca-Eldorado-FF.png22_t2ecfn.png' ></img>
            <h2 className='text-white' >ÚLTIMA EDICIÓN | BOLETÍN Nº 4</h2>
            <h4 className='text-white' >Eldorado Misiones 14/3/2024</h4>
            <Link href={'/'} className='btnSecondary mt-6' >Descargar  PDF</Link>
        </div>
    </div>
    <div className=' w-2/5 pl-10 gap-4 ' >
        <Link  className='w-[100%]  flex justify-center items-center p-4 shadow my-4 rounded ' target='_blanck' href={'https://www.boletindigital.misiones.gov.ar'} >
            <img src='https://www.boletindigital.misiones.gov.ar/images/logoBO.png' ></img>
        </Link>
        <ExternalPage/>
    </div>
    </div>
  )
}
