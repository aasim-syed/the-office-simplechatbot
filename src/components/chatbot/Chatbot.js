import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'arial, sans-serif',
  headerBgColor: '#0f4d',
  headerFontColor: '#000',
  headerFontSize: '15px',
  botBubbleColor: '#0f7d',
  botFontColor: '#000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '1500px',
  height: '500px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: '⚡🚀Famous office quotes ',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name? ',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} , Hope yall doin well ! Ready to hear famous office quotes?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Dwight schrute', trigger: '3' },
                { value: 2, label: 'Micheal Scott', trigger: '4' },
                { value: 3, label: ' Jim halpert', trigger: '5' },
                { value: 4, label: 'Stanely', trigger: '6' },
                { value: 5, label: 'Creed', trigger: '7' },
                { value: 6, label: 'Oscar Martinez', trigger: '8' },
                { value: 7, label: 'Pamela Morgan', trigger: '9' },
                { value: 8, label: 'Kelly kapoor', trigger: '10' },
                { value: 9, label: 'Angela Noelle Schrute', trigger: '11' },
                { value: 10, label: 'Kevin Malone', trigger: '12' },
                { value: 11, label: 'Andrew Baines Bernard', trigger: '13' },
                { value: 12, label: 'Toby Flenderson ', trigger: '15' },
              ],
            },
            {
              id: '3',
              message:'Sometimes Ill start a sentence and I dont even know where its going. I just hope I find it along the way.\n Im not superstitious, but I am a little stitious.',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:'R is among the most menacing of sounds. Thats why they call it murder and not mukduk.',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:'https://www.cbr.com/jim-halpert-best-the-office-quotes/',
              trigger: 'qtype',
            },
            {
              id: '6',
              message: 'https://screenrant.com/the-office-stanley-quotes/',
              trigger: 'q-submit',
            },
            {
              id: '7',
              message: 'https://screenrant.com/the-office-best-creed-bratton-quotes/',
              trigger: 'q-submit',
            },
            {
              id: '8',
              message: 'https://screenrant.com/the-office-funniest-most-sarcastic-oscar-quotes/',
              trigger: 'q-submit',
            },
            {
              id: '9',
              message: 'https://screenrant.com/office-best-pam-beesly-quotes/',
              trigger: 'q-submit',
            },
            {
              id: '10',
              message: 'https://everydaypower.com/kelly-kapoor-quotes/',
              trigger: 'q-submit',
            },
            {
              id: '11',
              message: 'https://www.ranker.com/list/best-andy-bernard-quotes/movie-and-tv-quotes',
              trigger: 'q-submit',
            },
            {
              id: '12',
              message: 'https://screenrant.com/the-office-kevin-malone-best-quotes-ranker/',
              trigger: 'q-submit',
            },
            {
              id: '13',
              message: 'https://www.ranker.com/list/best-andy-bernard-quotes/movie-and-tv-quotes',
              trigger: 'q-submit',
            },
            {
              id: '15',
              message: 'https://parade.com/955427/alexandra-hurtado/the-office-quotes/',
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Any other quotes !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Dwight schrute', trigger: '3' },
                { value: 2, label: 'Micheal Scott', trigger: '4' },
                { value: 3, label: ' Jim halpert', trigger: '5' },
                { value: 4, label: 'Stanely', trigger: '6' },
                { value: 5, label: 'Creed', trigger: '7' },
                { value: 6, label: 'Oscar Martinez', trigger: '8' },
                { value: 7, label: 'Pamela Morgan', trigger: '9' },
                { value: 8, label: 'Kelly kapoor', trigger: '10' },
                { value: 9, label: 'Angela Noelle Schrute', trigger: '11' },
                { value: 10, label: 'Kevin Malone', trigger: '12' },
                { value: 11, label: 'Andrew Baines Bernard', trigger: '13' },
                { value: 12, label: 'Toby Flenderson ', trigger: '15' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i >💬</i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
