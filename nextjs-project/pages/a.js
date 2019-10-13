import { withRouter } from 'next/router'

const A = ({ router, name }) => (<div>AAAAA {router.query.id} {name}</div>)

A.getInitialProps = () => {
  return {
    name: 'zhangsan'
  }
}

export default withRouter(A)