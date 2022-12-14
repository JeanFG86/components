function AppComponente() {
    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' }, null),
            React.createElement('div', { className: 'col-sm-4' }, null)
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)