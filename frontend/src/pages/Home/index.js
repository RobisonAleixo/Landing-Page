import React from 'react';

import './styles.css';

//import { FiHome } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import deviceImg from '../../assets/device.png';

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="center">

          <nav>
            <img src={logoImg} alt="Logo apper" />
            <ul>
              <li>home</li>
              <li>about</li>
              <li>features</li>
              <li>download</li>
              <li>pricing</li>
              <li>contact</li>
            </ul>
          </nav>

          <section>
            <div className="promote">
              <h3>Make your life easier with apper</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, suscipit esse! Tempore doloremque fugiat ex praesentium? Deserunt, assumenda. Quasi temporibus officia ex voluptas natus distinctio fuga, quod ipsa dolore quisquam?</p>
              <button>buy now</button>
              <button>try now</button>
            </div>
            <div className="promote">
              <img src={deviceImg} alt="Device" />
            </div>
          </section>

        </div>
      </header>

      <section className="about">
        <div className="center">

          <h2>About apper</h2>
          <div className="about-apper">
            <article>
              <h3>Easy to customiza</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente molestias. Nihil, voluptatibus ex nesciunt eveniet quisquam, recusandae earum ea eos commodi corporis quia, laboriosam facere! Mollitia at eius veniam.</p>
            </article>

            <article>
              <h3>build-in notification</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente molestias. Nihil, voluptatibus ex nesciunt eveniet quisquam, recusandae earum ea eos commodi corporis quia, laboriosam facere! Mollitia at eius veniam.</p>
            </article>

            <article>
              <h3>works offline</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente molestias. Nihil, voluptatibus ex nesciunt eveniet quisquam, recusandae earum ea eos commodi corporis quia, laboriosam facere! Mollitia at eius veniam.</p>
            </article>
          </div>

        </div>
      </section>

    </div>
  );
} 