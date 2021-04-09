import { useContext } from 'react'
import { AuthGlobal } from '../../Context/store/AuthGlobal';

const checkLogin = () => {
  const context = useContext(AuthGlobal);

  if (
    context.stateUser.isAuthenticated === false ||
    context.stateUser.isAuthenticated === null
  ) {
    props.navigation.navigate("Login");
  }

}

export default checkLogin
