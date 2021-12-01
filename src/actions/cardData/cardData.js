import * as constants from './constants'

export const latestPostCard = (data, history) => (dispatch) => {
    try {

        const res = data
        dispatch({ type: constants.SET_POST_CARD_DATA, payload: res })
        history.push("/postdetail")
        
        
    } catch (error) {
        console.log("🚀 ~ file: cardData.js ~ line 14 ~ cardDetail ~ error", error)
    }
}

export const sliderCard = (data, history) => (dispatch) =>{
    // try {
    //     const res = data
    //     dispatch({type: constants.SET_SLIDER_CARD_DATA, payload: res})
    //     history.push("/postdetail")

    // } catch (error) {
        
    // }
}

export const tokenCard = (data, history) => (dispatch) =>{
    try {
        const res = data
        dispatch({type: constants.SET_TOKEN_CARD_DATA, payload: res})
        history.push('/garryscollection')
        console.log(history)

    } catch (error) {
        
    }
}

