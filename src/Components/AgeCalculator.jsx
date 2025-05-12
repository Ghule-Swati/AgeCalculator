import React,{useState} from 'react'
import './AgeCalculator.css'

const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }

        setAge(age);
    };

    const resetCalculator = () => {
        setBirthdate('');
        setAge(0);
    }

    return (
        <div className='Container'>
            <h2 className='heading container_title'>Age Calculator</h2>
            <p className='para container_title'>The age calculator can determine age
                or interval</p>
            <div className='Container_middle'>
                <div className='right'>
                    <h4>date of Birth</h4>
                    <input type="date" className='date' value={birthdate} onChange={e=>setBirthdate(e.target.value)} />
                    <div className='button_div'>
                        <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        <button className="button-65" onClick={resetCalculator} >Reset</button>
                    </div>
                </div>

                <div className='left'>
                    <div className='Container_middle_para'>
                        <h1>Your age is</h1>
                    </div>
                    <h1>{birthdate ? `${age}` : ''}</h1>
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator
