import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import githubicon from '../assets/img/github.svg'
import emailIcon from '../assets/img/envelope.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/diana-vu-3373a0228/'>
                <img src={navIcon1} alt='Icon' />
              </a>
              <a href='https://github.com/DianasJourney?tab=repositories'>
                <img src={githubicon} alt='Icon' />
              </a>
              <a href='#'>
                <img src={emailIcon} alt='Icon' />
              </a>
            </div>
            <p>Made By: Diana Vu</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
