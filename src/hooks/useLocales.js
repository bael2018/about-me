import { useSelector } from "react-redux"
import { engLocal } from "../locales/eng"
import { ruLocal } from "../locales/ru"

export const useLocales = () => {
    const { isLocal } = useSelector(state => state.app)

    if(isLocal){
        return ruLocal
    }else{
        return engLocal
    }
}