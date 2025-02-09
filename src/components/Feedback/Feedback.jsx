import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={styles.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
