import React from "react";

import getTodaysQuote from "./QuoteData.js";
import styles from "./QuoteOfDay.module.css";

const QuoteOfDay = () => {
  return (
    <div className={styles.quote_block}>
      <h1 className={styles.quote_title}>Quote Of The Day</h1>
      <p className={styles.quote_para}>"{getTodaysQuote()}"</p>
    </div>
  );
};

export default QuoteOfDay;
