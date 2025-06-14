import { Controller, useForm } from 'react-hook-form';
import loginImage from '../assets/images/login.svg';
import TextInput from '../components/TextInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const signUpSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is a required field')
        .min(3, 'First name must be at least 3 characters')
        .max(15, 'First name must be at most 15 characters')
        .trim(),
    lastName: yup.string().trim(),
    email: yup
        .string()
        .required('Email is a required field')
        .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Please enter a valid email address'
        )
        .trim(),
    password: yup
        .string()
        .required('Password is a required field')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            'Please choose a strong password'
        )
        .trim(),
});

const SignUp = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signUpSchema),
        defaultValues: { firstName: '', lastName: '', email: '', password: '' },
    });

    const handleSignUp = (data: {
        firstName: string;
        lastName?: string;
        email: string;
        password: string;
    }) => {
        console.log('data', data);
        reset();
    };

    return (
        <div className="lg:grid grid-cols-2 h-screen">
            <img className="hidden lg:block h-full" src={loginImage} alt="" />
            <div className="h-full flex justify-center items-center">
                <div className="shadow-2xl rounded-2xl p-10">
                    <h1 className="text-center text-3xl">Sign Up</h1>
                    <form>
                        <div className="md:flex justify-between gap-5">
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <TextInput
                                        label="First name"
                                        placeholder="Enter your first name"
                                        value={value}
                                        onChange={onChange}
                                        errorMessage={errors.firstName?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <TextInput
                                        label="Last name"
                                        placeholder="Enter your last name"
                                        value={value as string}
                                        onChange={onChange}
                                        errorMessage={errors.lastName?.message}
                                    />
                                )}
                            />
                        </div>
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
                            onClick={handleSubmit(handleSignUp)}
                        >
                            Sign up
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Already have an account?{' '}
                        <Link to="/sign-in" className="text-blue-500 underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
