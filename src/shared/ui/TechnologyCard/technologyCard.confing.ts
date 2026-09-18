type TechnologyCard = {
    svgUrl: string,
    cardHeader: string,
    cardText: string,
    cardFeatures: string[]
}

export const technologyArray: TechnologyCard[] = [{
    svgUrl: '/esp32.svg',
    cardHeader: 'ESP-32',
    cardText: 'Отвечает за взаимодействие программной части с физическим оборудованием. Принимает команды через Wi-Fi и управляет насосами и клапанами.',
    cardFeatures: ['Работает 24/7', 'WI-FI']
},
{
    svgUrl: '/backend.svg',
    cardHeader: 'Backend',
    cardText: 'Backend приложения и API, через которое веб-интерфейс взаимодействует с системой. Асинхронный, быстрый, с автоматической документацией',
    cardFeatures: ['Python 3.12+', 'Async / Uvicorn', '< 3 мс отклик'] 
},
{
    svgUrl: '/webUi.svg',
    cardHeader: 'Web UI',
    cardText: 'Веб-интерфейс для управления системой полива с любого устройства. Работает в браузере — без установки приложений.',
    cardFeatures: ['React + Typescript', 'Дизайн']
}]