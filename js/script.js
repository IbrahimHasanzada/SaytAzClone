const mobileHeader = document.getElementById("mobileHeader")
function openHeader(z) {
    z ? mobileHeader.classList.remove('translate-x-[384px]') : mobileHeader.classList.add('translate-x-[384px]')
}

let product = [
    [
        {
            id: 1,
            name: 'Bloq',
            price: 200

        },
        {
            id: 2,
            name: 'Responsive',
            price: 100

        },
        {
            id: 3,
            name: 'Mesajlaşma',
            price: 50

        },
        {
            id: 4,
            name: 'Qalereya',
            price: 100

        },
        {
            id: 5,
            name: 'Saytda Axtarış',
            price: 100

        },
        {
            id: 6,
            name: 'Rezervasyon',
            price: 400

        },
        {
            id: 7,
            name: 'Analitika / İzləmə',
            price: 50

        },
        {
            id: 8,
            name: 'Üzv girişi /‍‍‍ Profillər',
            price: 400

        },
        {
            id: 9,
            name: 'Forum',
            price: 400

        },
        {
            id: 10,
            name: 'Canlı Söhbət',
            price: 50

        },
        {
            id: 11,
            name: 'Əlaqə Forması',
            price: 100

        },
        {
            id: 12,
            name: 'Xəritə Məlumatı / Geolocation',
            price: 100

        },
        {
            id: 13,
            name: 'Sosial Media inteqrasiyası',
            price: 50

        },
        {
            id: 14,
            name: 'Admin Panel',
            price: 300

        },
    ],
    [
        {
            id: 21,
            name: 'Başlıqlar & Meta',
            price: 200
        },
        {
            id: 22,
            name: 'Açar söz',
            price: 300
        },
        {
            id: 23,
            name: '+20 Qabaqcıl Texnika',
            price: 300
        },
        {
            id: 24,
            name: 'Başlıq Teqləri',
            price: 100
        },
        {
            id: 25,
            name: 'Sitemap',
            price: 100
        },
    ],
    [
        {
            id: 15,
            name: 'Ödəniş',
            price: 200
        },
        {
            id: 16,
            name: 'Səbət',
            price: 500
        },
        {
            id: 17,
            name: 'Məhsullar',
            price: 300
        },
        {
            id: 18,
            name: 'Bəyəndiklərim',
            price: 300
        },
        {
            id: 19,
            name: 'Filtr',
            price: 300
        },
        {
            id: 20,
            name: 'Məhsul Haqqında',
            price: 200
        },
    ]
]

const radios = document.querySelectorAll(".fa-circle")
const parent = document.querySelectorAll(".parent")
const elaveler = document.getElementById("elaveler")
const ticaret = document.getElementById("ticaret")
const axtaris = document.getElementById("axtaris")
const sumElave = document.getElementById("elaveler-sum")
const sumSeo = document.getElementById("seo-sum")
const sumE = document.getElementById("E-sum")
const sumUmumi = document.getElementById("umumi-sum")
product.map(item => {
    item.map(item => {
        item.flag = true
    })
})
function radio(x) {
    product.map((item, i) => {
        item.map(item => {
            if (item.id == x && item.flag == true) {
                if (item.id > 1 && item.id < 15) elaveler.innerHTML -= -item.price
                if (item.id > 14 && item.id < 21) ticaret.innerHTML -= -item.price
                if (item.id > 20) axtaris.innerHTML -= -item.price
                item.flag = false
            }

            else if (item.id == x && item.flag == false) {
                if (item.id > 1 && item.id < 15) elaveler.innerHTML -= +item.price
                if (item.id > 14 && item.id < 21) ticaret.innerHTML -= +item.price
                if (item.id > 20) axtaris.innerHTML -= +item.price
                item.flag = true

            }
            sumElave.innerHTML = +elaveler.innerHTML 
            sumSeo.innerHTML = +axtaris.innerHTML 
            sumE.innerHTML = +ticaret.innerHTML 
            sum()
        })
    })
    parent[x - 1].classList.toggle("bgg")
    radios[x - 1].classList.toggle("translate-x-4")
    
    
}
const sehife = document.getElementById("sehife")
const sehifeMon = document.getElementById("sehife-mon")
const statikSehife = document.getElementById("statikSehife")
const dizayn = document.getElementById("dizayn")
const sumStatik = document.getElementById("statik-sum")
const sumLogo = document.getElementById("logo-sum")

let m = 0;
let y = 0;

let previousValue = parseInt(statikSehife.value);
function statik() {
    let currenValue = statikSehife.value
    sehife.innerHTML = currenValue       
    sehifeMon.innerHTML = currenValue*100*dizayn.value 
    sumStatik.innerHTML = sehifeMon.innerHTML
    sum()
}
const murekkeb = document.getElementById("murekkeb")
const murekkebSum = document.getElementById("murekkebSum")
function murekkebDizayn() {
    murekkebSum.innerHTML = parseInt(murekkeb.value) * 100
    sumLogo.innerHTML = murekkebSum.innerHTML
    sum()
}
function sum(){
    sumUmumi.innerHTML = +sumE.innerHTML + +sumSeo.innerHTML + +sumElave.innerHTML + +sehifeMon.innerHTML + +murekkebSum.innerHTML
}