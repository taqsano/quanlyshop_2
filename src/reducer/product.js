var initState =[
    {
        id:1,
        name:'hoa huong duong',
        price:500,
        status:true
    },
    {
        id:2,
        name:'hoa hong',
        price:500,
        status:false
    }
];
const products = ( state = initState,action)=>{
    switch(action.type){
        default: return [...state]
    }
}

export default products