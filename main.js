const app2 = new Vue({
    el: '#app',
    data: {
        settings: {
            s1: null,
            s2: null,
            s3: null,
            s4: null,
            s5: null,
            s6: null,
            m1: null,
            m2: null,
            m3: null,
            m4: null,
            a1: null,
            a2: null,
            a3: null,
            a4: null,
            a5: null,
            a6: null,
            e1: null,
            e2: null,
            e3: null,
            e4: null,
            d1: null,
            d2: null,
            d3: null,
            video1: null,
            video2: null,
        },
        texts: {
            'ru': {
                'configurator': 'Конфигуратор',
                'home': 'Домой',
                'port': "Конфигуратор портов",
                'develop': 'В разработке',
                'gyroscope': 'Гироскоп',
                'accelerometer': 'Акселерометр',
                'menu': 'Меню',
                'save': 'Сохранить',
                'en': 'Англ',
                'ru': 'Рус'

            },
            'en': {
                'configurator': 'Сonfigurator',
                'home': 'Home',
                'port': "Port Сonfigurator",
                'develop': 'in developing',
                'gyroscope': 'Gyroscope',
                'accelerometer': 'Accelerometer',
                'menu': 'Menu',
                'save': 'Save',
                'en': 'En',
                'ru': 'Ru'
            }
        },
        lang: 'en',
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        m1: null,
        m2: null,
        m3: null,
        m4: null,
        a1: null,
        a2: null,
        a3: null,
        a4: null,
        a5: null,
        a6: null,
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        d1: null,
        d2: null,
        d3: null,
        video1: null,
        video2: null,
        gyroscope: "OFF",
        accelerometer: "OFF"
    },
    methods: {
        getHTTPS2() {
            window.location.href = `https://google.com/s1=${this.s1}/s2=${this.s2}/s3=${this.s3}/s4=${this.s4}/s5=${this.s5}/s6=${this.s6}/m1=${this.m1}/m2=${this.m2}/m3=${this.m3}/m4=${this.m4}/a1=${this.a1}/a2=${this.a2}/a3=${this.a3}/a4=${this.a4}/a5=${this.a5}/a6=${this.a6}/e1=${this.e1}/e2=${this.e2}/e3=${this.e3}/e4=${this.e4}/d1=${this.d1}/d2=${this.d2}/d3=${this.d3}/video1=${this.video1}/video2=${this.video2}`
        },
        changeLang(lang) {
            this.lang = lang;
        },
        getHTTPS1() {
            window.location.href = `https://google.com/gyroscope=${this.gyroscope}/accelerometer=${this.accelerometer}`
        }
    }
});
