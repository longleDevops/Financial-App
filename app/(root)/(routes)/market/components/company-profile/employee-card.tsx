import React from 'react'

interface EmployeeCardProps {
  data: {
    amount: string,
    name: string
  }
}

const EmployeeCard = ({ data }: EmployeeCardProps) => {
  const { amount, name } = data;
  return (
    <div className='bg-white w-[80px] h-[80px] flex flex-col items-center justify-center'>
      <p>{name}</p>
      <p>{amount}</p>
    </div>
  )
}

export default EmployeeCard