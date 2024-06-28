import { object, ref, string } from "yup";

export const signupSchema = object({
    first_name: string().required("First Name is required"),
    last_name: string().required("Last Name is required"),
    email: string().email().required("Email is required"),
    password: string().required("Password is required").min(5),
    confirm_password: string().oneOf([ref('password'), null], 'Password must match').required("Confirm Password is required")
});

export const signinSchema = object({
    email: string().email().required("Email is required"),
    password: string().required("Password is required"),
});