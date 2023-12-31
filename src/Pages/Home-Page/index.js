import React from 'react'
import '../Home-Page/index.scss'
import '../Home-Page/media.scss'
import Header from "../../components/Header";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Footer from "../../components/Footer";
function HomePage() {
    const [searchTours, setSearchTours] = useState([])
    const [getTag, setGetTag] = useState('Все')
    const [getVacation, setGetVacation] = useState('Все')

    const getRequestApi = () => {
        if (getTag === 'Все' && getVacation === 'Все') {
            axios.get(`https://6579c19f1acd268f9af9f4fc.mockapi.io/total?`)
                .then(res => {
                    if (res) {
                        setSearchTours(res.data)
                        console.log(searchTours)
                    }
                })
                .catch(error => console.log(error))
        } else if (getVacation === 'Все') {
            axios.get(`https://6579c19f1acd268f9af9f4fc.mockapi.io/total?tag=${getTag}`)
                .then(res => {
                    if (res) {
                        setSearchTours(res.data)
                        searchTours.filter(el => el.tag === getTag)
                        console.log(searchTours)
                    }
                })
                .catch(error => console.log(error))
        } else if (getTag === 'Все') {
            axios.get(`https://6579c19f1acd268f9af9f4fc.mockapi.io/total?tagVacations=${getVacation}`)
                .then(res => {
                    if (res) {
                        setSearchTours(res.data.filter(el => el.tagVacations === getVacation))
                        console.log(searchTours)
                    }
                })
        } else if (getVacation !== 'Все') {
            axios.get(`https://6579c19f1acd268f9af9f4fc.mockapi.io/total?tag=${getTag}`)
                .then(res => {
                    if (res) {
                        setSearchTours(res.data.filter(el => el.tagVacations === getVacation))
                        console.log(searchTours)
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const countryOptions = [
        {value: "Все"},
        {value: "Азербайджан"},
        {value: "Венгрия"},
        {value: "Греция"},
        {value: "Доминикана"},
        {value: "Индия"},
        {value: "Индонезия"},
        {value: "Испания"},
        {value: "Камбоджа"},
        {value: "Кипр"},
        {value: "Китай"},
        {value: "Малайзия"},
        {value: "Мальдивы"},
        {value: "Россия"},
        {value: "Танзания"},
        {value: "Туры в Грузию"},
        {value: "Туры в Египет"},
        {value: "Туры в ОАЭ"},
        {value: "Туры в Тайланд"},
        {value: "Туры в Узбекистан"},
        {value: "Туры во Вьетнам"},
        {value: "Туры на Шри-Ланку"},
        {value: "Франция"},
        {value: "Чехия"},
    ];

    const typeOfVacation = [
        {value: "Все"},
        {value: "Стаковый тур"},
        {value: "Экскурсивный тур"},
        {value: "Морские пляжи"},
        {value: "Пляжный отдых"},
        {value: "Семейные туры"},
        {value: "Молодежные туры"},
        {value: "Комбинированные туры"},
        {value: "Аквапарк"},
        {value: "Молодежный отдых"},
        {value: "Свадебный тур"},
        {value: "Шоппинг тур"},
        {value: "Горящие туры"},
    ];

    const getCountryFun = (e) => {
        setGetTag(e.target.value)
        console.log(getTag)
    }

    const getVacationFun = (e) => {
        setGetVacation(e.target.value)
        console.log(getVacation)
    }

    const getTotalFun = () => {
        getRequestApi()
    }

    return (
        <div id={'wrapper'}>
            <Header></Header>
            <main id={'main'} className={'main'}>
                <section className={'search-section'}>
                    <div className={'search-box'}>
                        <div className={'search-inner-box'}>
                            <h1 className={'search-main-text'}>Выбирайте и покупайте туры онлайн</h1>
                        </div>
                    </div>
                    <div className={'searcher-container'}>
                        <div className={'searcher-row'}>
                            <div className={'col-4'}>
                                <div className={'box'}>
                                    <span>Страны</span>
                                    <select onChange={(e) => getCountryFun(e)} name="country" id="country">
                                        {
                                            countryOptions.map(el => {
                                                return (
                                                    <option value={el.value} key={el.value}>{el.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={'col-4'}>
                                <div className={'box'}>
                                    <span>Тип отдыха</span>
                                    <select onChange={(e) => getVacationFun(e)} name="typeOfVacation"
                                            id="typeOfVacation">
                                        {
                                            typeOfVacation.map(el => {
                                                return (
                                                    <option value={el.value} key={el.value}>{el.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={'col-4'}>
                                <div className={'box'}>
                                    <button className={'find-button'} onClick={() => getTotalFun()}>Найти туры</button>
                                </div>
                            </div>
                        </div>
                        <div className={'total-box'}>
                            <div className={'total-inner-box'}>
                                <p className={'total-text'}>Найдено:</p>
                                <span
                                    className={'total-value'}>{searchTours.length}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'blocks-section'}>
                    <div className={'blocks-container swiper'}>
                        <Swiper modules={[Navigation]}
                                breakpoints={{
                                    900: {
                                        slidesPerView: 3,
                                    },
                                    600: {
                                        slidesPerView: 2,
                                    },
                                    320: {
                                        slidesPerView: 1,
                                    },
                                }}
                                navigation={true}
                                className={'blocks-row swiper-wrapper'}
                        >
                            {
                                searchTours.map(el => {
                                    return (
                                        <SwiperSlide className={'col-6 col-12 swiper-slide'}>
                                            <div className={'box'}>
                                                <Link to={`search/${el.id}-${el.title ? el.title.replaceAll(' ', '-') : el.title}`} className={'link-wrapper'}></Link>
                                                <div className={'box-image'}
                                                     style={{
                                                         backgroundImage: `url(${el.img})`,
                                                         backgroundSize: "cover",
                                                         backgroundRepeat: "no-repeat",
                                                }}
                                                >
                                                </div>
                                                <div className={'box-card-tag'}>
                                                    <span className={'card-tag'}><i className="fa-solid fa-location-dot"></i> {el.tagCountry}</span>
                                                    <span className={'card-tag'}><i className="fa-solid fa-tag"></i> {el.tagVacations}</span>
                                                </div>
                                                <h1 className={'card-name'}>{el.title}</h1>

                                                <div className={'card-block-info'}>
                                                    <Link to={`search/tours/${el.id} - ${el.title}`} className={'card-info-link'}>Подробнее</Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default HomePage