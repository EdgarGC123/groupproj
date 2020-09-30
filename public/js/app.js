class App extends React.Component {
    // STATE
    state = {
        showForm: false,
        title: '',
        author: '',
        genre: '',
        image: '',
        library: []
    }

    // FUNCTIONS
    componentDidMount = () => {
        axios.get('/library').then(response => {
            this.setState({
                library: response.data
            })
        })
    }
    formShow = () => {
        this.setState({
            showForm: true
        })
    }
    formHide = () => {
        this.setState({
            showForm: false
        })
    }

    change = (event) => {
        this.setState({[event.target.id]: event.target.value})
        // console.log(this.state)
    }
    submit = event => {
        event.preventDefault()
        // console.log(this.state)
        axios
          .post('/library', this.state)
          .then(response => 
            this.setState({
              library: response.data, 
              title: '', 
              author: '', 
              genre: '',
              image: '',
              showForm: false
            })
        )
    }

    delete = (event) => {
        axios.delete('/library/' + event.target.value).then(response => {
            this.setState({
                library: response.data
            })
        })
    }

    updateBook = (event) => {
        event.preventDefault()
        const id = event.target.id
        axios.put('/library/' + id, this.state).then(response => {
            this.setState({
                library: response.data,
                title: '', 
                author: '',
                genre: '',
                image: ''
            })
        })
    }

    // RENDER
    render = () => {
        let showForm = this.state.showForm
        return (
            <div className="container">
                {(showForm) 
                    ?<div className="form-container">
                        <form onSubmit={this.submit}>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.change}/><br/>

                            <label htmlFor="author">Author</label>
                            <input type="text" id="author" onChange={this.change}/><br/>

                            <label htmlFor="genre">Genre</label>
                            <input type="text" id="genre" onChange={this.change}/><br/>

                            <label htmlFor="image">Image</label>
                            <input type="text" id="image" onChange={this.change}/><br/>

                            <input className="submit" type="submit" value="add new"/><br/>
                        </form>
                        
                        <button onClick={this.formHide}>Cancel</button>
                    </div>
                    
                    :<button onClick={this.formShow}>add new</button>
                }

                <ul>
                    {this.state.library.map(book => {return (
                        <li key={book._id}>
                            <p>{book.title}</p><br/>
                            <img src={book.image} alt={book.title}/>
                            <button value={book._id} onClick={this.delete}>
                                DELETE
                            </button>

                            <details>
                                <summary>Edit</summary>
                                <form id={book._id} onSubmit={this.updateBook}>
                                    <label htmlFor="title">Title</label><br/>
                                    <input type="text" id="title" onChange={this.change}/><br/>

                                    <label htmlFor="author">Author</label><br/>
                                    <input type="text" id="author" onChange={this.change}/><br/>

                                    <label htmlFor="genre">Genre</label><br/>
                                    <input type="text" id="genre" onChange={this.change}/><br/>

                                    <label htmlFor="image">Image</label><br/>
                                    <input type="text" id="image" onChange={this.change}/><br/>

                                    <input type="submit" value="Update Animal" />
                                </form>
                            </details>
                        </li>
                    )})}
                </ul>
                
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)

