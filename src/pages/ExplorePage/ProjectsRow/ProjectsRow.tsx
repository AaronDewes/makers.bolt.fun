import { ReactElement, useCallback, useRef, useState } from "react";
import { ProjectCard } from "../../../utils/interfaces";
import Carousel from 'react-multi-carousel';
import { MdDoubleArrow, } from 'react-icons/md';
import { useAppDispatch } from "../../../utils/hooks";
import { openModal } from "../../../redux/features/modals.slice";
import ProjectCardMini from "../ProjectCardMini/ProjectCardMini";
import { useResizeListener } from 'src/utils/hooks'

const responsive = {
    all: {
        breakpoint: { max: 5000, min: 0 },
        items: (((window.innerWidth - 64) / (296 + 48))),
    }
}

const calcNumItems = () => {
    const items = (((window.innerWidth - 32 - 296) / (296 + 20)));
    return items;
}

interface Props { title: string | ReactElement, categoryId: string, projects: ProjectCard[] }

export default function ProjectsRow({ title, categoryId, projects }: Props) {

    const [carouselItmsCnt, setCarouselItmsCnt] = useState(calcNumItems);
    const dispatch = useAppDispatch()

    responsive.all.items = carouselItmsCnt

    let drag = useRef(false);

    document.addEventListener('mousedown', () => drag.current = false);
    document.addEventListener('mousemove', () => drag.current = true);

    const handleClick = (projectId: string) => {
        if (!drag.current)
            dispatch(openModal({ Modal: "ProjectCard", props: { projectId } }))
    }

    useResizeListener(() => {
        setCarouselItmsCnt(calcNumItems());
    }, [setCarouselItmsCnt])


    return (
        <div className='mb-48'>
            <h3 className="font-bolder text-body3 mb-24 px-32">{title}
                <span>
                    <MdDoubleArrow className='text-gray-200 ml-8 hover:cursor-pointer align-bottom transform scale-y-110 scale-x-125 origin-left' onClick={() => {
                        console.log(categoryId);
                    }} />
                </span>
            </h3>
            <Carousel
                containerClass='pl-32 pr-[-32px]'
                showDots={false}
                arrows={false}
                responsive={responsive}
                centerMode
                itemClass='pb-[1px]'
            >
                {projects.map((project, idx) =>
                    <ProjectCardMini key={idx} project={project} onClick={handleClick} />
                )}
            </Carousel>

        </div>
    )
}