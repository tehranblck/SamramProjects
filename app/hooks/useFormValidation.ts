interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export function useFormValidation(formData: FormData) {
    const validateForm = (): FormErrors => {
        const errors: FormErrors = {};

        if (!formData.name) errors.name = 'Ad tələb olunur';
        if (!formData.email) errors.email = 'Email tələb olunur';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Düzgün email daxil edin';
        if (!formData.phone) errors.phone = 'Telefon tələb olunur';
        if (!formData.message) errors.message = 'Mesaj tələb olunur';

        return errors;
    };

    return { errors: validateForm(), validateForm };
} 