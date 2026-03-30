import { Link } from 'react-router-dom';

import styles from './PublicPage.module.css';

export function PublicPage() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Публичная страница</h1>
      <div className={styles.section}>
        <Link to="/login">Войти</Link>
        <Link to="/profile">Профиль</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        commodi doloremque magnam maxime quia, quidem quod temporibus voluptate
        voluptatibus? Enim laboriosam modi necessitatibus, non pariatur sed
        voluptas? Dolor minima, tempora!
      </p>
      <p>
        Aliquam animi atque blanditiis, corporis culpa eaque, magni nam
        praesentium ratione soluta, totam veritatis. Atque consequatur enim
        inventore itaque, molestiae, molestias nobis pariatur perferendis rem
        totam voluptas voluptates voluptatum!
      </p>
      <p>
        Ducimus, facere, fugit! Animi aperiam, atque eaque eligendi esse face
        fugit impedit in magni odio possimus quas, quo, sint. Consequuntur
        cumque doloremque est impedit laudantium possimus provident quo sapiente
        sequi!
      </p>
      <p>
        Accusamus blanditiis consequuntur dicta dolores doloribus ex, exception
        incidunt iste necessitatibus, neque nihil quis quod repellendus? Cum
        facilis numquam sint sit tempore velit! Consequatur consequuntur cum
        doloribus, eligendi quidem sapiente?
      </p>
    </div>
  );
}
