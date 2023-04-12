// Add data to local storage
const addToDb =id =>{
    let jobCart ={}
    
    // get previous data from local storage
    const storedData = localStorage.getItem('data')
    if(storedData){
        jobCart = JSON.parse(storedData)
    }

    // add quantity 
    const quantity =jobCart[id]
    if(quantity){
        const newQuantity =quantity +1;
        jobCart[id] =newQuantity
    }
    else{
        jobCart[id] =1
    }

    localStorage.setItem('jobCart',JSON.stringify(jobCart))

}

// get stored data from job cart
const getStoredJobCart = () => {
    let jobCart = {};
    // get previous data from local storage
    const storedData = localStorage.getItem('jobCart'); // use 'jobCart' instead of 'data'
    if (storedData) {
        jobCart = JSON.parse(storedData);
    }
    return jobCart;
}

export { addToDb, getStoredJobCart };