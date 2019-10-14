import { withRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const A = ({ router, name }) => (
  <>
    <Title>This is Title</Title>
    <Link href = '#aaa'>
      <a className = 'link'>
        A {router.query.id} {name}
      </a>
      <style jsx>{`
        a {
          color: blue;
        }
        .link {
          color: red;
        }
      `}</style>
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </Link>
  </>
)

A.getInitialProps = (ctx) => {
  return {
    name: 'zhangsan'
  }
}

export default withRouter(A)