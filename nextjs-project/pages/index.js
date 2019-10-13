import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {
  function gotoTestB() {
    Router.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    })
  }

  return (
    <>
    <Link href = '/a?id=1'>
      <Button>welcome to next</Button>
    </Link>
    <Button onClick = {gotoTestB}>test b</Button>
  </>
  )
  }