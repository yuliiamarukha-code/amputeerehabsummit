$(document).ready(function () {
    var header = document.querySelector("header");
    if (header) {
        var toggleHeaderBg = function () {
            if (window.scrollY > 40) {
                header.classList.add("is-scrolled");
            } else {
                header.classList.remove("is-scrolled");
            }
        };
        toggleHeaderBg();
        window.addEventListener("scroll", toggleHeaderBg, { passive: true });
    }
});

$( document ).ready(function() {
    $('.tab-section').each(function() {
        let ths = $(this);
        ths.find('.b-tab').not(':first').addClass('hidden');
        ths.find('.b-nav-tab').click(function() {
            ths.find('.b-nav-tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.b-tab').addClass('hidden').eq($(this).index()).removeClass('hidden')
        }).eq(0).addClass('active');
    });
});

$( document ).ready(function() {
    $('.schedule-switcher').each(function() {
        let switcher = $(this);
        switcher.find('.schedule-tab').on('click', function() {
            let target = $(this).data('target');
            switcher.find('.schedule-tab').removeClass('active');
            $(this).addClass('active');
            switcher.find('.schedule-panel').removeClass('active');
            switcher.find('.schedule-panel[data-panel="' + target + '"]').addClass('active');
        });
    });

    $('.schedule-panel').each(function() {
        let panel = $(this);
        panel.find('.schedule-date-tab').on('click', function() {
            let target = $(this).data('date-target');
            panel.find('.schedule-date-tab').removeClass('active');
            $(this).addClass('active');
            panel.find('.schedule-date-panel').removeClass('active');
            panel.find('.schedule-date-panel[data-date-panel="' + target + '"]').addClass('active');
        });
    });
});

$( document ).ready(function() {
    if ($(window).width() <= 768) {
        $('a[href^="#"]').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 100 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
    }else {
        $('a[href^="#"]').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 10 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
    }
});

$('.mob-menu-btn').on('click', function () {
    $(this).hide();
    $('.navbar').slideDown();
})

$( document ).ready(function() {
    if ($(window).width() <= 991) {
        $('.menu-hide-link').on('click', function () {
            $('.mob-menu-btn').show();
            $('.navbar').slideUp();
        })
    }
});
$( document ).ready(function() {
    if ($(window).width() <= 991) {
        $('.menu-hide').on('click', function () {
            $('.mob-menu-btn').show();
            $('.navbar').slideUp();
        })
    }
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 32,
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1.3,
            slidesPerGroup: 2,
        },
        1199: {
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 1,
        }
    }
});

