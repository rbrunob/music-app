import rockcard from '../../../assets/rock-card.jpg';
import brazilianrock from '../../../assets/brazilian-rock-card.jpg';
import classicrock from '../../../assets/classic-rock-card.jpg';
import styles from './Songs.module.scss';

const songList = [
    {
        bannerAlbum: rockcard,
        titleSong: 'Rock',
        description: 'Description'
    },
    {
        bannerAlbum: brazilianrock,
        titleSong: 'Title',
        description: 'Description'
    },
    {
        bannerAlbum: classicrock,
        titleSong: 'Title',
        description: 'Description'
    }
];

export default function Songs() {
    return (
        <div className={styles.container_songs}>
            {songList.map((song) => (
                <div className={styles.song}>
                    <div className={styles.song_banner}>
                        <img
                            src={song.bannerAlbum}
                            alt={song.titleSong}
                        />
                    </div>
                    <div className={styles.song_info}>
                        <h3>{song.titleSong}</h3>
                        <p>{song.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}