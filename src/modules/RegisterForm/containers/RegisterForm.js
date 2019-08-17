import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

export default withFormik({

    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Невалидный email адресс';
        }

        if (!values.password) {
            errors.password = 'Введите пароль';
        } else if (!/(?=.*[a-zA-Z0-9])/i.test(values.password)) {
            errors.password = 'Невалидный пароль';
        }
        return errors;
    },
    handleSubmit: (values, { setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false);
        }, 1000);
    },
    displayName: "RegisterForm"
})(RegisterForm);