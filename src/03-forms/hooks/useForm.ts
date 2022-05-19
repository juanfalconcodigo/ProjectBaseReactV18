import { useState, ChangeEvent, FormEvent } from 'react';

export const useForm = <T>({ initialState }: { initialState: T }) => {
    const [form, setForm] = useState<T>({ ...initialState });

    const onRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Register User', form);
    }

    const reset = () => {
        setForm((state) => ({
            ...state,
            ...initialState
        }))
    }

    const onChangeFormRegister = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log('[NAME]', name);
        console.log('[VALUE]', value);
        setForm((state) => ({
            ...state,
            [name]: value
        }));
    }
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        form,
        onRegister,
        onChangeFormRegister,
        reset,
        isValidEmail
    }
}
