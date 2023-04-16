import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import style from './style.module.scss';

interface carouselProps {
    children: Array<React.ReactNode>,
    autoSlide?: boolean | false,
    transferTime?: number | 3000,
}
export default function Carousel({ children, autoSlide, transferTime }: carouselProps) {
    const len = children.length;
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => curr > 0 ? curr - 1 : len - 1);
    const next = () => setCurr(curr => curr === len - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, transferTime)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className={style.carousel}>
            <button
                onClick={prev}
                className={style.button + ' left-4'}
            >
                <ChevronLeft size={32} />
            </button>
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {children}
            </div>
            <button
                onClick={next}
                className={style.button + ' right-4'}
            >
                <ChevronRight size={32} />
            </button>
        </div>
    )
}