import React, {useState} from 'react'
import { useForm } from 'react-hook-form';





interface FormData {
  name: string;
  email:string;
  password: string;
  confirmPassword?: string;
}

const SignInUp: React.FC = () =>{
  const [newMember, setnewMember] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  // const data: Formdata = {
  //   name:
  // }
  const onSubmit = (data:any) => {

    console.log(data)
  }


  //console.log(errors);
  return(
    <div>
      Sign {newMember ? 'Up' : 'In'} !
      <button onClick={()=> setnewMember(!newMember)}>.</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='username' name="name" ref={register({required: true, maxLength: 100})} />
        <input type="password" placeholder='password' name="password" ref={register} />
        {newMember && <input type="password" placeholder='confirm password' name="confirmPassword" ref={register} />
}
        <input type="submit" />
      </form>
      <button>Google</button>
      <button>FaceBook</button>
    </div>
  )
}

export default SignInUp