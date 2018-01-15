import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import PropTypes from 'prop-types'
import '../styles/CategoryPanel.css'


class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCatList()
  }

  render() {
    const { catList } = this.props

    return (
      <aside id="categories" >
        <ul>
          {catList.map( (cat) => (
            <li className="cat-filter" key={cat.name}>
              <Link to={cat.path} >{cat.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    )

  }
}

CategoriesList.propTypes = {
  fetchCatList: PropTypes.func.isRequired,
  catList: PropTypes.array
}

const mapStateToProps = ({ categories }) => ({
  catList: categories
})

const mapDispatchToProps = ( dispatch ) => ({
  fetchCatList: () => dispatch(fetchCategories())
})

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(CategoriesList)
