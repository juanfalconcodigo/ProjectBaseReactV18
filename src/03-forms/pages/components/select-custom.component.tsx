import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    [x: string]: any;
}
export const SelectCustomComponent = ({ label, ...rest }: Props) => {
    const [field] = useField({ ...rest });
    return (
        <>
            <label htmlFor={rest.id || rest.name}>{label}</label>
            <select {...rest} {...field} />
            <ErrorMessage name={rest.name} component="span" />
        </>
    )
}
