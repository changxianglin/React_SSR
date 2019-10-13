import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {
  function gotoTestB() {
    Router.push('/test/b')
  }

  return (
    <>
    <Link href = '/a'>
      <Button>welcome to next</Button>
    </Link>
    <Button onClick = {gotoTestB}>test b</Button>
  </>
  )
  }