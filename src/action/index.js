import * as Types from '../const/ActionTypes';
import CallAPI from '../utils/ApiCaller'

export const actFetchProduct =(products)=>{
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
export const actFetchProductRequest =()=>{
    return (dispatch)=>{
        CallAPI('products','get',null).then(res=>{
            dispatch(actFetchProduct(res.data))
        })
    }
}
////
export const actDeleteProduct =(id)=>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductRequest =(id)=>{
    return (dispatch)=>{
        CallAPI(`products/${id}`,'delete',null).then(res=>{
            dispatch(actDeleteProduct(id))
        })
    }
}
//////
export const actAddProduct =(product)=>{
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest =(product)=>{
    return (dispatch)=>{
        return CallAPI(`products`,'post',product).then(res=>{
            dispatch(actAddProduct(res.data));
        })
    }
}
//////
export const actGetProduct =(product)=>{
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
export const actGetProductRequest =(id)=>{
    return (dispatch)=>{
        return CallAPI(`products/${id}`,'get',null).then(res=>{
            dispatch(actGetProduct(res.data));
            
        }) 
    }
}
//////
export const actUpdateProduct =(product)=>{
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
export const actUpdateProductRequest =(product)=>{
    return (dispatch)=>{
        return CallAPI(`products/${product.id}`,'put',product).then(res=>{
            dispatch(actUpdateProduct(res.data));
        }) 
    }
}