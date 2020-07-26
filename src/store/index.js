import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import img1 from '../img/pro1.jpg';
import img2 from '../img/pro2.jpg';
import img3 from '../img/pro3.jpg';


export const initialState= {
  app: {
    productsList: [
      {id: 0 , title: 'محصول 1' , price: '5000' ,alt: 'عکس محصول 1' ,src: img1 , fav: true, discrp: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد."},
      {id: 1 , title: 'محصول 2' , price: '4000' ,alt: 'عکس محصول 2' ,src: img2 , fav: false, discrp: " معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است."},
      {id: 2 , title: 'محصول 3' , price: '3000' ,alt: 'عکس محصول 3' ,src: img3 , fav: false, discrp: "از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."}
    ],
    proFields: {}
  }
}

const store = createStore( rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;