import { Form, Formik } from 'formik';
import data from '../data/custom-form.json';
import { TextInputComponent } from './components/text-input.component';
import '../styles/styles.css';
import { SelectCustomComponent } from './components/select-custom.component';
import * as Yup from 'yup';

const customValidations: { [key: string]: any } = {}
const initialValues: { [key: string]: any } = {};
for (const iterator of data) {
    initialValues[iterator.name] = iterator.value;
    if (!iterator.validators) continue;
    let schema = Yup.string();
    for (const validation of iterator.validators) {
        if (validation.type === "required") {
            schema = schema.required('Este campo es requerido')
        }
        if (validation.type === "minLength") {
            schema = schema.min((validation as any).value || 5, `Ingreso por lo menos ${(validation as any).value || 5} carácteres`)
        }
        if (validation.type === "email") {
            schema = schema.email('Formato inválido');
        }
    }
    customValidations[iterator.name] = schema;
}

const schemaCustom = Yup.object({ ...customValidations });


export default function FormikDynamicPage() {
    return (
        <>
            <div>
                {/*  {JSON.stringify(data, null, 2)} */}
                <h1>Formik Dynamic</h1>
                <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)} validationSchema={schemaCustom}>
                    {() => (
                        <Form autoComplete='off' noValidate>
                            {
                                data.map(({ name, label, placeholder, type, value, options }) => {
                                    if (type === 'password' || type === "input" || type === "email") {
                                        return (<TextInputComponent key={name} label={label} name={name} placeholder={placeholder} type={type as any} />)
                                    } else if (type === "select") {
                                        return (
                                            <SelectCustomComponent key={name} label={label} name={name}>
                                                <option value="" disabled>Seleccione</option>
                                                {options?.map((e: any) => (<option key={e.id} value={e.id}>{e.game}</option>))}
                                            </SelectCustomComponent>
                                        )
                                    }
                                }
                                )
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
