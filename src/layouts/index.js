import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Game Knight"
      meta={[
        { name: 'description', content: 'Game knight is the best' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header /> */}
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
