import React, {useEffect} from 'react'
import '../Home-Page/index.scss'
import '../Home-Page/media.scss'
import Header from "../../components/Header";
import {useState} from "react";
import axios from "axios";

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
        <>
            <Header></Header>
            <main id={'main'}>
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
                                    className={'total-value'}>{getTag && getVacation === 'Все' ? searchTours.length : searchTours.filter(el => el.tag === getTag).filter(el => el.tagVacations === getVacation).length}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'blocks-section'}>
                    <div className={'blocks-container'}>
                        <div className={'blocks-row'}>
                            <div className={'loading-wrapper'}>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
                                    <circle fill='#FF156D' stroke='#FF156D' strokeWidth='15' r='15' cx='40' cy='65'>
                                        <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;'
                                                 keySplines='.5 0 .5 1;.5 0 .5 1'
                                                 repeatCount='indefinite' begin='-.4'></animate>
                                    </circle>
                                    <circle fill='#FF156D' stroke='#FF156D' strokeWidth='15' r='15' cx='100' cy='65'>
                                        <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;'
                                                 keySplines='.5 0 .5 1;.5 0 .5 1'
                                                 repeatCount='indefinite' begin='-.2'></animate>
                                    </circle>
                                    <circle fill='#FF156D' stroke='#FF156D' strokeWidth='15' r='15' cx='160' cy='65'>
                                        <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;'
                                                 keySplines='.5 0 .5 1;.5 0 .5 1'
                                                 repeatCount='indefinite' begin='0'></animate>
                                    </circle>
                                </svg>
                            </div>
                            {
                                searchTours.map(el => {
                                    return (
                                        <div className={'col-3 col-4 col-6 col-12'}>
                                            <div className={'box'}>
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
                                                <span className={'card-price'}>Стоимость: {el.price}{el.currency}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage