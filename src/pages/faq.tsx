//import text from "../assets/text.json";
import "./faq.scss";

interface QuestionProps {
    question: JSX.Element;
    answer: JSX.Element;
}

function Question(props: QuestionProps) {
    return (
        <>
            <div class={"question"}>{props.question}</div>
            <div class={"answer"}>{props.answer}</div>
        </>
    );
}

export default function Faq() {
    const q1: JSX.Element = <>How much does the uniform cost?</>;
    const a1: JSX.Element = (
        <>
            Typically uniform cost is $40. This price can vary by size. Contact us to
            get an exact price.
        </>
    );

    const q2: JSX.Element = <>What is your tuition rate?</>;
    const a2: JSX.Element = (
        <>
            We currently offer classes to ages as low as 4 years old, at a rate of
            $125 a month. We offer one free trial class before your payment. Please
            contact us on our facebook page to sign up!
        </>
    );
    const q3: JSX.Element = <>What is your class schedule</>;
    const a3: JSX.Element = (
        <>
            <p class={"bold"}>Monday, Tuesday Thursday:</p>
            <p>White – Yellow Jr’s – 5:30 – 6:10 PM</p>
            <p>Orange and Up Jr’s – 6:20 – 7:10 PM</p>
            <p>Adults and Teens, all ranks – 7:20 – 8:30 PM</p>
            <p class={"bold"}>Mondays, and Thursdays:</p>
            Panther Club 4 – 6 Yr Old – 5:00- 5:25 PM
        </>
    );

    const questions = [q1, q2, q3];
    const answers = [a1, a2, a3];

    let rows = [];
    for (let i = 0; i < 3; i++) {
        rows.push(
            <Question question={questions[i]} answer={answers[i]}></Question>
        );
    }

    return (
        <div class={"page"}>
            <h1>FAQ</h1>
            <div class={"questions"}>{rows}</div>
        </div>
    );
}
