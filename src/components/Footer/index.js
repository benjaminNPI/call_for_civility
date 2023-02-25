import React from 'react'


const navigation = {
    sponsors: [
        { name: 'Loving Liberty Radio Network', href: 'https://lovingliberty.net/', img: "/img/lovingliberty.jpg" },
        { name: 'Rust Coin and Gift', href: 'https://rustgoldandsilver.com/',img: "/img/rustcoin.png" },
        { name: 'Costitutional Sheriffs & Peace Officers Association', href: 'https://cspoa.org/', img: "/img/cspoa.png" },
        { name: 'Small Business Tech Guys', href: 'https://sbtechguys.com/', img: "/img/sbtg.png" },
    ],
}

const Footer = () => {
    const value = "_blank"
    const style = {
        input1: {
            fontSize: '18px'
        },
        input2: {
            width: "1px"
        }
    }
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:pt-6 lg:px-8 lg:pt-8 border-t">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center  mt-2">Sponsors</h3>
                <div className='w-full  '>
                    <div className="mt-6 text-center sm:flex">
                        {navigation.sponsors.map((item) => (
                            <div key={item.name} className="w-full my-5 border-b sm:border-none">
                                <a href={item.href} target={value.toString()} rel='noreferrer' className="text-sm leading-6 text-gray-600 hover:text-gray-900 ">
                                    {item.name}
                                </a>
                                <img className="w-24 mx-auto mb-5" alt={item.name + "logo"} src={item.img}></img>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full text-center my-5 p-5'>
                    <h3 className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        If you would like to make a contribution to Call for Civility please see the links below:
                    </h3>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center  mt-2">
                        PayPal Donations
                    </h3>
                    <p className="text-sm leading-6 text-gray-600 hover:text-gray-900 mb-5">
                        Click button below to donate (PLEASE NOTE: Paypal does NOT require you to open an account to use their FREE credit card services):
                    </p>
                    <form action="https://www.paypal.com/donate" method="post" target={value}><span style={style.input1}><input type="hidden" name="hosted_button_id" value="VKDJ8Y4KDGG4U" /> <input title="PayPal - The safer, easier way to pay online!" type="image" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal button" /> <span className="image-block" style={style.input2}><img src="https://www.paypal.com/en_US/i/scr/pixel.gif?1636853941384" alt="" width="1" height="1" /></span></span></form>
                </div>
                <div className="border-gray-900/10 pt-8">
                    <p className="text-xs leading-5 text-gray-500 text-center">&copy; 2023. Call for Civility. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer