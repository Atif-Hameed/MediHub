import React from 'react'
import Hero from '../../Components/Hero'
import Questions from '../../Components/Questions'
import QuestionsSmall from '../../Components/QuestionsSmall'
import HowBooking from '../../Components/HowBooking'
import HowAppointment from '../../Components/HowAppointment'
import FreqAskQuestion from '../../Components/FreqAskQuestion'
import Footer from '../../Components/Footer'

const Digestive = () => {
    return (
        <>
            <div>
                <Hero
                    heading="Digestive Issues"
                />

                <Questions
                    question1="What are skin conditions?"
                    des1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus"
                    
                    question2="What are the common signs?"
                    des2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                    
                    question3="What forms of skin condition are there??"
                    des3="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                />

                <QuestionsSmall
                question1 = "What are doctor’s notes?"
                des1 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

                question2 = "Can an online doctor give me a sick note?"
                des2 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

                question3 = "What will my online doctor’s appointment be like?"
                des3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru."

                question4 = "Is my information secure and protected?"
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

export default Digestive
