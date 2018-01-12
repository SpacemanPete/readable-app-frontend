import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from '../actions'

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCatList()
  }

  render() {
    // const catList= this.props.catList

    console.log('Props', this.props)
    return (
      <aside id="categories" >
        <ul>

        </ul>
      </aside>
    )

  }
}

function mapStateToProps( store ) {
  const catList = store.categories
  return {
    catList
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchCatList: () => dispatch(getAllCategories())
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
