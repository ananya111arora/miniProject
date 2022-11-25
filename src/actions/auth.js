import * as api from '../api/index';



export const signIn = (formData, navigate) => async(dispatch) => {
    try{
        const { data } = await api.signIn(formData);
        if(data.message == "User doesn't exist."){
            alert(data.message);
        }else if(data.message == 'Invalid credentials'){
            alert(data.message);
        }else{
            dispatch({ type: 'AUTH', data})
            navigate('/');
        }
    }catch(error){
        alert("Incorrect Login credentials.")
        console.log(error);
    }
}


export const signUp = (formData, navigate) => async(dispatch) => {
    try{
        const { data } = await api.signUp(formData);
        if(data.message == 'User already exists.'){
            alert(data.message);
        }else{
            dispatch({ type: 'AUTH', data})
            navigate('/');
        }
    }catch(error){
        alert("Password did not match.")
    }
}



export const payUsingPaytm = async(data) => {
    try{
        const response = await api.payUsingPaytm(data);
        return response.data;
    }catch(error) {
        console.log(error);
    }
}


export const restaurants = () => async(dispatch) => {
    try{
        const data = await api.restaurants();
        dispatch({ type: 'RESTAURANTS', data })
    }catch(error){

    }
}


export const checkout = (formData, navigate) => async(dispatch) => {
    try{
        const data = formData;
        dispatch({ type: 'CHECKOUT', data });
        navigate('/checkout');
    }catch(error){
        console.log(error);
    }
}