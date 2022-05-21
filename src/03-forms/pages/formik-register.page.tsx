import { Form, Formik, useFormik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';
import { TextInputComponent } from './components';
interface Form {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const formCustomSchema = Yup.object({
    name: Yup.string().min(5, 'Mínimo 5 carecteres').max(15, 'Máximo 15 carácteres').required('Ingrese su nombre'),
    email: Yup.string().email('Formato incorrecto').required('Ingrese su correo'),
    password: Yup.string().min(6, 'Mínimo 6 carecteres').required('Ingrese su contraseña'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Porfavor ingrese la misma contraseña').required('Campo requerido'),
})
export default function FormikRegisterPage() {
    return (
        <>
            <div>
                <h1>Formik Register Page</h1>
                <Formik initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }} onSubmit={(values) => {
                    console.log('Values', values)

                }} validationSchema={formCustomSchema}>
                    {({ resetForm }) => (
                        <Form noValidate autoComplete='off'>
                            <TextInputComponent name='name' label="Nombre" type='text' />
                            <TextInputComponent name='email' label="Correo" type='text' />
                            <TextInputComponent name='password' label="Contraseña" type='password' />
                            <TextInputComponent name='confirmPassword' label="Repetir Contraseña" type='password' />
                            <button type='submit'>Submit</button>
                            <button type='button' onClick={() => resetForm()}>Reset</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
