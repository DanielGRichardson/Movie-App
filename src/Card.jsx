
export default function Card() {
    return (

        <div className="card">
            <div style={styles.container}>
                    <div style={{ width: 291, height: 25, left: 110, top: 15, position: 'absolute', color: 'black', fontSize: 15, fontWeight: '400', wordWrap: 'break-word' }}>Barbie (2023)</div>
                    <img style={{ width: 80, left: 15, top: 15, position: 'absolute' }} src="https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" />
                    <p style={styles.text}>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius condimentum scelerisque. Aliquam dignissim ullamcorper arcu, vel mattis sem sagittis vitae. Mauris vulputate, lectus ac semper auctor, diam velit semper ante, at luctus nibh massa ac arcu. Cras at nisl at libero vehicula venenatis. Donec at neque sit amet lacus tincidunt ullamcorper. Nunc sit amet justo tortor. Proin dictum ac massa quis suscipit.
                        <br />Quisque tellus nibh, efficitur nec diam ac, fringilla gravida augue. Nullam dignissim nec nisl ut hendrerit. Aliquam id erat sed arcu tempor gravida facilisis vitae nulla. Maecenas quis massa dictum, scelerisque lectus ut, mattis elit. Aliquam auctor purus in luctus iaculis. Aenean eu elit et mauris laoreet ullamcorper sed in neque. Donec eget nulla lectus. Nam et odio tempor, sagittis nulla nec, convallis elit. Integer convallis, nisl sed consequat laoreet, sem nibh fermentum urna, vel placerat quam nunc eu est. Nunc non fringilla tortor.”
                    </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 735,
        minHeight: 140,
        position: 'absolute',
        background: '#D9D9D9',
        borderRadius: 20
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },

    text: {
        width: 614,
        // left: 101,
        // top: 36,
        marginLeft: 110,
        marginTop: 40,
        position: 'relative',
        color: 'black',
        fontSize: 13,
        fontWeight: '400',
        wordWrap: 'break-word'
    },
}