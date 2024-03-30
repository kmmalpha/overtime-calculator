import React, { useState } from 'react';

const OvertimeCalculator = () => {
    const [regularHours, setRegulatHours] = useState(0);
    const [hourlyRate, setHourlyRate] = useState(0);
    const [overtimeHours, setOvertimeHours] = useState(0);
    const [overtimePay, setOvertimePay] = useState(0);
    const [totalPay, setTotalPay] = useState(0);

    const calculateOvertime = () => {
        const overtime = regularHours > 40 ? regularHours - 40 : 0;
    }

    return (
        <div className='calculator'>

        </div>
    )
}

export default OvertimeCalculator;