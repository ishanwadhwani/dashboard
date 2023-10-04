import {LuLayoutDashboard} from 'react-icons/lu'
import {IoPricetagsOutline} from 'react-icons/io5'
import {MdOutlineSchedule} from 'react-icons/md'
import {AiOutlineUser, AiOutlineSetting} from 'react-icons/ai'

const menuItems = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <LuLayoutDashboard size={25} />,
        link: '/dashboard'
    },
    {
        id: 2,
        name: 'Transactions',
        icon: <IoPricetagsOutline size={25} />,
        link: '/transaction'
    },
    {
        id: 3,
        name: 'Schedules',
        icon: <MdOutlineSchedule size={25} />,
        link: '/'
    },
    {
        id: 4,
        name: 'Users',
        icon: <AiOutlineUser size={25} />,
        link: '/'
    },
    {
        id: 5,
        name: 'Settings',
        icon: <AiOutlineSetting size={25} />,
        link: '/'
    },
]


export {
    menuItems,
}