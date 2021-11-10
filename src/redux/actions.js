import { 
    LANGUAGE_TYPE 
} from "./types"

export const rootAction = {
    langAction: () => {
        return {
            type: LANGUAGE_TYPE
        }
    }
}