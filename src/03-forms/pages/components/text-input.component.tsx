import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'password' | 'email'
    placeholder?: string;
    [x: string]: any;
}
export const TextInputComponent = ({ label, ...rest }: Props) => {
    const [field] = useField({ ...rest });
    return (
        <>
            <label htmlFor={rest.id || rest.name}>{label}</label>
            <input className='text-input' {...rest} {...field} />
            <ErrorMessage name={rest.name} component="span" />
        </>
    )
}
