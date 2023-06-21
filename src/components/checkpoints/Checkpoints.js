import { useState } from "react"
import style from './checkpoint.module.css'

function Checkpoints(props) {
    const [checkboxValues, setCheckboxValues] = useState({});
    let arr = []

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        let pusher = () => {
            arr.push(checkboxValues)
            console.log(arr);
        }

        setCheckboxValues((prevValues) => ({
            ...prevValues,
            [name]: checked
                ? [...(prevValues[name] || []), value]
                : prevValues[name].filter((val) => val !== value),
        }));
    };

    const handleSubmit = (event) => {
        console.log(checkboxValues);
    };
    return (
        <div className='mb-5'>
            <p >{props.title}</p>
            <div >
                {
                    props.data.map((inputs , i) => {
                        return (
                            <div className="form-check" key={i}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={inputs}
                                    id="flexCheckDefault"
                                    name={props.title}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {inputs}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.btnParent} >
                <button className={style.btn} onClick={()=>props.onsubmit(checkboxValues)}>submit</button>
            </div>
            <hr />
        </div>
    )
}

export default Checkpoints