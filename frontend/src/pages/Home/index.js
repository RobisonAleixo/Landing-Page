import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.png';
import deviceImg from '../../assets/device.png';
import featureDeviceImg from '../../assets/feature-device.png';
import featureicon1Img from '../../assets/featureicon1.png';
import featureicon2Img from '../../assets/featureicon2.png';
import featureicon3Img from '../../assets/featureicon3.png';
import featureicon4Img from '../../assets/featureicon4.png';
import { GoGear, GoBell } from 'react-icons/go'
import { IoMdPower } from 'react-icons/io'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

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
              <button className="btn btn-promote">buy now</button>
              <button className="btn btn-promote">try now</button>
            </div>
            <div className="promote">
              <img src={deviceImg} alt="Device" />
            </div>
          </section>

        </div>
      </header>

      <section className="about">
        <div className="center">

          <h2 className="title">About apper</h2>
          <div className="about-apper">
            <article>
              <GoGear size={55} color={"#56bbd5"} />
              <h3>Easy to customiza</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente molestias. Nihil, voluptatibus ex nesciunt eveniet quisquam, recusandae earum ea eos commodi corporis quia, laboriosam facere! Mollitia at eius veniam.</p>
            </article>

            <article>
              <GoBell size={55} color={"#56bbd5"} />
              <h3>build-in notification</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente molestias. Nihil, voluptatibus ex nesciunt eveniet quisquam, recusandae earum ea eos commodi corporis quia, laboriosam facere! Mollitia at eius veniam.</p>
            </article>

            <article>
              <IoMdPower size={55} color={"#56bbd5"} />
              <h3>works offline</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente molestias. Nihil, voluptatibus ex nesciunt eveniet quisquam, recusandae earum ea eos commodi corporis quia, laboriosam facere! Mollitia at eius veniam.</p>
            </article>
          </div>

        </div>
      </section>

      <section className="features">
        <div className="center">

          <h2>app features</h2>
          <div className="app-features">
            <article>
              <img src={featureicon1Img} alt="" />
              <h3>mobile friendly</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure ullam aspernatur repudiandae incidunt quo odit hic odio asperiores sunt nihil eaque fuga necessitatibus reprehenderit deserunt illo earum, repellendus suscipit?</p>
            </article>

            <article>
              <img src={featureicon2Img} alt="" />
              <h3>security</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure ullam aspernatur repudiandae incidunt quo odit hic odio asperiores sunt nihil eaque fuga necessitatibus reprehenderit deserunt illo earum, repellendus suscipit?</p>
            </article>

            <article>
              <img src={featureicon3Img} alt="" />
              <h3>24/7 support</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure ullam aspernatur repudiandae incidunt quo odit hic odio asperiores sunt nihil eaque fuga necessitatibus reprehenderit deserunt illo earum, repellendus suscipit?</p>
            </article>

            <article>
              <img src={featureicon4Img} alt="" />
              <h3>beautiful design</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure ullam aspernatur repudiandae incidunt quo odit hic odio asperiores sunt nihil eaque fuga necessitatibus reprehenderit deserunt illo earum, repellendus suscipit?</p>
            </article>

            <div className="device-img">
              <img src={featureDeviceImg} alt="Feature Device" />
            </div>

          </div>

        </div>
      </section>

      <section className="download">
        <div className="center">
          <h2>download our app</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi libero natus saepe quis! Deserunt voluptatibus natus totam. Ipsa fugit distinctio officiis, quo veritatis eos doloremque dignissimos odio dolores quod!</p>
          <div>
            <button className="btn btn-download"><FaApple size={16} />App Store</button>
            <button className="btn btn-download"><FaGooglePlay size={16} />Play Store</button>
          </div>
        </div>
      </section>

      <section className="pricing-plans">
        <h2>pricing plans</h2>
        <div className="center">

          <div className="plans">
            <div className="plan-item">
              <div className="header-plans">
                <h3>basic</h3>
                <p>$25/month</p>
              </div>
              <ul className="body-plans">
                <li>free suport</li>
                <li>20gb storage</li>
                <li>2 users</li>
                <li>2 email accounts</li>
              </ul>
              <button className="btn btn-plans">Order now</button>
            </div>
            <div className="plan-item">
              <div className="header-plans sale">
                <h3>medium</h3>
                <p>$45/month</p>
              </div>
              <ul className="body-plans">
                <li>free suport</li>
                <li>20gb storage</li>
                <li>2 users</li>
                <li>2 email accounts</li>
              </ul>
              <button className="btn btn-plans">Order now</button>
            </div>
            <div className="plan-item">
              <div className="header-plans">
                <h3>large</h3>
                <p>$125/month</p>
              </div>
              <ul className="body-plans">
                <li>free suport</li>
                <li>20gb storage</li>
                <li>2 users</li>
                <li>2 email accounts</li>
              </ul>
              <button className="btn btn-plans">Order now</button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
} 