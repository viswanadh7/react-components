import { Controller, useForm } from 'react-hook-form';
import loginImage from '../assets/images/login.svg';
import TextInput from '../components/TextInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const signInSchema = yup.object().shape({
    email: yup.string().trim().required(),
    password: yup.string().trim().required(),
});

const SignIn = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signInSchema),
        defaultValues: { email: '', password: '' },
    });

    const handleSignIn = (data: { email: string; password: string }) => {
        console.log('data', data);
        reset();
    };

    return (
        <div className="lg:grid grid-cols-2 h-screen">
            <img className="hidden lg:block h-full" src={loginImage} alt="" />
            <div className="h-full flex justify-center items-center">
                <div className="min-w-2/3 shadow-2xl rounded-2xl p-10">
                    <h1 className="text-center text-3xl">Sign In</h1>
                    <form>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    label="Email"
                                    placeholder="Enter your email"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    type="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />
                        <button
                            className="submit-button"
                            onClick={handleSubmit(handleSignIn)}
                        >
                            Sign in
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Didn't have an account?{' '}
                        <Link to="/sign-up" className="text-blue-500 underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
