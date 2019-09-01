import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "../../../utils/helpers/validate";

import store from "../../../redux/store";
import {axios} from "../../../core";

const LoginFormContainer = withFormik({
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
    handleSubmit: (values, { setSubmitting, props }) => {
        return axios.post("/user/login", values).then(({data}) => {
            setSubmitting(false);
        })
        .catch(() => {
            setSubmitting(false);
        });
    },

    displayName: "LoginForm"
})(LoginForm);

export default LoginFormContainer;