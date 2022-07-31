import React from 'react'

const List = ({people}) => {
  return (
    <div>
        {people.map((person) => {
            const{id,name,age,image} = person
            return (
                <article key={id} className='flex flex-row  px-10 py-3'>
                    <img src={image} alt={name} className='w-[60px] h-[60px] rounded-full'/>
                    <div className='flex flex-col px-3 pt-2'>
                        <p className=''>{name}</p>
                        <p className='text-left text-slate-400 text-[15px]'>{age} years</p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List