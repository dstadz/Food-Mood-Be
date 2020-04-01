import * as React from 'react';
import SignInUp from '../components/SignInUp'
interface Props {
  text:string;
}

const LandingPage: React.FC<Props> = () => {
  return(
    <div>
      Welcome to Food Mood!
      <SignInUp />
      <div>
        Find something Now
      </div>
    </div>
  )
}
export default LandingPage