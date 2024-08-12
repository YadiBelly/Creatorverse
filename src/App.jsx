import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { useRoutes, useLocation } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import { supabase } from './client'

function App() {
  const [creators, setCreators] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchCreators = async () => {
      const res = await supabase.from('creators').select('*')
      setCreators(res.data)
    }
    fetchCreators()
  }, [location.pathname])

  const element = useRoutes([
    {
      path: '/',
      element: <ShowCreators creators={creators}/>
    },
    {
      path: '/new',
      element: <AddCreator />
    },
    {
      path: '/:creatorId',
      element: <ViewCreator />
    },
    {
      path: '/edit/:creatorId',
      element: <EditCreator/>
    }
  ])
  console.log(creators)
  return (
    <>
      <Header />
      <main>{element}</main>
    </>
  );
}

export default App
