import Link from 'next/link'
import Router from 'next/router'


export default () => {
  function gotoTestB() {
    Router.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    }, '/test/b/2')
  }

  return (
    <>
      <span>Index</span>
      <a>Index a</a>
    </>
  )
  }