import { useState } from "react"
const faqsList = [
    {
        q: "What are some random questions to ask?",
        a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
    },
    {
        q: "Do you include common questions?",
        a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
    },
    {
        q: "Can I use this for 21 questions?",
        a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
    },
    {
        q: "Are these questions for girls or for boys?",
        a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
    },
    {
        q: "What do you wish you had more talent doing?",
        a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    }
]
const Faq = () => {

    const [answerH, setAnswerH] = useState('0px')
    const [opened, setOpened] = useState(0)
    const handleOpenAnswer = (index) => {
        setOpened(opened === index ? NaN : index)
        // setState(!state)
        console.log(index)
        setAnswerH(`60px`)
    }

    return (
        <section className="my-20">
            <h3 className="text-3xl font-semibold text-black/80 mb-8 text-center">Some Frequently Asked Questions</h3>
            <div className="max-w-[700px] mx-auto">
                {faqsList.map((item, i) => {
                    return <div
                        className="space-y-3 mt-5 overflow-hidden border-b"
                        key={i}
                        onClick={() => handleOpenAnswer(i)}
                    >
                        <h4 className="cursor-pointer pb-2 flex items-center justify-between text-lg text-gray-700 font-medium">
                            {item.q}
                            {
                                opened === i ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                )
                            }
                        </h4>
                        <div
                            className="duration-300 p-0"
                            style={opened === i ? { height: answerH } : { height: '0px' }}>
                            <div>
                                <p className="text-gray-500">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Faq