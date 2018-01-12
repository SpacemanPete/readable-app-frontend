import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCatList()
  }

  render() {
    const catList= this.props.catList

    console.log(catList)
    return (
      <aside id="categories" >
        <ul>
        </ul>
      </aside>
    )

  }
}

function mapStateToProps( store ) {
  const catList = store.categories.categories
  return {
    catList
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchCatList: () => dispatch(fetchCategories())
  }
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(CategoriesList)


// {categories.map(( cat ) => (
//   <li key={cat}>
//     {cat}
//   </li>
// ))}
