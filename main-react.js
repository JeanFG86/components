function AppComponente() {
    return (
        React.createElement('h1', null, 'Olá!!')
    )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)