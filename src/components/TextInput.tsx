import type { ChangeEvent } from 'react';

type TTextInput = {
    type?: 'text' | 'password';
    label: string;
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
};

const TextInput = ({
    type,
    label,
    value,
    placeholder,
    onChange,
    errorMessage,
    ...rest
}: TTextInput) => {
    return (
        <div className="flex flex-col my-5">
            <label className="text-lg font-semibold">{label}</label>
            <input
                type={type ?? 'text'}
                placeholder={placeholder}
                className="border-b py-1 px-2 text-lg focus:outline-none focus:border-blue-600"
                value={value}
                onChange={(event) => onChange(event)}
                {...rest}
            />
            {errorMessage && (
                <p className="text-red-500 text-sm font-light">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default TextInput;
