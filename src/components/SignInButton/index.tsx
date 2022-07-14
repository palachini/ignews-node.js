import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import style from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;
  
  return isUserLoggedIn ? (
    <button 
      type="button"
      className={style.signInButton}
    >
      <FaGithub color="#04d361"/>
      Mateus Palachini
      <FiX color="#737380" className={style.closeIcon} />
    </button> 
  ) : (
    <button 
      type="button"
      className={style.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button> 
  )
}