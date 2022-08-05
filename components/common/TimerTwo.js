import { useTimer } from 'react-timer-hook'

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
        <ul className="item-countdown-list count-down">
            <li>
                <span className="days">{days}</span>
            </li> 
            <li>
                <span className="hours">{hours}</span>
            </li>
            <li>
                <span className="minutes">{minutes}</span>
            </li>
            <li>
                <span className="seconds">{seconds}</span>
            </li>
        </ul>
      
    );
  }

const TimerTwo = ( {data} ) => {
    //sate expire date in date function
    var expireDate = data.expiredate
    const time = new Date(expireDate);
    time.setSeconds(time.getSeconds());
    
    return(

        <div>
        <MyTimer expiryTimestamp={time} />
        </div>
    )
}

export default TimerTwo;