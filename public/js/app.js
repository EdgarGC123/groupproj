class App extends React.Component {
    // STATE
    state = {
        showForm: false
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
    // RENDER
    render = () => {
        let showForm = this.state.showForm
        return (
            <div className="container">
                {(showForm) 
                    ?<form>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="name" /><br/>

                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" /><br/>

                        <label htmlFor="genre">Genre</label>
                        <input type="text" id="genre" /><br/>

                        <label htmlFor="image">Image</label>
                        <input type="text" id="image" /><br/>

                        <input className="submit" type="submit" value="add new" onClick={this.formHide}/><br/>
                    </form>
                    :<button onClick={this.formShow}>add new</button>
                }
                
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)

