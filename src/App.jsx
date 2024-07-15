import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'
import { Post } from './components/Post'

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgorVini25.png',
      name: 'Igor Vinicius',
      role: 'Web Developer'
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz"},
      { type: "paragraph", content: "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},
      { type: "", content: ""},
    ],
    publishedAt: new Date('2024-07-15 12:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web Front-end Developer'
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz"},
      { type: "paragraph", content: "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},
      { type: "", content: ""},
    ],
    publishedAt: new Date('2024-07-15 18:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
