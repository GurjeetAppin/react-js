import React, { useState } from 'react'

/* import 'bootstrap/dist/css/bootstrap.min.css';  */
import $ from 'jquery';
import Popper from 'popper.js';
import { Button, Col, Container, FloatingLabel, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { Col, Container, Row } from 'react-bootstrap';*/

const Enter_data = () => {
    /* Add More functionality */
    const [fileAttachment, setfileAttachment] = useState([{ attachments: '', removeBtn: '' }]);

    const handlefilechange = (e, index) => {
        const { name, value } = e.target;
        const list = [...fileAttachment];
        list[index][name] = value;
        setfileAttachment(list);
    }

    const addMore = () => {
        setfileAttachment([...fileAttachment, { attachments: '', removeBtn: '' }]);
    }

    const removeAddMore = (index) => {
        const list = [...fileAttachment];
        list.splice(index, 1);
        setfileAttachment(list);
    }

    return (
        <div>
            <Container>
                <Row>
                    <h3 style={{ backgroundColor: "#252d2f", color: "#fff" }}>Sale Order</h3>
                    <Form>
                        <FormGroup className="mb-3" as={Row} >
                            <FormLabel column sm={2} className="text-start">Voucher</FormLabel>
                            <Col sm={4}>
                                <FormControl type='text' placeholder='Vouchar' />
                            </Col>
                            <FormLabel column sm={2} className="text-start">Company Unit</FormLabel>
                            <Col sm={4}>
                                <FormControl type='text' placeholder='Company Unit' />
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-3" as={Row} >
                            <FormLabel column sm={2} className="text-start">Order Date</FormLabel>
                            <Col sm={4}>
                                <FormControl type='date' placeholder='Order Date' />
                            </Col>
                            <FormLabel column sm={2} className="text-start">PO Number</FormLabel>
                            <Col sm={4}>
                                <FormControl type='text' placeholder='PO Number' />
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-3" as={Row}>
                            <FormLabel column sm={2} className="text-start">Sales Executive Name</FormLabel>
                            <Col sm={4}>
                                <FormSelect>
                                    <option>Amit</option>
                                    <option>John</option>
                                    <option>Smith</option>
                                </FormSelect>
                            </Col>
                            <FormLabel column sm={2} className="text-start">PO Date</FormLabel>
                            <Col sm={4}>
                                <FormControl type='date' placeholder='PO Date' />
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-3" as={Row}>
                            <FormLabel column sm={2} className="text-start">Customer Name</FormLabel>
                            <Col sm={4}>
                                <FormSelect>
                                    <option>Samsung</option>
                                    <option>LG</option>
                                    <option>Philips</option>
                                </FormSelect>
                            </Col>
                            <FormLabel column sm={2} className="text-start">Breakage Allowance</FormLabel>
                            <Col sm={4}>
                                <FormSelect >
                                    <option>Breakage Allowance</option>
                                    <option>1</option>
                                    <option>2</option>
                                </FormSelect>
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-3" as={Row}>
                            <FormLabel column sm={2} className="text-start">Loading Scope</FormLabel>
                            <Col sm={4}>
                                <FormSelect>
                                    <option>Select Option</option>
                                    <option>Include</option>
                                    <option>Exclude</option>
                                </FormSelect>
                            </Col>
                            <FormLabel column sm={2} className="text-start">Payments Terms</FormLabel>
                            <Col sm={4}>
                                <FormSelect>
                                    <option>Payments Terms</option>
                                    <option>10 Days</option>
                                    <option>15 Days</option>
                                    <option>20 Days</option>
                                </FormSelect>
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-3" as={Row}>
                            <Col sm={6}></Col>
                            <FormLabel column sm={2} className="text-start">Attachments</FormLabel>
                            <Col sm={3}>
                                {
                                    fileAttachment.map((x, i) => {
                                        return (
                                            <>

                                                <FormControl type='file' name='attachments' onClick={e => handlefilechange(e, i)} />

                                            </>
                                        );
                                    }
                                    )
                                }
                            </Col>
                            <Col sm={1}>
                                {
                                    fileAttachment.map((x, i) => {
                                        return (
                                            <>
                                                {
                                                    fileAttachment.length !== 1 &&
                                                    <Button variant='danger' name='removeBtn' onClick={() => removeAddMore(i)}>-</Button>
                                                }
                                                {
                                                    fileAttachment.length - 1 === i &&
                                                    <Button variant='primary' onClick={addMore} >+</Button>
                                                }

                                            </>
                                        );
                                    }
                                    )
                                }

                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-3" as={Row}>
                            <Col sm={6}></Col>
                            <FormLabel column sm={2} className="text-start">Due Days</FormLabel>
                            <Col sm={4}>
                                <FormSelect>
                                    <option>Due Days</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </FormSelect>
                            </Col>
                        </FormGroup>
                        <hr />
                        <h4>Transaction Type</h4>
                        <FormGroup className="mb-3" as={Row}>
                            <Col sm={1}>
                            <FormCheck type='radio' name="with_pdc" value={'with_pdc'} />
                            </Col>
                            <FormLabel column sm={2}>With PDC</FormLabel>
                            <Col sm={1}>
                                <FormCheck type='radio' name="without_pdc" value={'without_pdc'} />
                            </Col>
                            <FormLabel column sm={2}>Without PDC</FormLabel>
                        </FormGroup>
                        <hr />
                        <Row>
                            <Col sm={2}>
                                <FormLabel>Material Type</FormLabel>
                            </Col>
                            <Col sm={2}>
                                <FormLabel>Material Name</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel>Quantity</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel style={{ fontSize: "15px" }}>No of Pieces</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel>UOM</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel>Price</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel style={{ fontSize: "12px" }}>Last Billed Price</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel>GST</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel>Amount</FormLabel>
                            </Col>
                            <Col sm={1}>
                                <FormLabel style={{ fontSize: "15px" }}>GST Amount</FormLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <FormSelect>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </FormSelect>
                            </Col>
                            <Col sm={2}>
                                <FormSelect>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </FormSelect>
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                            <Col sm={1}>
                                <FormControl type='text' />
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <hr />
                <FormGroup className="mb-3" as={Row}>
                    <FormLabel column sm={1} className='text-start'>Freight</FormLabel>
                    <Col sm={2}>
                        <FormCheck type='radio' label="FOR price:" />
                    </Col>
                    <Col sm={2}>
                        <FormCheck type='radio' label="To be paid by customer:" />
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <FormLabel column sm={2} className="text-start">Payment Date</FormLabel>
                    <Col sm={4}>
                        <FormControl type='date' />
                    </Col>
                    <FormLabel column sm={2} className='text-start'>Documents to submit with dispatch </FormLabel>

                    <Col sm={1}><FormCheck label="Orignal Invoice" type='checkbox' /><FormCheck label="Duplicate Invoice" type='checkbox' /></Col>
                    <Col sm={1}><FormCheck label="Packing List" type='checkbox' /><FormCheck label="Insurance" type='checkbox' /></Col>
                    <Col sm={1}><FormCheck label="Test Certificate" type='checkbox' /><FormCheck label="Test Report" type='checkbox' /></Col>
                    <Col sm={1}><FormCheck label="Way Bill" type='checkbox' /><FormCheck label="GR Copy" type='checkbox' /><FormCheck label="Customer's PO Copy" type='checkbox' /></Col>

                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <FormLabel column sm={2} className="text-start">Payment Date</FormLabel>
                    <Col sm={4}>
                        <FormControl type='date' />
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <FormLabel column sm={2} className="text-start">Advance Received</FormLabel>
                    <Col sm={4}>
                        <FormControl type='text' />
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <FormLabel column sm={2} className="text-start">Mode of Payment</FormLabel>
                    <Col sm={4}>
                        <Row>
                            <Col sm={3}><FormCheck type='radio' label="Cash:" /></Col>
                            <Col sm={3}> <FormCheck type='radio' label="Cheque:" /></Col>
                            <Col sm={3}><FormCheck type='radio' label="NEFT/RTGS/IMPS:" /></Col>
                        </Row>

                    </Col>
                    <FormLabel column sm={2} className='text-start'>Special Notes</FormLabel>
                    <Col sm={4}>
                        <FormControl as="textarea" style={{ height: "100px" }}></FormControl>
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <FormLabel column sm={2} className='text-start'>Payment Remarks</FormLabel>
                    <Col sm={4}>
                        <FormControl type='text' />
                    </Col>
                </FormGroup>
            </Container>
        </div>
    )
}

export default Enter_data