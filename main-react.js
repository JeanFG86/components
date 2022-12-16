const produtosLista = [
    {
        id: 'abc123',
        nome: 'Curso de culinária',
        preco: 500,
        descricao: 'Melhor curso de culinária',
        image: 'http://lorempixel.com.br/500/300'
    },
    {
        id: 'abc124',
        nome: 'Curso de Inglês',
        preco: 700,
        descricao: 'Melhor curso de Inglês',
        image: 'http://lorempixel.com.br/500/300'
    },
    {
        id: 'abc125',
        nome: 'Curso de Cabeleleiro',
        preco: 400,
        descricao: 'Melhor curso de Cabeleleiro',
        image: 'http://lorempixel.com.br/500/300'
    }
]

function ProdutoComponent(produto) {
    return (
        React.createElement('div', { className: 'col-sm-4 mb-3' },
            React.createElement('div', { className: 'card loja__item' },
                React.createElement('div', { className: 'loja__item' },
                    React.createElement('img', { className: 'card-img-top', src: produto.image }),
                    React.createElement('div', { className: 'card-body' },
                        React.createElement('h5', { className: 'card-title' }, produto.nome),
                        React.createElement('small', null, `R$${produto.preco}`),
                        React.createElement('p', { className: 'card-text' }, produto.descricao),
                        React.createElement('button', { className: 'btn btn-primary btn-add' }, 'Adicionar'),
                    ),
                )
            )
        )
    )
}

function ListaProdutoComponent({ itens }) {
    return (
        React.createElement('div', { className: 'row loja' },
            itens.map(function (produto) {
                return React.createElement(ProdutoComponent, produto)
            })
        )
    )
}

function CarrinhoComponent() {
    return (
        React.createElement('div', { className: 'carrinho' },
            React.createElement('div', { className: 'carrinho__itens' },
                React.createElement('div', { className: 'card carrinho__item' },
                    React.createElement('div', { className: 'card-body' },
                        React.createElement('h5', { className: 'card-title' }, 'Componentes-React'),
                        React.createElement('p', { className: 'card-text' }, 'Preço unidade: R$300,00 | Quantidade: 2'),
                        React.createElement('p', { className: 'card-text' }, 'Valor: R$600'),
                        React.createElement('button', { className: 'btn btn-danger btn-sm' }, 'Remover')
                    )
                )
            ),
            React.createElement('div', { className: 'carrinho__total mt-2 p-3' },
                React.createElement('h6', null, 'Total: ', React.createElement('strong', null, 'R$600,00')
                )
            )
        )
    )
}

function AppComponente() {
    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' },
                React.createElement(ListaProdutoComponent, { itens: produtosLista })
            ),
            React.createElement('div', { className: 'col-sm-4' },
                React.createElement(CarrinhoComponent)
            )
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)