export interface FormProps{
    id:string,
    fields: Array<FormField>
    onSubmit: () => void,
    children? :Array<JSX.Element>
}

export  interface FormField{
    name: string,
    validation?:string,
    type:string,
    id:string,
    required:boolean
}