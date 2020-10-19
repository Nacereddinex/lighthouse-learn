/* eslint-disable no-undef */
/* This file is not a standard coding practice within a react project
 * and should not be replicated. If you find yourself interacting with this
 * file please look into replacing it with react functionality
 */
(() => {
  $(document).on('click', '.img_slider', function handleImgSliderClick(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: false,
      wrapping: true,
      showArrows: true,
    });
  });
  $(document).on('click', '.ImGslider', function handleImgSliderClick2(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: false,
      wrapping: true,
      showArrows: true,
    });
  });
  $(document).on('submit', 'form', (e) => {
    $.validate();
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  const arr = Array.from(document.querySelectorAll('.gallery .images a'));
  let index = 0;
  const maxIndex = arr.length;
  $(document).on('click', '.lightbox-launcher', (event) => {
    event.preventDefault();
    // Only trigger first image  click to avoid multiple triggers
    $('.image').ekkoLightbox();
  });
  $(document).on('click', '.image', function handleImageClick(event) {
    event.preventDefault();
    // Only trigger first image  click to avoid multiple triggers
    $('.gallery .images a').removeClass('active');
    $(this).addClass('active');
    $('#image-display  .img-fluid').attr('src', $(this).attr('href'));
  });
  $(document).on('click', '.prev', () => {
    if (index > 0) {
      index -= 1;
    } else {
      index = maxIndex;
    }
    $('.gallery .images a').removeClass('active');
    arr[index].classList.add('active');
    $('#image-display  .img-fluid').attr(
      'src',
      arr[index].getAttribute('href'),
    );
  });
  $(document).on('click', '.next', () => {
    if (index >= maxIndex) {
      index = 0;
    } else {
      index += 1;
    }
    $('.gallery .images a').removeClass('active');
    arr[index].classList.add('active');
    $('#image-display  .img-fluid').attr(
      'src',
      arr[index].getAttribute('href'),
    );
  });
})();
