import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import backgroundImg from '../assets/buffalo-tongue.jpg'

const StatusWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(3, 33vh);
  justify-content: center;
  align-items: center;
  background: linear-gradient(hsla(0, 0%, 20%, .4) 0%, hsla(0, 0%, 15%, .6) 100%), url(${backgroundImg});
  /* background: hsla(0, 0%, 9%, .7); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right; 
  `;

const Status = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  /* background: hsla(0, 0%, 9%, .7); */
  color: white;
`;

const FbLink = styled.a`
  width: 200px;
  color: white;
  text-decoration: none;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid white;
  background-color: hsla(0, 0%, 0%, .1);
  text-decoration: none;
  transition: all 350ms;

  &:hover {
    background-color: white;
    color: hsla(0, 0%, 2%, .8);
  }

  &:active {
    background-color: hsla(200, 20%, 70%, .8);
  }
`;

const IndexPage = () => (
  <StatusWrapper>
    <Status>
      <h1>Is Game Knight happening this week?</h1>
      <p>Yes, Game Knight lives</p>
      <p><b>When?</b></p>
      <p>Thursday 6/21, 6:30pm-11:30pm</p>
      <p><b>Where?</b></p>
      {/* <p style={{marginBottom: '50px'}}>1915 NE 56th ave.</p> */}
      <p style={{marginBottom: '50px'}}>121 NE Buffalo St.</p>
      <FbLink href="https://www.facebook.com/groups/1729528793760175/" target="_blank">
        Facebook group
      </FbLink>
    </Status>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </StatusWrapper>
)

export default IndexPage
