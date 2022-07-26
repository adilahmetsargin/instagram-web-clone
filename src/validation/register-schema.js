import Yup from './validate'

export const RegisterSchema = Yup.object().shape({

    email: Yup.string().required().email(),
    fullName: Yup.string().required(),
    userName: Yup.string().required(),
    password: Yup().string().required(),
})
