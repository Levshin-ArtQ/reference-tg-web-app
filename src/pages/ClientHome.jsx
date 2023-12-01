import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'; // TODO: wrong import see
import './ClientHome.css'
import ServiceWidget from '../components/ServiceWidget/ServiceWidget.jsx'
import CooperationWidget from '../components/CooperationWidget/CooperationWidget.jsx'

//TODO: to database
const products = [
    {id: '1', title: 'Парный маникюр', duration: 20, cost: 1000, closest: 'через 5 часов'},
    {id: '2', title: 'Стрижка женская', duration: 50, cost: 1200, closest: 'Завтра утром'},
    {id: '3', title: 'Педикюр', duration: 20, cost: 500, closest: 'Завтра вечером'},
    {id: '4', title: 'Брови', duration: 60, cost: '700-1220', closest: 'через час'},
]
const group = {id: '4', count1: 4, count2: 3, master_type: 'Визажист', master_name: 'Ирина', address: 'Лениниа 85А', time: '20:00'};
const count = 3;
const ClientHome = () => {
    return (
        <div className='wrapper'>

            <div className="hat dfc client_hat">
                <span className="greeting">Доброго времени суток</span>
                <div className="count_line df">
                    <span className="booking_count">Предстоящих записей: {count}</span>
                    <Link className="lookup"><div>Посмотреть</div></Link>
                </div>
            </div>

            <CooperationWidget group_booking={group} className='group'/>

            <div className="filter_block dfc">
                <span className="question">Какая услуга вам нужна?</span>
                <div className="button_str df">
                    <Button className="filter_button">Маникюр</Button><Button className="filter_button">Педикюр</Button><Button className="filter_button">Стрижка</Button>
                    <Link className="button_catalog filter_button">Каталог</Link>
                </div>
            </div>

            <div className="widgets_list dfc">
                {products.map(widget => (
                    <ServiceWidget

                        object = {widget}
                        className = {"widget"}
                    />
                ))}
            </div>
            
        </div>
    );
};

ClientHome.propTypes = {};

export default ClientHome;