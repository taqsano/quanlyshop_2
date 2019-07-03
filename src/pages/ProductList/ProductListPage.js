import React, { Component } from 'react';
import ProductList from '../../component/product-list/ProductList';
import ProductItem from '../../component/product-item/ProductItem';
import { connect } from 'react-redux';
import CallAPI from '../../utils/ApiCaller'
import {Link} from 'react-router-dom'
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

componentDidMount() {
    CallAPI('products','get',null).then(res =>{
        this.setState({
            products:res.data
        });
    })
}

onDelete =(id)=>{
    var {products} = this.state;
    CallAPI(`products/${id}`,`delete`,null).then(res =>{
        if(res.status===200){
            var index =this.findIndex(products,id);
            if(index!== -1){
                products.splice(index,1)
                this.setState({
                    products:products
                });
            }
        }
    })
} 

findIndex =(products,id)=>{
    var result = -1;
    products.forEach((products,index) => {
        if(products.id===id){
            result = index
        }
    });
    return result;
}

    render() {
        var {products} = this.state;
        
        // var {products} =this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-info">
                    Thêm Sản Phẩm
                </Link>

                <ProductList >
                    {this.showProducts(products)}
                </ProductList>

            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null, null)(ProductListPage)