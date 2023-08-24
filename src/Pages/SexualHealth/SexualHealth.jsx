import React from 'react'
import Hero from '../../Components/Hero'
import Questions from '../../Components/Questions'
import QuestionsSmall from '../../Components/QuestionsSmall'
import HowBooking from '../../Components/HowBooking'
import HowAppointment from '../../Components/HowAppointment'
import FreqAskQuestion from '../../Components/FreqAskQuestion'
import Footer from '../../Components/Footer'

const SexualHealth = () => {
    return (
        <>
            <div>
                <Hero
                    heading="Sexual Health and STIs"
                />

                <Questions
                    question1="What is Sexual Health "
                    des1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus"

                    question2="What are STIs (Sexually transmitted diseases)"
                    des2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."

                    question3="What forms of STI are there?"
                    des3="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                />

                <QuestionsSmall
                    question1="What online lab test referrals are available at MediHub?"
                    des1={<><ol className='list-decimal ml-4'>
                        <li>Blood Tests</li>
                        <li>Ultrasounds</li>
                        <li>X-Rays</li>
                        <li>Sexual Health</li>
                        <li>Specialized Tests as recommended by your doctor</li></ol></>}

                    question2="How do I get a lab test referral online?"
                    des2="If you feel you need a lab test for any reason, book an appointment with one of our online doctors to discuss your symptoms. If the doctor agrees that you need the test, they will share a requisition form with you. "

                    question3="What will my online lab test appointment be like?"
                    des3="Appointments usually include a discussion of your medical history. The physician will talk with you about your symptoms and reason for the appointment as part of their assessment of whether a lab test is required."

                    question4="How long do the lab test results usually take?"
                    des4="The medical staff at the lab should share the specific timings with you."
                />

                <HowBooking />

                <HowAppointment />

                <FreqAskQuestion />

                <Footer />

            </div>
        </>
    )
}

export default SexualHealth
