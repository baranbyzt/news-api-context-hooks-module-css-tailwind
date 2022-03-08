
import Ourİmage from '../assets/404.png'
import style from '../style/ErrorPage.module.css'

const ErrorPage = () => {
    return ( 
        <div className={style.error_page_div_seciton}>
            <img className={style.error_page_img_seciton} src={Ourİmage} />
        </div>
     );
}
 
export default ErrorPage;