import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createSong, fetchSong } from '../../http/songAPI'

const CreateSong = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [link, setLink] = useState('')
    const [file, setFile] = useState(null)
    const [file1, setFile1] = useState(null)

    
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const selectFile1 = e => {
        setFile1(e.target.files[0])
    }
    

    const addSong = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('author', author)
        formData.append('link', link)
        formData.append('img', file)
        formData.append('file', file1)
        console.log(createSong(formData));
        createSong(formData).then(data => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Пост
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите Название"
                    />
                    <Form.Control
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        className="mt-3"
                        placeholder="Введите автора"
                    />
                    <Form.Control
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ссылку"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile1}
                    />                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addSong}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateSong