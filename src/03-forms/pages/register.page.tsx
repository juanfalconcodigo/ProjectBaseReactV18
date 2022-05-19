import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface IRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterPage() {
    const { form, onChangeFormRegister, onRegister, reset, isValidEmail } = useForm<IRegisterForm>({ initialState: { name: '', email: '', password: '', confirmPassword: '' } });

    const { email, name, password, confirmPassword } = form;
    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={(e) => onRegister(e)} autoComplete="off" noValidate>
                <input type="text" placeholder='Name' onChange={(e) => onChangeFormRegister(e)} name="name" value={name} className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este campo es requerido</span>}
                <input type="email" placeholder='Email' onChange={(e) => onChangeFormRegister(e)} name="email" value={email} className={`${!isValidEmail(email) && 'has-error'}`} />
                {!isValidEmail(email) && <span>El correo no es válido</span>}
                <input type="password" placeholder='Password' onChange={(e) => onChangeFormRegister(e)} name="password" value={password} className={`${(password.trim().length <= 0 || password.trim().length > 8) && 'has-error'}`} />
                {password.trim().length <= 0 && <span>Este campo es requerido</span>}
                {password.trim().length > 8 && <span>Máximo 8 caracteres</span>}
                <input type="password" placeholder='Repeat Password' onChange={(e) => onChangeFormRegister(e)} name="confirmPassword" value={confirmPassword} className={`${(confirmPassword.trim().length <= 0 || confirmPassword.trim().length > 8 || password !== confirmPassword) && 'has-error'}`} />
                {confirmPassword.trim().length <= 0 && <span>Este campo es requerido</span>}
                {confirmPassword.trim().length > 8 && <span>Máximo 8 caracteres</span>}
                {password !== confirmPassword && <span>Las contraseñas tienen que ser iguales</span>}
                <button type='submit'>Create</button>
                <input type="button" onClick={reset} value="Reset" />
            </form>
        </div>
    )
}
