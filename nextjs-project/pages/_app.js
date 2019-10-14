import App, { Container } from 'next/app'

import Layout from '../components/Layout'

import 'antd/dist/antd.css'

class myApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    } 
    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default myApp 