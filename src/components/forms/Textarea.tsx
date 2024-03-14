import { ChangeEvent } from "react";

type TextareaProps = {
    value: string;
    setValue: (value: string) => void;
    textareaText: string;
}

function Textarea({ value, setValue, textareaText }: TextareaProps) {
    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value)
    }
  
    return (
    <textarea className='textarea' value={value} onChange={handleChange} rows={5} placeholder={textareaText}></textarea>
  )
}

export default Textarea