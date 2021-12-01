
import * as constants from '../actions/cardData/constants'

const initialState = {
    latestCardArray : [
        {
            cardImage: '/assets/images/Group 172.svg',
            admissionToken: 'Core',
            cardTitle: 'Sufficiant Shrimp',
            onSale: '8.7',
            cardType: 'INVERTEBRATE',
            color: 'grey',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 170.svg',
            admissionToken: 'Bubble Gum',
            cardTitle: 'Conviction Cockroach',
            onSale: '8.7',
            cardType: 'INVERTEBRATE',
            color: 'pink',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 171.svg',
            admissionToken: 'Rare',
            cardTitle: 'Keen Kingfisher',
            onSale: '8.7',
            cardType: 'BIRD',
            color: 'brown',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 169.svg',
            admissionToken: 'Gold',
            cardTitle: 'Dapper Dachshund',
            onSale: '8.7',
            cardType: 'DOG',
            color: 'yellow',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 168.svg',
            admissionToken: 'Epic',
            cardTitle: 'Tolerant Tuna',
            onSale: '8.7',
            cardType: 'FISH',
            color: 'green',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 167.svg',
            admissionToken: 'Hologram',
            cardTitle: 'Bold As Fuck Bat',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'purple',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 165.svg',
            admissionToken: 'G.O.O',
            cardTitle: 'Swaggy Sea Lion',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'yellow',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 164.svg',
            admissionToken: 'Lava',
            cardTitle: 'Jolly Jack-O',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'red',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 163.svg',
            admissionToken: 'Epic',
            cardTitle: 'Meticulous Magpie',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'green',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: '/assets/images/Group 166.svg',
            admissionToken: 'Diamond',
            cardTitle: 'Level Header Lizar',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'darkgreen',
            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg"
        }
    ],
    sliderCardArray : [
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        }, {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",

        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        }, {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",

        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            admissionToken: 'Core',
            cardTitle: "Tough To Beat A Wor...",
            onSale: '8.7',
            cardType: 'INVERTEBRATE',

            cardCode: '#03872 338 OF 555',
            titleImg: "/assets/images/Group 175.svg",
            logo: "/assets/images/Group 173.svg",
        }
    ],
    libraryTokenArray : [
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            

        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '30',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            cardTitle: "Bccountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            
        }
    ],
    garryCollectionArray : [
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40'
        }
    ],
    latestCard: '',
    sliderCard: '',
    tokenCard: '',
    garryCard: ''
}

export const cardReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case constants.SET_POST_CARD_DATA:
            console.log(payload)
            return {
                ...state,
                latestCard: payload
            }

        case constants.SET_SLIDER_CARD_DATA:
            console.log(payload)
            return {
                ...state,
                sliderCard: payload
            }

        case constants.SET_TOKEN_CARD_DATA:
            console.log(payload)
            return {
                ...state,
                tokenCard: payload
            }
        default:
            return state;
    }
}