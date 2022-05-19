import { useFormik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';
interface Form {
    firstName: string;
    lastName: string;
    email: string;
}
const formCustomSchema = Yup.object({
    firstName: Yup.string().min(5, 'Mínimo 5 carecteres').required('Nombres requerido'),
    lastName: Yup.string().min(5, 'Mínimo 5 carecteres').required('Apellidos requerido'),
    email: Yup.string().min(6, 'Mínimo 6 carecteres').email('Formato incorrecto').required('Email requerido')
})
export default function FormikPage() {
    const { handleSubmit, errors, touched, getFieldProps } = useFormik<Form>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log('Values', values)

        },
        validationSchema: formCustomSchema
    });

    return (
        <>
            <div>
                <h1>FormikPage</h1>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"{...getFieldProps('firstName')} />
                    {(errors.firstName && touched.firstName) && <span>{errors.firstName}</span>}
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" {...getFieldProps('lastName')} />
                    {(errors.lastName && touched.lastName) && <span>{errors.lastName}</span>}
                    <label htmlFor="email">Email</label>
                    <input type="email" {...getFieldProps('email')} />
                    {(errors.email && touched.email) && <span>{errors.email}</span>}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}
