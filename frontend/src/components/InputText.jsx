import React from 'react'

const InputText = ({value,name, onChange,...rest}) => {
  return (
    <>
        
             <input
                {...rest}
                value={value}
                name={name}
                onChange={onChange}
                className="input dark:bg-black dark:text-white dark:shadow-amber-50 shadow-sm outline-0 border-amber-100"
            />
   
    </>
  )
}

export default InputText