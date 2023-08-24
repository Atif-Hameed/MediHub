import React from 'react'
import Hero from '../../Components/Hero'
import Questions from '../../Components/Questions'
import QuestionsSmall from '../../Components/QuestionsSmall'
import HowBooking from '../../Components/HowBooking'
import HowAppointment from '../../Components/HowAppointment'
import FreqAskQuestion from '../../Components/FreqAskQuestion'
import Footer from '../../Components/Footer'

const SkinCondition = () => {
    return (
        <>
            <div>
                <Hero
                    heading="Skin Conditions"
                />

                <Questions
                    question1="What are digestive problems?"
                    des1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus"
                    
                    question2="How common are digestive problems?"
                    des2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                    
                    question3="Types of digestive problems"
                    des3="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                />

                <QuestionsSmall
                question1 = "Can an online doctor give me a script for a prescription?"
                des1 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

                question2 = "Will my pharmacy accept an online prescription?"
                des2 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

                question3 = "What prescriptions can an online doctor fill?"
                des3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru."

                question4 = "What will my online prescription appointment be like?"
                des4 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
                />

                <HowBooking/>

                <HowAppointment/>

                <FreqAskQuestion/>

                <Footer/>

            </div>
        </>
    )
}

export default SkinCondition
