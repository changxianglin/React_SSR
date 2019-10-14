import { withRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'

const A = ({ router, name }) => (
  <>
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