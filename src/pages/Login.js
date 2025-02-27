import React, { useState } from 'react';
import { Button, Grid, Typography, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    const handleLogin = (userData) => {
        console.log(userData, "userdata")
        const user = users.find(user => user.email === userData?.email && user.password === userData?.password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user,"testing")
        if (user) {
            dispatch(login(user));
            localStorage.setItem('isLoggedIn', true);
            toast.success('Login Successfull!')
            navigate('/dashboard');
        } else {
            // alert('Wrong email or password');
            toast.error('Invalid Email or Password!')
        }
    };

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });


    return (
        <Grid container className='h-screen w-full'>
            <Grid item xs={12} sm={12} md={6}>
                <img src='assets/loginPage.jpg' className='object-cover object-center w-full h-full' alt="Login" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className='flex justify-center items-center'>
                <Grid container justifyContent='center' alignItems='center' className='w-full  ' padding={5}>
                    {/* <Typography variant="h4">Login</Typography> */}
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={loginValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            const data = {
                                email: values.email,
                                password: values.password
                            };
                            handleLogin(data)
                            setSubmitting(false);

                        }}
                    >
                        {(formik) => (
                            <Form className='w-full sm:w-2/3 md:w-3/5'>
                                <Grid item container justifyContent='center' alignItems='center'>
                                    <Typography variant='h5' className='text-lg'>Login</Typography>
                                </Grid>
                                <TextField
                                    required
                                    name='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="outlined-required"
                                    label="Email"
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    // value={email}
                                    // onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    name='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    // onChange={e => setPassword(e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                    // onClick={handleLogin}
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                >
                                    Login
                                </Button>
                                <Grid item container justifyContent='center' alignItems='center'>
                                    <span>Don't Have an Account?</span>
                                    <Link to='/register'> Register</Link>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login;