(function () {
    var gallery = document.getElementById("heroGallery");
    if (!gallery) return;

    var cards = Array.prototype.slice.call(
        gallery.querySelectorAll(".promo-gallery-card")
    );
    var total = cards.length;
    var dotsWrap = gallery.querySelector(".promo-gallery-dots");
    var prevBtn = gallery.querySelector(".promo-gallery-prev");
    var nextBtn = gallery.querySelector(".promo-gallery-next");
    var index = 0;
    var autoplayTimer = null;

    cards.forEach(function (_, i) {
        var dot = document.createElement("span");
        dot.setAttribute("data-dot", i);
        dot.addEventListener("click", function () {
            index = i;
            render();
            restartAutoplay();
        });
        dotsWrap.appendChild(dot);
    });
    var dots = dotsWrap.querySelectorAll("span");

    // vw-based size, clamped between a min/max px - mirrors the old CSS
    // clamp() so cards stay responsive without a stylesheet rule per rank
    function clampPx(min, vwPercent, max) {
        var val = (window.innerWidth * vwPercent) / 100;
        return Math.max(min, Math.min(max, val));
    }

    function isMobile() {
        return window.innerWidth <= 480;
    }

    // shortest signed distance from `index` to `i` around the 10-photo loop,
    // e.g. -2 -1 0 1 2 for the five visible ranks, +/-3.. for parked ones
    function signedDelta(i) {
        var d = (i - index) % total;
        if (d > total / 2) d -= total;
        if (d < -total / 2) d += total;
        return d;
    }

    // Every card's width/height/position/opacity is recomputed from its rank
    // (distance from the active index) on every render() call. Because all
    // of these are plain CSS transitions (declared on .promo-gallery-card),
    // the browser interpolates the move + resize together automatically -
    // no manual keyframing needed. A card genuinely shrinks/grows as its
    // rank changes, and the center slot is always the tallest (100%).
    function render() {
        var mobile = isMobile();

        var size0 = mobile
            ? { w: clampPx(190, 62, 300), h: clampPx(200, 80, 300) }
            : { w: clampPx(180, 21, 320), h: clampPx(240, 28, 440) };
        var size1 = mobile
            // side photos are exactly half the main photo on mobile, so
            // they read as a real preview instead of a cropped sliver
            ? { w: size0.w * 0.5, h: size0.h * 0.5 }
            : { w: clampPx(130, 15, 220), h: clampPx(170, 19, 300) };
        var size2 = { w: clampPx(70, 8, 130), h: clampPx(90, 10, 170) };

        var gap = clampPx(6, 1.2, 16);
        var step1 = size0.w / 2 + gap + size1.w / 2;
        var step2 = size0.w / 2 + gap + size1.w + gap + size2.w / 2;
        var stepParked = step2 + gap + size2.w;

        cards.forEach(function (card, i) {
            var offset = signedDelta(i);
            var abs = Math.abs(offset);
            var sign = offset > 0 ? 1 : offset < 0 ? -1 : 0;
            var size, x, visible;

            if (abs === 0) {
                size = size0;
                x = 0;
                visible = true;
            } else if (abs === 1) {
                size = size1;
                x = sign * step1;
                visible = true;
            } else if (abs === 2 && !mobile) {
                size = size2;
                x = sign * step2;
                visible = true;
            } else {
                size = size2;
                x = sign * stepParked;
                visible = false;
            }

            card.style.width = size.w + "px";
            card.style.height = size.h + "px";
            card.style.transform =
                "translate(-50%, -50%) translateX(" + x + "px)";
            card.style.opacity = visible ? "1" : "0";
            card.style.pointerEvents = visible ? "auto" : "none";
            card.style.zIndex = String(100 - abs);
        });

        dots.forEach(function (dot, i) {
            dot.classList.toggle("active", i === index);
        });
    }

    function next() {
        index = (index + 1) % total;
        render();
    }

    function prev() {
        index = (index - 1 + total) % total;
        render();
    }

    function restartAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = setInterval(next, 5000);
    }

    prevBtn.addEventListener("click", function () {
        prev();
        restartAutoplay();
    });
    nextBtn.addEventListener("click", function () {
        next();
        restartAutoplay();
    });

    // Swipe: tracks the full drag (not just start/end points) and decides
    // horizontal-vs-vertical intent from the first few pixels of movement,
    // so a horizontal swipe reliably drives the carousel while a vertical
    // drag still scrolls the page normally.
    var touchStartX = 0;
    var touchStartY = 0;
    var touchDeltaX = 0;
    var swipeAxis = null; // "x" | "y" | null (undecided)

    gallery.addEventListener(
        "touchstart",
        function (e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchDeltaX = 0;
            swipeAxis = null;
        },
        { passive: true }
    );

    gallery.addEventListener(
        "touchmove",
        function (e) {
            var dx = e.touches[0].clientX - touchStartX;
            var dy = e.touches[0].clientY - touchStartY;

            if (!swipeAxis && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
                swipeAxis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
            }

            if (swipeAxis === "x") {
                touchDeltaX = dx;
                // we're driving the swipe ourselves - stop the browser from
                // also trying to scroll/navigate on this same gesture
                e.preventDefault();
            }
        },
        { passive: false }
    );

    gallery.addEventListener(
        "touchend",
        function () {
            if (swipeAxis === "x" && Math.abs(touchDeltaX) > 40) {
                if (touchDeltaX < 0) {
                    next();
                } else {
                    prev();
                }
                restartAutoplay();
            }
            swipeAxis = null;
            touchDeltaX = 0;
        },
        { passive: true }
    );

    var resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(render, 150);
    });

    // lay out the first frame with transitions off so cards don't visibly
    // animate in from a default/unset position on page load
    cards.forEach(function (card) {
        card.style.transition = "none";
    });
    render();
    void gallery.offsetHeight; // force reflow before re-enabling transitions
    requestAnimationFrame(function () {
        cards.forEach(function (card) {
            card.style.transition = "";
        });
    });

    restartAutoplay();
})();

var formatPreviewSwiper = new Swiper(".formatPreviewSwiper", {
    spaceBetween: 16,
    slidesPerView: 1.1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".format-preview-slider-nav .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".format-preview-slider-nav .swiper-button-next",
    },
});

var programSwiper = new Swiper(".programSwiper", {
    spaceBetween: 16,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".format-cards-mobile-nav .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".format-cards-mobile-nav .swiper-button-next",
    },
});

$('.mob-show-text').on('click', function () {
    $(this).parent('div.speakers-card-cont').toggleClass('active');
    var show = $(this).data("first");
    var hide = $(this).data("second");
    if ($(".speakers-card-cont").hasClass("active")) {
        $(this).children(".mob-show-text span").html(hide);
    } else {
        $(this).children(".mob-show-text span").html(show);
    }
});

$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.table-row-item').each(function () {
            if ($(this).text().trim() === '') {
                $(this).remove();
            }
        });
    }
});

$(document).ready(function () {
    if ($(window).width() <= 480) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= $('#about').offset().top) {
                $('.header-top').hide();
                $('.header-bottom').show();
            } else {
                $('.header-top').show();
                $('.header-bottom').hide();
            }
        });
    }
});

jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    $('#scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});

$(document).ready(function() {
    if ($(window).width() > 480) {
        var imgContainer = $('.img-container');

        $(window).scroll(function() {
            var scrollHeight = 600;

            if ($(this).scrollTop() > scrollHeight) {
                imgContainer.removeClass('hidden-img');
                imgContainer.animate({
                    left: '80px'
                }, 900);
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    if (jQuery('.video-youtube').length > 0) {
        let videoContainer = document.querySelector('.video-youtube');

        let observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let videoId = videoContainer.getAttribute('data-youtube');
                    let iframe = document.createElement('iframe');

                    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1');
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'autoplay; encrypted-media');
                    iframe.setAttribute('allowfullscreen', '');
                    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
                    iframe.setAttribute('width', '100%');
                    iframe.setAttribute('height', '100%');

                    while (videoContainer.firstChild) {
                        videoContainer.removeChild(videoContainer.firstChild);
                    }

                    videoContainer.appendChild(iframe);
                    observer.unobserve(videoContainer); // Остановить наблюдение после загрузки видео
                }
            });
        });

        observer.observe(videoContainer);
    }
});


    /*START WOW ANIMATION JS*/
    new WOW().init();
    /*END WOW ANIMATION JS*/

