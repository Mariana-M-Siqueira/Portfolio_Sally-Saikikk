const modal = document.querySelector('.principal__modal');
const imagens = document.querySelectorAll('.principal__galeria img');
const fecharModal = document.querySelector('.modal-fechar');
const areaImg = document.querySelector('.modal__exibindo-img');
const areaTitulo = document.querySelector('.item-titulo p');
const areaCategoria = document.querySelector('.categoria p');

console.log(conteudoPag)

modal.classList.add('displayNone');

imagens.forEach((imagem) => {
    let imgSelecionada = imagem.src;
    let imgTitulo = imagem.title;
    let imgCategoria = imagem.classList;

    imagem.addEventListener('click', () => {
        modal.showModal();
        modal.classList.remove('displayNone');
        areaImg.setAttribute('src', `${imgSelecionada}`);

        imgCategoria.forEach((categoria) => {
            areaCategoria.textContent = categoria;
        })

        areaTitulo.textContent = imgTitulo;
    })
})

fecharModal.addEventListener('click', () => {
    modal.close();
    modal.classList.add('displayNone');
})

