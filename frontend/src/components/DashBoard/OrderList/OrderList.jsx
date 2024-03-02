import React, { useEffect } from 'react'
import {
    Table,
    Container,
    Button
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { listOrders } from './../../../actions/orderAction'
import axios from 'axios';

const OrderListScreen = ({ history }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const updateField = async (id, field) => {
        // alert(id);
        // alert(field);
        const val = {};
        val[field]=true;
        alert(val);
        const config = {
            headers: {
                'Content-type': 'application/json'
            },
        }

        const data  = await axios.post(
            `/api/orders/${id}`,
            
            {field:field},
            config
        );
        console.log(data);
    }
    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <div style={{ marginTop: '10px' }}>
            <Container>
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
                            <Table style={{ marginBottom: '223px' }} striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>USER</td>
                                        <td>DATE</td>
                                        <td>TOTAL PRICE</td>
                                        <td>PAID</td>
                                        <td>DELIVERED</td>
                                        <td>MORE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => (
                                            <tr key={order._id}>
                                                <td>{order._id}</td>
                                                <td>{order.user && order.user.name}</td>
                                                <td>{order.createdAt.substring(0, 10)}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>
                                                    {order.isPaid ? (
                                                        // order.paidAt.substring(0, 10)
                                                        <i className='fas fa-check' style={{ color: 'green' }}></i>
                                                        
                                                    ) : (
                                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                        )
                                                    }
                                                </td>
                                                <td>
                                                    {order.isDelivered ? (
                                                        // order.paidAt.substring(0, 10)
                                                        <i className='fas fa-check' style={{ color: 'green' }}></i>
                                                        ) : (
                                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                        )}
                                                </td>
                                                <td>
                                                    <LinkContainer to={`/order/${order._id}/edit`}>
                                                        <Button varinat='light' className='btn-sm'>
                                                            Details
                                                        </Button>
                                                    </LinkContainer>
                                                    <Button varinat='light' className='btn-sm ml-1'  onClick={() => updateField(order._id,"isPaid")}>
                                                             Paid
                                                        </Button>
                                                    <Button varinat='light' className='btn-sm ml-1'  onClick={() => updateField(order._id,"isDelivered")}>
                                                             Delivered
                                                        </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        )
                }
            </Container>
        </div>
    )
}

export default OrderListScreen
