// These are the imports for the app
import React from 'react'
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App, { Container } from 'next/app'

// Componenents imports
import SideNavbar from '../components/global/SideNavbar'


class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //     // calls page's `getInitialProps` and fills `appProps.pageProps`
    //     const appProps = await App.getInitialProps(appContext);

    //     return { ...appProps }
    // }

    // Anything that is before or after components is what will be shown on EVERY page.
    render() {
        const { Component, pageProps } = this.props
        return (
            <div>
                <SideNavbar />
                <Component {...pageProps} />
            </div>
        )
    }
}

export default MyApp