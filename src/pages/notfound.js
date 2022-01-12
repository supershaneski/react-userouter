import React from 'react'
import withLayout from './withLayout'

const styles = {
    container: {
        height: 'calc(100vh - 200px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        margin: 0,
        paddingBottom: 15,
    },
    caption: {
        margin: 0
    }
}

function Page() {

    return (
        <div style={styles.container}>
            <section>
                <h4 style={styles.title}>Page Not Found</h4>
                <p style={styles.caption}>The page you are looking for is not found.</p>
            </section>
        </div>
    )
}

export default withLayout(Page, 'notfound')