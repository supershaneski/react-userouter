import React from 'react'
import withLayout from './withLayout'
import { styles } from './styles'

function Page(props) {
    
    const {context, ...otherProps} = props

    return (
        <div style={styles.container}>
            <section>
                <h4>Blogs</h4>
            </section>
            <section>
                <h4>Context</h4>
                <p style={styles.panel}>
                    { JSON.stringify(context) }
                </p>
            </section>
            <section>
                <h4>Other Props...</h4>
                <p style={styles.panel}>
                    { JSON.stringify(otherProps) }
                </p>
            </section>
            <section>
                <h4>Select Blog Items</h4>
                <ul>
                {
                    Array(5).fill(0).map((item, index) => {
                        const link = String(Math.round(10000 + 9999 * Math.random()))
                        return (
                            <li key={index}>
                            Item {index}: <a href={`/post/${link}`}>{`/post/${link}`}</a>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
            <section>
                <h4>Submit Query</h4>
                <ul>
                {
                    Array(5).fill(0).map((item, index) => {
                        const link = String(Math.round(10000 + 9999 * Math.random()))
                        return (
                            <li key={index}>
                            Query {index}: <a href={`?id=${link}`}>{`?id=${link}`}</a>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        </div>
    )
}

export default withLayout(Page, 'blogs')