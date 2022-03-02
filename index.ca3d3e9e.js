/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */ function hexToRgb(e) {
    var a1 = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a1, function(e, a, t, i) {
        return a + a + t + t + i + i;
    });
    var t1 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t1 ? {
        r: parseInt(t1[1], 16),
        g: parseInt(t1[2], 16),
        b: parseInt(t1[3], 16)
    } : null;
}
function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
    return a.indexOf(e) > -1;
}
var pJS = function(e1, a2) {
    var t2 = document.querySelector("#" + e1 + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: t2,
            w: t2.offsetWidth,
            h: t2.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
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
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {
            }
        },
        retina_detect: !1,
        fn: {
            interact: {
            },
            modes: {
            },
            vendors: {
            }
        },
        tmp: {
        }
    };
    var i1 = this.pJS;
    a2 && Object.deepExtend(i1, a2), i1.tmp.obj = {
        size_value: i1.particles.size.value,
        size_anim_speed: i1.particles.size.anim.speed,
        move_speed: i1.particles.move.speed,
        line_linked_distance: i1.particles.line_linked.distance,
        line_linked_width: i1.particles.line_linked.width,
        mode_grab_distance: i1.interactivity.modes.grab.distance,
        mode_bubble_distance: i1.interactivity.modes.bubble.distance,
        mode_bubble_size: i1.interactivity.modes.bubble.size,
        mode_repulse_distance: i1.interactivity.modes.repulse.distance
    }, i1.fn.retinaInit = function() {
        i1.retina_detect && window.devicePixelRatio > 1 ? (i1.canvas.pxratio = window.devicePixelRatio, i1.tmp.retina = !0) : (i1.canvas.pxratio = 1, i1.tmp.retina = !1), i1.canvas.w = i1.canvas.el.offsetWidth * i1.canvas.pxratio, i1.canvas.h = i1.canvas.el.offsetHeight * i1.canvas.pxratio, i1.particles.size.value = i1.tmp.obj.size_value * i1.canvas.pxratio, i1.particles.size.anim.speed = i1.tmp.obj.size_anim_speed * i1.canvas.pxratio, i1.particles.move.speed = i1.tmp.obj.move_speed * i1.canvas.pxratio, i1.particles.line_linked.distance = i1.tmp.obj.line_linked_distance * i1.canvas.pxratio, i1.interactivity.modes.grab.distance = i1.tmp.obj.mode_grab_distance * i1.canvas.pxratio, i1.interactivity.modes.bubble.distance = i1.tmp.obj.mode_bubble_distance * i1.canvas.pxratio, i1.particles.line_linked.width = i1.tmp.obj.line_linked_width * i1.canvas.pxratio, i1.interactivity.modes.bubble.size = i1.tmp.obj.mode_bubble_size * i1.canvas.pxratio, i1.interactivity.modes.repulse.distance = i1.tmp.obj.mode_repulse_distance * i1.canvas.pxratio;
    }, i1.fn.canvasInit = function() {
        i1.canvas.ctx = i1.canvas.el.getContext("2d");
    }, i1.fn.canvasSize = function() {
        i1.canvas.el.width = i1.canvas.w, i1.canvas.el.height = i1.canvas.h, i1 && i1.interactivity.events.resize && window.addEventListener("resize", function() {
            i1.canvas.w = i1.canvas.el.offsetWidth, i1.canvas.h = i1.canvas.el.offsetHeight, i1.tmp.retina && (i1.canvas.w *= i1.canvas.pxratio, i1.canvas.h *= i1.canvas.pxratio), i1.canvas.el.width = i1.canvas.w, i1.canvas.el.height = i1.canvas.h, i1.particles.move.enable || (i1.fn.particlesEmpty(), i1.fn.particlesCreate(), i1.fn.particlesDraw(), i1.fn.vendors.densityAutoParticles()), i1.fn.vendors.densityAutoParticles();
        });
    }, i1.fn.canvasPaint = function() {
        i1.canvas.ctx.fillRect(0, 0, i1.canvas.w, i1.canvas.h);
    }, i1.fn.canvasClear = function() {
        i1.canvas.ctx.clearRect(0, 0, i1.canvas.w, i1.canvas.h);
    }, i1.fn.particle = function(e, a, t) {
        if (this.radius = (i1.particles.size.random ? Math.random() : 1) * i1.particles.size.value, i1.particles.size.anim.enable && (this.size_status = !1, this.vs = i1.particles.size.anim.speed / 100, i1.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i1.canvas.w, this.y = t ? t.y : Math.random() * i1.canvas.h, this.x > i1.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i1.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i1.particles.move.bounce && i1.fn.vendors.checkOverlap(this, t), this.color = {
        }, "object" == typeof e.value) {
            if (e.value instanceof Array) {
                var s = e.value[Math.floor(Math.random() * i1.particles.color.value.length)];
                this.color.rgb = hexToRgb(s);
            } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        } else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i1.particles.opacity.random ? Math.random() : 1) * i1.particles.opacity.value, i1.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i1.particles.opacity.anim.speed / 100, i1.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var n = {
        };
        switch(i1.particles.move.direction){
            case "top":
                n = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                n = {
                    x: 0.5,
                    y: -0.5
                };
                break;
            case "right":
                n = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                n = {
                    x: 0.5,
                    y: 0.5
                };
                break;
            case "bottom":
                n = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                n = {
                    x: -0.5,
                    y: 1
                };
                break;
            case "left":
                n = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                n = {
                    x: -0.5,
                    y: -0.5
                };
                break;
            default:
                n = {
                    x: 0,
                    y: 0
                };
        }
        i1.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i1.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - 0.5, this.vy = n.y + Math.random() - 0.5), this.vx_i = this.vx, this.vy_i = this.vy;
        var r = i1.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                var c = r[Math.floor(Math.random() * r.length)];
                this.shape = c;
            }
        } else this.shape = r;
        if ("image" == this.shape) {
            var o = i1.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i1.tmp.img_type && void 0 != i1.tmp.source_svg && (i1.fn.vendors.createSvgImg(this), i1.tmp.pushing && (this.img.loaded = !1));
        }
    }, i1.fn.particle.prototype.draw = function() {
        function e() {
            i1.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
        }
        var a = this;
        if (void 0 != a.radius_bubble) var t = a.radius_bubble;
        else var t = a.radius;
        if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
        else var s = a.opacity;
        if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
        else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
        switch(i1.canvas.ctx.fillStyle = n, i1.canvas.ctx.beginPath(), a.shape){
            case "circle":
                i1.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                i1.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                i1.fn.vendors.drawShape(i1.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                i1.fn.vendors.drawShape(i1.canvas.ctx, a.x - t / (i1.particles.shape.polygon.nb_sides / 3.5), a.y - t / 0.76, 2.66 * t / (i1.particles.shape.polygon.nb_sides / 3), i1.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                i1.fn.vendors.drawShape(i1.canvas.ctx, a.x - 2 * t / (i1.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i1.particles.shape.polygon.nb_sides / 3), i1.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == i1.tmp.img_type) var r = a.img.obj;
                else var r = i1.tmp.img_obj;
                r && e();
        }
        i1.canvas.ctx.closePath(), i1.particles.shape.stroke.width > 0 && (i1.canvas.ctx.strokeStyle = i1.particles.shape.stroke.color, i1.canvas.ctx.lineWidth = i1.particles.shape.stroke.width, i1.canvas.ctx.stroke()), i1.canvas.ctx.fill();
    }, i1.fn.particlesCreate = function() {
        for(var e = 0; e < i1.particles.number.value; e++)i1.particles.array.push(new i1.fn.particle(i1.particles.color, i1.particles.opacity.value));
    }, i1.fn.particlesUpdate = function() {
        for(var e = 0; e < i1.particles.array.length; e++){
            var a = i1.particles.array[e];
            if (i1.particles.move.enable) {
                var t = i1.particles.move.speed / 2;
                a.x += a.vx * t, a.y += a.vy * t;
            }
            if (i1.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i1.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i1.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i1.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i1.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i1.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i1.particles.move.out_mode) var s = {
                x_left: a.radius,
                x_right: i1.canvas.w,
                y_top: a.radius,
                y_bottom: i1.canvas.h
            };
            else var s = {
                x_left: -a.radius,
                x_right: i1.canvas.w + a.radius,
                y_top: -a.radius,
                y_bottom: i1.canvas.h + a.radius
            };
            switch(a.x - a.radius > i1.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i1.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i1.canvas.h), a.y - a.radius > i1.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i1.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i1.canvas.w), i1.particles.move.out_mode){
                case "bounce":
                    a.x + a.radius > i1.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i1.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
            }
            if (isInArray("grab", i1.interactivity.events.onhover.mode) && i1.fn.modes.grabParticle(a), (isInArray("bubble", i1.interactivity.events.onhover.mode) || isInArray("bubble", i1.interactivity.events.onclick.mode)) && i1.fn.modes.bubbleParticle(a), (isInArray("repulse", i1.interactivity.events.onhover.mode) || isInArray("repulse", i1.interactivity.events.onclick.mode)) && i1.fn.modes.repulseParticle(a), i1.particles.line_linked.enable || i1.particles.move.attract.enable) for(var n = e + 1; n < i1.particles.array.length; n++){
                var r = i1.particles.array[n];
                i1.particles.line_linked.enable && i1.fn.interact.linkParticles(a, r), i1.particles.move.attract.enable && i1.fn.interact.attractParticles(a, r), i1.particles.move.bounce && i1.fn.interact.bounceParticles(a, r);
            }
        }
    }, i1.fn.particlesDraw = function() {
        i1.canvas.ctx.clearRect(0, 0, i1.canvas.w, i1.canvas.h), i1.fn.particlesUpdate();
        for(var e = 0; e < i1.particles.array.length; e++){
            var a = i1.particles.array[e];
            a.draw();
        }
    }, i1.fn.particlesEmpty = function() {
        i1.particles.array = [];
    }, i1.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(i1.fn.checkAnimFrame), cancelRequestAnimFrame(i1.fn.drawAnimFrame), i1.tmp.source_svg = void 0, i1.tmp.img_obj = void 0, i1.tmp.count_svg = 0, i1.fn.particlesEmpty(), i1.fn.canvasClear(), i1.fn.vendors.start();
    }, i1.fn.interact.linkParticles = function(e, a) {
        var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s);
        if (n <= i1.particles.line_linked.distance) {
            var r = i1.particles.line_linked.opacity - n / (1 / i1.particles.line_linked.opacity) / i1.particles.line_linked.distance;
            if (r > 0) {
                var c = i1.particles.line_linked.color_rgb_line;
                i1.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i1.canvas.ctx.lineWidth = i1.particles.line_linked.width, i1.canvas.ctx.beginPath(), i1.canvas.ctx.moveTo(e.x, e.y), i1.canvas.ctx.lineTo(a.x, a.y), i1.canvas.ctx.stroke(), i1.canvas.ctx.closePath();
            }
        }
    }, i1.fn.interact.attractParticles = function(e, a) {
        var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s);
        if (n <= i1.particles.line_linked.distance) {
            var r = t / (1000 * i1.particles.move.attract.rotateX), c = s / (1000 * i1.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
        }
    }, i1.fn.interact.bounceParticles = function(e, a) {
        var t = e.x - a.x, i = e.y - a.y, s = Math.sqrt(t * t + i * i), n = e.radius + a.radius;
        n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
    }, i1.fn.modes.pushParticles = function(e, a) {
        i1.tmp.pushing = !0;
        for(var t = 0; e > t; t++)i1.particles.array.push(new i1.fn.particle(i1.particles.color, i1.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i1.canvas.w,
            y: a ? a.pos_y : Math.random() * i1.canvas.h
        })), t == e - 1 && (i1.particles.move.enable || i1.fn.particlesDraw(), i1.tmp.pushing = !1);
    }, i1.fn.modes.removeParticles = function(e) {
        i1.particles.array.splice(0, e), i1.particles.move.enable || i1.fn.particlesDraw();
    }, i1.fn.modes.bubbleParticle = function(e) {
        function a3() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
        }
        function t3(a, t, s, n, c) {
            if (a != t) {
                if (i1.tmp.bubble_duration_end) {
                    if (void 0 != s) {
                        var o = n - p * (n - a) / i1.interactivity.modes.bubble.duration, l = a - o;
                        d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                    }
                } else if (r <= i1.interactivity.modes.bubble.distance) {
                    if (void 0 != s) var v = s;
                    else var v = n;
                    if (v != a) {
                        var d = n - p * (n - a) / i1.interactivity.modes.bubble.duration;
                        "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                    }
                } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
            }
        }
        if (i1.interactivity.events.onhover.enable && isInArray("bubble", i1.interactivity.events.onhover.mode)) {
            var s1 = e.x - i1.interactivity.mouse.pos_x, n1 = e.y - i1.interactivity.mouse.pos_y, r = Math.sqrt(s1 * s1 + n1 * n1), c1 = 1 - r / i1.interactivity.modes.bubble.distance;
            if (r <= i1.interactivity.modes.bubble.distance) {
                if (c1 >= 0 && "mousemove" == i1.interactivity.status) {
                    if (i1.interactivity.modes.bubble.size != i1.particles.size.value) {
                        if (i1.interactivity.modes.bubble.size > i1.particles.size.value) {
                            var o1 = e.radius + i1.interactivity.modes.bubble.size * c1;
                            o1 >= 0 && (e.radius_bubble = o1);
                        } else {
                            var l1 = e.radius - i1.interactivity.modes.bubble.size, o1 = e.radius - l1 * c1;
                            o1 > 0 ? e.radius_bubble = o1 : e.radius_bubble = 0;
                        }
                    }
                    if (i1.interactivity.modes.bubble.opacity != i1.particles.opacity.value) {
                        if (i1.interactivity.modes.bubble.opacity > i1.particles.opacity.value) {
                            var v1 = i1.interactivity.modes.bubble.opacity * c1;
                            v1 > e.opacity && v1 <= i1.interactivity.modes.bubble.opacity && (e.opacity_bubble = v1);
                        } else {
                            var v1 = e.opacity - (i1.particles.opacity.value - i1.interactivity.modes.bubble.opacity) * c1;
                            v1 < e.opacity && v1 >= i1.interactivity.modes.bubble.opacity && (e.opacity_bubble = v1);
                        }
                    }
                }
            } else a3();
            "mouseleave" == i1.interactivity.status && a3();
        } else if (i1.interactivity.events.onclick.enable && isInArray("bubble", i1.interactivity.events.onclick.mode)) {
            if (i1.tmp.bubble_clicking) {
                var s1 = e.x - i1.interactivity.mouse.click_pos_x, n1 = e.y - i1.interactivity.mouse.click_pos_y, r = Math.sqrt(s1 * s1 + n1 * n1), p = ((new Date).getTime() - i1.interactivity.mouse.click_time) / 1000;
                p > i1.interactivity.modes.bubble.duration && (i1.tmp.bubble_duration_end = !0), p > 2 * i1.interactivity.modes.bubble.duration && (i1.tmp.bubble_clicking = !1, i1.tmp.bubble_duration_end = !1);
            }
            i1.tmp.bubble_clicking && (t3(i1.interactivity.modes.bubble.size, i1.particles.size.value, e.radius_bubble, e.radius, "size"), t3(i1.interactivity.modes.bubble.opacity, i1.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
        }
    }, i1.fn.modes.repulseParticle = function(e) {
        function a4() {
            var a = Math.atan2(d, p);
            if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i1.particles.move.out_mode) {
                var t = {
                    x: e.x + e.vx,
                    y: e.y + e.vy
                };
                t.x + e.radius > i1.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i1.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
            }
        }
        if (i1.interactivity.events.onhover.enable && isInArray("repulse", i1.interactivity.events.onhover.mode) && "mousemove" == i1.interactivity.status) {
            var t4 = e.x - i1.interactivity.mouse.pos_x, s = e.y - i1.interactivity.mouse.pos_y, n = Math.sqrt(t4 * t4 + s * s), r = {
                x: t4 / n,
                y: s / n
            }, c = i1.interactivity.modes.repulse.distance, o = 100, l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50), v = {
                x: e.x + r.x * l,
                y: e.y + r.y * l
            };
            "bounce" == i1.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i1.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i1.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
        } else if (i1.interactivity.events.onclick.enable && isInArray("repulse", i1.interactivity.events.onclick.mode)) {
            if (i1.tmp.repulse_finish || (i1.tmp.repulse_count++, i1.tmp.repulse_count == i1.particles.array.length && (i1.tmp.repulse_finish = !0)), i1.tmp.repulse_clicking) {
                var c = Math.pow(i1.interactivity.modes.repulse.distance / 6, 3), p = i1.interactivity.mouse.click_pos_x - e.x, d = i1.interactivity.mouse.click_pos_y - e.y, m = p * p + d * d, u = -c / m * 1;
                c >= m && a4();
            } else 0 == i1.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
        }
    }, i1.fn.modes.grabParticle = function(e) {
        if (i1.interactivity.events.onhover.enable && "mousemove" == i1.interactivity.status) {
            var a = e.x - i1.interactivity.mouse.pos_x, t = e.y - i1.interactivity.mouse.pos_y, s = Math.sqrt(a * a + t * t);
            if (s <= i1.interactivity.modes.grab.distance) {
                var n = i1.interactivity.modes.grab.line_linked.opacity - s / (1 / i1.interactivity.modes.grab.line_linked.opacity) / i1.interactivity.modes.grab.distance;
                if (n > 0) {
                    var r = i1.particles.line_linked.color_rgb_line;
                    i1.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i1.canvas.ctx.lineWidth = i1.particles.line_linked.width, i1.canvas.ctx.beginPath(), i1.canvas.ctx.moveTo(e.x, e.y), i1.canvas.ctx.lineTo(i1.interactivity.mouse.pos_x, i1.interactivity.mouse.pos_y), i1.canvas.ctx.stroke(), i1.canvas.ctx.closePath();
                }
            }
        }
    }, i1.fn.vendors.eventsListeners = function() {
        "window" == i1.interactivity.detect_on ? i1.interactivity.el = window : i1.interactivity.el = i1.canvas.el, (i1.interactivity.events.onhover.enable || i1.interactivity.events.onclick.enable) && (i1.interactivity.el.addEventListener("mousemove", function(e) {
            if (i1.interactivity.el == window) var a = e.clientX, t = e.clientY;
            else var a = e.offsetX || e.clientX, t = e.offsetY || e.clientY;
            i1.interactivity.mouse.pos_x = a, i1.interactivity.mouse.pos_y = t, i1.tmp.retina && (i1.interactivity.mouse.pos_x *= i1.canvas.pxratio, i1.interactivity.mouse.pos_y *= i1.canvas.pxratio), i1.interactivity.status = "mousemove";
        }), i1.interactivity.el.addEventListener("mouseleave", function(e) {
            i1.interactivity.mouse.pos_x = null, i1.interactivity.mouse.pos_y = null, i1.interactivity.status = "mouseleave";
        })), i1.interactivity.events.onclick.enable && i1.interactivity.el.addEventListener("click", function() {
            if (i1.interactivity.mouse.click_pos_x = i1.interactivity.mouse.pos_x, i1.interactivity.mouse.click_pos_y = i1.interactivity.mouse.pos_y, i1.interactivity.mouse.click_time = (new Date).getTime(), i1.interactivity.events.onclick.enable) switch(i1.interactivity.events.onclick.mode){
                case "push":
                    i1.particles.move.enable ? i1.fn.modes.pushParticles(i1.interactivity.modes.push.particles_nb, i1.interactivity.mouse) : 1 == i1.interactivity.modes.push.particles_nb ? i1.fn.modes.pushParticles(i1.interactivity.modes.push.particles_nb, i1.interactivity.mouse) : i1.interactivity.modes.push.particles_nb > 1 && i1.fn.modes.pushParticles(i1.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    i1.fn.modes.removeParticles(i1.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    i1.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    i1.tmp.repulse_clicking = !0, i1.tmp.repulse_count = 0, i1.tmp.repulse_finish = !1, setTimeout(function() {
                        i1.tmp.repulse_clicking = !1;
                    }, 1000 * i1.interactivity.modes.repulse.duration);
            }
        });
    }, i1.fn.vendors.densityAutoParticles = function() {
        if (i1.particles.number.density.enable) {
            var e = i1.canvas.el.width * i1.canvas.el.height / 1000;
            i1.tmp.retina && (e /= 2 * i1.canvas.pxratio);
            var a = e * i1.particles.number.value / i1.particles.number.density.value_area, t = i1.particles.array.length - a;
            0 > t ? i1.fn.modes.pushParticles(Math.abs(t)) : i1.fn.modes.removeParticles(t);
        }
    }, i1.fn.vendors.checkOverlap = function(e, a) {
        for(var t = 0; t < i1.particles.array.length; t++){
            var s = i1.particles.array[t], n = e.x - s.x, r = e.y - s.y, c = Math.sqrt(n * n + r * r);
            c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i1.canvas.w, e.y = a ? a.y : Math.random() * i1.canvas.h, i1.fn.vendors.checkOverlap(e));
        }
    }, i1.fn.vendors.createSvgImg = function(e) {
        var a = i1.tmp.source_svg, t = /#([0-9A-F]{3,6})/gi, s = a.replace(t, function(a, t, i, s) {
            if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
            else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
            return n;
        }), n2 = new Blob([
            s
        ], {
            type: "image/svg+xml;charset=utf-8"
        }), r = window.URL || window.webkitURL || window, c = r.createObjectURL(n2), o = new Image;
        o.addEventListener("load", function() {
            e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i1.tmp.count_svg++;
        }), o.src = c;
    }, i1.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(i1.fn.drawAnimFrame), t2.remove(), pJSDom = null;
    }, i1.fn.vendors.drawShape = function(e, a, t, i, s, n) {
        var r = s * n, c = s / n, o = 180 * (c - 2) / c, l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
        for(var v = 0; r > v; v++)e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore();
    }, i1.fn.vendors.exportImg = function() {
        window.open(i1.canvas.el.toDataURL("image/png"), "_blank");
    }, i1.fn.vendors.loadImg = function(e2) {
        if (i1.tmp.img_error = void 0, "" != i1.particles.shape.image.src) {
            if ("svg" == e2) {
                var a = new XMLHttpRequest;
                a.open("GET", i1.particles.shape.image.src), a.onreadystatechange = function(e) {
                    4 == a.readyState && (200 == a.status ? (i1.tmp.source_svg = e.currentTarget.response, i1.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i1.tmp.img_error = !0));
                }, a.send();
            } else {
                var t = new Image;
                t.addEventListener("load", function() {
                    i1.tmp.img_obj = t, i1.fn.vendors.checkBeforeDraw();
                }), t.src = i1.particles.shape.image.src;
            }
        } else console.log("Error pJS - No image.src"), i1.tmp.img_error = !0;
    }, i1.fn.vendors.draw = function() {
        "image" == i1.particles.shape.type ? "svg" == i1.tmp.img_type ? i1.tmp.count_svg >= i1.particles.number.value ? (i1.fn.particlesDraw(), i1.particles.move.enable ? i1.fn.drawAnimFrame = requestAnimFrame(i1.fn.vendors.draw) : cancelRequestAnimFrame(i1.fn.drawAnimFrame)) : i1.tmp.img_error || (i1.fn.drawAnimFrame = requestAnimFrame(i1.fn.vendors.draw)) : void 0 != i1.tmp.img_obj ? (i1.fn.particlesDraw(), i1.particles.move.enable ? i1.fn.drawAnimFrame = requestAnimFrame(i1.fn.vendors.draw) : cancelRequestAnimFrame(i1.fn.drawAnimFrame)) : i1.tmp.img_error || (i1.fn.drawAnimFrame = requestAnimFrame(i1.fn.vendors.draw)) : (i1.fn.particlesDraw(), i1.particles.move.enable ? i1.fn.drawAnimFrame = requestAnimFrame(i1.fn.vendors.draw) : cancelRequestAnimFrame(i1.fn.drawAnimFrame));
    }, i1.fn.vendors.checkBeforeDraw = function() {
        "image" == i1.particles.shape.type ? "svg" == i1.tmp.img_type && void 0 == i1.tmp.source_svg ? i1.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i1.tmp.checkAnimFrame), i1.tmp.img_error || (i1.fn.vendors.init(), i1.fn.vendors.draw())) : (i1.fn.vendors.init(), i1.fn.vendors.draw());
    }, i1.fn.vendors.init = function() {
        i1.fn.retinaInit(), i1.fn.canvasInit(), i1.fn.canvasSize(), i1.fn.canvasPaint(), i1.fn.particlesCreate(), i1.fn.vendors.densityAutoParticles(), i1.particles.line_linked.color_rgb_line = hexToRgb(i1.particles.line_linked.color);
    }, i1.fn.vendors.start = function() {
        isInArray("image", i1.particles.shape.type) ? (i1.tmp.img_type = i1.particles.shape.image.src.substr(i1.particles.shape.image.src.length - 3), i1.fn.vendors.loadImg(i1.tmp.img_type)) : i1.fn.vendors.checkBeforeDraw();
    }, i1.fn.vendors.eventsListeners(), i1.fn.vendors.start();
};
Object.deepExtend = function(e, a) {
    for(var t in a)a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {
    }, arguments.callee(e[t], a[t])) : e[t] = a[t];
    return e;
}, window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1000 / 60);
    };
})(), window.cancelRequestAnimFrame = (function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
})(), window.pJSDom = [], window.particlesJS = function(e, a) {
    "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
    var t = document.getElementById(e), i = "particles-js-canvas-el", s = t.getElementsByClassName(i);
    if (s.length) for(; s.length > 0;)t.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i, n.style.width = "100%", n.style.height = "100%";
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function(e, a5, t) {
    var i = new XMLHttpRequest;
    i.open("GET", a5), i.onreadystatechange = function(a) {
        if (4 == i.readyState) {
            if (200 == i.status) {
                var s = JSON.parse(a.currentTarget.response);
                window.particlesJS(e, s), t && t();
            } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
        }
    }, i.send();
};

//# sourceMappingURL=index.ca3d3e9e.js.map
