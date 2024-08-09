import Image from '../../images/resu-pic.png'
import './dashboard.components.css'

export default function Dashboard() {
    return (
        <div className='justify-center'>
            <div>
                <img className="resu-pic" src={Image} alt="my pic" />
            </div>
        </div>
    );
}