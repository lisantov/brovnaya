const Course = document.querySelector('.course');
const LeftArrow = Course.querySelector('#l_course');
const RightArrow = Course.querySelector('#r_course');
const CourseSlides = [];
const CourseSlide = Course.querySelector('.course__slider-slide');
let CurrentSlide = 0;

for(let i = 0; i < 4; i++) {
    CourseSlides.push(`./images/sliders/course/${i + 1}.png`);
}

LeftArrow.addEventListener('click', () =>{
    if(CurrentSlide > 0) {
        CurrentSlide--;
        CourseSlide.src = CourseSlides[CurrentSlide];
        if(CurrentSlide === 0) {
            LeftArrow.style.opacity = 0;
            LeftArrow.classList.remove('arrow');
        }
        else if(CurrentSlide === 2) {
            RightArrow.style.opacity = 1;
            RightArrow.classList.add('arrow');
        }
    }
});

RightArrow.addEventListener('click', () =>{
    if(CurrentSlide < 3) {
        CurrentSlide++;
        CourseSlide.src = CourseSlides[CurrentSlide];
        if(CurrentSlide === 3) {
            RightArrow.style.opacity = 0;
            RightArrow.classList.remove('arrow');
        }
        else if(CurrentSlide === 1) {
            LeftArrow.style.opacity = 1;
            LeftArrow.classList.add('arrow');
        }
    }
});