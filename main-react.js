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
                        React.createElement('button', { className: 'btn btn-primary btn-add', onClick: props.onAddCarrinho.bind(null, props.item) }, 'Adicionar'),
                    ),
                )
            )
        )
    )
}

function ListaProdutoComponent(props) {
    return (
        React.createElement('div', { className: 'row loja' },
            props.children
        )
    )
}

function CarrinhoComponent({ itens, onRemoveItemCarrinho }) {
    return (
        React.createElement('div', { className: 'carrinho' },
            React.createElement('div', { className: 'carrinho__itens' },
                Object.keys(itens).map(function (produtoId, index) {
                    return (
                        React.createElement('div', { className: 'card carrinho__item', key: `item-carrion-${index}` },
                            React.createElement('div', { className: 'card-body' },
                                React.createElement('h5', { className: 'card-title' }, itens[produtoId].nome),
                                React.createElement('p', { className: 'card-text' }, `Preço unidade: R$${itens[produtoId].preco} | Quantidade: ${itens[produtoId].quantidade}`),
                                React.createElement('p', { className: 'card-text' }, `Valor: R$${itens[produtoId].preco * itens[produtoId].quantidade}`),
                                React.createElement('button', { onClick: onRemoveItemCarrinho.bind(null, produtoId), className: 'btn btn-danger btn-sm' }, 'Remover')
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
    const [carrinhoItens, addItemCarrinho] = React.useState({});

    function addCarrinho(produto) {
        console.log(produto)
        if (!carrinhoItens[produto.id]) {
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: 1
                }
            })
        }
        else {
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: ++carrinhoItens[produto.id].quantidade
                }
            })
        }
    }

    function removeItemCarrinho(produtoId) {
        if (carrinhoItens[produtoId].quantidade <= 1) {
            delete carrinhoItens[produtoId]
            addItemCarrinho({ ...carrinhoItens })
        }
        else {
            addItemCarrinho({
                ...carrinhoItens,
                [produtoId]: {
                    ...carrinhoItens[produtoId],
                    quantidade: --carrinhoItens[produtoId].quantidade
                }
            })
        }
    }

    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' },
                React.createElement(ListaProdutoComponent, null,
                    produtosLista.map(function (produto, index) {
                        return React.createElement(ProdutoComponent, { item: produto, onAddCarrinho: addCarrinho, key: `produto-${index}` })
                    })
                )
            ),
            React.createElement('div', { className: 'col-sm-4' },
                React.createElement(CarrinhoComponent, { itens: carrinhoItens, onRemoveItemCarrinho: removeItemCarrinho })
            )
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)