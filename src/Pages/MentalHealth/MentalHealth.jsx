import React from 'react'
import Hero from '../../Components/Hero'
import Questions from '../../Components/Questions'
import QuestionsSmall from '../../Components/QuestionsSmall'
import HowBooking from '../../Components/HowBooking'
import HowAppointment from '../../Components/HowAppointment'
import FreqAskQuestion from '../../Components/FreqAskQuestion'
import Footer from '../../Components/Footer'

const MentalHealth = () => {
    return (
        <>
            <div>
                <Hero
                    heading="Mental Health"
                />

                <Questions
                    question1="What is mental health?"
                    des1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus"

                    question2="What is mental illness?"
                    des2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."

                    question3="What forms of mental illness are there?"
                    des3="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                />

                <QuestionsSmall
                    question1="What conditions can be assessed in an online walk-in appointment?"
                    des1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

                    question2="What services are available at an online walk-in clinic?"
                    des2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

                    question4="What if I need an in-person walk-in appointment?"
                    des4={<>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui Accusamus</p>
                        <ol className='list-disc ml-6 mt-2'>
                            <li>Accusamus</li>
                            <li>Coquitlamn</li>
                            <li>Kerrisdale</li>
                            <li>Richmond</li>
                        </ol></>}
                />

                <HowBooking />

                <HowAppointment />

                <FreqAskQuestion />

                <Footer />

            </div>
        </>
    )
}

export default MentalHealth
