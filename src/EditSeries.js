import React, { Component } from 'react';
import api from './Api';
import { Redirect } from 'react-router-dom';

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assitir'
}

class EditSeries extends Component {
    constructor(props){
        super(props)

        this.state = {
            genres: [],
            isLoading: false,
            redirect: false,
            series: {}
        };

        this.saveSeries = this.saveSeries.bind(this);
    }

    componentDidMount(){
        this.setState({ isLoading: true})
        
        api.loadSeriesById(this.props.match.params.id)
            .then((res)=>{
                this.setState({ series: res.data })
                this.refs.name.value = this.state.series.name,
                this.refs.genre.value = this.state.series.genre,
                this.refs.comments.value = this.state.series.comments,
                this.refs.status.value = this.state.series.status
                
            })
            
        api.loadGenres()
          .then((res)=> {
            this.setState({
              isLoading: false,
              genres: res.data
            })        
          });
    }
    
    saveSeries(){
        const NewSeries = {
            id: this.props.match.params.id, 
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comment: this.refs.comments.value
        }

        api.updateSeries(NewSeries)
            .then((res)=>{
                this.setState({
                    redirect: '/series/'+this.refs.genre.value
                })
            });
    }

    render() {
        return (
            
            <div>
                <section id="intro" className="intro-section container">
                    { this.state.redirect &&
                        <Redirect to={this.state.redirect} />
                    }
                    <h1>Editar série!</h1>
                    <form>
                        <div className="form-group ">
                            <input type="text" ref='name' className="form-control" id="name" placeholder="Nome" required />
                        </div>
                       
                        <div className="form-group">
                            <select ref='status' className="form-control" id="status" required>
                                { Object
                                    .keys(statuses)
                                    .map( key => <option key={key} value={key}>{statuses[key]}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <select ref='genre' className="form-control" id="genre" required>
                                { this.state.genres
                                    .map( key => <option key={key} value={key}>{key}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea ref='comments' type="text" className="form-control" rows="3" id="mensagem" placeholder="Mensagem" required></textarea>
                        </div>
                        <button type="button" className="btn btn-default" onClick={this.saveSeries}>Salvar</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default EditSeries;