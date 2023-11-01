

const Grid = () => {
    
    const gridSystem = {
        height: '100%',
        display: 'grid',
        padding: '5rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
        // gridTemplateRows: '10rem auto 10rem',
        // gridTemplateAreas: `
        //     ". h h h h h h h h h h ."
        //     "m m m c c c c c c c c c"
        //     ". f f f f f f f f f f ."
        //     `,
        gridTemplateRows: 'repeat(auto-fill, 20rem)',
        // gridColumnGap: '1 rem',
        // gridRowGap: '1rem',
    }
    const container = {
        margin: 0,
        padding: 0,
        height: '98vh',
        backgroundColor: '#ddd',
    }
    const header = {
        backgroundColor: 'red',
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        // gridArea: 'h',
    }
    const Footer = {
        backgroundColor: 'orange',
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        // gridArea: 'f',
    }
    const red = {
        backgroundColor: 'red',
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
    const blue = {
        // gridArea: 'm',
        backgroundColor: "blue",
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
    const gray = {
        backgroundColor: 'gray',
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        // gridArea: 'c',
    }
    const orange = {
        backgroundColor: 'orange',
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
    const yellow = {
        backgroundColor: 'yellow',
        padding: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    }
    return (
        <div style={container}>
            <div style={gridSystem}>
                <div style={header}>1</div>
                <div style={blue}>2</div>
                <div style={gray}>4</div>
                <div style={orange}>5</div>
                <div style={yellow}>6</div>
                <div style={red}>7</div>
                <div style={orange}>8</div>
                <div style={blue}>9</div>
                <div style={gray}>10</div>
                <div style={yellow}>11</div>
                <div style={red}>12</div>
                <div style={blue}>13</div>
                <div style={gray}>14</div>
                <div style={Footer}>15</div>
            </div>
        </div>
    );
};

export default Grid;