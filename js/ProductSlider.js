class Slider1 {
    Images = document.querySelectorAll('#slide_first');
    Points = document.querySelectorAll('#point_first');
    CurrentPosition = 0;
    constructor() {
        let index = 0;
        this.Images.forEach(element => {
            index++;
            element.style.backgroundImage = 'url(./images/sliders/products/1/' + index + '.png)'
        });
        this.Images[0].style.opacity = 1;
    }

    ImageForward() {
        if (this.CurrentPosition < 2) {
            this.CurrentPosition++;
            if (this.CurrentPosition > 0) {
                LeftArrow1.style.opacity = 1;
                LeftArrow1.classList.add('arrow');
            }
            if (this.CurrentPosition == 2) {
                RightArrow1.style.opacity = 0;
                RightArrow1.classList.remove('arrow');
            }
            this.Points[this.CurrentPosition - 1].classList.remove('current');
            this.Points[this.CurrentPosition].classList.add('current');
            this.Images[this.CurrentPosition].style.opacity = 1;
            this.Images[this.CurrentPosition - 1].style.opacity = 0;
        }
    }

    ImageDownward() {
        if (this.CurrentPosition > 0) {
            this.CurrentPosition--;
            if (this.CurrentPosition < 3) {
                RightArrow1.style.opacity = 1;
                RightArrow1.classList.add('arrow');
            }
            if (this.CurrentPosition == 0) {
                LeftArrow1.style.opacity = 0;
                LeftArrow1.classList.remove('arrow');
            }
            this.Points[this.CurrentPosition + 1].classList.remove('current');
            this.Points[this.CurrentPosition].classList.add('current');
            this.Images[this.CurrentPosition].style.opacity = 1;
            this.Images[this.CurrentPosition + 1].style.opacity = 0;
        }
    }
}

class Slider2 {
    Images = document.querySelectorAll('#slide_second');
    Points = document.querySelectorAll('#point_second');
    CurrentPosition = 0;
    constructor() {
        let index = 0;
        this.Images.forEach(element => {
            index++;
            element.style.backgroundImage = 'url(./images/sliders/products/2/' + index + '.png)'
        });
        this.Images[0].style.opacity = 1;
    }

    ImageForward() {
        if (this.CurrentPosition < 2) {
            this.CurrentPosition++;
            if (this.CurrentPosition > 0) {
                LeftArrow2.style.opacity = 1;
                LeftArrow2.classList.add('arrow');
            }
            if (this.CurrentPosition == 2) {
                RightArrow2.style.opacity = 0;
                RightArrow2.classList.remove('arrow');
            }
            this.Points[this.CurrentPosition - 1].classList.remove('current');
            this.Points[this.CurrentPosition].classList.add('current');
            this.Images[this.CurrentPosition].style.opacity = 1;
            this.Images[this.CurrentPosition - 1].style.opacity = 0;
        }
    }

    ImageDownward() {
        if (this.CurrentPosition > 0) {
            this.CurrentPosition--;
            if (this.CurrentPosition < 3) {
                RightArrow2.style.opacity = 1;
                RightArrow2.classList.add('arrow');
            }
            if (this.CurrentPosition == 0) {
                LeftArrow2.style.opacity = 0;
                LeftArrow2.classList.remove('arrow');
            }
            this.Points[this.CurrentPosition + 1].classList.remove('current');
            this.Points[this.CurrentPosition].classList.add('current');
            this.Images[this.CurrentPosition].style.opacity = 1;
            this.Images[this.CurrentPosition + 1].style.opacity = 0;
        }
    }
}

class Slider3 {
    Images = document.querySelectorAll('#slide_third');
    Points = document.querySelectorAll('#point_third');
    CurrentPosition = 0;
    constructor() {
        let index = 0;
        this.Images.forEach(element => {
            index++;
            element.style.backgroundImage = 'url(./images/sliders/products/3/' + index + '.png)'
        });
        this.Images[0].style.opacity = 1;
    }

    ImageForward() {
        if (this.CurrentPosition < 2) {
            this.CurrentPosition++;
            if (this.CurrentPosition > 0) {
                LeftArrow3.style.opacity = 1;
                LeftArrow3.classList.add('arrow');
            }
            if (this.CurrentPosition == 1) {
                RightArrow3.style.opacity = 0;
                RightArrow3.classList.remove('arrow');
            }
            this.Points[this.CurrentPosition - 1].classList.remove('current');
            this.Points[this.CurrentPosition].classList.add('current');
            this.Images[this.CurrentPosition].style.opacity = 1;
            this.Images[this.CurrentPosition - 1].style.opacity = 0;
        }
    }

    ImageDownward() {
        if (this.CurrentPosition > 0) {
            this.CurrentPosition--;
            if (this.CurrentPosition < 3) {
                RightArrow3.style.opacity = 1;
                RightArrow3.classList.add('arrow');
            }
            if (this.CurrentPosition == 0) {
                LeftArrow3.style.opacity = 0;
                LeftArrow3.classList.remove('arrow');
            }
            this.Points[this.CurrentPosition + 1].classList.remove('current');
            this.Points[this.CurrentPosition].classList.add('current');
            this.Images[this.CurrentPosition].style.opacity = 1;
            this.Images[this.CurrentPosition + 1].style.opacity = 0;
        }
    }
}

let slider1 = new Slider1();
LeftArrow1 = document.querySelector('#l_first');
RightArrow1 = document.querySelector('#r_first');
LeftArrow1.addEventListener('click', e=> slider1.ImageDownward());
RightArrow1.addEventListener('click', e=> slider1.ImageForward());

let slider2 = new Slider2();
LeftArrow2 = document.querySelector('#l_second');
RightArrow2 = document.querySelector('#r_second');
LeftArrow2.addEventListener('click', e=> slider2.ImageDownward());
RightArrow2.addEventListener('click', e=> slider2.ImageForward());

let slider3 = new Slider3();
LeftArrow3 = document.querySelector('#l_third');
RightArrow3 = document.querySelector('#r_third');
LeftArrow3.addEventListener('click', e=> slider3.ImageDownward());
RightArrow3.addEventListener('click', e=> slider3.ImageForward());