import { Input } from '@nextui-org/input'
import Link from 'next/link'
import React from 'react'

export const SectionHeader = () => {
  return (
    <div className='SectionHeader flex flex-col gap-4 ' >
      {/* <div className='w-full h-auto px-4' >
        <img className='  w-72 ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1710328096/Marca-Eldorado-FF_v2681s.png' ></img>
      </div> */}
      <div className='w-full  h-auto flex justify-center items-center flex-col px-4' >
        {/* <h1 className=' text-white '>BOLETÍN ELECTRÓNICO</h1> */}
        {/* <h2  className=' text-white ' >Municipalidad de Eldorado</h2> */}
      </div>
      <div className=' w-[100%] h-auto justify-center flex  items-center pt-10' >
        <div className=' w-[98%]  h-fit bg-white rounded flex items-center' >
          <div className='flex flex-col p-7 pb-10 px-10 gap-4 justify-center  ' >
            <h3 className=' font-semibold ' >Buscar Ediciones anteriores</h3>
            <div className='w-fit  h-fit flex gap-10' >
              <form className='flex w-auto  h-auto' >
              <Input className=' w-72 '  size='xl'  type="date"  />
              <Input className=' w-72  pl-10 ' label='Numero de Boletin' size='xl'  type="text"  />
              </form>
              <div className=' flex gap-4 h-fit ' >
                <Link href={'/'} className='primary  ' >Buscar</Link>
                <Link href={'/'} className='primary  ' >Ver Todos</Link>
                <Link href={'/'} className='primary  ' >Ver Ultimos</Link>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className='w-full flex ' >
        <div className=' w-52 h-2 green  ' ></div>
        <div className=' w-52 h-2 yellow  ' ></div>
        <div className=' w-52 h-2 red  ' ></div>
        <div className=' w-52 h-2 green  ' ></div>
        <div className=' w-52 h-2 yellow  ' ></div>
        <div className=' w-52 h-2 red  ' ></div>
        <div className=' w-52 h-2 green  ' ></div>
      </div>
    </div>
  )
}
