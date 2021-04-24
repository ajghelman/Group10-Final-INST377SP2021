import {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
    this.makeTable = this.makeTable.bind(this);
    this.state = { meals: [] };
    }

    async componentDidMount() {
        // console.log('GenresXArtists')
        const results = await fetch('http://localhost:3030/api/wholeGenresRoute');
        // console.log('results', results);
        const json = await results.json();
        // console.log("check data", json);
        console.table(json.data);
        this.setState({genres: json.data})
    }

    makeTable() {

    }
}

render() {
    return (
    <table>
        {this.state.genres.map(genre => <tr><td><span>{genre.GENRE_NAME}</span><br/></td></tr>)}
    </table>    
        );
}

export default Table;