/* eslint-disable no-unused-vars */
import slick from 'slick-carousel';
import $ from 'jquery';

const slickOption = {

  arrows: true,
  prevArrow: '<button type="button" class="control control--prev">&#x23;</button>',
  nextArrow: '<button type="button" class="control control--next">&#x24;</button>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
}

const goodsOption = {

  arrows: true,
  prevArrow: '<button type="button" class="control control--prev">&#x44;</button>',
  nextArrow: '<button type="button" class="control control--next">&#x45;</button>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
}

const blogPrimaryOption = {
  arrows: true,
  prevArrow: '<button type="button" class="control control--prev">&#x44;</button>',
  nextArrow: '<button type="button" class="control control--next">&#x45;</button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 563,
      settings: {
        arrows: false,
        asNavFor: '.slider-secondary',
        fade: true,
      },
    },
  ],
}

const blogSecondaryOption = {
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 563,
      settings: {
        arrows: true,
        prevArrow: '<button type="button" class="control control--prev">&#x44;</button>',
        nextArrow: '<button type="button" class="control control--next">&#x45;</button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-primary',
        dots: false,
        focusOnSelect: true,
      },
    },
  ],
}

$('.single-item').slick(slickOption);
$('.goods-slider').slick(goodsOption);
$('.slider-primary').slick(blogPrimaryOption);
$('.slider-secondary').slick(blogSecondaryOption);
/* $('.slider-clients').slick(clientOption); */
