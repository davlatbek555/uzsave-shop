import React, { useState } from 'react'

function OffersContent() {
    const initialTime = {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0
    }
    const [time, setTime] = useState(initialTime)

    function generateTime(a) {
        const total = Date.parse(a) - Date.parse(new Date());
        const sec = Math.floor((total / 1000) % 60);
        const min = Math.floor((total / 1000 / 60) % 60);
        const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
        const day = Math.floor(total / (1000 * 60 * 60 * 24));

        if (total <= 0) {
            setTime(initialTime)
        } else {
            setTime({
                day,
                hour,
                min,
                sec
            });
        }
    }

    function padString(a) {
        return String(a).padStart('2', '0')
    }

    setInterval(() => generateTime('05/27/2024'), 1000)
    return (
        <div className="offers-content">
            <h4 className="offers-title">Hafta Chegirmalari</h4>
            <p className="offers-subtitle">Gadjetlar</p>
            <div className="offers-time">
                <div className="offers-time__block">
                    <span className="offers-time__number">{padString(time.day)}</span>
                    <span className="offers-time__text">Kun</span>
                </div>
                <div className="offers-time__block">
                    <span className="offers-time__number">{padString(time.hour)}</span>
                    <span className="offers-time__text">Soat</span>
                </div>
                <div className="offers-time__block">
                    <span className="offers-time__number">{padString(time.min)}</span>
                    <span className="offers-time__text">Daqiqa</span>
                </div>
                <div className="offers-time__block">
                    <span className="offers-time__number">{padString(time.sec)}</span>
                    <span className="offers-time__text">Sonya</span>
                </div>
            </div>
        </div>
    )
}

export default OffersContent