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

function ProdutoComponent(props) {
    return (
        React.createElement('div', { className: 'col-sm-4 mb-3' },
            React.createElement('div', { className: 'card loja__item' },
                React.createElement('div', { className: 'loja__item' },
                    React.createElement('img', { className: 'card-img-top', src: props.item.image }),
                    React.createElement('div', { className: 'card-body' },
                        React.createElement('h5', { className: 'card-title' }, props.item.nome),
                        React.createElement('small', null, `R$${props.item.preco}`),
                        React.createElement('p', { className: 'card-text' }, props.item.descricao),
                        React.createElement('button', { className: 'btn btn-primary btn-add', onClick: props.onAddCarrinho }, 'Adicionar'),
                    ),
                )
            )
        )
    )
}

function ListaProdutoComponent({ itens, onAddCarrinho }) {
    return (
        React.createElement('div', { className: 'row loja' },
            itens.map(function (produto) {
                return React.createElement(ProdutoComponent, { item: produto, onAddCarrinho: onAddCarrinho })
            })
        )
    )
}

function CarrinhoComponent({ itens }) {
    return (
        React.createElement('div', { className: 'carrinho' },
            React.createElement('div', { className: 'carrinho__itens' },
                Object.keys(itens).map(function (produtoId) {
                    return (
                        React.createElement('div', { className: 'card carrinho__item' },
                            React.createElement('div', { className: 'card-body' },
                                React.createElement('h5', { className: 'card-title' }, itens[produtoId].nome),
                                React.createElement('p', { className: 'card-text' }, `Preço unidade: R$${itens[produtoId].preco} | Quantidade: ${itens[produtoId].quantidade}`),
                                React.createElement('p', { className: 'card-text' }, `Valor: R$${itens[produtoId].preco * itens[produtoId].quantidade}`),
                                React.createElement('button', { className: 'btn btn-danger btn-sm' }, 'Remover')
                            )
                        )
                    )
                })
            ),
            React.createElement('div', { className: 'carrinho__total mt-2 p-3' },
                React.createElement('h6', null, 'Total: ', React.createElement('strong', null, `R$${valorTotal(itens)}`)
                )
            )
        )
    )
}

function valorTotal(carrinhoItens) {
    return Object.keys(carrinhoItens).reduce(function (acc, produtoId) {
        return acc + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade)
    }, 0);
}

function AppComponente() {
    const carrinhoItens = {
        'abc123': {
            id: 'abc123',
            nome: 'Curso de culinária',
            preco: 500,
            descricao: 'Melhor curso de culinária',
            image: 'http://lorempixel.com.br/500/300',
            quantidade: 1
        },
        'abc124': {
            id: 'abc124',
            nome: 'Curso de Inglês',
            preco: 700,
            descricao: 'Melhor curso de Inglês',
            image: 'http://lorempixel.com.br/500/300',
            quantidade: 2
        }
    };

    function addCarrinho() {
        console.log('oi')
    }

    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' },
                React.createElement(ListaProdutoComponent, { itens: produtosLista, onAddCarrinho: addCarrinho })
            ),
            React.createElement('div', { className: 'col-sm-4' },
                React.createElement(CarrinhoComponent, { itens: carrinhoItens })
            )
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)