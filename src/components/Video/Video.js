import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import React, { useRef, useState } from 'react';

const cx = classNames.bind(styles);

const VideoInfo = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d7bc97f11f1957ecccb129789a8f2b85~c5_100x100.jpeg?x-expires=1676127600&x-signature=rn0Ur2xue73kjFBgg0yy8gvmysw%3D"
                alt=""
            />
            <div className={cx('info')}>
                <div className={cx('id')}>
                    <p className={cx('nickname')}>
                        <strong>baolynee</strong>
                    </p>
                    <p className={cx('name')}>A Lyy ✨</p>
                </div>
                <div className={cx('content')}>Em hông liệtttt môn nào hết omgg</div>

                <div className={cx('musicbox')}>
                    <FontAwesomeIcon className={cx('musicicon')} icon={faMusic} />
                    <p className={cx('musicname')}>
                        <strong>nhạc nền - A Lyy ✨</strong>
                    </p>
                </div>
            </div>
            <div>
                <Button className={cx('btn')} outline>
                    Follow
                </Button>
            </div>
        </div>
    );
};

const VideoContent = () => {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className={cx('videobox')}>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className={cx('video')}
                src="https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/ocYGKinenUbZTSjmAJ8QQDVIeBb0jCBIDFgtC0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3506&bt=1753&cs=0&ds=3&ft=4KJMyM3a8Zmo0QV8v64jV1FWdpWrKsdm&mime_type=video_mp4&qs=0&rc=Mzo0Z2k3ODY5Mzk5PGRlZEBpanhmbzs6ZjU1aTMzODgzNEA1Xy4vNGE0X14xYmBjLmAyYSM2NmhzcjQwZzZgLS1kLy1zcw%3D%3D&expire=1675979668&l=20230209155416B4F07DADF58CF50F7381&policy=2&signature=41910f0caf6a8fc097ba2109fbe9524c&tk=tt_chain_token"
                loop
            />
            <div className={cx('videoact')}>
                <div className={cx('num')}>
                    <div className={cx('iconbg')}>
                        <FontAwesomeIcon className={cx('hearticon')} icon={faHeart} />
                    </div>
                    <span>1.4K</span>
                </div>
                <div className={cx('num')}>
                    <div className={cx('iconbg')}>
                        <FontAwesomeIcon className={cx('hearticon')} icon={faComment} />
                    </div>
                    <span>581</span>
                </div>
                <div className={cx('num')}>
                    <div className={cx('iconbg')}>
                        <FontAwesomeIcon className={cx('hearticon')} icon={faShare} />
                    </div>
                    <span>678</span>
                </div>
            </div>
        </div>
    );
};

function Video() {
    return (
        <div className={cx('homepage')}>
            <VideoInfo />
            <VideoContent />
        </div>
    );
}

export default Video;
