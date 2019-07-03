import React, { Component } from 'react';
import CallAPI from '../../utils/ApiCaller'
import {Link} from 'react-router-dom'
class ProductListActionPage extends Component {
   constructor(props) {
       super(props);
       this.state={
           id:'',
            txtName:'',
            txtPrice:'',
            chkbStatus:'',
       }
   }

   onChange =(e)=>{
       var target = e.target;
       var name = target.name;
       var value = target.type === 'checkbox' ? target.checked : target.value;
       this.setState({
           [name]:value
       });
   }

   onSave =(e)=>{
    var {txtName,txtPrice,chkbStatus} = this.state;
    var {history} = this.props;
       e.preventDefault();
       CallAPI('products','post',{
           name:txtName,
           price:txtPrice,
           status:chkbStatus
       }).then(res=>{
           history.goBack();
       })
   }
   
    render() {
        
        var {txtName,txtPrice,chkbStatus} = this.state;
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
             <form onSubmit={this.onSave} >
                 <div className="form-group">
                     <label>Tên Sản Phẩm: </label>
                     <input type="text" name="txtName" className="form-control" id="" value={txtName} onChange={this.onChange}
                     placeholder="Nhập tên sản phẩm"/>
                 </div>
                 <div className="form-group">
                     <label>Giá: </label>
                     <input type="number" name="txtPrice"className="form-control" id="" value={txtPrice} 
                     onChange={this.onChange} placeholder="Nhập giá sản phẩm"/>
                 </div>
                 <div className="form-group" name="1">
                     <label>Trạng Thái:</label>
                     <label>
                     <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange}/>
                     Còn hàng</label>
                     <label className="form-check-label">
                  </label>
                 </div>
                 <Link to="/product-list" className="btn btn-info">
                    Quay Lại
                 </Link>   
                 <button type="submit" className="btn btn-primary">Lưu</button>
             </form>
             
            </div>
        );
    }
}

export default ProductListActionPage;