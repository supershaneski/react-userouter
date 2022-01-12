import React from 'react'

const styles = {
    header: {
        backgroundColor: '#999'
    },
    banner: {
        margin: 0,
        padding: 10,
    },
    list: {
        margin: 0,
        padding: 10,
        display: 'flex',
        listStyle: 'none'
    },
    navitem: {
        backgroundColor: 'chartreuse',
        padding: 5,
        marginRight: 10,
    },
    selnavitem: {
        backgroundColor: 'magenta',
        padding: 5,
        marginRight: 10,
    }
}

export default function withLayout(WrappedComponent, name = '') {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <header style={styles.header}>
                        <h4 style={styles.banner}>useRouter | Custom Hook</h4>
                        <nav>
                            <ul style={styles.list}>
                                <li style={name === 'home' ? styles.selnavitem : styles.navitem}>
                                    <a href="/">Home</a>
                                </li>
                                <li style={name === 'contact' ? styles.selnavitem : styles.navitem}>
                                    <a href="/contact">Contact Us</a>
                                </li>
                                <li style={name === 'blogs' ? styles.selnavitem : styles.navitem}>
                                    <a href="/post">Blogs</a>
                                </li>
                            </ul>
                        </nav>
                        
                    </header>
                    <main>
                        <WrappedComponent {...this.props} />
                    </main>
                </div>
            )
        }
    }
}