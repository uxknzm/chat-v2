import React from 'react';
import Login from './components/Login/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './Services/Firebase'
import Loading from './components/Loading/Loading';
import Sidebar from './components/Sidebar/Sidebar';
import * as C from './Styles/app'
import Chat from './components/Chat/Chat';


function App() {
  const [user, loading] = useAuthState(auth as any)
  const [userChat, setUserChat] = React.useState(null)

  React.useEffect (() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      })
    }
  }, [user])
  if (loading) return <Loading />
  if (!user) return <Login />
  return (
    <C.Container>
      <Sidebar userChat={userChat} setUserChat={setUserChat} />
      <Chat userChat={userChat} />
    </C.Container>
  );
}

export default App;
