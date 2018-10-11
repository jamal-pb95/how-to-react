import React from "react";
class SearchBar extends React.Component{
  
  render(){
        
    return(
      <div>
        <form className="form">
          <input className="input" type="text" placeholder="Search Here .. " onChange={this.props.onChange}/>
          <p>
            <input type="checkbox" onChange={this.props.onSelect}/>
            {' '}
            Only show products on stock.
          </p>
        </form>
      </div>
    )
  }
}

class ProductCategoryRow extends React.Component{
  render(){
    return(
      <tr><th className="info" colSpan="2">{this.props.category}</th></tr>
    );
  }
}

class ProductRow extends React.Component{
  render(){
    
  var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    
    return(
     
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
      
    )
  }
}

class ProductTable extends React.Component{
  
  render(){
    const selected = this.props.selected;
    const searchedKey = this.props.searchedKey;
    let products = [];
    let row = [];
    let productCategoryRow = [];
    
    PRODUCT.map((product) => {
      
      products.push(product)
      
      if(selected == true){
        products = products.filter((product) => {
          return product.stocked;
        })
      }
    })
    
    products.map((product) => {
      if(searchedKey.trim().length > 0){
        products = products.filter((product) => {
          return product.name.toLowerCase().indexOf(searchedKey.toLowerCase()) > -1;
        })
      }
    })
    
    products.map((product) => {
      productCategoryRow.push(product.category);
    })
    
    productCategoryRow = Array.from(new Set(productCategoryRow));
    
    productCategoryRow.map((category) => {
      row.push(< ProductCategoryRow category={category} />)
      products.map((product) => {
        if(product.category == category){
          row.push(< ProductRow product={product} />)
        }
      })
    })
    
    
   
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    )
  }
}

class FilterableProductTable extends React.Component {
  state = {
      searchedKey: '',
      selected: false,
    }
  
  handleChange = (e) => {
    this.setState({searchedKey: e.target.value.trim()})
  }
  
  handleSelect = (e) => {
    this.setState({selected: !this.state.selected});
  }
  
  render() {
    
    return (
      <div>
        <SearchBar onChange={this.handleChange} onSelect={this.handleSelect}/>
        <ProductTable searchedKey={this.state.searchedKey} selected={this.state.selected} />
      </div>
    )
  }
}

const PRODUCT = [                
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Bask"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
];

export default FilterableProductTable;