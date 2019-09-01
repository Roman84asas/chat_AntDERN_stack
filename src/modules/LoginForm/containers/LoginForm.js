import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "../../../utils/helpers/validate";

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validate: values => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {

    },
    displayName: "LoginForm"
})(LoginForm);