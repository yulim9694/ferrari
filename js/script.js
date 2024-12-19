
$(function(){
    
    
    // -----mo------
    
    // header 메뉴 버튼
    $('.menu_btn').click(function(){
        $('nav').slideToggle(300);
        $(this).toggleClass('close');
        $('header').toggleClass('bgc')
    });

    $(document).ready(function() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            $('.gnb a').click(function(){
                $('nav').slideToggle(300);
                $('.menu_btn').removeClass('close');
                $('header').removeClass('bgc')
            });
        }
    });

    
    $(document).ready(function() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            
        }
    });

    // scrolltrigger
    gsap.registerPlugin(ScrollTrigger);


    // intro 
    // 배경 pin, text 애니메이션

    const intro_text = gsap.timeline();
    intro_text
        .to("#intro .video_wrap", {autoAlpha: 0.7, duration: 3}, 'a')
        .to("#intro .i_text .t1", {autoAlpha: 0, duration: 1, y: -50},'a')
        .from("#intro .i_text .t2", {autoAlpha: 0, duration: 3, y: 50}, 'a+=0.5')

        .to("#intro .video_wrap", {autoAlpha: 0.4, duration: 3}, 'b')
        .to("#intro .i_text .t2", {autoAlpha: 0, duration: 1, y: -50}, 'b')
        .from("#intro .i_text .t3", {autoAlpha: 0, duration: 3, y: 50}, 'b+=0.5')

        .to("#intro .video_wrap", {autoAlpha: 0.1, duration: 3}, 'c')
        .to("#intro .i_text .t3", {autoAlpha: 0, duration: 1, y: -50}, 'c')
        .from("#intro .i_text .t4", {autoAlpha: 0, duration: 3, y: 50}, 'c+=0.5')

        .to("#intro .video_wrap", {autoAlpha: 0, duration: 3}, 'd')
        .to("#intro .i_text .t4", {autoAlpha: 0, duration: 1, y: -50}, 'd')
        .to("#intro .bg_text", {autoAlpha: 0, duration: 1, y: -100}, 'd-=0.5');


    ScrollTrigger.create({
        animation: intro_text,
        trigger: "#intro",
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false
    });
   
    // intro-fin
    // 배경 pin, text 애니메이션

    const introFin = gsap.timeline();
    introFin.to("#intro-fin .if_wrap .intro_img", {autoAlpha: 0.5})
            .from("#intro-fin .if_wrap .if_text", {autoAlpha: 0, y: 100})
            .to("#intro-fin .if_wrap .if_text", {autoAlpha: 1, duration: 1});


    ScrollTrigger.create({
        animation: introFin,
        trigger: "#intro-fin",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
    });

   
    // performance
    // swiper
    
    function P_swiper(){
        let swiper = new Swiper('#performace .swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on: {
                // 숫자 카운트 애니메이션
                slideChange: function () {
                    let idx = swiper.realIndex;
                    console.log(idx);

                    if(idx === 0) {
                        let memberCountConTxt= 620;
                        $({ val : 0 }).animate({ val : memberCountConTxt }, {
                            duration: 2000,
                           step: function() {
                            let num = numberWithCommas(Math.floor(this.val));
                             $("#performace .number").text(num);
                           },
                           complete: function() {
                            let num = numberWithCommas(Math.floor(this.val));
                             $("#performace .number").text(num);
                           }
                        });
                        function numberWithCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    } else if(idx === 1) {
                        let memberCountConTxt= 34;
                        $({ val : 0 }).animate({ val : memberCountConTxt }, {
                            duration: 2000,
                           step: function() {
                            let num = numberWithCommas(Math.floor(this.val));
                             $("#performace .number").text(num /= 10);
                           },
                           complete: function() {
                             let num = numberWithCommas(Math.floor(this.val));
                             $("#performace .number").text(num /= 10);
                           }
                        });
                        function numberWithCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    } else if(idx === 2) {
                        let memberCountConTxt= 320;
                        $({ val : 0 }).animate({ val : memberCountConTxt }, {
                            duration: 2000,
                           step: function() {
                            let num = numberWithCommas(Math.floor(this.val));
                             $("#performace .number").text(num);
                           },
                           complete: function() {
                            let num = numberWithCommas(Math.floor(this.val));
                             $("#performace .number").text(num);
                           }
                        });
                        function numberWithCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    }
                }
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
        });
    }
    P_swiper();




    //  숫자 카운트 애니메이션
    let animationExecuted = false;
    $(window).scroll(function() {
        let pWrap = $('#performace .p_wrap');
        let position = pWrap.offset().top;
  
        let scroll = $(window).scrollTop();
  
        if (scroll > position - 300 && !animationExecuted) {
            numberAni1();
            numberAni2();
            numberAni3();
            animationExecuted = true;
        }
    });


    
    function numberAni1(){
        let memberCountConTxt= 620;
        $({ val : 0 }).animate({ val : memberCountConTxt }, {
            duration: 2000,
            step: function() {
            let num = numberWithCommas(Math.floor(this.val));
                $("#performace .s1 .number").text(num);
            },
            complete: function() {
            let num = numberWithCommas(Math.floor(this.val));
                $("#performace .s1 .number").text(num);
            }
        });
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    function numberAni2(){
        let memberCountConTxt= 34;
        $({ val : 0 }).animate({ val : memberCountConTxt }, {
            duration: 2000,
            step: function() {
            let num = numberWithCommas(Math.floor(this.val));
                $("#performace .s2 .number").text(num /= 10);
            },
            complete: function() {
                let num = numberWithCommas(Math.floor(this.val));
                $("#performace .s2 .number").text(num /= 10);
            }
        });
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    function numberAni3(){
        let memberCountConTxt= 320;
        $({ val : 0 }).animate({ val : memberCountConTxt }, {
            duration: 2000,
            step: function() {
            let num = numberWithCommas(Math.floor(this.val));
                $("#performace .s3 .number").text(num);
            },
            complete: function() {
            let num = numberWithCommas(Math.floor(this.val));
                $("#performace .s3 .number").text(num);
            }
        });
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    

    // design
    // swiper

    function D_swiper(){
        let swiper = new Swiper('#design .design_swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            },
        });
    }
    D_swiper();

    // disign
    // text
    
    const Extext = gsap.timeline();
    Extext.from("#exterior .ed_wrap .ed_1 h2", {y: 50, autoAlpha: 0, duration:2})
        .from("#exterior .ed_wrap .ed_1 h3", {y:50, autoAlpha: 0, duration: 2})
        .from("#exterior .ed_wrap .ed_1 p", {y:50, autoAlpha: 0, duration: 2});


    ScrollTrigger.create({
        animation: Extext,
        trigger: "#exterior .ed_wrap",
        start: "top 50%",
        end: "50% 80%",
        scrub: 1,
        anticipatePin: 1,
        markers: false
    });

    const Intext = gsap.timeline();
    Intext.from("#interior .id_wrap .id_1 h2", {y: 50, autoAlpha: 0, duration:2})
        .from("#interior .id_wrap .id_1 h3", {y:50, autoAlpha: 0, duration: 2})
        .from("#interior .id_wrap .id_1 p", {y:50, autoAlpha: 0, duration: 2});


    ScrollTrigger.create({
        animation: Intext,
        trigger: "#interior .id_wrap",
        start: "top 50%",
        end: "50% 80%",
        scrub: 1,
        anticipatePin: 1,
        markers: false
    });

    // view
    //  
    $(".v_cover").click(function(){
        $(this).css("display", "none");
    });


    //  360도

    const viewWrap = $(".v_wrap");
    const viewImg = $("#view_img");

    let save = 0;
    let dragged = 0;
    let sum = 0;

    const sensitivity = 50;

    let clickedSrc = "";
    let changeSrc = "";

    viewImg.on("mousedown", function (e) {
        const x = e.clientX;

        clickedSrc = viewImg.attr("src");

        viewWrap.on("mousemove", rotate);
        function rotate(e) {
            dragged = parseInt((e.clientX - x) / sensitivity);

            sum = save + dragged;

            if (dragged >= 0) {
                sum = sum % 49;
            } else {
                if(sum < 0) {
                    sum += 50;
                }
            }
            changeSrc = clickedSrc.replace(/Roma_[0-9]+/, "Roma_" + sum);

            viewImg.attr("src", changeSrc);

            viewWrap.css("cursor", "grabbing");
        }

        $(window).on("mouseup", function() {
            viewWrap.off("mousemove", rotate);

            viewWrap.css("cursor", "default");
            save = sum;
            dragged = 0;
        });
    });


    // color
    // tab메뉴
    // btn tab
    
    let cBtn = $("#color .cd_wrap .cd_btn button");
    let cPalwrap = $("#color .cd_wrap .cd_palette > div");
    let expalBtn = $("#color .cd_wrap .cd_palette .cd_pal_ex button")
    let inpalBtn = $("#color .cd_wrap .cd_palette .cd_pal_in button")
    let cImg = $("#color .cd_wrap .cd_img img");
    let cName = $("#color .cd_wrap .cd_name div");
    let exImgs = [
        "imges/color/exterior/color_exterior1.jpg",
        "imges/color/exterior/color_exterior2.jpg",
        "imges/color/exterior/color_exterior3.jpg",
        "imges/color/exterior/color_exterior4.jpg",
        "imges/color/exterior/color_exterior5.jpg",
        "imges/color/exterior/color_exterior6.jpg",
        "imges/color/exterior/color_exterior7.jpg",
        "imges/color/exterior/color_exterior8.jpg"
    ];
    let inImgs = [
        "imges/color/interior/color_interior1.jpg",
        "imges/color/interior/color_interior2.jpg",
        "imges/color/interior/color_interior3.jpg",
        "imges/color/interior/color_interior4.jpg",
        "imges/color/interior/color_interior5.jpg",
        "imges/color/interior/color_interior6.jpg",
        "imges/color/interior/color_interior7.jpg",
        "imges/color/interior/color_interior8.jpg"
    ];
    let exNames = [
        "BIANCO AVUS",
        "AVORIO",
        "ROSSO CORSA",
        "ROSSO FIORANO",
        "NERO",
        "VERDE BRITISH",
        "BLU SCOZIA",
        "GRIGIO FERRO",
    ]
    let inNames = [
        "SABBIA",
        "CUOIO",
        "ROSSO FERRARI",
        "CIOCCOLATO",
        "TERRA BRUCIATA",
        "NERO",
        "BLU MEDIO",
        "TORTORA",
    ]
    cPalwrap.hide().eq(0).show();
    cBtn.click(function(){
        const i = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        cPalwrap.eq(i).show().siblings().hide();
    });

    expalBtn.click(function(){
        const i = $(this).index();
        const exImg = exImgs[i];
        const exName = exNames[i];

        $(cImg).attr("src", exImg);
        $(cName).text(exName);
        $(this).addClass("active").siblings().removeClass("active");
        $(inpalBtn).removeClass("active")
    });
    inpalBtn.click(function(){
        const i = $(this).index();
        const inImg = inImgs[i];
        const inName = inNames[i];

        $(cImg).attr("src", inImg);
        $(cName).text(inName);
        $(this).addClass("active").siblings().removeClass("active");
        $(expalBtn).removeClass("active")
    });

    // tech
    
    let aniWrap1 = $("#ani_wrap_1");
    let aniWrap2 = $("#ani_wrap_2");
    let aniWrap3 = $("#ani_wrap_3");


    const ani1 = gsap.timeline();
    ani1.from("#ani_wrap_1 .ani_h2", {y: 50, autoAlpha: 0, duration:2})
        .from("#ani_wrap_1 .ani_h3", {y:50, autoAlpha: 0, duration: 2})
        .from("#ani_wrap_1 .ani_p", {y:50, autoAlpha: 0, duration: 2});
    
    const ani2 = gsap.timeline();
    ani2.from("#ani_wrap_2 .ani_h2", {y: 50, autoAlpha: 0, duration:2})
        .from("#ani_wrap_2 .ani_h3", {y:50, autoAlpha: 0, duration: 2})
        .from("#ani_wrap_2 .ani_p", {y:50, autoAlpha: 0, duration: 2});
    
    const ani3 = gsap.timeline();
    ani3.from("#ani_wrap_3 .ani_h2", {y: 50, autoAlpha: 0, duration:2})
        .from("#ani_wrap_3 .ani_h3", {y:50, autoAlpha: 0, duration: 2})
        .from("#ani_wrap_3 .ani_p", {y:50, autoAlpha: 0, duration: 2});
    
    ScrollTrigger.create({
        animation: ani1,
        trigger: aniWrap1,
        start: "top 50%",
        end: "50% 80%",
        scrub: 1,
        anticipatePin: 1,
        markers: false
    });
    
    ScrollTrigger.create({
        animation: ani2,
        trigger: aniWrap2,
        start: "top 50%",
        end: "50% 80%",
        scrub: 1,
        anticipatePin: 1,
        markers: false
    });
    
    ScrollTrigger.create({
        animation: ani3,
        trigger: aniWrap3,
        start: "top 50%",
        end: "50% 80%",
        scrub: 1,
        anticipatePin: 1,
        markers: false
    });

    //gallery
    //swiper
    function G_swiper(){
        let swiper = new Swiper('#gallery .g_wrap .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });
    }
    G_swiper();
    //pop-up
    const gImg = $("#gallery .g_wrap .swiper .swiper-wrapper .swiper-slide img");

    $(gImg).click(function(){
        let clickImgSrc = $(this).attr("src");
        $("#gallery .g_pop .pop_img img").attr("src", clickImgSrc);
        $("#gallery .g_pop").show();
        $('body').css('overflow', 'hidden');
    });

    $("#gallery .g_pop .close_btn").click(function(){
        $("#gallery .g_pop").hide();
        $('body').css('overflow', 'auto');
    });


    // sepcs
    
    $("#specs .s_wrap .spc .s_con .head").click(function(){
        let $content = $(this).next(".content");

        $("#specs .s_wrap .spc .s_con .content").not($content).slideUp();
        $content.slideToggle();

        $("#specs .s_wrap .spc .s_con .head").not(this).removeClass("active");
        $(this).toggleClass("active");

        $("#specs .s_wrap .spc .s_con .head .btn").not($(this).children(".btn")).removeClass("close");
        $(this).children(".btn").toggleClass("close");
    });



}); //script end...

