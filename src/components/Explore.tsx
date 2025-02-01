import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    };

    const handleMouseLeave = () => {
        const button = buttonRef.current;
        if (button) button.style.transform = 'translate(0, 0)';
    };

    return (
        <div className="flex items-center justify-center ">
            <a href="https://drive.google.com/file/d/1FLfXlrqGrTcx9d98hxtDFuWLv-WgVgzA/view?usp=sharing" target='_blank'>
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#e29ef3] to-[#752a79]">
                <button
                    ref={buttonRef}
                    className="relative px-5 py-2 text-md  uppercase text-white transition-transform duration-200 ease-out bg-[#5F2A44] rounded-2xl shadow-lg   "
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    Brochure
                </button>
                </div>
            </a>


        </div>
    );
};

export default Explore;
