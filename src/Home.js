import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './Api';

class Home extends Component {
    
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
    
      renderGenrelink(genres){
        return(
            <span key={genres}>
                <Link to={`/series/${genres}`}>{genres}</Link>
            </span>
        );
    }

    render() {
        return (
            <div>
                <section id="intro" className="intro-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <h1><img src="images/logo.png" /></h1>
                        <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="container">
                    {
                        this.state.isLoading &&
                        <h2 className="text-center">Aguarde, carregando...</h2>  
                    }
                    {

                    !this.state.isLoading &&
                    
                    <div className="text-center">
                        <h2>Ver séries do genêro:</h2>
                        {this.state.genres.map(this.renderGenrelink)}
                    </div>
                    }
                </section>
            </div>
        );
    }
}

export default Home;