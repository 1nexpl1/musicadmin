import React, { useEffect, useState } from 'react';
import { Button, Container } from "react-bootstrap"; 
import { fetchSong } from "./http/songAPI";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateSong from './components/modals/CreateSong';
import QrGenegate from './components/modals/QrGenegate';


function App() {

  const [createSongVisible, setCreateSongVisible] = useState(false)
  const [createQrVisible, setCreateQrVisible] = useState(false)
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetchSong().then(data => setSongs(data.rows))
}, [])
  return (
    <div className='adminWrapper'>
        <Container className="d-flex flex-column">
        <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setCreateSongVisible(true)}
                >
                    Добавить трек
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setCreateQrVisible(true)}
                >
                    Сгенерировать QR
                </Button>


                
                <CreateSong show={createSongVisible} onHide={() => setCreateSongVisible(false)}/>
                <QrGenegate show={createQrVisible} onHide={()=> setCreateQrVisible(false)} songs = {songs}/>
        </Container>
    </div>
  );
}

export default App;
