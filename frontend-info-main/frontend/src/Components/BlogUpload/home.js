import React from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './home.css'

function home(props) {
    const demoString = "Description is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demo"
    const next = demoString.slice(0,35)
    return (
        <div className="blog-upload-home">
            {/* <Navbar /> */}
            <table className="border-collapse p-[1vw] w-[90vw] text-center text-[1.1vw] mx-auto my-[4vw]">
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <th className='border-collapse p-[1vw]'>Sr No.</th>
                    <th className='border-collapse p-[1vw]'>Title</th>
                    <th className='border-collapse p-[1vw]'>Description</th>
                    <th className='border-collapse p-[1vw]'>Author</th>
                    <th className='border-collapse p-[1vw]'>Time</th>
                    <th className='border-collapse p-[1vw]'>Action</th>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>{next}...</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read Blog</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
                <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
                    <td className='border-collapse p-[1vw]'>1</td>
                    <td className='border-collapse p-[1vw]'>Title is currently demo</td>
                    <td className='border-collapse p-[1vw]'>Description is also currently demo</td>
                    <td className='border-collapse p-[1vw]'>Harshil</td>
                    <td className='border-collapse p-[1vw]'>3:30 PM IST</td>
                    <td className='border-collapse p-[1vw]'>Read</td>
                </tr>
            </table>
            {/* <Footer /> */}
        </div>
    );
}

export default home;