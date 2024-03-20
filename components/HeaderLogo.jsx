import React from 'react'

export const HeaderLogo = () => {
  return (
    <div className='w-[100%] h-auto py-8 flex justify-evenly items-center  bg-[rgb(0,162,255)]' >
        <img className=' w-60 ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1710328096/Marca-Eldorado-FF_v2681s.png' ></img>
        <div>
           <h1 className='text-white'>BOLETÍN ELECTRÓNICO</h1>
           <h3 className='text-white' > Municipalidad de Eldorado</h3>
        </div>
    </div>
  )
}
