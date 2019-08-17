import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserRegister(values))
            .then(({ status }) => {
                if (status === "success") {
                    setTimeout(() => {
                        props.history.push("/");
                    }, 50);
                }
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: "RegisterForm"
})(RegisterForm);