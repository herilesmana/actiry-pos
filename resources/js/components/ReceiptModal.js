import React, {useState} from 'react'
import { priceFormat } from '../utils/helper';
import web from '../utils/web'

const ReceiptModal = (props) => {

    const {showReceiptModal, setShowReceiptModal, receipt, cartItems, getTotalPrice, cash, change, clearAll} = props;
    const [processing, setProcessing] = useState(false)

    const printAndProceed = async () => {
        setProcessing(true)
        // Store to database
        await web.post('/invoice/store', {
            receipt_number: receipt.receiptNo,
            total_amount: getTotalPrice(),
            cash: cash,
            change: change,
            products: cartItems
        })
        .then((response) => {
            setProcessing(false)
            console.log(response)
            if(response.status === 200 && response.data.success === 1) {
                const titleBefore = document.title
                document.title = receipt.receiptNo
                window.print()
                clearAll()
                document.title = titleBefore
            }else{
                alert('Error. Please try again');
            }
        })
        .catch((error) => {
            setProcessing(false)
            alert('Error. Please try again');
        })
    }

    const Receipt = () => {
        return (
            <div className="text-left w-full text-sm p-6 overflow-auto">
                <div className="text-center">
                    <img src="img/logo.png" className="w-10 m-auto filter grayscale" />
                    <h2 className="text-xl font-semibold">ACTIRY POS</h2>
                    <p>CABANG SUNAGARA</p>
                </div>
                <div className="flex mt-4 text-xs">
                    <div className="flex-grow">No : <span>{ receipt.receiptNo}</span></div>
                    <div></div>
                </div>
                <hr className="my-2" />
                <div>
                    <table className="w-full text-xs">
                    <thead>
                        <tr>
                        <th className="py-1 w-1/12 text-center">#</th>
                        <th className="py-1 text-left">Item</th>
                        <th className="py-1 w-2/12 text-center">Qty</th>
                        <th className="py-1 w-3/12 text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cartItems.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 text-center">{ index+1 }</td>
                                <td className="py-2 text-left">
                                <span>{ item.name }</span>
                                <br/>
                                <small>{ priceFormat(item.price) }</small>
                                </td>
                                <td className="py-2 text-center">{ item.qty }</td>
                                <td className="py-2 text-right">{ priceFormat(item.qty*item.price) }</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <hr className="my-2" />
                <div>
                    <div className="flex font-semibold">
                        <span className="flex-grow">TOTAL</span>
                        <span>{ priceFormat(getTotalPrice()) }</span>
                    </div>
                    <div className="flex text-xs font-semibold">
                        <span className="flex-grow">PAY AMOUNT</span>
                        <span>{ priceFormat(cash) }</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex text-xs font-semibold">
                        <span className="flex-grow">CHANGE</span>
                        <span>{ priceFormat(change) }</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { showReceiptModal &&
            <>
                <div className="hide-print fixed w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24">
                    <div onClick={() => setShowReceiptModal(false)} className="fixed glass w-full h-screen left-0 top-0 z-0 opacity-100"></div>
                    <div className="w-96 rounded-3xl bg-white shadow-xl overflow-hidden z-10 opacity-100 scale-100">
                        <Receipt />
                        <div className="p-4 w-full">
                            <button disabled={processing} onClick={() => printAndProceed()} className="bg-cyan-500 hover:bg-cyan-400 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none">
                                { processing ? 'Processing..' : 'PROCEED'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="print-area">
                    <Receipt />
                </div>
            </>
            }
        </>
    )
}

export default ReceiptModal
