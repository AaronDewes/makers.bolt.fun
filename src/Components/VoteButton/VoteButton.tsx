import { MdLocalFireDepartment } from 'react-icons/md'
import Button from 'src/Components/Button/Button'
import { useAppSelector, usePressHolder } from 'src/utils/hooks'
import { ComponentProps, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { random, randomItem, numberFormatter } from 'src/utils/helperFunctions'
import { useDebouncedCallback, useThrottledCallback } from '@react-hookz/web'



interface Particle {
    id: string,
    offsetX: number,
    offsetY: number,
    color: string
    animation: 'fly-spark-1' | 'fly-spark-2',
    animationSpeed: 1 | 2 | 3,
    scale: number
}

type Props = {
    votes: number,
    onVote?: (amount: number, config: Partial<{ onSetteled: () => void }>) => void,
    fillType?: 'leftRight' | 'upDown' | "background" | 'radial',
    direction?: 'horizontal' | 'vertical'
    disableCounter?: boolean
    disableShake?: boolean
    dense?: boolean
    resetCounterOnRelease?: boolean
} & Omit<ComponentProps<typeof Button>, 'children'>

export default function VoteButton({
    votes,
    onVote = () => { },
    fillType = 'leftRight',
    direction = 'horizontal',
    disableCounter = false,
    disableShake = false,
    dense = false,
    resetCounterOnRelease: resetCounterOnReleaseProp = false,
    ...props }: Props) {
    const [voteCnt, setVoteCnt] = useState(0)
    const voteCntRef = useRef(0);
    const btnContainerRef = useRef<HTMLDivElement>(null!!)
    const [btnShakeClass, setBtnShakeClass] = useState('')
    const [sparks, setSparks] = useState<Particle[]>([]);
    const [wasActive, setWasActive] = useState(false);
    const [incrementsCount, setIncrementsCount] = useState(0);
    const totalIncrementsCountRef = useRef(0)
    const currentIncrementsCountRef = useRef(0);
    const [increments, setIncrements] = useState<Array<{ id: string, value: number }>>([])

    const isMobileScreen = useAppSelector(s => s.ui.isMobileScreen);


    const resetCounterOnRelease = resetCounterOnReleaseProp;

    const doVote = useDebouncedCallback(() => {
        const amount = voteCntRef.current;
        onVote(amount, { onSetteled: () => setVoteCnt(v => v - amount) });
        voteCntRef.current = 0;

    }, [], 2000)

    const clickIncrement = () => {


        if (!disableShake)
            setBtnShakeClass(s => s === styles.clicked_2 ? styles.clicked_1 : styles.clicked_2)


        const _incStep = Math.ceil((currentIncrementsCountRef.current + 1) / 5);

        currentIncrementsCountRef.current += 1;
        totalIncrementsCountRef.current += 1;

        setIncrementsCount(v => totalIncrementsCountRef.current);

        if (!disableCounter)
            setIncrements(v => {
                const genId = Math.random().toString();
                setTimeout(() => {
                    setIncrements(v => v.filter(e => e.id !== genId))
                }, 500)
                return [...v, { id: genId, value: _incStep }]
            });

        setVoteCnt(s => {
            const newValue = s + _incStep;
            voteCntRef.current = newValue;
            return newValue;
        })

        if (totalIncrementsCountRef.current && totalIncrementsCountRef.current % 5 === 0) {
            const newSparks = Array(5).fill(0).map((_, idx) => ({
                id: (Math.random() + 1).toString(),
                offsetX: random(-10, 99),
                offsetY: random(40, 90),
                animation: randomItem(styles.fly_spark_1, styles.fly_spark_1),
                animationSpeed: randomItem(1, 1.5, 2),
                color: `hsl(0deg 86% ${random(50, 63)}%)`,
                scale: random(1, 1.5)
            }))

            // if on mobile screen, reduce number of sparks particles to 60%
            setSparks(oldSparks => [...oldSparks, ...newSparks])
            setTimeout(() => {
                setSparks(s => {
                    return s.filter(spark => !newSparks.some(newSpark => newSpark.id === spark.id))
                })

            }, 2 * 1000)
        }

        doVote();
    }

    const onHold = useThrottledCallback(clickIncrement, [], 150)

    const { onPressDown, onPressUp, isHolding } = usePressHolder(onHold, 100);

    const handlePressDown = () => {
        setWasActive(true);
        onPressDown();
    }

    const handlePressUp = (event?: any) => {
        if (!wasActive) return;
        setWasActive(false);

        if (event?.preventDefault) event.preventDefault();

        onPressUp();
        onHold();
        if (resetCounterOnRelease)
            if (!isHolding) {
                currentIncrementsCountRef.current = 0;
            } else
                setTimeout(() =>
                    currentIncrementsCountRef.current = 0, 150)
    }

    return (
        <button
            onMouseDown={handlePressDown}
            onMouseUp={handlePressUp}
            onMouseLeave={handlePressUp}
            onTouchStart={handlePressDown}
            onTouchEnd={handlePressUp}

            className={`${styles.vote_button} relative  noselect border-0`}
            style={{
                "--increments": incrementsCount,
                "--offset": `${(incrementsCount ? (incrementsCount % 5 === 0 ? 5 : incrementsCount % 5) : 0) * 20}%`,
                "--bg-color": fillType !== 'background' ?
                    'hsl(0deg 86% max(calc((93 - var(--increments) / 3) * 1%), 68%))'
                    :
                    "hsl(0deg 86% max(calc((100 - var(--increments) / 2) * 1%), 68%))",
            } as any}
            {...props}
        >

            <div
                ref={btnContainerRef}
                className={`
                ${styles.btn_content} 
                relative rounded-lg text-gray-600 ${!incrementsCount && 'bg-gray-50 hover:bg-gray-100'} 
                 ${direction === 'vertical' ?
                        dense ? "py-4 px-12" : "py-8 px-20"
                        :
                        dense ? "py-4 px-8" : "p-8"}
                ${incrementsCount && "outline"} active:outline outline-1 outline-red-500 
                ${btnShakeClass} 
                `}

            >
                <div
                    className={`
                ${styles.color_overlay}
                ${fillType === 'upDown' && styles.color_overlay__upDown}
                ${fillType === 'leftRight' && styles.color_overlay__leftRight}
                ${fillType === 'background' && styles.color_overlay__background}
                ${fillType === 'radial' && styles.color_overlay__radial}
                `}
                >
                    <div></div>
                </div>
                <div className={`
                relative z-10 
                ${incrementsCount ? "text-red-800" : "text-gray-600"}
                flex justify-center items-center gap-8 text-left ${direction === 'vertical' && "flex-col !text-center"}
                `}>
                    <MdLocalFireDepartment
                        className={`text-body2 ${incrementsCount ? "text-red-600" : "text-red-600"}`}

                    /><span className="align-middle w-[4ch]"> {numberFormatter(votes + voteCnt)}</span>
                </div>
            </div>
            {increments.map(increment => <span
                key={increment.id}
                className={styles.vote_counter}
            >+{increment.value}</span>)}

            <div className="relative z-50">

                {sparks.map(spark =>
                    <div
                        key={spark.id}
                        className={styles.spark}
                        style={{
                            "--offsetX": spark.offsetX,
                            "--offsetY": spark.offsetY,
                            "--animationSpeed": spark.animationSpeed,
                            "--scale": spark.scale,
                            "animationName": spark.animation,
                            "color": spark.color
                        } as any}
                    ><MdLocalFireDepartment className='' /></div>)
                }
            </div>
            <div
                className={styles.spark}

            ><MdLocalFireDepartment className='' /></div>
        </button>

    )
}
