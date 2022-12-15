function AppComponente() {
    /*
    `<div class="col-sm-4 mb-3">                       
        <div class="card loja__item">
            <img class="card-img-top" src="${produto.image}" alt="">
            <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <small>${produto.preco}</small>
                <p class="card-text">${produto.descricao}</p>
                <button data-index="${index}" class="btn btn-primary btn-add">Adicionar</button>
            </div>
        </div>
    </div>`
                    */
    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' },
                React.createElement('div', { className: 'row-loja' },
                    React.createElement('div', { className: 'col-sm-4 mb-3' },
                        React.createElement('div', { className: 'card loja__item' },
                            React.createElement('div', { className: 'loja__item' },
                                React.createElement('img', { className: 'card-img-top', src: 'http://lorempixel.com.br/500/300' }),
                                React.createElement('div', { className: 'card-body' },
                                    React.createElement('h5', { className: 'card-title' }, 'Curso de culinária'),
                                    React.createElement('small', null, 'R$500,00'),
                                    React.createElement('p', { className: 'card-text' }, 'Melhor curso de culinária'),
                                    React.createElement('button', { className: 'btn btn-primary btn-add' }, 'Adicionar'),
                                ),
                            )
                        )
                    )
                )
            ),
            /*
            <div class="card carrinho__item">
                <div class="card-body">
                    <h5 class="card-title">Componentes</h5>
                    <p class="card-text">Preço unidade: R$300,00 | Quantidade: 2</p>
                    <p class="card-text">Valor: R$600</p>
                    <button href="#" data-value="300" class="btn btn-danger btn-sm">Remover</button>
                </div>
            </div>
            */
            React.createElement('div', { className: 'col-sm-4' },
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
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)