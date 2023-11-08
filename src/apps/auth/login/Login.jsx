

import React from 'react';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import { FormValidate } from '../../../helpers/Helpers';

import cls from "../../../styles/Login.module.scss"
import { auth } from '../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { HOOKS } from '../../../hooks';

const Login = () => {
  const { actions } = HOOKS.useRedirect();


  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm(
    {
      mode: "onSubmit"
    }
  );

  const handleLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(res => {
        localStorage.setItem("accessToken", res?.user?.accessToken)
        actions.goToHome();
        reset();

      })
  };


  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.login_page}>
          <div className={cls.login_page_card}>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(handleLogin)}>
              <Components.Divider>
                <Components.TextInput
                  type="email"
                  placeholder="Email..."
                  {...register('email', {
                    required: {
                      message: "This area is required!",
                      value: true
                    },
                    maxLength: {
                      message: FormValidate("max", "Email", 25),
                      value: 25
                    },
                    minLength: {
                      message: FormValidate("min", "Email", 3),
                      value: 3
                    }
                  })}
                />

                <Components.Errors err={errors?.email && errors.email.message}/>
              </Components.Divider>
              <Components.Divider>
                <Components.TextInput
                  type="password"
                  placeholder="Password..."
                  {...register('password', {
                    required: {
                      message: "This area is required!",
                      value: true
                    },
                    maxLength: {
                      message: FormValidate("max", "Email", 25),
                      value: 25
                    },
                    minLength: {
                      message: FormValidate("min", "Email", 3),
                      value: 3
                    }
                  })}
                />

                <Components.Errors err={errors?.password && errors.password.message}/>
              </Components.Divider>

              <Components.Divider>
                <Components.AuthSubmit location="Sign In"/>
              </Components.Divider>

              <Components.Divider>
                <Components.AuthNavigate location="signin"/>
              </Components.Divider>
            </form>
            <div className={cls.signIn}>
              <Components.Divider>
                <Components.AuthGit/>
              </Components.Divider>
              
              <Components.Divider>
                <Components.AuthGoogle/>
              </Components.Divider>

              <Components.Divider>
                <Components.AuthTwitter/>
              </Components.Divider>

              <Components.Divider>
                <Components.AuthFacebook/>
              </Components.Divider>
            </div>
          </div>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Login;
