import React, { useState } from 'react';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import deviceImg from '../../assets/device.png';
import featureDeviceImg from '../../assets/feature-device.png';
import featureicon1Img from '../../assets/featureicon1.png';
import featureicon2Img from '../../assets/featureicon2.png';
import featureicon3Img from '../../assets/featureicon3.png';
import featureicon4Img from '../../assets/featureicon4.png';
import saleBadgeImg from '../../assets/sale-badge.png';
import { GoGear, GoBell } from 'react-icons/go'
import { IoMdPower } from 'react-icons/io'
import {
  FaApple,
  FaGooglePlay,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function hadleContact(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };

    try {
      await api.post('home', data);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar a mensagem tente novamente!');
    }
  }

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
                <img src={saleBadgeImg} alt="sale" className="saleImg" />
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

      <section className="contact">
        <div className="center">
          <h2>Get int touch</h2>
          <div className="contact-info">
            <form onSubmit={hadleContact}>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Enter your message" 
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
              <button className="btn btn-plans" type="submit">Send</button>
            </form>
            <div className="address">
              <h3>Address</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate esse dicta sint sequi laborum iusto distinctio aliquid maiores tempore odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio id culpa a ex at similique necessitatibus animi, recusandae natus molestiae corrupti el!</p>
              <ul>
                <li><MdPhoneIphone size={20} color={"#56bbd5"} /> +1 555 555 555</li>
                <li><FaMapMarkerAlt size={20} color={"#56bbd5"} /> 272 Private 7530 Rd, Call, TX</li>
                <li><IoIosSend size={23} color={"#56bbd5"} /> info@appercompany.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="center">
          <div className="footer-info">
            <img src={logoImg} alt="Logo" />
            <ul>
              <li><FaFacebookSquare size={22} color={"#BBBABA"} /></li>
              <li><FaTwitter size={22} color={"#BBBABA"} /></li>
              <li><FaYoutube size={22} color={"#BBBABA"} /></li>
              <li><FaInstagram size={22} color={"#BBBABA"} /></li>
              <li><FaLinkedin size={22} color={"#BBBABA"} /></li>
            </ul>
            <p>Copyright 2020</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
// 1:16


