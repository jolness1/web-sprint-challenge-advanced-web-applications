import * as Yup from 'yup';

export default Yup.object().shape({
    username : Yup
      .string()
      .required("Username or Password not valid."),
    
    password: Yup
      .string()
      .required("Username or Password not valid.")
  })