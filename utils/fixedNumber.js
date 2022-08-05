export const FixedNumber = (number, len) => {
    var mux = number.split('.'); 
    if(mux.length>1){
        return mux[0] + "." + mux[1].toString().substring(0, 2);
    }else{
        return number;
    }    
}