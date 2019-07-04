import React, { Component } from 'react';
import CallAPI from '../../utils/ApiCaller'
import {Link} from 'react-router-dom'
import {actAddProductRequest} from '../../action/index'
import {connect} from 'react-redux'
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

   componentDidMount() {
       var {match} = this.props;
       if(match) {
           var id = match.params.id;
           CallAPI(`products/${id}`,'get',null).then(res=>{
               var data = res.data;
               this.setState({
                   id : data.id,
                   txtName:data.name,
                   txtPrice:data.price,
                   chkbStatus:data.status 
               });
           })
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
    // e.preventDefault();
    var {id,txtName,txtPrice,chkbStatus} = this.state;
    var {history} = this.props;
    var product = {
        id: id,
        name : txtName,
        price :txtPrice,
        status:chkbStatus
    };
      if(id){//update
        CallAPI(`products/${id}`,'put',{
            name:txtName,
            price:txtPrice,
            status:chkbStatus
        }).then(res=>{
            history.goBack();
        })
      }
      else{//them moi
        // console.log(product);
        //     debugger;
       this.props.onAddProduct(product);
       history.goBack();
      }
   }
    render() {
        
        var {txtName,txtPrice,chkbStatus} = this.state;
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
             <form onSubmit={this.onSave} >
                 <div className="form-group">
                     <label>Tên Sản Phẩm: </label>
                     <input type="text" name="txtName" className="form-control" id="" value={txtName} onChange={this.onChange}
                     placeholder="Nhập tên sản phẩm" required/>
                 </div>
                 <div className="form-group">
                     <label>Giá: </label>
                     <input type="number" name="txtPrice"className="form-control" id="" value={txtPrice} 
                     onChange={this.onChange} placeholder="Nhập giá sản phẩm" required/>
                 </div>
                 <div className="form-group" name="1">
                     <label>Trạng Thái:</label>
                     <label>
                     <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} checked={!!chkbStatus}/>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductListActionPage)
