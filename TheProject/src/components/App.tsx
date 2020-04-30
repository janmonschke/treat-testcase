import React, { useState, useCallback } from "react";
import { TreatProvider } from "react-treat";
import { redTheme, greenTheme } from "./theme.treat";

import { Box, SimpleText } from "thecomponents";
import { TextComponent } from "./TextComponent";

interface AppProps {
  name: string;
}

export default function App({ name }: AppProps) {
  const [theme, setTheme] = useState(greenTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme === greenTheme ? redTheme : greenTheme);
  }, [theme]);

  return (
    <TreatProvider theme={theme}>
      <TextComponent>Hello {name}!</TextComponent>

      <Box padding="large" margin="xlarge">
        Imported Box component
      </Box>

      <SimpleText>Imported SimpleText</SimpleText>

      <button onClick={toggleTheme}>Toggle theme</button>
    </TreatProvider>
  );
}
