import React from 'react'
import withLayout from './withLayout'
import { styles } from './styles'

function Page(props) {

    const {context, ...otherProps} = props

    return (
        <div style={styles.container}>
            <section>
                <h4>Home Page</h4>
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
        </div>
    )
}

export default withLayout(Page, 'home')