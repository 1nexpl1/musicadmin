import React, { useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import QRCode from "react-qr-code";
import './print.css'
const QrGenegate = ({ show, onHide, songs }) => {
    function printContent(el) {
        var printZone = document.getElementById(el).innerHTML;
        var printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,status=0');
        printWindow.document.write('<style>@media print { .no-print { display: none; } }</style>'); // Скрываем элементы, которые не предназначены для печати
        printWindow.document.write(printZone);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }
    const ref = useRef()
    const [selected, setSelected] = useState()
    const [color, setColor] = useState('#000000')
    const [backColor, setBackColor] = useState('#ffffff')


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Генерация QR
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {console.log(songs)}

                <Form>
                    {songs.map((el) =>
                        <Form.Check
                            type='radio'
                            id={`default-radio`}
                            label={`${el.link}`}
                            onClick={() => setSelected(el.link)}
                        />
                    )}
                </Form>
                <div>
                    <input type="color" name="head" value={color} onChange={(e) => setColor(e.target.value)} />
                    <label for="head">Цвет</label>
                </div>

                <div>
                    <input type="color" name="body" value={backColor} onChange={(e) => setBackColor(e.target.value)} />
                    <label for="body">Фон</label>
                </div>
                <div id="printableArea">
                    <QRCode value={'https://flowersproplayer.ru/' + selected} ref={ref} fgColor={color} bgColor={backColor} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => printContent('printableArea')}>Печать</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default QrGenegate