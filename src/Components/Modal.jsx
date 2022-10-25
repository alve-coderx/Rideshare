import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiOutlineCheck, } from 'react-icons/ai';
import { useState } from 'react';
import { useRef } from 'react';
import { GrKey } from 'react-icons/gr';

const Modal = ({ open, setOpen }) => {
    const [show, setShow] = useState(1);
    const cancelButtonRef = useRef(null);

    const clickCheckbox = (index) => {
        setShow((prev) => {
            return prev === index ? null : index;
        });

    };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative mb-[200px] transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-5">
                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-[18px] font-[600] mt-4">
                                                Dein Fahrzeug wurde hinzugefügt
                                            </Dialog.Title>
                                            <div className='flex justify-between mt-4'>
                                                {
                                                    [1, 2, 3, 4, 5].map((index) => (<p key={index} onClick={() => clickCheckbox(index)} className={show === index ? 'bg-[#7D7AFF] relative p-3 my-1 rounded-lg' : 'bg-[#E6E6FF] relative p-3 my-1 rounded-lg'} ><GrKey className={show === index ? 'text-white' : 'text-black'} /> <span className='absolute bg-[#D9F7BE] rounded-lg p-1 text-[10px] text-[#52C41A] left-3'><AiOutlineCheck className={show === index ? '' : 'hidden'} /></span></p>))
                                                }
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-[12px] font-[400] text-[#636B75]">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae integer id egestas nec convallis et non.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center mt-4">
                                    <button onClick={() => setOpen(false)} type='submit' className="bg-[#1E2024] text-[15px] font-[500] text-white p-4 rounded-lg w-full">
                                        Weitere Fahrzeuge hinzufügen
                                    </button>
                                    <p className='mt-4 text-[13px] font-[400] text-[#636B75]'>Weiter zur Buchung</p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal