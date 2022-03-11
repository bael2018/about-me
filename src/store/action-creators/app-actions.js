export const appAcionTypes = {
    ACTIVE_MODAL: 'ACTIVE_MODAL',
    ACTIVE_LINK: 'ACTIVE_LINK',
    LOCAL_TYPE: 'LOCAL_TYPE',
    SET_INFO: 'SET_INFO',
    BURGER_ACTIVE: 'BURGER_ACTIVE'
}

export const appActions = {
    setAppLocales: () => {
        return {
            type: appAcionTypes.LOCAL_TYPE
        }
    },
    setActiveLink: payload => {
        return {
            type: appAcionTypes.ACTIVE_LINK,
            payload
        }
    },
    setActiveModal: () => {
        return {
            type: appAcionTypes.ACTIVE_MODAL
        }
    },
    setWorkInfo: payload => {
        return {
            type: appAcionTypes.SET_INFO,
            payload
        }
    },
    setBurgerActive: () => {
        return {
            type: appAcionTypes.BURGER_ACTIVE,
        }
    }
}