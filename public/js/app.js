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
        console.log(this.state)
    }

    // RENDER
    render = () => {
        let showForm = this.state.showForm
        return (
            <div className="container">
                {(showForm) 
                    ?<form onSubmit={this.submit}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.change}/><br/>

                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" onChange={this.change}/><br/>

                        <label htmlFor="genre">Genre</label>
                        <input type="text" id="genre" onChange={this.change}/><br/>

                        <label htmlFor="image">Image</label>
                        <input type="text" id="image" onChange={this.change}/><br/>

                        <input className="submit" type="submit" value="add new" onClick={this.formHide}/><br/>
                    </form>
                    :<button onClick={this.formShow}>add new</button>
                }

                <ul>
                    {this.state.library.map(book => {return(
                        <li key={book._id}>
                            {book.title}<br/>
                            <img src={book.image} alt={book.title}/>
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

