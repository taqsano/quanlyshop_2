import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {

    onDelete =(id)=>{
        if(window.confirm('Xác nhận xoá ?')){
            console.log('id: ',id);
            this.props.onDelete(id)
        }
        
    }
    render() {
    var {index,product} = this.props;
    var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    var statusClass  = product.status ? 'success' :  'warning'
        return (

                <tr>
                    <td>{index+1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <span className={`label label-${statusClass}`}>
                        {statusName}
                        </span>
                    </td>
                    <td>

                        <Link to={`/product/${product.id}/edit`} className="btn btn-primary" >Sửa</Link>
                        <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}>Xoá</button>

                    </td>
                </tr>
           
        );
    }
}

export default ProductItem;