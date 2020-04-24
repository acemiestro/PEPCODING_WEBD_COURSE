import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService"
import Like from "./like.jsx"
import Pagination from "./pagination.jsx"
import Genre from "./genre.jsx"

class MovieTable extends Component {
    state = {
        movies: getMovies(),
        genres: [{_id: 1, name:"All Genres"}, ...getGenres()],
        limit: 4,
        currentPage: 1
    }
    handleDelete = (movie) =>{
        const clone = [...this.state.movies]
        const filtered = clone.filter((m) =>{
            return m !== movie
        })
        this.setState({movies:filtered})
    }
    handleColorChange = (movie) => {
        const clone = [...this.state.movies]
        const idx = clone.indexOf(movie)
        clone[idx]["liked"] =! clone[idx]["liked"]
        this.setState({movies: clone})
    }
    pageChange = (newPage) => {
        this.setState({currentPage: newPage})
    }
    render() { 
        let {movies, limit, currentPage} = this.state;
        let cPageMovies = pagination(movies, limit, currentPage)
        function pagination(movies, limit, currentPage){
            const start = limit * (currentPage - 1)
            const end = limit * currentPage
            return movies.slice(start, end)     
        }
        return (
            <React.Fragment>
                <div className = "row">
                    <div className = "col-4">
                        <Genre genres = {this.state.genres}
                        ></Genre>
                    </div>
                    <div className = "col-8">
                        <table className="table">
                            <tr>
                                <th scope = "col">Title</th>
                                <th scope = "col">Genre</th>
                                <th scope = "col">Stock</th>
                                <th scope = "col">Rate</th>
                            </tr>
                        <tbody>
                            {
                                cPageMovies.map ((movie)=>{
                                    return(
                                        <tr scope = "row" key = {movie["_id"]}>
                                            <td>{movie["title"]}</td>
                                            <td>{movie["genre"]["name"]}</td>
                                            <td>{movie["numberInStock"]}</td>
                                            <td>{movie["dailyRentalRate"]}</td>
                                            <td>
                                                <Like liked = {movie["liked"]} myfn = {() =>{
                                                    this.handleColorChange(movie)
                                                }}></Like>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={()=>{
                                                    this.handleDelete(movie)
                                                }}> Delete </button>
                                            </td> 
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                        <Pagination currentPage = {currentPage}
                        limit = {limit}
                        size = {movies.length}
                        getPageNumber = {this.pageChange}
                        ></Pagination>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MovieTable;