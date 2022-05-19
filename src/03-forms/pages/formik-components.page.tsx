
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';
type Jobs =
    | 'developer'
    | 'devops'
    | 'db'
interface JobsData {
    name: string;
    value: Jobs
}
const jobs: JobsData[] = [{ name: 'Programador', value: 'developer' }, { name: 'DevOps', value: 'devops' }, { name: 'Base de datos', value: 'db' }];
interface Form {
    firstName: string;
    lastName: string;
    email: string;
    terms: boolean;
    jobType: string;
}

const formCustomSchema = Yup.object({
    firstName: Yup.string().min(5, 'Mínimo 5 carecteres').required('Nombres requerido'),
    lastName: Yup.string().min(5, 'Mínimo 5 carecteres').required('Apellidos requerido'),
    email: Yup.string().min(6, 'Mínimo 6 carecteres').email('Formato incorrecto').required('Email requerido'),
    terms: Yup.boolean().oneOf([true], 'Acepte términos y condiciones'),
    jobType: Yup.string().notOneOf(['db',''], 'Esta profesion no es admitida').required('Seleccione profesión')
})
export default function FormikComponentsPage() {

    return (
        <>
            <div>
                <h1>FormikComponentPage</h1>
                <Formik initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }} onSubmit={(values) => {
                    console.log('Values', values)

                }} validationSchema={formCustomSchema}>
                    {(formik) => (
                        <Form noValidate autoComplete='off'>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name='firstName' component="span" />
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name='lastName' component="span" />
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name='email' component="span" />

                            <label htmlFor="job-id">Job</label>
                            <Field as="select" name="jobType" id="job-id">
                                <option value="" disabled>Seleccione</option>
                                {jobs.map((e, i) => (<option key={i} value={e.value}>{e.name}</option>))}
                            </Field>
                            <ErrorMessage name='jobType' component="span" />

                            <label htmlFor="terms-id">
                                <Field type="checkbox" name="terms" id="terms-id" />Términos
                            </label>
                            <ErrorMessage name='terms' component="span" />

                            <button type='submit'>Submit</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </>
    )
}
