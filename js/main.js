$(function() {
    "use strict";
    var e = $(".sven-container"),
        s = e.attr("data-freeze-prop") ? parseBool(e.attr("data-freeze-prop")) : !0;
    $("#sven-countdown").countdown("2017/12/06", function(e) {
        $(".days-left, .big-days-left").text(e.strftime("%D days left")), $(".big-days").text(e.strftime("%D days")), $(".sven-timer").text(e.strftime("%H:%M:%S"))
    });
    var a = isMobile.phone,
        i = !0;
    a && (i = !1), e.svenPlugin({
        autoStart: i,
        fullDuration: "default",
        preloadMethod: "tag",
        preloadFiles: ["images/subscribe-image.jpg"],
        fileTimeout: 8e3,
        audioTimeout: 8e3,
        colors: ["#E7464F", "#CDAA20", "#80993B", "#07BABA", "#9B2C9D"],
        showAnimationSummary: !1,
        freezeOnBlur: s,
        videoPlaybackChange: !1,
        onTeaserReady: function() {
            $(".loader-container").hide(), i || ($(".splash-page").show(), $(".sven-footer").show()), $("#particles-js").appendTo(".sven-wrapper").hide()
        },
        onTeaserStart: function() {
            $(".controls-nav").css({
                visibility: "visible"
            }), $(".splash-page").hide(), $(".sven-footer").hide()
        },
        onBeforeScene: function(e, s, a, i) {
            s.data().showParticles ? $("#particles-js").show() : $("#particles-js").hide()
        },
        onBeforeIn: function(e, s, a, i) {
            s.data().showFooter ? $(".sven-footer").show() : $(".sven-footer").hide();
            var t = s.find(".content-container").children().not(".content-wrapper");
            t.length > 0 && TweenMax.staggerFromTo(t, .5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, .08)
        },
        onBeforeOut: function(e, s, a, i) {
            var t = s.find(".content-container").children().not(".content-wrapper");
            t.length > 0 && TweenMax.staggerTo(t, .25, {
                autoAlpha: 0
            }, .08)
        }
    });
    var t = $(".speed-label span"),
        n = [1, .5, .25, 1, 1.5, 2],
        o = 1,
        l = n.length;
    $(".speed-label").on("click", function(s) {
        var a = n[o],
            i = isFloat(a) ? a : a.toFixed(1);
        t.html(i + "x"), l - 1 > o ? o += 1 : o = 0, e.svenPlugin.changeSpeed(a)
    }), $(".skip-button").on("click", function(s) {
        e.svenPlugin.skipToLast()
    }), $(".movie-button, .play-button").on("click", function(s) {
        e.svenPlugin.togglePlay()
    }), $(document).on("keydown", function(s) {
        32 === s.keyCode && e.svenPlugin.togglePlay()
    }), $(".sound_button").on("click", function(s) {
        e.svenPlugin.toggleSound()
    });
    var r = $(".movie-button i"),
        c = $(".sound_button i");
    if (e.on("STPlay", function() {
            r.removeClass("fa-play").removeClass("fa-repeat").addClass("fa-pause")
        }), e.on("STPause", function() {
            r.removeClass("fa-pause").removeClass("fa-repeat").addClass("fa-play")
        }), e.on("STEnd", function() {
            r.removeClass("fa-pause").removeClass("fa-play").addClass("fa-repeat")
        }), e.on("STMuted", function() {
            c.removeClass("fa-volume-up").addClass("fa-volume-off")
        }), e.on("STUnMuted", function() {
            c.removeClass("fa-volume-off").addClass("fa-volume-up")
        }), $("#subscription [type='submit']").on("click submit", function(e) {
            var s = $("#subscription").serialize(),
                a = $("input, [type='submit']", "#subscription");
            a.prop("disabled", !0), $(".subscribe-label").css("visibility", "hidden"), $(".subscribe-label").css("visibility", "visible").html('<i class="fa fa-hourglass-start"></i>adding your email...');
            var i = "php/subscribe.php";
            $.ajax({
                type: "POST",
                url: i,
                data: s,
                dataType: "json",
                success: function(e) {
                    e.error ? ($(".subscribe-label").css("visibility", "hidden"), $(".subscribe-label").removeClass("error success").addClass("error").css("visibility", "visible").html('<i class="fa fa-times"></i>' + e.message), a.prop("disabled", !1)) : ($(".subscribe-label").css("visibility", "hidden"), $(".subscribe-label").removeClass("error success").addClass("success").css("visibility", "visible").html('<i class="fa fa-check"></i>' + e.message))
                },
                error: function() {
                    $(".subscribe-label").css("visibility", "hidden"), $(".subscribe-label").removeClass("error success").addClass("error").css("visibility", "visible").html('<i class="fa fa-times"></i>Problem connecting to server. Please try again'), a.prop("disabled", !1)
                }
            }), e.preventDefault()
        }), -1 != navigator.userAgent.indexOf("MSIE")) var d = /MSIE (\d+\.\d+);/;
    else var d = /Trident.*rv[ :]*(\d+\.\d+)/;
    if (d.test(navigator.userAgent)) {
        var u = new Number(RegExp.$1);
        9 >= u && $("body").addClass("loader-ie9")
    }
    $("#particles-js").length && particlesJS("particles-js", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .2,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
});
