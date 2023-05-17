import { useSelector } from "react-redux";
import { selectUser, getStatusIsLoggedIn, getStatusIsRefreshing, getToken} from "redux/selectors";


export const useAuth = () => {
  
    return {
        user: useSelector(selectUser),
        isLoggedIn: useSelector(getStatusIsLoggedIn),
        isRefreshing: useSelector(getStatusIsRefreshing),
        token: useSelector(getToken)
    }
}