import React from 'react';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';



const Login = () => {
    

    const validateLogin = (value) => {
        let error;
        if (!value) {
            error = "Login é obrigatório!";
        }
        return error;
    }

    const validateSenha = (value) => {
        let error;
        if (!value) {
            error = "Senha é obrigatória!";
        }
        return error;
    }
    
    const handleSubmitting = (values, { setSubmitting }) => {
        setTimeout(() => {
            //console.info(JSON.stringify(values, null, 12));
            axios.post("https://demo3943303.mockable.io/registrar")
            .then(function (response) {
                //console.log(response)
                alert(response.data.msg);
            }).catch(function (err) {
                console.log(err)
            })
            setSubmitting(false);
        }, 400);
    }

    return(
        <Formik initialValues = {{user: '', password: ''}} 
        onSubmit={handleSubmitting} render={({ handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
            <form>
                <div className="wrapper">
                    <div className="reg-form" onSubmit={handleSubmit}>
                        <div>
                            <h1 className="text">
                                Login
                            </h1>
                        </div>
                        <div className="register-fields">
                            <Field type="text" className="input" name="login" placeholder="login*" autoComplete="off"
                                validate={validateLogin}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="login" />
                            </div>

                            <Field type="password" className="input" name="password" placeholder="login*" autoComplete="off"
                                validate={validateSenha}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="login" />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Logar" disable={isSubmitting} />
                    </div>
                </div>
            </form>
        )}/>
    );
}

export default Login;