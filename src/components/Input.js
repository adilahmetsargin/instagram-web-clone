import { useEffect, useRef, useState } from "react"

const Input = ({label, type='text', ...props}) => {
    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setInputType] = useState(type)


    useEffect(() => {
        if (show) {
            setInputType('text')
            inputRef.current.focus()
        }else if (type==='password') {
            setInputType('password')
            inputRef.current.focus()
        }
    }, [show, type])
    

    return (    
        <label className=" relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
            <input ref={inputRef} required={true} type={inputType} className=" px-2 text-xs  outline-none  w-full h-[38px] valid:pt-[10px] peer" {...props} />
            <small className="absolute top-1/2 left-[9px] text-xs cursor-text  pointer-events-none text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value && (
                <button type="button" onClick={() => setShow(show => !show)} className=" h-full flex items-center text-sm font-semibold pr-2">
                    {show ? 'Hide' : 'Show'}
                </button>
            )}
        </label>
  )
}

export default Input