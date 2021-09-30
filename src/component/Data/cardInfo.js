import adminPanel from '../assets/admin-panel.png';
import airbnb from '../assets/airbnb.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import recepi from '../assets/recepi.png';

export const cardInfo = [
    {
        title: 'Admin Panel',
        image: adminPanel,
        source: 'https://github.com/Diyor11/Admin-Panel',
        demo: 'https://admin-panel.pages.dev/',
        desc: 'Admin panel tungi va kunduzgi mode va bir necha ranglar va uch ta tilni o\'zgartirish imkoniyati bor loyihada React Redux va Redux-thunk hamda api orqali qilingan fakeapistore tekin api foydalanilgan '
    },
    {
        title: 'Google clone',
        image: google,
        source: 'https://github.com/Diyor11/Google-clone',
        demo: 'https://google-diyor.netlify.app/',
        desc: 'React va useReducer va useState orqali qlinga ajobiy loyiha stil berishda Sass ishlatilgan'
    },
    {
        title: 'Facebook clone',
        image: facebook,
        source: 'https://github.com/Diyor11/FacebookClone',
        demo: 'https://facebookclonebydiyor.netlify.app/',
        desc: 'Fecebook clone React sass va bootstrap yordamida facebookning home va friends page lari clon qlinga (faqat 700px katta qurulmalar uchun)'
    },
    {
        title: 'AirBnB ',
        image: airbnb,
        source: 'https://github.com/Diyor11/Airbnb.com',
        demo: 'https://airbnb-diyor.netlify.app/',
        desc: 'Airbnb dam olish kunlaringizni qayerda o\'tkazishga yordam beradi React va Sass yordamida qlingan'
    },
    {
        title: 'Recipe',
        image: recepi,
        source: 'https://github.com/Diyor11/Recipe-App',
        demo: 'https://recipebydiyor.netlify.app/',
        desc: 'Edamam Api orqali qlingan ovqatlar uchun ajoyib retseplar React, sass bootstrap orqli qlingan'
    }
]