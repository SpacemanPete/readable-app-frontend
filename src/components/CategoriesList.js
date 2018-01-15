import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import PropTypes from 'prop-types'
import categoryPanel from '../styles/categoryPanel.css'


class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCatList()
  }

  render() {
    const catList = this.props.catList || null

    return (
      <aside id="categories" >
        <ul>
          {catList !== null && catList.map( (cat) => (
            <li className="cat-filter" key={cat.name}><a href={cat.path}>{cat.name}</a></li>
          ) )}
        </ul>
      </aside>
    )

  }
}

CategoriesList.propTypes = {
  fetchCatList: PropTypes.func.isRequired,
  catList: PropTypes.array
}

function mapStateToProps({ categories }) {
  
  // This bit was super frustrating because initially store.categories has
  // a prototype of 'object' instead of 'array' so I found it tricky to 
  // convert the object into an array for mapping. 
  // Essentially, there's a map() method used here, and one in the render
  // function to return each list-item element. 
  // Seems like extra work and could be unneccessarily heavy at scale...
  const catList = Object.keys(categories).map(function(key) {
    return categories[key]
  })
  return { catList }
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
