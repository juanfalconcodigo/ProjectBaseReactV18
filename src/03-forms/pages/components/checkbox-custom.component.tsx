import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}
export const CheckboxCustomComponent = ({ label, ...rest }: Props) => {
    const [field] = useField({ ...rest, type: 'checkbox' });
    return (
        <>
            <label htmlFor={rest.id || rest.name}> <input type={'checkbox'} {...rest} {...field} />{label}</label>
            <ErrorMessage name={rest.name} component="span" />
        </>
    )
}
