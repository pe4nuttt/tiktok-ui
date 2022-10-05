import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cdce1f8081a28e5ec6277dbc3721200d~c5_300x300.webp?x-expires=1665036000&x-signature=KT9V5z%2FL0kE8fvWsBqNFmxw%2B9ps%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>aloluday111</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Lu</span>
            </div>
        </div>
    );
}

export default AccountItem;
