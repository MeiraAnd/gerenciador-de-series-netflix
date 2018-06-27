import React, { Component } from 'react';
import api from './Api';

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assitir'
}

class NewSeries extends Component {
    constructor(props){
        super(props)

        this.state = {
        genres: [],
        isLoading: false
        };
    }

    componentDidMount(){
        this.setState({ isLoading: true})
    
        api.loadGenres()
          .then((res)=> {
            this.setState({
              isLoading: false,
              genres: res.data
            })        
          });
    }
    

    render() {
        return (
            <div>
                <section id="intro" className="intro-section container">
                    <h1>Nova série!</h1>
                    <form>
                        Nome: <input type="text" className="form-control" /><br/>
                        Status: 
                        <select>
                            { Object
                                .keys(statuses)
                                .map( key => <option key={key} value={key}>{statuses[key]}</option>)
                            }
                        </select><br/>
                        Genêro: 
                        <select>
                            { Object
                                .keys(statuses)
                                .map( key => <option key={key} value={key}>{statuses[key]}</option>)
                            }
                        </select><br/>
                        Mensagem: <textarea type="text" className="form-control"></textarea><br/>
                    </form>
                </section>
            </div>
        );
    }
}

export default NewSeries;