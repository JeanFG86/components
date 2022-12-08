const produtos = [
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


function renderizaProduto(produto) {
    return `<div class="col-sm-4 mb-3">                       
                        <div class="card">
                            <div class="card loja__item">
                                <img class="card-img-top" src="${produto.image}" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${produto.nome}</h5>
                                    <small>${produto.preco}</small>
                                    <p class="card-text">${produto.descricao}</p>
                                    <button href="#" data-value="300" class="btn btn-primary">Adicionar</button>
                                </div>
                            </div>
                        </div>
                    </div>`
}

function renderizaProdutos() {
    let html = '';
    for (let i = 0; i < produtos.length; i++) {
        html = html + renderizaProduto(produtos[i]);
    }
    return html;
}

function renderizaItemCarrinho(produtoCarrinho) {
    return `
        <div class="card carrinho__item">
                                <div class="card-body">
                                    <h5 class="card-title">${produtoCarrinho.nome}</h5>
                                    <p class="card-text">Preço unidade: ${produtoCarrinho.preco} | Quantidade: ${produtoCarrinho.quantidade}</p>
                                    <p class="card-text">Valor: R$${produtoCarrinho.quantidade * produtoCarrinho.quantidade}</p>
                                    <button href="#" data-value="300" class="btn btn-danger btn-sm">Remover</button>
                                </div>
                            </div>
    `
}

function renderizaCarrinho() {
    let html = '';
    for (const produtoId in carrinhoItens) {
        html = html + renderizaItemCarrinho(carrinhoItens[produtoId]);
    }

    return html;
}


document.querySelector('.loja').innerHTML = renderizaProdutos();
document.querySelector('.carrinho__itens').innerHTML = renderizaCarrinho();