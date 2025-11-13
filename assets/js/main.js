/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
    'use strict';
  
    var tmpJs = {
        m: function (e) {
            tmpJs.d();
            tmpJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            tmpJs.odoMeter();
            tmpJs.stickyTopelements();
            tmpJs.jarallax();
            tmpJs.stickyHeader();
            tmpJs.backToTopInit();
            tmpJs.pricingToggle();
            tmpJs.searchOption();
            tmpJs.smoothScroll();
            tmpJs.feedbackCollupsShow();
            tmpJs.preloader();
            tmpJs.salActive();

        },


        odoMeter: function () {
          $(document).ready(function () {
            function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
              );
            }

            function triggerOdometer(element) {
              const $element = $(element);
              if (!$element.hasClass('odometer-triggered')) {
                const countNumber = $element.attr('data-count');
                $element.html(countNumber);
                $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
              }
            }

            function handleOdometer() {
              $('.odometer').each(function () {
                if (isInViewport(this)) {
                  triggerOdometer(this);
                }
              });
            }

            // Check on page load
            handleOdometer();

            // Check on scroll
            $(window).on('scroll', function () {
              handleOdometer();
            });
          });
        },
        
        stickyTopelements: function () {
            var stickyElement = $('.inversweb-sticky-section');

            stickyElement.each(function () {
                var $this = $(this);

                $(window).on("scroll", function () {
                    var windowTop = $(window).scrollTop();     // Scroll position
                    var windowHeight = $(window).height();     // Window height
                    var triggerPoint = windowTop + (windowHeight * 0.2); // Top theke 20%

                    var elementTop = $this.offset().top;       // Section position

                    if (triggerPoint >= elementTop) {
                        $this.addClass('zoomactive');
                    } else {
                        $this.removeClass('zoomactive');
                    }
                });
            });


            var masonary = $('.invers-theme-masonary');
            masonary.each(function () {
                $('.invers-theme-masonary').imagesLoaded(() => {
                    $('.invers-theme-masonary').masonry({
                        itemSelector: '.invers-masonary-item',
                        horizontalOrder: true,
                    });
                })
            })


        },

        
        jarallax: function (e) {
          $(document).ready(function () {
              // Detect if device is mobile
              function isMobileDevice() {
                return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                );
              }

              // Initialize jarallax only if it's not a mobile device
              if (!isMobileDevice()) {
                $('.jarallax').jarallax({
                  speed: 0.4, // scroll speed নিয়ন্ত্রণ করতে পারো (0.2–1)
                  imgSize: 'cover',
                  imgPosition: 'center',
                });
              } else {
                console.log('Jarallax skipped on mobile devices');
              }
          });
        },

        // sal animatioin activation
        salActive: function () {
          sal({
            threshold: 0.1,
            once: true,
          });
        },
  
        // sticky header activation
        stickyHeader: function (e) {

          $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
              $('.header--sticky').addClass('sticky')
            } else {
              $('.header--sticky').removeClass('sticky')
            }
          })

          $(document).ready(function () {
              var $header = $('.header--sticky.header-sticky-smooth');
              var initialHeight = $header.outerHeight(); // Default header height (with header-top)

              $(window).scroll(function () {
                  if ($header.length) {
                      if ($(this).scrollTop() > 150) {
                          // Use always the initial full height
                          $('body').css('padding-top', initialHeight + 'px');
                      } else {
                          $('body').css('padding-top', '0');
                      }
                  }
              });
          });


        },
        backToTopInit: function () {
            $(document).ready(function(){
            "use strict";
        
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
            var updateProgress = function () {
              var scroll = $(window).scrollTop();
              var height = $(document).height() - $(window).height();
              var progress = pathLength - (scroll * pathLength / height);
              progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);	
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
              if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
              } else {
                jQuery('.progress-wrap').removeClass('active-progress');
              }
            });				
            jQuery('.progress-wrap').on('click', function(event) {
              event.preventDefault();
              jQuery('html, body').animate({scrollTop: 0}, duration);
              return false;
            })
            
            
          });
    
        },

        pricingToggle: function () {
            $(document).ready(function () {
              $(".pricing__toogle").change(function () {
                if ($(this).is(":checked")) {
                  $(".monthly__pricing").removeClass("active");
                  $(".yearly__pricing").addClass("active");
                } else {
                  $(".monthly__pricing").addClass("active");
                  $(".yearly__pricing").removeClass("active");
                }
              });
            });
        },

        searchOption: function () {
            $(document).on('click', '#search', function () {
                $(".search-input-area").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },
        smoothScroll: function (e) {
          $(document).on('click', '.onepage a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2000);
          });
        },
        feedbackCollupsShow: function () {
          document.addEventListener("DOMContentLoaded", function () {
              var e = document.querySelector(".button-area-box-shadow .tmp-btn"),
                  t = document.querySelector(".overlay-bottom-section"),
                  o = !1;
              e &&
                  t &&
                  e.addEventListener("click", function () {
                      o
                          ? ((e.style.margin = ""), (e.innerHTML = "View All Reviews"), t.classList.add("overlay-bottom-section"))
                          : ((e.style.margin = "0px auto 0 auto"), (e.innerHTML = "View Less Reviews"), t.classList.remove("overlay-bottom-section")),
                          (o = !o);
                  });
          });
        },

        preloader:function(){
          window.addEventListener('load',function(){
            document.querySelector('body').classList.add("loaded")  
          });          
        },
       

        
    }

    
    tmpJs.m();
  })(jQuery, window) 







