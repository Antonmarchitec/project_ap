//Initialize Swiper
  //<script type="module">
    //import Swiper from 'swiper/swiper-bundle.esm.js';
    //import 'swiper/swiper-bundle.css';
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  //</script>