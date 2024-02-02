import React from 'react'

const Counter = (props) => {
    return (
        <>

            <div className='space-y'>
                <div className='count'>
                    <div className='counter '>
                        <div className='container w'>
                            <div className='blog'>
                                {
                                    props.counter.map((ele) => {
                                        return (
                                            <div className='box'>
                                                <div className='img'>
                                                    <img src={ele.img} />
                                                </div>
                                                <div className='desc'>
                                                    <h2>{ele.no}</h2>
                                                    <h4>{ele.title}</h4>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counter
