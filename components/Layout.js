import React from 'react'
import styles from './Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const name = 'Thanh Ha';
export const siteTitle = 'Next.js Sample Website';
const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {
                    home ? (
                        <>
                            <Image
                                priority
                                src="/images/picture.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt=""
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>

                        </>) : (
                        <>
                            <Link href="/">
                                <Image
                                    priority
                                    src="/images/picture.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt=""
                                />
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )
                }
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}

export default Layout