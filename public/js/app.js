class App extends React.Component {
    // STATE

    // FUNCTIONS

    // RENDER
    render = () => {
        return (
            <div classNam="container">
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="name" /><br/>

                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" /><br/>

                    <label htmlFor="genre">Genre</label>
                    <input type="text" id="genre" /><br/>

                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" /><br/>

                    <input type="submit" value="add"/><br/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)

