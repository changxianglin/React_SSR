import { withRouter } from 'next/router'

const A = ({ router }) => (<div>AAAAA {router.query.id}</div>)

export default withRouter(A)