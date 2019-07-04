import * as Types from '../const/ActionTypes'
var initState = [];
var findIndex =(products,id)=>{
    var result = -1;
    products.forEach((products,index) => {
        if(products.id===id){
            result = index
        }
    });
    return result;
}
const products = (state = initState, action) => {
    var index = -1;
    var {id,product} = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
           index = findIndex(state,id)
           state.splice(index,1)
           return[...state];
        case Types.ADD_PRODUCT:
           state.push(action.product);
           return[...state];
        case Types.UPDATE_PRODUCT:
           index = findIndex(state,product.id);
           state[index] = product;
           return[...state];
        default: return [...state]
    }
}

export default products  