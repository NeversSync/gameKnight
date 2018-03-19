import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StatusWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(3, 33vh);
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  text-align: center;
`;

const IndexPage = () => (
  <StatusWrapper>
    <Status>
      <h1>Is Game Knight happening?</h1>
      <p>Yes, Game Knight lives</p>
      <p><b>When?</b></p>
      <p>Thursday 3/22, 6:30pm-11:30pm</p>
      <p><b>Where?</b></p>
      <p>121 NE Buffalo St.</p>
    </Status>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </StatusWrapper>
)

export default IndexPage
