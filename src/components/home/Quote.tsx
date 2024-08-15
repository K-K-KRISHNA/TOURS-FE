import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./styles";

const quotes = [
  "Join us on a spiritual quest to the heart of divinity, where each destination is a gateway to bliss.",
  "Embark on a journey of self-discovery and spiritual growth with us.",
  "Experience the profound wisdom and insights of our spiritual journey.",
  "Discover the beauty and depth of our spiritual path with us.",
  "Join us on a transformative journey of self-discovery and spiritual growth.",
];
const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const Quote = () => {
  const [quote, setQuote] = useState<string>(randomQuote());

  useEffect(() => {
    setTimeout(() => {
      setQuote(randomQuote());
    }, 5000);
  }, []);
  return (
    <Typography
      textAlign="center"
      fontSize={"1.3rem"}
      sx={styles.quote}
    >{`"${quote}"`}</Typography>
  );
};

export default Quote;
