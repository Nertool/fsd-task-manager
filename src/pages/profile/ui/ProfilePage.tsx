import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from 'features/authRouting';
import { Button } from 'shared';

import styles from './ProfilePage.module.css';

export function ProfilePage() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const onLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Профиль {user?.name}</h1>
      <Link to="/">Главная</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam
        at aut delectus deserunt distinctio explicabo hic laborum maxime
        molestiae, quo quod repellendus ut. Aperiam itaque iure maiores quam
        ullam.
      </p>
      <p>
        Disciple amet animi corporis deleniti dignissimos dolorum eos, expedita
        explicabo facilis fugiat id in iste laudantium magnam odio perspiciatis
        provident quas quibusdam ratione soluta temporibus ullam voluptatibus
        voluptatum. Dolorum, voluptatem.
      </p>
      <Button onClick={() => onLogout()}>Выйти</Button>
    </div>
  );
}
