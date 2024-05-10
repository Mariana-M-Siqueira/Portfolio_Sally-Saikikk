const modal = document.querySelector('.principal__modal__exibindo');
const imagens = document.querySelectorAll('.principal__galeria img');
const fecharModal = document.querySelector('.modal__exibindo-fechar');
const areaImg = document.querySelector('.modal__exibindo-img');
const areaTitulo = document.querySelector('.item-titulo p');
const areaCategoria = document.querySelector('.categoria p');

modal.close();

imagens.forEach((imagem) => {
    let imgSelecionada = imagem.src;
    let imgTitulo = imagem.title;
    let imgCategoria = imagem.classList;

    imagem.addEventListener('click', () => {
        modal.showModal();
        modal.classList.remove('close');
        areaImg.setAttribute('src',`${imgSelecionada}`);

        imgCategoria.forEach((categoria) => {
            areaCategoria.textContent += categoria;
        })

        areaTitulo.textContent = imgTitulo;
    })
    console.log(imgCategoria)
})

fecharModal.addEventListener('click', () => {
    modal.close();
    modal.classList.add('close');
})