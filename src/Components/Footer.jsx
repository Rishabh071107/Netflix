import React from 'react'
import './Footer.css'
import facebook_icon from '../assets/facebook_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import youtube_icon from '../assets/youtube_icon.png'

function Footer() {
  return (
    <footer className='footer'>

      <div className='footer-container'>

        <div className='footer-social'>
          <img src={facebook_icon} alt='facebook'/>
          <img src={twitter_icon} alt='twitter'/>
          <img src={instagram_icon} alt='instagram'/>
          <img src={youtube_icon} alt='youtube'/>
        </div>

        <div className='footer-links'>
          <ul>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
          </ul>

          <ul>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>

          <ul>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Only on Netflix</li>
            <li>Speed Test</li>
          </ul>
        </div>

        <div className='footer-bottom'>
          <p>© 2026 Netflix Clone by Rishabh. All rights reserved.</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer
