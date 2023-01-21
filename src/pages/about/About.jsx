import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio expedita tenetur laborum rem explicabo facere reprehenderit sint tempore cumque.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe recusandae libero aperiam animi. Laudantium cumque ipsam in perferendis accusantium! Ad dolorem sunt possimus veniam fugiat quibusdam quia, temporibus hic quod.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto quod placeat! Iure ab incidunt, eum porro laboriosam pariatur earum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, maxime.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias dignissimos voluptatem? Corporis, necessitatibus voluptatem.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto quod placeat! Iure ab incidunt, eum porro laboriosam pariatur earum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, maxime.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias dignissimos voluptatem? Corporis, necessitatibus voluptatem.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image"/>
      </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image"/>
      </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe recusandae libero aperiam animi. Laudantium cumque ipsam in perferendis accusantium! Ad dolorem sunt possimus veniam fugiat quibusdam quia, temporibus hic quod.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto quod placeat! Iure ab incidunt, eum porro laboriosam pariatur earum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, maxime.
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About