import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./styles";

const CustomLoader = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(5);
  useEffect(() => {
    let id: any;
    if (progress < 100) {
      id = setTimeout(() => {
        setProgress((prev) => prev + 5);
        setBuffer((prev) => prev + 5);
      }, 500);
    }
    return () => {
      if (progress >= 100) clearInterval(id);
    };
  }, [progress]);
  return (
    <LinearProgress
      sx={styles.linearProgressBar}
      variant="buffer"
      valueBuffer={buffer > 100 ? 100 : buffer}
      value={progress > 100 ? 100 : progress}
    />
  );
};

export default CustomLoader;
