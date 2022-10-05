import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import image from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
