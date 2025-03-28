let HeaderSliderIndex = 1;
let HeaderSliderCovers = [];
let CurrentPoint = document.querySelector('.current-point');
let CurrentPosition = 0;
let ArrowLeft = document.querySelector('.header__left-arrow');
let ArrowRight = document.querySelector('.header__right-arrow');

for(let i = 0; i < 5; i++) {
    HeaderSliderCovers[i] = document.querySelectorAll('.cover__slider-image')[i];
    HeaderSliderCovers[i].style.backgroundImage = 'url(./images/sliders/studio/' + (i + 1) + '.png)';
}

HeaderSliderCovers[0].style.opacity = 1;

ArrowLeft.addEventListener('click', function left() {
    if(HeaderSliderIndex > 1) {
        let move = 0;
        HeaderSliderIndex--;
        HeaderSliderCovers[HeaderSliderIndex - 1].style.opacity = 1;
        HeaderSliderCovers[HeaderSliderIndex].style.opacity = 0;
        var animation = function StartAnimation(){
            if(move < 30) {
                move += 0.5;
                CurrentPosition -= 0.5;
                CurrentPoint.style.left =  CurrentPosition + 'px';
                window.requestAnimationFrame(animation);
            }
        }
        animation();
    }
    if(HeaderSliderIndex <= 1) {
        ArrowLeft.style.opacity = 0;
        ArrowLeft.classList.remove('arrow');
    }
    ArrowRight.style.opacity = 1;
    ArrowRight.classList.add('arrow');
})

ArrowRight.addEventListener('click', function right(){
    if(HeaderSliderIndex < 5) {
        let move = 0;
        HeaderSliderIndex++;
        HeaderSliderCovers[HeaderSliderIndex - 1].style.opacity = 1;
        HeaderSliderCovers[HeaderSliderIndex - 2].style.opacity = 0;
        var animation = function StartAnimation(){
            if(move < 30) {
                move += 0.5;
                CurrentPosition += 0.5;
                CurrentPoint.style.left =  CurrentPosition + 'px';
                window.requestAnimationFrame(animation);
            }
        }
        animation();
    }
    if(HeaderSliderIndex >= 5) {
        ArrowRight.style.opacity = 0;
        ArrowRight.classList.remove('arrow');
    }
    ArrowLeft.style.opacity = 1;
    ArrowLeft.classList.add('arrow');
})