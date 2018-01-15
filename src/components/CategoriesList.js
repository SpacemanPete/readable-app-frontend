import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import PropTypes from 'prop-types'


class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCatList()
  }

  render() {
    const catList = this.props.catList || null

    console.log(catList)
    return (
      <aside id="categories" >
        <ul>
          {catList !== null && catList.map( (cat) => (
            <li key={cat.name}><a href={cat.path}>{cat.name}</a></li>
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
