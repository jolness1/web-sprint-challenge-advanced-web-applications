import * as Yup from 'yup';

export default Yup.object().shape({
    username : Yup
      .string()
      .required("Username or Password not valid.")
      .min(3, "username must be 3 chars long"),
    
    password: Yup
      .string()
      .required("Username or Password not valid.")
  })