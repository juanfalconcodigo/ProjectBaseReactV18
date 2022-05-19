import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';
import { TextInputComponent,CheckboxCustomComponent,SelectCustomComponent } from './components';

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
export default function FormikAbstractPage() {
    return (
        <>
            <div>
                <h1>FormikAbstractPage</h1>
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
                            <TextInputComponent name='firstName' label="First Name" type='text' />
                            <TextInputComponent name='lastName' label="Last Name" type='text' />
                            <TextInputComponent name='email' label="Email" type='email' />
                            <SelectCustomComponent label={'Job'} name={'jobType'} id="job-id">
                                <option value="" disabled>Seleccione</option>
                                {jobs.map((e, i) => (<option key={i} value={e.value}>{e.name}</option>))}
                            </SelectCustomComponent>
                            <CheckboxCustomComponent name="terms" id="terms-id" label={'Términos'}/>

                            <button type='submit'>Submit</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </>
    )
}
