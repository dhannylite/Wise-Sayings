import { useCallback, useReducer } from "react";

const intialState = {
    data: null,
    loading: null,
    error:null
}
function httpReducer(state, action) {
    if (action.type === "SEND") {
        return {
            data: null,
            loading: "pending",
            error:null
        }
    }
    if (action.type === "SUCCESS") {
        return {
            data: action.data,
            loading: "completed",
            error:null
        }
    }
    if (action.type === "ERROR") {
        return {
            data: null,
            loading: null,
            error: action.data
        }
    }
}


function useHttp(requestFn, pending=false) {
    const [httpState, dispatch] = useReducer(httpReducer, {
            data: null,
            loading: pending ? 'pending' : null,
            error:null
    })
    const sendRequest = useCallback(async (requestData) => {
        dispatch({ type: "SEND" })
        try {
            const responseData = await requestFn(requestData) 
            // console.log(responseData, requestFn)
            dispatch({type:"SUCCESS", data:responseData})
        } catch(error) {
            dispatch({type:"ERROR", error})
        }
        
    },[requestFn])
    return {
        ...httpState,
        sendRequest
    }
}

export default useHttp