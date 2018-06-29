import React, { Component } from 'react';
import api from './Api';

class Series extends Component {

    constructor(props){
        super(props)

        this.state = {
            genres: [],
            isLoading: false
        };
    }

    componentDidMount(){
        this.setState({ isLoading: true})

        api.LoadSeriesByGenre(this.props.match.params.genre)
          .then((res)=> {
            this.setState({
              isLoading: false,
              series: res.data
            })        
          });
    }

    renderSeries(){
        return(
            <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                        How I met your mother</h4>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                        <p className="lead">
                            AÇÃO</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                        <a className="btn btn-success" href="">Gerenciar</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )

    }

    render() {
        return (
            <section id="intro" className="intro-section">
                <h1>Séries {this.props.match.params.genre} </h1>

                <div id="series" className="row list-group">
                
                </div>
            </section>
           
        );
    }
}

export default Series;